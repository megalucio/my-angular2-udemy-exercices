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
    var VotingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VotingComponent = (function () {
                function VotingComponent() {
                    this.votes = 0;
                    this.myVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                VotingComponent.prototype.onVoteUp = function () {
                    if (this.myVote !== 1) {
                        this.myVote += 1;
                        this.vote.emit({ myVote: this.myVote });
                    }
                };
                VotingComponent.prototype.onVoteDown = function () {
                    if (this.myVote !== -1) {
                        this.myVote -= 1;
                        this.vote.emit({ myVote: this.myVote });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VotingComponent.prototype, "votes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VotingComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VotingComponent.prototype, "vote", void 0);
                VotingComponent = __decorate([
                    core_1.Component({
                        selector: 'voting',
                        template: "\n    <div class=\"voter\">\n        <i class=\"glyphicon glyphicon-menu-up vote-button\" \n            [class.highlighted]= \"myVote===1\"\n            (click)=\"onVoteUp()\"\n        ></i>\n        <span>{{votes + myVote}}</span>\n        <i class=\"glyphicon glyphicon-menu-down vote-button\" \n            [class.highlighted]= \"myVote===-1\"\n            (click)=\"onVoteDown()\"\n        ></i>\n    </div>        \n    ",
                        styles: ["\n        .highlighted {\n            color: orange;\n        }\n        .voter {\n            width:20px;\n            text-align: center;\n            color: #999;\n        }\n        .vote-button {\n            font-weight: bold;\n            cursor: pointer;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VotingComponent);
                return VotingComponent;
            }());
            exports_1("VotingComponent", VotingComponent);
        }
    }
});
//# sourceMappingURL=voting.component.js.map