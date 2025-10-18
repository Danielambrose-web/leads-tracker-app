let saveEl = document.getElementById("save-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let deleteEl = document.getElementById("delete-btn")
let myleads = []
let tabBtn = document.getElementById("tab-btn")
let OlderLeads = JSON.parse(localStorage.getItem("myLeads")) // JSON, not jason
if (OlderLeads) {
    myleads = OlderLeads
    render(myleads)
}

deleteEl.addEventListener("click", function () {
    localStorage.clear()
    myleads = []
    render(myleads)
})

console.log(OlderLeads)

function render(leads) {
    let listItems = ""
    for (let i = 0; i <leads.length; i++) {
        // ulEl.innerHTML += "<li>" + myleads[i] + "</li>"
        listItems += `
<li>
  <a target='_blank' href='${leads[i]}'>
    ${leads[i]}
  </a>
</li>`
    }
    ulEl.innerHTML = listItems
}

saveEl.addEventListener("click", function () {
    myleads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myleads))

    inputEl.value = ""
    render(myleads)

    // Get the leads from the localStorage - PS: JSON.parse()
    // Store it in a variable, leadsFromLocalStorage
    // Log out the variable
})

tabBtn.addEventListener("click", function(){
