
function displaydate(){
    let mydate = new Date();
    console.log(mydate);
}


document.getElementById("button").addEventListener("click", displaydate);
document.getElementById("button").addEventListener("mouseout", function(){
    console.log("Now mouse is out")
});
