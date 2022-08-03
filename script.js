var handleSubmit = function () {
    var username = document.getElementById("username").value;
    var data = {
        username: username
    };
    fetch('http://localhost:8000/jwt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })
    });
};
