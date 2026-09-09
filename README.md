# TextSignal Backend

A simple text classification backend that predicts whether content is **USEFUL** or **NOT USEFUL**.

### Tech Stack

* Python
* FastAPI
* Sentence Transformers
* NumPy
* Pandas

### How it works

```text
Text
 ↓
all-MiniLM-L6-v2
 ↓
384D Embedding
 ↓
Logistic Regression
 ↓
Probability
 ↓
USEFUL / NOT USEFUL
```
### Run

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

