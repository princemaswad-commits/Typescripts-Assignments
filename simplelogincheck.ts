const storedUser: string = "admin";
const storedPass: string = "securePassword123";

function loginCheck(user: string, pass: string): boolean {
    return user === storedUser && pass === storedPass;
}

console.log("Correct login test:", loginCheck("admin", "securePassword123"));
console.log("Wrong password test:", loginCheck("admin", "wrongpass"));