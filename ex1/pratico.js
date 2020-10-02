function updateBox() {
  red = document.getElementById('red').value
  green = document.getElementById('green').value
  blue = document.getElementById('blue').value
  document.getElementById('rtxt').setAttribute('value', red)
  document.getElementById('gtxt').setAttribute('value', green)
  document.getElementById('btxt').setAttribute('value', blue)
  box = document.getElementById('box').style.backgroundColor = "rgb(" + red + "," + green + "," + blue + " )"
}