# Anticipatory Story Reader

- Why?
- How?
- Underlying algorithms, techniques
### Why
Anticipatory Story Reader (ASR) gets its name from a machine reading process which simulates that of a young child learning to read.  
A primary goal of ASR is to grow and maintain a world model, one which can span many domains of knowledge and discourse.
ASR emerged out of two goals:
- To explore the ways in which a child, at once, learns how to read, and learns by reading
- To remember everything it reads
Those goals entail to important features:
- Anticipatory behavior: dealing with those "expectation failures" which happen when some, say, sentence cannot be processed.  Note that not all sentences can, in fact, be processed into anything which fits OpenSherlock's needs.
- Data compression. Benefits include transparency and tracaability back to sources.
### How: ASR Introduction
A side effect of ASR's processes is that of massive data compression.  ASR is able to remember everything it reads without bloating databases.  It records each sentence one and only one time, but turns unique terms and predicates in that sentence into numeric identifiers just one time. Further processing is based on those identifiers.
Anticipatory behaviors are model driven. That is, a reader's domain model, no matter how complete or sophisticated, is actively engaged in the reading process.  If the reader encounters something it did not expect, meaning, its model did not predict that event, then there is an expectation failure.  How the reader deals  with such failures is one way to think about intelligence gained from experience.  Frequently, a human reader reacts first by re-reading the passage, followed by "looking around" for hints.  In a child's book, pictures or images provide hints.  
In machine reading, as in ASR, there is a cascade of expectation failure handlers, depending on the nature of the failure, ending with "Ask a Human" - that is, create a log of failures not solved for humans to examine.
For humans, one kind of failure is encountering a new word or term.  That might lead to finding the term online or by other means.  For ASR, that's not an expectation failure; the system simply creates a new Dictionary entry for it, and adds it to the WordGram graph.
Another kind of failure is one in which a statment encountered by a human contradicts what her model expected.  For ASR, that's not an expectation failure simply because the system records the new claim for what it is, then connects that claim to the one it contradicts with a "disagreesWith" coherence relation.  It is ASR's task to grow models as complete as possible, not to resolve contradictons.
For ASR, an important expectation failure is one in which an entire sentence does not parse.  That is, no nouns or noun phrases are found, and therefore, no claims are found.  That failure is passed to humans. In fact, not all sentences contain claims.
From that, we see that ASR does not use its growing domain model in the way humans do; humans deal with expectation failures, whereas ASR uses them to grow the model with coherence relations where necessary.
### ASR Agents
ASR is a society of agents, each coordinated by passing messages on topic-centric channels over a Redis database.  In the largest picture, the process begins with document ingestion followed by document processing, then to parsing, and beyond…
#### nlp-harvest
This is the document ingestion process, which reads both PubMed abstracts and PMC full text documents, and converts those to JsonObjects by way of the JSONDocumentObject pojo.  
It then creates database entries for each IDocument represented by that JsonObject. For each paragraph in that IDocument, it creates a database entry based on an IParagraph object.
Finally, it sends each IParagraph's JsonObject out over Redis.
#### nlp-parser
This process reads IParagraph objects in from Redis.
It then passes each through a process which, first, isolates all sentences into an array.  That same process identifies anaphoric references in the paragraph and returns a JsonObject for later use.
For each sentence, a database entry is created based on an ISentence object, and, together with the anaphoric reference object, parsing begins.
Parsing entails three processes:
- OpenNLP processing
- spaCy processing
- LLM processing

Those three processes create JsonObjects which contain a variety of resources, such as
- POS array for all words in the sentence
- Anaphoric reference links
- Identified predicate phrases
- Named entities
- Hearst patterns - automatic detection of hypernyms and hyponyms
- DBpedia and WikiData identifiers
- Other objects…
All named entities and predicate phrases are added to the Dictionary, if not already there, and to the WordGram graph.  Sentence IDs are accumulated in each IWordGram.
Note: 
- Predicate phrases are critical features
- we normalize them.  As an example, the phrase "has frequently been shown to affect"  is normalized to "affects"
- Negative phrases such as "is not connected to" or "does not cause" maps to "notConnectedTo" or "notCause"
- Passive predicates such as "isCausedBy" is mapped to "cause" and a trigger is set to cause a reversal of the triple structure: subject swaps with object. We normalize to active predicates.
A goal of this parsing is to capture frame-like representations, with a simple triple object, e.g. {A, cause, B} being the smallest frame.  Frame structures can be added to the WordGramGraph.
Frame structures are sent to Redis.
#### nlp-world-model
This agent's primary objective is to use frame structures from Redis and create and maintain a graph structure which properly reflects those structures it encounters.
During this process, it may encounter claims which contradict claims it already has stored, at which point, it connects them with appropriate coherence relations.
A proper world model must include authors, their affiliations, and even funding agencies, together with the  documents cited. Each is its own subject.   Wiring them into a graph aids when the system encounters an ambiguity for which it issues an expectation failure.

### Underlying Algorithm Techniques

- TODO
### Glossary
#### Ambiguity
A typical ambiguity occurs when a particular IWordGram's term serves as a label for more than one subject in the world model.
Wikipedia addressed this issue by adding some property to that name, in parentheses, and then offers a "disambiguation" page.
#### Dictionary
A Dictionary provides a way to map a word or term to a numeric identifier, and back.
For each word or term, there will be one and only one Dictionary entry.
#### ExpectationFailure
A general class which can include many failure types, each of which is created by, in general, some failure to parse a sentence.
Over time, the list of failure types will grow.
#### Frame
That term got its name in the 1950's when Charles Fillmore invented Case Frames, which Marvin Minski later just called "Frames".  A Frame if best thought of as a collection of properties and their values, with an identity given to that collection.  The Lisp programming language naturally assembles frames with property lists.
Today, we can represent frames in XML, JSON, and  programmatically in classes which have identy and property lists.
#### Hearst Pattern
Marti Hearst at UC Berkeley is credited with creating a set of syntactic patterns which allow to identify, among other things, hypernyms.  For example, this sentence:
- I have friends such as Sue, Bob, and Joe
can tell ASR that Sue, Bob, and Joe are hypernyms of the concept of "my friends".  If that sentence was processed into the WordGramGraph, each IWordGram would have a hypernym edge to the "my friends" IWordGram.
#### IDocument
This object defines a frame-like container which knows about the document's attributes, such as
- Title
- Abstract (we may not store the text, but rather the IParagraph identifiers related to the abstract)
- Authors and their affiliations
- An array of its IParagraph object identifiers for any body text.
- Citations
Its purpose is to give that document a unique database identity.
#### IParagraph
This object serves to contain:
- The paragraph itself (might not do this because we can reconstruct it from ISentence identifiers)
- An array of its ISentence Identifiers
- Some metadata from parsing
Its purpose is to give that paragraph a unique database identity.
#### ISentence
This object serves to contain:
- The sentence itself  (this may be the only place we actually store a whole sentence
- Some metadata from parsing - note that if a sentence is involved in an ExpectaionFailure, that metadata may be useful in failure handling
Its purpose is to give that sentence a unique database identity.
#### IWordGram
This object is, itself, a tiny frame structure with identity granted to it by the Dictionary.  It contains terminals (single words) or phrases. Thus, e.g., the entire name "George H.W.Bush" would be captured in a single WordGram.  That frame also records the identity of every sentence in which it was encountered. 
If that term happens to be the label in one (or more) subjects in the WorldModel, the identity of those subjects is also recorded.
Features like POS, and others are also recorded.
#### POS
Part of speech, e.g 'noun'. POS parsing typically returns more than just the pos itself, typically including other features.
#### WordGramGraph
A graph of all IWordGram objects. As a graph, its edges include sentence ID values; that is, WordGrams are wired together by the sentences in which the are encountered.
Other edges can include synonyms, hyponyms, and hypernyms, where known.
