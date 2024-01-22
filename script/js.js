const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const tel = document.querySelector("#tel");
const email = document.querySelector("#email");
const saveButton = document.querySelector("#save-button");
const modifayButton = document.querySelector("#edit-edit");
const xButton = document.querySelector("#x");
const form = document.querySelector("form");
const tbody = document.querySelector("tbody");

let createUser = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  newUser();
  createUserForm(createUser);
  modifay();
  resetInputs();
});

function resetInputs() {
  name.value = "";
  surname.value = "";
  tel.value = "";
  email.value = "";
}

function newUser() {
  const user = {
    name: name.value,
    surname: surname.value,
    tel: tel.value,
    email: email.value,
  };
  createUser.push(user);
}

let index;
function createUserForm(items) {
  tbody.innerHTML = "";
  items.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.surname}</td>
    <td>${item.tel}</td>
    <td>${item.email}</td>
    <td><button type="button" class="remove">Remove</button> <button type="button" class="edit">edit</button></td>
    `;
    tbody.appendChild(tr);
  });
  remove();
}
xButton.addEventListener("click", () => {
  modifayButton.style.display = "none";
  x.style.display = "none";
  saveButton.style.display = "block";
});

function modifay() {
  const edit = document.querySelectorAll(".edit");
  edit.forEach((e, i) => {
    e.addEventListener("click", () => {
      index = i;
      name.value = createUser[i].name;
      surname.value = createUser[i].surname;
      tel.value = createUser[i].tel;
      email.value = createUser[i].email;
      saveButton.style.display = "none";
      modifayButton.style.display = "block";
      xButton.style.display = "block";
    });
  });
}
function editUser() {
  createUser[index] = {
    name: name.value,
    surname: surname.value,
    tel: tel.value,
    email: email.value,
  };
  createUserForm(createUser);
}
modifayButton.addEventListener("click", () => {
  editUser();
});

function remove() {
  const removeButton = document.querySelectorAll(".remove");
  removeButton.forEach((e, i) => {
    e.addEventListener("click", () => {
      index = i;
      createUser = createUser.filter((item, idx) => index !== idx);
      createUserForm(createUser);
      resetInputs()
    });
  });
  console.log(removeButton);
}

// function modifay() {
//   const edits = document.querySelectorAll(".edit");
//   edits.forEach((e, i) => {
//     e.addEventListener("click", () => {
//       index = i;
//       name.value = createUser[i].name;
//       surname.value = createUser[i].surname;
//       tel.value = createUser[i].tel;
//       email.value = createUser[i].email;
//       saveButton.style.display = "none";
//       modifayButton.style.display = "block";
//       xButton.style.display = "block";
//     });
//   });
// }

// modifayButton.addEventListener("click", () => {
//   editUser(index);
// });

// function editUser(index) {
//   createUser[index] = {
//     name: name.value,
//     surname: surname.value,
//     tel: tel.value,
//     email: email.value,
//   };
//   console.log(createUser[index]);

//   createUserForm(createUser);
// }

// function removeUser() {
//   const removeButton = document.querySelector(".remove");
//   removeButton.addEventListener("click",(index)=>{
//     delete createUser[index]
//   })
// }
