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
var hashed = "";
var handleBcrypt = function () {
    var password = document.getElementById("password").value;
    fetch("http://localhost:8000/bcrypt", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password: password })
    }).then(function (res) {
        return res.json().then(function (data) {
            document.getElementById("passwordDis").innerHTML = password;
            document.getElementById("passwordUtfDis").innerHTML = data.utf;
            document.getElementById("span").innerHTML = data.salt;
            document.getElementById("hashed").innerHTML = data.hashed;
            hashed = data.hashed;
        });
    });
};
var getPass = function () {
    var body = {
        password: document.getElementById("password").value,
        hashed: hashed
    };
    fetch("http://localhost:8000/decode", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(function (res) {
        return res.json().then(function (data) {
            document.getElementById("passBack").innerHTML = data.password;
        });
    });
};
