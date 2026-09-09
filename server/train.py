from sentence_transformers import SentenceTransformer
import pandas as pd
import numpy as np


model = SentenceTransformer("all-MiniLM-L6-v2")

df  = pd.read_csv("./data.csv")

X  = model.encode(
    df["text"].tolist(),
    show_progress_bar=True
)

Y = df["label"].to_numpy()


print(X.shape)
print(Y.shape)

weights = np.zeros(X.shape[1])
bias = 0.0

def sigmoid(z):
    return 1 / (1+np.exp(-z))

lr = 0.01
epochs = 1000


for epoch in range(epochs):
    z =  X @ weights + bias
    predictions = sigmoid(z)
    dw = (X.T @ (predictions - Y)) / len(Y)
    db = np.mean(predictions - Y)

    weights -= lr * dw
    bias -= lr * db

np.save("weights.npy", weights)
np.save("bias.npy", np.array([bias]))

print("done")


