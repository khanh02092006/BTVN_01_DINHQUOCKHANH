const userName = document.querySelector(".userName")
const address = document.querySelector(".address")
const password = document.querySelector(".password")
const clear = document.querySelector(".clear")
const sumbit = document.querySelector(".sumbit")
console.log(sumbit);

sumbit.addEventListener("click", (e)=>{
    e.preventDefault()
    
    const input= {
        name: userName.value,
        address: address.value,
        password: password.value
    }
    
    console.log(input);
})

clear.addEventListener("click", (e)=>{
    e.preventDefault()
})
