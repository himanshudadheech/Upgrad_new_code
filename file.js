const student = [
  {
    name: "Raju",
    rollNo: 1,
  },
  {
    name: "Babu Rao",
    rollNo: 2,
  },
  {
    name: "shyam",
    rollNo: 3,
  },
];

function getStudent() {
  console.log("Geeing Students");
  setTimeout(() => {
    let display = "";
    student.forEach((s) => {
      console.log(s.rollNo);
      console.log(s.name);
    });
  }, 1000);
}

function createStudent(newStudent) {
  console.log("Creating Student");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      student.push(newStudent);
      let flag = true;
      if (flag) {
        resolve();
      } else {
        reject("problem while inserting");
      }
    }, 5000);
  });
}

createStudent({ name: "anuradha", rollNo: 4 })
  .then(getStudent)
  .catch(console.error());
