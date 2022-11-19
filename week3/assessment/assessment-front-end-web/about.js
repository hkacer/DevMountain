console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('the form has been submitted successfully')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let pic=document.querySelector('#cat')

function compliment(){
	
	alert('You are doing great!')
}

pic.addEventListener('mouseover',compliment)