const input = document.querySelector('.messageinput')
const submit = document.querySelector('.submitbtn')

const display1 = document.querySelector('.display1')
const display2 = document.querySelector('.display2')
const reset = document.querySelector('.resetbtn')

submit.onclick = function encript () {
  const changeText = input.value.toLowerCase()

  console.log(changeText)
  const removeEmptySpaces = changeText.replace(/[^\w]/g, '') // this removes all the special charachters in a string

  display1.innerHTML = removeEmptySpaces
  console.log(removeEmptySpaces)

  console.log(removeEmptySpaces.length)

  const seperateRectangle = Math.ceil(Math.sqrt(removeEmptySpaces.length))
  console.log(seperateRectangle)

  let iterator = 0

  for (let i = 0; i < seperateRectangle; i++) {
    for (let j = i; j < removeEmptySpaces.length; j += seperateRectangle) {
      iterator += removeEmptySpaces[j]
    }

    iterator += '\n'
  }
  console.log(iterator)
  display2.innerHTML = iterator
}

reset.addEventListener('click', () => {
  window.location.reload()
})
