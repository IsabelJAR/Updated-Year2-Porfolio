//Function to clear default data from Name value input, will not clear user input data
function clearName() {
  if (document.getElementById("nameField").value == "First and Last Name") {
    document.getElementById("nameField").value = "";
  }
}

//Function to bring back default text if name field is empty
function resetName() {
  if (document.getElementById("nameField").value == "") {
    document.getElementById("nameField").value = "First and Last Name";
  }
}
//Function to clear default data from Email value input, will not clear user input data
function clearEmail() {
  if (
    document.getElementById("emailField").value == "example: myname@gmail.com"
  ) {
    document.getElementById("emailField").value = "";
  }
}
//Function to bring back default text if email field is empty
function resetEmail() {
  if (document.getElementById("emailField").value == "") {
    document.getElementById("emailField").value = "example: myname@gmail.com";
  }
}

//Function to clear default data from massage value input, will not clear user input data
function clearMessage() {
  if (
    document.getElementById("messageField").value ==
    "example: message, questions, etc."
  ) {
    document.getElementById("messageField").value = "";
  }
}
//Function to bring back default text if message field is empty
function resetMessage() {
  if (document.getElementById("messageField").value == "") {
    document.getElementById("messageField").value =
      "example: message, questions, etc.";
  }
}
