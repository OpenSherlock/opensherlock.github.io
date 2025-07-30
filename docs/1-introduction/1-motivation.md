# Motivation
### History
This section, in fact, reflects a personal journey, one of self discovery and emerging interests.  It will read more like a personal journey than a scholarly research effort, but scholarly research did, in fact play a role, as the tale unfolds.
#### In the Beginning…
In the late 1970's and early 1980s, I (Jack Park) was building wind power systems which needed access to specialized weather monitoring stations which measure wind speed and direction, among other things.  I started building microprocessor-based systems for that purpose. Over time, I was asked if my stations could monitor data for fruit frost and irrigation prediction by farmers.  That led to stacks of printouts of weather data, and the question was asked: what else can we do with this data?

I discovered an article in Byte Magazine about "expert systems"; it had a Basic language version of a Lisp program which guesses which animal you are thinking about.  I transliterated that game into Forth, the language I was using in my weather stations.

I then discovered a collection of rules about weather prediction, so I put them into my expert system, and offered to describe that program to the Dr. Dobb's Journal (a print magazine at the time).  They offered to print it, but since they could not pay for the piece, I could have a free ad to sell my software.   They gave me the cover of that issue.  I sold 4 copies of my system.

One copy went to a member of the PhD thesis committee of an Air Force Captain.  That captain phoned  me and said he was using my system to teach a course in knowledge engineering, and asked if I could adapt it to his PhD research.

That phone call led to a phone call from a member of the  flight controls division at an air force base, which led to a contract to do a study of ways to incorporate AI in flight controls.  Ultimately, that grew to a project where my expert system could detect unusual events in the data flowing in fighter jets, and suggest changes to the flight control models (called "control laws") which affect how pilot control inputs affect control actions. An example of this is the loss of one flight control, say, a rudder, which means changing the control laws for the ailerons to compensate.

When the captain graduated, he hired me as a visiting scholar in his materials lab, with an immediate project to figure out how to improve the process by which carbon/epoxy aerospace components are cured in an autoclave (a sometimes gigantic pressure cooker).  

At the air force base, I met Ken Forbus, freshly graduated from MIT, talking about his dissertation topic, qualitative process theory (QPT).  QPT makes specific ontological commitments to a way to model process: actors, relations, states, and process rules.  I chose to use QPT as my expert system for the autoclave project.  It worked far better than any of us imagined it could.

In that same time period, I got a copy of a book Machine Learning, and read a chapter by Douglas Lenat about how his Eurisko program used heuristics (rules) to perform acts of discovery on its own knowledge base, and even its rules.

All of that motivated a new question: what happens when you combine elements of Eurisko's architecture with QPT?

That program became The Scholar's Companion (TSC), also written in Forth, parts of which have more recently been recoded in Java.  

When the autoclave project ended, I was invited to become a graduate assistent professor at a university, where I taught a course in theory formation.  I was evolving TSC as well, but ended up dropping out of the course to fight Leukemia.  This is where things get interesting - at least for me.

I invited a UCLA med school professor Robert Trelease to learn how to use TSC, and he chose to work on a knowledge base I had started, on immune response to viral and bacteria attack. It built a QPT model of the sequence of events which occur when process rules react to a set of intial conditions: viral or bacterial antigen.  Leukemia is a blood cancer, meaning your own immune cells are not working properly; technically, you are an immunocompromised host. $50 word which says you have a weak immune system.

On mounting the best offense I could to the Leumemia, I was injecting interferon, naturally made by your cells when they are under viral attack. Messages from interferon go to the brain which gives you that "viral syndrome" - mostly to make you stay in bed, and to other cells to  say "don't divide".  Cell division is what lets viral load burst out of a cell and spread.  Slow that down, and the rest of the immune system eventually takes out the infection.

Slowing down cell division means slowing down one critical immune response: b-cells are the cells which identify antigen, and mark it for t-cells to perform the killing process.  That's the 1000-foot level, but this is clear: interferon makes it more difficult for timmune system to respond, but that response is necessary.  One way to speed b-celis up is to raise body temperature, which is why you get a fever when infected.

Putting that all together, I was taking high dose antioxidents, just like many internet websites now advocate.  Here's the rub:

When you are an immunocompromised host, high dose antioxidants are contraindicated.  I did not know that. In the early phase of fighting Leukemia, I experiencer recurrent bouts of pneumonia, with hospital visits for that reason.

I asked my new TSC immune response model what it does with a bacterial infection.  One of the model's nodes said that t-cells use reactive oxygen to attack the antigen.  In the case of Leukemia, it's not bacterial antigen, but, instead, immune cells which are otherwise dead as the target.

That got me thinking: why am I taking antioxidants?

I spent a day at a research library and found nothing to suggest otherwise.  I suggested this idea to my physician who immediately recognized that as a new way to think about my situation.  I went off antioxidants; now, no more bouts of pneumonia and hospital visits.

What I just said is this: there is a powerful motivation to build and harness technological artifacts which augment human capabilities. Artifacts which rely on scholarship that is traceable in the system.
#### More Recently…
All of the previoius section took place between late 1970s to around 2000.  By then, I was programming in Java, built expert systems for banks and hospital informatics.  In that year, I got involved with Steve Newcomb and others on an international committee to transliterate SGML topic maps to XML.

By 2003, I stated working at SRI International on a project called Cognitive Assistant that Learns and Organizes (CALO). During that time, I spent time with Douglas Engelbart, the man who, in the early 1960s, started the AI lab at SRI; in 1962, he published a paper which, in my opinion, correctly predicted the internet, and office productivity products. In 1968, he demonstrated those capabilities, long before ithe internet of MS Office. His most profound effect on me was a new understanding and respect for open source software.


By 2006, I started a remote PhD project with Simon Buckingham Shum at The Open University in Milton Keyes, U.K. where I was to explore using topic mapping to improve the signal-to-noise (SNR) in online structured conversations about climate change.

In January of 2010, I defended a thesis proposal which explained the goals and experiment, and a working hypothesis.  What followed that defense is core to the evolution of OpenSherlock
### OpenSherlock, the Origin Story
When you defend a thesis  proposal, you must then defend a dissertation, one which explains the experimental evidence you gained to substantiate your working hypothesis. For me, this meant showing that a topic map could, in fact, perform one particular task on structured conversations, that of finding conversation nodes which say the same thing. For example, consider these two conversation nodes:
- CO2 causes climate change
- Climate change is caused by carbon dioxide

Many will immediately recognize that they say the same thing, albeit in different ways.

Here is how I view this situation:

For a computer to build models of the universe from human discourse, there are certain requirements in play, such as:
- Statements like two above should be normalized to a  common form
- Vocabularies, where synonyms are in play,should also be normalized, which means choosing one of the synonyms as a canonical form.

In the two statements above, we see two issues in play:
- Active and passive predicate form
- Synonyms on CO2

That paints the first part of the picture to be solved for my PhD project.

The second part is to answer this question:
- Can a topic map learn how to read, and learn new knowledge while reading?

The answer to that question lies in two parts:
- Topic maps don't read at all, but they play a role in reading: they are a growing model of some universe, and, just like a human reader, that human's domain knowledge affects the reading process
- In my thesis proposal, I suggested that the project would include an Anticipatory Story Reader, an artifact I had yet to create.  On these pages, it's also known as ASR.

And, the experiment begins.

I did not create a specific topic map, but a topic map simulator which I pre-loaded with a number of named entities, like CO2, and their synonyms.

I then started fabricating an ASR simulator.  It included:
- Lexical rules which could identify named entities and predicate phrases
- A collection of pre-defined predicates together with links to canonical form, and metadata such as active or passive, tense, etc.
- An engine which could then read a collection of statements and apply the ASR mechanism
- A collection of roughly 700 statements I hand copied off web pages

What followed was this: out of the 700 statements, the system found two which said the same thing.  They were both rather obtuse statements about, by other names, cow flatulence and methane.

That convinced me to push forward.

But, I thought my health was turning south, so I dropped out of the PhD program.

I did not stop working on the code.  I went ahead and build the first prototype ASR, which used Java Map objects to simulate the topic map and other features.  It was purely driven by lexical rules.

On February of 2011, I watched IBM's Watson play Jeopardy against two human champions.  I then began to study publications about Watson, and talk with its designers.  That affected some, but not all of my thinking.  But, when it came time to give a name to my project, which, by then was running a full topic map on Apache Solr, the text-indexing database,  I thought "SolrWatson" but was advised by friends at IBM to go with "SolrDrWatson" but another friend said "SolrSherlock". That stuck, and github repos used that name. They have been deleted. That's because I dropped Solr in favor of Elasticsearch.  The name got generalized so OpenSherlock.  The project now uses PostgreSQL.
#### Ongoing…
OpenSherlock outgrew its lexical rules. We now use spaCy pipelines, OpenNLP, and, eventualy, LLMs for their lexical prowess to extract structured resources out of text.

As explained in the ASR chapter, OpenSherlock is designed to remember what it reads, but in a highly compressed form.

In the near term, we are motivated to bring Bayesian belief networks into the platform.
### Summary
OpenSherlock grew, by way of personal experience with TSC's modeling capabilities, to satisfy a need for augmenting human capabilities in the face of truly complex, sometimes urgent situations.  Personal health issues are a solid, boots on the ground example of personal needs.
