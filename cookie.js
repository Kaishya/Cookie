console.log('start')

//I honestly did not get the challenge done, but I do have 
//the working doubler code


let cookieEl = document.getElementById('cookie')
//let clickEl = document.getElementById('cookie')
let clickCount = 0
let scoreEl = document.getElementById('score')
let doublerButton = document.getElementById('doubler')
let scoreChange = 1
let haveDoubled = false

let countChange = 1



function cookieClicked() {
    
    clickCount = clickCount + countChange
    scoreEl.innerHTML = clickCount
    if (clickCount === 10) {
        if(!haveDoubled) {
            doublerButton.classList.remove('remove')
        }
    }
    
}

cookieEl.addEventListener('click',cookieClicked)


///////doubler

function buyDoubler() {
    haveDoubled = true
    clickCount = clickCount - 10
    
    scoreEl.innerHTML = clickCount
    doublerButton.classList.add('remove')
    countChange = 2
}
doublerButton.addEventListener('click', buyDoubler)

let showButton = document.getElementById('show')
console.log(showButton)
let removeButton = document.getElementById('remove')


cookieEl.addEventListener('click', cookieClicked)
//cookieEl.addEventListener('mousedown', shrink)
cookieEl.addEventListener('click', grow)


function showCookie() {
    cookieEl.classList.remove('remove')

    showButton.classList.remove('remove')
    removeButton.classList.add('remove')
}

function hideCookie() {
    cookieEl.classList.add('remove')

    showButton.classList.remove('remove')
    removeButton.classList.add('remove')
}

showButton.addEventListener('click', showCookie)
removeButton.addEventListener('click', hideCookie)
//SshowButton.classList.add('remove')

var num = 0;
window.onload = function () {
    var name = prompt("What is your name");
    
    var space = document.getElementById("space");
    space.innerHTML = name + "'s Bakery";
}


console.log('end')











