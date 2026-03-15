const scriptURL = "PASTE_GOOGLE_SCRIPT_URL_HERE"

const form = document.forms['contactForm']

form.addEventListener('submit', e => {
e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Form Submitted Successfully"))
.catch(error => alert("Error!"))
})
