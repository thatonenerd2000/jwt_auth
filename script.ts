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
