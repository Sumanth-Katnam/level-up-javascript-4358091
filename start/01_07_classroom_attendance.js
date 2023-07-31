// Write your code here
const getStudents = (classroom) => {
  const {hasTeachingAssistant, classList} = classroom;
  let teacher, ta, students;
  if(hasTeachingAssistant){
    [teacher, ta, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

const class1 = {
  hasTeachingAssistant: false,
  classList: ["Prof", "stud1", "stud2"]
}

const class2 = {
  hasTeachingAssistant: true,
  classList: ["Prof", "TA", "stud3", "stud4"]
}

console.log(getStudents(class1));
console.log(getStudents(class2));