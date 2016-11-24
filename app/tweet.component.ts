import { LikeComponent } from './like.component';
import { TweetService } from './tweet.service';
import { Input, Component } from 'angular2/core';
import { Tweet } from './tweet';

@Component({
    selector: 'tweet',
    template:` <div class="media">
                <div class="media-left">
                    <a href="#">
                    <img class="media-object" src="http://lorempixel.com/100/100/people/" alt="People">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">{{tweet.author}}  @{{tweet.nickname}}</h4>
                    {{tweet.tweet}}
                    <br>
                    <like [likes]="tweet.likes" [liked]=false></like>
                </div>
                </div>
    `,
    providers: [TweetService],
    directives: [LikeComponent]
})

export class TweetComponent {

    @Input() tweet: Tweet;

}