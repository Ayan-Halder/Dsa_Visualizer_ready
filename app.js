let button = document.getElementById('arraygen')
let sortit = document.getElementById('sortit')
let inserSort = document.getElementById('inSort')
let secSort = document.getElementById('secSort')
let head = document.getElementById('h2')
let array = document.getElementsByClassName('arr')
let arraytosort;


function waitforme(ms)  {
    return new Promise( resolve => {
        setTimeout(()=> {resolve('')} ,ms );
    })
}


function disableAll(){
    button.disabled = true;
    button.classList.add("disabled");
    inserSort.disabled = true;
    inserSort.classList.add("disabled");
    sortit.disabled = true;
    sortit.classList.add("disabled");
    secSort.disabled = true;
    secSort.classList.add("disabled");
}

function activateAll(){
    button.disabled = false;
    button.classList.remove("disabled");
    inserSort.disabled = false;
    inserSort.classList.remove("disabled");
    sortit.disabled = false;
    sortit.classList.remove("disabled");
    secSort.disabled = false;
    secSort.classList.remove("disabled");
}


function swap(arr,xp, yp)
{
	var temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

async function selectionSort(arr)
{
    disableAll();
    var n = arr.length;
	var i, j, min_idx;
	for (i = 0; i < n-1; i++)
	{
        
		min_idx = i;
		for (j = i + 1; j < n; j++){
        
		if (arr[j] < arr[min_idx])
			min_idx = j;

        }
        document.getElementById('arr' + min_idx).style.background = "linear-gradient(to right,rgb(255, 255, 255),red, red)";
		swap(arr,min_idx, i);
        printArrayFast(arr);
        document.getElementById('arr'+i).style.background = "linear-gradient(to right,rgb(255, 255, 255),red, red)";
        await waitforme(500);
        document.getElementById('arr'+i).style.background = "linear-gradient(to right,rgb(255, 255, 255), rgb(183, 255, 183), green)";
        document.getElementById('arr' + min_idx).style.background = "linear-gradient(to right,rgb(255, 255, 255), rgb(183, 255, 183), green)";
        document.getElementById('arr'+i).style.background = "linear-gradient(to right, green, rgb(183, 255, 183), green)";
	}
    document.getElementById('arr'+i).style.background = "linear-gradient(to right, green, rgb(183, 255, 183), green)";
    activateAll();
}




async function insertionSort(arr)
{
    disableAll();
    n = arr.length;
    let i, key, j;
    for (i = 1; i < n; i++)
    {
        key = arr[i]; 
        j = i - 1; 
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
            
        }
        arr[j + 1] = key; 
        arr[j + 1] = key; 
        document.getElementById('arr'+(j+1)).style.background = "linear-gradient(to right,rgb(255, 255, 255),red, red)";
        await waitforme(250);
        printArrayFast(arr);
        document.getElementById('arr'+(j+1)).style.background = "linear-gradient(to right, green, rgb(183, 255, 183), green)";
    }
    document.getElementById('arr'+(i-1)).style.background = "linear-gradient(to right, green, rgb(183, 255, 183), green)";
    activateAll();
}


async function bblSort(arr){
    disableAll();
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
            }
        } 
        document.getElementById('arr'+i).style.background = "linear-gradient(to right, green, rgb(183, 255, 183), green)";
    }
    document.getElementById('arr'+ (i-1)).style.background = "linear-gradient(to right, green, rgb(183, 255, 183), green)";
    activateAll();
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
    disableAll();
    let a = [];
    for(i = 0; i<10; i++) {
        a[i] = Math.floor(Math.random() * 100);
    }
    printArray(a);
    activateAll();
    return a;
}

button.addEventListener("click", function(){
    arraytosort = randomarray();
});

sortit.addEventListener("click", function(){
    bblSort(arraytosort);
});

inserSort.addEventListener("click", function(){
    insertionSort(arraytosort);
});

secSort.addEventListener("click", function(){
    selectionSort(arraytosort);
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
