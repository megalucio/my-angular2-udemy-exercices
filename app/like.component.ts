import { Input, Component } from 'angular2/core';
@Component({
    selector: 'like',
    template:`
    <i class="glyphicon glyphicon-heart" 
        [class.highlighted]="liked"
        (click)="onClick()"
    >
    </i>
    <span>{{likes}}</span>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .highlighted {
            color: deeppink;
        }
        `
    ]
})

export class LikeComponent {

    @Input() likes = 0;
    @Input() liked = false;

    onClick(){
        this.liked = !this.liked;
        this.likes += this.liked? 1: -1;
    }
}