// Add your code here

// function submitData() {
//   fetch("http://localhost:3000/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     name: "Steve",
//     email: "steve@steve.com",
//   }),
// })};

const formData = {
  name: "Steve",
  email: "steve@steve.com",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

function submitData() {
  return fetch("http://localhost:3000/users", configurationObject)
    .then((res) => res.json())
    .then((object) => addNewContact(object.id))

    .catch((error) => document.body.innerHTML = 'Unauthorized Access')
}

function addNewContact(newID) {
  document.body.innerHTML = newID;
}



submitData("name", "name@name.com")

