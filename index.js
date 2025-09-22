function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((resp) => resp.json())
    .then((object) => {
      // append the id returned from the server to the DOM
      document.body.innerHTML = object.id;
    })
    .catch((error) => {
      // append the error message to the DOM
      document.body.innerHTML = error.message;
    });
}
