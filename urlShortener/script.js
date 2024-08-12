const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const longUrl = document.getElementById('longUrl').value.toString();
    console.log("i am working")  
        const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;
        console.log(apiUrl)
        console.log("i am working")
        const shortenUrl = document.getElementById("shortened_url");

        fetch(apiUrl)
            .then(response => (response.text()))
            .then(data => {
                shortenUrl.value = data;
            })
            .catch(error => {
                console.log(error.toString())
                shortenUrl.value = "An error occurred";

            })
    // return "submit successful";
});
