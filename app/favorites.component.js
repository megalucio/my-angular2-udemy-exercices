System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var FavoritesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavoritesComponent = (function () {
                function FavoritesComponent() {
                    this.isFavorite = false;
                }
                FavoritesComponent.prototype.onClick = function () {
                    this.isFavorite = !this.isFavorite;
                };
                FavoritesComponent = __decorate([
                    core_1.Component({
                        selector: 'favorites',
                        template: "\n        <i class=\"glyphicon\" \n        [class.glyphicon-star-empty]=\"!isFavorite\" \n        [class.glyphicon-star]=\"isFavorite\" \n        (click)=\"onClick()\"\n        >\n        </i>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoritesComponent);
                return FavoritesComponent;
            }());
            exports_1("FavoritesComponent", FavoritesComponent);
        }
    }
});
//# sourceMappingURL=favorites.component.js.map