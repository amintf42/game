// dom nodes
let icons = [...document.querySelectorAll("li")];
let opencards = [];
icons = shuffle(icons);
let ul = document.querySelector("ul");
ul.innerHTML = "";
let startbtn = document.querySelector(".btn");
let restartbtn = document.querySelector(".btn2");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let counter = document.querySelector("span.count");
let greencards = 0;
let slm = null;
second.textContent = second.textContent.padStart(2,0);
minute.textContent = minute.textContent.padStart(2,0);



for (const icon of icons) {
    ul.appendChild(icon);
    icon.addEventListener("click", showcard);
    icon.classList.add("pointer-none");
}

// function

// function mainpart(){
//     icons.style.background = "";
//     counter.textContent = 0;
//     minute = 0;
//     second = 0;
// }
function restartGame() {
    debugger;
    restartbtn.classList.add("pointer-none");
    for (const icon of icons) {
    icon.style.background = "#222";
        
    }
icons = shuffle(icons);

    // icons.style.background = "#222";
    counter.textContent = 0;
    // minute.innerHTML = 0;
    minute.textContent = ''.padStart(2,0);
    second.textContent = ''.padStart(2,0);
    // second = 0;
    showallcards()
    setTimeout(function () {
        hideallcards()
        starttimer()
        enableallcards()
    }, 2000)

}

function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
        let random = Math.floor(Math.random() * array.length);
        let temp = array[i];
        array[i] = array[random];
        array[random] = temp;
    }
    return array;
}
function showcard() {
    this.classList.add("show")
    opencards.push(this);
    if (opencards.length == 2) {
        counter.textContent = 1 + +counter.textContent;
        if (opencards[0].innerHTML === opencards[1].innerHTML) {
            opencards[0].style.background = "green";
            opencards[1].style.background = "green";
            greencards += 2;
            opencards.length = 0;
        } else {
            opencards[0].style.background = "red";
            opencards[1].style.background = "red";
            disableallcards()
            setTimeout(function () {
                opencards[0].classList.remove("show");
                opencards[1].classList.remove("show");
                opencards[0].style.background = "";
                opencards[1].style.background = "";
                opencards.length = 0;
                enableallcards()
            }, 1000)
        }


    }
    setTimeout(function () {
        if (greencards === 16) {
            alert("YOU WIN !!!")
            startbtn.classList.remove("pointer-none");
            startbtn.classList.remove("pointer-none");
            clearInterval(slm)
            // opencards.style.background = "";
        }
    }, 100)
}
function startgame() {
    startbtn.classList.add("pointer-none");
    showallcards()
    setTimeout(function () {
        hideallcards()
        starttimer()
        enableallcards()
    }, 2000)
}

function showallcards() {
    for (const icon of icons) {
        icon.classList.add("show");
    }
}
function hideallcards() {
    for (const icon of icons) {
        icon.classList.remove("show");
    }
}

function starttimer() {
    clearInterval(slm);
    slm = setInterval(function () {
        let secondtime = +second.textContent;
        let minutetime = +minute.textContent;
        secondtime++;
        if (secondtime == 60) {
            secondtime = 0;
            minutetime++;
            // minute.textContent = minutetime;
            minute.textContent = minutetime.toString().padStart(2,0);
        }
        second.textContent = secondtime.toString().padStart(2,0);

    }, 1000);

}

function disableallcards() {
    for (const icon of icons) {
        icon.classList.add("pointer-none");
    }
}


function enableallcards() {
    for (const icon of icons) {
        icon.classList.remove("pointer-none");
    }
}


// events
for (const icon of icons) {
    icon.addEventListener("click", showcard);

}
startbtn.addEventListener("click", startgame)
restartbtn.addEventListener("click", restartGame)