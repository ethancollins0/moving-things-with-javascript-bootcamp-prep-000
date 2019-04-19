const app = "I don't do much."

var dodger = document.getElementById('dodger')

function moveDodgerLeft() {
  document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})
