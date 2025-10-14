let saveEl = document.getElementById("save-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let myleads = [ "fohnsff","edjff","fdfdff" ]


saveEl.addEventListener("click", function(){
    lead = inputEl.value
    myleads.push(lead)
    console.log(myleads)
})

for(let i = 0; i<myleads.length; i++){
    console.log(myleads[i])
}