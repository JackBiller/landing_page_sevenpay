
function capturarLead() {
	var email = $("#email").val();
	if (email == '' || !isEmail(email))
		return (alert('Informe o email!'), $("#email")[0].focus());

	localStorage.setItem('emailLead', email);
	window.location.assign('./thanks.html');
}

function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}
