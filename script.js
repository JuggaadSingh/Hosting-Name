async function getAge() {
  const name = document.getElementById("nameInput").value.trim();

  if (!name) {
    document.getElementById("nameResult").innerText = "Please enter a name!";
    document.getElementById("ageResult").innerText = "";
    document.getElementById("countResult").innerText = "";
    return;
  }

  const url = `https://api.agify.io?name=${name}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    
    document.getElementById("nameResult").innerText = "Name: " + data.name;
    document.getElementById("ageResult").innerText = "Predicted Age: " + data.age;
    document.getElementById("countResult").innerText = "Count: " + data.count;

  } catch (error) {
    document.getElementById("nameResult").innerText = "Error fetching data!";
    document.getElementById("ageResult").innerText = "";
    document.getElementById("countResult").innerText = "";
    console.error(error);
  }
}
