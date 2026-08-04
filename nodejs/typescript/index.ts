type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine = {
  //  name: "Justine",
  age: 23,
};
enum subject {
  English = 2,
  Hindi = 1,
}
const isJustineAnAdult = isAdult(justine);
console.log(isJustineAnAdult);
