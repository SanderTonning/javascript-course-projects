// students score, total possible score,
// 15/20 -> you got a C (75%)!
// A 90 - 100, B 80 - 89, C 70 - 79, D 60 - 69, F 0 - 59.   Also added inn E as 50 - 59 grade(which was not in the task, but more like the Norwegian gradingsystem.

const gradeCalc = (score, maxScore) => {

    const grade = score / maxScore;
    const percent = grade * 100;
    const gradeLetter = '';

    if (percent >= 90) {
        gradeLetter = 'A';
         
    }else if (percent >= 80) {
        gradeLetter = 'B';
    }else if (percent >= 70) {
        gradeLetter = 'C';
    }else if (percent >= 60) {
        gradeLetter = 'D';
    }else if (percent >= 50) {
        gradeLetter = 'E'
    }else  {
        gradeLetter = 'F'
    }
    return `You got a ${gradeLetter} (${percent}%)`
};

//tests
console.log(gradeCalc(90, 100));
console.log(gradeCalc(89, 100));
console.log(gradeCalc(79, 100));
console.log(gradeCalc(69, 100));
console.log(gradeCalc(59, 100));
console.log(gradeCalc(5, 100));


