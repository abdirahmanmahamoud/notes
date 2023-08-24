const notesContainer = document.querySelector(".notes-container");
const CreateBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
let imgDelete = document.querySelector("#delete");

imgDelete.addEventListener("click", () => {
  notesContainer.style.display = "none";
});

CreateBtn.addEventListener("click", () => {
  let inputB0X = document.createElement("p");
  let img = document.createElement("img");
  inputB0X.className = "inpute-box";
  inputB0X.setAttribute("contenteditable", "true");
  notesContainer.appendChild(inputB0X).appendChild(img);
  notesContainer.style.display = "block";
});

// // notesContainer.addEventListener("click", function(e){
// //     if(e.target.tagName === "IMG")
//      e.target.parentElement.remove( )
// // })
