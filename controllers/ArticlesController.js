whackerNews.controller('ArticlesCtrl', function ArticlesCtrl($scope, ArticlesFactory){
  $scope.articles = ArticlesFactory.articles;
  $scope.ArticlesFactory = ArticlesFactory;
});
