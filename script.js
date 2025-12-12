// object array

// Array````   0,1,2,3,4,5
const array = [1,2,3,4,5,6].slice(1,3)
// console.log(array);

// for(let i = 0; i<10; i++){
//     console.log(i);
    
// }

// input
const user = {
    userName: "nguyen van a",
    age: 18,
    sex: "girl",
}

// out put: 
const array1 = ["nguyen van a 1", "nguyen van a 2", "nguyen van a 3"]

function bai_1(){
    let username = user.userName;
    let output = []
    let number = [1,2,3]
    number.forEach((item)=>{
        output.push(`${username} ${item}`)
    })
    console.log(output);
    
}
// bai_1()

function cach2(){
    return [1,2,3].map((item)=> user.userName + " "+  item )
}
// console.log(cach2());

// event trong js

// function nam(){

// }

// nam()

// const button = document.querySelector("#btn")
// console.log(button);

// addEventListener("")
