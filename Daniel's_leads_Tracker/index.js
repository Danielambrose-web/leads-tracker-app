let saveEl = document.getElementById("save-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")

let myleads = []

// let listItems = ""
function renderLeads(){
    let listItems = ""
    for(let i = 0; i<myleads.length; i++){
        // ulEl.innerHTML += "<li>" + myleads[i] + "</li>"
        listItems += `
        <li>
        <a target='_blank' href='${myleads[i]}'>
        ${myleads[i]}
        </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

saveEl.addEventListener("click", function(){

    myleads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myleads))

    inputEl.value = ""

    renderLeads()
    console.log(localStorage.getItem("myLeads"))

})
