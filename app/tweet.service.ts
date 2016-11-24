import { Tweet } from './tweet';

export class TweetService{
    getTweets() : Tweet[]{
        return [new Tweet("Fal Fernandez", "Hola soy falte, el amor es mi pasion", "fal23", 5), 
                new Tweet("Tal Lopez", "Hola y hay que amar", "tal23", 6), 
                new Tweet("Cual Maldez", "Tengo el amor del mundo","mal43", 7)];
    }
}