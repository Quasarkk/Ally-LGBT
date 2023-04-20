 document.getElementById("navBar").onclick = function(){
    document.getElementById("navContent").classList.toggle("h-");
    document.getElementById("navContent").classList.toggle("h-0");
    document.getElementById("cross").classList.toggle("hidden");
    document.getElementById("burger").classList.toggle("hidden");
    console.log (document.getElementById("navContent").classList)
 }

//let name1 = document.getElementById(Prénom)
//let name2 = document.getElementById(Nom)
//let message = document.getElementById(texte)
//let eMail = document.getElementById(Mail)


var form = document.getElementById("my-form");
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Votre message a été envoyé avec succès!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oups! Votre adresse email n'est pas valide, votre message n'as pas pu être transmis"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oups! Votre adresse email n'est pas valide, votre message n'as pas pu être transmis"
      });
    }
    form.addEventListener("submit", handleSubmit)
