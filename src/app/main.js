import 'core-js/stable';
import angular from 'angular';
import {components} from 'components';

const MODULE_NAME = 'sbApp';

angular
    .module(MODULE_NAME, [
        components
    ]);

angular.element(document).ready(() => {
    angular.bootstrap(document, [MODULE_NAME], {
        strictDi: true
    });
});
