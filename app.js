
function displaydate(){
    let mydate = new Date();
    console.log(mydate);
}

let button = document.getElementById('arraygen')
let sortit = document.getElementById('sortit')
let head = document.getElementById('h2')
let array = document.getElementsByClassName('arr')



function bblSort(arr){
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < ( arr.length - i -1 ); j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
          
        }
      } 
    }
    printArray(arr);
   }
     

function printArray(a){
    for(i = 0; i<10; i++) {
        var id1='arr'+i;
        document.getElementById(id1).style.width = a[i]+'px';
        document.getElementById('arr'+i).innerText = a[i];
    }
}


function randomarray(){
    let a = [];
    for(i = 0; i<10; i++) {
        a[i] = Math.floor(Math.random() * 1000);
    }
    printArray(a);

    console.log(a);
}

button.addEventListener("click", function(){
    displaydate();
    randomarray();
    head.innerText = "The button is clicked"
});

sortit.addEventListener("click", function(){

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
