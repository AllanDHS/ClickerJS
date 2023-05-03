var clickcount = 0

const mytimer = document.getElementById('myTime')

let timer = 4

function count() {
    clickcount++;
    document.getElementById('nombreclick').innerText = clickcount
    
    if (clickcount == 1) {
        mytimer.innerText = 5
        setInterval(showTimer, 1000)
    }
}

document.getElementById('clickbtn').addEventListener('click', count)


function reset() {
    if (clickcount == 0) {
        mytimer.innerText = 5
        setInterval(showTimer, 1000)
    }
    document.getElementById('nombreclick').innerText = clickcount
    location.reload()

}

document.getElementById('resetbtn').addEventListener('click', reset)


function showTimer() {
    if (timer == 0) {
        window.alert(`Vous avez effectué: ${clickcount} click(s)`)
        timer = 5
        clickcount = 0
    } else {
        mytimer.innerText = timer
    }

    timer--

}

