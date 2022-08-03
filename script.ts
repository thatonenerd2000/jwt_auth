const handleSubmit = () => {
    let username: string = (document.getElementById("username") as HTMLInputElement).value;
    const data = {
        username: username
    }
    fetch('http://localhost:8000/jwt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
    })

}