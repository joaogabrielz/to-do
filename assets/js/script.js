const button = document.getElementById('btn');
button.addEventListener('click', tarefa);

const textoV = document.getElementById('textoV')

let cont = 0;
let timeSumir;
const postit = document.getElementsByClassName('container')[0]
function tarefa(){ 
    let div = document.createElement('div')
    let chek = document.createElement('input')
    let label = document.createElement('label')

    postit.appendChild(div)
    div.appendChild(chek)
    div.appendChild(label)
   div.style.maxWidth = '300px'

    if(textoV.value.length > 20){
        label.innerText = `${textoV.value}\n`
    }
    else{
        label.innerText = textoV.value
    }

    chek.type = 'checkbox'
    textoV.value = ''

    chek.addEventListener('change', risc)

    if(label.innerText == ''){

    label.innerText = textoV.value
    chek.style.display = 'none'
    }
    else{
    cont += 1;
    }
    if(cont >= 10){
        button.style.display = 'none'
    }
  
        function risc(){
    if(chek.checked == true){
            label.classList.add('label-risc');
            timeSumir = setTimeout(sumir, 2000);
    }
    if(chek.checked == false) {
        label.classList.remove('label-risc');
        clearTimeout(timeSumir);
        }
    }
    function sumir(){
        cont -= 1;
        label.classList.remove('label-risc');
        label.innerText = ''
        chek.style.display = 'none'
    }
}
