// Commented-out code from Per

// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
// }

let count = 0
let total = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("saved-reps")
let totalEl = document.getElementById("total-reps")

function plus1() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (count != 0) {
        
        total += count
        totalEl.textContent = total
        
        saveEl.textContent += count + " - "
        
        countEl.textContent = 0
        count = 0
    }
}

function reset() {
    count = 0
    countEl.textContent = 0
    
    total = 0
    totalEl.textContent = 0
    
    saveEl.textContent = "Saved reps: "
}

// add if (count != 0) feature in
// Landers Customer Counter using VS Code

// add hover effects on buttons in Landers Customer Counter
// change background colour
// change cursor to pointer