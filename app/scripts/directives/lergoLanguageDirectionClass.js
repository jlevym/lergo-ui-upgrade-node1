'use strict';

angular.module('lergoApp')
    .directive('lergoLanguageDirectionClass', function (LergoTranslate) {
        return {
            restrict: 'A',
            link: function postLink(scope, element/*, attrs*/) {

                scope.$watch(function () {
                        return LergoTranslate.getLanguage();
                    },
                    function (newValue, oldValue) {
                        try {

                            var oldDirection = LergoTranslate.getDirection(oldValue);
                            element.removeClass(oldDirection);
                        } catch (e) {
                        }

                        try {
                            var newDirection = LergoTranslate.getDirection(newValue);
                            element.addClass(newDirection);
                        } catch (e) {
                        }
                    }
                );
            }
        };
    });
