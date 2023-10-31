
const count = document.querySelector('.count')
const triggered = document.querySelector('.triggered')
const btn = document.getElementById('btn')

let counting = 1;
let triggering = 1;

btn.addEventListener('click',()=>{
    count.innerHTML = counting++
    debounce()
})



const debounce = _.debounce(()=>{
triggered.innerHTML = triggering++
},800)