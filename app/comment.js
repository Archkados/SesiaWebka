let input = document.getElementById('doba');
let ul = document.getElementById('ul');
let button = document.getElementById('button');

button.addEventListener('click', function(){
  let arr = [];
  arr.push(input.value);
  let li = document.createElement('li');
  li.className = 'close';
  ul.appendChild(li);
  li.innerHTML += arr;
  
  list();
});
