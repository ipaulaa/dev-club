function getRandomLetterGrade() {
  const letterGrades = ["A", "B", "C", "D", "F"];
  const index = Math.floor(Math.random() * letterGrades.length);
  return letterGrades[index];
}

const letterGrade = getRandomLetterGrade();

console.log(`LETTER GRADE: ${letterGrade}`);
switch (letterGrade) {
  case "A":
    console.log("grade >= 90");
    break;
  case "B":
    console.log("grade >= 80");
    break;
  case "C":
    console.log("grade >= 70");
    break;
  case "D":
    console.log("grade >= 60");
    break;
  default:
    console.log("grade < 60");
}
