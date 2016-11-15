function changeEventHandler(event) {
  console.log('You typed ' + event.target.value);
}

function submitFunction(event) {
  document.getElementById('Message').innerHTML = "event.target.value";
}
