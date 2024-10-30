let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homeScore = 0
let guestScore = 0

function home1() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function home2() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function home3() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function guest1() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function guest2() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function guest3() {
    guestScore += 3
    guestEl.textContent = guestScore
}

function newgame() {
    homeScore = 0
    guestScore = 0
    guestEl.textContent = guestScore
    homeEl.textContent = homeScore
}