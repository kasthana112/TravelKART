// const logoutButton = document.getElementById("logout");

// function handleLogout() {
//     localStorage.removeItem("token");
//     window.location.replace("/login");


//   fetch("/logout", {
//     method: "POST"
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Failed to logout");
//     }

//     return response.json();
//   })
//   .catch(error => {
//     console.error(error);
//     window.location.replace("/login");
//   });
// }

// logoutButton.addEventListener("click", handleLogout);

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);


