/**
 * Created by esc08andbott on 01/10/2016.
 */

module.exports = function (ngModule) {

    ngModule
        .directive('validateUsername', function() {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function($scope, element, attrs, ngModel) {
                    ngModel.$validators.usernameNotValid = function(value){
                        return !!(value != null && value.match(/^[A-Za-z][A-Za-z0-9._-]/));
                    };
                }
            }
        })

        .directive('validatePassword', function() {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function($scope, element, attrs, ngModel) {
                    ngModel.$validators.passwordNotValid = function(value){
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

        .directive('validateName', function() {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function($scope, element, attrs, ngModel) {
                    ngModel.$validators.nameNotValid = function(value){
                        return !!(value != null && value.match(/^[a-z ,.'-]+$/i));
                    };
                }
            }
        })

};
