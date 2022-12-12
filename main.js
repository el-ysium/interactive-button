const btn = document.querySelector("#btn");
const view = document.querySelector("#view");
const sbtn = document.querySelector("#sbtn");


// Using event listners
view.style.display = "none";


btn.addEventListener("click", (event) => {
    view.style.display = 'block';
    btn.style.display = 'none';
 });

 sbtn.addEventListener("click", (event) => {
    view.style.display = 'none';
    btn.style.display = 'block';
 });