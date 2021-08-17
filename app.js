
function displaydate(){
    let mydate = new Date();
    console.log(mydate);
}

let button = document.getElementById('button')
let head = document.getElementById('h2')


button.addEventListener("click", function(){
    displaydate();
    head.innerText = "The button is clicked"
});
button.addEventListener("mouseout", function(){
    button.style.background = "white";
    button.style.transform = "scale(1)";
    button.innerText = "click here";
    button.style.boxShadow = "0px 0px 0px transparent";
    console.log("Now mouse is out")
});
button.addEventListener("mouseover", function(){
    button.style.background = "red";
    button.innerText = "clicked";
    button.style.transform = "scale(1.1)";
    button.style.boxShadow = "0px 1px 5px black";
    console.log("Now mouse is on the button")
});
// document.getElementById("button").addEventListener("mouseout", function(){
//     console.log("Now mouse is out")
// });
// document.getElementById("button").addEventListener("mouseout", function(){
//     console.log("Now mouse is out")
// });
