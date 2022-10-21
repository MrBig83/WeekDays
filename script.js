let startDate = document.getElementById("start")
let endDate = document.getElementById("end")

let btn = document.getElementById("btn")

let difference = startDate - endDate

console.log(startDate)

btn.addEventListener("click", function(){
    console.log("click")
    console.log(startDate.value)
    console.log(endDate.value)
    console.log(difference)
})