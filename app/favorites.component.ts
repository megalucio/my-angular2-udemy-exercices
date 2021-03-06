import {Component} from 'angular2/core';

@Component({
    selector: 'favorites',
    template: `
        <i class="glyphicon" 
        [class.glyphicon-star-empty]="!isFavorite" 
        [class.glyphicon-star]="isFavorite" 
        (click)="onClick()"
        >
        </i>
    `,
})

export class FavoritesComponent { 
   isFavorite = false;

   onClick(){
      this.isFavorite = !this.isFavorite;
   }
}