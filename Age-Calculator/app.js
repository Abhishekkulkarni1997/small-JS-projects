/* const container;
const error;

function getAge(){
    
    
}

function calcAge(){ 
    
}

function displayAge(){
    
    
} */


const DOB = document.getElementById("dob");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");


DOB.addEventListener("change", (event) => {
    let selectedDate = new Date(event.target.value);

    const date_diff = Date.now() - selectedDate;

    let a = new Date(date_diff); // gives us the difference of time in the date format starting fromm 1 Jan 1970 //

    years.textContent = a.getFullYear() - 1970;

    months.textContent = a.getUTCMonth();

    days.textContent = (a.getUTCDate() - 1);
})