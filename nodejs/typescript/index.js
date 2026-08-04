function isAdult(user) {
    return user.age >= 18;
}
var justine = {
    //  name: "Justine",
    age: 23,
};
var subject;
(function (subject) {
    subject[subject["English"] = 2] = "English";
    subject[subject["Hindi"] = 1] = "Hindi";
})(subject || (subject = {}));
var isJustineAnAdult = isAdult(justine);
console.log(isJustineAnAdult);
