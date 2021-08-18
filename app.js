
// function displaydate(){
//     let mydate = new Date();
//     console.log(mydate);
// }

let button = document.getElementById('arraygen')
let sortit = document.getElementById('sortit')
let head = document.getElementById('h2')
let array = document.getElementsByClassName('arr')
let arraytosort;


function bblSort(arr){
    for(var i = 0; i < arr.length; i++){
        var j = 0;
        function myLoop() {
            setTimeout(function() {  
                if(arr[j] > arr[j+1]){
                        var temp = arr[j]
                        arr[j] = arr[j + 1]
                        arr[j+1] = temp
                        printArray(arr);
                        }
                    j++;
                    if (j < ( arr.length - i -1 )) {
                    myLoop();
                    }
                }, 100)
            }
            myLoop();
        }
}


     
function printArrayFast(a){
    for(i = 0; i<10; i++) {
        var id1='arr'+i;
        document.getElementById(id1).style.width = a[i]+'%';
        document.getElementById('arr'+i).innerText = a[i];
    }
}

function printArray(a){
    var i = 0;
    function myLoop() {
    setTimeout(function() {  
        var id1='arr'+i;
        document.getElementById(id1).style.width = a[i]+'%';
        document.getElementById('arr'+i).innerText = a[i]; 
        i++;
        if (i < 10) {
        myLoop();
        }
    }, 100)
    }

    myLoop(); 
    
}


function randomarray(){
    let a = [];
    for(i = 0; i<10; i++) {
        a[i] = Math.floor(Math.random() * 100);
    }
    printArray(a);

    return a;
}

button.addEventListener("click", function(){
    // displaydate();
    arraytosort = randomarray();
    // head.innerText = "The button is clicked"
});

sortit.addEventListener("click", function(){
    bblSort(arraytosort);
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
