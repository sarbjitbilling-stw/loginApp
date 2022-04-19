import angular from 'angular';
import {someFeature} from './somefeature';

const MODULE_NAME = 'components';

angular
    .module(MODULE_NAME, [
        someFeature
    ]);

export const components = MODULE_NAME;
