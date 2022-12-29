let input = document.getElementById('dob');
let ul = document.getElementById('uli');
let button = document.getElementById('byt');

button.addEventListener('click', function(){
  let arr = [];
  arr.push(input.value);
  let li = document.createElement('li');
  li.className = 'close';
  ul.appendChild(li);
  li.innerHTML += arr;
  
  list();
});