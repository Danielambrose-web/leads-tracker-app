let inputElement = document.getElementById("inputText");
let messageEl = document.getElementsByTagName("pu")[0];

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  let text = inputElement.value;
  let reverse = reverseString(text);

  if (text === reverse) {
    // alert("The text is a palindrome");
    messageEl.innerText = "The text is a palindrome";
    messageEl.style.color = "green";
  } else {
    //alert("The text is not a palindrome");
    messageEl.innerText = "The text is not a palindrome";
    messageEl.style.color = "red";
  }
}
