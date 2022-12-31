// dom nodes
let icons = [...document.querySelectorAll("li")];
let opencards = [];
icons = shuffle(icons);
let ul = document.querySelector("ul");
ul.innerHTML = "";
let startbtn = document.querySelector(".btn");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let counter = document.querySelector("span.count");
let greencards = 0;

for (const icon of icons) {
    ul.appendChild(icon);
    icon.addEventListener("click", showcard);
    icon.classList.add("pointer-none");
}

// function
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
            opencards.length = 0;
        } else {
            opencards[0].style.background = "red";
            opencards[1].style.background = "red";
            disanableallcards()
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
        }
    }, 100)
}
function startgame() {
    showallcards()
    setTimeout(function () {
        hideallcards()
        starttimer()

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
    setInterval(function () {
        let secondtime = +second.textContent;
        let minutetime = +minute.textContent;
        secondtime++;
        if (secondtime == 60) {
            secondtime = 0;
            minutetime++;
            minute.textContent = minutetime;
        }
        second.textContent = secondtime;
    }, 1000)
}



function enableallcards() {
    for (const icon of icons) {
        icon.classList.remove("pointer-none");
    }
}
function disanableallcards() {
    for (const icon of icons) {
        icon.classList.add("pointer-none");
    }
}


// events
for (const icon of icons) {
    icon.addEventListener("click",showcard);    

}
startbtn.addEventListener("click", startgame)