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

module.exports = "<mat-toolbar class=\"md-medium-tall\" color=\"warn\">\n        <div class=\"mat-toolbar-tools\">\n          <span layout-align=\"center center\"> Oracle CCOE Cloud Solution Tool</span>\n          <span flex></span>\n         </div>\n</mat-toolbar>\n    <mat-tab-group>\n    <mat-tab  label=\"Existing Solutions\">  \n\n  <form [formGroup]=\"formGroup\">\n    <!--mat-vertical-stepper #linearVerticalStepper=\"matVerticalStepper\" formArrayName=\"formArray\" [linear]=\"true\"-->\n    <mat-horizontal-stepper formArrayName=\"formArray\" [linear]=\"true\">  \n        \n      <mat-step formGroupName=\"0\" [stepControl]=\"formArray?.get([0])\">\n        \n        <ng-template matStepLabel>\n            <div>Partner information</div>\n          </ng-template>\n      <div>  \n          \n        <mat-form-field>\n          <mat-label>Partner Company Name</mat-label>\n          <input matInput formControlName=\"companyNameFormCtrl\" required>\n          <mat-error>This field is required</mat-error>\n        </mat-form-field>\n      \n      </div> \n      <div>\n        <mat-form-field>\n          <mat-label>Oracle Partner Network ID</mat-label>\n          <input matInput formControlName=\"partnerIDFormCtrl\" required>\n          <mat-error>This field is required</mat-error>\n        </mat-form-field>\n      </div>\n      <div>\n          <table class=\"example-full-width\" cellspacing=\"0\">\n            <tr>\n              <td>\n                <mat-form-field class=\"example-full-width\">\n                  <mat-label>Type</mat-label>\n                  <mat-select formControlName=\"typeFormCtrl\" required>\n                      <mat-option></mat-option>\n                      <mat-option *ngFor=\"let typevalue of typesoptions\" [value]=\"typevalue\">{{typevalue}}</mat-option>\n                  </mat-select> \n                  <mat-error>This field is required</mat-error>\n                </mat-form-field>\n              </td>\n              <td>\n                  <mat-form-field class=\"example-full-width\">\n                      <mat-label>Target Persona</mat-label>\n                      <mat-select formControlName=\"targetPersonaFormCtrl\" required>\n                          <mat-option> </mat-option>\n                          <mat-option *ngFor=\"let targetpersona of targetpersonas\" [value]=\"targetpersona\">{{targetpersona}}</mat-option>\n                      </mat-select> \n                      <mat-error>This field is required</mat-error>\n                    </mat-form-field> \n                \n              \n              </td>\n \n            </tr></table>\n      </div>\n\n        <div>\n            <mat-form-field>\n              <mat-label>Title</mat-label>\n              <input matInput formControlName=\"titleFormCtrl\" required>\n              <mat-error>This field is required</mat-error>\n            </mat-form-field>\n          </div>\n          <div>\n              <mat-form-field class=\"example-full-width\">\n                  <textarea matInput formControlName=\"overviewFormCtrl\" placeholder=\"Overview/Features\" required></textarea>\n                  <mat-error>This field is required</mat-error>\n                </mat-form-field>\n                \n            </div>\n            <div>\n                \n                <mat-form-field class=\"example-full-width\">\n                    <textarea matInput formControlName=\"elevatorPitchFormCtrl\" placeholder=\"Elevator Pitch\" required></textarea>\n                    <mat-error>This field is required</mat-error>\n                  </mat-form-field>\n           </div>\n              <div>\n             \n                  <mat-form-field class=\"example-full-width\">\n                      <textarea matInput formControlName=\"painpointsFormCtrl\" placeholder=\"Pain Points\" required></textarea>\n                      <mat-error>This field is required</mat-error>\n                    </mat-form-field>\n                </div>\n                <div>\n                    <mat-form-field class=\"example-full-width\">\n                        <textarea matInput formControlName=\"keymessagesFormCtrl\" placeholder=\"Key Messages\" required></textarea>\n                        <mat-error>This field is required</mat-error>\n                    </mat-form-field>\n\n                  </div>\n                  <div>\n                      <mat-form-field class=\"example-full-width\">\n                          <textarea matInput formControlName=\"resourcesFormCtrl\" placeholder=\"Resources\" required></textarea>\n                          <mat-error>This field is required</mat-error>\n                      </mat-form-field>\n             \n                    </div>\n                    <div>\n\n                        <mat-form-field class=\"example-full-width\">\n                            <textarea matInput formControlName=\"salesContactFormCtrl\" placeholder=\"Partner Sales Contact\" required></textarea>\n                            <mat-error>This field is required</mat-error>\n                        </mat-form-field>\n                      </div>\n                      <div>\n\n                          <mat-form-field>\n                              <mat-label>Industries</mat-label>\n                              <mat-select formControlName=\"industriesFormCtrl\"  multiple>\n                                <mat-option *ngFor=\"let industry of industries\" [value]=\"industry\">{{industry}}</mat-option>\n                              </mat-select>\n                              <mat-error>This field is required</mat-error>\n                            </mat-form-field>\n\n                        </div>\n                        <div>\n                            <mat-form-field>\n                                <mat-label>Products</mat-label>\n                                <mat-select formControlName=\"productsFormCtrl\"  multiple>\n                                  <mat-option *ngFor=\"let product of products\" [value]=\"product\">{{product}}</mat-option>\n                                </mat-select>\n                                <mat-error>This field is required</mat-error>\n                              </mat-form-field>\n\n                          </div>\n                          <div>\n                              <mat-form-field>\n                                  <mat-label>Tags</mat-label>\n                                  <mat-select formControlName=\"tagsFormCtrl\"  multiple >\n                                    <mat-option *ngFor=\"let tagsvalue of tagoptions\" [value]=\"tagsvalue\">{{tagsvalue}}</mat-option>\n                                  </mat-select>\n                                  <mat-error>This field is required</mat-error>\n                                </mat-form-field>  \n                            \n                          </div>\n                          <div>\n                              \n\n                                  <mat-form-field>\n                                      <mat-label>Markets</mat-label>\n                                      <mat-select formControlName=\"marketsFormCtrl\"  required >\n                                        <mat-option *ngFor=\"let market of markets\" [value]=\"market\">{{market}}</mat-option>\n                                      </mat-select>\n                                      <mat-error>This field is required</mat-error>\n                                    </mat-form-field> \n\n\n                              </div>\n                              <div>\n\n                                  <mat-form-field class=\"example-full-width\">\n                                      <textarea matInput formControlName=\"referencesFormCtrl\" placeholder=\"References\" required></textarea>\n                                      <mat-error>This field is required</mat-error>\n                                  </mat-form-field>\n                                </div>\n  \n                                <div>\n                                    <mat-form-field>\n                                      <mat-label>Logo url</mat-label>\n                                      <input matInput formControlName=\"logourlFormCtrl\" required>\n                                      <mat-error>This field is required</mat-error>\n                                    </mat-form-field>\n                                  </div>\n  \n  \n  \n        <div>\n          <button mat-raised-button matStepperNext color='warn' >Next</button>\n        </div>\n      </mat-step>\n\n      <mat-step formGroupName=\"1\" [stepControl]=\"formArray?.get([1])\">\n        <ng-template matStepLabel>\n          <div>Confirm your information</div>\n        </ng-template>\n        <mat-form-field>\n          <mat-label>Email address</mat-label>\n          <input matInput formControlName=\"emailFormCtrl\">\n          <mat-error>The input is invalid.</mat-error>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button type=\"button\" mat-button (click)=\"linearVerticalStepper.reset()\">Reset</button>\n          <button mat-button matStepperNext>Done</button>\n        </div>\n      </mat-step>\n  <!--\n      <mat-step>\n        <ng-template matStepLabel>Confirm your information</ng-template>\n        Everything seems correct.\n        <div>\n          <button mat-button>Done</button>\n          <button type=\"button\" mat-button (click)=\"linearVerticalStepper.reset()\">Reset</button>\n        </div>\n      </mat-step>\n\n    -->  \n    <!--/mat-vertical-stepper-->\n  </mat-horizontal-stepper>\n  </form>\n  \n</mat-tab>\n\n<mat-tab label=\"Assessment Tool for New Solutions\"> \n    \n\n\n  \n</mat-tab>\n</mat-tab-group>  \n  \n  \n  \n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 100%;\n  }\n\n  .tab-button-toggle-label {\n    display: inline-block;\n    margin: 16px;\n  }\n\n  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n  .example-full-width {\n    width: 100%;\n  }\n\n  td {\n    padding-right: 8px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC50YWItYnV0dG9uLXRvZ2dsZS1sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMTZweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdGQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxuICAiXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let AppComponent = class AppComponent {
    // tslint:disable-next-line:variable-name
    constructor(_formBuilder) {
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
        this.fruits = ['apple', 'pear', 'kiwi', 'banana', 'grape', 'strawberry', 'grapefruit', 'melon', 'mango', 'plum'];
        this.source = ['Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King'];
        this.target = [];
        this.steps = [
            { label: 'Confirm your name', content: 'Last name, First name.' },
            { label: 'Confirm your contact information', content: '123-456-7890' },
            { label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV' },
            { label: 'You are now done', content: 'Finished!' }
        ];
    }
    /** Returns a FormArray with the name 'formArray'. */
    get formArray() { return this.formGroup.get('formArray'); }
    ngOnInit() {
        this.formGroup = this._formBuilder.group({
            formArray: this._formBuilder.array([
                this._formBuilder.group({
                    companyNameFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    partnerIDFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    typeFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    targetPersonaFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    fyFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    titleFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    overviewFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    elevatorPitchFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    painpointsFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    keymessagesFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    resourcesFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    salesContactFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    industriesFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    productsFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    tagsFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    marketsFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    referencesFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    logourlFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                }),
                this._formBuilder.group({
                    emailFormCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
                }),
            ])
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var angular_dual_listbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-dual-listbox */ "./node_modules/angular-dual-listbox/fesm2015/angular-dual-listbox.js");












let AppModule = class AppModule {
};
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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map