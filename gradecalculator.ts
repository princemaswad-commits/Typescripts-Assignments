function calculateGrade(marks: number): string {
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}

console.log("Marks 85 get grade:B", calculateGrade(85));
console.log("Marks 92 get grade:A", calculateGrade(92));
console.log("Marks 70 get grade:C", calculateGrade(70));
console.log("Marks 60 get grade:D", calculateGrade(60));
