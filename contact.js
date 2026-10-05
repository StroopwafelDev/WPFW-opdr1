const form = document.getElementById("contactformulier");

const alertbox = document.getElementById("alerts")

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const voornaam = document.getElementById("firstname").value;
    const achternaam = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;

    if(voornaam == ""){
        alertbox.innerHTML = "Fout. Veld niet ingevuld. Vul een voornaam in."
    } else if( achternaam == ""){
        alertbox.innerHTML = "Fout. Veld niet ingevuld. Vul een achternaam in."
    }else if( email == ""){
        alertbox.innerHTML = "Fout. Veld niet ingevuld. Vul een email in."
    } else {
        alertbox.innerHTML = "Gelukt. Alle velden zijn ingevuld en de informatie is verstuurd"
    }

});