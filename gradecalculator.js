"use strict";
function calculateGrade(marks) {
    if (marks >= 90)
        return "A";
    if (marks >= 80)
        return "B";
    if (marks >= 70)
        return "C";
    if (marks >= 60)
        return "D";
    return "F";
}
console.log("Marks 85 get grade:", calculateGrade(85));
console.log("Marks 92 get grade:", calculateGrade(92));
