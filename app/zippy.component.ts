import { Input, Component } from 'angular2/core';
@Component({
    selector: 'zippy',
    template:`  
    <div class="panel panel-default">
        <div class="panel heading">
            {{title}}
            <i class="glyphicon" 
            [ngClass]="{ 
                'glyphicon-chevron-down': !opened,  
                'glyphicon-chevron-up': opened 
            }"
            (click)="onClick()"
            >
            </i>
        </div>
        <div *ngIf="opened" class="panel-body">
            <ng-content></ng-content>
        </div>
    </div>
    

    `,
    styles: [`
        .glyphicon-chevron-up {
            color: #ccc;
            cursor: pointer;
            position: absolute;
            top: 8px;
            right: 16px;
        }
        .glyphicon-chevron-down {
            color: #ccc;
            cursor: pointer;
            position: absolute;
            top: 8px;
            right: 16px;
        }
        `
    ]
})

export class ZippyComponent {

    opened = false;
    @Input() title;

    onClick(){
        this.opened = !this.opened;

    }
}