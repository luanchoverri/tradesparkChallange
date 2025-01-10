function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./book-store/book-store.component */
    "./src/app/book-store/book-store.component.ts");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");

    var routes = [{
      path: 'book-store',
      component: _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_2__["BookStoreComponent"]
    }, {
      path: 'main-page',
      component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]
    }, {
      path: '**',
      redirectTo: 'main-page',
      pathMatch: 'full'
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./book-store/book-store.component */
    "./src/app/book-store/book-store.component.ts");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _category_chip_category_chip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./category-chip/category-chip.component */
    "./src/app/category-chip/category-chip.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_5__["BookStoreComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"], _category_chip_category_chip_component__WEBPACK_IMPORTED_MODULE_8__["CategoryChipComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _book_store_book_store_component__WEBPACK_IMPORTED_MODULE_5__["BookStoreComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"], _category_chip_category_chip_component__WEBPACK_IMPORTED_MODULE_8__["CategoryChipComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/book-store.service.ts":
  /*!***************************************!*\
    !*** ./src/app/book-store.service.ts ***!
    \***************************************/

  /*! exports provided: BookStoreService */

  /***/
  function srcAppBookStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookStoreService", function () {
      return BookStoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BookStoreService = /*#__PURE__*/function () {
      function BookStoreService(client) {
        _classCallCheck(this, BookStoreService);

        this.client = client;
      }

      _createClass(BookStoreService, [{
        key: "getBooks",
        value: function getBooks() {
          return this.client.get('http://localhost:8000/bookStore/books/');
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(bookId, categoryId) {
          return this.client["delete"]("http://localhost:8000/bookStore/books/".concat(bookId, "/remove_category/").concat(categoryId, "/"));
        }
      }]);

      return BookStoreService;
    }();

    BookStoreService.ɵfac = function BookStoreService_Factory(t) {
      return new (t || BookStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BookStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BookStoreService,
      factory: BookStoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/book-store/book-store.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/book-store/book-store.component.ts ***!
    \****************************************************/

  /*! exports provided: BookStoreComponent */

  /***/
  function srcAppBookStoreBookStoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookStoreComponent", function () {
      return BookStoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _book_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../book-store.service */
    "./src/app/book-store.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _category_chip_category_chip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../category-chip/category-chip.component */
    "./src/app/category-chip/category-chip.component.ts");

    function BookStoreComponent_tr_20_app_category_chip_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-category-chip", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteCategory", function BookStoreComponent_tr_20_app_category_chip_7_Template_app_category_chip_deleteCategory_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.deleteCategoryFromBook($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r3 = ctx.$implicit;

        var book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", category_r3)("bookId", book_r1.id);
      }
    }

    function BookStoreComponent_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BookStoreComponent_tr_20_app_category_chip_7_Template, 1, 2, "app-category-chip", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var book_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1["author"]["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", book_r1.categories);
      }
    }

    var BookStoreComponent = /*#__PURE__*/function () {
      function BookStoreComponent(bookStoreService) {
        _classCallCheck(this, BookStoreComponent);

        this.bookStoreService = bookStoreService;
        this.books = [];
        this.filteredBooks = [];
      }

      _createClass(BookStoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getBooks();
        }
      }, {
        key: "categoriesToString",
        value: function categoriesToString(categories) {
          var categoriesString = "";
          categories.forEach(function (category, index) {
            categoriesString += category.name;

            if (index < categories.length - 1) {
              categoriesString += ', ';
            }
          });
          return categoriesString;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value.toLowerCase();
          this.filteredBooks = this.books.filter(function (book) {
            return book.title.toLowerCase().includes(filterValue) || book.author.name.toLowerCase().includes(filterValue) || book.categories.some(function (category) {
              return category.name.toLowerCase().includes(filterValue);
            });
          });
        }
      }, {
        key: "getBooks",
        value: function getBooks() {
          var _this = this;

          this.bookStoreService.getBooks().subscribe(function (data) {
            console.log('Books Data:', data);
            _this.books = data;
            _this.filteredBooks = data;
          });
        }
      }, {
        key: "deleteCategoryFromBook",
        value: function deleteCategoryFromBook(event) {
          var _this2 = this;

          var bookId = event.bookId,
              categoryId = event.categoryId;
          var confirmation = window.confirm("Are you sure you want to delete the category?");

          if (confirmation) {
            this.bookStoreService.deleteCategory(bookId, categoryId).subscribe(function () {
              console.log("Categor\xEDa ".concat(categoryId, " eliminada del libro ").concat(bookId));

              _this2.getBooks();
            }, function (error) {
              console.error('Error al eliminar la categoría:', error);
            });
          }
        }
      }]);

      return BookStoreComponent;
    }();

    BookStoreComponent.ɵfac = function BookStoreComponent_Factory(t) {
      return new (t || BookStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_book_store_service__WEBPACK_IMPORTED_MODULE_1__["BookStoreService"]));
    };

    BookStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookStoreComponent,
      selectors: [["app-book-store"]],
      decls: 21,
      vars: 1,
      consts: [[1, "background-image"], [1, "filter-section"], [1, "fa", "fa-search", "search-icon"], ["type", "text", "id", "filter-input", "placeholder", "Search by Title, Author or Category", 3, "input"], [1, "flat-button"], [1, "book-list"], [4, "ngFor", "ngForOf"], [1, "chips-container"], ["class", "chip", 3, "category", "bookId", "deleteCategory", 4, "ngFor", "ngForOf"], [1, "chip", 3, "category", "bookId", "deleteCategory"]],
      template: function BookStoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Book Store ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function BookStoreComponent_Template_input_input_5_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Add Book ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Book Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Author");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BookStoreComponent_tr_20_Template, 8, 3, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredBooks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _category_chip_category_chip_component__WEBPACK_IMPORTED_MODULE_3__["CategoryChipComponent"]],
      styles: [".background-image[_ngcontent-%COMP%] {\r\n    background: url('bookstore_image.jpeg') no-repeat center center;\r\n    background-size: cover;\r\n    padding: 20px;\r\n    color: #333; \r\n    font-family: 'Arial', sans-serif;\r\n    background-position: center;\r\n    height: 100vh;\r\n    width: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #000000; \r\n    font-size: 2.5em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.filter-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  background: rgba(255, 255, 255, 0.9);\r\n  border-radius: 8px;\r\n  padding: 12px 15px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n  width: 100%;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.filter-section[_ngcontent-%COMP%]:focus-within {\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.search-icon[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  color: #08a0d9;\r\n  margin-right: 12px;\r\n}\r\n\r\n.filter-section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: none;\r\n  outline: none;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  color: #131313;\r\n  background: transparent;\r\n\r\n}\r\n\r\n.filter-section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: #6e6e6e;\r\n}\r\n\r\n.filter-section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  color: #6e6e6e;\r\n}\r\n\r\n.book-list[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.8); \r\n    border-radius: 8px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 15px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); \r\n    width: 100%;\r\n\r\n}\r\n\r\n.book-list[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-collapse: collapse; \r\n}\r\n\r\n.book-list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .book-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding: 8px;\r\n    border-bottom: 1px solid #ddd; \r\n    border-right: 1px solid #ddd; \r\n}\r\n\r\n.book-list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background-color: #f4f4f4; \r\n    color: #333; \r\n}\r\n\r\n.book-list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, .book-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\r\n    border-right: none; \r\n}\r\n\r\n.book-list[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(141, 199, 213, 0.48); \r\n}\r\n\r\n.chips-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.flat-button[_ngcontent-%COMP%] {\r\n  margin: 10px 0;\r\n  padding: 12px 20px;\r\n  background-color: #007BFF;\r\n  color: #ffffff;\r\n  border: none;\r\n  border-radius: 8px;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.flat-button[_ngcontent-%COMP%]:hover {background-color: #0068d9\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1zdG9yZS9ib29rLXN0b3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrREFBNEU7SUFDNUUsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXLEVBQUUsMkJBQTJCO0lBQ3hDLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjLEVBQUUsbURBQW1EO0lBQ25FLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUZBO0VBQ0UsY0FBYztBQUNoQjs7QUFJQTtJQUNJLG9DQUFvQyxFQUFFLDBDQUEwQztJQUNoRixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0NBQXdDLEVBQUUsMEJBQTBCO0lBQ3BFLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCLEVBQUUsMkRBQTJEO0FBQzFGOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw2QkFBNkIsRUFBRSxpQ0FBaUM7SUFDaEUsNEJBQTRCLEVBQUUsZ0NBQWdDO0FBQ2xFOztBQUVBO0lBQ0kseUJBQXlCLEVBQUUsc0NBQXNDO0lBQ2pFLFdBQVcsRUFBRSwwQkFBMEI7QUFDM0M7O0FBRUE7SUFDSSxrQkFBa0IsRUFBRSw0Q0FBNEM7QUFDcEU7O0FBRUE7SUFDSSwyQ0FBMkMsRUFBRSw0Q0FBNEM7QUFDN0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQSxvQkFBb0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ib29rLXN0b3JlL2Jvb2stc3RvcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2Jvb2tzdG9yZV9pbWFnZS5qcGVnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGNvbG9yOiAjMzMzOyAvKiBEYXJrIHRleHQgZm9yIGNvbnRyYXN0ICovXHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7IC8qIEEgY29sb3IgdGhhdCBzdGFuZHMgb3V0IGFnYWluc3QgdGhlIGJhY2tncm91bmQgKi9cclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5maWx0ZXItc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmZpbHRlci1zZWN0aW9uOmZvY3VzLXdpdGhpbiB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogIzA4YTBkOTtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5maWx0ZXItc2VjdGlvbiBpbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAjMTMxMzEzO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxufVxyXG5cclxuLmZpbHRlci1zZWN0aW9uIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM2ZTZlNmU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJvb2stbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IC8qIFNlbWktdHJhbnNwYXJlbnQgd2hpdGUgZm9yIGxlZ2liaWxpdHkgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIFNvZnQgc2hhZG93IGZvciBkZXB0aCAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uYm9vay1saXN0IHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogRW5zdXJlcyB0aGF0IHRoZSBib3JkZXJzIGNvbGxhcHNlIGludG8gYSBzaW5nbGUgYm9yZGVyICovXHJcbn1cclxuXHJcbi5ib29rLWxpc3QgdGgsIC5ib29rLWxpc3QgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyAvKiBIb3Jpem9udGFsIGxpbmUgZm9yIGVhY2ggcm93ICovXHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkOyAvKiBWZXJ0aWNhbCBsaW5lIGJldHdlZW4gY2VsbHMgKi9cclxufVxyXG5cclxuLmJvb2stbGlzdCB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0OyAvKiBMaWdodCBncmF5IGJhY2tncm91bmQgZm9yIGhlYWRlcnMgKi9cclxuICAgIGNvbG9yOiAjMzMzOyAvKiBEYXJrIHRleHQgZm9yIGhlYWRlcnMgKi9cclxufVxyXG5cclxuLmJvb2stbGlzdCB0aDpsYXN0LWNoaWxkLCAuYm9vay1saXN0IHRkOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyAvKiBSZW1vdmUgcmlnaHQgYm9yZGVyIGZvciB0aGUgbGFzdCBjb2x1bW4gKi9cclxufVxyXG5cclxuLmJvb2stbGlzdCB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MSwgMTk5LCAyMTMsIDAuNDgpOyAvKiBTbGlnaHRseSBkYXJrZXIgYmFja2dyb3VuZCBvbiByb3cgaG92ZXIgKi9cclxufVxyXG5cclxuLmNoaXBzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5mbGF0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5mbGF0LWJ1dHRvbjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzAwNjhkOVxyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-book-store',
          templateUrl: './book-store.component.html',
          styleUrls: ['./book-store.component.css']
        }]
      }], function () {
        return [{
          type: _book_store_service__WEBPACK_IMPORTED_MODULE_1__["BookStoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/category-chip/category-chip.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/category-chip/category-chip.component.ts ***!
    \**********************************************************/

  /*! exports provided: CategoryChipComponent */

  /***/
  function srcAppCategoryChipCategoryChipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryChipComponent", function () {
      return CategoryChipComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CategoryChipComponent = /*#__PURE__*/function () {
      function CategoryChipComponent() {
        _classCallCheck(this, CategoryChipComponent);

        this.deleteCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CategoryChipComponent, [{
        key: "onDelete",
        value: function onDelete() {
          console.log('on delete function', this.bookId, this.category.id);
          this.deleteCategory.emit({
            bookId: this.bookId,
            categoryId: this.category.id
          });
        }
      }]);

      return CategoryChipComponent;
    }();

    CategoryChipComponent.ɵfac = function CategoryChipComponent_Factory(t) {
      return new (t || CategoryChipComponent)();
    };

    CategoryChipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryChipComponent,
      selectors: [["app-category-chip"]],
      inputs: {
        category: "category",
        bookId: "bookId"
      },
      outputs: {
        deleteCategory: "deleteCategory"
      },
      decls: 5,
      vars: 1,
      consts: [[1, "category-chip"], [1, "category-name"], [1, "delete-category", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"]],
      template: function CategoryChipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryChipComponent_Template_button_click_3_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category.name);
        }
      },
      styles: [".category-chip[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #f3f3f3;\r\n  border-radius: 16px;\r\n  padding: 6px 12px;\r\n  font-size: 1rem;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n\r\n.category-chip[_ngcontent-%COMP%]:hover {\r\n\r\n  background-color: rgba(238, 157, 157, 0.97);\r\n}\r\n\r\n\r\n.category-name[_ngcontent-%COMP%] {\r\n  margin-right: 8px;\r\n}\r\n\r\n\r\n.delete-category[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  color: #a0a0a0;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: inline-block;\r\n  transition: color 0.3s;\r\n}\r\n\r\n\r\n.delete-category[_ngcontent-%COMP%]:hover {\r\n  color: #880202;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnktY2hpcC9jYXRlZ29yeS1jaGlwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDOzs7QUFHQTs7RUFFRSwyQ0FBMkM7QUFDN0M7OztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLGNBQWM7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnktY2hpcC9jYXRlZ29yeS1jaGlwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcnktY2hpcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuXHJcbi5jYXRlZ29yeS1jaGlwOmhvdmVyIHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDE1NywgMTU3LCAwLjk3KTtcclxufVxyXG5cclxuLmNhdGVnb3J5LW5hbWUge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uZGVsZXRlLWNhdGVnb3J5IHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2EwYTBhMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG59XHJcblxyXG4uZGVsZXRlLWNhdGVnb3J5OmhvdmVyIHtcclxuICBjb2xvcjogIzg4MDIwMjtcclxuXHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryChipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-category-chip',
          templateUrl: './category-chip.component.html',
          styleUrls: ['./category-chip.component.css']
        }]
      }], null, {
        category: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bookId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deleteCategory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main-page/main-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-page/main-page.component.ts ***!
    \**************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent() {
        _classCallCheck(this, MainPageComponent);

        this.title = 'TradeSpark Challange';
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
      return new (t || MainPageComponent)();
    };

    MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainPageComponent,
      selectors: [["app-main-page"]],
      decls: 5,
      vars: 1,
      consts: [[1, "background-image"], [1, "main-title"], ["routerLink", "/book-store", 1, "button-center"]],
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go to the book store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome to ", ctx.title, "!");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%; \r\n    width: 100%; \r\n    overflow: hidden; \r\n}\r\n\r\n.background-image[_ngcontent-%COMP%] {\r\n    background-image: url('tradespark_logo.png');\r\n    background-size: cover; \r\n    background-position: center;\r\n    height: 100vh;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n}\r\n\r\n.main-title[_ngcontent-%COMP%] {\r\n    font-family: 'Arial', sans-serif; \r\n    font-size: 3rem; \r\n    color: #333;\r\n    text-align: center; \r\n    margin-top: 0px;\r\n    margin-bottom: auto; \r\n    letter-spacing: 5px; \r\n    word-spacing: 10px; \r\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.2); \r\n    border-bottom: 2px solid #666; \r\n    padding-bottom: 10px; \r\n    max-width: 80%;\r\n    margin-left: auto; \r\n    margin-right: auto;\r\n    border-radius: 10px; \r\n}\r\n\r\n.button-center[_ngcontent-%COMP%] {\r\n    display: inline-block; \r\n    padding: 10px 20px; \r\n    font-size: 1rem; \r\n    color: white; \r\n    background-color: #29b7da; \r\n    border: none; \r\n    border-radius: 5px; \r\n    cursor: pointer; \r\n    text-align: center; \r\n    text-decoration: none; \r\n    transition: background-color 0.3s, transform 0.3s; \r\n    position: absolute;\r\n    top: 70%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.button-center[_ngcontent-%COMP%]:hover, .button-center[_ngcontent-%COMP%]:focus {\r\n    background-color: #0199b7; \r\n    transform: scale(1.05) translate(-50%, -50%);\r\n    outline: none; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZLEVBQUUseUJBQXlCO0lBQ3ZDLFdBQVcsRUFBRSx3QkFBd0I7SUFDckMsZ0JBQWdCLEVBQUUsc0JBQXNCO0FBQzVDOztBQUVBO0lBQ0ksNENBQXlEO0lBQ3pELHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaURBQWlEO0lBQ2pELGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBNEM7SUFDNUMsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCB2aWV3cG9ydCBoZWlnaHQgKi9cclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHZpZXdwb3J0IHdpZHRoICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBQcmV2ZW50IHNjcm9sbGluZyAqL1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy90cmFkZXNwYXJrX2xvZ28ucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7IFxyXG4gICAgZm9udC1zaXplOiAzcmVtOyBcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87IFxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDsgXHJcbiAgICB3b3JkLXNwYWNpbmc6IDEwcHg7IFxyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwwLDAsMC4yKTsgXHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDsgXHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG59XHJcblxyXG4uYnV0dG9uLWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgcGFkZGluZzogMTBweCAyMHB4OyBcclxuICAgIGZvbnQtc2l6ZTogMXJlbTsgXHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5YjdkYTsgXHJcbiAgICBib3JkZXI6IG5vbmU7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuM3M7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJ1dHRvbi1jZW50ZXI6aG92ZXIsIC5idXR0b24tY2VudGVyOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTk5Yjc7IFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBvdXRsaW5lOiBub25lOyBcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-page',
          templateUrl: './main-page.component.html',
          styleUrls: ['./main-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Luciana\Documents\Challenge-TradeSpark\tradesparkChallange\tradesparkChallengeAngular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map