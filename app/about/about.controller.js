/**
 * Created by nde on 20/02/16.
 */
;(function(angular){
    angular.module('nde')
        .controller('nde.aboutController', Ctrl);

    function Ctrl(){
        var today = new Date();
        this.years = today.getFullYear() - 2010;
    }
})(window.angular);