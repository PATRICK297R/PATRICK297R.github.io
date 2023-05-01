const users = [
    { username: "Patrick", password: "520199219" },
    { username: "wito69", password: "wito69" },
    { username: "admin", password: "user" }
  ];

 function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let isUserMatched = false;

  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      isUserMatched = true;
      window.location.href = "success.html";
      break; // break out of the loop once a match is found
    }
  }
  
  // check if user is matched or not, and display error message accordingly
  if (!isUserMatched) {
    document.getElementById("eror").innerHTML = "Incorrect Username or Password";
  }
}


  function clearError() {
    const passwordInput = document.getElementById("password");
    passwordInput.classList.remove("error");
    passwordInput.placeholder = "";
  }

