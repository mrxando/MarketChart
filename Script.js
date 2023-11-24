const btn = document.querySelector('.addBTN')
const ul = document.getElementById('cart');
const li =  document.createElement("li");
const input = document.getElementById('mainInput')


function validate(input){
    if(/^\s/.test(input.value))
      input.value = '';
  }


btn.addEventListener("click",()=>{
    if(input.value === '')
    {alert("Input can't be blank!")}
    else{
    const li =  document.createElement("li");
    li.classList.add('cartElement')
    li.appendChild(document.createTextNode(input.value));
    ul.append(li);
    input.value = ''

    li.addEventListener('click',() =>{
        li.remove();
       })
}
})

