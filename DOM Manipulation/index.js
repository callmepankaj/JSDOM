// DOM Manipulation

// 1. GetElementById()
// const title = document.getElementById("main-heading");
// console.log(title);

// 2. GetElementByClassName()
// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

// 3. GetElementByTagName()
// const items = document.getElementsByTagName("li");
// console.log(items);

// 4. querySelector()
// const container = document.querySelector('div');
// console.log(container);

// 5. querySelectorAll()
// const cont = document.querySelectorAll("div");
// console.log(cont);

// Manipulating

// const title = document.querySelector("#main-heading");
// title.style.color='red';
// console.log(title);

// Creating Elements
// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// Adding Elements
// ul.append(li);
// li.append('Man of Steel')

// Another way of adding elements
// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// ul.append(li);
// li.innerText = "X-Men";

// modifying attribute
// li.setAttribute("style", "color:red");
// li.removeAttribute('style'); removing attribute

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'))

//  TO remove elements
// li.remove();

// Parent Node Traversal
// let ul = document.querySelector("ul");
// 2 level up so ul parentnode is body
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement);

// Child Node Traversal
// let ul = document.querySelector("ul");
// console.log(ul.childNodes);

// Sibling Node Traversal
// let ul = document.querySelector("ul");
// console.log(ul.previousSibling);

// ----------------Part 2-----------

// Event Listeners DOM Manipulation

// const buttonTwo = document.querySelector(".btn-2");
// function alertBtn() {
//   alert("I love Java");
// }
// buttonTwo.addEventListener("click", alertBtn);

// Mouseover
// const newBackgroundColor = document.querySelector(".box-3");
// function changeBg() {
//   newBackgroundColor.style.backgroundColor = "blue";
// }
// newBackgroundColor.addEventListener("mouseover", changeBg);

// Hiding content with button
// function showContent() {
//   let x = document.getElementById("myContent");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// =========Event Propagation============
// code for event bubbling
// let div1 = document.querySelector("#div1");
// let div2 = document.querySelector("#div2");
// let div3 = document.querySelector("#div3");

// div1.addEventListener("click", function (event) {
//   alert("Component 1 is clicked");
// });

// div2.addEventListener("click", function (event) {
//   alert("Component 2 is clicked");
// });

// div3.addEventListener("click", function (event) {
//   alert("Component 3 is clicked");
// });

// //  <!-- Javascript code for event capturing -->
// let div4 = document.querySelector("#div4");
// let div5 = document.querySelector("#div5");
// let div6 = document.querySelector("#div6");

// div4.addEventListener(
//   "click",
//   function (event) {
//     alert("Component 4 event clicked");
//   },
//   true
// );

// div5.addEventListener(
//   "click",
//   function (event) {
//     alert("Component 5 event clicked");
//   },
//   true
// );

// div6.addEventListener(
//   "click",
//   function (event) {
//     alert("Component 6 event clicked");
//   },
//   true
// );

// Event Delegation
document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute('id') + ' is clicked');

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});
