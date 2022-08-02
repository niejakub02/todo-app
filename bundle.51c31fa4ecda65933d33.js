/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Form/Form.js":
/*!*************************************!*\
  !*** ./src/components/Form/Form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.css */ "./src/components/Form/Form.css");
/* harmony import */ var _helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/addEvent */ "./src/helpers/addEvent.js");
/* harmony import */ var _helpers_mount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/mount */ "./src/helpers/mount.js");
/* harmony import */ var _handlers_submitHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../handlers/submitHandler */ "./src/handlers/submitHandler.js");





var Form = function Form(submitCB) {
  var form, button, button_mobile, title_input, description_input;

  var build = function build() {
    form = document.createElement('form');
    form.classList.add('form');
    title_input = document.createElement('input');
    title_input.classList.add('form__title');
    title_input.placeholder = 'title';
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(title_input, form);
    description_input = document.createElement('input');
    description_input.classList.add('form__description');
    description_input.placeholder = 'description';
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(description_input, form);
    button = document.createElement('button');
    button.classList.add('form__submit');
    button.classList.add('material-symbols-outlined');
    button.innerHTML = 'add';
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(button, form);
    button_mobile = document.createElement('button');
    button_mobile.classList.add('form__submit-mobile');
    button_mobile.innerHTML = 'Add node';
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(button_mobile, form);
  };

  var render = function render() {
    build();
    (0,_helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(button, 'click', function () {
      return (0,_handlers_submitHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(event, title_input.value, description_input.value, submitCB);
    });
    (0,_helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(form, 'submit', function () {
      return (0,_handlers_submitHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(event, title_input.value, description_input.value, submitCB);
    });
    return form;
  };

  return function (parent) {
    return (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(render(), parent);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.css */ "./src/components/Header/Header.css");
/* harmony import */ var _helpers_mount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/mount */ "./src/helpers/mount.js");
/* harmony import */ var _Form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Form/Form */ "./src/components/Form/Form.js");
/* harmony import */ var _Switch_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Switch/Switch */ "./src/components/Switch/Switch.js");





var Header = function Header(addCB, toggleThemeCB) {
  var container;

  var build = function build() {
    container = document.createElement('header');
    container.classList.add('header');
    var logo = document.createElement('h1');
    logo.classList.add('header__logo');
    logo.innerHTML = 'TodoApp';
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_1__["default"])(logo, container);
    (0,_Form_Form__WEBPACK_IMPORTED_MODULE_2__["default"])(addCB)(container);
    (0,_Switch_Switch__WEBPACK_IMPORTED_MODULE_3__["default"])(toggleThemeCB)(container);
  };

  var render = function render() {
    build();
    return container;
  };

  return function (parent) {
    return (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_1__["default"])(render(), parent);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Store/actions/themeActions.js":
/*!******************************************************!*\
  !*** ./src/components/Store/actions/themeActions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var themeActions = {
  toggleTheme: function toggleTheme() {
    return {
      type: 'themes/TOGGLE_THEME'
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeActions);

/***/ }),

/***/ "./src/components/Store/actions/todoActions.js":
/*!*****************************************************!*\
  !*** ./src/components/Store/actions/todoActions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var todoActions = {
  addTodo: function addTodo(todo) {
    return {
      type: 'todos/ADD_TODO',
      title: todo.title,
      description: todo.description
    };
  },
  toggleTodo: function toggleTodo(id) {
    return {
      type: 'todos/TOGGLE_TODO',
      id: id
    };
  },
  deleteTodo: function deleteTodo(id) {
    return {
      type: 'todos/DELETE_TODO',
      id: id
    };
  },
  setTodoState: function setTodoState(todo) {
    return {
      type: "todos/SET_TODO_STATE",
      id: todo.id,
      done: todo.done
    };
  },
  copyTodo: function copyTodo(todo) {
    return {
      type: "todos/COPY_TODO",
      id: todo.id,
      done: todo.done
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoActions);

/***/ }),

/***/ "./src/components/Store/initialState.js":
/*!**********************************************!*\
  !*** ./src/components/Store/initialState.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var initialState = {
  todos: [],
  themes: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialState);

/***/ }),

/***/ "./src/components/Store/reducers/combineReducers.js":
/*!**********************************************************!*\
  !*** ./src/components/Store/reducers/combineReducers.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var combineReducers = function combineReducers() {
  for (var _len = arguments.length, reducers = new Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (state, action) {
    var actionSlice = action.type.split('/');
    var nextState;

    var _iterator = _createForOfIteratorHelper(reducers),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var reducer = _step.value;

        if (reducer.prototype.constructor.name === actionSlice[0]) {
          nextState = reducer(state, _objectSpread(_objectSpread({}, action), {}, {
            type: actionSlice[1]
          }));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return nextState;
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combineReducers);

/***/ }),

/***/ "./src/components/Store/reducers/themesReducer.js":
/*!********************************************************!*\
  !*** ./src/components/Store/reducers/themesReducer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../initialState */ "./src/components/Store/initialState.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var themes = function themes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread({}, _initialState__WEBPACK_IMPORTED_MODULE_0__["default"]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        todos: _toConsumableArray(state.todos),
        themes: !state.themes
      };

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themes);

/***/ }),

/***/ "./src/components/Store/reducers/todoReducer.js":
/*!******************************************************!*\
  !*** ./src/components/Store/reducers/todoReducer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var id = 0;

var todo = function todo(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: id++,
        title: action.title,
        description: action.description,
        done: false
      };

    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state;
      return _objectSpread(_objectSpread({}, state), {}, {
        done: !state.done
      });

    case 'DELETE_TODO':
      if (state.id !== action.id) return state;

    case 'SET_TODO_STATE':
      if (state.id !== action.id) return state;
      return _objectSpread(_objectSpread({}, state), {}, {
        done: action.done
      });

    case 'COPY_TODO':
      state.find(function (t) {
        return t.id === action.id;
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);

/***/ }),

/***/ "./src/components/Store/reducers/todosReducer.js":
/*!*******************************************************!*\
  !*** ./src/components/Store/reducers/todosReducer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../initialState */ "./src/components/Store/initialState.js");
/* harmony import */ var _todoReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoReducer */ "./src/components/Store/reducers/todoReducer.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread({}, _initialState__WEBPACK_IMPORTED_MODULE_0__["default"]);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [].concat(_toConsumableArray(state.todos), [(0,_todoReducer__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action)]),
        themes: state.themes
      };

    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(function (t) {
          return (0,_todoReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(t, action);
        }),
        themes: state.themes
      };

    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(function (t) {
          (0,_todoReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(t, action);
        }),
        themes: state.themes
      };

    case 'SET_TODO_STATE':
      return {
        todos: state.todos.map(function (t) {
          return (0,_todoReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(t, action);
        }),
        themes: state.themes
      };

    case 'COPY_TODO':
      return {
        todos: [].concat(_toConsumableArray(state.todos), _toConsumableArray((0,_todoReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(state.todos, action))),
        themes: state.themes
      };

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todos);

/***/ }),

/***/ "./src/components/Switch/Switch.js":
/*!*****************************************!*\
  !*** ./src/components/Switch/Switch.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Switch_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch.css */ "./src/components/Switch/Switch.css");
/* harmony import */ var _helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/addEvent */ "./src/helpers/addEvent.js");
/* harmony import */ var _helpers_mount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/mount */ "./src/helpers/mount.js");
/* harmony import */ var _handlers_switchHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../handlers/switchHandler */ "./src/handlers/switchHandler.js");





var Switch = function Switch(toggleThemeCB) {
  var container, button;

  var build = function build() {
    container = document.createElement('div');
    container.classList.add('switch');
    button = document.createElement('button');
    button.classList.add('switch__button');
    button.classList.add('material-symbols-outlined');
    button.innerHTML = 'light_mode';
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(button, container);
  };

  var render = function render() {
    build();
    (0,_helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(button, 'click', function () {
      return (0,_handlers_switchHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(toggleThemeCB, button);
    });
    return container;
  };

  return function (parent) {
    return (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(render(), parent);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Switch);

/***/ }),

/***/ "./src/components/TodoListContainer/TodoListContainer.js":
/*!***************************************************************!*\
  !*** ./src/components/TodoListContainer/TodoListContainer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TodoListContainer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoListContainer.css */ "./src/components/TodoListContainer/TodoListContainer.css");
/* harmony import */ var _helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/addEvent */ "./src/helpers/addEvent.js");
/* harmony import */ var _helpers_mount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/mount */ "./src/helpers/mount.js");
/* harmony import */ var _handlers_dragEnterHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../handlers/dragEnterHandler */ "./src/handlers/dragEnterHandler.js");
/* harmony import */ var _handlers_dragLeaveHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../handlers/dragLeaveHandler */ "./src/handlers/dragLeaveHandler.js");
/* harmony import */ var _handlers_dragOverHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../handlers/dragOverHandler */ "./src/handlers/dragOverHandler.js");
/* harmony import */ var _handlers_dropHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../handlers/dropHandler */ "./src/handlers/dropHandler.js");








var TodoListContainer = function TodoListContainer(classname, label_content, setCB, copyCB, done) {
  var enterTarget = null;
  var container;

  var build = function build() {
    container = document.createElement('div');
    container.classList.add(classname);
    var label = document.createElement('h1');
    label.classList.add('todo-list__label');
    label.innerHTML = label_content;
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(label, container);
  };

  var render = function render() {
    build();
    (0,_helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(container, 'dragenter', function () {
      return enterTarget = (0,_handlers_dragEnterHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(event, container);
    });
    (0,_helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(container, 'dragleave', function () {
      return (0,_handlers_dragLeaveHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(event, enterTarget, container);
    });
    (0,_helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(container, 'dragover', function () {
      return (0,_handlers_dragOverHandler__WEBPACK_IMPORTED_MODULE_5__["default"])(event);
    });
    (0,_helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(container, 'drop', function () {
      return (0,_handlers_dropHandler__WEBPACK_IMPORTED_MODULE_6__["default"])(event, done, copyCB, setCB);
    });
    return container;
  };

  return function (parent) {
    return (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(render(), parent);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoListContainer);

/***/ }),

/***/ "./src/components/TodoList/TodoList.js":
/*!*********************************************!*\
  !*** ./src/components/TodoList/TodoList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TodoList_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList.css */ "./src/components/TodoList/TodoList.css");
/* harmony import */ var _TodoListContainer_TodoListContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TodoListContainer/TodoListContainer */ "./src/components/TodoListContainer/TodoListContainer.js");
/* harmony import */ var _Todo_Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Todo/Todo */ "./src/components/Todo/Todo.js");
/* harmony import */ var _helpers_mount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/mount */ "./src/helpers/mount.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var TodoList = function TodoList(todos, setCB, copyCB, deleteCB) {
  var container, pendingContainer, doneContainer;

  var build = function build() {
    container = document.createElement('div');
    container.classList.add('todo-list');
    pendingContainer = (0,_TodoListContainer_TodoListContainer__WEBPACK_IMPORTED_MODULE_1__["default"])('todo-list__pending', 'Pending', setCB, copyCB, false)(container);
    doneContainer = (0,_TodoListContainer_TodoListContainer__WEBPACK_IMPORTED_MODULE_1__["default"])('todo-list__done', 'Done', setCB, copyCB, true)(container);

    var _iterator = _createForOfIteratorHelper(todos),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var todo = _step.value;
        (0,_Todo_Todo__WEBPACK_IMPORTED_MODULE_2__["default"])(todo, deleteCB)(todo.done ? doneContainer : pendingContainer);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var render = function render() {
    build();
    return container;
  };

  return function (parent) {
    return (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_3__["default"])(render(), parent);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);

/***/ }),

/***/ "./src/components/Todo/Todo.js":
/*!*************************************!*\
  !*** ./src/components/Todo/Todo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.css */ "./src/components/Todo/Todo.css");
/* harmony import */ var _helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/addEvent */ "./src/helpers/addEvent.js");
/* harmony import */ var _helpers_mount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/mount */ "./src/helpers/mount.js");
/* harmony import */ var _handlers_deleteTodoHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../handlers/deleteTodoHandler */ "./src/handlers/deleteTodoHandler.js");
/* harmony import */ var _handlers_dragStartHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../handlers/dragStartHandler */ "./src/handlers/dragStartHandler.js");






var Todo = function Todo(todo, deleteCB) {
  var container, remover, inner_dot;

  var build = function build() {
    container = document.createElement('div');
    container.classList.add('todo');
    var dot = document.createElement('div');
    dot.classList.add('todo__dot');
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(dot, container);
    inner_dot = document.createElement('div');
    inner_dot.classList.add('dot__inner');
    inner_dot.draggable = true;
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(inner_dot, dot);
    var content = document.createElement('div');
    content.classList.add('todo__content-wrapper');
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(content, container);
    var label_wrapper = document.createElement('div');
    label_wrapper.classList.add('todo__label-wrapper');
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(label_wrapper, content);
    var title = document.createElement('h2');
    title.classList.add('todo__title');
    title.innerHTML = todo.title;
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(title, label_wrapper);
    remover = document.createElement('button');
    remover.classList.add('todo__delete');
    remover.innerHTML = 'delete';
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(remover, label_wrapper);
    var description = document.createElement('p');
    description.classList.add('todo__description');
    description.innerHTML = todo.description;
    (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(description, content);
  };

  var render = function render() {
    build();
    (0,_helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(remover, 'click', function () {
      return (0,_handlers_deleteTodoHandler__WEBPACK_IMPORTED_MODULE_3__["default"])(deleteCB, todo.id);
    });
    (0,_helpers_addEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(inner_dot, 'dragstart', function () {
      return (0,_handlers_dragStartHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(event, todo.id);
    });
    return container;
  };

  return function (parent) {
    return (0,_helpers_mount__WEBPACK_IMPORTED_MODULE_2__["default"])(render(), parent);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/components/store/Store.js":
/*!***************************************!*\
  !*** ./src/components/store/Store.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Store_initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Store/initialState */ "./src/components/Store/initialState.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var createStore = function createStore(reducer) {
  var state = _objectSpread({}, _Store_initialState__WEBPACK_IMPORTED_MODULE_0__["default"]);

  var listeners = [];

  var dispatch = function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(function (listener) {
      listener(action);
    });
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);
  };

  var unsubscribe = function unsubscribe() {};

  var getState = function getState() {
    return state;
  };

  return {
    dispatch: dispatch,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    getState: getState
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore);

/***/ }),

/***/ "./src/handlers/deleteTodoHandler.js":
/*!*******************************************!*\
  !*** ./src/handlers/deleteTodoHandler.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var todoDeleteHandler = function todoDeleteHandler(deleteCB, id) {
  return deleteCB(id);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoDeleteHandler);

/***/ }),

/***/ "./src/handlers/dragEnterHandler.js":
/*!******************************************!*\
  !*** ./src/handlers/dragEnterHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dragEnterHandler = function dragEnterHandler(event, container) {
  container.classList.add('todo-list__elem--drag-over');
  return event.target;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragEnterHandler);

/***/ }),

/***/ "./src/handlers/dragLeaveHandler.js":
/*!******************************************!*\
  !*** ./src/handlers/dragLeaveHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dragLeaveHandler = function dragLeaveHandler(event, eventTarget, container) {
  if (eventTarget === event.target) container.classList.remove('todo-list__elem--drag-over');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragLeaveHandler);

/***/ }),

/***/ "./src/handlers/dragOverHandler.js":
/*!*****************************************!*\
  !*** ./src/handlers/dragOverHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dragOverHandler = function dragOverHandler(event) {
  event.preventDefault();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragOverHandler);

/***/ }),

/***/ "./src/handlers/dragStartHandler.js":
/*!******************************************!*\
  !*** ./src/handlers/dragStartHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dragStartHandler = function dragStartHandler(event, id) {
  return event.dataTransfer.setData('text/plain', id);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragStartHandler);

/***/ }),

/***/ "./src/handlers/dropHandler.js":
/*!*************************************!*\
  !*** ./src/handlers/dropHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dropHandler = function dropHandler(event, done, copyCB, setCB) {
  var id = event.dataTransfer.getData('text');

  if (event.ctrlKey) {
    copyCB({
      id: Number(id),
      done: done
    });
  } else {
    setCB({
      id: Number(id),
      done: done
    });
  }

  event.dataTransfer.clearData();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropHandler);

/***/ }),

/***/ "./src/handlers/submitHandler.js":
/*!***************************************!*\
  !*** ./src/handlers/submitHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var submitHandler = function submitHandler(event, title, description, submitCB) {
  event.preventDefault();

  if (!!title.length && !!description.length) {
    submitCB({
      title: title,
      description: description
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitHandler);

/***/ }),

/***/ "./src/handlers/switchHandler.js":
/*!***************************************!*\
  !*** ./src/handlers/switchHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var switchHandler = function switchHandler(toggleThemeCB, button) {
  toggleThemeCB();
  button.innerHTML = button.innerHTML === 'light_mode' ? 'dark_mode' : 'light_mode';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (switchHandler);

/***/ }),

/***/ "./src/helpers/addEvent.js":
/*!*********************************!*\
  !*** ./src/helpers/addEvent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addEvent = function addEvent(element, eventType, eventHandler) {
  element.addEventListener(eventType, eventHandler);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEvent);

/***/ }),

/***/ "./src/helpers/applyTheme.js":
/*!***********************************!*\
  !*** ./src/helpers/applyTheme.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _themes_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../themes/themes */ "./src/themes/themes.js");


var applyTheme = function applyTheme(store) {
  var themes = store.getState().themes;
  var theme = themes ? _themes_themes__WEBPACK_IMPORTED_MODULE_0__.dark : _themes_themes__WEBPACK_IMPORTED_MODULE_0__.light;
  var keys = Object.keys(theme);
  keys.forEach(function (key) {
    document.documentElement.style.setProperty(key, theme[key]);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyTheme);

/***/ }),

/***/ "./src/helpers/clear.js":
/*!******************************!*\
  !*** ./src/helpers/clear.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var clear = function clear() {
  document.querySelector('#root').innerHTML = "";
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clear);

/***/ }),

/***/ "./src/helpers/mount.js":
/*!******************************!*\
  !*** ./src/helpers/mount.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var mount = function mount(element) {
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.querySelector('#root');
  container.appendChild(element);
  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mount);

/***/ }),

/***/ "./src/helpers/render.js":
/*!*******************************!*\
  !*** ./src/helpers/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Store_actions_todoActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Store/actions/todoActions */ "./src/components/Store/actions/todoActions.js");
/* harmony import */ var _components_Store_actions_themeActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Store/actions/themeActions */ "./src/components/Store/actions/themeActions.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clear */ "./src/helpers/clear.js");
/* harmony import */ var _components_TodoList_TodoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TodoList/TodoList */ "./src/components/TodoList/TodoList.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");






var render = function render(store) {
  (0,_clear__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"])(function (todo) {
    store.dispatch(_components_Store_actions_todoActions__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(todo));
  }, function () {
    store.dispatch(_components_Store_actions_themeActions__WEBPACK_IMPORTED_MODULE_1__["default"].toggleTheme());
  })();
  (0,_components_TodoList_TodoList__WEBPACK_IMPORTED_MODULE_3__["default"])(store.getState().todos, function (todo) {
    store.dispatch(_components_Store_actions_todoActions__WEBPACK_IMPORTED_MODULE_0__["default"].setTodoState(todo));
  }, function (todo) {
    store.dispatch(_components_Store_actions_todoActions__WEBPACK_IMPORTED_MODULE_0__["default"].copyTodo(todo));
  }, function (id) {
    store.dispatch(_components_Store_actions_todoActions__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(id));
  })();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/themes/themes.js":
/*!******************************!*\
  !*** ./src/themes/themes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dark": () => (/* binding */ dark),
/* harmony export */   "light": () => (/* binding */ light)
/* harmony export */ });
var light = {
  '--primary100': '#004B8E',
  '--primary200': '#ECF0F3',
  '--primary300': '#000000',
  '--shadow100': 'rgba(255, 255, 255, 0.6)',
  '--shadow200': 'rgba(0, 0, 0, .15)'
};
var dark = {
  '--primary100': '#FFA685',
  '--primary200': '#292D32',
  '--primary300': '#FFFFFF',
  '--shadow100': 'rgba(255, 166, 133, 0.04)',
  '--shadow200': 'rgba(0, 0, 0, .3)'
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Form/Form.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Form/Form.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2rem;\r\n}\r\n\r\n.form__title, .form__description, .form__submit-mobile {\r\n    padding: 1rem;\r\n    border-radius: 2rem;\r\n    outline: 0;\r\n    width: 15rem;\r\n    color: var(--primary300);\r\n}\r\n\r\n.form__submit {\r\n    border-radius: 50%;\r\n    height: 4rem;\r\n    width: 4rem;\r\n    font-size: 2.5rem;\r\n    color: var(--primary100);\r\n    cursor: pointer;\r\n}\r\n\r\n.form__submit-mobile {\r\n    display: none;\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n    color: var(--primary100);\r\n    font-weight: bolder;\r\n    flex-grow: 1;\r\n    box-sizing: content-box;\r\n}\r\n\r\n.form__title, .form__description, .form__submit, .form__submit-mobile {\r\n    outline: 0;\r\n    background-color: var(--primary200);\r\n    border: 0;\r\n    box-shadow: 12px 12px 24px var(--shadow200), -12px -12px 24px var(--shadow100);\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n    .form {\r\n        order: 1;\r\n        flex-basis: 100%;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .form__submit-mobile {\r\n        display: block;\r\n    }\r\n\r\n    .form__submit {\r\n        display: none;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/components/Form/Form.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,wBAAwB;IACxB,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,mCAAmC;IACnC,SAAS;IACT,8EAA8E;AAClF;;AAEA;IACI;QACI,QAAQ;QACR,gBAAgB;QAChB,sBAAsB;IAC1B;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,aAAa;IACjB;AACJ","sourcesContent":[".form {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2rem;\r\n}\r\n\r\n.form__title, .form__description, .form__submit-mobile {\r\n    padding: 1rem;\r\n    border-radius: 2rem;\r\n    outline: 0;\r\n    width: 15rem;\r\n    color: var(--primary300);\r\n}\r\n\r\n.form__submit {\r\n    border-radius: 50%;\r\n    height: 4rem;\r\n    width: 4rem;\r\n    font-size: 2.5rem;\r\n    color: var(--primary100);\r\n    cursor: pointer;\r\n}\r\n\r\n.form__submit-mobile {\r\n    display: none;\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n    color: var(--primary100);\r\n    font-weight: bolder;\r\n    flex-grow: 1;\r\n    box-sizing: content-box;\r\n}\r\n\r\n.form__title, .form__description, .form__submit, .form__submit-mobile {\r\n    outline: 0;\r\n    background-color: var(--primary200);\r\n    border: 0;\r\n    box-shadow: 12px 12px 24px var(--shadow200), -12px -12px 24px var(--shadow100);\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n    .form {\r\n        order: 1;\r\n        flex-basis: 100%;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .form__submit-mobile {\r\n        display: block;\r\n    }\r\n\r\n    .form__submit {\r\n        display: none;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Header/Header.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Header/Header.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 1rem 2rem;\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n    .header {\r\n        flex-flow: row wrap;\r\n        gap: 1rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/components/Header/Header.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI;QACI,mBAAmB;QACnB,SAAS;IACb;AACJ","sourcesContent":[".header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 1rem 2rem;\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n    .header {\r\n        flex-flow: row wrap;\r\n        gap: 1rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Switch/Switch.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Switch/Switch.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".switch__button {\r\n    border-radius: 50%;\r\n    height: 4rem;\r\n    width: 4rem;\r\n    outline: 0;\r\n    background-color: var(--primary200);\r\n    border: 0;\r\n    box-shadow: 12px 12px 24px var(--shadow200), -12px -12px 24px var(--shadow100);\r\n    font-size: 2rem;\r\n    color: var(--primary100);\r\n    cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./src/components/Switch/Switch.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,UAAU;IACV,mCAAmC;IACnC,SAAS;IACT,8EAA8E;IAC9E,eAAe;IACf,wBAAwB;IACxB,eAAe;AACnB","sourcesContent":[".switch__button {\r\n    border-radius: 50%;\r\n    height: 4rem;\r\n    width: 4rem;\r\n    outline: 0;\r\n    background-color: var(--primary200);\r\n    border: 0;\r\n    box-shadow: 12px 12px 24px var(--shadow200), -12px -12px 24px var(--shadow100);\r\n    font-size: 2rem;\r\n    color: var(--primary100);\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/TodoListContainer/TodoListContainer.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/TodoListContainer/TodoListContainer.css ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".todo-list__pending, .todo-list__done {\r\n    transition: border-color .5s ease-out;\r\n}\r\n\r\n.todo-list__done.todo-list__elem--drag-over, .todo-list__pending.todo-list__elem--drag-over {\r\n    border: 2px dashed var(--primary100);\r\n}\r\n\r\n.todo-list__label {\r\n    display: flex;\r\n    justify-content: center;\r\n}", "",{"version":3,"sources":["webpack://./src/components/TodoListContainer/TodoListContainer.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;AACzC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":[".todo-list__pending, .todo-list__done {\r\n    transition: border-color .5s ease-out;\r\n}\r\n\r\n.todo-list__done.todo-list__elem--drag-over, .todo-list__pending.todo-list__elem--drag-over {\r\n    border: 2px dashed var(--primary100);\r\n}\r\n\r\n.todo-list__label {\r\n    display: flex;\r\n    justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/TodoList/TodoList.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/TodoList/TodoList.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".todo-list {\r\n    display: grid;\r\n    grid-template: 1fr/1fr 1fr;\r\n    gap: 2rem;\r\n    margin: 0 2rem 2rem 2rem;\r\n}\r\n\r\n.todo-list > * {\r\n    margin: 0;\r\n    overflow-y: scroll;\r\n    /* box-sizing: border-box; */\r\n    border: 2px dashed transparent;\r\n    box-shadow: 12px 12px 24px var(--shadow200), -12px -12px 24px var(--shadow100);\r\n    border-radius: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 1rem;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .todo-list {\r\n        grid-template: auto auto/ 1fr;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/components/TodoList/TodoList.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,0BAA0B;IAC1B,SAAS;IACT,wBAAwB;AAC5B;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,4BAA4B;IAC5B,8BAA8B;IAC9B,8EAA8E;IAC9E,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI;QACI,6BAA6B;IACjC;AACJ","sourcesContent":[".todo-list {\r\n    display: grid;\r\n    grid-template: 1fr/1fr 1fr;\r\n    gap: 2rem;\r\n    margin: 0 2rem 2rem 2rem;\r\n}\r\n\r\n.todo-list > * {\r\n    margin: 0;\r\n    overflow-y: scroll;\r\n    /* box-sizing: border-box; */\r\n    border: 2px dashed transparent;\r\n    box-shadow: 12px 12px 24px var(--shadow200), -12px -12px 24px var(--shadow100);\r\n    border-radius: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 1rem;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .todo-list {\r\n        grid-template: auto auto/ 1fr;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Todo/Todo.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Todo/Todo.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".todo > * {\r\n    margin: 0;\r\n}\r\n\r\n.todo {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2rem;\r\n}\r\n\r\n.todo__title, .todo__description {\r\n    word-wrap: break-word;\r\n}\r\n\r\n.todo__dot {\r\n    min-height: 5rem;\r\n    min-width: 5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    box-shadow: inset 6px 6px 12px var(--shadow200), inset -6px -6px 12px var(--shadow100);\r\n}\r\n\r\n.dot__inner {\r\n    min-height: 3rem;\r\n    min-width: 3rem;\r\n    border-radius: 50%;\r\n    box-shadow: 6px 6px 12px var(--shadow200), -6px -6px 12px var(--shadow100);\r\n    cursor: move;\r\n}\r\n\r\n.todo__content-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    max-width: 60%;\r\n}\r\n\r\n.todo__delete {\r\n    outline: 0;\r\n    background-color: var(--primary200);\r\n    border: 0;\r\n    color: var(--primary100);\r\n    font-style: italic;\r\n    word-break: normal;\r\n    cursor: pointer;\r\n}\r\n\r\n.todo__delete:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.todo__label-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: .5rem;\r\n    word-break: break-word;\r\n}", "",{"version":3,"sources":["webpack://./src/components/Todo/Todo.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,sFAAsF;AAC1F;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,0EAA0E;IAC1E,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,mCAAmC;IACnC,SAAS;IACT,wBAAwB;IACxB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,sBAAsB;AAC1B","sourcesContent":[".todo > * {\r\n    margin: 0;\r\n}\r\n\r\n.todo {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2rem;\r\n}\r\n\r\n.todo__title, .todo__description {\r\n    word-wrap: break-word;\r\n}\r\n\r\n.todo__dot {\r\n    min-height: 5rem;\r\n    min-width: 5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    box-shadow: inset 6px 6px 12px var(--shadow200), inset -6px -6px 12px var(--shadow100);\r\n}\r\n\r\n.dot__inner {\r\n    min-height: 3rem;\r\n    min-width: 3rem;\r\n    border-radius: 50%;\r\n    box-shadow: 6px 6px 12px var(--shadow200), -6px -6px 12px var(--shadow100);\r\n    cursor: move;\r\n}\r\n\r\n.todo__content-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    max-width: 60%;\r\n}\r\n\r\n.todo__delete {\r\n    outline: 0;\r\n    background-color: var(--primary200);\r\n    border: 0;\r\n    color: var(--primary100);\r\n    font-style: italic;\r\n    word-break: normal;\r\n    cursor: pointer;\r\n}\r\n\r\n.todo__delete:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.todo__label-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: .5rem;\r\n    word-break: break-word;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --primary100: #004B8E;\r\n    --primary200: #ECF0F3;\r\n    --primary300: #000000;\r\n    --shadow100: rgba(255, 255, 255, 0.6);\r\n    --shadow200: rgba(0, 0, 0, .1);\r\n}\r\n\r\nhtml {\r\n    font-size: 14px;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n#root {\r\n    color: var(--primary100);\r\n    background-color: var(--primary200);\r\n    display: grid;\r\n    min-height: 100vh;\r\n    grid-template: auto 1fr/ 1fr;\r\n    gap: 1rem;\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n  \r\n* {\r\n    -ms-overflow-style: none; \r\n    scrollbar-width: none;\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    margin: 0;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1000px) {\r\n    html {\r\n        font-size: 12px;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,qBAAqB;IACrB,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,mCAAmC;IACnC,aAAa;IACb,iBAAiB;IACjB,4BAA4B;IAC5B,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,qBAAqB;IACrB,sCAAsC;IACtC,SAAS;AACb;;;AAGA;IACI;QACI,eAAe;IACnB;AACJ","sourcesContent":[":root {\r\n    --primary100: #004B8E;\r\n    --primary200: #ECF0F3;\r\n    --primary300: #000000;\r\n    --shadow100: rgba(255, 255, 255, 0.6);\r\n    --shadow200: rgba(0, 0, 0, .1);\r\n}\r\n\r\nhtml {\r\n    font-size: 14px;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n#root {\r\n    color: var(--primary100);\r\n    background-color: var(--primary200);\r\n    display: grid;\r\n    min-height: 100vh;\r\n    grid-template: auto 1fr/ 1fr;\r\n    gap: 1rem;\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n  \r\n* {\r\n    -ms-overflow-style: none; \r\n    scrollbar-width: none;\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    margin: 0;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1000px) {\r\n    html {\r\n        font-size: 12px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/Form/Form.css":
/*!**************************************!*\
  !*** ./src/components/Form/Form.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Form.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Form/Form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Header/Header.css":
/*!******************************************!*\
  !*** ./src/components/Header/Header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Header.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Header/Header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Switch/Switch.css":
/*!******************************************!*\
  !*** ./src/components/Switch/Switch.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Switch_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Switch.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Switch/Switch.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Switch_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Switch_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Switch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Switch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/TodoListContainer/TodoListContainer.css":
/*!****************************************************************!*\
  !*** ./src/components/TodoListContainer/TodoListContainer.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_TodoListContainer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./TodoListContainer.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/TodoListContainer/TodoListContainer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_TodoListContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_TodoListContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_TodoListContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_TodoListContainer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/TodoList/TodoList.css":
/*!**********************************************!*\
  !*** ./src/components/TodoList/TodoList.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_TodoList_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./TodoList.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/TodoList/TodoList.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_TodoList_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_TodoList_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_TodoList_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_TodoList_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Todo/Todo.css":
/*!**************************************!*\
  !*** ./src/components/Todo/Todo.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Todo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Todo.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Todo/Todo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Todo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Todo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _components_store_Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/store/Store */ "./src/components/store/Store.js");
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/render */ "./src/helpers/render.js");
/* harmony import */ var _helpers_applyTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/applyTheme */ "./src/helpers/applyTheme.js");
/* harmony import */ var _components_Store_reducers_todosReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Store/reducers/todosReducer */ "./src/components/Store/reducers/todosReducer.js");
/* harmony import */ var _components_Store_reducers_themesReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Store/reducers/themesReducer */ "./src/components/Store/reducers/themesReducer.js");
/* harmony import */ var _components_Store_reducers_combineReducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Store/reducers/combineReducers */ "./src/components/Store/reducers/combineReducers.js");







var rootReducer = (0,_components_Store_reducers_combineReducers__WEBPACK_IMPORTED_MODULE_6__["default"])(_components_Store_reducers_todosReducer__WEBPACK_IMPORTED_MODULE_4__["default"], _components_Store_reducers_themesReducer__WEBPACK_IMPORTED_MODULE_5__["default"]);
var store = (0,_components_store_Store__WEBPACK_IMPORTED_MODULE_1__["default"])(rootReducer);
store.subscribe(function () {
  (0,_helpers_applyTheme__WEBPACK_IMPORTED_MODULE_3__["default"])(store);
  (0,_helpers_render__WEBPACK_IMPORTED_MODULE_2__["default"])(store);
});
(0,_helpers_render__WEBPACK_IMPORTED_MODULE_2__["default"])(store);
})();

/******/ })()
;
//# sourceMappingURL=bundle.51c31fa4ecda65933d33.js.map