var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
// DB
import { FB as firebase } from "../../app.module";
import 'firebase/auth';
var AuthService = (function () {
    function AuthService() {
        this.auth = firebase.auth();
    }
    AuthService.prototype.signIn = function (email, pass) {
        return this.auth.createUserWithEmailAndPassword(email, pass);
    };
    AuthService.prototype.logIn = function (email, pass) {
        return this.auth.signInWithEmailAndPassword(email, pass);
    };
    AuthService.prototype.logOut = function () {
        return this.auth.signOut();
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map