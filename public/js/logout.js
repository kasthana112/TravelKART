const logoutButton = document.getElementById("logout");

function handleLogout() {
    localStorage.removeItem("token");
    window.location.replace("/login");


  fetch("/logout", {
    method: "POST"
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to logout");
    }

    return response.json();
  })
  .catch(error => {
    console.error(error);
    window.location.replace("/login");
  });
}



logoutButton.addEventListener("click", handleLogout);


