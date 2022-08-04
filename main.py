import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
import jwt
import bcrypt

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

origins = [
    "*"
]

encoded: any = ""
decoded: any = ""

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
def encode(username: dict | None = None) -> dict:
    payload = {
        'username': username['username'],
    }
    encoded = jwt.encode(payload, '1o112ooo', algorithm='HS256')
    decoded = jwt.decode(encoded, '1o112ooo', algorithms=['HS256'])
    return {
        "encoded": encoded,
        "payload": decoded
    }


@app.post("/bcrypt")
def check(password: dict | None = None) -> dict:
    salt = bcrypt.gensalt(12)
    utf = password['password'].encode('utf-8')
    hashed = bcrypt.hashpw(utf, salt)
    return {
        "salt": salt,
        "utf": utf,
        "hashed": hashed
    }


@app.post("/decode")
def getBackPass(hash: dict | None = None) -> dict:
    password = bcrypt.checkpw(hash['password'].encode(
        'utf-8'), hash['hashed'].encode('utf-8'))
    return {
        "password": password
    }
