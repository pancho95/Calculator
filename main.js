

function shownumber(n){
  document.formulario.vista.value= document.formulario.vista.value+n
}


function clean(){
  document.formulario.vista.value = "";
}


function resolve(){
  var math = document.formulario.vista.value;
  if(math){
    document.formulario.vista.value = eval(math);
  }
}

function back(){
  var math = document.formulario.vista.value;
  document.formulario.vista.value = math.substring(0,math.length-1);
}


