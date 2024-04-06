function submitData(username, email){
    
const secondParameter = {
    method: "POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: `${username}`,
        email: `${email}`,
    })
}
  fetch("http://localhost:3000/users", secondParameter)
  .then(response => response.json())
  .then(data => {
    id = data.id;
    document.body.append(id);
  })
  .catch(error => {document.body.append(error.message)}) 
}
submitData("username", "email");