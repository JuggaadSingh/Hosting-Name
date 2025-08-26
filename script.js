async function getGithubData() {
    try {
      const response = await fetch("https://api.github.com/users/JuggaadSingh"); 
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      document.getElementById("username").innerHTML = data.login;
      document.getElementById("repos").innerHTML = data.public_repos;
      document.getElementById("followers").innerHTML = data.followers;
      document.getElementById("profile").href = data.html_url;

    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  }


  getGithubData();
