"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../../services/auth/auth.service");
var error_handler_service_1 = require("../../services/error.handler.service/error.handler.service");
var todos_service_1 = require("../../services/todos.service/todos.service");
var AuthComponent = (function () {
    function AuthComponent(todoService, authService, errorH) {
        this.isHiddenAuth = 'inactive';
        this.alerts = 'inactive';
        this.guestAccInit = new core_1.EventEmitter();
        this.authService = authService;
        this.todoService = todoService;
        this.errorH = errorH;
    }
    AuthComponent.prototype.signIn = function (ev) {
        var _this = this;
        if (ev.isHiddenAuth) {
            this.isHiddenAuth = 'inactive';
        }
        else {
            this.authService.signIn(ev.email, ev.pass)
                .then(function (resp) {
                console.log(resp);
                if (resp.uid) {
                    _this.signInMsgHandler("You have successfully registered!");
                    _this.isHiddenAuth = 'inactive';
                }
            })
                .catch(function (error) {
                _this.signInMsgHandler(_this.errorH.displayErrors(error));
            });
        }
    };
    AuthComponent.prototype.logIn = function (ev) {
        var _this = this;
        if (ev.isHiddenAuth) {
            this.isHiddenAuth = 'inactive';
        }
        else {
            this.authService.logIn(ev.email, ev.pass)
                .then(function (resp) {
                if (resp.uid) {
                    _this.signInMsgHandler("You have successfully logged in!");
                    _this.isHiddenAuth = 'inactive';
                }
            })
                .catch(function (error) {
                _this.signInMsgHandler(_this.errorH.displayErrors(error));
            });
        }
    };
    AuthComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logOut()
            .then(function (resp) {
            if (!resp) {
                _this.todoService.clearLocalStorage([_this.todoService.lSName[0]]);
                _this.isHiddenAuth = 'inactive';
                _this.signInMsgHandler("You have successfully logged out!");
                _this.guestAccInit.emit({ guestAccInit: true });
            }
        })
            .catch(function (error) {
            _this.errorH.handleError(error);
        });
    };
    // Info. messag
    AuthComponent.prototype.signInMsgHandler = function (msg) {
        var _this = this;
        this.message = msg;
        this.alerts = 'active';
        setTimeout(function () {
            _this.alerts = 'inactive';
        }, 2000);
    };
    return AuthComponent;
}());
__decorate([
    core_1.Input('data-logInBtn'),
    __metadata("design:type", String)
], AuthComponent.prototype, "logInBtn", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AuthComponent.prototype, "guestAccInit", void 0);
AuthComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'auth-wndw',
        styleUrls: ['auth.component.css'],
        template: "\n    <cap [style.display]=\"isHiddenAuth === 'active' ? 'block' : 'none'\"></cap>\n    <flat-button [raised-button-name]=\"this.logInBtn\" (click)=\"isHiddenAuth === 'active' ? isHiddenAuth = 'inactive' : isHiddenAuth = 'active';\" class=\"reg-btn\"></flat-button>\n    <md-card id=\"auth-window\" class=\"auth-window wrapper\"\n            (keyup.escape)=\"isHiddenAuth = 'inactive'; $event.stopPropagation();\"\n            [@openHide]=\"isHiddenAuth\">\n        <auth-form [auth-form-name]=\"'SignIn'\" (authEvent)=\"signIn($event)\"></auth-form>\n        <auth-form [auth-form-name]=\"'LogIn'\" (authEvent)=\"logIn($event)\"></auth-form>\n        <md-toolbar class=\"auth-window__logout-name\">LogOut</md-toolbar>\n        <md-card-content class=\"auth-window__logout\">\n                <flat-button [raised-button-name]=\"'Log Out'\" (click)=\"logOut();\"></flat-button>\n        </md-card-content>\n    </md-card>\n    <m-w-alert [data-id]=\"this.message\" [data-bind]=\"alerts\" class=\"m-w-alert\"></m-w-alert>\n    ",
        animations: [
            core_1.trigger('openHide', [
                core_1.state('active', core_1.style({ height: '595px', opacity: 1 })),
                core_1.state('inactive', core_1.style({ height: 0, transform: 'translateX(150%)' })),
                core_1.transition('* <=> *', [
                    core_1.animate(350)
                ])
            ])
        ],
        providers: [auth_service_1.AuthService]
    }),
    __param(0, core_1.Inject(todos_service_1.TodosService)),
    __param(1, core_1.Inject(auth_service_1.AuthService)),
    __param(2, core_1.Inject(error_handler_service_1.ErrorHandlerService)),
    __metadata("design:paramtypes", [todos_service_1.TodosService,
        auth_service_1.AuthService,
        error_handler_service_1.ErrorHandlerService])
], AuthComponent);
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map