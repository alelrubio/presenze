webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);

	//require('node-mysql');
	//require('mysql');


	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(7);

	__webpack_require__(8);

	var ngModule = angular.module('app', ['ui.router', 'ngMessages', 'ui.bootstrap.showErrors']);

	__webpack_require__(12)(ngModule);
	__webpack_require__(16)(ngModule);
	__webpack_require__(18)(ngModule);

	__webpack_require__(20)(ngModule);

	__webpack_require__(26)(ngModule);

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	(function() {
	  var showErrorsModule;

	  showErrorsModule = angular.module('ui.bootstrap.showErrors', []);

	  showErrorsModule.directive('showErrors', [
	    '$timeout', 'showErrorsConfig', '$interpolate', function($timeout, showErrorsConfig, $interpolate) {
	      var getShowSuccess, getTrigger, linkFn;
	      getTrigger = function(options) {
	        var trigger;
	        trigger = showErrorsConfig.trigger;
	        if (options && (options.trigger != null)) {
	          trigger = options.trigger;
	        }
	        return trigger;
	      };
	      getShowSuccess = function(options) {
	        var showSuccess;
	        showSuccess = showErrorsConfig.showSuccess;
	        if (options && (options.showSuccess != null)) {
	          showSuccess = options.showSuccess;
	        }
	        return showSuccess;
	      };
	      linkFn = function(scope, el, attrs, formCtrl) {
	        var blurred, inputEl, inputName, inputNgEl, options, showSuccess, toggleClasses, trigger;
	        blurred = false;
	        options = scope.$eval(attrs.showErrors);
	        showSuccess = getShowSuccess(options);
	        trigger = getTrigger(options);
	        inputEl = el[0].querySelector('.form-control[name]');
	        inputNgEl = angular.element(inputEl);
	        inputName = $interpolate(inputNgEl.attr('name') || '')(scope);
	        if (!inputName) {
	          throw "show-errors element has no child input elements with a 'name' attribute and a 'form-control' class";
	        }
	        inputNgEl.bind(trigger, function() {
	          blurred = true;
	          return toggleClasses(formCtrl[inputName].$invalid);
	        });
	        scope.$watch(function() {
	          return formCtrl[inputName] && formCtrl[inputName].$invalid;
	        }, function(invalid) {
	          if (!blurred) {
	            return;
	          }
	          return toggleClasses(invalid);
	        });
	        scope.$on('show-errors-check-validity', function() {
	          return toggleClasses(formCtrl[inputName].$invalid);
	        });
	        scope.$on('show-errors-reset', function() {
	          return $timeout(function() {
	            el.removeClass('has-error');
	            el.removeClass('has-success');
	            return blurred = false;
	          }, 0, false);
	        });
	        return toggleClasses = function(invalid) {
	          el.toggleClass('has-error', invalid);
	          if (showSuccess) {
	            return el.toggleClass('has-success', !invalid);
	          }
	        };
	      };
	      return {
	        restrict: 'A',
	        require: '^form',
	        compile: function(elem, attrs) {
	          if (attrs['showErrors'].indexOf('skipFormGroupCheck') === -1) {
	            if (!(elem.hasClass('form-group') || elem.hasClass('input-group'))) {
	              throw "show-errors element does not have the 'form-group' or 'input-group' class";
	            }
	          }
	          return linkFn;
	        }
	      };
	    }
	  ]);

	  showErrorsModule.provider('showErrorsConfig', function() {
	    var _showSuccess, _trigger;
	    _showSuccess = false;
	    _trigger = 'blur';
	    this.showSuccess = function(showSuccess) {
	      return _showSuccess = showSuccess;
	    };
	    this.trigger = function(trigger) {
	      return _trigger = trigger;
	    };
	    this.$get = function() {
	      return {
	        showSuccess: _showSuccess,
	        trigger: _trigger
	      };
	    };
	  });

	}).call(this);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "/* Welcome to Compass. Use this file to write IE specific override styles.\r\n * Import this file using the following HTML or equivalent:\r\n * <!--[if IE]>\r\n *   <link href=\"/stylesheets/ie.css\" media=\"screen, projection\" rel=\"stylesheet\" type=\"text/css\" />\r\n * <![endif]--> */\r\n/* Welcome to Compass. Use this file to define print styles.\r\n * Import this file using the following HTML or equivalent:\r\n * <link href=\"/stylesheets/print.css\" media=\"print\" rel=\"stylesheet\" type=\"text/css\" /> */\r\n/* Welcome to Compass.\r\n * In this file you should write your main styles. (or centralize your imports)\r\n * Import this file using the following HTML or equivalent:\r\n * <link href=\"/stylesheets/screen.css\" media=\"screen, projection\" rel=\"stylesheet\" type=\"text/css\" /> */\r\n/*@import \"compass/reset\";*/\r\n/*! normalize.css v2.1.3 | MIT License | git.io/normalize */\r\n/* ==========================================================================\r\n   HTML5 display definitions\r\n   ========================================================================== */\r\n/**\r\n * Correct `block` display not defined in IE 8/9.\r\n */\r\n/* line 11, ../sass/assets/_normalize.scss */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nnav,\r\nsection,\r\nsummary {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 8/9.\r\n */\r\n/* line 30, ../sass/assets/_normalize.scss */\r\naudio,\r\ncanvas,\r\nvideo {\r\n  display: inline-block;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n/* line 41, ../sass/assets/_normalize.scss */\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Address `[hidden]` styling not present in IE 8/9.\r\n * Hide the `template` element in IE, Safari, and Firefox < 22.\r\n */\r\n/* line 51, ../sass/assets/_normalize.scss */\r\n[hidden],\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/* ==========================================================================\r\n   Base\r\n   ========================================================================== */\r\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n/* line 66, ../sass/assets/_normalize.scss */\r\nhtml {\r\n  font-family: sans-serif;\r\n  /* 1 */\r\n  -ms-text-size-adjust: 100%;\r\n  /* 2 */\r\n  -webkit-text-size-adjust: 100%;\r\n  /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default margin.\r\n */\r\n/* line 76, ../sass/assets/_normalize.scss */\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/* ==========================================================================\r\n   Links\r\n   ========================================================================== */\r\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\r\n/* line 88, ../sass/assets/_normalize.scss */\r\na {\r\n  background: transparent;\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n/* line 96, ../sass/assets/_normalize.scss */\r\na:focus {\r\n  outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n/* line 104, ../sass/assets/_normalize.scss */\r\na:active,\r\na:hover {\r\n  outline: 0;\r\n}\r\n\r\n/* ==========================================================================\r\n   Typography\r\n   ========================================================================== */\r\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari 5, and Chrome.\r\n */\r\n/* line 118, ../sass/assets/_normalize.scss */\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\r\n */\r\n/* line 127, ../sass/assets/_normalize.scss */\r\nabbr[title] {\r\n  border-bottom: 1px dotted;\r\n}\r\n\r\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\r\n */\r\n/* line 135, ../sass/assets/_normalize.scss */\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\n/**\r\n * Address styling not present in Safari 5 and Chrome.\r\n */\r\n/* line 144, ../sass/assets/_normalize.scss */\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\r\n/* line 152, ../sass/assets/_normalize.scss */\r\nhr {\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 8/9.\r\n */\r\n/* line 162, ../sass/assets/_normalize.scss */\r\nmark {\r\n  background: #ff0;\r\n  color: #000;\r\n}\r\n\r\n/**\r\n * Correct font family set oddly in Safari 5 and Chrome.\r\n */\r\n/* line 171, ../sass/assets/_normalize.scss */\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, serif;\r\n  font-size: 1em;\r\n}\r\n\r\n/**\r\n * Improve readability of pre-formatted text in all browsers.\r\n */\r\n/* line 183, ../sass/assets/_normalize.scss */\r\npre {\r\n  white-space: pre-wrap;\r\n}\r\n\r\n/**\r\n * Set consistent quote types.\r\n */\r\n/* line 191, ../sass/assets/_normalize.scss */\r\nq {\r\n  quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\r\n}\r\n\r\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\r\n/* line 199, ../sass/assets/_normalize.scss */\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\r\n/* line 207, ../sass/assets/_normalize.scss */\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* line 215, ../sass/assets/_normalize.scss */\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* line 219, ../sass/assets/_normalize.scss */\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n/* ==========================================================================\r\n   Embedded content\r\n   ========================================================================== */\r\n/**\r\n * Remove border when inside `a` element in IE 8/9.\r\n */\r\n/* line 231, ../sass/assets/_normalize.scss */\r\nimg {\r\n  border: 0;\r\n}\r\n\r\n/**\r\n * Correct overflow displayed oddly in IE 9.\r\n */\r\n/* line 239, ../sass/assets/_normalize.scss */\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\n/* ==========================================================================\r\n   Figures\r\n   ========================================================================== */\r\n/**\r\n * Address margin not present in IE 8/9 and Safari 5.\r\n */\r\n/* line 251, ../sass/assets/_normalize.scss */\r\nfigure {\r\n  margin: 0;\r\n}\r\n\r\n/* ==========================================================================\r\n   Forms\r\n   ========================================================================== */\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n/* line 263, ../sass/assets/_normalize.scss */\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\r\n/* line 274, ../sass/assets/_normalize.scss */\r\nlegend {\r\n  border: 0;\r\n  /* 1 */\r\n  padding: 0;\r\n  /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct font family not being inherited in all browsers.\r\n * 2. Correct font size not being inherited in all browsers.\r\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\r\n */\r\n/* line 285, ../sass/assets/_normalize.scss */\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  /* 1 */\r\n  font-size: 100%;\r\n  /* 2 */\r\n  margin: 0;\r\n  /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n/* line 299, ../sass/assets/_normalize.scss */\r\nbutton,\r\ninput {\r\n  line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n/* line 311, ../sass/assets/_normalize.scss */\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\r\n/* line 324, ../sass/assets/_normalize.scss */\r\nbutton,\r\nhtml input[type=\"button\"],\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n  /* 2 */\r\n  cursor: pointer;\r\n  /* 3 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n/* line 336, ../sass/assets/_normalize.scss */\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\r\n/* line 346, ../sass/assets/_normalize.scss */\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  padding: 0;\r\n  /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n/* line 358, ../sass/assets/_normalize.scss */\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: textfield;\r\n  /* 1 */\r\n  -moz-box-sizing: content-box;\r\n  -webkit-box-sizing: content-box;\r\n  /* 2 */\r\n  box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n/* line 370, ../sass/assets/_normalize.scss */\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\r\n/* line 379, ../sass/assets/_normalize.scss */\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n/* line 390, ../sass/assets/_normalize.scss */\r\ntextarea {\r\n  overflow: auto;\r\n  /* 1 */\r\n  vertical-align: top;\r\n  /* 2 */\r\n}\r\n\r\n/* ==========================================================================\r\n   Tables\r\n   ========================================================================== */\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n/* line 403, ../sass/assets/_normalize.scss */\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n/*@import \"compass/reset/utilities\";*/\r\n/* line 3, ../sass/assets/_scaffolding.scss */\r\nbody {\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 12px;\r\n  line-height: 1.42857;\r\n  color: #000;\r\n  background-color: #fff;\r\n}\r\n\r\n/* line 1, ../sass/assets/_types.scss */\r\nh1, .h1 {\r\n  font-size: 31px;\r\n}\r\n\r\n/* line 2, ../sass/assets/_types.scss */\r\nh2, .h2 {\r\n  font-size: 25px;\r\n}\r\n\r\n/* line 3, ../sass/assets/_types.scss */\r\nh3, .h3 {\r\n  font-size: 21px;\r\n}\r\n\r\n/* line 4, ../sass/assets/_types.scss */\r\nh4, .h4 {\r\n  font-size: 15px;\r\n}\r\n\r\n/* line 5, ../sass/assets/_types.scss */\r\nh5, .h5 {\r\n  font-size: 12px;\r\n}\r\n\r\n/* line 6, ../sass/assets/_types.scss */\r\nh6, .h6 {\r\n  font-size: 11px;\r\n}\r\n\r\n/* line 9, ../sass/assets/_types.scss */\r\n.text-left {\r\n  text-align: left;\r\n}\r\n\r\n/* line 10, ../sass/assets/_types.scss */\r\n.text-right {\r\n  text-align: right;\r\n}\r\n\r\n/* line 11, ../sass/assets/_types.scss */\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n/* line 12, ../sass/assets/_types.scss */\r\n.text-justify {\r\n  text-align: justify;\r\n}\r\n\r\n/* line 13, ../sass/assets/_types.scss */\r\n.text-nowrap {\r\n  white-space: nowrap;\r\n}\r\n\r\n/* line 4, ../sass/assets/_buttons.scss */\r\n.button {\r\n  padding: 6px 6px;\r\n  margin: 6px 6px;\r\n  cursor: pointer;\r\n  border: 1px solid transparent;\r\n  border-radius: 3px;\r\n  float: inherit;\r\n}\r\n\r\n/* line 13, ../sass/assets/_buttons.scss */\r\n.button-primary {\r\n  color: #fff;\r\n  background-color: #888;\r\n  border-color: #7b7b7b;\r\n}\r\n/* line 11, ../sass/assets/mixins/_buttons.scss */\r\n.button-primary:focus, .button-primary.focus {\r\n  color: #fff;\r\n  background-color: #6f6f6f;\r\n  border-color: #3c3c3c;\r\n}\r\n/* line 17, ../sass/assets/mixins/_buttons.scss */\r\n.button-primary:hover {\r\n  color: #fff;\r\n  background-color: #6f6f6f;\r\n  border-color: #5d5d5d;\r\n}\r\n/* line 22, ../sass/assets/mixins/_buttons.scss */\r\n.button-primary:active, .button-primary.active, .open > .button-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #6f6f6f;\r\n  border-color: #5d5d5d;\r\n}\r\n/* line 29, ../sass/assets/mixins/_buttons.scss */\r\n.button-primary:active:hover, .button-primary:active:focus, .button-primary:active.focus, .button-primary.active:hover, .button-primary.active:focus, .button-primary.active.focus, .open > .button-primary.dropdown-toggle:hover, .open > .button-primary.dropdown-toggle:focus, .open > .button-primary.dropdown-toggle.focus {\r\n  color: #fff;\r\n  background-color: #5d5d5d;\r\n  border-color: #3c3c3c;\r\n}\r\n/* line 37, ../sass/assets/mixins/_buttons.scss */\r\n.button-primary:active, .button-primary.active, .open > .button-primary.dropdown-toggle {\r\n  background-image: none;\r\n}\r\n/* line 45, ../sass/assets/mixins/_buttons.scss */\r\n.button-primary.disabled, .button-primary.disabled:hover, .button-primary.disabled:focus, .button-primary.disabled.focus, .button-primary.disabled:active, .button-primary.disabled.active, .button-primary[disabled], .button-primary[disabled]:hover, .button-primary[disabled]:focus, .button-primary[disabled].focus, .button-primary[disabled]:active, .button-primary[disabled].active, fieldset[disabled] .button-primary, fieldset[disabled] .button-primary:hover, fieldset[disabled] .button-primary:focus, fieldset[disabled] .button-primary.focus, fieldset[disabled] .button-primary:active, fieldset[disabled] .button-primary.active {\r\n  background-color: #b3b3b3;\r\n  border-color: #a7a7a7;\r\n  color: #e6e6e6;\r\n}\r\n\r\n/* line 3, ../sass/assets/_forms.scss */\r\n.components, label, .messages, .form-control {\r\n  margin-top: 4px;\r\n  margin-bottom: 4px;\r\n  display: block;\r\n  width: 100%;\r\n  height: 28px;\r\n  padding: 6px 6px;\r\n  font-size: 12px;\r\n  line-height: 1.42857;\r\n  color: #333;\r\n}\r\n\r\n/* line 23, ../sass/assets/_forms.scss */\r\n.form-control {\r\n  background-color: #fff;\r\n  background-image: none;\r\n  border-radius: 3px;\r\n  /*@include placeholder;\r\n\r\n  // Disabled and read-only inputs\r\n  //\r\n  // HTML5 says that controls under a fieldset > legend:first-child won't be\r\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\r\n  // don't honor that edge case; we style them as disabled anyway.\r\n  &[disabled],\r\n  &[readonly],\r\n  fieldset[disabled] & {\r\n    background-color: $input-bg-disabled;\r\n    opacity: 1; // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655\r\n  }\r\n\r\n  &[disabled],\r\n  fieldset[disabled] & {\r\n    cursor: $cursor-disabled;\r\n  }\r\n\r\n  // [converter] extracted textarea& to textarea.form-control*/\r\n}\r\n/* line 3, ../sass/assets/mixins/_forms.scss */\r\n.form-control:focus {\r\n  border-color: #66afe9;\r\n  outline: 0;\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n}\r\n\r\n/* line 58, ../sass/assets/_forms.scss */\r\n.messages {\r\n  color: #d20000;\r\n}\r\n\r\n/* line 62, ../sass/assets/_forms.scss */\r\n.box-default, .box-form.ng-pristine {\r\n  border: 1px solid rgba(17, 33, 80, 0.56);\r\n  box-shadow: 5px 5px 10px 0 rgba(125, 151, 227, 0.56);\r\n}\r\n\r\n/* line 67, ../sass/assets/_forms.scss */\r\n.box-child-default, .box-form .ng-pristine, .box-form .ng-valid {\r\n  border: 1px solid rgba(17, 33, 80, 0.56);\r\n  box-shadow: 3px 3px 5px 0 rgba(125, 151, 227, 0.56);\r\n}\r\n\r\n/* line 72, ../sass/assets/_forms.scss */\r\n.box-error, .box-form.ng-invalid.ng-dirty, .box-form .ng-invalid.ng-dirty {\r\n  border: 1px solid rgba(17, 33, 80, 0.56);\r\n  box-shadow: 3px 3px 5px 0 #ffd2d2;\r\n}\r\n\r\n/* line 77, ../sass/assets/_forms.scss */\r\n.box-ok, .box-form.ng-valid {\r\n  border: 1px solid rgba(17, 33, 80, 0.56);\r\n  box-shadow: 3px 3px 5px 0 #d2ffd2;\r\n}\r\n\r\n/* line 21, ../../../../../../Ruby22/lib/ruby/gems/2.2.0/gems/susy-2.2.12/sass/susy/language/susy/_box-sizing.scss */\r\n*, *:before, *:after {\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* line 14, ../sass/app/_login.scss */\r\n.loginPage {\r\n  max-width: 100%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  max-width: 100%;\r\n  height: 100vh;\r\n  global-box-sizing: border-box;\r\n}\r\n/* line 12, ../../../../../../Ruby22/lib/ruby/gems/2.2.0/gems/susy-2.2.12/sass/susy/output/support/_clearfix.scss */\r\n.loginPage:after {\r\n  content: \" \";\r\n  display: block;\r\n  clear: both;\r\n}\r\n/* line 22, ../sass/app/_login.scss */\r\n.loginPage .loginForm {\r\n  width: 59.61538%;\r\n  float: left;\r\n  margin-right: 0.96154%;\r\n  margin-top: 30vh;\r\n  margin-left: 20.19231%;\r\n}\r\n/* line 33, ../sass/app/_login.scss */\r\n.loginPage .loginForm h2 {\r\n  color: gray;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  margin-left: 33.87097%;\r\n  width: 32.25806%;\r\n  float: left;\r\n  margin-right: 1.6129%;\r\n  margin-right: 32.25806%;\r\n  text-align: center;\r\n}\r\n/* line 43, ../sass/app/_login.scss */\r\n.loginPage .loginForm label {\r\n  width: 32.25806%;\r\n  float: left;\r\n  margin-right: 1.6129%;\r\n  text-align: right;\r\n}\r\n/* line 49, ../sass/app/_login.scss */\r\n.loginPage .loginForm input {\r\n  width: 32.25806%;\r\n  float: left;\r\n  margin-right: 1.6129%;\r\n}\r\n/* line 54, ../sass/app/_login.scss */\r\n.loginPage .loginForm .messages {\r\n  width: 32.25806%;\r\n  float: right;\r\n  margin-right: 0;\r\n}\r\n/* line 59, ../sass/app/_login.scss */\r\n.loginPage .loginForm .InvalidLoginMessage {\r\n  color: red;\r\n  text-align: center;\r\n}\r\n/* line 64, ../sass/app/_login.scss */\r\n.loginPage .loginForm .buttons {\r\n  width: 66.12903%;\r\n  float: left;\r\n  margin-right: 1.6129%;\r\n  padding-top: 20px;\r\n}\r\n/* line 67, ../sass/app/_login.scss */\r\n.loginPage .loginForm .buttons .button {\r\n  float: right;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by esc08andbott on 02/10/2016.
	 */

	module.exports = function (ngModule) {

	  __webpack_require__(13)(ngModule);
	  __webpack_require__(14)(ngModule);
	  __webpack_require__(15)(ngModule);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by esc08andbott on 01/10/2016.
	 */

	var angular = __webpack_require__(2);

	module.exports = function (ngModule) {

	    ngModule.controller('mainCtrl', ['$scope', 'user', 'states', '$state', function ($scope, user, states, $state) {

	        var self = this;

	        this.init = function () {

	            if (user.userData.username === '') {
	                $state.go(states.login);
	            }
	        };

	        self.init();
	    }]);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by esc08andbott on 01/10/2016.
	 */
	var angular = __webpack_require__(2);

	module.exports = function (ngModule) {

	    ngModule.controller('loginCtrl', ['$scope', 'states', '$state', 'assetsLang', 'lang', 'login', function ($scope, states, $state, assetsLang, lang, login) {
	        var self = this;

	        this.init = function () {

	            $scope.user = { firstName: '', lastName: '', email: '', username: '', password: '' };

	            $scope.errore = false;
	            $scope.labels = angular.extend({}, assetsLang.login, assetsLang.errors, lang.errors);
	            $scope.invalidUsrPsw = false;
	            $scope.showLogin = true;

	            console.log("init - login");
	        };

	        $scope.resetData = function () {
	            console.log('resetData in  LOGIN');

	            $scope.user.username = '';
	            $scope.user.password = '';

	            //$scope.changeShowLogin(true);            
	            $scope.showLogin = true;
	            $scope.invalidUsrPsw = false;
	            $scope.formLogin.$setPristine();
	            $scope.formLogin.$setUntouched();
	        };

	        $scope.newUser = function () {
	            $scope.showLogin = false;
	            $state.go(states.newUser);
	        };

	        $scope.login = function () {
	            console.log("chiamata FUNZIONE login");
	            login.login($scope.user) //chiamata servizio
	            .then(function (result) {

	                if (result.data == false) {
	                    $scope.invalidUsrPsw = true;
	                    $state.go(states.login);
	                } else {
	                    $state.go(states.inizio);
	                }
	                console.log('Success!', result);
	            }, function (error) {
	                console.log('Error occurred', error);
	            });
	        };

	        this.init();
	    }]);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by esc08andbott on 05/11/2016.
	 */

	var angular = __webpack_require__(2);

	module.exports = function (ngModule) {

	    ngModule.controller('newUserCtrl', ['$scope', 'states', '$state', 'assetsLang', 'lang', 'login', function ($scope, states, $state, assetsLang, lang, login) {
	        var self = this;

	        this.init = function () {

	            this.resetData();

	            console.log('New User');
	        };

	        this.resetData = function () {
	            $scope.user.firstName = '';
	            $scope.user.lastName = '';
	            $scope.user.email = '';
	            $scope.user.username = '';
	            $scope.user.password = '';

	            //if($scope.formLogin != null)
	            //$scope.formLogin.$setUntouched();
	        };

	        $scope.goToLogin = function () {
	            //$scope.formLogin.$setUntouched();
	            //self.init();
	            //$scope.showLogin = true;
	            //$scope.changeShowLogin(true);
	            $scope.resetData();
	            $state.go(states.login);
	        };

	        $scope.save = function () {

	            /*
	                        var userdata = {
	                            firstName: 'Pippetto',
	                            lastName: 'Baudo',
	                            email: 'pippo@baudo.it',
	                            username: 'pippo',
	                            password: 'Pippetto20'
	                        };
	            */

	            console.log('save user');

	            login.save($scope.user).then(function (result) {
	                console.log('User saved');
	            }, function (error) {
	                console.log('error: ', error);
	            });
	        };

	        this.init();
	    }]);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by esc08andbott on 01/10/2016.
	 */

	module.exports = function (ngModule) {
	  __webpack_require__(17)(ngModule);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by esc08andbott on 01/10/2016.
	 */

	module.exports = function (ngModule) {

	    ngModule.constant('lang', {
	        "errors": {
	            "passwordNotValid": "Password non valida, inserire almeno un carattere Minuscolo, un carattere Maiuscolo ed una cifra",

	            "emailNotValid": "Email non corretta"
	        }
	    });
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by esc08andbott on 40/10/2016.
	 */

	module.exports = function (ngModule) {
	  __webpack_require__(19)(ngModule);
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by esc08andbott on 02/10/2016.
	 */

	module.exports = function (ngModule) {
	    ngModule.service('login', ['$q', 'backend', function ($q, backend) {

	        this.save = function (user) {
	            console.log("chiamata al SERVIZIO save in login.js");
	            var deferred = $q.defer();
	            backend.call({
	                action: {
	                    method: 'POST',
	                    url: '/user/save'
	                },
	                data: user
	            }).then(function (result) {
	                console.log('ritorno SERVIZIO save in login.js');

	                deferred.resolve(result);
	            }, function (error) {
	                deferred.reject(error);
	            });
	            return deferred.promise;
	        };

	        this.login = function (user) {
	            console.log("chiamata al SERVIZIO login in login.js");

	            var deferred = $q.defer();

	            backend.call({
	                action: {
	                    method: 'POST',
	                    url: '/login'
	                },
	                data: user
	            }).then(function (result) {
	                deferred.resolve(result);
	            }, function (error) {
	                deferred.reject(error);
	            });
	            console.log("ritorno al SERVIZIO login in login.js");
	            return deferred.promise;
	        };
	    }]);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by esc08andbott on 01/10/2016.
	 */

	module.exports = function (ngModule) {
	    __webpack_require__(21)(ngModule);

	    __webpack_require__(22)(ngModule);

	    __webpack_require__(25)(ngModule);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by esc08andbott on 01/10/2016.
	 */

	module.exports = function (ngModule) {

	    ngModule.constant('assetsLang', {

	        "login": {
	            "login": "Login",
	            "firstName": "Nome",
	            "lastName": "Cognome",
	            "email": "Email",

	            "password": "Password",
	            "username": "Username",
	            "newUser": "Nuovo Utente",
	            "saveUser": "Salva Utente",
	            "backToLogin": "Torna alla pagina di login"

	        },
	        "errors": {
	            "valueNotInserted": "Valore richiesto non inserito",
	            "valueTooShort": "Valore inserito troppo corto",
	            "invalidUsrPsw": "Username o Password non corretti"
	        }
	    });
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by esc08andbott on 05/11/2016.
	 */

	module.exports = function (ngModule) {
	  __webpack_require__(23)(ngModule);
	  __webpack_require__(24)(ngModule);
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by esc08andbott on 06/10/2016.
	 */

	module.exports = function (ngModule) {
	    ngModule.service('backend', function ($http, $q) {
	        return {

	            //{action: {restCommand, method}, data}
	            call: function call(callParams) {
	                if (!callParams) {
	                    console.error('call without parameters');
	                    return;
	                };

	                /*
	                console.log("method: " + callParams.action.method);
	                console.log("url: " + callParams.action.url);
	                console.log("data: " + callParams.data);
	                */
	                console.log('call BACKEND');
	                var deferred = $q.defer();
	                $http({
	                    method: callParams.action.method,
	                    url: callParams.action.url,
	                    data: callParams.data
	                }).then(function (result) {
	                    deferred.resolve(result);
	                }, function (error) {
	                    deferred.reject(error);
	                });
	                return deferred.promise;
	            }
	        };
	    });
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by esc08andbott on 01/10/2016.
	 */

	module.exports = function (ngModule) {
	    ngModule.service('user', function () {
	        return {
	            userData: {
	                username: '',
	                privileges: []
	            }
	        };
	    });
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by esc08andbott on 01/10/2016.
	 */

	module.exports = function (ngModule) {

	    ngModule.directive('validatePassword', function () {
	        return {
	            restrict: 'A',
	            require: 'ngModel',
	            link: function link($scope, element, attrs, ngModel) {
	                ngModel.$validators.passwordNotValid = function (value) {
	                    console.log("VALUE " + value);

	                    return !!(value != null && value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/));
	                };
	            }
	        };
	    }).directive('validateEmail', function () {
	        return {
	            restrict: 'A',
	            require: 'ngModel',
	            link: function link($scope, element, attrs, ngModel) {
	                ngModel.$validators.emailNotValid = function (value) {
	                    return !!(value != null && value.match(/^[a-z._-]+\@[a-z._-]+\.[a-z]{2,4}$/));
	                };
	            }
	        };
	    });
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by esc08andbott on 01/10/2016.
	 */

	module.exports = function (ngModule) {

	    ngModule.constant('states', {
	        main: 'main',
	        login: 'main.login',
	        newUser: 'main.login.newUser',
	        home: 'main.home',
	        inizio: 'main.inizio'
	    });

	    ngModule.config(['$stateProvider', '$urlRouterProvider', 'states', function ($stateProvider, $urlRouterProvider, states) {
	        $stateProvider.state(states.main, {
	            name: states.main,
	            template: __webpack_require__(27),
	            controller: 'mainCtrl'
	        }).state(states.login, {
	            name: states.login,
	            template: __webpack_require__(28),
	            controller: 'loginCtrl'
	        }).state(states.newUser, {
	            name: states.newUser,
	            template: __webpack_require__(29),
	            controller: 'newUserCtrl'
	        }).state(states.inizio, {
	            name: states.inizio,
	            template: __webpack_require__(30),
	            controller: 'inizioCtrl'
	        });
	    }]);

	    ngModule.directive('appRouter', ['$state', 'states', function ($state, states) {
	        return {
	            restrict: 'E',
	            scope: {},
	            template: '<ui-view></ui-view>',
	            link: function link() {
	                $state.go(states.main);
	            }
	        };
	    }]);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n\t<header>\r\n\t\r\n\t</header>\r\n\r\n\t<ui-view></ui-view>\r\n</div>\r\n";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"loginPage\">\r\n\r\n    <form class=\"loginForm box-form\" name=\"formLogin\" ng-show=\"showLogin\" ng-submit=\"login()\">\r\n\r\n       <!--<h2 class=\"title\">{{::labels.login}}</h2>-->\r\n\t   <h2 class=\"title\">{{::labels.login}}</h2>\r\n       <h4 class=\"InvalidLoginMessage\" ng-show=\"invalidUsrPsw\">{{::labels.invalidUsrPsw}}</h4>\r\n\t   \r\n        <div class=\"formControl\">\r\n            <label for=\"username\">{{::labels.username}}</label>\r\n            <input class=\"form-control\" type=\"text\" id=\"username\" name=\"username\" required=\"true\" ng-model=\"user.username\"  ng-model-options=\"{ updateOn: 'default blur', debounce: { 'default': 500, 'blur': 0 }}\" />\r\n            <div class=\"messages\">\r\n\t\t\t\t<div ng-messages=\"formLogin.username.$error\" ng-if=\"formLogin.$submitted || formLogin.username.$touched\" >\r\n                \t<div class=\"message\" ng-message=\"required\">{{::labels.valueNotInserted}}</div>\r\n\t\t\t\t</div>\r\n            </div>\r\n        </div>\t\t\r\n\r\n        <div class=\"formControl\">\r\n\t\t\t<label for=\"password\">{{::labels.password}}</label>\r\n\t\t\t<input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" required=\"true\" minlength=\"8\" validate-password ng-model=\"user.password\" ng-model-options=\"{ updateOn: 'default blur', debounce: { 'default': 500, 'blur': 0 }}\" >\r\n            <div class=\"messages\">\r\n\t\t\t\t<div ng-messages=\"formLogin.password.$error\" ng-show=\"formLogin.$submitted || formLogin.password.$touched\">\r\n\t\t\t\t\t<div ng-message=\"required\">{{::labels.valueNotInserted}}</div>\r\n\t\t\t\t\t<div ng-message=\"minlength\">{{::labels.valueTooShort}}</div>\r\n\t\t\t\t\t<div ng-message=\"passwordNotValid\">{{::labels.passwordNotValid}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n        </div>\r\n\r\n\t\t<div class=\"buttons\">\r\n            <button class=\"button button-primary\" type=\"submit\" ng-disabled=\"!formLogin.$valid\">{{::labels.login}}</button>\r\n            <button type=\"button\" class=\"button button-primary\" ng-click=\"newUser()\">{{::labels.newUser}}</button>\r\n        </div>\r\n    </form>\r\n    <ui-view></ui-view> \r\n</div>\r\n    \r\n\r\n\r\n\r\n";

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"loginPage\">\r\n\r\n    <form class=\"loginForm box-form\" name=\"formNewUser\" ng-submit=\"save()\">\r\n\r\n\t   <h2 class=\"title\">{{::labels.newUser}}</h2>\r\n\r\n        <div class=\"formControl\">\r\n            <label for=\"firstName\">{{::labels.firstName}}</label>\r\n            <input class=\"form-control\" type=\"text\" id=\"firstName\" name=\"firstName\" required=\"true\" ng-model=\"user.firstName\"  ng-model-options=\"{ updateOn: 'default blur', debounce: { 'default': 500, 'blur': 0 }}\" />\r\n            <div class=\"messages\">\r\n\t\t\t\t<div ng-messages=\"formNewUser.firstName.$error\" ng-show=\"formNewUser.$submitted || formNewUser.firstName.$touched\">\r\n                \t<div class=\"message\" ng-message=\"required\">{{::labels.valueNotInserted}}</div>\r\n\t\t\t\t</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"formControl\">\r\n            <label for=\"lastName\">{{::labels.lastName}}</label>\r\n            <input class=\"form-control\" type=\"text\" id=\"lastName\" name=\"lastName\" required=\"true\" ng-model=\"user.lastName\"  ng-model-options=\"{ updateOn: 'default blur', debounce: { 'default': 500, 'blur': 0 }}\" />\r\n            <div class=\"messages\">\r\n\t\t\t\t<div ng-messages=\"formNewUser.lastName.$error\" ng-show=\"formNewUser.$submitted || formNewUser.lastName.$touched\">\r\n                \t<div class=\"message\" ng-message=\"required\">{{::labels.valueNotInserted}}</div>\r\n\t\t\t\t</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"formControl\">\r\n            <label for=\"email\">{{::labels.email}}</label>\r\n            <input class=\"form-control\" type=\"text\" id=\"email\" name=\"email\" required=\"true\" ng-model=\"user.email\"  ng-model-options=\"{ updateOn: 'default blur', debounce: { 'default': 500, 'blur': 0 }}\" validate-email />\r\n            <div class=\"messages\">\r\n\t\t\t\t<div ng-messages=\"formNewUser.email.$error\" ng-show=\"formNewUser.$submitted || formNewUser.email.$touched\">\r\n                \t<div class=\"message\" ng-message=\"required\">{{::labels.valueNotInserted}}</div>\r\n\t\t\t\t    <div ng-message=\"emailNotValid\">{{::labels.emailNotValid}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\t   \r\n        <div class=\"formControl\">\r\n            <label for=\"username\">{{::labels.username}}</label>\r\n            <input class=\"form-control\" type=\"text\" id=\"username\" name=\"username\" required=\"true\" ng-model=\"user.username\"  ng-model-options=\"{ updateOn: 'default blur', debounce: { 'default': 500, 'blur': 0 }}\" />\r\n            <div class=\"messages\">\r\n\t\t\t\t<div ng-messages=\"formNewUser.username.$error\" ng-show=\"formNewUser.$submitted || formNewUser.username.$touched\">\r\n                \t<div class=\"message\" ng-message=\"required\">{{::labels.valueNotInserted}}</div>\r\n\t\t\t\t</div>\r\n            </div>\r\n        </div>\r\n\t\t\r\n\t\t\r\n\r\n        <div class=\"formControl\">\r\n\t\t\t<label for=\"password\">{{::labels.password}}</label>\r\n\t\t\t<input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" required=\"true\" minlength=\"8\" validate-password ng-model=\"user.password\" ng-model-options=\"{ updateOn: 'default blur', debounce: { 'default': 500, 'blur': 0 }}\" >\r\n            <div class=\"messages\">\r\n\t\t\t\t<div ng-messages=\"formNewUser.password.$error\" ng-show=\"formNewUser.$submitted || formNewUser.password.$touched\">\r\n\t\t\t\t\t<div ng-message=\"required\">{{::labels.valueNotInserted}}</div>\r\n\t\t\t\t\t<div ng-message=\"minlength\">{{::labels.valueTooShort}}</div>\r\n\t\t\t\t\t<div ng-message=\"passwordNotValid\">{{::labels.passwordNotValid}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n        </div>\r\n\r\n\t\t<div class=\"buttons\">\r\n            <button type=\"submit\" class=\"button button-primary\" ng-disabled=\"!formNewUser.$valid\" ng-click=\"save()\">{{::labels.saveUser}}</button>\r\n            <button type=\"button\" class=\"button button-primary\" ng-click=\"goToLogin()\">{{::labels.backToLogin}}</button>\r\n        </div>\r\n    </form>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div>\r\nInizio\r\n</div>\r\n";

/***/ }
]);