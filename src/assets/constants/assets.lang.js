/**
 * Created by esc08andbott on 01/10/2016.
 */

module.exports = function (ngModule) {

    ngModule.constant('assetsLang', {

        "login": {
            "login": "Login",
            "firstName": "Nome",
            "lastName": "Cognome",
            "email": "Email",

            "password": "Password",
            "username": "Username",
            "newUser": "Nuovo Utente",
            "saveUser": "Salva Utente",
            "backToLogin": "Torna alla pagina di login",
            "userSaved": "Utente salvato",
            
        },
        "errors": {
            "valueNotInserted": "Valore richiesto non inserito",
            "usernameTooShort": "Il campo deve essere composto da almeno 3 caratteri",
            "passwordTooShort": "Il campo deve essere composto da almeno 8 caratteri",
			"invalidUsrPsw": "Username o Password non corretti",
            "usernamealreadyDefined": "Username già presente"
        }
    })
};
