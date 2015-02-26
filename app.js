var whackerNews = angular.module('whackerNews', ['ui.router']);

whackerNews.config(function($stateProvider){
  $stateProvider.state('articles', {
    url: "",
    templateUrl: "partials/articles.html",
    controller: "ArticlesCtrl"
  });

   $stateProvider.state('articles.comments', {
    url: "/:articleId",
    templateUrl: "partials/articles.comments.html",
    controller: 'CommentsCtrl'
  });
});
