import angular from 'angular';
import {MODULE_NAME} from './home.constants';
import {component} from './home.component';

export const home = angular
    .module(MODULE_NAME, [])
    .component(MODULE_NAME, component)
    .name;
