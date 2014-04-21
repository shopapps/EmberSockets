(function ($window) {

    "use strict";

    $window.App = Ember.Application.create({

        Socket: EmberSockets.extend({
            host: 'localhost',
            port: 8888,
            path: '',
            scheme: 'ws',
            controllers: ['index']
        })

    });

})(window);