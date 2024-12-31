"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/_components/navigation.jsx":
/*!****************************************!*\
  !*** ./app/_components/navigation.jsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navigation: () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* __next_internal_client_entry_do_not_use__ Navigation auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Navigation() {\n    _s();\n    const navItems = [\n        'about',\n        'tickets',\n        'speakers',\n        'sponsors',\n        'gallery'\n    ];\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClickOutside = (event)=>{\n        if (menuRef.current && !menuRef.current.contains(event.target)) {\n            setIsMenuOpen(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Navigation.useEffect\": ()=>{\n            document.addEventListener('mousedown', handleClickOutside);\n            return ({\n                \"Navigation.useEffect\": ()=>{\n                    document.removeEventListener('mousedown', handleClickOutside);\n                }\n            })[\"Navigation.useEffect\"];\n        }\n    }[\"Navigation.useEffect\"], []);\n    const scrollToSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)({\n        \"Navigation.useCallback[scrollToSection]\": (e, targetId)=>{\n            e.preventDefault();\n            const targetElement = document.getElementById(targetId);\n            if (targetElement) {\n                const headerOffset = 80;\n                const elementPosition = targetElement.getBoundingClientRect().top;\n                const offsetPosition = elementPosition + window.scrollY - headerOffset;\n                window.scrollTo({\n                    top: offsetPosition,\n                    behavior: 'smooth'\n                });\n            }\n        }\n    }[\"Navigation.useCallback[scrollToSection]\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: menuRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"ghost\",\n                    size: \"icon\",\n                    className: \"md:hidden\",\n                    onClick: ()=>setIsMenuOpen(!isMenuOpen),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"h-6 w-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/caitlinhanna/Documents/elevateNI-website/app/_components/navigation.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Toggle menu\"\n                        }, void 0, false, {\n                            fileName: \"/Users/caitlinhanna/Documents/elevateNI-website/app/_components/navigation.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/caitlinhanna/Documents/elevateNI-website/app/_components/navigation.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"\".concat(isMenuOpen ? 'flex' : 'hidden', \" md:flex flex-col md:flex-row absolute md:relative top-full right-0 mt-2 md:mt-0 bg-black md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none space-y-2 md:space-y-0 md:space-x-6\"),\n                    children: navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\".concat(item),\n                                onClick: (e)=>scrollToSection(e, item),\n                                className: 'block py-2 md:py-0 hover:text-[#40E0D0] transition-colors',\n                                children: item.charAt(0).toUpperCase() + item.slice(1)\n                            }, void 0, false, {\n                                fileName: \"/Users/caitlinhanna/Documents/elevateNI-website/app/_components/navigation.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        }, item, false, {\n                            fileName: \"/Users/caitlinhanna/Documents/elevateNI-website/app/_components/navigation.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/caitlinhanna/Documents/elevateNI-website/app/_components/navigation.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/caitlinhanna/Documents/elevateNI-website/app/_components/navigation.jsx\",\n            lineNumber: 41,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/caitlinhanna/Documents/elevateNI-website/app/_components/navigation.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Navigation, \"01rhUuNzOrCX6ti9Tx/XP0N0Jy8=\");\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUV3RDtBQUNUO0FBQ1o7QUFFNUIsU0FBU0s7O0lBQ2QsTUFBTUMsV0FBVztRQUFDO1FBQVM7UUFBVztRQUFZO1FBQVk7S0FBVTtJQUN4RSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVEscUJBQXFCLENBQUNDO1FBQzFCLElBQUlDLFFBQVFDLE9BQU8sSUFBSSxDQUFDRCxRQUFRQyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0gsTUFBTUksTUFBTSxHQUFHO1lBQzlETixjQUFjO1FBQ2hCO0lBQ0Y7SUFFQU4sZ0RBQVNBO2dDQUFDO1lBQ1JhLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFQO1lBQ3ZDO3dDQUFPO29CQUNMTSxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhUjtnQkFDNUM7O1FBQ0Y7K0JBQUcsRUFBRTtJQUVMLE1BQU1TLGtCQUFrQmxCLGtEQUFXQTttREFBQyxDQUFDbUIsR0FBR0M7WUFDdENELEVBQUVFLGNBQWM7WUFDaEIsTUFBTUMsZ0JBQWdCUCxTQUFTUSxjQUFjLENBQUNIO1lBQzlDLElBQUlFLGVBQWU7Z0JBQ2pCLE1BQU1FLGVBQWU7Z0JBQ3JCLE1BQU1DLGtCQUFrQkgsY0FBY0kscUJBQXFCLEdBQUdDLEdBQUc7Z0JBQ2pFLE1BQU1DLGlCQUFpQkgsa0JBQWtCSSxPQUFPQyxPQUFPLEdBQUdOO2dCQUUxREssT0FBT0UsUUFBUSxDQUFDO29CQUNkSixLQUFLQztvQkFDTEksVUFBVTtnQkFDWjtZQUNGO1FBQ0Y7a0RBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJQyxLQUFLdkI7a0JBQ1YsNEVBQUN3QjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ2pDLHlEQUFNQTtvQkFDTGtDLFNBQVE7b0JBQ1JDLE1BQUs7b0JBQ0xGLFdBQVU7b0JBQ1ZHLFNBQVMsSUFBTS9CLGNBQWMsQ0FBQ0Q7O3NDQUU5Qiw4REFBQ0gsZ0ZBQUlBOzRCQUFDZ0MsV0FBVTs7Ozs7O3NDQUNoQiw4REFBQ0k7NEJBQUtKLFdBQVU7c0NBQVU7Ozs7Ozs7Ozs7Ozs4QkFFNUIsOERBQUNLO29CQUFHTCxXQUFXLEdBRWQsT0FEQzdCLGFBQWEsU0FBUyxVQUN2Qjs4QkFDRUQsU0FBU29DLEdBQUcsQ0FBQyxDQUFDQyxxQkFDYiw4REFBQ0M7c0NBQ0MsNEVBQUNDO2dDQUNDQyxNQUFNLElBQVMsT0FBTEg7Z0NBQ1ZKLFNBQVMsQ0FBQ3BCLElBQU1ELGdCQUFnQkMsR0FBR3dCO2dDQUNuQ1AsV0FBVzswQ0FFVk8sS0FBS0ksTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBS0wsS0FBS00sS0FBSyxDQUFDOzs7Ozs7MkJBTnRDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY25CO0dBOURnQnRDO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvY2FpdGxpbmhhbm5hL0RvY3VtZW50cy9lbGV2YXRlTkktd2Vic2l0ZS9hcHAvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgbmF2SXRlbXMgPSBbJ2Fib3V0JywgJ3RpY2tldHMnLCAnc3BlYWtlcnMnLCAnc3BvbnNvcnMnLCAnZ2FsbGVyeSddXG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudCkgPT4ge1xuICAgIGlmIChtZW51UmVmLmN1cnJlbnQgJiYgIW1lbnVSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBzZXRJc01lbnVPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSB1c2VDYWxsYmFjaygoZSwgdGFyZ2V0SWQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpXG4gICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGhlYWRlck9mZnNldCA9IDgwXG4gICAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb24gKyB3aW5kb3cuc2Nyb2xsWSAtIGhlYWRlck9mZnNldFxuXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17bWVudVJlZn0+XG4gICAgPG5hdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgPEJ1dHRvblxuICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pfVxuICAgICAgPlxuICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBtZW51PC9zcGFuPlxuICAgICAgPC9CdXR0b24+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgaXNNZW51T3BlbiA/ICdmbGV4JyA6ICdoaWRkZW4nXG4gICAgICB9IG1kOmZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgYWJzb2x1dGUgbWQ6cmVsYXRpdmUgdG9wLWZ1bGwgcmlnaHQtMCBtdC0yIG1kOm10LTAgYmctYmxhY2sgbWQ6YmctdHJhbnNwYXJlbnQgcC00IG1kOnAtMCByb3VuZGVkLWxnIG1kOnJvdW5kZWQtbm9uZSBzcGFjZS15LTIgbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtNmB9PlxuICAgICAgICB7bmF2SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aXRlbX0+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtgIyR7aXRlbX1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2Nyb2xsVG9TZWN0aW9uKGUsIGl0ZW0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9eydibG9jayBweS0yIG1kOnB5LTAgaG92ZXI6dGV4dC1bIzQwRTBEMF0gdHJhbnNpdGlvbi1jb2xvcnMnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGl0ZW0uc2xpY2UoMSl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIk1lbnUiLCJOYXZpZ2F0aW9uIiwibmF2SXRlbXMiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwibWVudVJlZiIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUb1NlY3Rpb24iLCJlIiwidGFyZ2V0SWQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhlYWRlck9mZnNldCIsImVsZW1lbnRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIm9mZnNldFBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJkaXYiLCJyZWYiLCJuYXYiLCJjbGFzc05hbWUiLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siLCJzcGFuIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJhIiwiaHJlZiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/navigation.jsx\n"));

/***/ })

});