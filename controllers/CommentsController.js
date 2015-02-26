whackerNews.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, ArticlesFactory, UtilitiesFactory) {
  $scope.article = UtilitiesFactory.findById(ArticlesFactory.articles, $stateParams.articleId)
  $scope.addComment = function() {
    $scope.article.comments.push({ comment: $scope.comments });
    $scope.comments = null;
  }
});
