import { TweetService } from './tweet.service';
import { TweetComponent } from './tweet.component';
import { VotingComponent } from './voting.component';
import { LikeComponent } from './like.component';
import { FavoritesComponent } from './favorites.component';
import { AuthorsComponent } from './authors.component';
import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import { Tweet } from './tweet';

@Component({
    selector: 'my-app',
    template: ` <!--
                <h1>My First Angular 2 App</h1>
                <courses></courses>
                <authors></authors>
                <favorites></favorites>
                <like [likes]=10 [liked]=false></like>
                
                <voting 
                    [votes]=10 
                    [myVote]=0
                    (vote)="onVote($event)"
                ></voting>
                -->
                <div *ngFor="#tweet of tweets">
                    <tweet [tweet]="tweet"></tweet>
                </div>
                `,
    //directives: [CoursesComponent, AuthorsComponent, FavoritesComponent, LikeComponent, VotingComponent],
    directives: [TweetComponent],
    providers: [TweetService]
})
export class AppComponent {

    tweets: Tweet[];

    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    } 

    onVote($event){
        console.log($event);
    }


}