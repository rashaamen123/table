/*
Using HTML DOM, make the webpage works as the attached video.
Don't change the html file content, nor the CSS file content.
Notes:
- use querySelector to get the elements (id, class);
- The users list heading exists in the html file, but it is hidden. When you add data display it (using HTML DOM Style.property)
- You should check the length if the username and the email values to know if they have a value.
- The error message is styled already in the html file, just use it.
- Use the createElement and appendChild methods, to add the values in the list
- The id is generated automatically starting from "1"
*/

// get Parent Box
const userList = document.querySelector(".users-list");
const parent = document.querySelector(".user-info");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const submit = document.querySelector(".add-user-btn");
const errMsg = document.querySelector(".error-msg");
// const contaienr = document.querySelector(".wrapper")
// contaienr.style.minHeight="100vh";
// contaienr.style.height="auto";

const errText = document.createTextNode("please fil all the fields ..");

// let arr = [];

submit.onclick = function () {
  console.log(usernameInput.value);
  if (usernameInput.value == "" || emailInput.value == "") {
    errMsg.appendChild(errText);
  } else{
    userList.style.display = "block";
    errText.remove();
    // const value = {
    //   id: arr.length + 1,
    //   userName: usernameInput.value,
    //   email: emailInput.value,
    // };
    // arr.push(value)
    // userInfoParent.innerHTML = ""
    // for(let i = 0; i<=arr.length; i++)
    // {
    //   let data = arr[i]
    //   createRow(data.id, data.userName, data.email)
    // }
  }
};

// create new element
// create box of data
// const userInfoParent = document.createElement("div");
// userInfoParent.id = "userInfo";

// function createRow(ID, userName, Email) {
//   const userInfoBox = document.createElement("div");
//   userInfoBox.classList.add("row");

  // create text
  // const textID = document.createTextNode(ID);
  // const textName = document.createTextNode(userName);
  // const textEmail = document.createTextNode(Email);

  // create data
  // const id = document.createElement("p");
  // const username = document.createElement("p");
  // const email = document.createElement("p");
  // id.classList.add("mb-2");
  // username.classList.add("mb-2");
  // email.classList.add("mb-2");


  // create container text
  // const idBox = document.createElement("div");
  // const usernameBox = document.createElement("div");
  // const emailBox = document.createElement("div");
  // idBox.classList.add("col-2");
  // usernameBox.classList.add("col-2");
  // emailBox.classList.add("col-2");

  // add data to userRow
  // userInfoParent.appendChild(userInfoBox);

  // id.appendChild(textID);
  // username.appendChild(textName);
  // email.appendChild(textEmail);

  // idBox.appendChild(id);
  // usernameBox.appendChild(username);
  // emailBox.appendChild(email);

  // userInfoBox.appendChild(idBox);
  // userInfoBox.appendChild(usernameBox);
  // userInfoBox.appendChild(emailBox);

  // return userInfoBox;


// add info box to parent
// parent.appendChild(userInfoParent);
