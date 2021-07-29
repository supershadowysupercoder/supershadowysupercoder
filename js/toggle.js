
//Vars for active class
const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')


//add event listener for toggle and navigation
toggle.addEventListener('click', ()=> {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})


