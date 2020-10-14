/* Creare un array con un insieme di indirizzi email.
Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).
Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)
*/

//CREO ARRAY CON EMAIL

var email_list = ['pinco@gmail.com', 'pallo@gmail.com', 'pippo@gmail.com', 'mario@gmail.com', 'franco@gmail.com', 'piero@gmail.com', 'mimmo@gmail.com'];

console.log(email_list);

//CHIEDO LA MAIL ALL'USER

var user_email_address = prompt('Qual\'è il tuo indirizzo email?');

var email_found = false;


//CICLO FOR PER CONVALIDARE LA MAIL DELL'USER

for (var i = 0; i < email_list.length; i++) {
    if (user_email_address == email_list[i] ) {
        email_found = true;
    }
}

if (email_found == true) {
    document.getElementById('check_mail').innerHTML = ('Benvenuto');
} else {
    alert('Mail non valida');
}
