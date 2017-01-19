angular.module('tweetsApp', ['ngIsVisible', 'ngTweetomatic'])

.controller('tweetsController', function($scope, tweets) {
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
        $scope.tweets.splice($scope.tweets.length-newtweets.length, newtweets.length);
      }
    }
    
    newtweets = tweets.get(20);
    newtweets.forEach(function(newtweet) {
      $scope.tweets.push(newtweet);
    })
})

.directive('tweet', function($filter, $anchorScroll) {
    return {
        restrict: 'C',
        link: function(scope, element, attr) {
            scope.$on('visible', function(e, visible) {
                wasVisible = scope.tweet.visible;
                scope.tweet.visible = visible;
                if (visible && !wasVisible) {
                  firstVisible = $filter('filter')(scope.$parent.tweets, {visible: true})[0].id
                  if (scope.$last) {
                    numTweets = scope.$parent.gettweets(1, scope.tweet.id, 5);
                    scope.$apply();
                    $anchorScroll(firstVisible);
                  }
                  if (scope.$first) {
                    numTweets = scope.$parent.gettweets(0, scope.tweet.id, 5);
                    scope.$apply();
                    $anchorScroll(firstVisible);
                  }
                }
            });
        }
    }
});