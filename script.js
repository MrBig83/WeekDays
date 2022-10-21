let startDate = document.getElementById("start")
let endDate = document.getElementById("end")

let btn = document.getElementById("btn")

//let difference = startDate - endDate

let sDate = Date(startDate.value)
let eDate = Date(endDate.value)
let testDate = new Date(10102022)

console.log(startDate)

btn.addEventListener("click", function(){
    
    console.log(startDate.value)
    console.log(endDate.value)
    //console.log(difference)
    console.log(sDate)
    console.log(eDate)
    console.log(testDate)

    console.log(typeof(startDate))
})