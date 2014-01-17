'use strict';

angular.module('<%= scriptAppName %>')
.controller('MainCtrl', function ($scope) {
    <% if (sample) { %>
    $scope.awesomeThings = [];
    dpd.things.get(function(data) {
        if (data.length > 0) {
            $scope.awesomeThings = data;
            $scope.$apply();
        } else {
            // DB is emtpy, let's populate it
            var awesomeThings = [
                {
                    name: 'HTML5 Boilerplate',
                    description: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
                    link: 'http://html5boilerplate.com/'
                },
                {
                    name: 'AngularJS',
                    description: 'AngularJS is a toolset for building the framework most suited to your application development.',
                    link: 'http://angularjs.org/'
                },
                {
                    name: 'Karma',
                    description: 'Spectacular Test Runner for JavaScript.',
                    link: 'http://karma-runner.github.io/0.10/index.html'
                },
                {
                    name: 'Deployd',
                    description: 'The simplest way to build an API.',
                    link: 'http://deployd.com/'
                }
            ];
            for (var index in awesomeThings) {
                dpd.things.post(awesomeThings[index], function(data) {
                    $scope.awesomeThings.push(data);
                    $scope.$apply();
                })
            }
        }
    });
    <% } %>

});