(function(){

  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let equalTo = document.querySelector('.btn-equals');
  let clear = document.querySelector('.btn-cleared');

buttons.forEach(function(btn){
  btn.addEventListener('click', function(e){
    let value = e.target.dataset.num;
    screen.value += value;
  })
});

equalTo.addEventListener('click', function(e){
  if(screen.value === ''){
    screen.value = "Please enter";
  }else{
    let answer = eval(screen.value);
    screen.value = answer;
  }
})

clear.addEventListener('click', function(e){
  screen.value = "";
})

})();