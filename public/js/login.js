
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login");

function handleLogin() {
  const username = usernameInput.value;
  const password = passwordInput.value;


  fetch("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to login");
    }
    return response.json();

  })
  .catch(error => {
    console.error(error);
   
    alert(error.message);
  });
}

loginButton.addEventListener("click", handleLogin);


