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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n<!--<button (click)=\"makeRequest()\">BIG RED BUTTON</button>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar (queryEmitter)=\"setQuery($event)\"></app-navbar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <h1 class=\"card-header bg-info text-center w-100\">\n      Welcome to {{ title }}!\n    </h1>\n  </div>\n  <div class=\"d-none d-md-flex row\">\n    <div class=\"col-12\">\n      <div class=\"row\">\n        <h3 class=\"text-secondary p-5 m-auto\">\n          Different interesting graphs\n        </h3>\n      </div>\n    </div>\n    <app-graph *ngFor=\"let graph of graphs | filterBy: query\" [name] = \"graph.name\" [subName]=\"graph.sub_name\"\n               [type]=\"graph.type\" [xLabel]=\"graph.x_label\" [yLabel]=\"graph.y_label\" [data]=\"graph.output_data\" class=\"col-xl-6 col-12\"></app-graph>\n  </div>\n  <div class=\"d-flex d-md-none\">\n    <div class=\"row m-auto\">\n      Sorry, charts available only on wide screen\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/graph/graph.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/graph/graph.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <h4 class=\"m-auto\">\n    {{ name }}\n  </h4>\n</div>\n<div class=\"row px-2 pb-5\" [ngSwitch]=\"type\">\n  <ngx-charts-line-chart *ngSwitchCase=\"'Line'\"\n    [view]=\"view\"\n    [scheme]=\"colorScheme\"\n    [results]=\"data\"\n    [gradient]=\"gradient\"\n    [xAxis]=\"showXAxis\"\n    [yAxis]=\"showYAxis\"\n    [legend]=\"showLegend\"\n    [showXAxisLabel]=\"showXAxisLabel\"\n    [showYAxisLabel]=\"showYAxisLabel\"\n    [xAxisLabel]=\"xLabel\"\n    [yAxisLabel]=\"yLabel\"\n    (window:resize)=\"onResize($event)\"\n    (select)=\"onSelect($event)\">\n  </ngx-charts-line-chart>\n  <ngx-charts-bar-vertical *ngSwitchCase=\"'Bar-V'\"\n    [view]=\"view\"\n    [scheme]=\"colorScheme\"\n    [results]=\"data\"\n    [gradient]=\"gradient\"\n    [xAxis]=\"showXAxis\"\n    [yAxis]=\"showYAxis\"\n    [legend]=\"showLegend\"\n    [showXAxisLabel]=\"showXAxisLabel\"\n    [showYAxisLabel]=\"showYAxisLabel\"\n    [xAxisLabel]=\"xLabel\"\n    [yAxisLabel]=\"yLabel\"\n    (window:resize)=\"onResize($event)\"\n    (select)=\"onSelect($event)\">\n  </ngx-charts-bar-vertical>\n  <ngx-charts-bar-vertical-normalized *ngSwitchCase=\"'Bar-V-Norm'\"\n   [view]=\"view\"\n   [scheme]=\"colorScheme\"\n   [results]=\"data\"\n   [gradient]=\"gradient\"\n   [xAxis]=\"showXAxis\"\n   [yAxis]=\"showYAxis\"\n   [legend]=\"showLegend\"\n   [showXAxisLabel]=\"showXAxisLabel\"\n   [showYAxisLabel]=\"showYAxisLabel\"\n   [xAxisLabel]=\"xLabel\"\n   [yAxisLabel]=\"yLabel\"\n   (window:resize)=\"onResize($event)\"\n   (select)=\"onSelect($event)\">\n  </ngx-charts-bar-vertical-normalized>\n  <ngx-charts-bar-horizontal *ngSwitchCase=\"'Bar-H'\"\n   [view]=\"view\"\n   [scheme]=\"colorScheme\"\n   [results]=\"data\"\n   [gradient]=\"gradient\"\n   [xAxis]=\"showXAxis\"\n   [yAxis]=\"showYAxis\"\n   [legend]=\"showLegend\"\n   [showXAxisLabel]=\"showXAxisLabel\"\n   [showYAxisLabel]=\"showYAxisLabel\"\n   [xAxisLabel]=\"xLabel\"\n   [yAxisLabel]=\"yLabel\"\n   (window:resize)=\"onResize($event)\"\n   (select)=\"onSelect($event)\">\n  </ngx-charts-bar-horizontal>\n  <ngx-charts-bar-horizontal-normalized *ngSwitchCase=\"'Bar-H-Norm'\"\n   [view]=\"view\"\n   [scheme]=\"colorScheme\"\n   [results]=\"data\"\n   [gradient]=\"gradient\"\n   [xAxis]=\"showXAxis\"\n   [yAxis]=\"showYAxis\"\n   [legend]=\"showLegend\"\n   [showXAxisLabel]=\"showXAxisLabel\"\n   [showYAxisLabel]=\"showYAxisLabel\"\n   [xAxisLabel]=\"xLabel\"\n   [yAxisLabel]=\"yLabel\"\n   (window:resize)=\"onResize($event)\"\n   (select)=\"onSelect($event)\">\n  </ngx-charts-bar-horizontal-normalized>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row vh-100 d-flex align-items-center\">\n    <div class=\"col-md-6 d-none d-md-block\">\n      <img class=\"img-responsive\" style=\"border-right: 1px solid black\"\n           src=\"static/assets/knowgraphs.png\" width=\"100%\" height=\"100%\" />\n    </div>\n    <div class=\"col-md-6 col-12\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input id=\"username\" type=\"text\" formControlName=\"username\" class=\"form-control\"\n                 [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input id=\"password\" type=\"password\" formControlName=\"password\" class=\"form-control\"\n                 [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n          </div>\n        </div>\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n          <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n          Login\n        </button>\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">*Know Graphs*</a>\n  <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n    </ul>\n    <input class=\"form-control my-2 mr-2\" type=\"search\" name=\"search\" placeholder=\"Search\" aria-label=\"Search\" [(ngModel)]=\"query\" (ngModelChange)=\"onChange($event)\">\n    <button class=\"btn btn-outline-dark my-2\" (click)=\"logout()\">Logout</button>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    // private access: string;
    // constructor(private http: HttpClient, private cookie: CookieService) { }
    ngOnInit() {
        //   this.http.post('http://localhost:8080/api/authenticate', {
        //       email: 'dupa11@gmail.com',
        //       expirationDate: 1626286772000,
        //       subscriptionType: ['Ogłoszenia', 'Spółdzielnie'],
        //       apiKey: '6TBwlxIpsy0NPWExe5H6'
        //     },
        //     { observe: 'response', withCredentials: true }
        //   )
        //     .subscribe(data => {
        //       console.log(data);
        //     });
        // }
        //
        // makeRequest() {
        //   const headers = new HttpHeaders()
        //       .set('Authorization',  'Bearer ' + this.cookie.get('MonitorApiToken'))
        //   this.http.get('http://localhost:8080/api/1',
        //     { observe: 'response', withCredentials: true, headers }
        //   )
        //     .subscribe(data => {
        //       console.log(data);
        //     });
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_graph_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/graph/graph.component */ "./src/app/components/graph/graph.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _security_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./security/jwt.interceptor */ "./src/app/security/jwt.interceptor.ts");
/* harmony import */ var _security_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./security/error.interceptor */ "./src/app/security/error.interceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/__ivy_ngcc__/esm2015/ngx-filter-pipe.js");
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _components_graph_graph_component__WEBPACK_IMPORTED_MODULE_7__["GraphComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _security_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _security_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security/auth.guard */ "./src/app/security/auth.guard.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






const routes = [
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_graph_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/graph.service */ "./src/app/services/graph.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(graphService) {
        this.graphService = graphService;
        this.title = 'Graphs Template Site';
        this.query = { name: '' };
    }
    ngOnInit() {
        this.getGraphs();
    }
    setQuery(value) {
        this.query.name = value;
    }
    getGraphs() {
        this.graphService.list().subscribe(response => {
            this.graphs = response;
        }, error => console.error(error), () => console.log('Graphs loaded'));
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_services_graph_service__WEBPACK_IMPORTED_MODULE_2__["GraphService"] }
];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/graph/graph.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/graph/graph.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhcGgvZ3JhcGguY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/graph/graph.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/graph/graph.component.ts ***!
  \*****************************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GraphComponent = class GraphComponent {
    constructor() {
        // options for the chart
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.timeline = true;
        this.colorScheme = {
            domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
        };
    }
    ngOnInit() {
        this.resize();
    }
    resize() {
        let width;
        let height;
        if (window.innerWidth < 1200) {
            width = window.innerWidth - 25;
            height = width / 2;
        }
        else {
            width = (window.innerWidth / 2) - 10;
            height = width / 2;
        }
        this.view = [width, height];
    }
    onResize(_event) {
        this.resize();
    }
    onSelect(_event) {
        console.log('clicked');
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GraphComponent.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GraphComponent.prototype, "subName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GraphComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GraphComponent.prototype, "xLabel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GraphComponent.prototype, "yLabel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GraphComponent.prototype, "data", void 0);
GraphComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-graph',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./graph.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/graph/graph.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./graph.component.css */ "./src/app/components/graph/graph.component.css")).default]
    })
], GraphComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        if (this.authService.tokenValue) {
            this.router.navigate(['/']).then();
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.authenticate(this.f.username.value, this.f.password.value)
            .subscribe(() => {
            this.router.navigate(['/']).then();
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(authService) {
        this.authService = authService;
        this.queryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    logout() {
        this.authService.clear();
        location.reload();
    }
    onChange(_event) {
        this.queryEmitter.emit(this.query);
        console.log(this.query);
    }
    ngOnInit() { }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavbarComponent.prototype, "queryEmitter", void 0);
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/security/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/security/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        const token = this.authService.tokenValue;
        if (token) {
            return true;
        }
        this.router.navigate(['/login']).then();
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/security/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/security/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401 && this.authService.tokenValue) {
                this.authService.clear();
                location.reload();
            }
            const error = err.statusText || err.message;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/security/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/security/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        const token = this.authService.tokenValue;
        console.log(token);
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](localStorage.getItem('token'));
        this.token = this.tokenSubject.asObservable();
    }
    get tokenValue() {
        return this.tokenSubject.value;
    }
    static toObject(token) {
        if (token == null)
            return null;
        const divided = token.split('.');
        if (divided.length !== 3)
            return null;
        const obj = {};
        obj.header = JSON.parse(atob(divided[0]));
        obj.payload = JSON.parse(atob(divided[1]));
        obj.signature = divided[2];
        return obj;
    }
    authenticate(username, password) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api}/token/`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(token => {
            localStorage.setItem('token', token.access);
            this.tokenSubject.next(token.access);
            return token.access;
        }));
    }
    clear() {
        localStorage.removeItem('token');
        this.tokenSubject.next(null);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ "./src/app/services/graph.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/graph.service.ts ***!
  \*******************************************/
/*! exports provided: GraphService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphService", function() { return GraphService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let GraphService = class GraphService {
    constructor(http) {
        this.http = http;
    }
    list() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/graphs/`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            let graphs = [];
            response.sort((a, b) => (a.name > b.name) ? 1 : -1);
            let lastGraph = null;
            response.forEach(graph => {
                graph.x_label = graph.x_label.toLowerCase();
                graph.y_label = graph.y_label.toLowerCase();
                const formattedData = [];
                graph.data.forEach(data => {
                    const tempGraph = Object.assign({}, graph);
                    tempGraph.data = [];
                    tempGraph.output_data = [];
                    data.graph = tempGraph;
                    formattedData.push({ name: data.key, value: data.value });
                });
                if (lastGraph != null &&
                    lastGraph.name === graph.name &&
                    lastGraph.x_label === graph.x_label &&
                    lastGraph.y_label === graph.y_label) {
                    lastGraph.data = lastGraph.data.concat(graph.data);
                    lastGraph.output_data.push({ name: graph.sub_name, series: formattedData });
                }
                else {
                    graphs.push({ name: graph.name, sub_name: graph.sub_name, description: graph.description,
                        type: graph.type, x_label: graph.x_label, y_label: graph.y_label, data: graph.data, creation_date: graph.creation_date,
                        output_data: [{ name: graph.sub_name, series: formattedData }] });
                }
                lastGraph = graphs[graphs.length - 1];
            });
            console.log(graphs);
            return graphs;
        }));
    }
};
GraphService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GraphService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GraphService);



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
    production: false,
    api: 'http://localhost:8000/api'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /home/wojciech/Projects/Python/GraphsTemplateSite/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map