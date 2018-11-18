const STUDENTS = [
  {
    id: 1,
    name: "Name 1"
  },
  {
    id: 2,
    name: "Name 1"
  },
  {
    id: 3,
    name: "Name 2"
  },
  {
    id: 4,
    name: "Name 1"
  },
  {
    id: 5,
    name: "Name 4"
  },
  {
    id: 6,
    name: "Name 3"
  }
];

function countStudentName(studList, name) {
  let count = 0;
  studList.forEach(student => {
    if (student.name === name) count++;
  });

  return count;
}

let studetName = prompt("Enter name"),
  res = countStudentName(STUDENTS, studetName);

alert(res);
