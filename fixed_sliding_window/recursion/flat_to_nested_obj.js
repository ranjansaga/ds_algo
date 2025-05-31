const a = { a: "c", "x.y.z": "tett", "m.n":"aaa" }

const prepareObj = function (key, value) {
  return { [key]: value }
}

const result = {}
function buildObj(obj) {
  for (let key in obj) {
    if (key.includes(".")) {
      let parts = key.split(".")
      let current = result;
      for (let i = 0; i < parts.length - 1; i++) {
        let part = parts[i]
        if (!(part in current)) {
          current[part] = {} // create empty object if missing
        }
        current = current[part] // go one level deeper
      }
      current[parts.slice(-1)] = obj[key]
    } else {
      result[key] = obj[key]
    }
  }
  return result
}

console.log("buildObj", buildObj(a))

// Output

// {
//     "a": "c",
//     "x": {
//         "y": {
//             "z": "tett"
//         }
//     },
//     "m": {
//         "n": "aaa"
//     }
// }