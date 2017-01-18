angular.module('tweetsApp', ['ngCleanToast', 'ngIsVisible', 'ngTweetomatic'])

.controller('tweetsController', function($scope, tweets, toasts) {
    $scope.tweets = [];
    $scope.gettweets = function() {
        newTweets = tweets.get($scope.tweets.length, 20);
        if (newTweets.length >0) {
            newTweets.forEach(function(newTweet) {
                $scope.tweets.push(newTweet);
            });
        }
    }
    $scope.gettweets();
})

.directive('tweet', function() {
    return {
        restrict: 'C',
        link: function(scope, element, attr) {
            scope.$on('visible', function(e, visible) {
                wasVisible = scope.visible;
                scope.visible = visible;
                if ((visible) && (!wasVisible) && (scope.$parent.tweets.indexOf(scope.tweet) == scope.$parent.tweets.length - 5)) {
                    scope.$parent.gettweets();
                }
            });
        }
    }
});