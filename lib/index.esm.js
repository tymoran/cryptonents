import React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$4 = "/* .storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n} */\n";
styleInject(css_248z$4);

/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, customColor = _a.customColor, disabled = _a.disabled, label = _a.label, _c = _a.size, size = _c === void 0 ? 'base' : _c, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, props = __rest(_a, ["primary", "customColor", "disabled", "label", "size", "fullWidth"]);
    var color = customColor ?
        customColor :
        (primary ? 'blue' : 'stone');
    var tones = primary ? [600, 700, 500, 200] : [300, 400, 300, 200];
    var text = primary ? 'white' : 'black';
    return (React.createElement("div", { className: fullWidth ? "block" : "inline-block" },
        React.createElement("button", __assign({ type: "button", disabled: disabled, className: [disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer', 'py-2', 'px-4', "bg-".concat(color, "-").concat(tones[0]), "hover:bg-".concat(color, "-").concat(tones[1]), "focus:ring-".concat(color, "-").concat(tones[2]), "focus:ring-offset-".concat(color, "-").concat(tones[3]), "text-".concat(text), 'w-full', 'transition', 'ease-in', 'duration-200', 'text-center', "text-".concat(size), 'font-medium', 'shadow-md', 'focus:outline-none', 'focus:ring-offset-2', ' rounded-lg'].join(' ') }, props), label)));
};

var css_248z$3 = "/* .storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n} */\n";
styleInject(css_248z$3);

/**
 * Primary UI component for user interaction
 */
var Input = function (_a) {
    // const color = customColor ?
    //     customColor :
    //     (active ? 'blue' : 'stone');
    var _b = _a.placeholder, placeholder = _b === void 0 ? "Placeholder ..." : _b, disabled = _a.disabled; _a.label; var onMax = _a.onMax, showMax = _a.showMax, props = __rest(_a, ["placeholder", "disabled", "label", "onMax", "showMax"]);
    // const tones = outline ? [500, 700] : [300, 800];
    // const text = color + '-' + tones[1];
    return (React.createElement("div", { className: "flex relative inline-block text-sm ".concat(disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : '') },
        React.createElement("input", __assign({ type: "text", className: "flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none ".concat(showMax ? 'rounded-l-lg' : 'rounded-lg'), placeholder: placeholder }, props)),
        showMax && React.createElement("span", { className: "cursor-pointer text-blue-600 font-medium rounded-r-md inline-flex items-center px-3 border-t bg-white border-r border-b  border-gray-300 text-gray-500 shadow-sm", onClick: onMax }, "MAX")));
};

var css_248z$2 = "/* .storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n} */\n";
styleInject(css_248z$2);

/**
 * Primary UI component for user interaction
 */
var Pill = function (_a) {
    var _b = _a.outline, outline = _b === void 0 ? false : _b, customColor = _a.customColor, active = _a.active, label = _a.label, props = __rest(_a, ["outline", "customColor", "active", "label"]);
    var color = customColor ?
        customColor :
        (active ? 'blue' : 'stone');
    var tones = outline ? [500, 700] : [300, 800];
    var text = color + '-' + tones[1];
    return (React.createElement("div", __assign({ className: ['inline', 'py-1', 'px-3', active && !outline ? "bg-".concat(color, "-").concat(tones[0]) : '', active && outline ? "outline-".concat(color, "-").concat(tones[0], " outline") : '', 'text-xs', 'text-center', 'rounded-full', "text-".concat(text)].join(' ') }, props), label));
};

var css_248z$1 = "/* .storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n} */\n";
styleInject(css_248z$1);

/**
 * Primary UI component for user interaction
 */
var Table = function (_a) {
    var title = _a.title, content = _a.content, _b = _a.tags, tags = _b === void 0 ? [] : _b, _c = _a.metrics, metrics = _c === void 0 ? [] : _c; __rest(_a, ["title", "content", "tags", "metrics"]);
    return (React.createElement("div", { className: "overflow-hidden shadow-lg rounded-lg h-90 w-64 cursor-pointer m-auto" },
        React.createElement("a", { href: "#", className: "w-full block h-full" },
            React.createElement("img", { alt: "blog photo", src: "https://placehold.jp/3d4070/ffffff/150x150.png", className: "max-h-40 w-full object-cover" }),
            React.createElement("div", { className: "bg-white dark:bg-gray-800 w-full p-4" },
                React.createElement("div", { className: "mb-2" }, tags.map(function (tag) {
                    return React.createElement("span", { className: "mr-2" },
                        React.createElement(Pill, { active: true, label: tag.label, customColor: tag.color }));
                })),
                React.createElement("p", { className: "text-gray-800 dark:text-white text-md font-medium mb-2" }, title),
                React.createElement("p", { className: "text-gray-600 dark:text-gray-300 text-xs leading-5" }, content),
                React.createElement("div", { className: "my-4 text-xs p-2 bg-slate-100 rounded-lg" }, metrics.map(function (metric, index) {
                    return React.createElement("div", { className: "flex justify-between ".concat(index ? 'border-t border-slate-200 mt-1 pt-1' : '') },
                        React.createElement("div", { className: "text-gray-500" }, metric.key),
                        React.createElement("div", { className: "text-gray-700" }, metric.value));
                })),
                React.createElement("div", { className: "mt-2" },
                    React.createElement(Button, { label: "View project", primary: true, fullWidth: true }))))));
};

var css_248z = "/* .storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n} */\n";
styleInject(css_248z);

/**
 * Primary UI component for user interaction
 */
var ProjectCard = function (_a) {
    var title = _a.title, content = _a.content, _b = _a.tags, tags = _b === void 0 ? [] : _b, _c = _a.metrics, metrics = _c === void 0 ? [] : _c; __rest(_a, ["title", "content", "tags", "metrics"]);
    return (React.createElement("div", { className: "overflow-hidden shadow-lg rounded-lg h-90 w-64 cursor-pointer m-auto" },
        React.createElement("a", { href: "#", className: "w-full block h-full" },
            React.createElement("img", { alt: "blog photo", src: "https://placehold.jp/3d4070/ffffff/150x150.png", className: "max-h-40 w-full object-cover" }),
            React.createElement("div", { className: "bg-white dark:bg-gray-800 w-full p-4" },
                React.createElement("div", { className: "mb-2" }, tags.map(function (tag) {
                    return React.createElement("span", { className: "mr-2" },
                        React.createElement(Pill, { active: true, label: tag.label, customColor: tag.color }));
                })),
                React.createElement("p", { className: "text-gray-800 dark:text-white text-md font-medium mb-2" }, title),
                React.createElement("p", { className: "text-gray-600 dark:text-gray-300 text-xs leading-5" }, content),
                React.createElement("div", { className: "my-4 text-xs p-2 bg-slate-100 rounded-lg" }, metrics.map(function (metric, index) {
                    return React.createElement("div", { className: "flex justify-between ".concat(index ? 'border-t border-slate-200 mt-1 pt-1' : '') },
                        React.createElement("div", { className: "text-gray-500" }, metric.key),
                        React.createElement("div", { className: "text-gray-700" }, metric.value));
                })),
                React.createElement("div", { className: "mt-2" },
                    React.createElement(Button, { label: "View project", primary: true, fullWidth: true }))))));
};

export { Button, Input, Pill, ProjectCard, Table };
//# sourceMappingURL=index.esm.js.map
