const usrnameinput=document.querySelector('#username')
const paragraph=document.querySelector('p')
// usrnameinput.addEventListener('click',()=>{
//     console.log('Input clicked')
// })

// usrnameinput.addEventListener('dblclick',()=>{
//     console.log('Input double clicked')
// })

// let inputvalue;

// usrnameinput.addEventListener('input',(e)=>{
//     console.log(e.target.value)
//     inputvalue=e.target.value
//     paragraph.innerText=e.target.value;
// })
// usrnameinput.addEventListener('change',(e)=>{
//     console.log(e.target.value)
//     inputvalue=e.target.value
//     paragraph.innerText=e.target.value;
// })
// usrnameinput.addEventListener('focus',(e)=>{
//     console.log(e)
//     inputvalue=e.target.value
//     paragraph.innerText=e.target.value;
// })
usrnameinput.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('fom submited')
})
