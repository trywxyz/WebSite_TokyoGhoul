const button = document.getElementById('button')
const navigation = document.querySelector('.nav')

function handleClick() {
  button.classList.toggle('active')
  navigation.classList.toggle('active')
}