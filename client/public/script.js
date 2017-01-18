angular.module('tweetsApp', ['ngCleanToast', 'ngIsVisible', 'ngTweetomatic'])

.controller('tweetsController', function($scope, tweets, toasts) {
    $scope.tweets = [];
    $scope.gettweets = function(pos, id, count) {
      
      if (pos==1) {
        newtweets = tweets.getafter(id, count);
        newtweets.forEach(function(newtweet) {
          $scope.tweets.push(newtweet);
        })
        $scope.tweets.splice(0, newtweets.length);
      } else {
        newtweets = tweets.getbefore(id, count);
        newtweets.reverse().forEach(function(newtweet) {
          $scope.tweets.unshift(newtweet);
        })
      }
    }
    
    newtweets = tweets.get(20);
    newtweets.forEach(function(newtweet) {
      $scope.tweets.push(newtweet);
    })
})

.directive('tweet', function(toasts) {
    return {
        restrict: 'C',
        link: function(scope, element, attr) {
            scope.$on('visible', function(e, visible) {
                wasVisible = scope.visible;
                scope.visible = visible;
                if (visible && !wasVisible) {
                  if (scope.$last) {
                    numTweets = scope.$parent.gettweets(1, scope.tweet.id, 5);
                    console.log(scope.$parent.tweets.length);
                  }
                  if (scope.$first) {
                    numTweets = scope.$parent.gettweets(0, scope.tweet.id, 5);
                  }
                }
            });
        }
    }
});