

let random=document.querySelector('#linkres')


function getRandom(){
  window.location.href= "https://www.txomgburger.com/"
}

random.addEventListener('click',getRandom)

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('the form has been submitted successfully')
}
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);