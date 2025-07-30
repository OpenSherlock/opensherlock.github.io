# System Overview
At the highest level, OpenSherlock is a society of agents architecture. Some of its agents are:
- ASR for reading text documents for the purpose of growing and maintaining models in domains of interest
- TopicMap for hosting those models
- TSC for building Qualitative Proceee Theoretic models to add to the TopicMap, and to perform evolutionary discovery of new concepts within those models
- Literature-based Discovery (LBD) to find unconnected ideas in those models
- Deep Question Answering to serve as a kind of research interface into those models.

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
