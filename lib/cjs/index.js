"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
require("./index.wrapper.css");
function index(_a) {
    var label = _a.label, placeholder = _a.placeholder, defaultValue = _a.defaultValue, options = _a.options, onChange = _a.onChange;
    var _b = (0, react_2.useState)(null), selected = _b[0], setSelected = _b[1];
    var _c = (0, react_2.useState)(false), show = _c[0], setShow = _c[1];
    var dropdownRef = (0, react_2.useRef)(null);
    var handleUpdateOption = function (option) {
        onChange(option);
        setSelected(option);
        setShow(false);
    };
    var handleTriggerDropdownSelect = function () {
        setShow(!show);
    };
    var handleClickOutside = function (event) {
        var target = event.target;
        if (dropdownRef.current && !dropdownRef.current.contains(target)) {
            setShow(false);
        }
    };
    (0, react_2.useEffect)(function () {
        if (show) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [show]);
    (0, react_2.useEffect)(function () {
        var _a;
        if (defaultValue || defaultValue === 0) {
            setSelected((_a = options[defaultValue]) !== null && _a !== void 0 ? _a : null);
        }
    }, [defaultValue]);
    return options && (react_1.default.createElement("div", { className: "container-select" },
        (label) && ((typeof label === 'string') ? (react_1.default.createElement("label", null, label)) : label),
        react_1.default.createElement("div", { className: 'input-select', onClick: function () { return handleTriggerDropdownSelect(); } },
            react_1.default.createElement("div", { className: 'input-field' }, selected ? selected.value : (react_1.default.createElement("span", { className: 'placeholder' }, placeholder !== null && placeholder !== void 0 ? placeholder : ""))),
            react_1.default.createElement("div", { className: 'input-icon' }, (show) ? (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-chevron-up" },
                react_1.default.createElement("polyline", { points: "18 15 12 9 6 15" }))) : (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-chevron-down" },
                react_1.default.createElement("polyline", { points: "6 9 12 15 18 9" }))))),
        (show) && (react_1.default.createElement("div", { className: "dropdown-select", ref: dropdownRef, style: { top: (label ? 80 : 50) } }, (options.length > 0) && options.map(function (option, index) {
            return (react_1.default.createElement("div", { key: index, className: "dropdown-item", onClick: function () { return handleUpdateOption(option); } }, option.value));
        })))));
}
exports.default = index;
