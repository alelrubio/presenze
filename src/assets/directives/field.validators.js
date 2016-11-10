/**
 * Created by esc08andbott on 01/10/2016.
 */

module.exports = function (ngModule) {

    ngModule

        .directive('validatePassword', function() {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function($scope, element, attrs, ngModel) {
                    ngModel.$validators.passwordNotValid = function(value){
                        console.log("VALUE " + value);

                        return !!(value != null && value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/));
                    };
                }
            }
        })
        .directive('validateEmail', function() {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function($scope, element, attrs, ngModel) {
                    ngModel.$validators.emailNotValid = function(value){
                        return !!(value != null && value.match(/^[a-z._-]+\@[a-z._-]+\.[a-z]{2,4}$/));
                    };
                }
            }
        })
};
