"use strict";
const storedUser = "admin";
const storedPass = "securePassword123";
function loginCheck(user, pass) {
    return user === storedUser && pass === storedPass;
}
console.log("Correct login test:", loginCheck("admin", "securePassword123"));
console.log("Wrong password test:", loginCheck("admin", "wrongpass"));
