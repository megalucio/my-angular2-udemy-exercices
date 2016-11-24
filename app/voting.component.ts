import { Input, Output, EventEmitter, Component } from 'angular2/core';

@Component({
    selector: 'voting',
    template:`
    <div class="voter">
        <i class="glyphicon glyphicon-menu-up vote-button" 
            [class.highlighted]= "myVote===1"
            (click)="onVoteUp()"
        ></i>
        <span>{{votes + myVote}}</span>
        <i class="glyphicon glyphicon-menu-down vote-button" 
            [class.highlighted]= "myVote===-1"
            (click)="onVoteDown()"
        ></i>
    </div>        
    `,
    styles:[`
        .highlighted {
            color: orange;
        }
        .voter {
            width:20px;
            text-align: center;
            color: #999;
        }
        .vote-button {
            font-weight: bold;
            cursor: pointer;
        }
    `]
})

export class VotingComponent{
    @Input() votes = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();
    
    onVoteUp(){
        if(this.myVote !== 1){
            this.myVote += 1;
            this.vote.emit({myVote:this.myVote});
        }   
    }

    onVoteDown(){
        if(this.myVote !== -1){
            this.myVote -= 1;
            this.vote.emit({myVote:this.myVote});
        }
    }
}