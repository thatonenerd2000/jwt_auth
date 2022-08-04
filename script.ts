const handleSubmit = () => {
  let username: string = (document.getElementById("username") as HTMLInputElement).value;
  fetch("http://localhost:8000/jwt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  }).then((res) =>
    res.json().then((data) => {
      document.getElementById("encodedDis").innerHTML = data.encoded;
      document.getElementById("decodedDis").innerHTML = data.payload.username;
    })
  );
};

let hashed: string = "";

const handleBcrypt = () => {
  let password: string = (document.getElementById("password") as HTMLInputElement).value;
  fetch("http://localhost:8000/bcrypt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  }).then((res) =>
    res.json().then((data) => {
      document.getElementById("passwordDis").innerHTML = password;
      document.getElementById("passwordUtfDis").innerHTML = data.utf;
      document.getElementById("span").innerHTML = data.salt;
      document.getElementById("hashed").innerHTML = data.hashed;
      hashed = data.hashed;
    })
  );
};

const getPass = () => {
  const body = {
    password: (document.getElementById("password") as HTMLInputElement).value,
    hashed: hashed,
  };
  fetch("http://localhost:8000/decode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) =>
    res.json().then((data) => {
      document.getElementById("passBack").innerHTML = data.password;
    })
  );
};
