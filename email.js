function sendEmail(){

window.location = ("mailto:?subject=" 
	+ escape(this.document.title)
	+ "&body=" 
	+ escape(this.document.URL)
	);
}

sendEmail();