let getColorBtn=document.querySelector('#color')
let getPlaceBtn=document.querySelector('#place')
let getRitualBtn=document.querySelector('#ritual')

function color(){
  alert('My favorite color is Rainbow ')
}
getColorBtn.addEventListener('click',color)

function place(){
  alert(' My favorite place to visit is Egypt')
}

getPlaceBtn.addEventListener('click',place)

function ritual(){
  alert('I am praciting my religion and we have so many rituals. I love fasting')
}

getRitualBtn.addEventListener('click',ritual)


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('the form has been submitted successfully')
}
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
