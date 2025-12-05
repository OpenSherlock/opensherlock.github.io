## Why ASR

Anticipatory Story Reader (ASR) evolved out PhD research on taming online conversations about climate change.  Doing so meant reading nodes in such conversations and isolating those which said the same thing, even if with different sentence structures. Consider the following statements:

- CO2 causes climate change
- Climate change is caused by carbon dioxide

ASR was created in an effort to model how a child both learns how to read, and learns while reading.  It's not all that long before any English-native child would recognize that both statements said the same thing.  To a computer, a goal is to rephrase both as:

- {CO2, cause, climate change}

To do so, both the child and the computer would need some tools such as:

- Recognizing the synonyms CO2 and carbon dioxide
- Recognizing the lexical rules which guide restructuring a passive voice phrase - is cause by - to an active voice phrase, a process which calls for restructuring the sentence itself when swapping in the active predicate.

So, what does *anticipatory* really mean?  It means that some understanding of some situation allows one to predicte, or anticipate what comes next, especially if the situation is sequential, such as reading.  In most living creatures, that "understanding" lies in the form of *models* which are either learned over time, or come through genetic endowments.  Let's stick with the child, which animates this project.

Very early in life, a child is exposed to sights, sounds, smells, and tactile sensations.  Take, for example, the toddler who lives with a dog or cat, maybe is taken to the zoo to see a wide variety of animals and even botannical gardens.  That child will be exposed to the names of and/or types of things they see, but also the sounds, smells, and even tactile sensations (petting a dog, say).  All that is growing a personal model of that child's unverse of experience.

Later in life, the child will encounter a children's reading book, one with big letters, simple sentences, and often an image of the subject of that page.  There is recognition of, say, a dog on the page, and sentences like:

- Spot is a dog.
- See Spot run.

Learning now involves wiring those words to the built in models. That learning is anchored in recognition of an image of a dog running.  In a sense, it's all about *pattern recognition*.

OpenSherlock is inspired by that story.

At this writing, anticipatory reading remains a research project, but the architecture of the platform, especially ASR, is aimed in that direction.