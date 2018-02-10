webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aboutus/aboutus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutus works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__("../../../../../src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-field-error-display/app-field-error-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-msg {\n  color: #a94442;\n}\n.fix-error-icon {\n  top: 27px;\n}\n.control-label.required:after { \n  color: #d00;\n  content: \"*\";\n  position: absolute;\n  margin-left: 5px;\n  top:7px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-field-error-display/app-field-error-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\" >\n  <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span>\n  <span class=\"sr-only\">(error)</span>\n  <div class=\"error-msg\">\n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app-field-error-display/app-field-error-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFieldErrorDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFieldErrorDisplayComponent = /** @class */ (function () {
    function AppFieldErrorDisplayComponent() {
    }
    AppFieldErrorDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AppFieldErrorDisplayComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppFieldErrorDisplayComponent.prototype, "displayError", void 0);
    AppFieldErrorDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-field-error-display',
            template: __webpack_require__("../../../../../src/app/app-field-error-display/app-field-error-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-field-error-display/app-field-error-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppFieldErrorDisplayComponent);
    return AppFieldErrorDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainpage\">\n   <app-header style=\"margin: 0px;\"></app-header>\n   <router-outlet></router-outlet>\n   <!-- <app-footer ></app-footer> -->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_api_service__ = __webpack_require__("../../../../../src/app/http-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__trending_trending_component__ = __webpack_require__("../../../../../src/app/trending/trending.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__newlist_newlist_component__ = __webpack_require__("../../../../../src/app/newlist/newlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__popular_popular_component__ = __webpack_require__("../../../../../src/app/popular/popular.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__regional_regional_component__ = __webpack_require__("../../../../../src/app/regional/regional.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__prod_house_prod_house_component__ = __webpack_require__("../../../../../src/app/prod-house/prod-house.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__video_player_video_player_component__ = __webpack_require__("../../../../../src/app/video-player/video-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__audio_player_audio_player_component__ = __webpack_require__("../../../../../src/app/audio-player/audio-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_videogular2_core__ = __webpack_require__("../../../../videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_videogular2_controls__ = __webpack_require__("../../../../videogular2/controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_videogular2_overlay_play__ = __webpack_require__("../../../../videogular2/overlay-play.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_videogular2_buffering__ = __webpack_require__("../../../../videogular2/buffering.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_videogular2_streaming__ = __webpack_require__("../../../../videogular2/streaming.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_videogular2_streaming___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_videogular2_streaming__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_field_error_display_app_field_error_display_component__ = __webpack_require__("../../../../../src/app/app-field-error-display/app-field-error-display.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'regions',
        component: __WEBPACK_IMPORTED_MODULE_16__regional_regional_component__["a" /* RegionalComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'aboutus',
        component: __WEBPACK_IMPORTED_MODULE_12__aboutus_aboutus_component__["a" /* AboutusComponent */]
    },
    {
        path: 'video',
        component: __WEBPACK_IMPORTED_MODULE_19__video_player_video_player_component__["a" /* VideoPlayerComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_12__aboutus_aboutus_component__["a" /* AboutusComponent */],
                __WEBPACK_IMPORTED_MODULE_13__trending_trending_component__["a" /* TrendingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__newlist_newlist_component__["a" /* NewlistComponent */],
                __WEBPACK_IMPORTED_MODULE_15__popular_popular_component__["a" /* PopularComponent */],
                __WEBPACK_IMPORTED_MODULE_16__regional_regional_component__["a" /* RegionalComponent */],
                __WEBPACK_IMPORTED_MODULE_17__prod_house_prod_house_component__["a" /* ProdHouseComponent */],
                __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__video_player_video_player_component__["a" /* VideoPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_20__audio_player_audio_player_component__["a" /* AudioPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_21__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_29__app_field_error_display_app_field_error_display_component__["a" /* AppFieldErrorDisplayComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: false }),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_24_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_25_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_26_videogular2_overlay_play__["VgOverlayPlayModule"],
                __WEBPACK_IMPORTED_MODULE_27_videogular2_buffering__["VgBufferingModule"],
                __WEBPACK_IMPORTED_MODULE_28_videogular2_streaming__["VgStreamingModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__http_api_service__["a" /* HttpApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/audio-player/audio-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/audio-player/audio-player.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  audio-player works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/audio-player/audio-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AudioPlayerComponent = /** @class */ (function () {
    function AudioPlayerComponent() {
    }
    AudioPlayerComponent.prototype.ngOnInit = function () {
    };
    AudioPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-audio-player',
            template: __webpack_require__("../../../../../src/app/audio-player/audio-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/audio-player/audio-player.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AudioPlayerComponent);
    return AudioPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"height: 50px; background-color: black; width: 100% !important; bottom: 0px;\">\n   \n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 725px) {\n  .topnav a:not(:first-child) { \n    display: none;\n  }\n  .topnav a.icon {\n    float: right;\n    display: block;\n    margin-top: 32px;\n  }\n  .topnav.responsive { \n    position: relative;\n  }\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n  .topnav #top_bar{\n    margin-top: -37px;\n  }\n  #miglig_logo_link {\n    padding: 0px;\n    padding-top: 20px;\n    padding-left: 15px !important;\n  }\n\n}\n\n.topnav {\n  overflow: hidden;\n  background-color: #333;\n}\n\n.topnav a {\n  float: left;\n  display: block;\n  color: #fafafa;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 15px;\n}\n\n.topnav a:hover {\n  color: black;\n}\n\n.active {\n  color: black;\n}\n\n.topnav .icon {\n  display: none;\n  float: right;\n}\n\n#header {\n  height: 44px; \n  background-color: black; \n  width: 100% !important;\n}\n\n#miglig_logo {\n  width: 125px !important;\n}\n\n#miglig_logo_link {\n  padding: 0px;\n  padding-top: 10px;\n  padding-left: 25px;\n}\n\n#top_bar{\n  float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div #header>\n   <div class=\"topnav row\" id=\"Topnav\">\n   \t\t<div class=\"col-xs-6 col-sm-3 col-md-1 offset-md-1 offset-lg-1 col-lg-3\">\n\t\t\t<a style=\"padding-left:0px !important; \" id=\"miglig_logo_link\" routerLink=\"/\" (click)=\"toggleFunction($event)\"><img id='miglig_logo' src=\"assets/logo.png\"></a>\n\t\t</div>\n\t\t<div id=\"top_bar\" class=\"col-xs-6 col-sm-9  col-md-9 offset-md-1 col-lg-6 offset-lg-2\">\n\t\t\t<a></a>\n\t\t\t<a routerLink=\"/\" (click)=\"toggleFunction($event)\">Home</a>\n\t\t\t<a routerLink=\"regions\" (click)=\"toggleFunction($event)\">Regions</a>\n\t\t\t<a routerLink=\"profile\" (click)=\"toggleFunction($event)\">Profile</a>\n\t\t\t<a routerLink=\"aboutus\" (click)=\"toggleFunction($event)\">About Us</a>\n\t\t\t<a routerLink=\"login\" (click)=\"toggleFunction($event)\">Login</a>\n\t\t\t<a routerLink=\"signup\" (click)=\"toggleFunction($event)\">Sign up</a>\n\t\t\t<a href=\"javascript:void(0);\" style=\"font-size:15px; float: right !important; padding-right:0px;\" class=\"icon\" (click)=\"myFunction($event)\">&#9776;</a>\n\t\t</div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.myFunction = function (event) {
        var x = document.getElementById("Topnav");
        if (x.className === "topnav row") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav row";
        }
    };
    HeaderComponent.prototype.headerFunction = function () {
    };
    HeaderComponent.prototype.toggleFunction = function (event) {
        var x = document.getElementById("Topnav");
        if (x.className === "topnav row responsive") {
            x.className = "topnav row";
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [style.margin-top]=\"'40px'\">\n\t<div class=\"offset-lg-2 offset-md-2 offset-sm-1 col-lg-8 col-md-8 col-sm-10 col-xs-12\">\n\t\t<app-video-player></app-video-player>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/http-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var HttpApiService = /** @class */ (function () {
    function HttpApiService(http) {
        this.http = http;
        this.apiRoot = "http://api.miglig.com/api/user/signup";
    }
    HttpApiService.prototype.signup_api = function (json_api) {
        console.log(json_api);
        //       return this.http.post(this.apiRoot, json_api).subscribe(res => console.log(res));
    };
    HttpApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpApiService);
    return HttpApiService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/newlist/newlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newlist/newlist.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  newlist works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/newlist/newlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewlistComponent = /** @class */ (function () {
    function NewlistComponent() {
    }
    NewlistComponent.prototype.ngOnInit = function () {
    };
    NewlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newlist',
            template: __webpack_require__("../../../../../src/app/newlist/newlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/newlist/newlist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewlistComponent);
    return NewlistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/popular/popular.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popular/popular.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  popular works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/popular/popular.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopularComponent = /** @class */ (function () {
    function PopularComponent() {
    }
    PopularComponent.prototype.ngOnInit = function () {
    };
    PopularComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-popular',
            template: __webpack_require__("../../../../../src/app/popular/popular.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popular/popular.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopularComponent);
    return PopularComponent;
}());



/***/ }),

/***/ "../../../../../src/app/prod-house/prod-house.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/prod-house/prod-house.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  prod-house works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/prod-house/prod-house.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdHouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProdHouseComponent = /** @class */ (function () {
    function ProdHouseComponent() {
    }
    ProdHouseComponent.prototype.ngOnInit = function () {
    };
    ProdHouseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-prod-house',
            template: __webpack_require__("../../../../../src/app/prod-house/prod-house.component.html"),
            styles: [__webpack_require__("../../../../../src/app/prod-house/prod-house.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProdHouseComponent);
    return ProdHouseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/regional/regional.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/regional/regional.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  regional works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/regional/regional.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegionalComponent = /** @class */ (function () {
    function RegionalComponent() {
    }
    RegionalComponent.prototype.ngOnInit = function () {
    };
    RegionalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-regional',
            template: __webpack_require__("../../../../../src/app/regional/regional.component.html"),
            styles: [__webpack_require__("../../../../../src/app/regional/regional.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegionalComponent);
    return RegionalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#signup{\n\tpadding-top: 30px;\n}\n\n.control-label.required:after { \n  color: #d00;\n  content: \"*\";\n  position: absolute;\n  margin-left: 5px;\n  top:7px;\n}\n\n.btn-primary {\n    color: #fff;\n    background-color: #439419;\n    border-color: #439419;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"signup\" class=\"row\">\n\t<form class=\"form-horizontal offset-sm-6 col-sm-4\" #f=\"ngForm\" [formGroup]=\"form\">\n\t\t<h4>Sign up</h4>\n\t  <div class=\"form-group\" [ngClass]=\"displayFieldCss('name')\">\n\t    <div class=\"col-sm-12\">\n\t      <!-- <label for=\"name\" class=\"control-label\">Name</label> -->\n\t      <input type=\"text\" id=\"name\" ngModel  placeholder=\"Name\" class=\"form-control\" formControlName=\"name\">\n\t    </div>\n\t  </div>\n\n\t  <div class=\"form-group\" [ngClass]=\"displayFieldCss('email')\">\n\t    <div class=\"col-sm-12\">\n\t      <!-- <label for=\"email\" class=\"control-label\">Email</label> -->\n\t      <input type=\"text\" id=\"email\" ngModel  placeholder=\"Email\"  class=\"form-control\" formControlName=\"email\">\n\t    </div>\n\t  </div>\n\n\t  <div class=\"form-group\" [ngClass]=\"displayFieldCss('mobile')\">\n\t    <div class=\"col-sm-12\">\n\t      <!-- <label for=\"name\" class=\"control-label\">Mobile</label> -->\n\t      <input type=\"text\" id=\"mobile\" ngModel  placeholder=\"Mobile\"  class=\"form-control\" formControlName=\"mobile\">\n\t    </div>\n\t  </div>\n\n\t  <div class=\"form-group\" [ngClass]=\"displayFieldCss('password')\">\n\t    <div class=\"col-sm-12\">\n\t      <!-- <label for=\"email\" class=\"control-label\">Password</label> -->\n\t      <input type=\"text\" id=\"password\" ngModel  type=\"password\" placeholder=\"Password\"  class=\"form-control\" formControlName=\"password\">\n\t    </div>\n\t  </div>\n\n\t  <div class=\"form-group\" [ngClass]=\"displayFieldCss('re_password')\">\n\t    <div class=\"col-sm-12\">\n\t      <!-- <label for=\"email\" class=\"control-label\">Re-Password</label> -->\n\t      <input type=\"text\" id=\"re_password\" ngModel  type=\"password\" placeholder=\"Re Type Password\"  class=\"form-control\" formControlName=\"re_password\">\n\t    </div>\n\t  </div>\n\n\t<app-field-error-display \n\t  [displayError]=\"isFieldValid('name')\" \n\t  errorMsg=\"Please inform your name\">\n\t</app-field-error-display>\n\t  <button class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"onSubmit(f)\">Submit</button>\n\t  <button class=\"btn\" (click)=\"reset()\">Reset</button>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.apiRoot = "http://api.miglig.com/api/user/register/";
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]],
            mobile: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            re_password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
        }, { validator: this.checkIfMatchingPasswords('password', 're_password') });
    };
    SignupComponent.prototype.checkIfMatchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    SignupComponent.prototype.onSubmit = function (f, apis) {
        this.formSubmitAttempt = true;
        if (this.form.valid) {
            var api_data = f.value;
            console.log(api_data);
            // apis.signup_api(api_data)
            return this.http.post(this.apiRoot, api_data).subscribe(function (res) { return console.log(res); });
        }
        else {
            this.validateAllFormFields(this.form); //{7}
        }
    };
    SignupComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) {
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    SignupComponent.prototype.isFieldValid = function (field) {
        return (!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt);
    };
    SignupComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    SignupComponent.prototype.reset = function () {
        this.form.reset();
        this.formSubmitAttempt = false;
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trending/trending.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trending/trending.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  trending works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/trending/trending.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrendingComponent = /** @class */ (function () {
    function TrendingComponent() {
    }
    TrendingComponent.prototype.ngOnInit = function () {
    };
    TrendingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trending',
            template: __webpack_require__("../../../../../src/app/trending/trending.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trending/trending.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrendingComponent);
    return TrendingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/video-player/video-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-player/video-player.component.html":
/***/ (function(module, exports) {

module.exports = "<vg-player (onPlayerReady)=\"onPlayerReady($event)\"  (dblclick)=\"onDoubleClickFullscreen($event)\" >\n\t<vg-overlay-play ></vg-overlay-play>\n\t<vg-buffering></vg-buffering>\n\n    <vg-scrub-bar>\n    \t<vg-scrub-bar-cue-points></vg-scrub-bar-cue-points>\n\t\t<vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n\t\t<vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n\t</vg-scrub-bar>\n\t<vg-controls [vgAutohide]=\"true\" [vgAutohideTime]=\".5\" [style.background-color]=\"'rgba(0, 0, 0, 0.1)'\">\n\t\t      \t\n       \n\n\t\t<vg-play-pause></vg-play-pause>\n\t\t<vg-mute ></vg-mute>\n\t\t<vg-volume ></vg-volume>\n\n\t\t<vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n\n\n\t\t<vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\n\n        <!-- <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display> -->\n        <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n\n\t\t<!-- <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display> -->\n\t\t<!-- <div [style.position]=\"'relative'\" [style.width]=\"'85%'\"  ></div> -->\n\t\t<vg-playback-button></vg-playback-button>\n\t\t\n\t\t<vg-track-selector [vgFor]=\"singleVideo\"></vg-track-selector>\n\t\t<vg-fullscreen [style.float]=\"'right'\" ></vg-fullscreen>\n\t</vg-controls>\n\n\t<video #media [vgMedia]=\"media\" id=\"singleVideo\" preload=\"auto\" crossorigin>\n\t\t<source src=\"http://static.videogular.com/assets/videos/videogular.mp4\" type=\"video/mp4\">\n\t</video>\n</vg-player>\n"

/***/ }),

/***/ "../../../../../src/app/video-player/video-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoPlayerComponent = /** @class */ (function () {
    function VideoPlayerComponent(renderer) {
        this.renderer = renderer;
        this.preload = 'auto';
    }
    VideoPlayerComponent.prototype.ngOnInit = function () {
    };
    VideoPlayerComponent.prototype.ngOnDestroy = function () {
        // remove listener
        this.globalListenFunc();
    };
    VideoPlayerComponent.prototype.onDoubleClickFullscreen = function (event) {
        this.api.fsAPI.toggleFullscreen();
        console.log(this);
    };
    VideoPlayerComponent.prototype.onPlayerReady = function (api) {
        var _this = this;
        this.api = api;
        console.log(this);
        console.log(this.api.$$seek(api.getDefaultMedia(), .5, false));
        // this.api.seek()
        this.globalListenFunc = this.renderer.listen('document', 'keydown', function (e) {
            if (e.key == ' ' && e.code == 'Space' && api.getDefaultMedia().state == "paused") {
                _this.api.play();
            }
            else if (e.key == ' ' && e.code == 'Space' && api.getDefaultMedia().state != "paused") {
                _this.api.pause();
            }
            if (e.altKey && e.code == 'ArrowRight') {
                _this.api.currentTime += 150;
            }
            if (e.altKey && e.code == 'ArrowLeft') {
                _this.api.currentTime -= 150;
            }
            if (e.shiftKey && e.code == 'ArrowRight') {
                _this.api.currentTime += 1;
            }
            if (e.shiftKey && e.code == 'ArrowLeft') {
                _this.api.currentTime -= 1;
            }
            if (e.key == 'f' && e.key != ' ') {
                _this.api.fsAPI.toggleFullscreen();
            }
            if (e.code == 'ArrowLeft' && !e.shiftKey) {
                _this.api.currentTime -= 5;
            }
            if (e.code == 'ArrowRight' && !e.shiftKey) {
                _this.api.currentTime += 10;
            }
            if (e.code == 'ArrowUp') {
                if (_this.api.volume < .95) {
                    _this.api.volume = _this.api.volume + .05;
                }
                else {
                    _this.api.volume = 1;
                }
            }
            if (e.code == 'ArrowDown') {
                if (_this.api.volume > .05) {
                    _this.api.volume = _this.api.volume - .05;
                }
                else {
                    _this.api.volume = 0;
                }
            }
        });
        this.api.getDefaultMedia().subscriptions.ended.subscribe(function () {
            _this.api.getDefaultMedia().currentTime = 0;
        });
    };
    VideoPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-video-player',
            template: __webpack_require__("../../../../../src/app/video-player/video-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-player/video-player.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map