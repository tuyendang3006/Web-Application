function checksexe(){
    var homme = document.getElementById('idHomme');
    var femme = document.getElementById('idFemme');
    if(n==0){
        homme.checked = true;
        femme.checked = false;
    }
    else{
        homme.checked = false;
        femme.checked = true;
    }
}

function verif_nom_prenom(nom_prenom){
    var regexp = new RegExp("^[a-z \-]{2,}$", "i");
    
    if (regexp.test (nom_prenom))
        return true;
    
    return false;
}


function verif_age(age){
    var regexp = new RegExp("[5-140]$","");

    if (regexp.test (age))
        return true;
    
    return false;
}

function verif_preuso(preuso){
    var regexp = new RegExp("^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$", "");
    
    if (regexp.test (preuso))
        return true;
    
    return false;
}

function verif_password(mdp){
    var regexp = new RegExp("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/","");
    if (regexp.test (mdp))
        return true;
    
    return false;
}

function verif_pays(){
    var x = document.getElementById("idSelect");
    var txt = "";
    var i;
    for(i=0; i<x.length; i++){
        txt = txt + x.options[i].txt + "<br>";
    }

    document.getElementById("Pays:").innerHTML = txt;
}

function verif_formulaire () {
    var nom = document.getElementById ('nom');
    var prenom = document.getElementById ('prenom');
    var age = document.getElementById ('age');
    var preuso = document.getElementById ('preuso');
    var mdp = document.getElementById ('mdp');
    var mdpconf = document.getElementById('mdpconf');
    var pays = document.getElementById('pays');
    
    /* Si les champs existent tous */
    if (nom == null || prenom == null || age == null || preuso == null || mdp == null mdpconf == null || pays == null)
        return false;
    
    nom = nom.value;
    prenom = prenom.value;
    age = age.value;
    preuso = preuso.value;
    mdp = mdp.value;
    mdpconf = mdpconf.value;
    
    /* Si tous les champs sont remplis */
    if (nom.length > 0 && prenom.length > 0 && age.length > 0 && preuso.length > 0 && mdp.length > 0 && mdpconf.length > 0) {
        /* Si le champs nom est correct */
        if (verif_nom_prenom (nom)) {
            /* Si le champs prenom est correct */
            if (verif_nom_prenom (prenom)) {
                /* Si l'age est correct */
                if (verif_age (age)) {
                    /* Si le champs email est correct */
                    if (verif_preuso (preuso)) {
                        alert ('Message correctement envoyé');
                        if(verif_password(mdp)){
                            alert ('Message correctement envoyé');
                            if(verif_password(mdpconf)){
                                alert ('Message correctement envoyé');
                                return true;
                            }
                            else msg_erreur = "Password invalide";
                            return true;
                        }
                        else msg_erreur = "Password invalide";
                        return true;
                    }
                    else msg_erreur = "Email invalide";
                }
                else msg_erreur = "Date de naissance invalide";
            }
            else msg_erreur = "Prénom invalide";
        }
        else msg_erreur = "Nom invalide";
    }
    else msg_erreur = "Veuillez remplir tous les champs";
    
    alert (msg_erreur);
    
    return false;
}

document.addEventListener("DOMContentLoaded",function(event){
    console.log("Formulaire");
    var btFormulaire=document.getElementById("Soumettre");
    btFormulaire.addEventListener("click", verif_formulaire());
});
