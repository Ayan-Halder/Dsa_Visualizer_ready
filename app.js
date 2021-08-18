
function displaydate(){
    let mydate = new Date();
    console.log(mydate);
}

let button = document.getElementById('btn1')
let head = document.getElementById('h2')
let array = document.getElementsByClassName('arr')

function randomarray(){
    let a = [];
    for(i = 0; i<10; i++) {
        a[i] = Math.floor(Math.random() * 1000);
        document.getElementById('arr'+i).style.width = a[i]+'px';
        document.getElementById('arr'+i).innerText = a[i];
    }

    console.log(a);
}

button.addEventListener("click", function(){
    displaydate();
    randomarray();
    head.innerText = "The button is clicked"
});
// button.addEventListener("mouseout", function(){
//     button.style.background = "white";
//     button.style.transform = "scale(1)";
//     button.innerText = "click here";
//     button.style.boxShadow = "0px 0px 0px transparent";
//     console.log("Now mouse is out")
// });
// button.addEventListener("mouseover", function(){
//     button.style.background = "red";
//     button.innerText = "clicked";
//     button.style.transform = "scale(1.1)";
//     button.style.boxShadow = "0px 1px 5px black";
//     console.log("Now mouse is on the button")
// });
// document.getElementById("button").addEventListener("mouseout", function(){
//     console.log("Now mouse is out")
// });
// document.getElementById("button").addEventListener("mouseout", function(){
//     console.log("Now mouse is out")
// });
