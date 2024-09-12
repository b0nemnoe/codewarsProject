function lekerdezes() {
    let id = document.getElementById("data-id").value;
    console.log(id)
    fetch(`https://www.codewars.com/api/v1/users/${id}`)
  .then(response => {
    return response.json();
  })
  .then(user => {
    document.getElementById("selectedUser").style.display = "block"    
    document.getElementById("selectedUser").innerHTML = kiiras(user);
  })
  .catch(error => {
    alert("Hiba történt.", error)
  });
  
  };
  function kiiras(user) {
  let ki = "";
  console.log(user)
  for (const lang of user.ranks.languages) {
    ki += `${lang}: ${lang.score}<br>`;
    console.log(ki)
  }
  return ki;
  };