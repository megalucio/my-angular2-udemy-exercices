System.register(['./zippy.component', './tweet.service', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var zippy_component_1, tweet_service_1, core_1;
    var AppComponent;
    return {
        setters:[
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.tweets = tweetService.getTweets();
                }
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: " <!--\n                <h1>My First Angular 2 App</h1>\n                <courses></courses>\n                <authors></authors>\n                <favorites></favorites>\n                <like [likes]=10 [liked]=false></like>\n                \n                <voting \n                    [votes]=10 \n                    [myVote]=0\n                    (vote)=\"onVote($event)\"\n                ></voting>              \n                <div *ngFor=\"#tweet of tweets\">\n                    <tweet [tweet]=\"tweet\"></tweet>\n                </div>\n                -->\n                <zippy title=\"This is the title\">\n                    This is the content\n                </zippy>\n                <zippy title=\"T\u00F3came el pie\">\n                    Mi pie\n                </zippy>\n\n                ",
                        //directives: [CoursesComponent, AuthorsComponent, FavoritesComponent, LikeComponent, VotingComponent],
                        //directives: [TweetComponent],
                        directives: [zippy_component_1.ZippyComponent],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map