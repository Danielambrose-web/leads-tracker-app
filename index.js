let saveEl = document.getElementById("save-btn")
let inputEl = document.getElementById("input-el")
let myleads = []


saveEl.addEventListener("click", function(){
    lead = inputEl.value
    myleads.push(lead)
    console.log(myleads)
})
