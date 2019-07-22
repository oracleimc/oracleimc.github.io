(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"md-medium-tall\" color=\"warn\">\n    <div class=\"mat-toolbar-tools\">\n      <span layout-align=\"center center\"> Oracle CCOE Cloud Solution Tool</span>\n      <span flex></span>\n     </div>\n</mat-toolbar>\n\n\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <form [formGroup]=\"firstFormGroup\">\n        <ng-template matStepLabel>Partner information</ng-template>\n        <mat-form-field>\n            <mat-label>Partner Company Name</mat-label>\n            <input matInput formControlName=\"companyName\" required>\n            <mat-error>This field is required</mat-error>\n          </mat-form-field>\n          \n              <mat-form-field>\n                <mat-label>Oracle Partner Network ID</mat-label>\n                <input matInput formControlName=\"partnerID\" required>\n                <mat-error>This field is required</mat-error>\n              </mat-form-field>\n              <table class=\"example-full-width\" cellspacing=\"0\">\n                  <tr>\n                    <td>\n                      <mat-form-field class=\"example-full-width\">\n                        <mat-label>Type</mat-label>\n                        <mat-select formControlName=\"type\" required>\n                            <mat-option></mat-option>\n                            <mat-option *ngFor=\"let typevalue of typesoptions\" [value]=\"typevalue\">{{typevalue}}</mat-option>\n                        </mat-select> \n                        <mat-error>This field is required</mat-error>\n                      </mat-form-field>\n                    </td>\n                    <td>\n                        <mat-form-field class=\"example-full-width\">\n                            <mat-label>Target Persona</mat-label>\n                            <mat-select formControlName=\"targetPersona\" required>\n                                <mat-option> </mat-option>\n                                <mat-option *ngFor=\"let targetpersona of targetpersonas\" [value]=\"targetpersona\">{{targetpersona}}</mat-option>\n                            </mat-select> \n                            <mat-error>This field is required</mat-error>\n                          </mat-form-field> \n                      \n                    \n                    </td>\n       \n                  </tr></table>\n                  <mat-form-field>\n                      <mat-label>Title</mat-label>\n                      <input matInput formControlName=\"title\" required>\n                      <mat-error>This field is required</mat-error>\n                    </mat-form-field>\n        \n                    <mat-form-field class=\"example-full-width\">\n                        <textarea matInput formControlName=\"overview\" placeholder=\"Overview/Features\" required></textarea>\n                        <mat-error>This field is required</mat-error>\n                      </mat-form-field>\n        \n                      <mat-form-field class=\"example-full-width\">\n                          <textarea matInput formControlName=\"elevatorPitch\" placeholder=\"Elevator Pitch\" required></textarea>\n                          <mat-error>This field is required</mat-error>\n                        </mat-form-field>\n        \n                        <mat-form-field class=\"example-full-width\">\n                            <textarea matInput formControlName=\"painpoints\" placeholder=\"Pain Points\" required></textarea>\n                            <mat-error>This field is required</mat-error>\n                          </mat-form-field>\n                          <mat-form-field class=\"example-full-width\">\n                              <textarea matInput formControlName=\"keymessages\" placeholder=\"Key Messages\" required></textarea>\n                              <mat-error>This field is required</mat-error>\n                          </mat-form-field>\n                          <mat-form-field class=\"example-full-width\">\n                              <textarea matInput formControlName=\"resources\" placeholder=\"Resources\" required></textarea>\n                              <mat-error>This field is required</mat-error>\n                          </mat-form-field>\n                          <mat-form-field class=\"example-full-width\">\n                              <textarea matInput formControlName=\"salesContact\" placeholder=\"Partner Sales Contact\" required></textarea>\n                              <mat-error>This field is required</mat-error>\n                          </mat-form-field>\n                          <mat-form-field>\n                          <mat-label>Industries</mat-label>\n                              <mat-select formControlName=\"industries\"  multiple>\n                                <mat-option *ngFor=\"let industry of industries\" [value]=\"industry\">{{industry}}</mat-option>\n                              </mat-select>\n                              <mat-error>This field is required</mat-error>\n                            </mat-form-field>\n                            <mat-form-field>\n                                <mat-label>Products</mat-label>\n                                <mat-select formControlName=\"products\"  multiple>\n                                  <mat-option *ngFor=\"let product of products\" [value]=\"product\">{{product}}</mat-option>\n                                </mat-select>\n                                <mat-error>This field is required</mat-error>\n                              </mat-form-field>\n                              <mat-form-field>\n                                  <mat-label>Tags</mat-label>\n                                  <mat-select formControlName=\"tags\"  multiple >\n                                    <mat-option *ngFor=\"let tagsvalue of tagoptions\" [value]=\"tagsvalue\">{{tagsvalue}}</mat-option>\n                                  </mat-select>\n                                  <mat-error>This field is required</mat-error>\n                                </mat-form-field> \n                                <mat-form-field>\n                                    <mat-label>Markets</mat-label>\n                                    <mat-select formControlName=\"markets\"  required >\n                                      <mat-option *ngFor=\"let market of markets\" [value]=\"market\">{{market}}</mat-option>\n                                    </mat-select>\n                                    <mat-error>This field is required</mat-error>\n                                  </mat-form-field> \n                                  <mat-form-field class=\"example-full-width\">\n                                      <textarea matInput formControlName=\"references\" placeholder=\"References\" required></textarea>\n                                      <mat-error>This field is required</mat-error>\n                                  </mat-form-field>\n                                  <mat-form-field>\n                                      <mat-label>Logo url</mat-label>\n                                      <input matInput formControlName=\"logourl\" required>\n                                      <mat-error>This field is required</mat-error>\n                                    </mat-form-field>\n         <div>\n          <button class=\"btn-primary-spacing\" mat-raised-button matStepperNext color='warn'>Next</button>\n        </div>\n      </form>\n\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\">\n      <form [formGroup]=\"secondFormGroup\">\n        <ng-template matStepLabel>Summary </ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n        </mat-form-field>\n        <div>\n          <button class=\"btn-primary-spacing\" mat-raised-button matStepperPrevious color='warn'>Back</button>\n\n          <button class=\"btn-primary-spacing\" mat-raised-button (click)=\"sendToJSON()\" color='warn'>Reset</button>\n\n          \n        </div>\n      </form>\n    </mat-step>\n    \n  </mat-horizontal-stepper>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 100%;\n  }\n\n  .tab-button-toggle-label {\n    display: inline-block;\n    margin: 16px;\n  }\n\n  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n  .example-full-width {\n    width: 100%;\n  }\n\n  td {\n    padding-right: 8px;\n  }\n\n  .btn-primary-spacing \n{\nmargin-right: 5px;\nmargin-bottom: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7O0FBRUYsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnRhYi1idXR0b24tdG9nZ2xlLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAxNnB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0ZCB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnktc3BhY2luZyBcbntcbm1hcmdpbi1yaWdodDogNXB4O1xubWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AppComponent = /** @class */ (function () {
    /** Returns a FormArray with the name 'formArray'. */
    // get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }
    // tslint:disable-next-line:variable-name
    function AppComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.title = 'cloud-assessment-tool';
        this.typesoptions = [
            'Solution', 'Service', 'CSM Go-Live', 'POC'
        ];
        this.targetpersonas = ['Business', 'IT'];
        this.industries = ['Aerospace & Defense', 'Automotive', 'Chemicals', 'Communications', 'Consumer Goods', 'Cross Industry'];
        this.products = ['API Catalog Cloud Service', 'API Platform', 'Analytics Cloud', 'Application Container',
            'Application Performance Monitoring Cloud', 'BareMetal Compute/Storage/Network', 'Big Data Cloud', 'Big Data SQL Cloud Service',
            'Blockchain Platform', 'Cloud Access Security Broker', 'Configuration and Compliance Cloud Service'
        ];
        this.tagoptions = ['Emerging Technology', 'Land, Use, Expand', 'Machine Learning'];
        this.markets = ['ECEMEA South - CIS', 'ECEMEA South - ECE, ECEMEA South - MEA, ECEMEA South - South', 'UKII North - ALPS',
            'UKII North - Benelux', 'UKII North - Germany', 'UKII North - Nordics', 'UKII North - UKII'];
        // formGroup: FormGroup;
        this.isLinear = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.formGroup = this._formBuilder.group({
        // formArray: this._formBuilder.array([
        this.firstFormGroup = this._formBuilder.group({
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            partnerID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            targetPersona: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            overview: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            elevatorPitch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            painpoints: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            keymessages: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            resources: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            salesContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            industries: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            products: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tags: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            markets: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            references: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            logourl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
        });
    };
    AppComponent.prototype.sendToJSON = function () {
        var resource = JSON.stringify(this.firstFormGroup.value);
        console.log('Submit Button clicked: ' + resource);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/fesm5/angular-dual-listbox.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_dual_listbox__WEBPACK_IMPORTED_MODULE_10__["AngularDualListBoxModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Romeo/Documents/Dev/Angular/cloud-assessment-tool/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map