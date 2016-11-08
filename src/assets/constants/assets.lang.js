/**
 * Created by esc08andbott on 01/10/2016.
 */

module.exports = function (ngModule) {

    ngModule.constant('assetsLang', {

        "login": {
            "login": "Login",
            "password": "Password",
            "username": "Username",
            "newUser": "Nuovo Utente",
        },
        "errors": {
            "valueNotInserted": "Valore richiesto non inserito",
            "valueTooShort": "Valore inserito troppo corto",
			"invalidUsrPsw": "Username o Password non corretti"
        }
    })
};
