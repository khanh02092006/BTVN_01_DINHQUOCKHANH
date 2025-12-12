// arrow function
function sum(){

}

// const suma = ()=>{}
// suma()

const subjects = [
  {
    id: "MTH101",
    name: "Giải tích 1",
    credits: 3,
    teacher: "TS. Nguyễn Văn A",
    room: "A201",
    schedule: "Thứ 2 (7:30 - 9:30)"
  },
  {
    id: "PHY102",
    name: "Vật lý đại cương",
    credits: 4,
    teacher: "ThS. Trần Thị B",
    room: "B105",
    schedule: "Thứ 3 (9:45 - 11:45)"
  },
  {
    id: "CSE103",
    name: "Nhập môn lập trình",
    credits: 3,
    teacher: "ThS. Lê Văn C",
    room: "C302",
    schedule: "Thứ 4 (13:00 - 15:00)"
  },
  {
    id: "ENG104",
    name: "Tiếng Anh 1",
    credits: 2,
    teacher: "Cô Phạm Thu D",
    room: "D110",
    schedule: "Thứ 5 (7:30 - 9:00)"
  }
];

// bai1
// input subjects 
// output ["Giải tích 1","Vật lý đại cương","Nhập môn lập trình","Tiếng Anh 1"]

// const findNameItem = (subjects)=>{
//     return subjects.map((tony)=>tony.name) 
// }
// const output = findNameItem(subjects)
// console.log(output);

// const findNameItem = ()=>{
//     let s = []
//     subjects.forEach((item)=>{
//         s.push(item.name)
//     })
//     console.log(s);
// }
// findNameItem()

// bai2
// input subjects 
// output [{id: "MTH101", name: "Giải tích 1", room: "B105", teacher: "Cô Phạm Thu D"}]

// const bai_2 = ()=>{
//     let arr = []
//     let oject = {}
//     subjects.forEach((item)=>{
//         if(item.id === "MTH101"){
//             oject.id = item.id
//         }
//         if(item.name === "Giải tích 1"){
//             oject.name = item.name
//         }
//         if(item.room === "B105"){
//             oject.room = item.name
//         }
//         if(item.teacher === "Cô Phạm Thu D"){
//             oject.teacher = item.name
//         }
//         arr.push(oject)
//     })
//     return arr[0]
// }
// console.log(bai_2());

const btn = document.querySelector(".btn")
btn.addEventListener("mouseleave", (event)=>{
    console.log("aaa");
    
    
})