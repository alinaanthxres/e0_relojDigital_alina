window.onload = function() {
    setInterval(getTime, 1000);
};

function getTime(){
  
	let date = new Date();

	let hours    = date.getHours();
	let seconds  = date.getSeconds();
	let minutes  = date.getMinutes();
	
	let dateString = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes + ' : ' + ( seconds < 10 ? '0' : '' ) + seconds;

	document.querySelector('#time').innerHTML = dateString;
			
}