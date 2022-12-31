// dom nodes
let icons = [...document.querySelectorAll("li")];
let opencards = [];
icons = shuffle(icons);
let ul = document.querySelector("ul");
ul.innerHTML = "";
for (const icon of icons ) {
    ul.appendChild(icon);
    icon.addEventListener("click",showcard);    

}


// function
 function shuffle(array){
    for(let i=0; i<array.length; i++){
        let random = Math.floor(Math.random()*array.length);
        let temp = array[i];
        array[i] = array[random];
        array[random] = temp;
    }
    return array;
 }
function showcard(){
    this.classList.add("show")
    opencards.push(this);
    if(opencards.length == 2) {
        if(opencards[0].innerHTML === opencards[1].innerHTML){
            opencards[0].style.background = "green";
            opencards[1].style.background = "green";
            opencards.length = 0;
        }else{
            opencards[0].style.background = "red";
            opencards[1].style.background = "red";
            setTimeout( function(){
                opencards[0].classList.remove("show");
                opencards[1].classList.remove("show");
                opencards[0].style.background = "";
                opencards[1].style.background = "";
                opencards.length = 0;
            } , 1000)
        }

    }
}


// events
// for (const icon of icons) {
//     icon.addEventListener("click",showcard);    
// }
