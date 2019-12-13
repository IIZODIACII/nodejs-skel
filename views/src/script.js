let url = "http://localhost:5000/all";
fetch(url, {
  mode: "cors",
  method: "GET"
})
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response.users);
  })
  .catch(error => console.log("Connection failed : " + error.message));
