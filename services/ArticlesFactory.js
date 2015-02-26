whackerNews.factory('ArticlesFactory', function ArticlesFactory() {
  var factory = {};
  factory.articles = [];
  factory.addArticle = function() {
    var postedDate = new Date();
    factory.articles.push({ name: factory.articleName,
      id: factory.articles.length + 1,
      link: factory.linkName, votes: 0,
      datePosted: postedDate, comments: []});
        factory.articleName = null;
        factory.linkName = null;

  };
  factory.upVote = function(article) {
    article.votes += 1;
  };
  return factory;
});
