System.register(['./sites.component', './site.component', './site-list.component', './site.service', './sort-sites.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (sites_component_1_1) {
                exportStar_1(sites_component_1_1);
            },
            function (site_component_1_1) {
                exportStar_1(site_component_1_1);
            },
            function (site_list_component_1_1) {
                exportStar_1(site_list_component_1_1);
            },
            function (site_service_1_1) {
                exportStar_1(site_service_1_1);
            },
            function (sort_sites_pipe_1_1) {
                exportStar_1(sort_sites_pipe_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=sites.js.map