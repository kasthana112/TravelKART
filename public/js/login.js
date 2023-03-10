
const usernameInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login");

function handleLogin() {
  const email = emailInput.value;
  const password = passwordInput.value;


  fetch("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
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


LoginButton.addEventListener("click", handleLogin);
