import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import jwt

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

origins = [
    "http://localhost:8000",
    "localhost:8000",
    "*"
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def root():
    return {"message": "Hello World"}

@app.post("/jwt")
def encode(username: str):
    payload = {
        'username': username
    }
    return {"encoded": jwt.encode(payload, "1o112ooo", algorithm="HS256")}