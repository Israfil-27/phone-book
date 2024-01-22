const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const tel = document.querySelector("#tel");
const email = document.querySelector("#email");
const tBody = document.querySelector("tbody")
const saveBtn = document.querySelector("#save-button")
const modifayButton = document.querySelector("#edit-edit");
const xButton = document.querySelector("#x");
let userDataObj = [];



saveBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    newUser()
    createUserTable(userDataObj)
    editInputImport()
})


function newUser() {
    // dom - dan gələn (name.value)-sunu göturəm yeni array yaradiram ve (userdataobj əlavə edirəm) (trim())- funksiyasi (istifadəci tərəfindən göndərilən bosluqlari doldurur)
   let user={
    name:name.value.trim(),
    surname:surname.value.trim(),
    tel:tel.value.trim(),
    email:email.value.trim()
}
    userDataObj.push(user)
}
function createUserTable(items) {
    tBody.innerHTML=""
    items.forEach((item) => {
        const tr =document.createElement("tr")
        tr.classList="hi"
        tr.innerHTML=`
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.tel}</td>
        <td>${item.email}</td>
        <td><button type="button" class="remove">Remove</button> <button type="button" class="edit">edit</button></td>
        `
        tBody.append(tr)
    });
    inputReset()
    remove()

}
function inputReset() {
    name.value="",
    surname.value="",
    tel.value="",
    email.value=""
}
let index;
function editInputImport() {
    const editsButtons = document.querySelectorAll(".edit")
    editsButtons.forEach((item,indexBtn)=>{
        item.addEventListener("click",()=>{
           index=indexBtn
           name.value=userDataObj[indexBtn].name
           surname.value=userDataObj[indexBtn].surname
           tel.value=userDataObj[indexBtn].tel
           email.value=userDataObj[indexBtn].email
           saveBtn.style.display = "none";
           modifayButton.style.display = "block";
           xButton.style.display = "block";
        })
    })
}

function editUserData() {
    userDataObj[index]={
        name:name.value,
        surname:surname.value,
        tel:tel.value,
        email:email.value
    }
    createUserTable(userDataObj)
}
modifayButton.addEventListener("click",()=>{
    editUserData()
})
xButton.addEventListener("click", () => {
    modifayButton.style.display = "none";
    x.style.display = "none";
    saveBtn.style.display = "block";
  });
function remove() {
    const removeBtn = document.querySelectorAll(".remove")
    removeBtn.forEach((item,indexBtn)=>{
        item.addEventListener("click",()=>{
            index = indexBtn
            userDataObj = userDataObj.filter((i, idx) => index !== idx);
            createUserTable(userDataObj)
        })
    })
}

function serach() {
    const search = document.querySelector("#search");

    search.addEventListener("input",(e)=>{
        const value = e.target.value
        let usernew=[]
        let newarr=userDataObj.map((user)=>{
            if (user.name === value) {
                usernew.push(user)
                createUserTable(usernew)
            }
            else{createUserTable(userDataObj);}
        })
        console.log(newarr);
    })

}
serach()