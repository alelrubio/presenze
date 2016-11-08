/**
 * Created by esc08andbott on 01/10/2016.
 */


describe('loginCtrl', function() {

    var $scope, createController;

    beforeEach(module('app'));


    beforeEach(inject(function($controller, $rootScope, states, $state, assetsLang){
        $scope = $rootScope.$new();

        createController = function() {
            return $controller('loginCtrl', {
                '$scope': $scope,
                'states': states,
                '$state': $state,
                'assetsLang': assetsLang
            });
        };
    }));

    it('Riesco a testare', function() {

        var self = createController();
        var result = $scope.test();
        expect(result).to.equal('x');

    })
})