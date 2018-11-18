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
  let obj = {};

  studList.forEach(student => {
    let name = student.name;
    obj[name] = obj[name] ? obj[name] + 1 : 1;
  });

  console.log(obj);
}

let students = getUniqueName(STUDENTS);
