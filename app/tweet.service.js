System.register(['./tweet'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tweet_1;
    var TweetService;
    return {
        setters:[
            function (tweet_1_1) {
                tweet_1 = tweet_1_1;
            }],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [new tweet_1.Tweet("Fal Fernandez", "Hola soy falte, el amor es mi pasion", "fal23", 5),
                        new tweet_1.Tweet("Tal Lopez", "Hola y hay que amar", "tal23", 6),
                        new tweet_1.Tweet("Cual Maldez", "Tengo el amor del mundo", "mal43", 7)];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map