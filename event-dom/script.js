

const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const parent = document.querySelector(".parent")
const text = document.querySelector(".text")
const red = document.querySelector(".red")

// call back function
// input.addEventListener("keydown", (e)=>{
//     console.log(e.target);
    
// })

parent.addEventListener("click",(e)=>{
    console.log("parent");
    
})

btn.addEventListener("click", (e)=>{
    e.stopPropagation()
    console.log(typeof parent.innerHTML);
    text.classList.toggle("red")
})

// innerText, textContent, và innerHTML

// element.style.tên-css

// add class, remove class, toggle trong js

// getAttribute , setAttribute
text.setAttribute("class", "red")
console.log(text.getAttribute("id"));
