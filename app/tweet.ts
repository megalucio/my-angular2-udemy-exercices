export class Tweet {
    author: string;
    nickname: string;
    tweet: string;
    likes: number;

    constructor(author:string, tweet:string, nickname:string, likes: number){
        this.author = author;
        this.tweet = tweet;
        this.nickname = nickname;
        this.likes = likes;
    }
}