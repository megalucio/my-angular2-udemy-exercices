System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tweet;
    return {
        setters:[],
        execute: function() {
            Tweet = (function () {
                function Tweet(author, tweet, nickname, likes) {
                    this.author = author;
                    this.tweet = tweet;
                    this.nickname = nickname;
                    this.likes = likes;
                }
                return Tweet;
            }());
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=tweet.js.map