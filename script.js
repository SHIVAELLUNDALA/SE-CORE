const scriptURL = "https://script.google.com/macros/s/AKfycbz_N3roK5Xj9VJ8RO93r9PI7z5yIcok0JshE2g1ROHvF9Y6lIErHKd4800ORS4ZncVJ/exec"

const form = document.forms['contactForm']

form.addEventListener('submit', e => {
e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Form Submitted Successfully"))
.catch(error => alert("Error!"))
})
