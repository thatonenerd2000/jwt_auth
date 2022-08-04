var handleSubmit = function () {
    var username = document.getElementById("username").value;
    fetch("http://localhost:8000/jwt", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username })
    }).then(function (res) {
        return res.json().then(function (data) {
            document.getElementById("encodedDis").innerHTML = data.encoded;
            document.getElementById("decodedDis").innerHTML = data.payload.username;
        });
    });
};
