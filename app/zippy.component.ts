import { Input, Component } from 'angular2/core';
@Component({
    selector: 'zippy',
    template:`  
    <div class="panel panel-default">
        <div class="panel heading" (click)="toggle()">
            {{title}}
            <i class="pull-right glyphicon" 
            [ngClass]="{ 
                'glyphicon-chevron-down': !opened,  
                'glyphicon-chevron-up': opened 
            }"
            >
            </i>
        </div>
        <div *ngIf="opened" class="panel-body">
            <ng-content></ng-content>
        </div>
    </div>
    

    `,
    styles: [`
        .heading{
            cursor: pointer;
        }
        `
    ]
})

export class ZippyComponent {

    opened = false;
    @Input() title;

    toggle(){
        this.opened = !this.opened;

    }
}