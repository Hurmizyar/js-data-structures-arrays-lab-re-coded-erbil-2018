// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(e){
  drivers.push(e);
}
function destructivelyPrependDriver(e){
  drivers.unshift(e);
}
function destructivelyRemoveLastDriver(e){
  drivers.pop(e);
}
function destructivelyRemoveFirstDriver(e){
  drivers.shift(e);
}
function appendDriver(n){
  const newAray=drivers.slice()
  newAray.push(n)
  return newAray
}
