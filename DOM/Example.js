// Selecting Elements
document.getElementById("title");
document.getElementsByClassName("description");
document.getElementsByTagName("p");
document.querySelector("h1");
document.querySelectorAll("p");

// Changing Content
document.getElementById("title").innerText = "Welcome!";
document.querySelector(".description").innerHTML = "<strong>Updated</strong>";

// Changing Styles
document.getElementById("title").style.color = "blue";
document.body.style.backgroundColor = "#f0f0f0";

// Changing Attributes
let button = document.querySelector("button");
button.setAttribute("disabled", true);
button.removeAttribute("disabled");

// Creating and Appending Elements
let newDiv = document.createElement("div");
newDiv.innerText = "This is a new div!";
document.body.appendChild(newDiv);

// Removing Elements
let para = document.querySelector("p");
para.remove();

// Event Handling
document.querySelector("button").addEventListener("click", function() {
  alert("Button was clicked!");
});

// Dynamic To-Do List Example
document.getElementById("addBtn").addEventListener("click", function() {
  const task = document.getElementById("taskInput").value;
  if (task.trim() === "") return;

  const li = document.createElement("li");
  li.innerText = task;

  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
});

// Real-Time Clock Example
setInterval(() => {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}, 1000);
