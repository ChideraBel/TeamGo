webpackJsonp([30],{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataProvider = /** @class */ (function () {
    function DataProvider() {
    }
    DataProvider.prototype.setLocation = function (loca) {
        this.location = loca;
    };
    DataProvider.prototype.getLocation = function () {
        return this.location;
    };
    DataProvider.prototype.setPlayerInfo = function (Name, Grade, Age, Color, Pos) {
        this.name = Name;
        this.grade = Grade;
        this.age = Age;
        this.color = Color;
        this.pos = Pos;
    };
    DataProvider.prototype.getPlayerName = function () {
        return this.name;
    };
    DataProvider.prototype.getPlayerGrade = function () {
        return this.grade;
    };
    DataProvider.prototype.getPlayerAge = function () {
        return this.age;
    };
    DataProvider.prototype.getPlayerColor = function () {
        return this.color;
    };
    DataProvider.prototype.getPlayerPos = function () {
        return this.pos;
    };
    DataProvider.prototype.setLocation2 = function (loca) {
        this.location2 = loca;
    };
    DataProvider.prototype.getLocation2 = function () {
        return this.location2;
    };
    DataProvider.prototype.setFormationLocation = function (formLoca) {
        this.formLoca = formLoca;
    };
    DataProvider.prototype.getFormationLocation = function () {
        return this.formLoca;
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.return = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\TeamGo\src\pages\forgot-password\forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Reset Password</ion-title>\n    <ion-buttons left><button ion-button icon-only (click)="return()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, afAuth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.user = {};
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    //Register new user to Firebase Authentication
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                if (user.password == this.confirmPassword) {
                    result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
                        .then(function (res) {
                        _this.finishRegistering();
                        var user = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
                        user.sendEmailVerification();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        (function (error) { return _this.presentToast(error.message); });
                    });
                }
                else {
                    this.presentToast("Passwords entered do not match!");
                }
                return [2 /*return*/];
            });
        });
    };
    RegisterPage.prototype.presentToast = function (error) {
        var toast = this.toastCtrl.create({
            message: error,
            duration: 2000
        });
        toast.present();
    };
    RegisterPage.prototype.return = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.finishRegistering = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        this.presentToast("Please check your email to verify your account!");
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\TeamGo\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Register</ion-title>\n    <ion-buttons left><button ion-button icon-only (click)="return()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="signup-button" padding>\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label floating>Name</ion-label>\n    <ion-input type="text" [(ngModel)]="name"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  \n   </ion-item>\n\n  <ion-item>\n      <ion-label floating>Confirm Password</ion-label>\n      <ion-input type="password" [(ngModel)]="confirmPassword"></ion-input>\n    </ion-item>\n\n    <button ion-button (click)="register(user)">Register</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsBPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basketball_dashboard_basketball_dashboard__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewsBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsBPage = /** @class */ (function () {
    function NewsBPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsBPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsBPage.prototype.return = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__basketball_dashboard_basketball_dashboard__["a" /* BasketballDashboardPage */]);
    };
    NewsBPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-news-b',template:/*ion-inline-start:"C:\TeamGo\src\pages\news-b\news-b.html"*/'<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>Sport\'s news today</ion-title>\n    <ion-buttons left><button ion-button icon-only (click)="return()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <iframe src="https://www.skysports.com/nba" width="100%" height="1000">Loading...</iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\news-b\news-b.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], NewsBPage);
    return NewsBPage;
}());

//# sourceMappingURL=news-b.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolleyballFirstteamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__volleyball_teammanagement_volleyball_teammanagement__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the VolleyballFirstteamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VolleyballFirstteamPage = /** @class */ (function () {
    function VolleyballFirstteamPage(navCtrl, navParams, afAuth, afd, loadCtrl, deets) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afd = afd;
        this.loadCtrl = loadCtrl;
        this.deets = deets;
        var loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.loadData();
    }
    //Loading data from Football Table
    VolleyballFirstteamPage.prototype.loadData = function () {
        this.afAuth.auth.signInAnonymously();
        this.memberCollection = this.afd.list("Volleyball");
        this.members = this.memberCollection.valueChanges();
    };
    VolleyballFirstteamPage.prototype.addToFirstTeam = function (name) {
        var db = this.afd.database.ref();
        var query = this.afd.database.ref("Volleyball").orderByKey();
        query.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == name && chval.FirstTeam == "No") {
                    var firedata = {
                        FirstTeam: "Yes"
                    };
                    db.child("Volleyball/" + pkey).update(firedata);
                    return true;
                }
                else if (chval.Name == name && chval.FirstTeam == "Yes") {
                    var firedata2 = {
                        FirstTeam: "No"
                    };
                    db.child("Volleyball/" + pkey).update(firedata2);
                    return true;
                }
            });
        });
    };
    VolleyballFirstteamPage.prototype.return = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__volleyball_teammanagement_volleyball_teammanagement__["a" /* VolleyballTeammanagementPage */]);
    };
    VolleyballFirstteamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-volleyball-firstteam',template:/*ion-inline-start:"C:\TeamGo\src\pages\volleyball-firstteam\volleyball-firstteam.html"*/'<!--\n  Generated template for the FootballFirstteamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>My First Team</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="return()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let member of members | async">\n      <ion-item>\n        <ion-label>{{member.Name}}\n          <p>{{member.FirstTeam}}</p>\n        </ion-label>\n        <button ion-button round item-right outline icon-only (click)= "addToFirstTeam(member.Name)" ><ion-icon name="arrow-dropright-circle"></ion-icon></button>\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\volleyball-firstteam\volleyball-firstteam.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], VolleyballFirstteamPage);
    return VolleyballFirstteamPage;
}());

//# sourceMappingURL=volleyball-firstteam.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketballFirstteamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basketball_teammanagement_basketball_teammanagement__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the BasketballFirstteamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BasketballFirstteamPage = /** @class */ (function () {
    function BasketballFirstteamPage(navCtrl, navParams, afAuth, afd, loadCtrl, deets) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afd = afd;
        this.loadCtrl = loadCtrl;
        this.deets = deets;
        var loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.loadData();
    }
    //Loading data from Football Table
    BasketballFirstteamPage.prototype.loadData = function () {
        this.afAuth.auth.signInAnonymously();
        this.memberCollection = this.afd.list("Basketball");
        this.members = this.memberCollection.valueChanges();
    };
    BasketballFirstteamPage.prototype.addToFirstTeam = function (name) {
        var db = this.afd.database.ref();
        var query = this.afd.database.ref("Basketball").orderByKey();
        query.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == name && chval.FirstTeam == "No") {
                    var firedata = {
                        FirstTeam: "Yes"
                    };
                    db.child("Basketball/" + pkey).update(firedata);
                    return true;
                }
                else if (chval.Name == name && chval.FirstTeam == "Yes") {
                    var firedata2 = {
                        FirstTeam: "No"
                    };
                    db.child("Basketball/" + pkey).update(firedata2);
                    return true;
                }
            });
        });
    };
    BasketballFirstteamPage.prototype.return = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__basketball_teammanagement_basketball_teammanagement__["a" /* BasketballTeammanagementPage */]);
    };
    BasketballFirstteamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-basketball-firstteam',template:/*ion-inline-start:"C:\TeamGo\src\pages\basketball-firstteam\basketball-firstteam.html"*/'<!--\n  Generated template for the FootballFirstteamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>My First Team</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="return()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let member of members | async">\n      <ion-item>\n        <ion-label>{{member.Name}}\n          <p>{{member.FirstTeam}}</p>\n        </ion-label>\n        <button ion-button round item-right outline icon-only (click)= "addToFirstTeam(member.Name)" ><ion-icon name="arrow-dropright-circle"></ion-icon></button>\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\basketball-firstteam\basketball-firstteam.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], BasketballFirstteamPage);
    return BasketballFirstteamPage;
}());

//# sourceMappingURL=basketball-firstteam.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootballFirstteamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__football_teammanagement_football_teammanagement__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FootballFirstteamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FootballFirstteamPage = /** @class */ (function () {
    function FootballFirstteamPage(navCtrl, navParams, afAuth, afd, loadCtrl, deets) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afd = afd;
        this.loadCtrl = loadCtrl;
        this.deets = deets;
        var loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.loadData();
    }
    //Loading data from Football Table
    FootballFirstteamPage.prototype.loadData = function () {
        this.afAuth.auth.signInAnonymously();
        this.memberCollection = this.afd.list("Football");
        this.members = this.memberCollection.valueChanges();
    };
    FootballFirstteamPage.prototype.addToFirstTeam = function (name) {
        var db = this.afd.database.ref();
        var query = this.afd.database.ref("Football").orderByKey();
        query.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == name && chval.FirstTeam == "No") {
                    var firedata = {
                        FirstTeam: "Yes"
                    };
                    db.child("Football/" + pkey).update(firedata);
                    return true;
                }
                else if (chval.Name == name && chval.FirstTeam == "Yes") {
                    var firedata2 = {
                        FirstTeam: "No"
                    };
                    db.child("Football/" + pkey).update(firedata2);
                    return true;
                }
            });
        });
    };
    FootballFirstteamPage.prototype.return = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__football_teammanagement_football_teammanagement__["a" /* FootballTeammanagementPage */]);
    };
    FootballFirstteamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-football-firstteam',template:/*ion-inline-start:"C:\TeamGo\src\pages\football-firstteam\football-firstteam.html"*/'<!--\n  Generated template for the FootballFirstteamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>My First Team</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="return()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let member of members | async">\n      <ion-item>\n        <ion-label>{{member.Name}}\n          <p>{{member.FirstTeam}}</p>\n        </ion-label>\n        <button ion-button round item-right outline icon-only (click)= "addToFirstTeam(member.Name)" ><ion-icon name="arrow-dropright-circle"></ion-icon></button>\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\football-firstteam\football-firstteam.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */]])
    ], FootballFirstteamPage);
    return FootballFirstteamPage;
}());

//# sourceMappingURL=football-firstteam.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolleyballMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_info_player_info__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_member_add_member__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the VolleyballMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VolleyballMembersPage = /** @class */ (function () {
    function VolleyballMembersPage(navCtrl, navParams, afAuth, afd, modalCtrl, deets, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afd = afd;
        this.modalCtrl = modalCtrl;
        this.deets = deets;
        this.loadCtrl = loadCtrl;
        var loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.loadData();
    }
    VolleyballMembersPage.prototype.loadData = function () {
        this.afAuth.auth.signInAnonymously();
        this.memberCollection = this.afd.list('/Volleyball');
        this.members = this.memberCollection.valueChanges();
        this.deets.setLocation("/Volleyball");
    };
    VolleyballMembersPage.prototype.openModal = function () {
        var addMemberModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__add_member_add_member__["a" /* AddMemberPage */]);
        addMemberModal.present();
    };
    VolleyballMembersPage.prototype.deleteItem = function (member) {
        var db = this.afd.database.ref();
        var query = this.afd.database.ref("Volleyball").orderByKey();
        query.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == member.Name && chval.Position == member.Position) {
                    db.child("Volleyball/" + pkey).remove();
                    return true;
                }
            });
        });
        var query1 = this.afd.database.ref("VolleyballPractice").orderByKey();
        query1.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == member.Name) {
                    db.child("VolleyballPractice/" + pkey).remove();
                    return true;
                }
            });
        });
    };
    VolleyballMembersPage.prototype.viewPlayer = function (name, grade, age, color, pos) {
        this.deets.setPlayerInfo(name, grade, age, color, pos);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__player_info_player_info__["a" /* PlayerInfoPage */]);
    };
    VolleyballMembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-volleyball-members',template:/*ion-inline-start:"C:\TeamGo\src\pages\volleyball-members\volleyball-members.html"*/'<!--\n  Generated template for the VolleyballMembersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Team Members</ion-title>\n     <ion-buttons end><button ion-button icon-only (click)="openModal()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item-sliding *ngFor="let member of members | async">\n    <ion-item (click)="viewPlayer(member.Name, member.Grade, member.Age, member.ColorGroup, member.Position)">  \n      <h2>{{member.Name}}</h2>\n      <p>{{member.Position}}</p>\n    </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="danger" (click)="deleteItem(member)" icon-only><ion-icon name="trash"></ion-icon></button>\n    </ion-item-options>\n</ion-item-sliding>\n</ion-list>\n</ion-content>'/*ion-inline-end:"C:\TeamGo\src\pages\volleyball-members\volleyball-members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
    ], VolleyballMembersPage);
    return VolleyballMembersPage;
}());

//# sourceMappingURL=volleyball-members.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolleyballPracticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VolleyballPracticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VolleyballPracticePage = /** @class */ (function () {
    function VolleyballPracticePage(navCtrl, navParams, afAuth, afd, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afd = afd;
        this.loadCtrl = loadCtrl;
        var loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.loadData();
    }
    VolleyballPracticePage.prototype.loadData = function () {
        this.afAuth.auth.signInAnonymously();
        this.memberCollection = this.afd.list('/VolleyballPractice');
        this.members = this.memberCollection.valueChanges();
    };
    VolleyballPracticePage.prototype.present = function (name) {
        var db = this.afd.database.ref();
        var query = this.afd.database.ref("VolleyballPractice").orderByKey();
        query.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == name && chval.Present == "No") {
                    var firedata = {
                        Present: "Yes"
                    };
                    db.child("VolleyballPractice/" + pkey).update(firedata);
                    return true;
                }
                else if (chval.Name == name && chval.Present == "Yes") {
                    var firedata2 = {
                        Present: "No"
                    };
                    db.child("VolleyballPractice/" + pkey).update(firedata2);
                    return true;
                }
            });
        });
    };
    VolleyballPracticePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-volleyball-practice',template:/*ion-inline-start:"C:\TeamGo\src\pages\volleyball-practice\volleyball-practice.html"*/'<!--\n  Generated template for the FootballPracticePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Today\'s Practice</ion-title>\n   </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let member of members | async">\n    <ion-item>\n      <ion-label>{{member.Name}}\n        <p>{{member.Present}}</p>\n      </ion-label>\n      <button ion-button round item-right outline icon-only (click)= "present(member.Name)"><ion-icon name="arrow-dropright-circle"></ion-icon></button>\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\volleyball-practice\volleyball-practice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], VolleyballPracticePage);
    return VolleyballPracticePage;
}());

//# sourceMappingURL=volleyball-practice.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolleyballShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__volleyball_dashboard_volleyball_dashboard__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item_add_item__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the VolleyballShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VolleyballShoppingPage = /** @class */ (function () {
    function VolleyballShoppingPage(navCtrl, navParams, afAuth, afd, modalCtrl, loadCtrl, sdp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afd = afd;
        this.modalCtrl = modalCtrl;
        this.loadCtrl = loadCtrl;
        this.sdp = sdp;
        var loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.loadData();
    }
    //Loading data from ShoppingList Table
    VolleyballShoppingPage.prototype.loadData = function () {
        this.afAuth.auth.signInAnonymously();
        this.shoppingItemsCollection = this.afd.list("VolleyballShoppingList");
        this.shoppingItems = this.shoppingItemsCollection.valueChanges();
    };
    VolleyballShoppingPage.prototype.openModal = function () {
        var addItemModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_item_add_item__["a" /* AddItemPage */]);
        addItemModal.present();
    };
    VolleyballShoppingPage.prototype.deleteItem = function (member) {
        var db = this.afd.database.ref();
        var query = this.afd.database.ref("VolleyballShoppingList").orderByKey();
        query.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == member.Name && chval.Store == member.Store) {
                    db.child("VolleyballShoppingList/" + pkey).remove();
                    return true;
                }
            });
        });
    };
    VolleyballShoppingPage.prototype.return = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__volleyball_dashboard_volleyball_dashboard__["a" /* VolleyballDashboardPage */]);
    };
    VolleyballShoppingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-volleyball-shopping',template:/*ion-inline-start:"C:\TeamGo\src\pages\volleyball-shopping\volleyball-shopping.html"*/'<!--\n  Generated template for the FootballShoppingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>My Shopping List</ion-title>\n  <ion-buttons end><button ion-button icon-only (click)="openModal()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-buttons left>\n    <button ion-button icon-only (click)="return()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n  </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n<ion-item-sliding *ngFor="let item of shoppingItems | async">\n  <ion-item>\n    <h2>{{item.Name}}</h2>\n    <p>Purchase {{item.Quantity}} pieces from {{item.Store}}</p>\n  </ion-item>\n  <ion-item-options side="right">\n    <button ion-button color="danger" (click)="deleteItem(item)" icon-only><ion-icon name="trash"></ion-icon></button>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-list>\n</ion-content>'/*ion-inline-end:"C:\TeamGo\src\pages\volleyball-shopping\volleyball-shopping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], VolleyballShoppingPage);
    return VolleyballShoppingPage;
}());

//# sourceMappingURL=volleyball-shopping.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsVPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__volleyball_dashboard_volleyball_dashboard__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewsVPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsVPage = /** @class */ (function () {
    function NewsVPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsVPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsVPage');
    };
    NewsVPage.prototype.return = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__volleyball_dashboard_volleyball_dashboard__["a" /* VolleyballDashboardPage */]);
    };
    NewsVPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-news-v',template:/*ion-inline-start:"C:\TeamGo\src\pages\news-v\news-v.html"*/'<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>Sport\'s news today</ion-title>\n    <ion-buttons left><button ion-button icon-only (click)="return()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <iframe src="https://www.worldofvolley.com/News.html" width="100%" height="1000">Loading...</iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\news-v\news-v.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], NewsVPage);
    return NewsVPage;
}());

//# sourceMappingURL=news-v.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketballMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_info_player_info__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_member_add_member__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BasketballMembersPage = /** @class */ (function () {
    function BasketballMembersPage(navCtrl, navParams, afAuth, afd, modalCtrl, deets, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afd = afd;
        this.modalCtrl = modalCtrl;
        this.deets = deets;
        this.loadCtrl = loadCtrl;
        var loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.loadData();
    }
    BasketballMembersPage.prototype.loadData = function () {
        this.afAuth.auth.signInAnonymously();
        this.memberCollection = this.afd.list('/Basketball');
        this.members = this.memberCollection.valueChanges();
        this.deets.setLocation("/Basketball");
    };
    BasketballMembersPage.prototype.openModal = function () {
        var addMemberModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__add_member_add_member__["a" /* AddMemberPage */]);
        addMemberModal.present();
    };
    BasketballMembersPage.prototype.deleteItem = function (member) {
        var db = this.afd.database.ref();
        var query = this.afd.database.ref("Basketball").orderByKey();
        query.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == member.Name && chval.Position == member.Position) {
                    db.child("Basketball/" + pkey).remove();
                    return true;
                }
            });
        });
        var query1 = this.afd.database.ref("BasketballPractice").orderByKey();
        query1.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == member.Name) {
                    db.child("BasketballPractice/" + pkey).remove();
                    return true;
                }
            });
        });
    };
    BasketballMembersPage.prototype.viewPlayer = function (name, grade, age, color, pos) {
        this.deets.setPlayerInfo(name, grade, age, color, pos);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__player_info_player_info__["a" /* PlayerInfoPage */]);
    };
    BasketballMembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-basketball-members',template:/*ion-inline-start:"C:\TeamGo\src\pages\basketball-members\basketball-members.html"*/'<!--\n  Generated template for the BasketballMembersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Team Members</ion-title>\n     <ion-buttons end><button ion-button icon-only (click)="openModal()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item-sliding *ngFor="let member of members | async">\n    <ion-item (click)="viewPlayer(member.Name, member.Grade, member.Age, member.ColorGroup, member.Position)">\n      <h2>{{member.Name}}</h2>\n      <p>{{member.Position}}</p>\n    </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="danger" (click)="deleteItem(member)" icon-only><ion-icon name="trash"></ion-icon></button>\n    </ion-item-options>\n</ion-item-sliding>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\basketball-members\basketball-members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
    ], BasketballMembersPage);
    return BasketballMembersPage;
}());

//# sourceMappingURL=basketball-members.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketballPracticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BasketballPracticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BasketballPracticePage = /** @class */ (function () {
    function BasketballPracticePage(navCtrl, navParams, afAuth, afd, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afd = afd;
        this.loadCtrl = loadCtrl;
        var loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.loadData();
    }
    BasketballPracticePage.prototype.loadData = function () {
        this.afAuth.auth.signInAnonymously();
        this.memberCollection = this.afd.list('/BasketballPractice');
        this.members = this.memberCollection.valueChanges();
    };
    BasketballPracticePage.prototype.present = function (name) {
        var db = this.afd.database.ref();
        var query = this.afd.database.ref("BasketballPractice").orderByKey();
        query.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == name && chval.Present == "No") {
                    var firedata = {
                        Present: "Yes"
                    };
                    db.child("BasketballPractice/" + pkey).update(firedata);
                    return true;
                }
                else if (chval.Name == name && chval.Present == "Yes") {
                    var firedata2 = {
                        Present: "No"
                    };
                    db.child("BasketballPractice/" + pkey).update(firedata2);
                    return true;
                }
            });
        });
    };
    BasketballPracticePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basketball-practice',template:/*ion-inline-start:"C:\TeamGo\src\pages\basketball-practice\basketball-practice.html"*/'<!--\n  Generated template for the FootballPracticePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Today\'s Practice</ion-title>\n   </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let member of members | async">\n    <ion-item>\n      <ion-label>{{member.Name}}\n        <p>{{member.Present}}</p>\n      </ion-label>\n      <button ion-button round item-right outline icon-only (click)= "present(member.Name)"><ion-icon name="arrow-dropright-circle"></ion-icon></button>\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\basketball-practice\basketball-practice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], BasketballPracticePage);
    return BasketballPracticePage;
}());

//# sourceMappingURL=basketball-practice.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootballMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_info_player_info__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_member_add_member__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FootballMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FootballMembersPage = /** @class */ (function () {
    function FootballMembersPage(navCtrl, navParams, afAuth, afd, modalCtrl, deets, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afd = afd;
        this.modalCtrl = modalCtrl;
        this.deets = deets;
        this.loadCtrl = loadCtrl;
        var loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.loadData();
    }
    //Loading data from Football Table
    FootballMembersPage.prototype.loadData = function () {
        this.afAuth.auth.signInAnonymously();
        this.memberCollection = this.afd.list('/Football');
        this.members = this.memberCollection.valueChanges();
        this.deets.setLocation("/Football");
    };
    FootballMembersPage.prototype.openModal = function () {
        var addMemberModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__add_member_add_member__["a" /* AddMemberPage */]);
        addMemberModal.present();
    };
    FootballMembersPage.prototype.deleteItem = function (member) {
        var db = this.afd.database.ref();
        var query = this.afd.database.ref("Football").orderByKey();
        query.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == member.Name && chval.Position == member.Position) {
                    db.child("Football/" + pkey).remove();
                    return true;
                }
            });
        });
        var query1 = this.afd.database.ref("FootballPractice").orderByKey();
        query1.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == member.Name) {
                    db.child("FootballPractice/" + pkey).remove();
                    return true;
                }
            });
        });
    };
    FootballMembersPage.prototype.viewPlayer = function (name, grade, age, color, pos) {
        this.deets.setPlayerInfo(name, grade, age, color, pos);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__player_info_player_info__["a" /* PlayerInfoPage */]);
    };
    FootballMembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-football-members',template:/*ion-inline-start:"C:\TeamGo\src\pages\football-members\football-members.html"*/'<!--\n  Generated template for the FootballMembersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <ion-title>Team Members</ion-title>\n       <ion-buttons end><button ion-button icon-only (click)="openModal()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let member of members | async">\n      <ion-item (click)="viewPlayer(member.Name, member.Grade, member.Age, member.ColorGroup, member.Position)">\n        <h2>{{member.Name}}</h2>\n        <p>{{member.Position}}</p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="deleteItem(member)" icon-only><ion-icon name="trash"></ion-icon></button>\n      </ion-item-options>\n  </ion-item-sliding>\n  </ion-list>\n  </ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\football-members\football-members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
    ], FootballMembersPage);
    return FootballMembersPage;
}());

//# sourceMappingURL=football-members.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootballPracticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FootballPracticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FootballPracticePage = /** @class */ (function () {
    function FootballPracticePage(navCtrl, navParams, afAuth, afd, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afd = afd;
        this.loadCtrl = loadCtrl;
        var loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.loadData();
    }
    FootballPracticePage.prototype.loadData = function () {
        this.afAuth.auth.signInAnonymously();
        this.memberCollection = this.afd.list('/FootballPractice');
        this.members = this.memberCollection.valueChanges();
    };
    FootballPracticePage.prototype.present = function (name) {
        var db = this.afd.database.ref();
        var query = this.afd.database.ref("FootballPractice").orderByKey();
        query.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == name && chval.Present == "No") {
                    var firedata = {
                        Present: "Yes"
                    };
                    db.child("FootballPractice/" + pkey).update(firedata);
                    return true;
                }
                else if (chval.Name == name && chval.Present == "Yes") {
                    var firedata2 = {
                        Present: "No"
                    };
                    db.child("FootballPractice/" + pkey).update(firedata2);
                    return true;
                }
            });
        });
    };
    FootballPracticePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-football-practice',template:/*ion-inline-start:"C:\TeamGo\src\pages\football-practice\football-practice.html"*/'<!--\n  Generated template for the FootballPracticePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Today\'s Practice</ion-title>\n   </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let member of members | async">\n    <ion-item>\n      <ion-label>{{member.Name}}\n        <p>{{member.Present}}</p>\n      </ion-label>\n      <button ion-button round item-right outline icon-only (click)= "present(member.Name)"><ion-icon name="arrow-dropright-circle"></ion-icon></button>\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\football-practice\football-practice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], FootballPracticePage);
    return FootballPracticePage;
}());

//# sourceMappingURL=football-practice.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__football_dashboard_football_dashboard__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage.prototype.return = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__football_dashboard_football_dashboard__["a" /* FootballDashboardPage */]);
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"C:\TeamGo\src\pages\news\news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>Sport\'s news today</ion-title>\n    <ion-buttons left><button ion-button icon-only (click)="return()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <iframe src="https://www.skysports.com/football" width="100%" height="1000">Loading...</iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootballShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__football_dashboard_football_dashboard__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item_add_item__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FootballShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FootballShoppingPage = /** @class */ (function () {
    function FootballShoppingPage(navCtrl, navParams, afAuth, afd, modalCtrl, loadCtrl, sdp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afd = afd;
        this.modalCtrl = modalCtrl;
        this.loadCtrl = loadCtrl;
        this.sdp = sdp;
        var loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.loadData();
    }
    //Loading data from ShoppingList Table
    FootballShoppingPage.prototype.loadData = function () {
        this.afAuth.auth.signInAnonymously();
        this.shoppingItemsCollection = this.afd.list("FootballShoppingList");
        this.shoppingItems = this.shoppingItemsCollection.valueChanges();
    };
    FootballShoppingPage.prototype.openModal = function () {
        var addItemModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_item_add_item__["a" /* AddItemPage */]);
        addItemModal.present();
    };
    FootballShoppingPage.prototype.deleteItem = function (member) {
        var db = this.afd.database.ref();
        var query = this.afd.database.ref("FootballShoppingList").orderByKey();
        query.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == member.Name && chval.Store == member.Store) {
                    db.child("FootballShoppingList/" + pkey).remove();
                    return true;
                }
            });
        });
    };
    FootballShoppingPage.prototype.return = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__football_dashboard_football_dashboard__["a" /* FootballDashboardPage */]);
    };
    FootballShoppingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-football-shopping',template:/*ion-inline-start:"C:\TeamGo\src\pages\football-shopping\football-shopping.html"*/'<!--\n  Generated template for the FootballShoppingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>My Shopping List</ion-title>\n  <ion-buttons end><button ion-button icon-only (click)="openModal()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-buttons left>\n    <button ion-button icon-only (click)="return()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n  </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n<ion-item-sliding *ngFor="let item of shoppingItems | async">\n  <ion-item>\n    <h2>{{item.Name}}</h2>\n    <p>Purchase {{item.Quantity}} pieces from {{item.Store}}</p>\n  </ion-item>\n  <ion-item-options side="right">\n    <button ion-button color="danger" (click)="deleteItem(item)" icon-only><ion-icon name="trash"></ion-icon></button>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-list>\n</ion-content>'/*ion-inline-end:"C:\TeamGo\src\pages\football-shopping\football-shopping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */]])
    ], FootballShoppingPage);
    return FootballShoppingPage;
}());

//# sourceMappingURL=football-shopping.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketballShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basketball_dashboard_basketball_dashboard__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item_add_item__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BasketballShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BasketballShoppingPage = /** @class */ (function () {
    function BasketballShoppingPage(navCtrl, navParams, afAuth, afd, modalCtrl, loadCtrl, sdp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afd = afd;
        this.modalCtrl = modalCtrl;
        this.loadCtrl = loadCtrl;
        this.sdp = sdp;
        var loader = this.loadCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.loadData();
    }
    //Loading data from ShoppingList Table
    BasketballShoppingPage.prototype.loadData = function () {
        this.afAuth.auth.signInAnonymously();
        this.shoppingItemsCollection = this.afd.list("BasketballShoppingList");
        this.shoppingItems = this.shoppingItemsCollection.valueChanges();
    };
    BasketballShoppingPage.prototype.openModal = function () {
        var addItemModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_item_add_item__["a" /* AddItemPage */]);
        addItemModal.present();
    };
    BasketballShoppingPage.prototype.deleteItem = function (member) {
        var db = this.afd.database.ref();
        var query = this.afd.database.ref("BasketballShoppingList").orderByKey();
        query.once("value")
            .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var pkey = childSnapshot.key;
                var chval = childSnapshot.val();
                //check if remove this child
                if (chval.Name == member.Name && chval.Store == member.Store) {
                    db.child("BasketballShoppingList/" + pkey).remove();
                    return true;
                }
            });
        });
    };
    BasketballShoppingPage.prototype.return = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__basketball_dashboard_basketball_dashboard__["a" /* BasketballDashboardPage */]);
    };
    BasketballShoppingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-basketball-shopping',template:/*ion-inline-start:"C:\TeamGo\src\pages\basketball-shopping\basketball-shopping.html"*/'<!--\n  Generated template for the FootballShoppingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>My Shopping List</ion-title>\n  <ion-buttons end><button ion-button icon-only (click)="openModal()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-buttons left>\n    <button ion-button icon-only (click)="return()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n  </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n<ion-item-sliding *ngFor="let item of shoppingItems | async">\n  <ion-item>\n    <h2>{{item.Name}}</h2>\n    <p>Purchase {{item.Quantity}} pieces from {{item.Store}}</p>\n  </ion-item>\n  <ion-item-options side="right">\n    <button ion-button color="danger" (click)="deleteItem(item)" icon-only><ion-icon name="trash"></ion-icon></button>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-list>\n</ion-content>'/*ion-inline-end:"C:\TeamGo\src\pages\basketball-shopping\basketball-shopping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], BasketballShoppingPage);
    return BasketballShoppingPage;
}());

//# sourceMappingURL=basketball-shopping.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-item/add-item.module": [
		538,
		29
	],
	"../pages/add-member/add-member.module": [
		539,
		28
	],
	"../pages/add-v-member/add-v-member.module": [
		540,
		27
	],
	"../pages/basketball-dashboard/basketball-dashboard.module": [
		541,
		26
	],
	"../pages/basketball-firstteam/basketball-firstteam.module": [
		543,
		25
	],
	"../pages/basketball-members/basketball-members.module": [
		542,
		24
	],
	"../pages/basketball-practice/basketball-practice.module": [
		544,
		23
	],
	"../pages/basketball-shopping/basketball-shopping.module": [
		545,
		22
	],
	"../pages/basketball-teammanagement/basketball-teammanagement.module": [
		546,
		21
	],
	"../pages/football-dashboard/football-dashboard.module": [
		547,
		20
	],
	"../pages/football-firstteam/football-firstteam.module": [
		548,
		19
	],
	"../pages/football-formation/football-formation.module": [
		549,
		18
	],
	"../pages/football-members/football-members.module": [
		550,
		17
	],
	"../pages/football-practice/football-practice.module": [
		552,
		16
	],
	"../pages/football-shopping/football-shopping.module": [
		551,
		15
	],
	"../pages/football-teammanagement/football-teammanagement.module": [
		553,
		14
	],
	"../pages/forgot-password/forgot-password.module": [
		554,
		13
	],
	"../pages/login/login.module": [
		555,
		12
	],
	"../pages/news-b/news-b.module": [
		556,
		11
	],
	"../pages/news-s/news-s.module": [
		557,
		10
	],
	"../pages/news-v/news-v.module": [
		558,
		9
	],
	"../pages/news/news.module": [
		559,
		8
	],
	"../pages/player-info/player-info.module": [
		560,
		7
	],
	"../pages/register/register.module": [
		562,
		6
	],
	"../pages/volleyball-dashboard/volleyball-dashboard.module": [
		561,
		5
	],
	"../pages/volleyball-firstteam/volleyball-firstteam.module": [
		563,
		4
	],
	"../pages/volleyball-members/volleyball-members.module": [
		564,
		3
	],
	"../pages/volleyball-practice/volleyball-practice.module": [
		565,
		2
	],
	"../pages/volleyball-shopping/volleyball-shopping.module": [
		566,
		1
	],
	"../pages/volleyball-teammanagement/volleyball-teammanagement.module": [
		567,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 266;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VtabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__volleyball_teammanagement_volleyball_teammanagement__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__volleyball_members_volleyball_members__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__volleyball_practice_volleyball_practice__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__volleyball_dashboard_volleyball_dashboard__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VtabsPage = /** @class */ (function () {
    function VtabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__volleyball_dashboard_volleyball_dashboard__["a" /* VolleyballDashboardPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__volleyball_practice_volleyball_practice__["a" /* VolleyballPracticePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__volleyball_members_volleyball_members__["a" /* VolleyballMembersPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_0__volleyball_teammanagement_volleyball_teammanagement__["a" /* VolleyballTeammanagementPage */];
    }
    VtabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\TeamGo\src\pages\vtabs\vtabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="My Dashboard" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Practice" tabIcon="tennisball"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Members" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="My Team" tabIcon="settings"></ion-tab> \n</ion-tabs>\n'/*ion-inline-end:"C:\TeamGo\src\pages\vtabs\vtabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], VtabsPage);
    return VtabsPage;
}());

//# sourceMappingURL=vtabs.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basketball_teammanagement_basketball_teammanagement__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basketball_members_basketball_members__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basketball_practice_basketball_practice__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basketball_dashboard_basketball_dashboard__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__basketball_dashboard_basketball_dashboard__["a" /* BasketballDashboardPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__basketball_practice_basketball_practice__["a" /* BasketballPracticePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__basketball_members_basketball_members__["a" /* BasketballMembersPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_0__basketball_teammanagement_basketball_teammanagement__["a" /* BasketballTeammanagementPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\TeamGo\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="My Dashboard" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Practice" tabIcon="basketball"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Members" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="My Team" tabIcon="settings"></ion-tab> \n</ion-tabs>\n'/*ion-inline-end:"C:\TeamGo\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FtabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__football_teammanagement_football_teammanagement__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__football_members_football_members__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__football_practice_football_practice__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__football_dashboard_football_dashboard__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FtabsPage = /** @class */ (function () {
    function FtabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__football_dashboard_football_dashboard__["a" /* FootballDashboardPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__football_practice_football_practice__["a" /* FootballPracticePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__football_members_football_members__["a" /* FootballMembersPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_0__football_teammanagement_football_teammanagement__["a" /* FootballTeammanagementPage */];
    }
    FtabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\TeamGo\src\pages\ftabs\ftabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="My Dashboard" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Practice" tabIcon="football"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Members" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="My Team" tabIcon="settings"></ion-tab> \n</ion-tabs>\n'/*ion-inline-end:"C:\TeamGo\src\pages\ftabs\ftabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FtabsPage);
    return FtabsPage;
}());

//# sourceMappingURL=ftabs.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddVMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddVMemberPage = /** @class */ (function () {
    function AddVMemberPage(navCtrl, navParams, viewCtrl, afAuth, afd, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.afAuth = afAuth;
        this.afd = afd;
        this.toastCtrl = toastCtrl;
        this.afAuth.auth.signInAnonymously();
    }
    AddVMemberPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddVMemberPage.prototype.addMember = function () {
        var firedata = {
            Age: this.age,
            ColorGroup: this.color,
            Grade: this.grade,
            Name: this.name,
            PrefferedStroke: this.stroke,
        };
        this.afd.list("Swimming").push(firedata);
        this.presentToast();
        this.viewCtrl.dismiss();
    };
    AddVMemberPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: "The new player was added successfully!",
            duration: 2000
        });
        toast.present();
    };
    AddVMemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-v-member',template:/*ion-inline-start:"C:\TeamGo\src\pages\add-v-member\add-v-member.html"*/'<!--\n  Generated template for the AddVMemberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>New Member</ion-title>\n    <ion-buttons end><button ion-button icon-only (click)="closeModal()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div>\n<ion-list>\n  <ion-item>\n    <ion-label floating>Name</ion-label>\n    <ion-input [(ngModel)]="name" type="text"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Age</ion-label>\n      <ion-input [(ngModel)]="age" type=number></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Preffered Stroke</ion-label>\n      <ion-select [(ngModel)]="stroke">\n        <ion-option value="Back Stroke">Back Stroke</ion-option>\n        <ion-option value="Breast Stroke">Breast Stroke</ion-option>\n        <ion-option value="Freestyle">Freestyle</ion-option>\n        <ion-option value="Butterfly">Butterfly</ion-option>\n      </ion-select>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Color Group</ion-label>\n      <ion-select [(ngModel)]="color">\n        <ion-option value="Red Kigelia">Red Kigelia</ion-option>\n        <ion-option value="Yellow Oteniqua">Yellow Oteniqua</ion-option>\n        <ion-option value="Blue Cedar">Blue Cedar</ion-option>\n        <ion-option value="Green Wisteria">Green Wisteria</ion-option>\n      </ion-select>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Grade</ion-label>\n      <ion-select [(ngModel)]="grade">\n          <ion-option value=7>Grade 7</ion-option>\n          <ion-option value=8>Grade 8</ion-option>\n          <ion-option value=9>Grade 9</ion-option>\n          <ion-option value=10>Grade 10</ion-option>        \n          <ion-option value=11>Grade 11</ion-option>\n          <ion-option value=12>Grade 12</ion-option>\n        </ion-select>\n  </ion-item>\n  </ion-list>\n</div>\n<div align=center>\n<button ion-button (click)="addMember()">Add new player</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\add-v-member\add-v-member.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AddVMemberPage);
    return AddVMemberPage;
}());

//# sourceMappingURL=add-v-member.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewsSPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsSPage = /** @class */ (function () {
    function NewsSPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsSPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsSPage');
    };
    NewsSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-s',template:/*ion-inline-start:"C:\TeamGo\src\pages\news-s\news-s.html"*/'<!--\n  Generated template for the NewsSPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>newsS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\news-s\news-s.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NewsSPage);
    return NewsSPage;
}());

//# sourceMappingURL=news-s.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(449);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_forgot_password_forgot_password__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_basketball_shopping_basketball_shopping__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_volleyball_firstteam_volleyball_firstteam__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_news_s_news_s__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_news_v_news_v__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_news_b_news_b__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_news_news__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_item_add_item__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_football_shopping_football_shopping__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_football_formation_football_formation__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_football_firstteam_football_firstteam__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_player_info_player_info__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_member_add_member__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_vtabs_vtabs__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ftabs_ftabs__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_volleyball_teammanagement_volleyball_teammanagement__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_football_teammanagement_football_teammanagement__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_football_practice_football_practice__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_football_members_football_members__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_football_dashboard_football_dashboard__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_basketball_teammanagement_basketball_teammanagement__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_basketball_practice_basketball_practice__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_basketball_members_basketball_members__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_basketball_dashboard_basketball_dashboard__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_storage__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_about_about__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_contact_contact__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_tabs_tabs__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_common_http__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_volleyball_dashboard_volleyball_dashboard__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_volleyball_members_volleyball_members__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_volleyball_practice_volleyball_practice__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angularfire2__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_angularfire2_firestore__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__credentials__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_add_v_member_add_v_member__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_basketball_firstteam_basketball_firstteam__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_volleyball_shopping_volleyball_shopping__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_register_register__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_25__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_30__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ftabs_ftabs__["a" /* FtabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_vtabs_vtabs__["a" /* VtabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_basketball_dashboard_basketball_dashboard__["a" /* BasketballDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_basketball_members_basketball_members__["a" /* BasketballMembersPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_basketball_practice_basketball_practice__["a" /* BasketballPracticePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_basketball_teammanagement_basketball_teammanagement__["a" /* BasketballTeammanagementPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_basketball_firstteam_basketball_firstteam__["a" /* BasketballFirstteamPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_football_dashboard_football_dashboard__["a" /* FootballDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_football_members_football_members__["a" /* FootballMembersPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_football_practice_football_practice__["a" /* FootballPracticePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_football_teammanagement_football_teammanagement__["a" /* FootballTeammanagementPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_football_shopping_football_shopping__["a" /* FootballShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_basketball_shopping_basketball_shopping__["a" /* BasketballShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_volleyball_shopping_volleyball_shopping__["a" /* VolleyballShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_volleyball_dashboard_volleyball_dashboard__["a" /* VolleyballDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_volleyball_members_volleyball_members__["a" /* VolleyballMembersPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_volleyball_practice_volleyball_practice__["a" /* VolleyballPracticePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_volleyball_teammanagement_volleyball_teammanagement__["a" /* VolleyballTeammanagementPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_volleyball_firstteam_volleyball_firstteam__["a" /* VolleyballFirstteamPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_member_add_member__["a" /* AddMemberPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_add_v_member_add_v_member__["a" /* AddVMemberPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_player_info_player_info__["a" /* PlayerInfoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_football_firstteam_football_firstteam__["a" /* FootballFirstteamPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_football_formation_football_formation__["a" /* FootballFormationPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_news_b_news_b__["a" /* NewsBPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_news_v_news_v__["a" /* NewsVPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_news_s_news_s__["a" /* NewsSPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_27_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-item/add-item.module#AddItemPageModule', name: 'AddItemPage', segment: 'add-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-member/add-member.module#AddMemberPageModule', name: 'AddMemberPage', segment: 'add-member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-v-member/add-v-member.module#AddVMemberPageModule', name: 'AddVMemberPage', segment: 'add-v-member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/basketball-dashboard/basketball-dashboard.module#BasketballDashboardPageModule', name: 'BasketballDashboardPage', segment: 'basketball-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/basketball-members/basketball-members.module#BasketballMembersPageModule', name: 'BasketballMembersPage', segment: 'basketball-members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/basketball-firstteam/basketball-firstteam.module#BasketballFirstteamPageModule', name: 'BasketballFirstteamPage', segment: 'basketball-firstteam', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/basketball-practice/basketball-practice.module#BasketballPracticePageModule', name: 'BasketballPracticePage', segment: 'basketball-practice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/basketball-shopping/basketball-shopping.module#BasketballShoppingPageModule', name: 'BasketballShoppingPage', segment: 'basketball-shopping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/basketball-teammanagement/basketball-teammanagement.module#BasketballTeammanagementPageModule', name: 'BasketballTeammanagementPage', segment: 'basketball-teammanagement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/football-dashboard/football-dashboard.module#FootballDashboardPageModule', name: 'FootballDashboardPage', segment: 'football-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/football-firstteam/football-firstteam.module#FootballFirstteamPageModule', name: 'FootballFirstteamPage', segment: 'football-firstteam', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/football-formation/football-formation.module#FootballFormationPageModule', name: 'FootballFormationPage', segment: 'football-formation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/football-members/football-members.module#FootballMembersPageModule', name: 'FootballMembersPage', segment: 'football-members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/football-shopping/football-shopping.module#FootballShoppingPageModule', name: 'FootballShoppingPage', segment: 'football-shopping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/football-practice/football-practice.module#FootballPracticePageModule', name: 'FootballPracticePage', segment: 'football-practice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/football-teammanagement/football-teammanagement.module#FootballTeammanagementPageModule', name: 'FootballTeammanagementPage', segment: 'football-teammanagement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-b/news-b.module#NewsBPageModule', name: 'NewsBPage', segment: 'news-b', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-s/news-s.module#NewsSPageModule', name: 'NewsSPage', segment: 'news-s', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-v/news-v.module#NewsVPageModule', name: 'NewsVPage', segment: 'news-v', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/player-info/player-info.module#PlayerInfoPageModule', name: 'PlayerInfoPage', segment: 'player-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/volleyball-dashboard/volleyball-dashboard.module#VolleyballDashboardPageModule', name: 'VolleyballDashboardPage', segment: 'volleyball-dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/volleyball-firstteam/volleyball-firstteam.module#VolleyballFirstteamPageModule', name: 'VolleyballFirstteamPage', segment: 'volleyball-firstteam', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/volleyball-members/volleyball-members.module#VolleyballMembersPageModule', name: 'VolleyballMembersPage', segment: 'volleyball-members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/volleyball-practice/volleyball-practice.module#VolleyballPracticePageModule', name: 'VolleyballPracticePage', segment: 'volleyball-practice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/volleyball-shopping/volleyball-shopping.module#VolleyballShoppingPageModule', name: 'VolleyballShoppingPage', segment: 'volleyball-shopping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/volleyball-teammanagement/volleyball-teammanagement.module#VolleyballTeammanagementPageModule', name: 'VolleyballTeammanagementPage', segment: 'volleyball-teammanagement', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_41_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_43__credentials__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_42_angularfire2_firestore__["a" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_44_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_45_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_34__angular_common_http__["a" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_27_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_30__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ftabs_ftabs__["a" /* FtabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_vtabs_vtabs__["a" /* VtabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_basketball_dashboard_basketball_dashboard__["a" /* BasketballDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_basketball_members_basketball_members__["a" /* BasketballMembersPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_basketball_practice_basketball_practice__["a" /* BasketballPracticePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_basketball_teammanagement_basketball_teammanagement__["a" /* BasketballTeammanagementPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_basketball_firstteam_basketball_firstteam__["a" /* BasketballFirstteamPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_football_dashboard_football_dashboard__["a" /* FootballDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_football_members_football_members__["a" /* FootballMembersPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_football_practice_football_practice__["a" /* FootballPracticePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_football_teammanagement_football_teammanagement__["a" /* FootballTeammanagementPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_football_shopping_football_shopping__["a" /* FootballShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_basketball_shopping_basketball_shopping__["a" /* BasketballShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_volleyball_shopping_volleyball_shopping__["a" /* VolleyballShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_volleyball_dashboard_volleyball_dashboard__["a" /* VolleyballDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_volleyball_members_volleyball_members__["a" /* VolleyballMembersPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_volleyball_practice_volleyball_practice__["a" /* VolleyballPracticePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_volleyball_teammanagement_volleyball_teammanagement__["a" /* VolleyballTeammanagementPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_volleyball_firstteam_volleyball_firstteam__["a" /* VolleyballFirstteamPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_member_add_member__["a" /* AddMemberPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_add_v_member_add_v_member__["a" /* AddVMemberPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_player_info_player_info__["a" /* PlayerInfoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_football_firstteam_football_firstteam__["a" /* FootballFirstteamPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_football_formation_football_formation__["a" /* FootballFormationPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_news_b_news_b__["a" /* NewsBPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_news_v_news_v__["a" /* NewsVPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_news_s_news_s__["a" /* NewsSPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_25__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_27_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_40__providers_data_data__["a" /* DataProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\TeamGo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\TeamGo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\TeamGo\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\TeamGo\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyArdYO9vsVjxFi-nV2bJURP7aUWxnvRYGE",
    authDomain: "team-go-tis.firebaseapp.com",
    databaseURL: "https://team-go-tis.firebaseio.com",
    projectId: "team-go-tis",
    storageBucket: "team-go-tis.appspot.com",
    messagingSenderId: "374186367850"
};
//# sourceMappingURL=credentials.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forgot_password_forgot_password__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, afAuth, afd, toastCtrl) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.afd = afd;
        this.toastCtrl = toastCtrl;
        this.user = {};
    }
    LoginPage.prototype.Login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
                    .then(function (use) {
                    var user1 = __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().currentUser;
                    if (user1.emailVerified == true) {
                        _this.presentToast("You're In!");
                        _this.changePage();
                        // Redirect the user here 
                    }
                    else {
                        // Tell the user to have a look at its mailbox 
                        _this.presentToast("This email is not verified, please check your mail for a link and try again.");
                        user1.sendEmailVerification();
                    }
                    (function (error) { return _this.presentToast(error.message); });
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.Register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.presentToast = function (error) {
        var toast = this.toastCtrl.create({
            message: error,
            duration: 2000
        });
        toast.present();
    };
    LoginPage.prototype.changePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        this.presentToast("You're in!");
    };
    LoginPage.prototype.openForgotPassword = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\TeamGo\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="signup-button" padding>\n<ion-item>\n  <ion-label floating>Email</ion-label>\n  <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n<button ion-button (click)="Login(user)">Login</button>\n<button ion-button color = "light" (click)="Register()">Register</button>\n\n\n<p>\n  <a href="#" (click)="openForgotPassword()"> Forgot password?</a>\n</p>\n\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vtabs_vtabs__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ftabs_ftabs__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.pages = [
            { name: "Football", component: __WEBPACK_IMPORTED_MODULE_3__ftabs_ftabs__["a" /* FtabsPage */] },
            { name: "Basketball", component: __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */] },
            { name: "Volleyball", component: __WEBPACK_IMPORTED_MODULE_1__vtabs_vtabs__["a" /* VtabsPage */] },
        ];
    }
    HomePage.prototype.openPage = function (comp) {
        this.navCtrl.setRoot(comp);
    };
    HomePage.prototype.logOut = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        this.presentToast("You've been logged out");
    };
    HomePage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\TeamGo\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Home</ion-title>\n    <ion-buttons right><button ion-button icon-only (click)="logOut()">\n      <ion-icon name="log-out"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="button" padding>\n  <ion-list>\n    <ion-item *ngFor="let p of pages">\n      {{p.name}}\n      <button ion-button round item-right outline (click)="openPage(p.component)" icon-only><ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddItemPage = /** @class */ (function () {
    function AddItemPage(navCtrl, navParams, viewCtrl, afAuth, afd, deets, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.afAuth = afAuth;
        this.afd = afd;
        this.deets = deets;
        this.toastCtrl = toastCtrl;
        this.afAuth.auth.signInAnonymously();
    }
    AddItemPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    //Adding new item details to the Members table
    AddItemPage.prototype.addShoppingItem = function () {
        var firedata = {
            Quantity: this.quantity,
            Name: this.itemName,
            Store: this.store,
        };
        this.afd.list(this.deets.getLocation2()).push(firedata);
        this.presentToast();
        this.viewCtrl.dismiss();
    };
    AddItemPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: "The new item was added successfully!",
            duration: 2000
        });
        toast.present();
    };
    AddItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-add-item',template:/*ion-inline-start:"C:\TeamGo\src\pages\add-item\add-item.html"*/'<!--\n  Generated template for the AddItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>New Item</ion-title>\n    <ion-buttons end><button ion-button icon-only (click)="closeModal()">\n      <ion-icon name="close"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Item Name</ion-label>\n      <ion-input [(ngModel)]="itemName" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Quantity</ion-label>\n        <ion-input [(ngModel)]="quantity" type=number></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>By from Store</ion-label>\n      <ion-input [(ngModel)]="store" type=text></ion-input>\n  </ion-item>\n  </ion-list>\n  </div>\n  <div align=center>\n  <button ion-button (click)="addShoppingItem()">Add Item</button>\n  </div>\n  </ion-content>\n  \n'/*ion-inline-end:"C:\TeamGo\src\pages\add-item\add-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], AddItemPage);
    return AddItemPage;
}());

//# sourceMappingURL=add-item.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddMemberPage = /** @class */ (function () {
    function AddMemberPage(navCtrl, navParams, viewCtrl, afAuth, afd, deets, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.afAuth = afAuth;
        this.afd = afd;
        this.deets = deets;
        this.toastCtrl = toastCtrl;
        this.afAuth.auth.signInAnonymously();
        this.loadPositions(this.deets.getLocation());
    }
    AddMemberPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    //Adding new memeber details to the Members table
    AddMemberPage.prototype.addMember = function () {
        try {
            var firedata = {
                Age: this.age,
                ColorGroup: this.color,
                Grade: this.grade,
                Name: this.name,
                Position: this.position,
                FirstTeam: "No"
            };
            this.afd.list(this.deets.getLocation()).push(firedata);
            var firedata2 = {
                Name: this.name,
                Present: "No"
            };
            this.afd.list(this.deets.getLocation() + "Practice").push(firedata2);
            this.presentToast("The new player was added successfully!");
            this.viewCtrl.dismiss();
        }
        catch (e) {
            this.presentToast("Please check that all the information is properly entered");
        }
    };
    AddMemberPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    };
    AddMemberPage.prototype.loadPositions = function (location) {
        if (location == "/Football") {
            this.positions = [
                { name: "Goalkeeper" },
                { name: "Right Fullback" },
                { name: "Left Fullback" },
                { name: "Center Back" },
                { name: "Center Forward" },
                { name: "Defending Midfielder" },
                { name: "Right Winger" },
                { name: "Left Winger" },
                { name: "Central Midfielder" },
                { name: "Striker" },
                { name: "Attacking Midfielder" },
            ];
        }
        if (location == "/Basketball") {
            this.positions = [
                { name: "Shooting Guard" },
                { name: "Point Guard" },
                { name: "Power Forward" },
                { name: "Small Forward" },
                { name: "Center" },
                { name: "Sixth Person" },
                { name: "Defensive Stopper" },
            ];
        }
        if (location == "/Volleyball") {
            this.positions = [
                { name: "Outside Hitter" },
                { name: "Right Side Hitter" },
                { name: "Opposite Hitter" },
                { name: "Middle Blocker" },
                { name: "Setter" },
                { name: "Libero" },
                { name: "Defensive Specialist" },
            ];
        }
    };
    AddMemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-add-member',template:/*ion-inline-start:"C:\TeamGo\src\pages\add-member\add-member.html"*/'<!--\n  Generated template for the AddMemberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>New Member</ion-title>\n    <ion-buttons end><button ion-button icon-only (click)="closeModal()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div>\n<ion-list>\n  <ion-item>\n    <ion-label floating>Name</ion-label>\n    <ion-input [(ngModel)]="name" type="text"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Age</ion-label>\n      <ion-input [(ngModel)]="age" type=number></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Position</ion-label>\n      <ion-select [(ngModel)]="position">\n          <ion-option *ngFor="let p of positions">\n              {{p.name}}\n            </ion-option>\n      </ion-select>  \n  </ion-item>\n  <ion-item>\n      <ion-label floating>Color Group</ion-label>\n      <ion-select [(ngModel)]="color">\n        <ion-option value="Red Kigelia">Red Kigelia</ion-option>\n        <ion-option value="Yellow Oteniqua">Yellow Oteniqua</ion-option>\n        <ion-option value="Blue Cedar">Blue Cedar</ion-option>\n        <ion-option value="Green Wisteria">Green Wisteria</ion-option>\n      </ion-select>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Grade</ion-label>\n      <ion-select [(ngModel)]="grade">\n        <ion-option value=7>Grade 7</ion-option>\n        <ion-option value=8>Grade 8</ion-option>\n        <ion-option value=9>Grade 9</ion-option>\n        <ion-option value=10>Grade 10</ion-option>        \n        <ion-option value=11>Grade 11</ion-option>\n        <ion-option value=12>Grade 12</ion-option>\n      </ion-select>\n  </ion-item>\n  </ion-list>\n</div>\n<div align=center>\n<button ion-button (click)="addMember()">Add new player</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\add-member\add-member.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], AddMemberPage);
    return AddMemberPage;
}());

//# sourceMappingURL=add-member.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketballDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__news_b_news_b__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basketball_shopping_basketball_shopping__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the BasketballDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BasketballDashboardPage = /** @class */ (function () {
    function BasketballDashboardPage(navCtrl, navParams, app, afd, deets, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.afd = afd;
        this.deets = deets;
        this.afAuth = afAuth;
        this.afAuth.auth.signInAnonymously();
        this.formationCollection = this.afd.list('/BasketballFormation');
        this.formations = this.formationCollection.valueChanges();
    }
    BasketballDashboardPage.prototype.return = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    BasketballDashboardPage.prototype.openShopping = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__basketball_shopping_basketball_shopping__["a" /* BasketballShoppingPage */]);
        this.deets.setLocation2('BasketballShoppingList');
    };
    BasketballDashboardPage.prototype.openNews = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__news_b_news_b__["a" /* NewsBPage */]);
    };
    BasketballDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-basketball-dashboard',template:/*ion-inline-start:"C:\TeamGo\src\pages\basketball-dashboard\basketball-dashboard.html"*/'<!--\n  Generated template for the BasketballDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>My Dashboard</ion-title>\n    <ion-buttons left><button ion-button icon-only (click)="return()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card color="lighter" (click)="openNews()">\n      <ion-card-title><b>Sports News</b></ion-card-title>\n      <img src="assets/imgs/news.jpg">\n      <ion-card-content><b>Your news for the week!</b></ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let formation of formations | async" color="light">\n    <ion-card-title><b>The Game Formation</b></ion-card-title>\n    <img src="assets/imgs/{{formation.Name}}.png">\n    <ion-card-content><b>Arrangments for the games!</b></ion-card-content>\n  </ion-card>\n\n  <ion-card color="lighter" (click)="openShopping()">\n      <ion-card-title><b>The Team\'s Shopping List</b></ion-card-title>\n      <img src="assets/imgs/shopping.jpg">\n      <ion-card-content><b>Go shopping with the team!</b></ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\basketball-dashboard\basketball-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], BasketballDashboardPage);
    return BasketballDashboardPage;
}());

//# sourceMappingURL=basketball-dashboard.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolleyballTeammanagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__volleyball_firstteam_volleyball_firstteam__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__football_formation_football_formation__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VolleyballTeammanagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VolleyballTeammanagementPage = /** @class */ (function () {
    function VolleyballTeammanagementPage(navCtrl, navParams, deets) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.deets = deets;
    }
    VolleyballTeammanagementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FootballTeammanagementPage');
    };
    VolleyballTeammanagementPage.prototype.goToFormation = function () {
        this.deets.setFormationLocation("/VolleyballFormation/Formation");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__football_formation_football_formation__["a" /* FootballFormationPage */]);
    };
    VolleyballTeammanagementPage.prototype.goToFirstTeam = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__volleyball_firstteam_volleyball_firstteam__["a" /* VolleyballFirstteamPage */]);
    };
    VolleyballTeammanagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-volleyball-teammanagement',template:/*ion-inline-start:"C:\TeamGo\src\pages\volleyball-teammanagement\volleyball-teammanagement.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>My Team</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card (click) = "goToFirstTeam()" color="light">\n  <ion-card-title><b>My First Team</b></ion-card-title>\n    <img src="assets/imgs/firstTeamV.jpg">\n    <ion-card-content><b>Choose which players are on the first team or not.</b></ion-card-content>\n</ion-card>\n\n<ion-card (click) = "goToFormation()" color="light">\n  <ion-card-title><b>My Formation</b></ion-card-title>\n  <img src="assets/imgs/FormationV.jpg">\n  <ion-card-content><b>The formation that you have decided to use for your team for each game.</b></ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\volleyball-teammanagement\volleyball-teammanagement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */]])
    ], VolleyballTeammanagementPage);
    return VolleyballTeammanagementPage;
}());

//# sourceMappingURL=volleyball-teammanagement.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootballFormationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basketball_teammanagement_basketball_teammanagement__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__football_teammanagement_football_teammanagement__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__volleyball_teammanagement_volleyball_teammanagement__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FootballFormationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FootballFormationPage = /** @class */ (function () {
    function FootballFormationPage(navCtrl, navParams, afd, toastCtrl, deets) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afd = afd;
        this.toastCtrl = toastCtrl;
        this.deets = deets;
        if (this.deets.formLoca == "/FootballFormation/Formation") {
            this.formations = [{ formationName: "3-4-3" },
                { formationName: "3-5-2" },
                { formationName: "4-2-3-1" },
                { formationName: "4-3-3" },
                { formationName: "4-4-1-1" },
                { formationName: "4-4-2" },
                { formationName: "4-5-1" },
                { formationName: "5-3-2" },
            ];
        }
        else if (this.deets.formLoca == "/BasketballFormation/Formation") {
            this.formations = [{ formationName: "1-2-2" },
                { formationName: "1-3-1" },
                { formationName: "2-1-2" },
                { formationName: "2-3" },
                { formationName: "3-2" },
                { formationName: "MatchUp" },
            ];
        }
        else if (this.deets.formLoca == "/VolleyballFormation/Formation") {
            this.formations = [{ formationName: "4-2" },
                { formationName: "5-1" },
                { formationName: "6-2" },
            ];
        }
    }
    FootballFormationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FootballFormationPage');
    };
    FootballFormationPage.prototype.return = function () {
        if (this.deets.getFormationLocation() == "/FootballFormation/Formation") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__football_teammanagement_football_teammanagement__["a" /* FootballTeammanagementPage */]);
        }
        else if (this.deets.getFormationLocation() == "/BasketballFormation/Formation") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__basketball_teammanagement_basketball_teammanagement__["a" /* BasketballTeammanagementPage */]);
        }
        else if (this.deets.getFormationLocation() == "/VolleyballFormation/Formation") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__volleyball_teammanagement_volleyball_teammanagement__["a" /* VolleyballTeammanagementPage */]);
        }
    };
    //Saving selected formation to DB online
    FootballFormationPage.prototype.saveFormation = function (formation) {
        var firedata = {
            Name: formation
        };
        this.afd.object(this.deets.getFormationLocation()).update(firedata);
        this.presentToast(formation);
    };
    FootballFormationPage.prototype.presentToast = function (formation) {
        var toast = this.toastCtrl.create({
            message: "You have changed your fomation to " + formation + " successfully!",
            duration: 2000
        });
        toast.present();
    };
    FootballFormationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-football-formation',template:/*ion-inline-start:"C:\TeamGo\src\pages\football-formation\football-formation.html"*/'<!--\n  Generated template for the FootballFormationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color= "primary">\n    <ion-title>My Formation</ion-title>\n      <ion-buttons left><button ion-button icon-only (click)="return()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n    <ion-item *ngFor="let item of formations" (click)="saveFormation(item.formationName)">\n        <ion-thumbnail item-start>\n            <img src="assets/imgs/{{item.formationName}}.png">\n        </ion-thumbnail>\n     <h2>{{item.formationName}}</h2>\n     <button ion-button round item-right outline icon-only><ion-icon name="checkmark-circle"></ion-icon></button>\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\football-formation\football-formation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], FootballFormationPage);
    return FootballFormationPage;
}());

//# sourceMappingURL=football-formation.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketballTeammanagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basketball_firstteam_basketball_firstteam__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__football_formation_football_formation__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BasketballTeammanagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BasketballTeammanagementPage = /** @class */ (function () {
    function BasketballTeammanagementPage(navCtrl, navParams, deets) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.deets = deets;
    }
    BasketballTeammanagementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FootballTeammanagementPage');
    };
    BasketballTeammanagementPage.prototype.goToFormation = function () {
        this.deets.setFormationLocation("/BasketballFormation/Formation");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__football_formation_football_formation__["a" /* FootballFormationPage */]);
    };
    BasketballTeammanagementPage.prototype.goToFirstTeam = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__basketball_firstteam_basketball_firstteam__["a" /* BasketballFirstteamPage */]);
    };
    BasketballTeammanagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-basketball-teammanagement',template:/*ion-inline-start:"C:\TeamGo\src\pages\basketball-teammanagement\basketball-teammanagement.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>My Team</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card (click) = "goToFirstTeam()" color="light">\n  <ion-card-title><b>My First Team</b></ion-card-title>\n    <img src="assets/imgs/firstTeamB.jpg">\n    <ion-card-content><b>Choose which players are on the first team or not.</b></ion-card-content>\n</ion-card>\n\n<ion-card (click) = "goToFormation()" color="light">\n  <ion-card-title><b>My Formation</b></ion-card-title>\n  <img src="assets/imgs/formationB.jpg">\n  <ion-card-content><b>The formation that you have decided to use for your team for each game.</b></ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\basketball-teammanagement\basketball-teammanagement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], BasketballTeammanagementPage);
    return BasketballTeammanagementPage;
}());

//# sourceMappingURL=basketball-teammanagement.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootballTeammanagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__football_firstteam_football_firstteam__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__football_formation_football_formation__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FootballTeammanagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FootballTeammanagementPage = /** @class */ (function () {
    function FootballTeammanagementPage(navCtrl, navParams, deets) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.deets = deets;
    }
    FootballTeammanagementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FootballTeammanagementPage');
    };
    FootballTeammanagementPage.prototype.goToFormation = function () {
        this.deets.setFormationLocation("/FootballFormation/Formation");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__football_formation_football_formation__["a" /* FootballFormationPage */]);
    };
    FootballTeammanagementPage.prototype.goToFirstTeam = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__football_firstteam_football_firstteam__["a" /* FootballFirstteamPage */]);
    };
    FootballTeammanagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-football-teammanagement',template:/*ion-inline-start:"C:\TeamGo\src\pages\football-teammanagement\football-teammanagement.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>My Team</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card (click) = "goToFirstTeam()" color="light">\n  <ion-card-title><b>My First Team</b></ion-card-title>\n    <img src="assets/imgs/FirstTeam.jpg">\n    <ion-card-content><b>Choose which players are on the first team or not.</b></ion-card-content>\n</ion-card>\n\n<ion-card (click) = "goToFormation()" color="light">\n  <ion-card-title><b>My Formation</b></ion-card-title>\n  <img src="assets/imgs/Formation.jpg">\n  <ion-card-content><b>The formation that you have decided to use for your team for each game.</b></ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\football-teammanagement\football-teammanagement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */]])
    ], FootballTeammanagementPage);
    return FootballTeammanagementPage;
}());

//# sourceMappingURL=football-teammanagement.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PlayerInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayerInfoPage = /** @class */ (function () {
    function PlayerInfoPage(navCtrl, navParams, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.pic = "assets/imgs/profile.png";
        this.playerName = data.getPlayerName();
        this.playerAge = data.getPlayerAge();
        this.playerColor = data.getPlayerColor();
        this.playerGrade = data.getPlayerGrade();
        this.playerPos = data.getPlayerPos();
    }
    PlayerInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayerInfoPage');
    };
    PlayerInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-player-info',template:/*ion-inline-start:"C:\TeamGo\src\pages\player-info\player-info.html"*/'<!--\n  Generated template for the PlayerInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{playerName}}\'s Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <img src="{{pic}}">\n        <ion-card-title><b>{{playerName}}</b></ion-card-title>\n        <ion-card-content>\n          <ion-list>\n          <ion-item><p align="right"><b>Plays: </b>{{playerPos}}</p></ion-item>\n          <ion-item><p align="right"><b>Grade: </b>{{playerGrade}}</p></ion-item>\n          <ion-item><p align="right"><b>Age: </b>{{playerAge}}</p></ion-item>\n          <ion-item><p align="right"><b>Color Group: </b>{{playerColor}}</p></ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\player-info\player-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */]])
    ], PlayerInfoPage);
    return PlayerInfoPage;
}());

//# sourceMappingURL=player-info.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolleyballDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__volleyball_shopping_volleyball_shopping__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_v_news_v__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the VolleyballDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VolleyballDashboardPage = /** @class */ (function () {
    function VolleyballDashboardPage(navCtrl, navParams, app, afAuth, afd, sdp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.afAuth = afAuth;
        this.afd = afd;
        this.sdp = sdp;
        this.afAuth.auth.signInAnonymously();
        this.formationCollection = this.afd.list('/VolleyballFormation');
        this.formations = this.formationCollection.valueChanges();
    }
    VolleyballDashboardPage.prototype.return = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    VolleyballDashboardPage.prototype.openShopping = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__volleyball_shopping_volleyball_shopping__["a" /* VolleyballShoppingPage */]);
        this.sdp.setLocation2('VolleyballShoppingList');
    };
    VolleyballDashboardPage.prototype.openNews = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__news_v_news_v__["a" /* NewsVPage */]);
    };
    VolleyballDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-volleyball-dashboard',template:/*ion-inline-start:"C:\TeamGo\src\pages\volleyball-dashboard\volleyball-dashboard.html"*/'<!--\n  Generated template for the BasketballDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>My Dashboard</ion-title>\n    <ion-buttons left><button ion-button icon-only (click)="return()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card color="lighter" (click)="openNews()">\n      <ion-card-title><b>Sports News</b></ion-card-title>\n      <img src="assets/imgs/news.jpg">\n      <ion-card-content><b>Your news for the week!</b></ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let formation of formations | async" color="light">\n    <ion-card-title><b>The Game Formation</b></ion-card-title>\n    <img src="assets/imgs/{{formation.Name}}.png">\n    <ion-card-content><b>Arrangments for the games!</b></ion-card-content>\n  </ion-card>\n\n  <ion-card color="lighter" (click)="openShopping()">\n      <ion-card-title><b>The Team\'s Shopping List</b></ion-card-title>\n      <img src="assets/imgs/shopping.jpg">\n      <ion-card-content><b>Go shopping with the team!</b></ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\volleyball-dashboard\volleyball-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], VolleyballDashboardPage);
    return VolleyballDashboardPage;
}());

//# sourceMappingURL=volleyball-dashboard.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootballDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_news__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__football_shopping_football_shopping__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the BasketballDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FootballDashboardPage = /** @class */ (function () {
    function FootballDashboardPage(navCtrl, navParams, app, afAuth, afd, sdp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.afAuth = afAuth;
        this.afd = afd;
        this.sdp = sdp;
        this.afAuth.auth.signInAnonymously();
        this.formationCollection = this.afd.list('/FootballFormation');
        this.formations = this.formationCollection.valueChanges();
    }
    FootballDashboardPage.prototype.return = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    FootballDashboardPage.prototype.openShopping = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__football_shopping_football_shopping__["a" /* FootballShoppingPage */]);
        this.sdp.setLocation2('FootballShoppingList');
    };
    FootballDashboardPage.prototype.openNews = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__news_news__["a" /* NewsPage */]);
    };
    FootballDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-football-dashboard',template:/*ion-inline-start:"C:\TeamGo\src\pages\football-dashboard\football-dashboard.html"*/'<!--\n  Generated template for the BasketballDashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>My Dashboard</ion-title>\n    <ion-buttons left><button ion-button icon-only (click)="return()">\n      <ion-icon name="arrow-round-back"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card color="lighter" (click)="openNews()">\n      <ion-card-title><b>Sports News</b></ion-card-title>\n      <img src="assets/imgs/news.jpg">\n      <ion-card-content><b>Your news for the week!</b></ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let formation of formations | async" color="light">\n    <ion-card-title><b>The Game Formation</b></ion-card-title>\n    <img src="assets/imgs/{{formation.Name}}.png">\n    <ion-card-content><b>Arrangments for the games!</b></ion-card-content>\n  </ion-card>\n\n  <ion-card color="lighter" (click)="openShopping()">\n      <ion-card-title><b>The Team\'s Shopping List</b></ion-card-title>\n      <img src="assets/imgs/shopping.jpg">\n      <ion-card-content><b>Go shopping with the team!</b></ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\TeamGo\src\pages\football-dashboard\football-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__providers_data_data__["a" /* DataProvider */]])
    ], FootballDashboardPage);
    return FootballDashboardPage;
}());

//# sourceMappingURL=football-dashboard.js.map

/***/ })

},[326]);
//# sourceMappingURL=main.js.map