
let button = document.getElementById('arraygen')
let sortit = document.getElementById('sortit')
let head = document.getElementById('h2')
let array = document.getElementsByClassName('arr')
let arraytosort;


function waitforme(ms)  {
    return new Promise( resolve => {
        setTimeout(()=> {resolve('')} ,ms );
    })
}


async function bblSort(arr){
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < ( arr.length - i -1 ); j++){
        if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
                document.getElementById('arr'+j).style.background = "linear-gradient(to right,rgb(255, 255, 255),red, red)";
                document.getElementById('arr'+(j+1)).style.background = "linear-gradient(to right,rgb(255, 255, 255),red,  red)";
                printArray(arr);
                await waitforme(500);
                // document.getElementById('arr'+j).style.background = "";
            }
            document.getElementById('arr'+i).style.background = "green";
        } 
        document.getElementById('arr'+i).style.background = "green";
    }
    document.getElementById('arr'+ (i-1)).style.background = "green";
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
        document.getElementById('arr'+i).style.background = "linear-gradient(to right,rgb(255, 255, 255), rgb(183, 255, 183), green)";
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
    arraytosort = randomarray();
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
