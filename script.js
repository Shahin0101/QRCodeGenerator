
const wrapper = document.querySelector('.wrapper')
const input = document.querySelector('input')
const button = document.querySelector('button')
const img = document.querySelector('img')

let url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`

button.addEventListener('click' , () => {

     let inputvalue = input.value.trim()
 
     if(inputvalue.length){ 
        button.innerHTML = 'Generating  Qr Code ....'
        img.setAttribute('src' , url)

        img.addEventListener('load' , () => {
              wrapper.classList.toggle('active')
               button.innerHTML = 'generat Qr Code'
        })

     }

})
input.addEventListener('keyup' , () => {
    if(!input.value.trim()){
wrapper.classList.remove('active')
    }
})