const input = document.getElementById("todo");
const close = document.getElementsByClassName("close");
const li = document.getElementsByClassName("to-do");
const btn = document.getElementById("btn");
const list = document.getElementById("todo-list");

btn.addEventListener("click", ()=>{
    let li = document.createElement("li");
    let value = input.value;
    let task = document.createTextNode(value);
    li.appendChild(task);
    input.innerText = "";
    li.classList.add("divider");
    list.appendChild(li);
    console.log(task)
});
