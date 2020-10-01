console.log('start')

let cookieEl = document.getElementById('cookie')
let clickEl = document.getElementById('click')
let clickCount = 0
let scoreEl = document.getElementById('score')
let doublerButton = document.getElementById('doubler')
let countChange = 1

function cookieClicked() {
    console.log('was clicked')
    clickCount = clickCount + countChange
    scoreEl.innerHTML = clickCount
}
cookieEl.addEventListener('click',cookieClicked)


///////doubler

if(clickCount === 10) {
    if (countChange === 1) {
        doublerButton.classlist.remove('remove')
    }
}
function buyDoubler() {
    clickCount = clickCount -10

    scoreEl.innerhtml = clickCount
    doublerButton.classlist.add('remove')
    countChange = 2
}
doublerButton.addEventListener('click', buyDoubler)

let showButton = document.getElementById('show')
let removeButton = document.getElementById('remove')


//////////click animation
//function shrink() {
  //  cookieEl.classlist.add('shrink')
//}

function grow() {
    cookieEl.classList.remove('shrink')
}

cookieEl.addEventListener('click', cookieClicked)
//cookieEl.addEventListener('mousedown', shrink)
cookieEl.addEventListener('click', grow)


function showCookie() {
    clickEl.classlist.remove('remove')

    showButton.classlist.remove('remove')
    removeButton.add('remove')
}

function hideCookie() {
    clickEl.classlist.add('remove')

    showButton.classlist.remove('remove')
    removeButton.add('remove')
}

showButton.addEventListener('click', showCookie)
//removeButton.addEventListener('click', hideCookie)
//showButton.classlist.add('remove')




console.log('end')



