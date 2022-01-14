"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[397],{726:function(e,t,n){n.r(t),n.d(t,{default:function(){return Se}});var r,o,a,u=n(7294),i=n(5444);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function d(e,t){if(e in t){for(var n=t[e],r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return"function"==typeof n?n.apply(void 0,o):n}var u=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(u,d),u}function p(e){var t=e.props,n=e.slot,a=e.defaultTag,u=e.features,i=e.visible,s=void 0===i||i,f=e.name;if(s)return v(t,n,a,f);var p=null!=u?u:r.None;if(p&r.Static){var m=t.static,g=void 0!==m&&m,b=c(t,["static"]);if(g)return v(b,n,a,f)}if(p&r.RenderStrategy){var h,y=t.unmount,E=void 0===y||y,x=c(t,["unmount"]);return d(E?o.Unmount:o.Hidden,((h={})[o.Unmount]=function(){return null},h[o.Hidden]=function(){return v(l({},x,{hidden:!0,style:{display:"none"}}),n,a,f)},h))}return v(t,n,a,f)}function v(e,t,n,r){var o;void 0===t&&(t={});var a=g(e,["unmount","static"]),i=a.as,l=void 0===i?n:i,s=a.children,d=a.refName,p=void 0===d?"ref":d,v=c(a,["as","children","refName"]),m=void 0!==e.ref?((o={})[p]=e.ref,o):{},b="function"==typeof s?s(t):s;if(v.className&&"function"==typeof v.className&&(v.className=v.className(t)),l===u.Fragment&&Object.keys(v).length>0){if(!(0,u.isValidElement)(b)||Array.isArray(b)&&b.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,u.cloneElement)(b,Object.assign({},function(e,t,n){for(var r,o=Object.assign({},e),a=function(){var n,a=r.value;void 0!==e[a]&&void 0!==t[a]&&Object.assign(o,((n={})[a]=function(n){n.defaultPrevented||e[a](n),n.defaultPrevented||t[a](n)},n))},u=f(n);!(r=u()).done;)a();return o}(function(e){var t=Object.assign({},e);for(var n in t)void 0===t[n]&&delete t[n];return t}(g(v,["ref"])),b.props,["onClick"]),m))}return(0,u.createElement)(l,Object.assign({},g(v,["ref"]),l!==u.Fragment&&m),b)}function m(e){var t;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function g(e,t){void 0===t&&(t=[]);for(var n,r=Object.assign({},e),o=f(t);!(n=o()).done;){var a=n.value;a in r&&delete r[a]}return r}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=(0,u.useRef)(t);return(0,u.useEffect)((function(){r.current=t}),[t]),(0,u.useCallback)((function(e){for(var t,n=f(r.current);!(t=n()).done;){var o=t.value;null!=o&&("function"==typeof o?o(e):o.current=e)}}),[r])}function h(e){for(var t,n,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var a=null!=(t=""===(null==(n=r)?void 0:n.getAttribute("disabled")))&&t;return(!a||!function(e){if(!e)return!1;var t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(o))&&a}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(o||(o={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(a||(a={}));var y="undefined"!=typeof window?u.useLayoutEffect:u.useEffect,E={serverHandoffComplete:!1};function x(){var e=(0,u.useState)(E.serverHandoffComplete),t=e[0],n=e[1];return(0,u.useEffect)((function(){!0!==t&&n(!0)}),[t]),(0,u.useEffect)((function(){!1===E.serverHandoffComplete&&(E.serverHandoffComplete=!0)}),[]),t}var w=0;function S(){return++w}function C(){var e=x(),t=(0,u.useState)(e?S:null),n=t[0],r=t[1];return y((function(){null===n&&r(S())}),[n]),null!=n?""+n:void 0}var P,O,N,k,T=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function F(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(T))}function A(e,t){var n=Array.isArray(e)?e:F(e),r=document.activeElement,o=function(){if(t&(P.First|P.Next))return N.Next;if(t&(P.Previous|P.Last))return N.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),a=function(){if(t&P.First)return 0;if(t&P.Previous)return Math.max(0,n.indexOf(r))-1;if(t&P.Next)return Math.max(0,n.indexOf(r))+1;if(t&P.Last)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),u=t&P.NoScroll?{preventScroll:!0}:{},i=0,l=n.length,c=void 0;do{var s;if(i>=l||i+l<=0)return O.Error;var f=a+i;if(t&P.WrapAround)f=(f+l)%l;else{if(f<0)return O.Underflow;if(f>=l)return O.Overflow}null==(s=c=n[f])||s.focus(u),i+=o}while(c!==document.activeElement);return c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),O.Success}function L(e,t,n){var r=(0,u.useRef)(t);r.current=t,(0,u.useEffect)((function(){function t(e){r.current.call(window,e)}return window.addEventListener(e,t,n),function(){return window.removeEventListener(e,t,n)}}),[e,n])}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(P||(P={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(O||(O={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(N||(N={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(k||(k={}));var j,I,H,M,R=(0,u.createContext)(null);function B(){return(0,u.useContext)(R)}function D(e){var t=e.value,n=e.children;return u.createElement(R.Provider,{value:t},n)}function U(e){var t;if(e.type)return e.type;var n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}R.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(j||(j={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(H||(H={})),function(e){e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId"}(M||(M={}));var V=((I={})[M.TogglePopover]=function(e){var t;return l({},e,{popoverState:d(e.popoverState,(t={},t[H.Open]=H.Closed,t[H.Closed]=H.Open,t))})},I[M.ClosePopover]=function(e){return e.popoverState===H.Closed?e:l({},e,{popoverState:H.Closed})},I[M.SetButton]=function(e,t){return e.button===t.button?e:l({},e,{button:t.button})},I[M.SetButtonId]=function(e,t){return e.buttonId===t.buttonId?e:l({},e,{buttonId:t.buttonId})},I[M.SetPanel]=function(e,t){return e.panel===t.panel?e:l({},e,{panel:t.panel})},I[M.SetPanelId]=function(e,t){return e.panelId===t.panelId?e:l({},e,{panelId:t.panelId})},I),W=(0,u.createContext)(null);function G(e){var t=(0,u.useContext)(W);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+Y.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,G),n}return t}W.displayName="PopoverContext";var q=(0,u.createContext)(null);function K(e){var t=(0,u.useContext)(q);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+Y.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,K),n}return t}q.displayName="PopoverAPIContext";var _=(0,u.createContext)(null);function z(){return(0,u.useContext)(_)}_.displayName="PopoverGroupContext";var J=(0,u.createContext)(null);function Q(e,t){return d(t.type,V,e,t)}J.displayName="PopoverPanelContext";function Y(e){var t,n="headlessui-popover-button-"+C(),r="headlessui-popover-panel-"+C(),o=(0,u.useReducer)(Q,{popoverState:H.Closed,button:null,buttonId:n,panel:null,panelId:r}),a=o[0],i=a.popoverState,l=a.button,c=a.panel,s=o[1];(0,u.useEffect)((function(){return s({type:M.SetButtonId,buttonId:n})}),[n,s]),(0,u.useEffect)((function(){return s({type:M.SetPanelId,panelId:r})}),[r,s]);var f=(0,u.useMemo)((function(){return{buttonId:n,panelId:r,close:function(){return s({type:M.ClosePopover})}}}),[n,r,s]),v=z(),m=null==v?void 0:v.registerPopover,g=(0,u.useCallback)((function(){var e;return null!=(e=null==v?void 0:v.isFocusWithinPopoverGroup())?e:(null==l?void 0:l.contains(document.activeElement))||(null==c?void 0:c.contains(document.activeElement))}),[v,l,c]);(0,u.useEffect)((function(){return null==m?void 0:m(f)}),[m,f]),L("focus",(function(){i===H.Open&&(g()||l&&c&&s({type:M.ClosePopover}))}),!0),L("mousedown",(function(e){var t,n,r,o=e.target;i===H.Open&&((null==l?void 0:l.contains(o))||(null==c?void 0:c.contains(o))||(s({type:M.ClosePopover}),t=o,void 0===(n=k.Loose)&&(n=k.Strict),t!==document.body&&d(n,((r={})[k.Strict]=function(){return t.matches(T)},r[k.Loose]=function(){for(var e=t;null!==e;){if(e.matches(T))return!0;e=e.parentElement}return!1},r))||(e.preventDefault(),null==l||l.focus())))}));var b=(0,u.useCallback)((function(e){s({type:M.ClosePopover});var t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:l:l;null==t||t.focus()}),[s,l]),h=(0,u.useMemo)((function(){return{close:b}}),[b]),y=(0,u.useMemo)((function(){return{open:i===H.Open,close:b}}),[i,b]);return u.createElement(W.Provider,{value:o},u.createElement(q.Provider,{value:h},u.createElement(D,{value:d(i,(t={},t[H.Open]=j.Open,t[H.Closed]=j.Closed,t))},p({props:e,slot:y,defaultTag:"div",name:"Popover"}))))}var Z,$=m((function e(t,n){var r=G([Y.name,e.name].join(".")),o=r[0],i=r[1],c=(0,u.useRef)(null),s=z(),f=null==s?void 0:s.closeOthers,d=(0,u.useContext)(J),v=null!==d&&d===o.panelId,m=b(c,n,v?null:function(e){return i({type:M.SetButton,button:e})}),g=b(c,n),E=(0,u.useRef)(null),x=(0,u.useRef)("undefined"==typeof window?null:document.activeElement);L("focus",(function(){x.current=E.current,E.current=document.activeElement}),!0);var w=(0,u.useCallback)((function(e){var t;if(v){if(o.popoverState===H.Closed)return;switch(e.key){case a.Space:case a.Enter:e.preventDefault(),e.stopPropagation(),i({type:M.ClosePopover}),null==(t=o.button)||t.focus()}}else switch(e.key){case a.Space:case a.Enter:e.preventDefault(),e.stopPropagation(),o.popoverState===H.Closed&&(null==f||f(o.buttonId)),i({type:M.TogglePopover});break;case a.Escape:if(o.popoverState!==H.Open)return null==f?void 0:f(o.buttonId);if(!c.current)return;if(!c.current.contains(document.activeElement))return;e.preventDefault(),e.stopPropagation(),i({type:M.ClosePopover});break;case a.Tab:if(o.popoverState!==H.Open)return;if(!o.panel)return;if(!o.button)return;if(e.shiftKey){var n;if(!x.current)return;if(null==(n=o.button)?void 0:n.contains(x.current))return;if(o.panel.contains(x.current))return;var r=F(),u=r.indexOf(x.current);if(r.indexOf(o.button)>u)return;e.preventDefault(),e.stopPropagation(),A(o.panel,P.Last)}else e.preventDefault(),e.stopPropagation(),A(o.panel,P.First)}}),[i,o.popoverState,o.buttonId,o.button,o.panel,c,f,v]),S=(0,u.useCallback)((function(e){var t;if(!v&&(e.key===a.Space&&e.preventDefault(),o.popoverState===H.Open&&o.panel&&o.button&&e.key===a.Tab)){if(!x.current)return;if(null==(t=o.button)?void 0:t.contains(x.current))return;if(o.panel.contains(x.current))return;var n=F(),r=n.indexOf(x.current);if(n.indexOf(o.button)>r)return;e.preventDefault(),e.stopPropagation(),A(o.panel,P.Last)}}),[o.popoverState,o.panel,o.button,v]),C=(0,u.useCallback)((function(e){var n,r;h(e.currentTarget)||(t.disabled||(v?(i({type:M.ClosePopover}),null==(n=o.button)||n.focus()):(o.popoverState===H.Closed&&(null==f||f(o.buttonId)),null==(r=o.button)||r.focus(),i({type:M.TogglePopover}))))}),[i,o.button,o.popoverState,o.buttonId,t.disabled,f,v]),O=(0,u.useMemo)((function(){return{open:o.popoverState===H.Open}}),[o]),N=function(e,t){var n=(0,u.useState)((function(){return U(e)})),r=n[0],o=n[1];return y((function(){o(U(e))}),[e.type,e.as]),y((function(){r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")}),[r,t]),r}(t,c);return p({props:l({},t,v?{ref:g,type:N,onKeyDown:w,onClick:C}:{ref:m,id:o.buttonId,type:N,"aria-expanded":t.disabled?void 0:o.popoverState===H.Open,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:w,onKeyUp:S,onClick:C}),slot:O,defaultTag:"button",name:"Popover.Button"})})),X=r.RenderStrategy|r.Static,ee=m((function e(t,n){var r=G([Y.name,e.name].join(".")),o=r[0].popoverState,a=r[1],i=b(n),c="headlessui-popover-overlay-"+C(),s=B(),f=null!==s?s===j.Open:o===H.Open,d=(0,u.useCallback)((function(e){if(h(e.currentTarget))return e.preventDefault();a({type:M.ClosePopover})}),[a]),v=(0,u.useMemo)((function(){return{open:o===H.Open}}),[o]);return p({props:l({},t,{ref:i,id:c,"aria-hidden":!0,onClick:d}),slot:v,defaultTag:"div",features:X,visible:f,name:"Popover.Overlay"})})),te=r.RenderStrategy|r.Static,ne=m((function e(t,n){var r=t.focus,o=void 0!==r&&r,i=c(t,["focus"]),s=G([Y.name,e.name].join(".")),f=s[0],d=s[1],v=K([Y.name,e.name].join(".")).close,m=(0,u.useRef)(null),g=b(m,n,(function(e){d({type:M.SetPanel,panel:e})})),h=B(),y=null!==h?h===j.Open:f.popoverState===H.Open,E=(0,u.useCallback)((function(e){var t;if(e.key===a.Escape){if(f.popoverState!==H.Open)return;if(!m.current)return;if(!m.current.contains(document.activeElement))return;e.preventDefault(),e.stopPropagation(),d({type:M.ClosePopover}),null==(t=f.button)||t.focus()}}),[f,m,d]);(0,u.useEffect)((function(){return function(){return d({type:M.SetPanel,panel:null})}}),[d]),(0,u.useEffect)((function(){var e;t.static||f.popoverState!==H.Closed||null!=(e=t.unmount)&&!e||d({type:M.SetPanel,panel:null})}),[f.popoverState,t.unmount,t.static,d]),(0,u.useEffect)((function(){if(o&&f.popoverState===H.Open&&m.current){var e=document.activeElement;m.current.contains(e)||A(m.current,P.First)}}),[o,m,f.popoverState]),L("keydown",(function(e){if(f.popoverState===H.Open&&m.current&&e.key===a.Tab&&document.activeElement&&m.current&&m.current.contains(document.activeElement)){e.preventDefault();var t,n=A(m.current,e.shiftKey?P.Previous:P.Next);if(n===O.Underflow)return null==(t=f.button)?void 0:t.focus();if(n===O.Overflow){if(!f.button)return;var r=F(),o=r.indexOf(f.button);A(r.splice(o+1).filter((function(e){var t;return!(null==(t=m.current)?void 0:t.contains(e))})),P.First)===O.Error&&A(document.body,P.First)}}})),L("focus",(function(){var e;o&&f.popoverState===H.Open&&m.current&&((null==(e=m.current)?void 0:e.contains(document.activeElement))||d({type:M.ClosePopover}))}),!0);var x=(0,u.useMemo)((function(){return{open:f.popoverState===H.Open,close:v}}),[f,v]),w={ref:g,id:f.panelId,onKeyDown:E};return u.createElement(J.Provider,{value:f.panelId},p({props:l({},i,w),slot:x,defaultTag:"div",features:te,visible:y,name:"Popover.Panel"}))}));function re(){var e=[],t={requestAnimationFrame:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=requestAnimationFrame.apply(void 0,arguments);t.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.requestAnimationFrame((function(){t.requestAnimationFrame.apply(t,n)}))},setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=setTimeout.apply(void 0,arguments);t.add((function(){return clearTimeout(e)}))})),add:function(t){e.push(t)},dispose:function(){for(var t,n=f(e.splice(0));!(t=n()).done;){var r=t.value;r()}}};return t}function oe(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e&&r.length>0&&(t=e.classList).add.apply(t,r)}function ae(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e&&r.length>0&&(t=e.classList).remove.apply(t,r)}function ue(e,t,n,r,o,a){var u=re(),i=void 0!==a?function(e){var t={called:!1};return function(){if(!t.called)return t.called=!0,e.apply(void 0,arguments)}}(a):function(){};return ae.apply(void 0,[e].concat(o)),oe.apply(void 0,[e].concat(t,n)),u.nextFrame((function(){ae.apply(void 0,[e].concat(n)),oe.apply(void 0,[e].concat(r)),u.add(function(e,t){var n=re();if(!e)return n.dispose;var r=getComputedStyle(e),o=[r.transitionDuration,r.transitionDelay].map((function(e){var t=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,t){return t-e}))[0];return void 0===t?0:t})),a=o[0],u=o[1];return 0!==a?n.setTimeout((function(){t(Z.Finished)}),a+u):t(Z.Finished),n.add((function(){return t(Z.Cancelled)})),n.dispose}(e,(function(n){return ae.apply(void 0,[e].concat(r,t)),oe.apply(void 0,[e].concat(o)),i(n)})))})),u.add((function(){return ae.apply(void 0,[e].concat(t,n,r,o))})),u.add((function(){return i(Z.Cancelled)})),u.dispose}function ie(e){return void 0===e&&(e=""),(0,u.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}Y.Button=$,Y.Overlay=ee,Y.Panel=ne,Y.Group=function(e){var t=(0,u.useRef)(null),n=(0,u.useState)([]),r=n[0],o=n[1],a=(0,u.useCallback)((function(e){o((function(t){var n=t.indexOf(e);if(-1!==n){var r=t.slice();return r.splice(n,1),r}return t}))}),[o]),i=(0,u.useCallback)((function(e){return o((function(t){return[].concat(t,[e])})),function(){return a(e)}}),[o,a]),c=(0,u.useCallback)((function(){var e,n=document.activeElement;return!!(null==(e=t.current)?void 0:e.contains(n))||r.some((function(e){var t,r;return(null==(t=document.getElementById(e.buttonId))?void 0:t.contains(n))||(null==(r=document.getElementById(e.panelId))?void 0:r.contains(n))}))}),[t,r]),s=(0,u.useCallback)((function(e){for(var t,n=f(r);!(t=n()).done;){var o=t.value;o.buttonId!==e&&o.close()}}),[r]),d=(0,u.useMemo)((function(){return{registerPopover:i,unregisterPopover:a,isFocusWithinPopoverGroup:c,closeOthers:s}}),[i,a,c,s]),v=(0,u.useMemo)((function(){return{}}),[]),m={ref:t},g=e;return u.createElement(_.Provider,{value:d},p({props:l({},g,m),slot:v,defaultTag:"div",name:"Popover.Group"}))},function(e){e.Finished="finished",e.Cancelled="cancelled"}(Z||(Z={}));var le,ce=(0,u.createContext)(null);ce.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(le||(le={}));var se=(0,u.createContext)(null);function fe(e){return"children"in e?fe(e.children):e.current.filter((function(e){return e.state===le.Visible})).length>0}function de(e){var t=(0,u.useRef)(e),n=(0,u.useRef)([]),r=function(){var e=(0,u.useRef)(!1);return(0,u.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,u.useEffect)((function(){t.current=e}),[e]);var a=(0,u.useCallback)((function(e,a){var u;void 0===a&&(a=o.Hidden);var i=n.current.findIndex((function(t){return t.id===e}));-1!==i&&(d(a,((u={})[o.Unmount]=function(){n.current.splice(i,1)},u[o.Hidden]=function(){n.current[i].state=le.Hidden},u)),!fe(n)&&r.current&&(null==t.current||t.current()))}),[t,r,n]),i=(0,u.useCallback)((function(e){var t=n.current.find((function(t){return t.id===e}));return t?t.state!==le.Visible&&(t.state=le.Visible):n.current.push({id:e,state:le.Visible}),function(){return a(e,o.Unmount)}}),[n,a]);return(0,u.useMemo)((function(){return{children:n,register:i,unregister:a}}),[i,a,n])}function pe(){}se.displayName="NestingContext";var ve=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function me(e){for(var t,n={},r=f(ve);!(t=r()).done;){var o,a=t.value;n[a]=null!=(o=e[a])?o:pe}return n}var ge=r.RenderStrategy;function be(e){var t,n=e.beforeEnter,r=e.afterEnter,a=e.beforeLeave,i=e.afterLeave,s=e.enter,f=e.enterFrom,v=e.enterTo,m=e.entered,g=e.leave,b=e.leaveFrom,h=e.leaveTo,E=c(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),w=(0,u.useRef)(null),S=(0,u.useState)(le.Visible),P=S[0],O=S[1],N=E.unmount?o.Unmount:o.Hidden,k=function(){var e=(0,u.useContext)(ce);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),T=k.show,F=k.appear,A=k.initial,L=function(){var e=(0,u.useContext)(se);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),I=L.register,H=L.unregister,M=C(),R=(0,u.useRef)(!1),B=de((function(){R.current||(O(le.Hidden),H(M),z.current.afterLeave())}));y((function(){if(M)return I(M)}),[I,M]),y((function(){var e;N===o.Hidden&&M&&(T&&P!==le.Visible?O(le.Visible):d(P,((e={})[le.Hidden]=function(){return H(M)},e[le.Visible]=function(){return I(M)},e)))}),[P,M,I,H,T,N]);var U=ie(s),V=ie(f),W=ie(v),G=ie(m),q=ie(g),K=ie(b),_=ie(h),z=function(e){var t=(0,u.useRef)(me(e));return(0,u.useEffect)((function(){t.current=me(e)}),[e]),t}({beforeEnter:n,afterEnter:r,beforeLeave:a,afterLeave:i}),J=x();(0,u.useEffect)((function(){if(J&&P===le.Visible&&null===w.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[w,P,J]);var Q=A&&!F;y((function(){var e=w.current;if(e&&!Q)return R.current=!0,T&&z.current.beforeEnter(),T||z.current.beforeLeave(),T?ue(e,U,V,W,G,(function(e){R.current=!1,e===Z.Finished&&z.current.afterEnter()})):ue(e,q,K,_,G,(function(e){R.current=!1,e===Z.Finished&&(fe(B)||(O(le.Hidden),H(M),z.current.afterLeave()))}))}),[z,M,R,H,B,w,Q,T,U,V,W,q,K,_]);var Y={ref:w},$=E;return u.createElement(se.Provider,{value:B},u.createElement(D,{value:d(P,(t={},t[le.Visible]=j.Open,t[le.Hidden]=j.Closed,t))},p({props:l({},$,Y),defaultTag:"div",features:ge,visible:P===le.Visible,name:"Transition.Child"})))}function he(e){var t,n=e.show,r=e.appear,o=void 0!==r&&r,a=e.unmount,i=c(e,["show","appear","unmount"]),s=B();void 0===n&&null!==s&&(n=d(s,((t={})[j.Open]=!0,t[j.Closed]=!1,t)));if(![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var f=(0,u.useState)(n?le.Visible:le.Hidden),v=f[0],m=f[1],g=de((function(){m(le.Hidden)})),b=function(){var e=(0,u.useRef)(!0);return(0,u.useEffect)((function(){e.current=!1}),[]),e.current}(),h=(0,u.useMemo)((function(){return{show:n,appear:o||!b,initial:b}}),[n,o,b]);(0,u.useEffect)((function(){n?m(le.Visible):fe(g)||m(le.Hidden)}),[n,g]);var y={unmount:a};return u.createElement(se.Provider,{value:g},u.createElement(ce.Provider,{value:h},p({props:l({},y,{as:u.Fragment,children:u.createElement(be,Object.assign({},y,i))}),defaultTag:u.Fragment,features:ge,visible:v===le.Visible,name:"Transition"})))}he.Child=function(e){var t=null!==(0,u.useContext)(ce),n=null!==B();return!t&&n?u.createElement(he,Object.assign({},e)):u.createElement(be,Object.assign({},e))},he.Root=he;var ye=function(e){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var Ee=function(e){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))};var xe=n(9470),we=[{name:"About",href:"/about"},{name:"Contacts",href:"/contacts"}],Se=function(e){e.data,e.path;return u.createElement(u.Fragment,null,u.createElement(xe.Z,null),u.createElement("div",{className:"relative bg-white overflow-hidden font-sans"},u.createElement("div",{className:"max-w-7xl mx-auto"},u.createElement("div",{className:"relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"},u.createElement("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"},u.createElement("polygon",{points:"50,0 100,0 50,100 0,100"})),u.createElement(Y,null,u.createElement("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8"},u.createElement("nav",{className:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global"},u.createElement("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"},u.createElement("div",{className:"flex items-center justify-between w-full md:w-auto"},u.createElement("div",{className:"-mr-2 flex items-center md:hidden"},u.createElement(Y.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},u.createElement("span",{className:"sr-only"},"Open main menu"),u.createElement(ye,{className:"h-6 w-6","aria-hidden":"true"}))))),u.createElement("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8"},we.map((function(e){return u.createElement(i.rU,{key:e.name,to:e.href,className:"font-medium text-gray-500 hover:text-gray-900"},e.name)}))))),u.createElement(he,{as:u.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},u.createElement(Y.Panel,{focus:!0,className:"absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},u.createElement("div",{className:"rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"},u.createElement("div",{className:"px-5 pt-4 flex items-center justify-between"},u.createElement("div",{className:"-mr-2"},u.createElement(Y.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},u.createElement("span",{className:"sr-only"},"Close main menu"),u.createElement(Ee,{className:"h-6 w-6","aria-hidden":"true"})))),u.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1"},we.map((function(e){return u.createElement(i.rU,{key:e.name,to:e.href,className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"},e.name)}))))))),u.createElement("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},u.createElement("div",{className:"sm:text-center lg:text-left"},u.createElement("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"},u.createElement("span",{className:"block xl:inline"},"Building the Future of")," ",u.createElement("span",{className:"block text-indigo-600 xl:inline"},"Private Markets")),u.createElement("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},"Our team of talented professionals comes from leading investment and technology companies. Together we are building next-gen digital platforms that enable the future of private market investments."),u.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},u.createElement("div",{className:"rounded-md shadow"},u.createElement(i.rU,{to:"/contacts",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"},"Get in touch"))))))),u.createElement("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},u.createElement("img",{className:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",alt:""}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1df0f4c8b9c6bb544019.js.map