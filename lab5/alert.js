function validateForm() {
  var dateInput = document.getElementById("dateInput").value;
  var timeInput = document.getElementById("timeInput").value;
  var emailAddress = document.getElementById("emailAddress").value;
  var phoneNumber = document.forms["form"].phoneNumber.value;

  var cardholderName = document.getElementById("cardholderName").value;
  var cardNumber = document.getElementById("cardnumber").value;
  var expiryDate = document.getElementById("expirydate").value;
  var cvv = document.getElementById("cvv").value;

  if (dateInput === "") {
    alert("Date required!");
    return false;
  }
  if (timeInput === "") {
    alert("Time required!");
    return false;
  }
  if (!isValidEmail(emailAddress)) {
    alert("Invalid email address. Please enter a valid email.");
    return false;
  }
  if (!isValidPhone(phoneNumber)) {
    alert("Phone number invalid!");
    return false;
  }

  if (!isValidCardholderName(cardholderName)) {
    alert("Invalid cardholder name. Please enter a valid name.");
    return false;
  }
  if (!isValidCreditCard(cardNumber)) {
    alert("Invalid credit card number. Please enter a valid 16-digit number.");
    return false;
  }
  if (!isValidExpiryDate(expiryDate)) {
    alert("Invalid expiry date. Please enter date in MM/YY format.");
    return false;
  }
  if (!isValidCVV(cvv)) {
    alert("Invalid CVV. Please enter a valid 3-digit number.");
    return false;
  }
  alert("Form submitted!");
  return true;
}

function isValidCardholderName(name) {
  var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return nameRegex.test(name);
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(p) {
  var phoneRe = /^[1-9]\d{2}[1-9]\d{2}\d{4}$/;
  var digits = p.toString().replace(/\D/g, "");
  return phoneRe.test(digits);
}

function isValidCreditCard(cardNumber) {
  var cardNumberRegex = /^[0-9]{16}$/;
  return cardNumberRegex.test(cardNumber);
}

function isValidExpiryDate(expiryDate) {
  var expiryDateRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
  return expiryDateRegex.test(expiryDate);
}

function isValidCVV(cvv) {
  var cvvRegex = /^[0-9]{3}$/;
  return cvvRegex.test(cvv);
}

$(document).ready(function () {
  // Tooltip for the "CARDHOLDER NAME" input
  $("#cardholderName").tooltip({
    classes: {
      "ui-tooltip": "highlight",
    },
    track: true,
  });
});
$(document).ready(function () {
  // Tooltip for the "CARDHOLDER NAME" input
  $("#cvv").tooltip({
    classes: {
      "ui-tooltip": "highlight",
    },
    track: true,
  });
});
$(document).ready(function () {
  // Tooltip for the "CARDHOLDER NAME" input
  $("#cardnumber").tooltip({
    classes: {
      "ui-tooltip": "highlight",
    },
    track: true,
  });
});

$(document).ready(function () {
  // Initialize Datepicker
  $("#dateInput").datepicker({
    dateFormat: "yy-mm-dd", // Set the date format if needed
    timeFormat: "HH:mm",
    stepMinute: 15, // Change this as needed
    showTimepicker: true,
    beforeShowDay: function (date) {
      var day = date.getDay();
      // Disable weekends (0: Sunday, 6: Saturday)
      return [day != 0 && day != 6, ""];
    },
  });
});
