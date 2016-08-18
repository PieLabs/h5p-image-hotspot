/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	pie.framework('react').register('h5p-image-hotspot', _index2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _hotspotFeedback = __webpack_require__(3);

	var _hotspotFeedback2 = _interopRequireDefault(_hotspotFeedback);

	var _feedbackContainer = __webpack_require__(4);

	var _feedbackContainer2 = _interopRequireDefault(_feedbackContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var H5pImageHotspot = _react2.default.createClass({
	  displayName: 'H5pImageHotspot',

	  getInitialState: function getInitialState() {
	    return {};
	  },
	  onImageClick: function onImageClick(mouseEvent) {
	    if (this.props.disabled) {
	      return;
	    }
	    var x = mouseEvent.pageX - mouseEvent.currentTarget.offsetLeft;
	    var y = mouseEvent.pageY - mouseEvent.currentTarget.offsetTop;
	    var feedbackPosition = { x: x, y: y };
	    this.props.session.response = { x: x, y: y };
	    this.setState({ feedbackPosition: feedbackPosition });
	  },
	  render: function render() {

	    return _react2.default.createElement(
	      'div',
	      { className: 'h5p-image-hotspot-question' },
	      _react2.default.createElement(
	        'span',
	        { className: 'stem' },
	        this.props.model.stem
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'image-wrapper', onClick: this.onImageClick },
	        _react2.default.createElement('img', { className: 'hotspot-image', src: this.props.model.src }),
	        _react2.default.createElement(_hotspotFeedback2.default, {
	          disabled: this.props.model.disabled,
	          correct: this.props.model.correct,
	          feedbackPosition: this.state.feedbackPosition })
	      ),
	      _react2.default.createElement(_feedbackContainer2.default, {
	        correct: this.props.model.correct,
	        msg: this.props.model.feedback })
	    );
	  }
	});

	module.exports = H5pImageHotspot;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HotspotFeedback = _react2.default.createClass({
	  displayName: 'HotspotFeedback',

	  componentDidMount: function componentDidMount() {
	    setTimeout(function () {
	      var rect = this.node.getBoundingClientRect();
	      var sizes = { w: rect.width, h: rect.height };
	      this.setState({ elementSize: sizes });
	    }.bind(this), 100);
	  },
	  render: function render() {
	    var _this = this;

	    var classname = 'hotspot-feedback' + (this.props.feedbackPosition ? ' fade-in' : '');
	    if (this.props.disabled) {
	      classname += ' disabled';
	    }

	    if (this.props.correct === true) {
	      classname += ' correct';
	    } else if (this.props.correct === false) {
	      classname += ' incorrect';
	    }
	    var style = {};
	    if (this.props.feedbackPosition && this.state.elementSize) {
	      console.log('elementSize', this.state.elementSize);
	      var x = this.props.feedbackPosition.x - this.state.elementSize.w / 2;
	      var y = this.props.feedbackPosition.y - this.state.elementSize.h / 2;
	      console.log('x and y', x, y);
	      style = { left: x, top: y };
	    }
	    return _react2.default.createElement('div', { ref: function ref(_ref) {
	        return _this.node = _ref;
	      }, className: classname, style: style });
	  }
	});

	module.exports = HotspotFeedback;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FeedbackContainer = _react2.default.createClass({
	  displayName: "FeedbackContainer",

	  render: function render() {
	    if (this.props.correct === undefined) {
	      return _react2.default.createElement("div", null);
	    } else {
	      return _react2.default.createElement(
	        "div",
	        { className: "hotspot-feedback-text" },
	        this.props.msg
	      );
	    }
	  }
	});

	module.exports = FeedbackContainer;

/***/ }
/******/ ]);