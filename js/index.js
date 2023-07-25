document.addEventListener('DOMContentLoaded', () =>{
    
const mainContent = document.getElementById('mainContent')
const counter = document.getElementById('number')
const btnReset = document.getElementById('btnReset')
const btnMenos = document.getElementById('btnMenos')
let numb = 0


btnReset.addEventListener('click', (ev) =>{
          ev.preventDefault()
          numb = 0
          counter.textContent = numb;
         
          
})


document.addEventListener('keydown', (ev)=>{
  ev.preventDefault()
    if(ev.key === 'r'){
    numb = 0
    counter.textContent = numb
  }
})

document.addEventListener('keydown', (ev) =>{
  ev.preventDefault()
  if(ev.key === 'Backspace'){
    numb--
    counter.textContent = numb
  }

})

document.addEventListener('keydown', (event)=>{
      
    if (event.code === 'Space') {
        numb++;
        counter.textContent = numb;
      }
      else if(numb < 0){
        numb = 0
        counter.textContent = numb
      }   
    
});





})