angular.module('tweetsApp', ['ngCleanToast', 'ngIsVisible', 'ngTweetomatic'])

.controller('tweetsController', function($scope, $filter, $anchorScroll, tweets, toasts) {
    $scope.tweets = [];
    $scope.gettweets = function(pos, id, count) {;
      //firstVisible = $filter('filter')($scope.tweets, {visible: true})[0]
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
        $scope.tweets.splice($scope.tweets.length-newtweets.length, newtweets.length);

        //$anchorScroll(firstVisible.id);
      }
    }
    
    newtweets = tweets.get(20);
    newtweets.forEach(function(newtweet) {
      $scope.tweets.push(newtweet);
    })
})

.directive('tweet', function(toasts, $anchorScroll) {
    return {
        restrict: 'C',
        link: function(scope, element, attr) {
            scope.$on('visible', function(e, visible) {
                wasVisible = scope.tweet.visible;
                scope.tweet.visible = visible;
                if (visible && !wasVisible) {
                  if (scope.$last) {
                    numTweets = scope.$parent.gettweets(1, scope.tweet.id, 5);
                  }
                  if (scope.$first) {
                    numTweets = scope.$parent.gettweets(0, scope.tweet.id, 5);
                  }
                }
            });
        }
    }
});