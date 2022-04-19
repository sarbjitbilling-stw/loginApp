import angular from 'angular';
import {home} from './home/module';

const MODULE_NAME = 'someFeature';

angular
    .module(MODULE_NAME, [
        home
    ]);

export const someFeature = MODULE_NAME;
