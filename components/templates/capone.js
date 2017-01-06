/**
 * Controller for the dashboard route.
 * Render proper template.
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('CapOneTemplateController', CapOneTemplateController);

    CapOneTemplateController.$inject = [];
    function CapOneTemplateController() {
        var ctrl = this;

        ctrl.tabs = [
            { name: "Widget"},
            { name: "Pipeline"}
           ];

        ctrl.widgetView = ctrl.tabs[0].name;
        ctrl.toggleView = function (index) {
            ctrl.widgetView = typeof ctrl.tabs[index] === 'undefined' ? ctrl.tabs[0].name : ctrl.tabs[index].name;
        };

        ctrl.hasComponents = function (dashboard, names) {
            var hasAllComponents = true;

            try {
                _(names).forEach(function (name) {
                    if(!dashboard.application.components[0].collectorItems[name]) {
                        hasAllComponents = false;
                    }
                });
            } catch(e) {
                hasAllComponents = false;
            }

            //return hasAllComponents;
            return true;
        };
    }
})();
