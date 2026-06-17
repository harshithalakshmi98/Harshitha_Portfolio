# 09 — ML, NLP, Deep Learning & Computer Vision (Interview Q&A)

Covers MSc coursework + ANN/PSO, F21AA, Crop AI projects.

---

## Machine learning foundations

**Q: Bias-variance tradeoff?**  
**A:** High bias = underfitting (too simple); high variance = overfitting (memorizes). Balance with model complexity, regularization, more data.

**Q: Overfitting signs and fixes?**  
**A:** Train great, val poor → more data, dropout, regularization, simpler model, early stopping, cross-validation.

**Q: Cross-validation?**  
**A:** Split data into k folds; train on k-1, validate on 1; rotate. Stratified CV preserves class ratios — critical for star ratings.

**Q: Precision, recall, F1?**  
**A:** Precision = of predicted positives, how many correct. Recall = of actual positives, how many found. F1 = harmonic mean. Use when classes imbalanced.

**Q: Confusion matrix?**  
**A:** Table of true vs predicted classes; shows which stars get confused (2 vs 3).

**Q: Accuracy vs macro-F1?**  
**A:** Accuracy misleading on imbalance. Macro-F1 treats each class equally.

---

## NLP (F21AA focus)

**Q: Tokenization?**  
**A:** Split text into words/subwords. NLTK `word_tokenize`; transformers use WordPiece/BPE subwords.

**Q: Stopwords?**  
**A:** Common words removed (the, is) — sometimes keeping negation ("not") matters; don't blindly strip for sentiment.

**Q: Stemming vs lemmatization?**  
**A:** Stemming chops suffixes (running→run); lemmatization uses dictionary (better, runs→run).

**Q: Bag of words vs TF-IDF?**  
**A:** BoW counts words; TF-IDF weights by rarity across corpus.

**Q: N-grams?**  
**A:** Unigram = single words; bigram = pairs ("not good") captures local context cheaply.

**Q: Word embeddings?**  
**A:** Dense vectors where similar words are close (GloVe, Word2Vec). Better than sparse TF-IDF for semantics.

**Q: Logistic Regression for text?**  
**A:** Linear classifier on high-dim sparse features; strong baseline, fast, interpretable coefficients.

**Q: SVM intuition?**  
**A:** Finds maximum-margin boundary between classes; effective in high dimensions with kernel trick.

**Q: Naive Bayes?**  
**A:** Assumes feature independence; fast; classic spam filter baseline.

---

## Deep learning

**Q: Neural network in one minute?**  
**A:** Layers of weighted sums + nonlinear activations; trained by backprop and gradient descent to minimize loss.

**Q: Activation functions?**  
**A:** ReLU (most hidden), softmax (multi-class output probabilities), sigmoid (binary).

**Q: Loss for multi-class classification?**  
**A:** Cross-entropy — penalizes wrong confident predictions.

**Q: LSTM vs vanilla RNN?**  
**A:** LSTM has gates to remember long context; vanilla RNN forgets quickly.

**Q: BiLSTM?**  
**A:** Two LSTMs read forward and backward; merge for context from both directions.

**Q: CNN for images (crop disease)?**  
**A:** Convolution filters detect edges/textures/patterns hierarchically; pooling reduces spatial size.

**Q: Transfer learning?**  
**A:** Reuse pretrained weights (ImageNet, BERT) and fine-tune on smaller target dataset.

---

## Transformers (DistilBERT, RoBERTa)

**Q: Why transformers beat RNNs for NLP?**  
**A:** Self-attention models all token relationships in parallel; better long-range context; scales with data/compute.

**Q: What is attention?**  
**A:** Each token weighs importance of other tokens when building representation.

**Q: BERT family?**  
**A:** Bidirectional encoder; pre-trained masked language modeling; fine-tune with classification head.

**Q: DistilBERT vs RoBERTa?**  
**A:** DistilBERT smaller/faster (distilled from BERT); RoBERTa improved training recipe, often stronger but heavier.

**Q: Fine-tuning steps (high level)?**  
**A:** Tokenize → load pretrained model → add classification head → train on labeled reviews with small LR → evaluate macro-F1 → export for inference.

**Q: `max_length` truncation?**  
**A:** Long reviews cut to model limit (512 tokens); trade-off between context and speed.

---

## Topic modelling

**Q: LDA vs NMF?**  
**A:** LDA probabilistic topics; NMF matrix factorization non-negative — both discover themes in text collections.

**Q: Why compare high vs low rating topics?**  
**A:** Reveals drivers of satisfaction/complaint for business insights beyond prediction.

---

## Computer vision (Crop project)

**Q: Pipeline for leaf disease?**  
**A:** Collect images → label 38 classes → augment (rotate, flip, color jitter) → train CNN → evaluate per-class recall → deploy mobile or API.

**Q: Data augmentation why?**  
**A:** More variety without new photos; reduces overfitting to specific backgrounds.

**Q: Crop recommendation features?**  
**A:** N, P, K nutrients, rainfall, temperature, pH — tabular ML (Random Forest, XGBoost, etc.).

---

## ANN + PSO project

**Q: Why PSO for ANN?**  
**A:** Optimize weights/hyperparameters when gradient-free search useful; swarm explores landscape.

**Q: UCI concrete dataset?**  
**A:** Standard regression benchmark; compare MSE/RMSE/R² against literature.

---

## MLOps basics (show maturity)

**Q: Model drift?**  
**A:** Data distribution changes over time; model degrades — monitor input stats and performance.

**Q: Model card?**  
**A:** Document intended use, training data, metrics, limitations, ethical risks.

**Q: A/B testing models?**  
**A:** Route traffic fraction to new model; compare business metrics safely.

---

## Formulas to recognize (not memorize proofs)

- **Softmax:** converts logits to probabilities summing to 1  
- **Cross-entropy:** \(-\sum y \log \hat{y}\)  
- **TF-IDF:** \(tf \times \log(N/df)\)  

---

## Project-linked rapid Q&A

| If they ask… | Point to… |
|--------------|-----------|
| Imbalanced text | F21AA class distribution, macro-F1 |
| Best model | Compare LogReg baseline vs DistilBERT; ensembles on Kaggle |
| Interpretability | TF-IDF coefficients vs attention (limited) |
| Group ML project | F21AA + PG-Group-3 crop |
| Build from scratch | ANN + PSO coursework |

---

## Worked example — confusion matrix (practice aloud)

**Tiny 3-star subset:**

|  | Pred ★1 | Pred ★2 | Pred ★3 |
|--|---------|---------|---------|
| **True ★1** | 900 | 40 | 10 |
| **True ★2** | 50 | 700 | 80 |
| **True ★3** | 5 | 90 | 800 |

- **Accuracy** can look high while star-2 is often confused with 1 or 3  
- **Class 2 recall** = 700 / (50+700+80)  
- **Macro-F1** averages F1 across classes — critical for F21AA imbalance  

**Real company:** Uber/Lyft segment satisfaction models by market; Netflix by genre — same per-class thinking.

> More narrated examples: [`11-real-world-examples-workbook.md`](./11-real-world-examples-workbook.md) Sections A, I.
