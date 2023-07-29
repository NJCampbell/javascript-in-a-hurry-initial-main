//Menu Section

document.querySelector("#open-nav-menu").addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

//Greeting Section

function celsiusToFahr(temperature) {
    let fahr = (temperature * 9 / 5) + 32;
    return fahr;
}
const greetingText = "Good afternoon!";
const weatherCondition = "sunny";
const userLocation = "Mumbai";
let temperature = 25;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${(Math.floor(temperature.toString()))}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(Math.floor(temperature.toString()))}°F outside.`;

//can also use toFixed(1) instead of Math.floor which will determine how many decimals to include

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document.querySelector(".weather-group").addEventListener("click", function (event) {
    // console.log("clicked"); useful for testing functionality
    //celsius
    //fahr
    if (event.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = fahrText;
    }

});

//some coders will simply use 'e'. Use the target.id to pinpoint what is activated, will show in console.
//new Date().getHours()
//new Date().getMinutes()
//new Date().getSeconds()


// console.log("outside the timeout");
// setTimeout(function(){
//     console.log("inside the timeout");
// },3000);
setInterval(function () {
    let localTime = new Date();
    document.querySelector("span[data-time=hours").textContent = localTime.getHours().toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes").textContent = localTime.getMinutes().toString().padStart(2,"0");
    document.querySelector("span[data-time=seconds").textContent = localTime.getSeconds().toString().padStart(2, "0");
}, 1000);
// object
// student = { "name": "John", "yearOfBirth": 1980, "country": "Italy"}
// student['name']
// student.yearOfBirth =====> this is a object property
// student.id = "88b5";  ====> this will add an additional property
