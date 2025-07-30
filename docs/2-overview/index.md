# System Overview
At the highest level, OpenSherlock is a society of agents architecture. Some of its agents are:
- ASR for reading text documents for the purpose of growing and maintaining models in domains of interest
- TopicMap for hosting those models
- TSC for building Qualitative Proceee Theoretic models to add to the TopicMap, and to perform evolutionary discovery of new concepts within those models
- Literature-based Discovery (LBD) to find unconnected ideas in those models
- Deep Question Answering to serve as a kind of research interface into those models.


### Why Topic Mapping
In general, topic maps started life as advanced indexing for GNU documentation, but have evolved over time to become a powerful subject-centric way to organize information resources.
Our work with topic maps started while working with a committee to map SGML topic maps out to XML, the XTM  project, with its data model: TMDM.
Towards the end of that project, the Topic Maps Reference Model (TMRM) was created as an umbrella for all topic maps data models. What the TMRM accomplished was to generalize a topic map to be three core objects:
- A Topic Map (aka Subject Map) to serve as a container for topics
- Subject Proxy objects, which serve as Topics, containers for several kinds of properties and ther values: those which identify of the subject itself, and important other properties
- A legend which describes the property types (keys) and their values which identify the subject, and a list of the rules which are used against those key-value pairs; that for merging external topics into a given map
Topic maps can be devided into classes called Topic Map Applications (TMAs). TMAs have their own legends.  As an example, a TMA  for people would use different identity properties and rules than one for, say, biomedical topics.
#### TMDM vs TMRM
For OpenSherlock, TMRM allowed a variation from the TMDM in the following sense:
- TMDM says that Associations are not first class objects like Topics
- TMRM does not care about such matters
We use TMRM to our advantage: our Associaions, (aka: Relations, Assertions, Connections) are Topics, first class SubjectProxy objects.
That's because relations, in many cases, are every bit as important as are the actors playing roles in such relationships.  A secondary reason is that some relationships, e.g. {A causes B} can be challenged. 
In OpenSherlock's advanced rendition of the topic mapping paradigm, a relationship, formed by the triple of actor, relation, actor, is fully articulated in the SubjectProxy which represents the relationship itself.  It is addressable, as is any other topic, and can serve as an actor in other relationships.
All relationships, including the trivial taxonomic relation "isA" (subclassOf, instanceOf), have biographies and provenance.  Otherwise, they may just be unjustified guesses.
TMRM allows us another liberty: we don't have to limit any topic to a singular object or relationship; whole graphs of, e.g. events can be subjects.  Consider this sentence:
- Molecule A donates an electron to Molecule B
That happens in the biochemical domain as an oxidation-reduction reaction (ReDox).  An entire constellation of things become known in that event, but it cannot be implemented as a simple triple structure; at the very least, there is an indirect object on that predicate, along with the direct object.
John Sowa invented the Conceptual Graph structure to model complex events and situations. We can add them to our topic map directly.
### Purpose / Benefits / Applications
ToDo

## Architecture

```mermaid
flowchart TD
    Input([Input Text fa:fa-book])
    SentenceReader[Sentence Reader]
    WordGramBuilder[WordGram Builder]
    Dictionary[(Dictionary)]
    SemanticTuple[Semantic Tuple]
    WordGramLists[WordGram Lists]
    Input -- sentence --> SentenceReader
    SentenceReader -- words --> WordGramBuilder
    WordGramBuilder -- word --> Dictionary
    Dictionary -- id --> WordGramBuilder
    WordGramBuilder --> WordGramLists
    WordGramLists -.-> SemanticTuple
```

## Components
- [Anticipatory Story Reader](/overview/asr)
- Long-term memory
- Short-term working memory
