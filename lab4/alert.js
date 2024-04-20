function validateForm() {
  if (document.forms["form"].emailAddress.value === "") {
    alert("Email Address required!");
    return false;
  }
  if (document.forms["form"].phoneNumber.value === "") {
    alert("Phone number Required!");
    return false;
  }
  if (document.forms["form"].dateTimeInput.value === "") {
    alert("Date and Time Required!");
    return false;
  }
  return true;
}
