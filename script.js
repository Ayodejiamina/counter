let remain = document.getElementById('remain')
let real = document.getElementById('original')
let textarea = document.getElementById('text')
 
form1.addEventListener('keyup',() =>{
    press();
})
function press(){
    real.innerHTML = textarea.value.length;
    remain.innerHTML = textarea.getAttribute('maxlength')-textarea.value.length; 

    if(remain.innerHTML== 0){
        remain.style.color = "red"
        remain.style.fontSize= "30px"
    }else{
        remain.style.color = "white"
        remain.style.fontSize= "30px"
    }
}

