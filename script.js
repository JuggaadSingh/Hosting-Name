async function getprofile() {
    let username = document.getElementById("username").value;
    let result = document.getElementById("result");

    if(!username){
      alert("Please enter a username");
      return;
    }
    let response = await fetch(`https://api.github.com/users/{username}`);
    if(response.ok){
      let data = await response.json();
      document.getElementById("avatar").src = data.avatar_url;
      document.getElementById("name").innerText = data.name || data.login;
      document.getElementById("link").href = data.html_url;
        result.style.display = "block";
  } else {
    alert("User not found!");
    result.style.display = "none";
  }
        
    


}


  
