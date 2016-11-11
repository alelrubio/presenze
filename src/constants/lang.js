/**
 * Created by esc08andbott on 01/10/2016.
 */

module.exports = function (ngModule) {

    ngModule.constant('lang', {
        "errors": {
        	"usernameNotValid": "Username non valido, valori ammessi sono lettere, numeri ed i caratteri '.', '-' e '_'",
            "passwordNotValid": "Password non valida, inserire almeno un carattere Minuscolo, un carattere Maiuscolo ed una cifra",

			"emailNotValid": "Email non corretta",

			"nameNotValid": "Valore inserito non valido"
        }
    })
};
