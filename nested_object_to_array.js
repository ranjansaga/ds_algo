// Declare an object
let ob = [
  {
    branchId: '1',
    branchName: 'Computer Science',
    branchStrength: '60',
    studentList: [
      {
        studentId: '1',
        studentName: 'Alice D',
        studentSubjects: [],
        studentType: 'TopTalent',
      },
      {
        studentId: '2',
        studentName: 'Alex',
        studentSubjects: [],
        studentType: 'Average',
      },
      'Rohan SHenoy',
      1,
      23,
      45,
    ],
  },
  {
    branchId: '2',
    branchName: 'Electronics',
    branchStrength: '60',
    studentList: [
      {
        studentId: '3',
        studentName: 'Mohit',
        studentSubjects: [],
        studentType: 'TopTalent',
      },
      {
        studentId: '4',
        studentName: 'Rajni',
        studentSubjects: [],
        studentType: 'Average',
      },
    ],
  },
];

// Declare a flatten function that takes
// object as parameter and returns the
// flatten object
let result = [];
const flattenObj = (ob) => {
  console.log('inside flatten obj', ob);
  console.log('--------------------------------------------------');
  // The object which contains the
  // final result
  if (typeof ob === 'object' && !Array.isArray(ob)) {
    // loop through the object "ob"
    console.log('inside objects');
    for (const i in ob) {
      // We check the type of the i using
      // typeof() function and recursively
      // call the function again

      if (typeof ob[i] === 'object' && !Array.isArray(ob[i])) {
        console.log('ob[i]--------', ob[i]);
        const temp = flattenObj(ob[i]);
        console.log('temp--', temp);
        console.log('i--', i);
        for (const j in temp) {
          console.log('j--', j);
          // Store temp in result
          result.push(temp[j]);
        }
      } else if (Array.isArray(ob[i])) {
        console.log('inside array');
        ob[i].forEach((item) => {
          if (typeof item === 'object') {
            flattenObj(item);
          } else {
            result.push(item);
          }
        });
      } else {
        result.push(ob[i]);
      }
    }
  } else if (Array.isArray(ob)) {
    console.log('inside array');
    ob.forEach((item) => {
      if (typeof item === 'object') {
        flattenObj(item);
      } else {
        result.push(item);
      }
    });
  }

  return result;
};

console.log('res', flattenObj(ob));
