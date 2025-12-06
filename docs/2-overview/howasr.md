## How ASR

As we said, ASR aims to be anticipatory as it reads text documents to grow models - which are maintained in an advanced topic maps structure and other other structures, to include Bayesian belief networks.

Our diagram showed these primary components:

- Sentence Reader
- WordGram Builder
- Dictionary
- WordGram Graph
- Semantic Tuples

How we use those will be discussed in the following sections, but, to anticipate: we take words or phrases and put them into a dictionary which returns a numeric identifier.  If the dictioary recognizes any word or phrase, it returns its identifier; if not, it returns its identifier and a boolean which says "never seen before".  Novel identifiers allow the system to form a new WordGram (slightly misnamed because it can hold not just words but phrases).  Those WordGrams are wired into a graph by the identity of the sensence in which they were found.  Occasionally, a particular sentence and its wired WordGrams can be isolated as a claim, causal or relational in some other form; from that we form Tuple objects which, over time, can become "SemanticTuples" which are candidates for inclusion in the topicmap.

# Sentence Reader

# Dictionary 

# WordGram Builder

# WordGram Graph

# Semantic Tuples

