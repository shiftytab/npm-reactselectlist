import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './index.wrapper.css';
export default function index(_a) {
    var label = _a.label, placeholder = _a.placeholder, defaultValue = _a.defaultValue, options = _a.options, onChange = _a.onChange;
    var _b = useState(null), selected = _b[0], setSelected = _b[1];
    var _c = useState(false), show = _c[0], setShow = _c[1];
    var dropdownRef = useRef(null);
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
    useEffect(function () {
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
    useEffect(function () {
        var _a;
        if (defaultValue || defaultValue === 0) {
            setSelected((_a = options[defaultValue]) !== null && _a !== void 0 ? _a : null);
        }
    }, [defaultValue]);
    return options && (React.createElement("div", { className: "container-select" },
        (label) && ((typeof label === 'string') ? (React.createElement("label", null, label)) : label),
        React.createElement("div", { className: 'input-select', onClick: function () { return handleTriggerDropdownSelect(); } },
            React.createElement("div", { className: 'input-field' }, selected ? selected.value : (React.createElement("span", { className: 'placeholder' }, placeholder !== null && placeholder !== void 0 ? placeholder : ""))),
            React.createElement("div", { className: 'input-icon' }, (show) ? (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-chevron-up" },
                React.createElement("polyline", { points: "18 15 12 9 6 15" }))) : (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-chevron-down" },
                React.createElement("polyline", { points: "6 9 12 15 18 9" }))))),
        (show) && (React.createElement("div", { className: "dropdown-select", ref: dropdownRef, style: { top: (label ? 80 : 50) } }, (options.length > 0) && options.map(function (option, index) {
            return (React.createElement("div", { key: index, className: "dropdown-item", onClick: function () { return handleUpdateOption(option); } }, option.value));
        })))));
}
