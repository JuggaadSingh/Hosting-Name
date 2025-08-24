const username = "JuggaadSingh";

 


const url = `https://api.github.com/users/JuggaadSingh`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    
    document.getElementById("username").innerText = data.login;
    document.getElementById("repos").innerText = data.public_repos;
    document.getElementById("followers").innerText = data.followers;
    document.getElementById("profile-link").href = data.html_url;
  })
  .catch(error => console.error("Error fetching GitHub data:", error));
