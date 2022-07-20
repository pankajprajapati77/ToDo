// // step-1
// const addbtn = document.querySelector(".add-btn");
// const modalCont = document.querySelector(".modal-cont");
// const allpriorityColors = document.querySelectorAll(".priority-color");
// let colors = ['lightpink', 'lightgreen', 'lightblue', 'black'];
// let modalPriorityColor = colors[colors.length - 1];
// let textAreaCont = document.querySelector(".textarea-cont");

// const mainCont = document.querySelector(".main-cont");


// let ismodalpresent = false;
// addbtn.addEventListener("click", function(){
//     if(!ismodalpresent){
//         modalCont.style.display = "flex"; //modal add ho gaya screen pe
//         //ismodalpresent = true;
//     }else{
//         modalCont.style.display = "none";
//         //ismodalpresent = false;
//     }
//     ismodalpresent = !ismodalpresent; //toggling effect
// })

// // step-2
// // console.log(allpriorityColors);
// allpriorityColors.forEach(function(colorElement){
//     colorElement.addEventListener("click", function(){
//         allpriorityColors.forEach(function (prioritycolorelem){
//             prioritycolorelem.classList.remove("active");
//         });
//         colorElement.classList.add("active");
//         modalPriorityColor = colorElement.classList[0];
//     });
// });

// modalCont.addEventListener("keydown", function (e){
//     let key = e.key;
//     if(key == "Shift"){
//         console.log(modalPriorityColor);
//         console.log(textAreaCont.value);
//         createTicket(modalPriorityColor, textAreaCont.value);
//         modalCont.style.display = "none";
//         ismodalpresent = false;
//         textAreaCont.value = "";
//         allpriorityColors.forEach(function (colorElement){
//             colorElement.classList.remove("active");
//         })
//     }
// });

// function createTicket(ticketcolor, data){
//     let ticketcont = document.createElement("div");
//     ticketcont.setAttribute("class", "ticket-cont");
//     ticketcont.innerHTML = `
//         <div class="ticket-color ${ticketcolor} "></div>
//         <div class="ticket-id"></div>
//         <div class="task-area">${data}</div>
//         `;

//     mainCont.appendchild(ticketcont);    
// }

var uid = new ShortUniqueId();
const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
let colors = ['lightpink', 'lightgreen', 'lightblue', 'black'];
let modalPriorityColor = colors[colors.length - 1]; //black
let textAreaCont = document.querySelector(".textarea-cont");

const mainCont = document.querySelector(".main-cont");

let ticketsArr = [];


let isModalPresent = false;
addBtn.addEventListener('click', function () {
    if (!isModalPresent) {
        modalCont.style.display = "flex"; //modal add ho gya screen pe
        // isModalPresent = true;
    } else {
        modalCont.style.display = "none";
        // isModalPresent = false;
        
    }
    isModalPresent = !isModalPresent; //toggling effect 
})



console.log(allPriorityColors);

allPriorityColors.forEach(function (colorElement) {
  colorElement.addEventListener("click", function () {
    allPriorityColors.forEach(function (priorityColorElem) {
        priorityColorElem.classList.remove("active");
    });
      colorElement.classList.add("active");
      modalPriorityColor = colorElement.classList[0];
  });
});


modalCont.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key == "Shift") {
      console.log(modalPriorityColor);
      console.log(textAreaCont.value);
      createTicket(modalPriorityColor, textAreaCont.value);
      modalCont.style.display = "none";
        isModalPresent = false;
        textAreaCont.value = "";
        allPriorityColors.forEach(function (colorElem) {
            colorElem.classList.remove("active");
        })
    }
});

function createTicket(ticketColor, data, ticketId) {
    let id = ticketId || uid();
    let ticketCont = document.createElement("div"); //<div></div>
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor} "></div>
        <div class="ticket-id"></div>
        <div class="task-area">${data}</div>
    `;

    mainCont.appendChild(ticketCont);
}
//if ticket is being created for the first time, then ticketid would be undefined
if(!ticketId){
    ticketsArr.push({ticketColor, data, ticketId: id});
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
}
