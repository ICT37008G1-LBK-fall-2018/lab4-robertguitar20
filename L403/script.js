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

function getUniqueName(studList) {
  let list = new Set();
  studList.forEach(student => list.add(student.name));

  return list;
}

let students = getUniqueName(STUDENTS);

students.forEach(student => alert(student));
