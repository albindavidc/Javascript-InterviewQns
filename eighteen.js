let writtenText = prompt("Enter the mark you scored: ");
let labExam = prompt("Enter the lab mark: ");
let assignmentMark = prompt("Enter the assignment mark: ");

alert(
  `Your written exam score is ${(writtenText * 70) / 100}
  \n Lab Exam mark is ${(labExam * 20) / 100} 
  \n Assignment mark is ${(assignmentMark * 10) / 100} 
  \n Your overall grade is ${
    (writtenText * 70) / 100 +
    (labExam * 20) / 100 +
    (assignmentMark * 10) / 100
  }`
);
