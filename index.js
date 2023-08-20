let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("data")
let count = 0

function increment(){
 count += 1
 countEl.textContent = count
}

function savedata(){

    let record = count + "-"
    saveEl.textContent += record
    countEl.textContent = 0
    count = 0


}