!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="/",t(0)}({0:function(e,t,o){e.exports=o(7)},7:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){e.component("md-backdrop",e.extend(c.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var u=o(126),c=n(u);e.exports=t.default},36:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{close:function(){this.$emit("close")}}},e.exports=t.default},100:function(e,t){},126:function(e,t,o){var n,r;o(100),n=o(36);var u=o(221);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=u.render,r.staticRenderFns=u.staticRenderFns,e.exports=n},221:function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"md-backdrop",on:{click:e.close,keyup:function(t){e._k(t.keyCode,"esc",27)||e.close(t)}}})},staticRenderFns:[]}}})});