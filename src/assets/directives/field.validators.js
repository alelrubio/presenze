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
                        return !!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/);
                    };
                }
            }
        })
};
