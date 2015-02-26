whackerNews.factory('ArticlesFactory', function ArticlesFactory() {
  var factory = {};
  factory.articles = [];
  factory.addArticle = function() {
    var postedDate = new Date();
    factory.articles.push({ name: factory.articleName,
      id: factory.articles.length + 1,
      link: "https://www." + factory.linkName, votes: 0, score: 5,
      datePosted: postedDate, comments: []});
        factory.articleName = null;
        factory.linkName = null;

  };

  factory.ageOfPost = function(article) {
    var currentDate = new Date();
    var secondsElapsed = Math.floor((currentDate - article.datePosted)/1000);
    return secondsElapsed;
  }

  factory.reSort = function(articles) {
    articles.sort(function(a, b) {
      return b.score - a.score;
    });
  }

  factory.upVote = function(article) {
    article.votes += 1;
    article.score += 1;
    factory.articles.forEach(function(post) {
      post.score -= (factory.ageOfPost(post)/10);
      if (post.score <= 0) {
        factory.articles.splice(factory.articles.indexOf(post), 1);
        alert(post.name + " is so 10 seconds ago. Get with it, yo!");
      }
    });
    factory.reSort(factory.articles);
  };

  return factory;

});
