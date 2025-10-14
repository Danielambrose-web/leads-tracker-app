let saveEl = document.getElementById("save-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let myleads = [ "fohnsff","edjff","fdfdff" ]

let listItems = ""

saveEl.addEventListener("click", function(){
    lead = inputEl.value
    myleads.push(lead)
    renderLeads()
    inputEl.value = ""
})

for(let i = 0; i<myleads.length; i++){
    // ulEl.innerHTML += "<li>" + myleads[i] + "</li>"
    listItems += "<li>" + myleads[i] + "</li>"

}
ulEl.innerHTML = listItems