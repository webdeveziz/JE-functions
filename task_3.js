// Задание #3

function getDivisorsCount(number = 1) {
  let count = 0,
    divisors = ''
  if (number <= 0 || !Number.isInteger(number)) {
    alert(`number должен быть целым числом и больше нуля!`)
  } else {
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        count++
        if (i === number) {
          divisors += i
        } else {
          divisors += i + ','
        }
      }
    }
  }
  return `${count} (делители - ${divisors})`
}

console.log(getDivisorsCount(4)) // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)) // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)) // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)) // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
