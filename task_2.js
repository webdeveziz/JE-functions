// Задание #2

//ВАРИАНТ 1

function getSumOfNumbers(number, type = 'odd') {
  let sum = 0
  for (let i = 0; i <= number; i++) {
    if (type === 'odd') {
      if (i % 2 !== 0) {
        sum += i
      }
    } else if (type === 'even') {
      if (i % 2 === 0) {
        sum += i
      }
    } else if (type === '') {
      sum += i
    }
  }
  return sum
}

console.log(getSumOfNumbers(10, 'even'))

//ВАРИАНТ 2

// function getSumOfNumbers(number, type = 'odd') {
//   let sum = 0
//   if (type === 'odd') {
//     for (let i = 1; i <= number; i += 2) {
//       sum += i
//     }
//   } else if (type === 'even') {
//     for (let i = 0; i <= number; i += 2) {
//       sum += i
//     }
//   } else if (type === '') {
//     for (let i = 0; i <= number; i++) {
//       sum += i
//     }
//   }
//   return sum
// }
// console.log(getSumOfNumbers(10, 'even'))

// ВАРИАНТ 3
// function getSumOfNumbers(number, type = 'odd') {
//   let sum = 0
//   for (let i = 0; i <= number; i++) {
//     switch (type) {
//       case 'odd':
//         i % 2 !== 0 || (sum += i)
//         break
//       case 'even':
//         i % 2 === 0 || (sum += i)
//         break
//       case '':
//         sum += i
//         break
//       default:
//         break
//     }
//   }
//   return sum
// }

// console.log(getSumOfNumbers(10, ''))

// ВАРИАНТ 4

// function getSumOfNumbers(number, type = 'odd') {
//   if (type === '') return (number + 1) * (number / 2) // можно обойтись без цикла, когда type равно ''

//   let sum = 0
//   for (let i = 0; i <= number; i++) {
//     if (type === 'odd') {
//       if (i % 2 !== 0) {
//         sum += i
//       }
//     } else if (type === 'even') {
//       if (i % 2 === 0) {
//         sum += i
//       }
//     }
//   }
//   return sum
// }

// console.log(getSumOfNumbers(10, ''))
