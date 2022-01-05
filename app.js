var student = {
    name: "Ali",
    fatherName: "Shakoor",
    age: "16",
    subject: "Biology",
    Result: "fail"
};
// console.log(student)

var student2 = {
    name: "yaseen",
    fatherName: "Rehan",
    age: "18",
    subject: "Biology",
    Result: "Pass"
};
// console.log(student2)

var student3 = {
    name: "Arif",
    fatherName: "Dawood",
    age: "18",
    subject: "Biology",
    Result: "Fail"
};
// console.log(student3)


var student4 = {
    name: "Yaqoob",
    fatherName: "Aslam",
    age: "22",
    subject: "Biology",
    Result: "Pass"
};
// console.log(student4)


var student5 = {
    name: "Ahmed",
    fatherName: "Umer",
    age: "21",
    subject: "Biology",
    Result: "Pass"
};
// console.log(student5)

var fianl = [student, student2, student3, student4, student5]
console.log(fianl);

for (var i = 0; i < fianl.length; i++) {
    fianl[i].rollNumber = i + 1;
    console.log(fianl[i]);
}

for (var i = 0; i < fianl.length; i++) {
    fianl[i].rollNumber +
        fianl[i].name +
        fianl[i].fatherName +
        fianl[i].age +
        fianl[i].subject +
        fianl[i].Result +
        "";
}
function searchBtn() {
    var rollNumber = document.getElementById("inputValue").value;
    for (var i = 0; i < fianl.length; i++) {
        if (rollNumber == fianl[i].rollNumber) {
            var sname = document.getElementById("showName");
            var sfName = document.getElementById("showlFname");
            var sAge = document.getElementById("showAge");
            var sSubject = document.getElementById("showSubject");
            var sResult = document.getElementById("showResult");

            var finalObj = fianl[i];
            console.log(finalObj);
            sname.innerHTML = finalObj.name;
            sfName.innerHTML = finalObj.fatherName;
            sAge.innerHTML = finalObj.age;
            sSubject.innerHTML = finalObj.subject;
            sResult.innerHTML = finalObj.Result;
        }
    }
}