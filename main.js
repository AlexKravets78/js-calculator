let num1;  
let num2;  
let field = true

let out = document.getElementById('out');
 
chan=()=>{
    field=!field
    console.log(field)
}

numbre=(a)=>{
    if(field==true){document.getElementById('n1').value+=a}
    if(field==false){document.getElementById('n2').value+=a}
    console.log(a)
}

plus=()=> {
 num1 = document.getElementById('n1').value; 
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)
 
 out.innerHTML = num1 + num2;
}
 
minus=()=> {
 num1 = document.getElementById('n1').value; 
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)
 
 out.innerHTML = num1 - num2;
}
 
 multiplication=()=> {
 num1 = document.getElementById('n1').value; 
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)
 
 out.innerHTML = num1 * num2;
}
 
c=()=>{
    document.getElementById('n1').value=''
    document.getElementById('n2').value=''
    out.innerHTML=''
}

division=()=> {
 num1 = document.getElementById('n1').value; 
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)
 
 out.innerHTML = num1 / num2;
}