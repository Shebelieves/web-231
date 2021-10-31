//Title: Assignment 2.2
// Author: Professor Krasso
// Date: October, 31, 2021
// Modified by: Shelaine Walters
// Description: How to target elements on the html file with
//              JavaScript to create a payroll chart.



// First name variables defined as strings and binded to inner html by their specified id
let firstNameLudwig = "Ludwig";
document.getElementById("txtFirstNameLudwig").innerHTML = firstNameLudwig;
let firstNameJohann = "Johann";
document.getElementById("txtFirstNameJohann").innerHTML = firstNameJohann;
let firstNameWolfgang = "Wolfgang";
document.getElementById("txtFirstNameWolfgang").innerHTML =firstNameWolfgang;

// Last name variables defined as strings and binded to inner html by their specified id
let lastNameBeethoven = "Beethoven";
document.getElementById("txtLastNameBeethoven").innerHTML = lastNameBeethoven;
let lastNameBach = "Bach";
document.getElementById("txtLastNameBach").innerHTML = lastNameBach;
let lastNameMozart = "Mozart";
document.getElementById("txtLastNameMozart").innerHTML = lastNameMozart;

// Address variables defined as strings and binded to inner html by their specific id
let addressLudwig = "505 Main Street";
document.getElementById("txtAddressLudwig").innerHTML = addressLudwig;
let addressJohann = "512 Main Street";
document.getElementById("txtAddressJohann").innerHTML = addressJohann;
let addressWolfgang = "600 Main Street";
document.getElementById("txtAddressWolfgang").innerHTML = addressWolfgang;

//
let hireDateLudwig = new Date();
document.getElementById("txtHireDateLudwig").innerHTML=(hireDateLudwig.toLocalDateString('en-US'));
let hireDateJohann = new Date();
document.getElementById("txtHireDateJohann").innerHTML=(hireDateJohann.toLocaleDateString('en-US'));
