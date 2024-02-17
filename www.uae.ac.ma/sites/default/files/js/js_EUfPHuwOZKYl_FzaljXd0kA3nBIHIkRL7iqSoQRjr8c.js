/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
};
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};
  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
window.Drupal = {
  behaviors: {},
  locale: {}
};
(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };
  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;
        case '!':
          processedArgs[key] = args[key];
          break;
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }
    if (keys.length === 0) {
      return str;
    }
    var key = keys.pop();
    var fragments = str.split(key);
    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }
    return fragments.join(args[key]);
  };
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }
    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };
  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');
    try {
      url = decodeURIComponent(url);
    } catch (e) {}
    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };
  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}
    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }
    return translations[index];
  };
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };
  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;
    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };
  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
      deprecatedProperty = _ref2.deprecatedProperty,
      message = _ref2.message;
    if (!Proxy || !Reflect) {
      return target;
    }
    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }
        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };
  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };
  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (window.jQuery) {
  jQuery.noConflict();
}
document.documentElement.className += ' js';
(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };
  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/**
 * @file
 * Attaches several event listener to a web page.
 */

(function ($, Drupal, drupalSettings) {

  /* eslint max-nested-callbacks: ["error", 4] */

  'use strict';

  Drupal.google_analytics = {};

  $(document).ready(function () {

    // Attach mousedown, keyup, touchstart events to document only and catch
    // clicks on all elements.
    $(document.body).on('mousedown keyup touchstart', function (event) {

      // Catch the closest surrounding link of a clicked element.
      $(event.target).closest('a,area').each(function () {

        // Is the clicked URL internal?
        if (Drupal.google_analytics.isInternal(this.href)) {
          // Skip 'click' tracking, if custom tracking events are bound.
          if ($(this).is('.colorbox') && (drupalSettings.google_analytics.trackColorbox)) {
            // Do nothing here. The custom event will handle all tracking.
            // console.info('Click on .colorbox item has been detected.');
          }
          // Is download tracking activated and the file extension configured
          // for download tracking?
          else if (drupalSettings.google_analytics.trackDownload && Drupal.google_analytics.isDownload(this.href)) {
            // Download link clicked.
            gtag('event', Drupal.google_analytics.getDownloadExtension(this.href).toUpperCase(), {
              event_category: 'Downloads',
              event_label: Drupal.google_analytics.getPageUrl(this.href),
              transport_type: 'beacon'
            });
          }
          else if (Drupal.google_analytics.isInternalSpecial(this.href)) {
            // Keep the internal URL for Google Analytics website overlay intact.
            // @todo: May require tracking ID
            gtag('config', drupalSettings.google_analytics.account, {
              page_path: Drupal.google_analytics.getPageUrl(this.href),
              transport_type: 'beacon'
            });
          }
        }
        else {
          if (drupalSettings.google_analytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
            // Mailto link clicked.
            gtag('event', 'Click', {
              event_category: 'Mails',
              event_label: this.href.substring(7),
              transport_type: 'beacon'
            });
          }
          else if (drupalSettings.google_analytics.trackTel && $(this).is("a[href^='tel:'],area[href^='tel:']")) {
            // Tel link clicked.
            gtag('event', 'Click', {
              event_category: 'Telephone calls',
              event_label: this.href.substring(4),
              transport_type: 'beacon'
            });
          }
          else if (drupalSettings.google_analytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
            if (drupalSettings.google_analytics.trackDomainMode !== 2 || (drupalSettings.google_analytics.trackDomainMode === 2 && !Drupal.google_analytics.isCrossDomain(this.hostname, drupalSettings.google_analytics.trackCrossDomains))) {
              // External link clicked / No top-level cross domain clicked.
              gtag('event', 'Click', {
                event_category: 'Outbound links',
                event_label: this.href,
                transport_type: 'beacon'
              });
            }
          }
        }
      });
    });

    // Track hash changes as unique pageviews, if this option has been enabled.
    if (drupalSettings.google_analytics.trackUrlFragments) {
      window.onhashchange = function () {
        gtag('config', drupalSettings.google_analytics.account, {
          page_path: location.pathname + location.search + location.hash
        });
      };
    }

    // Colorbox: This event triggers when the transition has completed and the
    // newly loaded content has been revealed.
    if (drupalSettings.google_analytics.trackColorbox) {
      $(document).on('cbox_complete', function () {
        var href = $.colorbox.element().attr('href');
        if (href) {
          gtag('config', drupalSettings.google_analytics.account, {
            page_path: Drupal.google_analytics.getPageUrl(href)
          });
        }
      });
    }

  });

  /**
   * Check whether the hostname is part of the cross domains or not.
   *
   * @param {string} hostname
   *   The hostname of the clicked URL.
   * @param {array} crossDomains
   *   All cross domain hostnames as JS array.
   *
   * @return {boolean} isCrossDomain
   */
  Drupal.google_analytics.isCrossDomain = function (hostname, crossDomains) {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  };

  /**
   * Check whether this is a download URL or not.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isDownload
   */
  Drupal.google_analytics.isDownload = function (url) {
    var isDownload = new RegExp('\\.(' + drupalSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
    return isDownload.test(url);
  };

  /**
   * Check whether this is an absolute internal URL or not.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isInternal
   */
  Drupal.google_analytics.isInternal = function (url) {
    var isInternal = new RegExp('^(https?):\/\/' + window.location.host, 'i');
    return isInternal.test(url);
  };

  /**
   * Check whether this is a special URL or not.
   *
   * URL types:
   *  - gotwo.module /go/* links.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isInternalSpecial
   */
  Drupal.google_analytics.isInternalSpecial = function (url) {
    var isInternalSpecial = new RegExp('(\/go\/.*)$', 'i');
    return isInternalSpecial.test(url);
  };

  /**
   * Extract the relative internal URL from an absolute internal URL.
   *
   * Examples:
   * - https://mydomain.com/node/1 -> /node/1
   * - https://example.com/foo/bar -> https://example.com/foo/bar
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {string} getPageUrl
   *   Internal website URL.
   */
  Drupal.google_analytics.getPageUrl = function (url) {
    var extractInternalUrl = new RegExp('^(https?):\/\/' + window.location.host, 'i');
    return url.replace(extractInternalUrl, '');
  };

  /**
   * Extract the download file extension from the URL.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {string} getDownloadExtension
   *   The file extension of the passed url. e.g. 'zip', 'txt'
   */
  Drupal.google_analytics.getDownloadExtension = function (url) {
    var extractDownloadextension = new RegExp('\\.(' + drupalSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
    var extension = extractDownloadextension.exec(url);
    return (extension === null) ? '' : extension[1];
  };

})(jQuery, Drupal, drupalSettings);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;
  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };
  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };
  var drupalOnce = once;
  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }
  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }
  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);;
/*! For license information please see vendors.min.js.LICENSE.txt */
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t,n){var i;!function(t,n){"use strict";"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(n,o){"use strict";var r=[],s=Object.getPrototypeOf,a=r.slice,l=r.flat?function(e){return r.flat.call(e)}:function(e){return r.concat.apply([],e)},c=r.push,d=r.indexOf,u={},p=u.toString,h=u.hasOwnProperty,f=h.toString,y=f.call(Object),g={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},v=function(e){return null!=e&&e===e.window},x=n.document,b={type:!0,src:!0,nonce:!0,noModule:!0};function w(e,t,n){var i,o,r=(n=n||x).createElement("script");if(r.text=e,t)for(i in b)(o=t[i]||t.getAttribute&&t.getAttribute(i))&&r.setAttribute(i,o);n.head.appendChild(r).parentNode.removeChild(r)}function _(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[p.call(e)]||"object":typeof e}var k=function(e,t){return new k.fn.init(e,t)};function T(e){var t=!!e&&"length"in e&&e.length,n=_(e);return!m(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}k.fn=k.prototype={jquery:"3.6.0",constructor:k,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(e){return this.pushStack(k.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(k.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(k.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:r.sort,splice:r.splice},k.extend=k.fn.extend=function(){var e,t,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||m(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)i=e[t],"__proto__"!==t&&s!==i&&(c&&i&&(k.isPlainObject(i)||(o=Array.isArray(i)))?(n=s[t],r=o&&!Array.isArray(n)?[]:o||k.isPlainObject(n)?n:{},o=!1,s[t]=k.extend(c,r,i)):void 0!==i&&(s[t]=i));return s},k.extend({expando:"jQuery"+("3.6.0"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==p.call(e))&&(!(t=s(e))||"function"==typeof(n=h.call(t,"constructor")&&t.constructor)&&f.call(n)===y)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){w(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,i=0;if(T(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(T(Object(e))?k.merge(n,"string"==typeof e?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:d.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;i<n;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){for(var i=[],o=0,r=e.length,s=!n;o<r;o++)!t(e[o],o)!==s&&i.push(e[o]);return i},map:function(e,t,n){var i,o,r=0,s=[];if(T(e))for(i=e.length;r<i;r++)null!=(o=t(e[r],r,n))&&s.push(o);else for(r in e)null!=(o=t(e[r],r,n))&&s.push(o);return l(s)},guid:1,support:g}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=r[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){u["[object "+t+"]"]=t.toLowerCase()}));var j=function(e){var t,n,i,o,r,s,a,l,c,d,u,p,h,f,y,g,m,v,x,b="sizzle"+1*new Date,w=e.document,_=0,k=0,T=le(),j=le(),C=le(),S=le(),D=function(e,t){return e===t&&(u=!0),0},A={}.hasOwnProperty,E=[],M=E.pop,O=E.push,L=E.push,N=E.slice,$=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",z="(?:\\\\[\\da-fA-F]{1,6}"+P+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",I="\\["+P+"*("+z+")(?:"+P+"*([*^$|!~]?=)"+P+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+z+"))|)"+P+"*\\]",q=":("+z+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",W=new RegExp(P+"+","g"),U=new RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),V=new RegExp("^"+P+"*,"+P+"*"),F=new RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),R=new RegExp(P+"|>"),B=new RegExp(q),Y=new RegExp("^"+z+"$"),X={ID:new RegExp("^#("+z+")"),CLASS:new RegExp("^\\.("+z+")"),TAG:new RegExp("^("+z+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+P+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},ie=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,oe=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},se=be((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{L.apply(E=N.call(w.childNodes),w.childNodes),E[w.childNodes.length].nodeType}catch(e){L={apply:E.length?function(e,t){O.apply(e,N.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function ae(e,t,i,o){var r,a,c,d,u,f,m,v=t&&t.ownerDocument,w=t?t.nodeType:9;if(i=i||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return i;if(!o&&(p(t),t=t||h,y)){if(11!==w&&(u=Z.exec(e)))if(r=u[1]){if(9===w){if(!(c=t.getElementById(r)))return i;if(c.id===r)return i.push(c),i}else if(v&&(c=v.getElementById(r))&&x(t,c)&&c.id===r)return i.push(c),i}else{if(u[2])return L.apply(i,t.getElementsByTagName(e)),i;if((r=u[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(i,t.getElementsByClassName(r)),i}if(n.qsa&&!S[e+" "]&&(!g||!g.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(m=e,v=t,1===w&&(R.test(e)||F.test(e))){for((v=ee.test(e)&&me(t.parentNode)||t)===t&&n.scope||((d=t.getAttribute("id"))?d=d.replace(ie,oe):t.setAttribute("id",d=b)),a=(f=s(e)).length;a--;)f[a]=(d?"#"+d:":scope")+" "+xe(f[a]);m=f.join(",")}try{return L.apply(i,v.querySelectorAll(m)),i}catch(t){S(e,!0)}finally{d===b&&t.removeAttribute("id")}}}return l(e.replace(U,"$1"),t,i,o)}function le(){var e=[];return function t(n,o){return e.push(n+" ")>i.cacheLength&&delete t[e.shift()],t[n+" "]=o}}function ce(e){return e[b]=!0,e}function de(e){var t=h.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),o=n.length;o--;)i.attrHandle[n[o]]=t}function pe(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function he(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function fe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ye(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&se(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function ge(e){return ce((function(t){return t=+t,ce((function(n,i){for(var o,r=e([],n.length,t),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))}))}))}function me(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ae.support={},r=ae.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!K.test(t||n&&n.nodeName||"HTML")},p=ae.setDocument=function(e){var t,o,s=e?e.ownerDocument||e:w;return s!=h&&9===s.nodeType&&s.documentElement?(f=(h=s).documentElement,y=!r(h),w!=h&&(o=h.defaultView)&&o.top!==o&&(o.addEventListener?o.addEventListener("unload",re,!1):o.attachEvent&&o.attachEvent("onunload",re)),n.scope=de((function(e){return f.appendChild(e).appendChild(h.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.attributes=de((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=de((function(e){return e.appendChild(h.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=J.test(h.getElementsByClassName),n.getById=de((function(e){return f.appendChild(e).id=b,!h.getElementsByName||!h.getElementsByName(b).length})),n.getById?(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&y){var n=t.getElementById(e);return n?[n]:[]}}):(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&y){var n,i,o,r=t.getElementById(e);if(r){if((n=r.getAttributeNode("id"))&&n.value===e)return[r];for(o=t.getElementsByName(e),i=0;r=o[i++];)if((n=r.getAttributeNode("id"))&&n.value===e)return[r]}return[]}}),i.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e);if("*"===e){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},i.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&y)return t.getElementsByClassName(e)},m=[],g=[],(n.qsa=J.test(h.querySelectorAll))&&(de((function(e){var t;f.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+H+")"),e.querySelectorAll("[id~="+b+"-]").length||g.push("~="),(t=h.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||g.push("\\["+P+"*name"+P+"*="+P+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||g.push(".#.+[+~]"),e.querySelectorAll("\\\f"),g.push("[\\r\\n\\f]")})),de((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=h.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+P+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),f.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")}))),(n.matchesSelector=J.test(v=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&de((function(e){n.disconnectedMatch=v.call(e,"*"),v.call(e,"[s!='']:x"),m.push("!=",q)})),g=g.length&&new RegExp(g.join("|")),m=m.length&&new RegExp(m.join("|")),t=J.test(f.compareDocumentPosition),x=t||J.test(f.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return u=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===i?e==h||e.ownerDocument==w&&x(w,e)?-1:t==h||t.ownerDocument==w&&x(w,t)?1:d?$(d,e)-$(d,t):0:4&i?-1:1)}:function(e,t){if(e===t)return u=!0,0;var n,i=0,o=e.parentNode,r=t.parentNode,s=[e],a=[t];if(!o||!r)return e==h?-1:t==h?1:o?-1:r?1:d?$(d,e)-$(d,t):0;if(o===r)return pe(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;s[i]===a[i];)i++;return i?pe(s[i],a[i]):s[i]==w?-1:a[i]==w?1:0},h):h},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if(p(e),n.matchesSelector&&y&&!S[t+" "]&&(!m||!m.test(t))&&(!g||!g.test(t)))try{var i=v.call(e,t);if(i||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){S(t,!0)}return ae(t,h,null,[e]).length>0},ae.contains=function(e,t){return(e.ownerDocument||e)!=h&&p(e),x(e,t)},ae.attr=function(e,t){(e.ownerDocument||e)!=h&&p(e);var o=i.attrHandle[t.toLowerCase()],r=o&&A.call(i.attrHandle,t.toLowerCase())?o(e,t,!y):void 0;return void 0!==r?r:n.attributes||!y?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},ae.escape=function(e){return(e+"").replace(ie,oe)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ae.uniqueSort=function(e){var t,i=[],o=0,r=0;if(u=!n.detectDuplicates,d=!n.sortStable&&e.slice(0),e.sort(D),u){for(;t=e[r++];)t===e[r]&&(o=i.push(r));for(;o--;)e.splice(i[o],1)}return d=null,e},o=ae.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=o(t);return n},(i=ae.selectors={cacheLength:50,createPseudo:ce,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return X.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&B.test(n)&&(t=s(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=T[e+" "];return t||(t=new RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&T(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(i){var o=ae.attr(i,e);return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,o){var r="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===o?function(e){return!!e.parentNode}:function(t,n,l){var c,d,u,p,h,f,y=r!==s?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),v=!l&&!a,x=!1;if(g){if(r){for(;y;){for(p=t;p=p[y];)if(a?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;f=y="only"===e&&!f&&"nextSibling"}return!0}if(f=[s?g.firstChild:g.lastChild],s&&v){for(x=(h=(c=(d=(u=(p=g)[b]||(p[b]={}))[p.uniqueID]||(u[p.uniqueID]={}))[e]||[])[0]===_&&c[1])&&c[2],p=h&&g.childNodes[h];p=++h&&p&&p[y]||(x=h=0)||f.pop();)if(1===p.nodeType&&++x&&p===t){d[e]=[_,h,x];break}}else if(v&&(x=h=(c=(d=(u=(p=t)[b]||(p[b]={}))[p.uniqueID]||(u[p.uniqueID]={}))[e]||[])[0]===_&&c[1]),!1===x)for(;(p=++h&&p&&p[y]||(x=h=0)||f.pop())&&((a?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++x||(v&&((d=(u=p[b]||(p[b]={}))[p.uniqueID]||(u[p.uniqueID]={}))[e]=[_,x]),p!==t)););return(x-=o)===i||x%i==0&&x/i>=0}}},PSEUDO:function(e,t){var n,o=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);return o[b]?o(t):o.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ce((function(e,n){for(var i,r=o(e,t),s=r.length;s--;)e[i=$(e,r[s])]=!(n[i]=r[s])})):function(e){return o(e,0,n)}):o}},pseudos:{not:ce((function(e){var t=[],n=[],i=a(e.replace(U,"$1"));return i[b]?ce((function(e,t,n,o){for(var r,s=i(e,null,o,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r))})):function(e,o,r){return t[0]=e,i(t,null,r,n),t[0]=null,!n.pop()}})),has:ce((function(e){return function(t){return ae(e,t).length>0}})),contains:ce((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||o(t)).indexOf(e)>-1}})),lang:ce((function(e){return Y.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=y?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ye(!1),disabled:ye(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ge((function(){return[0]})),last:ge((function(e,t){return[t-1]})),eq:ge((function(e,t,n){return[n<0?n+t:n]})),even:ge((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:ge((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:ge((function(e,t,n){for(var i=n<0?n+t:n>t?t:n;--i>=0;)e.push(i);return e})),gt:ge((function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e}))}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=he(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=fe(t);function ve(){}function xe(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function be(e,t,n){var i=t.dir,o=t.next,r=o||i,s=n&&"parentNode"===r,a=k++;return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,o);return!1}:function(t,n,l){var c,d,u,p=[_,a];if(l){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||s)if(d=(u=t[b]||(t[b]={}))[t.uniqueID]||(u[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[i]||t;else{if((c=d[r])&&c[0]===_&&c[1]===a)return p[2]=c[2];if(d[r]=p,p[2]=e(t,n,l))return!0}return!1}}function we(e){return e.length>1?function(t,n,i){for(var o=e.length;o--;)if(!e[o](t,n,i))return!1;return!0}:e[0]}function _e(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(r=e[a])&&(n&&!n(r,i,o)||(s.push(r),c&&t.push(a)));return s}function ke(e,t,n,i,o,r){return i&&!i[b]&&(i=ke(i)),o&&!o[b]&&(o=ke(o,r)),ce((function(r,s,a,l){var c,d,u,p=[],h=[],f=s.length,y=r||function(e,t,n){for(var i=0,o=t.length;i<o;i++)ae(e,t[i],n);return n}(t||"*",a.nodeType?[a]:a,[]),g=!e||!r&&t?y:_e(y,p,e,a,l),m=n?o||(r?e:f||i)?[]:s:g;if(n&&n(g,m,a,l),i)for(c=_e(m,h),i(c,[],a,l),d=c.length;d--;)(u=c[d])&&(m[h[d]]=!(g[h[d]]=u));if(r){if(o||e){if(o){for(c=[],d=m.length;d--;)(u=m[d])&&c.push(g[d]=u);o(null,m=[],c,l)}for(d=m.length;d--;)(u=m[d])&&(c=o?$(r,u):p[d])>-1&&(r[c]=!(s[c]=u))}}else m=_e(m===s?m.splice(f,m.length):m),o?o(null,s,m,l):L.apply(s,m)}))}function Te(e){for(var t,n,o,r=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,d=be((function(e){return e===t}),a,!0),u=be((function(e){return $(t,e)>-1}),a,!0),p=[function(e,n,i){var o=!s&&(i||n!==c)||((t=n).nodeType?d(e,n,i):u(e,n,i));return t=null,o}];l<r;l++)if(n=i.relative[e[l].type])p=[be(we(p),n)];else{if((n=i.filter[e[l].type].apply(null,e[l].matches))[b]){for(o=++l;o<r&&!i.relative[e[o].type];o++);return ke(l>1&&we(p),l>1&&xe(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(U,"$1"),n,l<o&&Te(e.slice(l,o)),o<r&&Te(e=e.slice(o)),o<r&&xe(e))}p.push(n)}return we(p)}return ve.prototype=i.filters=i.pseudos,i.setFilters=new ve,s=ae.tokenize=function(e,t){var n,o,r,s,a,l,c,d=j[e+" "];if(d)return t?0:d.slice(0);for(a=e,l=[],c=i.preFilter;a;){for(s in n&&!(o=V.exec(a))||(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),n=!1,(o=F.exec(a))&&(n=o.shift(),r.push({value:n,type:o[0].replace(U," ")}),a=a.slice(n.length)),i.filter)!(o=X[s].exec(a))||c[s]&&!(o=c[s](o))||(n=o.shift(),r.push({value:n,type:s,matches:o}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ae.error(e):j(e,l).slice(0)},a=ae.compile=function(e,t){var n,o=[],r=[],a=C[e+" "];if(!a){for(t||(t=s(e)),n=t.length;n--;)(a=Te(t[n]))[b]?o.push(a):r.push(a);(a=C(e,function(e,t){var n=t.length>0,o=e.length>0,r=function(r,s,a,l,d){var u,f,g,m=0,v="0",x=r&&[],b=[],w=c,k=r||o&&i.find.TAG("*",d),T=_+=null==w?1:Math.random()||.1,j=k.length;for(d&&(c=s==h||s||d);v!==j&&null!=(u=k[v]);v++){if(o&&u){for(f=0,s||u.ownerDocument==h||(p(u),a=!y);g=e[f++];)if(g(u,s||h,a)){l.push(u);break}d&&(_=T)}n&&((u=!g&&u)&&m--,r&&x.push(u))}if(m+=v,n&&v!==m){for(f=0;g=t[f++];)g(x,b,s,a);if(r){if(m>0)for(;v--;)x[v]||b[v]||(b[v]=M.call(l));b=_e(b)}L.apply(l,b),d&&!r&&b.length>0&&m+t.length>1&&ae.uniqueSort(l)}return d&&(_=T,c=w),x};return n?ce(r):r}(r,o))).selector=e}return a},l=ae.select=function(e,t,n,o){var r,l,c,d,u,p="function"==typeof e&&e,h=!o&&s(e=p.selector||e);if(n=n||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&9===t.nodeType&&y&&i.relative[l[1].type]){if(!(t=(i.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(r=X.needsContext.test(e)?0:l.length;r--&&(c=l[r],!i.relative[d=c.type]);)if((u=i.find[d])&&(o=u(c.matches[0].replace(te,ne),ee.test(l[0].type)&&me(t.parentNode)||t))){if(l.splice(r,1),!(e=o.length&&xe(l)))return L.apply(n,o),n;break}}return(p||a(e,h))(o,t,!y,n,!t||ee.test(e)&&me(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!u,p(),n.sortDetached=de((function(e){return 1&e.compareDocumentPosition(h.createElement("fieldset"))})),de((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||ue("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&de((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||ue("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),de((function(e){return null==e.getAttribute("disabled")}))||ue(H,(function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null})),ae}(n);k.find=j,k.expr=j.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=j.uniqueSort,k.text=j.getText,k.isXMLDoc=j.isXML,k.contains=j.contains,k.escapeSelector=j.escape;var C=function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&k(e).is(n))break;i.push(e)}return i},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var E=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function M(e,t,n){return m(t)?k.grep(e,(function(e,i){return!!t.call(e,i,e)!==n})):t.nodeType?k.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?k.grep(e,(function(e){return d.call(t,e)>-1!==n})):k.filter(t,e,n)}k.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?k.find.matchesSelector(i,e)?[i]:[]:k.find.matches(e,k.grep(t,(function(e){return 1===e.nodeType})))},k.fn.extend({find:function(e){var t,n,i=this.length,o=this;if("string"!=typeof e)return this.pushStack(k(e).filter((function(){for(t=0;t<i;t++)if(k.contains(o[t],this))return!0})));for(n=this.pushStack([]),t=0;t<i;t++)k.find(e,o[t],n);return i>1?k.uniqueSort(n):n},filter:function(e){return this.pushStack(M(this,e||[],!1))},not:function(e){return this.pushStack(M(this,e||[],!0))},is:function(e){return!!M(this,"string"==typeof e&&D.test(e)?k(e):e||[],!1).length}});var O,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||O,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:x,!0)),E.test(i[1])&&k.isPlainObject(t))for(i in t)m(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=x.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,O=k(x);var N=/^(?:parents|prev(?:Until|All))/,$={children:!0,contents:!0,next:!0,prev:!0};function H(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0}))},closest:function(e,t){var n,i=0,o=this.length,r=[],s="string"!=typeof e&&k(e);if(!D.test(e))for(;i<o;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&k.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(r.length>1?k.uniqueSort(r):r)},index:function(e){return e?"string"==typeof e?d.call(k(e),this[0]):d.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return C(e,"parentNode")},parentsUntil:function(e,t,n){return C(e,"parentNode",n)},next:function(e){return H(e,"nextSibling")},prev:function(e){return H(e,"previousSibling")},nextAll:function(e){return C(e,"nextSibling")},prevAll:function(e){return C(e,"previousSibling")},nextUntil:function(e,t,n){return C(e,"nextSibling",n)},prevUntil:function(e,t,n){return C(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return null!=e.contentDocument&&s(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},(function(e,t){k.fn[e]=function(n,i){var o=k.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=k.filter(i,o)),this.length>1&&($[e]||k.uniqueSort(o),N.test(e)&&o.reverse()),this.pushStack(o)}}));var P=/[^\x20\t\r\n\f]+/g;function z(e){return e}function I(e){throw e}function q(e,t,n,i){var o;try{e&&m(o=e.promise)?o.call(e).done(t).fail(n):e&&m(o=e.then)?o.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return k.each(e.match(P)||[],(function(e,n){t[n]=!0})),t}(e):k.extend({},e);var t,n,i,o,r=[],s=[],a=-1,l=function(){for(o=o||e.once,i=t=!0;s.length;a=-1)for(n=s.shift();++a<r.length;)!1===r[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=r.length,n=!1);e.memory||(n=!1),t=!1,o&&(r=n?[]:"")},c={add:function(){return r&&(n&&!t&&(a=r.length-1,s.push(n)),function t(n){k.each(n,(function(n,i){m(i)?e.unique&&c.has(i)||r.push(i):i&&i.length&&"string"!==_(i)&&t(i)}))}(arguments),n&&!t&&l()),this},remove:function(){return k.each(arguments,(function(e,t){for(var n;(n=k.inArray(t,r,n))>-1;)r.splice(n,1),n<=a&&a--})),this},has:function(e){return e?k.inArray(e,r)>-1:r.length>0},empty:function(){return r&&(r=[]),this},disable:function(){return o=s=[],r=n="",this},disabled:function(){return!r},lock:function(){return o=s=[],n||t||(r=n=""),this},locked:function(){return!!o},fireWith:function(e,n){return o||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},k.extend({Deferred:function(e){var t=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",o={state:function(){return i},always:function(){return r.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},pipe:function(){var e=arguments;return k.Deferred((function(n){k.each(t,(function(t,i){var o=m(e[i[4]])&&e[i[4]];r[i[1]]((function(){var e=o&&o.apply(this,arguments);e&&m(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,o?[e]:arguments)}))})),e=null})).promise()},then:function(e,i,o){var r=0;function s(e,t,i,o){return function(){var a=this,l=arguments,c=function(){var n,c;if(!(e<r)){if((n=i.apply(a,l))===t.promise())throw new TypeError("Thenable self-resolution");c=n&&("object"==typeof n||"function"==typeof n)&&n.then,m(c)?o?c.call(n,s(r,t,z,o),s(r,t,I,o)):(r++,c.call(n,s(r,t,z,o),s(r,t,I,o),s(r,t,z,t.notifyWith))):(i!==z&&(a=void 0,l=[n]),(o||t.resolveWith)(a,l))}},d=o?c:function(){try{c()}catch(n){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(n,d.stackTrace),e+1>=r&&(i!==I&&(a=void 0,l=[n]),t.rejectWith(a,l))}};e?d():(k.Deferred.getStackHook&&(d.stackTrace=k.Deferred.getStackHook()),n.setTimeout(d))}}return k.Deferred((function(n){t[0][3].add(s(0,n,m(o)?o:z,n.notifyWith)),t[1][3].add(s(0,n,m(e)?e:z)),t[2][3].add(s(0,n,m(i)?i:I))})).promise()},promise:function(e){return null!=e?k.extend(e,o):o}},r={};return k.each(t,(function(e,n){var s=n[2],a=n[5];o[n[1]]=s.add,a&&s.add((function(){i=a}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),s.add(n[3].fire),r[n[0]]=function(){return r[n[0]+"With"](this===r?void 0:this,arguments),this},r[n[0]+"With"]=s.fireWith})),o.promise(r),e&&e.call(r,r),r},when:function(e){var t=arguments.length,n=t,i=Array(n),o=a.call(arguments),r=k.Deferred(),s=function(e){return function(n){i[e]=this,o[e]=arguments.length>1?a.call(arguments):n,--t||r.resolveWith(i,o)}};if(t<=1&&(q(e,r.done(s(n)).resolve,r.reject,!t),"pending"===r.state()||m(o[n]&&o[n].then)))return r.then();for(;n--;)q(o[n],s(n),r.reject);return r.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&W.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){n.setTimeout((function(){throw e}))};var U=k.Deferred();function V(){x.removeEventListener("DOMContentLoaded",V),n.removeEventListener("load",V),k.ready()}k.fn.ready=function(e){return U.then(e).catch((function(e){k.readyException(e)})),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0,!0!==e&&--k.readyWait>0||U.resolveWith(x,[k]))}}),k.ready.then=U.then,"complete"===x.readyState||"loading"!==x.readyState&&!x.documentElement.doScroll?n.setTimeout(k.ready):(x.addEventListener("DOMContentLoaded",V),n.addEventListener("load",V));var F=function(e,t,n,i,o,r,s){var a=0,l=e.length,c=null==n;if("object"===_(n))for(a in o=!0,n)F(e,t,a,n[a],!0,r,s);else if(void 0!==i&&(o=!0,m(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(k(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return o?e:c?t.call(e):l?t(e[0],n):r},R=/^-ms-/,B=/-([a-z])/g;function Y(e,t){return t.toUpperCase()}function X(e){return e.replace(R,"ms-").replace(B,Y)}var K=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=k.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},K(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,o=this.cache(e);if("string"==typeof t)o[X(t)]=n;else for(i in t)o[X(i)]=t[i];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in i?[t]:t.match(P)||[]).length;for(;n--;)delete i[t[n]]}(void 0===t||k.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var G=new Q,J=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}(n)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||G.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return G.access(e,t,n)},_removeData:function(e,t){G.remove(e,t)}}),k.fn.extend({data:function(e,t){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===e){if(this.length&&(o=J.get(r),1===r.nodeType&&!G.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=X(i.slice(5)),te(r,i,o[i]));G.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each((function(){J.set(this,e)})):F(this,(function(t){var n;if(r&&void 0===t)return void 0!==(n=J.get(r,e))||void 0!==(n=te(r,e))?n:void 0;this.each((function(){J.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){J.remove(this,e)}))}}),k.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=G.get(e,t),n&&(!i||Array.isArray(n)?i=G.access(e,t,k.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),i=n.length,o=n.shift(),r=k._queueHooks(e,t);"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,(function(){k.dequeue(e,t)}),r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return G.get(e,n)||G.access(e,n,{empty:k.Callbacks("once memory").add((function(){G.remove(e,[t+"queue",n])}))})}}),k.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?k.queue(this[0],e):void 0===t?this:this.each((function(){var n=k.queue(this,e,t);k._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&k.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){k.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,o=k.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=G.get(r[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(t)}});var ne=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+ne+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],re=x.documentElement,se=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};re.getRootNode&&(se=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var le=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&se(e)&&"none"===k.css(e,"display")};function ce(e,t,n,i){var o,r,s=20,a=i?function(){return i.cur()}:function(){return k.css(e,t,"")},l=a(),c=n&&n[3]||(k.cssNumber[t]?"":"px"),d=e.nodeType&&(k.cssNumber[t]||"px"!==c&&+l)&&ie.exec(k.css(e,t));if(d&&d[3]!==c){for(l/=2,c=c||d[3],d=+l||1;s--;)k.style(e,t,d+c),(1-r)*(1-(r=a()/l||.5))<=0&&(s=0),d/=r;d*=2,k.style(e,t,d+c),n=n||[]}return n&&(d=+d||+l||0,o=n[1]?d+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=d,i.end=o)),o}var de={};function ue(e){var t,n=e.ownerDocument,i=e.nodeName,o=de[i];return o||(t=n.body.appendChild(n.createElement(i)),o=k.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),de[i]=o,o)}function pe(e,t){for(var n,i,o=[],r=0,s=e.length;r<s;r++)(i=e[r]).style&&(n=i.style.display,t?("none"===n&&(o[r]=G.get(i,"display")||null,o[r]||(i.style.display="")),""===i.style.display&&le(i)&&(o[r]=ue(i))):"none"!==n&&(o[r]="none",G.set(i,"display",n)));for(r=0;r<s;r++)null!=o[r]&&(e[r].style.display=o[r]);return e}k.fn.extend({show:function(){return pe(this,!0)},hide:function(){return pe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){le(this)?k(this).show():k(this).hide()}))}});var he,fe,ye=/^(?:checkbox|radio)$/i,ge=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,me=/^$|^module$|\/(?:java|ecma)script/i;he=x.createDocumentFragment().appendChild(x.createElement("div")),(fe=x.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),he.appendChild(fe),g.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",g.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue,he.innerHTML="<option></option>",g.option=!!he.lastChild;var ve={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function xe(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function be(e,t){for(var n=0,i=e.length;n<i;n++)G.set(e[n],"globalEval",!t||G.get(t[n],"globalEval"))}ve.tbody=ve.tfoot=ve.colgroup=ve.caption=ve.thead,ve.th=ve.td,g.option||(ve.optgroup=ve.option=[1,"<select multiple='multiple'>","</select>"]);var we=/<|&#?\w+;/;function _e(e,t,n,i,o){for(var r,s,a,l,c,d,u=t.createDocumentFragment(),p=[],h=0,f=e.length;h<f;h++)if((r=e[h])||0===r)if("object"===_(r))k.merge(p,r.nodeType?[r]:r);else if(we.test(r)){for(s=s||u.appendChild(t.createElement("div")),a=(ge.exec(r)||["",""])[1].toLowerCase(),l=ve[a]||ve._default,s.innerHTML=l[1]+k.htmlPrefilter(r)+l[2],d=l[0];d--;)s=s.lastChild;k.merge(p,s.childNodes),(s=u.firstChild).textContent=""}else p.push(t.createTextNode(r));for(u.textContent="",h=0;r=p[h++];)if(i&&k.inArray(r,i)>-1)o&&o.push(r);else if(c=se(r),s=xe(u.appendChild(r),"script"),c&&be(s),n)for(d=0;r=s[d++];)me.test(r.type||"")&&n.push(r);return u}var ke=/^([^.]*)(?:\.(.+)|)/;function Te(){return!0}function je(){return!1}function Ce(e,t){return e===function(){try{return x.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,i,o,r){var s,a;if("object"==typeof t){for(a in"string"!=typeof n&&(i=i||n,n=void 0),t)Se(e,a,n,i,t[a],r);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=je;else if(!o)return e;return 1===r&&(s=o,(o=function(e){return k().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=k.guid++)),e.each((function(){k.event.add(this,t,o,i,n)}))}function De(e,t,n){n?(G.set(e,t,!1),k.event.add(e,t,{namespace:!1,handler:function(e){var i,o,r=G.get(this,t);if(1&e.isTrigger&&this[t]){if(r.length)(k.event.special[t]||{}).delegateType&&e.stopPropagation();else if(r=a.call(arguments),G.set(this,t,r),i=n(this,t),this[t](),r!==(o=G.get(this,t))||i?G.set(this,t,!1):o={},r!==o)return e.stopImmediatePropagation(),e.preventDefault(),o&&o.value}else r.length&&(G.set(this,t,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===G.get(e,t)&&k.event.add(e,t,Te)}k.event={global:{},add:function(e,t,n,i,o){var r,s,a,l,c,d,u,p,h,f,y,g=G.get(e);if(K(e))for(n.handler&&(n=(r=n).handler,o=r.selector),o&&k.find.matchesSelector(re,o),n.guid||(n.guid=k.guid++),(l=g.events)||(l=g.events=Object.create(null)),(s=g.handle)||(s=g.handle=function(t){return void 0!==k&&k.event.triggered!==t.type?k.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(P)||[""]).length;c--;)h=y=(a=ke.exec(t[c])||[])[1],f=(a[2]||"").split(".").sort(),h&&(u=k.event.special[h]||{},h=(o?u.delegateType:u.bindType)||h,u=k.event.special[h]||{},d=k.extend({type:h,origType:y,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&k.expr.match.needsContext.test(o),namespace:f.join(".")},r),(p=l[h])||((p=l[h]=[]).delegateCount=0,u.setup&&!1!==u.setup.call(e,i,f,s)||e.addEventListener&&e.addEventListener(h,s)),u.add&&(u.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),o?p.splice(p.delegateCount++,0,d):p.push(d),k.event.global[h]=!0)},remove:function(e,t,n,i,o){var r,s,a,l,c,d,u,p,h,f,y,g=G.hasData(e)&&G.get(e);if(g&&(l=g.events)){for(c=(t=(t||"").match(P)||[""]).length;c--;)if(h=y=(a=ke.exec(t[c])||[])[1],f=(a[2]||"").split(".").sort(),h){for(u=k.event.special[h]||{},p=l[h=(i?u.delegateType:u.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=p.length;r--;)d=p[r],!o&&y!==d.origType||n&&n.guid!==d.guid||a&&!a.test(d.namespace)||i&&i!==d.selector&&("**"!==i||!d.selector)||(p.splice(r,1),d.selector&&p.delegateCount--,u.remove&&u.remove.call(e,d));s&&!p.length&&(u.teardown&&!1!==u.teardown.call(e,f,g.handle)||k.removeEvent(e,h,g.handle),delete l[h])}else for(h in l)k.event.remove(e,h+t[c],n,i,!0);k.isEmptyObject(l)&&G.remove(e,"handle events")}},dispatch:function(e){var t,n,i,o,r,s,a=new Array(arguments.length),l=k.event.fix(e),c=(G.get(this,"events")||Object.create(null))[l.type]||[],d=k.event.special[l.type]||{};for(a[0]=l,t=1;t<arguments.length;t++)a[t]=arguments[t];if(l.delegateTarget=this,!d.preDispatch||!1!==d.preDispatch.call(this,l)){for(s=k.event.handlers.call(this,l,c),t=0;(o=s[t++])&&!l.isPropagationStopped();)for(l.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==r.namespace&&!l.rnamespace.test(r.namespace)||(l.handleObj=r,l.data=r.data,void 0!==(i=((k.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,a))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,i,o,r,s,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(r=[],s={},n=0;n<l;n++)void 0===s[o=(i=t[n]).selector+" "]&&(s[o]=i.needsContext?k(o,this).index(c)>-1:k.find(o,this,null,[c]).length),s[o]&&r.push(i);r.length&&a.push({elem:c,handlers:r})}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(k.Event.prototype,e,{enumerable:!0,configurable:!0,get:m(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return ye.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",Te),!1},trigger:function(e){var t=this||e;return ye.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return ye.test(t.type)&&t.click&&A(t,"input")&&G.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Te:je,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:je,isPropagationStopped:je,isImmediatePropagationStopped:je,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Te,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Te,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Te,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},(function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ce),!1},trigger:function(){return De(this,e),!0},_default:function(){return!0},delegateType:t}})),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){k.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,o=e.relatedTarget,r=e.handleObj;return o&&(o===i||k.contains(i,o))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}})),k.fn.extend({on:function(e,t,n,i){return Se(this,e,t,n,i)},one:function(e,t,n,i){return Se(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,k(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=je),this.each((function(){k.event.remove(this,e,n,t)}))}});var Ae=/<script|<style|<link/i,Ee=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ne(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function $e(e,t){var n,i,o,r,s,a;if(1===t.nodeType){if(G.hasData(e)&&(a=G.get(e).events))for(o in G.remove(t,"handle events"),a)for(n=0,i=a[o].length;n<i;n++)k.event.add(t,o,a[o][n]);J.hasData(e)&&(r=J.access(e),s=k.extend({},r),J.set(t,s))}}function He(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ye.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Pe(e,t,n,i){t=l(t);var o,r,s,a,c,d,u=0,p=e.length,h=p-1,f=t[0],y=m(f);if(y||p>1&&"string"==typeof f&&!g.checkClone&&Ee.test(f))return e.each((function(o){var r=e.eq(o);y&&(t[0]=f.call(this,o,r.html())),Pe(r,t,n,i)}));if(p&&(r=(o=_e(t,e[0].ownerDocument,!1,e,i)).firstChild,1===o.childNodes.length&&(o=r),r||i)){for(a=(s=k.map(xe(o,"script"),Le)).length;u<p;u++)c=o,u!==h&&(c=k.clone(c,!0,!0),a&&k.merge(s,xe(c,"script"))),n.call(e[u],c,u);if(a)for(d=s[s.length-1].ownerDocument,k.map(s,Ne),u=0;u<a;u++)c=s[u],me.test(c.type||"")&&!G.access(c,"globalEval")&&k.contains(d,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?k._evalUrl&&!c.noModule&&k._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},d):w(c.textContent.replace(Me,""),c,d))}return e}function ze(e,t,n){for(var i,o=t?k.filter(t,e):e,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||k.cleanData(xe(i)),i.parentNode&&(n&&se(i)&&be(xe(i,"script")),i.parentNode.removeChild(i));return e}k.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var i,o,r,s,a=e.cloneNode(!0),l=se(e);if(!(g.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(s=xe(a),i=0,o=(r=xe(e)).length;i<o;i++)He(r[i],s[i]);if(t)if(n)for(r=r||xe(e),s=s||xe(a),i=0,o=r.length;i<o;i++)$e(r[i],s[i]);else $e(e,a);return(s=xe(a,"script")).length>0&&be(s,!l&&xe(e,"script")),a},cleanData:function(e){for(var t,n,i,o=k.event.special,r=0;void 0!==(n=e[r]);r++)if(K(n)){if(t=n[G.expando]){if(t.events)for(i in t.events)o[i]?k.event.remove(n,i):k.removeEvent(n,i,t.handle);n[G.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return ze(this,e,!0)},remove:function(e){return ze(this,e)},text:function(e){return F(this,(function(e){return void 0===e?k.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Pe(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)}))},prepend:function(){return Pe(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return Pe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Pe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(xe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return k.clone(this,e,t)}))},html:function(e){return F(this,(function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ve[(ge.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(xe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return Pe(this,arguments,(function(t){var n=this.parentNode;k.inArray(this,e)<0&&(k.cleanData(xe(this)),n&&n.replaceChild(t,this))}),e)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){k.fn[e]=function(e){for(var n,i=[],o=k(e),r=o.length-1,s=0;s<=r;s++)n=s===r?this:this.clone(!0),k(o[s])[t](n),c.apply(i,n.get());return this.pushStack(i)}}));var Ie=new RegExp("^("+ne+")(?!px)[a-z%]+$","i"),qe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},We=function(e,t,n){var i,o,r={};for(o in t)r[o]=e.style[o],e.style[o]=t[o];for(o in i=n.call(e),t)e.style[o]=r[o];return i},Ue=new RegExp(oe.join("|"),"i");function Ve(e,t,n){var i,o,r,s,a=e.style;return(n=n||qe(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||se(e)||(s=k.style(e,t)),!g.pixelBoxStyles()&&Ie.test(s)&&Ue.test(t)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(d){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",d.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(c).appendChild(d);var e=n.getComputedStyle(d);i="1%"!==e.top,l=12===t(e.marginLeft),d.style.right="60%",s=36===t(e.right),o=36===t(e.width),d.style.position="absolute",r=12===t(d.offsetWidth/3),re.removeChild(c),d=null}}function t(e){return Math.round(parseFloat(e))}var i,o,r,s,a,l,c=x.createElement("div"),d=x.createElement("div");d.style&&(d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",g.clearCloneStyle="content-box"===d.style.backgroundClip,k.extend(g,{boxSizingReliable:function(){return e(),o},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),i},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),r},reliableTrDimensions:function(){var e,t,i,o;return null==a&&(e=x.createElement("table"),t=x.createElement("tr"),i=x.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",i.style.height="9px",i.style.display="block",re.appendChild(e).appendChild(t).appendChild(i),o=n.getComputedStyle(t),a=parseInt(o.height,10)+parseInt(o.borderTopWidth,10)+parseInt(o.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Re=["Webkit","Moz","ms"],Be=x.createElement("div").style,Ye={};function Xe(e){var t=k.cssProps[e]||Ye[e];return t||(e in Be?e:Ye[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Re.length;n--;)if((e=Re[n]+t)in Be)return e}(e)||e)}var Ke=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Ge={position:"absolute",visibility:"hidden",display:"block"},Je={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var i=ie.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function et(e,t,n,i,o,r){var s="width"===t?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=k.css(e,n+oe[s],!0,o)),i?("content"===n&&(l-=k.css(e,"padding"+oe[s],!0,o)),"margin"!==n&&(l-=k.css(e,"border"+oe[s]+"Width",!0,o))):(l+=k.css(e,"padding"+oe[s],!0,o),"padding"!==n?l+=k.css(e,"border"+oe[s]+"Width",!0,o):a+=k.css(e,"border"+oe[s]+"Width",!0,o));return!i&&r>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-r-l-a-.5))||0),l}function tt(e,t,n){var i=qe(e),o=(!g.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,i),r=o,s=Ve(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);if(Ie.test(s)){if(!n)return s;s="auto"}return(!g.boxSizingReliable()&&o||!g.reliableTrDimensions()&&A(e,"tr")||"auto"===s||!parseFloat(s)&&"inline"===k.css(e,"display",!1,i))&&e.getClientRects().length&&(o="border-box"===k.css(e,"boxSizing",!1,i),(r=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+et(e,t,n||(o?"border":"content"),r,i,s)+"px"}function nt(e,t,n,i,o){return new nt.prototype.init(e,t,n,i,o)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ve(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=X(t),l=Qe.test(t),c=e.style;if(l||(t=Xe(a)),s=k.cssHooks[t]||k.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:c[t];"string"===(r=typeof n)&&(o=ie.exec(n))&&o[1]&&(n=ce(e,t,o),r="number"),null!=n&&n==n&&("number"!==r||l||(n+=o&&o[3]||(k.cssNumber[a]?"":"px")),g.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var o,r,s,a=X(t);return Qe.test(t)||(t=Xe(a)),(s=k.cssHooks[t]||k.cssHooks[a])&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=Ve(e,t,i)),"normal"===o&&t in Je&&(o=Je[t]),""===n||n?(r=parseFloat(o),!0===n||isFinite(r)?r||0:o):o}}),k.each(["height","width"],(function(e,t){k.cssHooks[t]={get:function(e,n,i){if(n)return!Ke.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,t,i):We(e,Ge,(function(){return tt(e,t,i)}))},set:function(e,n,i){var o,r=qe(e),s=!g.scrollboxSize()&&"absolute"===r.position,a=(s||i)&&"border-box"===k.css(e,"boxSizing",!1,r),l=i?et(e,t,i,a,r):0;return a&&s&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(r[t])-et(e,t,"border",!1,r)-.5)),l&&(o=ie.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=k.css(e,t)),Ze(0,n,l)}}})),k.cssHooks.marginLeft=Fe(g.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Ve(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),k.each({margin:"",padding:"",border:"Width"},(function(e,t){k.cssHooks[e+t]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];i<4;i++)o[e+oe[i]+t]=r[i]||r[i-2]||r[0];return o}},"margin"!==e&&(k.cssHooks[e+t].set=Ze)})),k.fn.extend({css:function(e,t){return F(this,(function(e,t,n){var i,o,r={},s=0;if(Array.isArray(t)){for(i=qe(e),o=t.length;s<o;s++)r[t[s]]=k.css(e,t[s],!1,i);return r}return void 0!==n?k.style(e,t,n):k.css(e,t)}),e,t,arguments.length>1)}}),k.Tween=nt,nt.prototype={constructor:nt,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}},nt.prototype.init.prototype=nt.prototype,nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}},nt.propHooks.scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var it,ot,rt=/^(?:toggle|show|hide)$/,st=/queueHooks$/;function at(){ot&&(!1===x.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(at):n.setTimeout(at,k.fx.interval),k.fx.tick())}function lt(){return n.setTimeout((function(){it=void 0})),it=Date.now()}function ct(e,t){var n,i=0,o={height:e};for(t=t?1:0;i<4;i+=2-t)o["margin"+(n=oe[i])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function dt(e,t,n){for(var i,o=(ut.tweeners[t]||[]).concat(ut.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,t,e))return i}function ut(e,t,n){var i,o,r=0,s=ut.prefilters.length,a=k.Deferred().always((function(){delete l.elem})),l=function(){if(o)return!1;for(var t=it||lt(),n=Math.max(0,c.startTime+c.duration-t),i=1-(n/c.duration||0),r=0,s=c.tweens.length;r<s;r++)c.tweens[r].run(i);return a.notifyWith(e,[c,i,n]),i<1&&s?n:(s||a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:k.extend({},t),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},n),originalProperties:t,originalOptions:n,startTime:it||lt(),duration:n.duration,tweens:[],createTween:function(t,n){var i=k.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0;if(o)return this;for(o=!0;n<i;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),d=c.props;for(!function(e,t){var n,i,o,r,s;for(n in e)if(o=t[i=X(n)],r=e[n],Array.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),(s=k.cssHooks[i])&&"expand"in s)for(n in r=s.expand(r),delete e[i],r)n in e||(e[n]=r[n],t[n]=o);else t[i]=o}(d,c.opts.specialEasing);r<s;r++)if(i=ut.prefilters[r].call(c,e,d,c.opts))return m(i.stop)&&(k._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return k.map(d,dt,c),m(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),k.fx.timer(k.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}k.Animation=k.extend(ut,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ce(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,i=0,o=e.length;i<o;i++)n=e[i],ut.tweeners[n]=ut.tweeners[n]||[],ut.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,o,r,s,a,l,c,d,u="width"in t||"height"in t,p=this,h={},f=e.style,y=e.nodeType&&le(e),g=G.get(e,"fxshow");for(i in n.queue||(null==(s=k._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always((function(){p.always((function(){s.unqueued--,k.queue(e,"fx").length||s.empty.fire()}))}))),t)if(o=t[i],rt.test(o)){if(delete t[i],r=r||"toggle"===o,o===(y?"hide":"show")){if("show"!==o||!g||void 0===g[i])continue;y=!0}h[i]=g&&g[i]||k.style(e,i)}if((l=!k.isEmptyObject(t))||!k.isEmptyObject(h))for(i in u&&1===e.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(c=g&&g.display)&&(c=G.get(e,"display")),"none"===(d=k.css(e,"display"))&&(c?d=c:(pe([e],!0),c=e.style.display||c,d=k.css(e,"display"),pe([e]))),("inline"===d||"inline-block"===d&&null!=c)&&"none"===k.css(e,"float")&&(l||(p.done((function(){f.display=c})),null==c&&(d=f.display,c="none"===d?"":d)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",p.always((function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))),l=!1,h)l||(g?"hidden"in g&&(y=g.hidden):g=G.access(e,"fxshow",{display:c}),r&&(g.hidden=!y),y&&pe([e],!0),p.done((function(){for(i in y||pe([e]),G.remove(e,"fxshow"),h)k.style(e,i,h[i])}))),l=dt(y?g[i]:0,i,p),i in g||(g[i]=l.start,y&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?ut.prefilters.unshift(e):ut.prefilters.push(e)}}),k.speed=function(e,t,n){var i=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in k.fx.speeds?i.duration=k.fx.speeds[i.duration]:i.duration=k.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){m(i.old)&&i.old.call(this),i.queue&&k.dequeue(this,i.queue)},i},k.fn.extend({fadeTo:function(e,t,n,i){return this.filter(le).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var o=k.isEmptyObject(e),r=k.speed(t,n,i),s=function(){var t=ut(this,k.extend({},e),r);(o||G.get(this,"finish"))&&t.stop(!0)};return s.finish=s,o||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,o=null!=e&&e+"queueHooks",r=k.timers,s=G.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&st.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(n),t=!1,r.splice(o,1));!t&&n||k.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=G.get(this),i=n[e+"queue"],o=n[e+"queueHooks"],r=k.timers,s=i?i.length:0;for(n.finish=!0,k.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish}))}}),k.each(["toggle","show","hide"],(function(e,t){var n=k.fn[t];k.fn[t]=function(e,i,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ct(t,!0),e,i,o)}})),k.each({slideDown:ct("show"),slideUp:ct("hide"),slideToggle:ct("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){k.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(it=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),it=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){ot||(ot=!0,at())},k.fx.stop=function(){ot=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(e,t){return e=k.fx&&k.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,i){var o=n.setTimeout(t,e);i.stop=function(){n.clearTimeout(o)}}))},function(){var e=x.createElement("input"),t=x.createElement("select").appendChild(x.createElement("option"));e.type="checkbox",g.checkOn=""!==e.value,g.optSelected=t.selected,(e=x.createElement("input")).value="t",e.type="radio",g.radioValue="t"===e.value}();var pt,ht=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return F(this,k.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){k.removeAttr(this,e)}))}}),k.extend({attr:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===e.getAttribute?k.prop(e,t,n):(1===r&&k.isXMLDoc(e)||(o=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(i=o.get(e,t))?i:null==(i=k.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!g.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,o=t&&t.match(P);if(o&&1===e.nodeType)for(;n=o[i++];)e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=ht[t]||k.find.attr;ht[t]=function(e,t,i){var o,r,s=t.toLowerCase();return i||(r=ht[s],ht[s]=o,o=null!=n(e,t,i)?s:null,ht[s]=r),o}}));var ft=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function gt(e){return(e.match(P)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}k.fn.extend({prop:function(e,t){return F(this,k.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[k.propFix[e]||e]}))}}),k.extend({prop:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&k.isXMLDoc(e)||(t=k.propFix[t]||t,o=k.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):ft.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),g.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){k.propFix[this.toLowerCase()]=this})),k.fn.extend({addClass:function(e){var t,n,i,o,r,s,a,l=0;if(m(e))return this.each((function(t){k(this).addClass(e.call(this,t,mt(this)))}));if((t=vt(e)).length)for(;n=this[l++];)if(o=mt(n),i=1===n.nodeType&&" "+gt(o)+" "){for(s=0;r=t[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o!==(a=gt(i))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,o,r,s,a,l=0;if(m(e))return this.each((function(t){k(this).removeClass(e.call(this,t,mt(this)))}));if(!arguments.length)return this.attr("class","");if((t=vt(e)).length)for(;n=this[l++];)if(o=mt(n),i=1===n.nodeType&&" "+gt(o)+" "){for(s=0;r=t[s++];)for(;i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");o!==(a=gt(i))&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e,i="string"===n||Array.isArray(e);return"boolean"==typeof t&&i?t?this.addClass(e):this.removeClass(e):m(e)?this.each((function(n){k(this).toggleClass(e.call(this,n,mt(this),t),t)})):this.each((function(){var t,o,r,s;if(i)for(o=0,r=k(this),s=vt(e);t=s[o++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else void 0!==e&&"boolean"!==n||((t=mt(this))&&G.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":G.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+gt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var xt=/\r/g;k.fn.extend({val:function(e){var t,n,i,o=this[0];return arguments.length?(i=m(e),this.each((function(n){var o;1===this.nodeType&&(null==(o=i?e.call(this,n,k(this).val()):e)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=k.map(o,(function(e){return null==e?"":e+""}))),(t=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))}))):o?(t=k.valHooks[o.type]||k.valHooks[o.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:"string"==typeof(n=o.value)?n.replace(xt,""):null==n?"":n:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:gt(k.text(e))}},select:{get:function(e){var t,n,i,o=e.options,r=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?r+1:o.length;for(i=r<0?l:s?r:0;i<l;i++)if(((n=o[i]).selected||i===r)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),s)return t;a.push(t)}return a},set:function(e,t){for(var n,i,o=e.options,r=k.makeArray(t),s=o.length;s--;)((i=o[s]).selected=k.inArray(k.valHooks.option.get(i),r)>-1)&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),k.each(["radio","checkbox"],(function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=k.inArray(k(e).val(),t)>-1}},g.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),g.focusin="onfocusin"in n;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,i,o){var r,s,a,l,c,d,u,p,f=[i||x],y=h.call(e,"type")?e.type:e,g=h.call(e,"namespace")?e.namespace.split("."):[];if(s=p=a=i=i||x,3!==i.nodeType&&8!==i.nodeType&&!bt.test(y+k.event.triggered)&&(y.indexOf(".")>-1&&(g=y.split("."),y=g.shift(),g.sort()),c=y.indexOf(":")<0&&"on"+y,(e=e[k.expando]?e:new k.Event(y,"object"==typeof e&&e)).isTrigger=o?2:3,e.namespace=g.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:k.makeArray(t,[e]),u=k.event.special[y]||{},o||!u.trigger||!1!==u.trigger.apply(i,t))){if(!o&&!u.noBubble&&!v(i)){for(l=u.delegateType||y,bt.test(l+y)||(s=s.parentNode);s;s=s.parentNode)f.push(s),a=s;a===(i.ownerDocument||x)&&f.push(a.defaultView||a.parentWindow||n)}for(r=0;(s=f[r++])&&!e.isPropagationStopped();)p=s,e.type=r>1?l:u.bindType||y,(d=(G.get(s,"events")||Object.create(null))[e.type]&&G.get(s,"handle"))&&d.apply(s,t),(d=c&&s[c])&&d.apply&&K(s)&&(e.result=d.apply(s,t),!1===e.result&&e.preventDefault());return e.type=y,o||e.isDefaultPrevented()||u._default&&!1!==u._default.apply(f.pop(),t)||!K(i)||c&&m(i[y])&&!v(i)&&((a=i[c])&&(i[c]=null),k.event.triggered=y,e.isPropagationStopped()&&p.addEventListener(y,wt),i[y](),e.isPropagationStopped()&&p.removeEventListener(y,wt),k.event.triggered=void 0,a&&(i[c]=a)),e.result}},simulate:function(e,t,n){var i=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(i,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each((function(){k.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),g.focusin||k.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){k.event.simulate(t,e.target,k.event.fix(e))};k.event.special[t]={setup:function(){var i=this.ownerDocument||this.document||this,o=G.access(i,t);o||i.addEventListener(e,n,!0),G.access(i,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,o=G.access(i,t)-1;o?G.access(i,t,o):(i.removeEventListener(e,n,!0),G.remove(i,t))}}}));var _t=n.location,kt={guid:Date.now()},Tt=/\?/;k.parseXML=function(e){var t,i;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){}return i=t&&t.getElementsByTagName("parsererror")[0],t&&!i||k.error("Invalid XML: "+(i?k.map(i.childNodes,(function(e){return e.textContent})).join("\n"):e)),t};var jt=/\[\]$/,Ct=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,Dt=/^(?:input|select|textarea|keygen)/i;function At(e,t,n,i){var o;if(Array.isArray(t))k.each(t,(function(t,o){n||jt.test(e)?i(e,o):At(e+"["+("object"==typeof o&&null!=o?t:"")+"]",o,n,i)}));else if(n||"object"!==_(t))i(e,t);else for(o in t)At(e+"["+o+"]",t[o],n,i)}k.param=function(e,t){var n,i=[],o=function(e,t){var n=m(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,(function(){o(this.name,this.value)}));else for(n in e)At(n,e[n],t,o);return i.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&Dt.test(this.nodeName)&&!St.test(e)&&(this.checked||!ye.test(e))})).map((function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,(function(e){return{name:t.name,value:e.replace(Ct,"\r\n")}})):{name:t.name,value:n.replace(Ct,"\r\n")}})).get()}});var Et=/%20/g,Mt=/#.*$/,Ot=/([?&])_=[^&]*/,Lt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Nt=/^(?:GET|HEAD)$/,$t=/^\/\//,Ht={},Pt={},zt="*/".concat("*"),It=x.createElement("a");function qt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,o=0,r=t.toLowerCase().match(P)||[];if(m(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function Wt(e,t,n,i){var o={},r=e===Pt;function s(a){var l;return o[a]=!0,k.each(e[a]||[],(function(e,a){var c=a(t,n,i);return"string"!=typeof c||r||o[c]?r?!(l=c):void 0:(t.dataTypes.unshift(c),s(c),!1)})),l}return s(t.dataTypes[0])||!o["*"]&&s("*")}function Ut(e,t){var n,i,o=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&k.extend(!0,e,i),e}It.href=_t.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_t.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ut(Ut(e,k.ajaxSettings),t):Ut(k.ajaxSettings,e)},ajaxPrefilter:qt(Ht),ajaxTransport:qt(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var i,o,r,s,a,l,c,d,u,p,h=k.ajaxSetup({},t),f=h.context||h,y=h.context&&(f.nodeType||f.jquery)?k(f):k.event,g=k.Deferred(),m=k.Callbacks("once memory"),v=h.statusCode||{},b={},w={},_="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=Lt.exec(r);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?r:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)T.always(e[T.status]);else for(t in e)v[t]=[v[t],e[t]];return this},abort:function(e){var t=e||_;return i&&i.abort(t),j(0,t),this}};if(g.promise(T),h.url=((e||h.url||_t.href)+"").replace($t,_t.protocol+"//"),h.type=t.method||t.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(P)||[""],null==h.crossDomain){l=x.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=It.protocol+"//"+It.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=k.param(h.data,h.traditional)),Wt(Ht,h,t,T),c)return T;for(u in(d=k.event&&h.global)&&0==k.active++&&k.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Nt.test(h.type),o=h.url.replace(Mt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Et,"+")):(p=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(Tt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ot,"$1"),p=(Tt.test(o)?"&":"?")+"_="+kt.guid+++p),h.url=o+p),h.ifModified&&(k.lastModified[o]&&T.setRequestHeader("If-Modified-Since",k.lastModified[o]),k.etag[o]&&T.setRequestHeader("If-None-Match",k.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||t.contentType)&&T.setRequestHeader("Content-Type",h.contentType),T.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+zt+"; q=0.01":""):h.accepts["*"]),h.headers)T.setRequestHeader(u,h.headers[u]);if(h.beforeSend&&(!1===h.beforeSend.call(f,T,h)||c))return T.abort();if(_="abort",m.add(h.complete),T.done(h.success),T.fail(h.error),i=Wt(Pt,h,t,T)){if(T.readyState=1,d&&y.trigger("ajaxSend",[T,h]),c)return T;h.async&&h.timeout>0&&(a=n.setTimeout((function(){T.abort("timeout")}),h.timeout));try{c=!1,i.send(b,j)}catch(e){if(c)throw e;j(-1,e)}}else j(-1,"No Transport");function j(e,t,s,l){var u,p,x,b,w,_=t;c||(c=!0,a&&n.clearTimeout(a),i=void 0,r=l||"",T.readyState=e>0?4:0,u=e>=200&&e<300||304===e,s&&(b=function(e,t,n){for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}s||(s=o)}r=r||s}if(r)return r!==l[0]&&l.unshift(r),n[r]}(h,T,s)),!u&&k.inArray("script",h.dataTypes)>-1&&k.inArray("json",h.dataTypes)<0&&(h.converters["text script"]=function(){}),b=function(e,t,n,i){var o,r,s,a,l,c={},d=e.dataTypes.slice();if(d[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(r=d.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=d.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(s=c[l+" "+r]||c["* "+r]))for(o in c)if((a=o.split(" "))[1]===r&&(s=c[l+" "+a[0]]||c["* "+a[0]])){!0===s?s=c[o]:!0!==c[o]&&(r=a[0],d.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}(h,b,T,u),u?(h.ifModified&&((w=T.getResponseHeader("Last-Modified"))&&(k.lastModified[o]=w),(w=T.getResponseHeader("etag"))&&(k.etag[o]=w)),204===e||"HEAD"===h.type?_="nocontent":304===e?_="notmodified":(_=b.state,p=b.data,u=!(x=b.error))):(x=_,!e&&_||(_="error",e<0&&(e=0))),T.status=e,T.statusText=(t||_)+"",u?g.resolveWith(f,[p,_,T]):g.rejectWith(f,[T,_,x]),T.statusCode(v),v=void 0,d&&y.trigger(u?"ajaxSuccess":"ajaxError",[T,h,u?p:x]),m.fireWith(f,[T,_]),d&&(y.trigger("ajaxComplete",[T,h]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],(function(e,t){k[t]=function(e,n,i,o){return m(n)&&(o=o||i,i=n,n=void 0),k.ajax(k.extend({url:e,type:t,dataType:o,data:n,success:i},k.isPlainObject(e)&&e))}})),k.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),k._evalUrl=function(e,t,n){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t,n)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return m(e)?this.each((function(t){k(this).wrapInner(e.call(this,t))})):this.each((function(){var t=k(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=m(e);return this.each((function(n){k(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){k(this).replaceWith(this.childNodes)})),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Ft=k.ajaxSettings.xhr();g.cors=!!Ft&&"withCredentials"in Ft,g.ajax=Ft=!!Ft,k.ajaxTransport((function(e){var t,i;if(g.cors||Ft&&!e.crossDomain)return{send:function(o,r){var s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];for(s in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)a.setRequestHeader(s,o[s]);t=function(e){return function(){t&&(t=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(Vt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),i=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&n.setTimeout((function(){t&&i()}))},t=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),k.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),k.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(i,o){t=k("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),x.head.appendChild(t[0])},abort:function(){n&&n()}}}));var Rt,Bt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Bt.pop()||k.expando+"_"+kt.guid++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",(function(e,t,i){var o,r,s,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return o=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+o):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return s||k.error(o+" was not called"),s[0]},e.dataTypes[0]="json",r=n[o],n[o]=function(){s=arguments},i.always((function(){void 0===r?k(n).removeProp(o):n[o]=r,e[o]&&(e.jsonpCallback=t.jsonpCallback,Bt.push(o)),s&&m(r)&&r(s[0]),s=r=void 0})),"script"})),g.createHTMLDocument=((Rt=x.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Rt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(g.createHTMLDocument?((i=(t=x.implementation.createHTMLDocument("")).createElement("base")).href=x.location.href,t.head.appendChild(i)):t=x),r=!n&&[],(o=E.exec(e))?[t.createElement(o[1])]:(o=_e([e],t,r),r&&r.length&&k(r).remove(),k.merge([],o.childNodes)));var i,o,r},k.fn.load=function(e,t,n){var i,o,r,s=this,a=e.indexOf(" ");return a>-1&&(i=gt(e.slice(a)),e=e.slice(0,a)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),s.length>0&&k.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done((function(e){r=arguments,s.html(i?k("<div>").append(k.parseHTML(e)).find(i):e)})).always(n&&function(e,t){s.each((function(){n.apply(this,r||[e.responseText,t,e])}))}),this},k.expr.pseudos.animated=function(e){return k.grep(k.timers,(function(t){return e===t.elem})).length},k.offset={setOffset:function(e,t,n){var i,o,r,s,a,l,c=k.css(e,"position"),d=k(e),u={};"static"===c&&(e.style.position="relative"),a=d.offset(),r=k.css(e,"top"),l=k.css(e,"left"),("absolute"===c||"fixed"===c)&&(r+l).indexOf("auto")>-1?(s=(i=d.position()).top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),m(t)&&(t=t.call(e,n,k.extend({},a))),null!=t.top&&(u.top=t.top-a.top+s),null!=t.left&&(u.left=t.left-a.left+o),"using"in t?t.using.call(e,u):d.css(u)}},k.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){k.offset.setOffset(this,e,t)}));var t,n,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],o={top:0,left:0};if("fixed"===k.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((o=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),o.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-o.top-k.css(i,"marginTop",!0),left:t.left-o.left-k.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===k.css(e,"position");)e=e.offsetParent;return e||re}))}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;k.fn[e]=function(i){return F(this,(function(e,i,o){var r;if(v(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===o)return r?r[t]:e[i];r?r.scrollTo(n?r.pageXOffset:o,n?o:r.pageYOffset):e[i]=o}),e,i,arguments.length)}})),k.each(["top","left"],(function(e,t){k.cssHooks[t]=Fe(g.pixelPosition,(function(e,n){if(n)return n=Ve(e,t),Ie.test(n)?k(e).position()[t]+"px":n}))})),k.each({Height:"height",Width:"width"},(function(e,t){k.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,i){k.fn[i]=function(o,r){var s=arguments.length&&(n||"boolean"!=typeof o),a=n||(!0===o||!0===r?"margin":"border");return F(this,(function(t,n,o){var r;return v(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===o?k.css(t,n,a):k.style(t,n,o,a)}),t,s?o:void 0,s)}}))})),k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){k.fn[t]=function(e){return this.on(t,e)}})),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){k.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;k.proxy=function(e,t){var n,i,o;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return i=a.call(arguments,2),(o=function(){return e.apply(t||this,i.concat(a.call(arguments)))}).guid=e.guid=e.guid||k.guid++,o},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=v,k.camelCase=X,k.type=_,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},k.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},void 0===(i=function(){return k}.apply(t,[]))||(e.exports=i);var Kt=n.jQuery,Qt=n.$;return k.noConflict=function(e){return n.$===k&&(n.$=Qt),e&&n.jQuery===k&&(n.jQuery=Kt),k},void 0===o&&(n.jQuery=n.$=k),k}))},,,,function(e,t,n){e.exports=n(8)},function(e,t,n){var i,o,r;o=[n(0)],void 0===(r="function"==typeof(i=function(e,t){function n(){return new Date(Date.UTC.apply(Date,arguments))}function i(){var e=new Date;return n(e.getFullYear(),e.getMonth(),e.getDate())}function o(e,t){return e.getUTCFullYear()===t.getUTCFullYear()&&e.getUTCMonth()===t.getUTCMonth()&&e.getUTCDate()===t.getUTCDate()}function r(n,i){return function(){return i!==t&&e.fn.datepicker.deprecated(i),this[n].apply(this,arguments)}}var s,a=(s={get:function(e){return this.slice(e)[0]},contains:function(e){for(var t=e&&e.valueOf(),n=0,i=this.length;n<i;n++)if(0<=this[n].valueOf()-t&&this[n].valueOf()-t<864e5)return n;return-1},remove:function(e){this.splice(e,1)},replace:function(t){t&&(e.isArray(t)||(t=[t]),this.clear(),this.push.apply(this,t))},clear:function(){this.length=0},copy:function(){var e=new a;return e.replace(this),e}},function(){var t=[];return t.push.apply(t,arguments),e.extend(t,s),t}),l=function(t,n){e.data(t,"datepicker",this),this._events=[],this._secondaryEvents=[],this._process_options(n),this.dates=new a,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=e(t),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"),this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=e(m.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",(function(e,t){return Number(t)+1})),this._process_options({startDate:this._o.startDate,endDate:this._o.endDate,daysOfWeekDisabled:this.o.daysOfWeekDisabled,daysOfWeekHighlighted:this.o.daysOfWeekHighlighted,datesDisabled:this.o.datesDisabled}),this._allow_update=!1,this.setViewMode(this.o.startView),this._allow_update=!0,this.fillDow(),this.fillMonths(),this.update(),this.isInline&&this.show()};l.prototype={constructor:l,_resolveViewName:function(t){return e.each(m.viewModes,(function(n,i){if(t===n||-1!==e.inArray(t,i.names))return t=n,!1})),t},_resolveDaysOfWeek:function(t){return e.isArray(t)||(t=t.split(/[,\s]*/)),e.map(t,Number)},_check_template:function(n){try{return n!==t&&""!==n&&((n.match(/[<>]/g)||[]).length<=0||e(n).length>0)}catch(e){return!1}},_process_options:function(t){this._o=e.extend({},this._o,t);var o=this.o=e.extend({},this._o),r=o.language;g[r]||(r=r.split("-")[0],g[r]||(r=f.language)),o.language=r,o.startView=this._resolveViewName(o.startView),o.minViewMode=this._resolveViewName(o.minViewMode),o.maxViewMode=this._resolveViewName(o.maxViewMode),o.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,o.startView)),!0!==o.multidate&&(o.multidate=Number(o.multidate)||!1,!1!==o.multidate&&(o.multidate=Math.max(0,o.multidate))),o.multidateSeparator=String(o.multidateSeparator),o.weekStart%=7,o.weekEnd=(o.weekStart+6)%7;var s=m.parseFormat(o.format);o.startDate!==-1/0&&(o.startDate?o.startDate instanceof Date?o.startDate=this._local_to_utc(this._zero_time(o.startDate)):o.startDate=m.parseDate(o.startDate,s,o.language,o.assumeNearbyYear):o.startDate=-1/0),o.endDate!==1/0&&(o.endDate?o.endDate instanceof Date?o.endDate=this._local_to_utc(this._zero_time(o.endDate)):o.endDate=m.parseDate(o.endDate,s,o.language,o.assumeNearbyYear):o.endDate=1/0),o.daysOfWeekDisabled=this._resolveDaysOfWeek(o.daysOfWeekDisabled||[]),o.daysOfWeekHighlighted=this._resolveDaysOfWeek(o.daysOfWeekHighlighted||[]),o.datesDisabled=o.datesDisabled||[],e.isArray(o.datesDisabled)||(o.datesDisabled=o.datesDisabled.split(",")),o.datesDisabled=e.map(o.datesDisabled,(function(e){return m.parseDate(e,s,o.language,o.assumeNearbyYear)}));var a=String(o.orientation).toLowerCase().split(/\s+/g),l=o.orientation.toLowerCase();if(a=e.grep(a,(function(e){return/^auto|left|right|top|bottom$/.test(e)})),o.orientation={x:"auto",y:"auto"},l&&"auto"!==l)if(1===a.length)switch(a[0]){case"top":case"bottom":o.orientation.y=a[0];break;case"left":case"right":o.orientation.x=a[0]}else l=e.grep(a,(function(e){return/^left|right$/.test(e)})),o.orientation.x=l[0]||"auto",l=e.grep(a,(function(e){return/^top|bottom$/.test(e)})),o.orientation.y=l[0]||"auto";if(o.defaultViewDate instanceof Date||"string"==typeof o.defaultViewDate)o.defaultViewDate=m.parseDate(o.defaultViewDate,s,o.language,o.assumeNearbyYear);else if(o.defaultViewDate){var c=o.defaultViewDate.year||(new Date).getFullYear(),d=o.defaultViewDate.month||0,u=o.defaultViewDate.day||1;o.defaultViewDate=n(c,d,u)}else o.defaultViewDate=i()},_applyEvents:function(e){for(var n,i,o,r=0;r<e.length;r++)n=e[r][0],2===e[r].length?(i=t,o=e[r][1]):3===e[r].length&&(i=e[r][1],o=e[r][2]),n.on(o,i)},_unapplyEvents:function(e){for(var n,i,o,r=0;r<e.length;r++)n=e[r][0],2===e[r].length?(o=t,i=e[r][1]):3===e[r].length&&(o=e[r][1],i=e[r][2]),n.off(i,o)},_buildEvents:function(){var t={keyup:e.proxy((function(t){-1===e.inArray(t.keyCode,[27,37,39,38,40,32,13,9])&&this.update()}),this),keydown:e.proxy(this.keydown,this),paste:e.proxy(this.paste,this)};!0===this.o.showOnFocus&&(t.focus=e.proxy(this.show,this)),this.isInput?this._events=[[this.element,t]]:this.component&&this.inputField.length?this._events=[[this.inputField,t],[this.component,{click:e.proxy(this.show,this)}]]:this._events=[[this.element,{click:e.proxy(this.show,this),keydown:e.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:e.proxy((function(e){this._focused_from=e.target}),this)}],[this.element,{blur:e.proxy((function(e){this._focused_from=e.target}),this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":e.proxy((function(e){this.update(e.date)}),this)}]),this._secondaryEvents=[[this.picker,{click:e.proxy(this.click,this)}],[this.picker,".prev, .next",{click:e.proxy(this.navArrowsClick,this)}],[this.picker,".day:not(.disabled)",{click:e.proxy(this.dayCellClick,this)}],[e(window),{resize:e.proxy(this.place,this)}],[e(document),{"mousedown touchstart":e.proxy((function(e){this.element.is(e.target)||this.element.find(e.target).length||this.picker.is(e.target)||this.picker.find(e.target).length||this.isInline||this.hide()}),this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(t,n){var i=n||this.dates.get(-1),o=this._utc_to_local(i);this.element.trigger({type:t,date:o,viewMode:this.viewMode,dates:e.map(this.dates,this._utc_to_local),format:e.proxy((function(e,t){0===arguments.length?(e=this.dates.length-1,t=this.o.format):"string"==typeof e&&(t=e,e=this.dates.length-1),t=t||this.o.format;var n=this.dates.get(e);return m.formatDate(n,t,this.o.language)}),this)})},show:function(){if(!(this.inputField.is(":disabled")||this.inputField.prop("readonly")&&!1===this.o.enableOnReadonly))return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&e(this.element).blur(),this},hide:function(){return this.isInline||!this.picker.is(":visible")||(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide")),this},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(t){var n;if(t.originalEvent.clipboardData&&t.originalEvent.clipboardData.types&&-1!==e.inArray("text/plain",t.originalEvent.clipboardData.types))n=t.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;n=window.clipboardData.getData("Text")}this.setDate(n),this.update(),t.preventDefault()},_utc_to_local:function(e){if(!e)return e;var t=new Date(e.getTime()+6e4*e.getTimezoneOffset());return t.getTimezoneOffset()!==e.getTimezoneOffset()&&(t=new Date(e.getTime()+6e4*t.getTimezoneOffset())),t},_local_to_utc:function(e){return e&&new Date(e.getTime()-6e4*e.getTimezoneOffset())},_zero_time:function(e){return e&&new Date(e.getFullYear(),e.getMonth(),e.getDate())},_zero_utc_time:function(e){return e&&n(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())},getDates:function(){return e.map(this.dates,this._utc_to_local)},getUTCDates:function(){return e.map(this.dates,(function(e){return new Date(e)}))},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var e=this.dates.get(-1);return e!==t?new Date(e):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var t=e.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,t),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var t=e.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,e.map(t,this._utc_to_local)),this},setDate:r("setDates"),setUTCDate:r("setUTCDates"),remove:r("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),setValue:function(){var e=this.getFormattedDate();return this.inputField.val(e),this},getFormattedDate:function(n){n===t&&(n=this.o.format);var i=this.o.language;return e.map(this.dates,(function(e){return m.formatDate(e,n,i)})).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(e){return this._process_options({startDate:e}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(e){return this._process_options({endDate:e}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(e){return this._process_options({daysOfWeekDisabled:e}),this.update(),this},setDaysOfWeekHighlighted:function(e){return this._process_options({daysOfWeekHighlighted:e}),this.update(),this},setDatesDisabled:function(e){return this._process_options({datesDisabled:e}),this.update(),this},place:function(){if(this.isInline)return this;var t=this.picker.outerWidth(),n=this.picker.outerHeight(),i=e(this.o.container),o=i.width(),r="body"===this.o.container?e(document).scrollTop():i.scrollTop(),s=i.offset(),a=[0];this.element.parents().each((function(){var t=e(this).css("z-index");"auto"!==t&&0!==Number(t)&&a.push(Number(t))}));var l=Math.max.apply(Math,a)+this.o.zIndexOffset,c=this.component?this.component.parent().offset():this.element.offset(),d=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),u=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),p=c.left-s.left,h=c.top-s.top;"body"!==this.o.container&&(h+=r),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(p-=t-u)):c.left<0?(this.picker.addClass("datepicker-orient-left"),p-=c.left-10):p+t>o?(this.picker.addClass("datepicker-orient-right"),p+=u-t):this.o.rtl?this.picker.addClass("datepicker-orient-right"):this.picker.addClass("datepicker-orient-left");var f=this.o.orientation.y;if("auto"===f&&(f=-r+h-n<0?"bottom":"top"),this.picker.addClass("datepicker-orient-"+f),"top"===f?h-=n+parseInt(this.picker.css("padding-top")):h+=d,this.o.rtl){var y=o-(p+u);this.picker.css({top:h,right:y,zIndex:l})}else this.picker.css({top:h,left:p,zIndex:l});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var t=this.dates.copy(),n=[],i=!1;return arguments.length?(e.each(arguments,e.proxy((function(e,t){t instanceof Date&&(t=this._local_to_utc(t)),n.push(t)}),this)),i=!0):(n=(n=this.isInput?this.element.val():this.element.data("date")||this.inputField.val())&&this.o.multidate?n.split(this.o.multidateSeparator):[n],delete this.element.data().date),n=e.map(n,e.proxy((function(e){return m.parseDate(e,this.o.format,this.o.language,this.o.assumeNearbyYear)}),this)),n=e.grep(n,e.proxy((function(e){return!this.dateWithinRange(e)||!e}),this),!0),this.dates.replace(n),this.o.updateViewDate&&(this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate),i?(this.setValue(),this.element.change()):this.dates.length&&String(t)!==String(this.dates)&&i&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&t.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){if(this.o.showWeekDays){var t=this.o.weekStart,n="<tr>";for(this.o.calendarWeeks&&(n+='<th class="cw">&#160;</th>');t<this.o.weekStart+7;)n+='<th class="dow',-1!==e.inArray(t,this.o.daysOfWeekDisabled)&&(n+=" disabled"),n+='">'+g[this.o.language].daysMin[t++%7]+"</th>";n+="</tr>",this.picker.find(".datepicker-days thead").append(n)}},fillMonths:function(){for(var e=this._utc_to_local(this.viewDate),t="",n=0;n<12;n++)t+='<span class="month'+(e&&e.getMonth()===n?" focused":"")+'">'+g[this.o.language].monthsShort[n]+"</span>";this.picker.find(".datepicker-months td").html(t)},setRange:function(t){t&&t.length?this.range=e.map(t,(function(e){return e.valueOf()})):delete this.range,this.fill()},getClassNames:function(t){var n=[],r=this.viewDate.getUTCFullYear(),s=this.viewDate.getUTCMonth(),a=i();return t.getUTCFullYear()<r||t.getUTCFullYear()===r&&t.getUTCMonth()<s?n.push("old"):(t.getUTCFullYear()>r||t.getUTCFullYear()===r&&t.getUTCMonth()>s)&&n.push("new"),this.focusDate&&t.valueOf()===this.focusDate.valueOf()&&n.push("focused"),this.o.todayHighlight&&o(t,a)&&n.push("today"),-1!==this.dates.contains(t)&&n.push("active"),this.dateWithinRange(t)||n.push("disabled"),this.dateIsDisabled(t)&&n.push("disabled","disabled-date"),-1!==e.inArray(t.getUTCDay(),this.o.daysOfWeekHighlighted)&&n.push("highlighted"),this.range&&(t>this.range[0]&&t<this.range[this.range.length-1]&&n.push("range"),-1!==e.inArray(t.valueOf(),this.range)&&n.push("selected"),t.valueOf()===this.range[0]&&n.push("range-start"),t.valueOf()===this.range[this.range.length-1]&&n.push("range-end")),n},_fill_yearsView:function(n,i,o,r,s,a,l){for(var c,d,u,p="",h=o/10,f=this.picker.find(n),y=Math.floor(r/o)*o,g=y+9*h,m=Math.floor(this.viewDate.getFullYear()/h)*h,v=e.map(this.dates,(function(e){return Math.floor(e.getUTCFullYear()/h)*h})),x=y-h;x<=g+h;x+=h)c=[i],d=null,x===y-h?c.push("old"):x===g+h&&c.push("new"),-1!==e.inArray(x,v)&&c.push("active"),(x<s||x>a)&&c.push("disabled"),x===m&&c.push("focused"),l!==e.noop&&((u=l(new Date(x,0,1)))===t?u={}:"boolean"==typeof u?u={enabled:u}:"string"==typeof u&&(u={classes:u}),!1===u.enabled&&c.push("disabled"),u.classes&&(c=c.concat(u.classes.split(/\s+/))),u.tooltip&&(d=u.tooltip)),p+='<span class="'+c.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+x+"</span>";f.find(".datepicker-switch").text(y+"-"+g),f.find("td").html(p)},fill:function(){var o,r,s=new Date(this.viewDate),a=s.getUTCFullYear(),l=s.getUTCMonth(),c=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,d=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,u=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,p=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,h=g[this.o.language].today||g.en.today||"",f=g[this.o.language].clear||g.en.clear||"",y=g[this.o.language].titleFormat||g.en.titleFormat,v=i(),x=(!0===this.o.todayBtn||"linked"===this.o.todayBtn)&&v>=this.o.startDate&&v<=this.o.endDate&&!this.weekOfDateIsDisabled(v);if(!isNaN(a)&&!isNaN(l)){this.picker.find(".datepicker-days .datepicker-switch").text(m.formatDate(s,y,this.o.language)),this.picker.find("tfoot .today").text(h).css("display",x?"table-cell":"none"),this.picker.find("tfoot .clear").text(f).css("display",!0===this.o.clearBtn?"table-cell":"none"),this.picker.find("thead .datepicker-title").text(this.o.title).css("display","string"==typeof this.o.title&&""!==this.o.title?"table-cell":"none"),this.updateNavArrows(),this.fillMonths();var b=n(a,l,0),w=b.getUTCDate();b.setUTCDate(w-(b.getUTCDay()-this.o.weekStart+7)%7);var _=new Date(b);b.getUTCFullYear()<100&&_.setUTCFullYear(b.getUTCFullYear()),_.setUTCDate(_.getUTCDate()+42),_=_.valueOf();for(var k,T,j=[];b.valueOf()<_;){if((k=b.getUTCDay())===this.o.weekStart&&(j.push("<tr>"),this.o.calendarWeeks)){var C=new Date(+b+(this.o.weekStart-k-7)%7*864e5),S=new Date(Number(C)+(11-C.getUTCDay())%7*864e5),D=new Date(Number(D=n(S.getUTCFullYear(),0,1))+(11-D.getUTCDay())%7*864e5),A=(S-D)/864e5/7+1;j.push('<td class="cw">'+A+"</td>")}(T=this.getClassNames(b)).push("day");var E=b.getUTCDate();this.o.beforeShowDay!==e.noop&&((r=this.o.beforeShowDay(this._utc_to_local(b)))===t?r={}:"boolean"==typeof r?r={enabled:r}:"string"==typeof r&&(r={classes:r}),!1===r.enabled&&T.push("disabled"),r.classes&&(T=T.concat(r.classes.split(/\s+/))),r.tooltip&&(o=r.tooltip),r.content&&(E=r.content)),T=e.isFunction(e.uniqueSort)?e.uniqueSort(T):e.unique(T),j.push('<td class="'+T.join(" ")+'"'+(o?' title="'+o+'"':"")+' data-date="'+b.getTime().toString()+'">'+E+"</td>"),o=null,k===this.o.weekEnd&&j.push("</tr>"),b.setUTCDate(b.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(j.join(""));var M=g[this.o.language].monthsTitle||g.en.monthsTitle||"Months",O=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?M:a).end().find("tbody span").removeClass("active");if(e.each(this.dates,(function(e,t){t.getUTCFullYear()===a&&O.eq(t.getUTCMonth()).addClass("active")})),(a<c||a>u)&&O.addClass("disabled"),a===c&&O.slice(0,d).addClass("disabled"),a===u&&O.slice(p+1).addClass("disabled"),this.o.beforeShowMonth!==e.noop){var L=this;e.each(O,(function(n,i){var o=new Date(a,n,1),r=L.o.beforeShowMonth(o);r===t?r={}:"boolean"==typeof r?r={enabled:r}:"string"==typeof r&&(r={classes:r}),!1!==r.enabled||e(i).hasClass("disabled")||e(i).addClass("disabled"),r.classes&&e(i).addClass(r.classes),r.tooltip&&e(i).prop("title",r.tooltip)}))}this._fill_yearsView(".datepicker-years","year",10,a,c,u,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,a,c,u,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,a,c,u,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var e,t,n=new Date(this.viewDate),i=n.getUTCFullYear(),o=n.getUTCMonth(),r=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,s=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,a=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,c=1;switch(this.viewMode){case 4:c*=10;case 3:c*=10;case 2:c*=10;case 1:e=Math.floor(i/c)*c<=r,t=Math.floor(i/c)*c+c>a;break;case 0:e=i<=r&&o<=s,t=i>=a&&o>=l}this.picker.find(".prev").toggleClass("disabled",e),this.picker.find(".next").toggleClass("disabled",t)}},click:function(t){var o,r,s;t.preventDefault(),t.stopPropagation(),(o=e(t.target)).hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),o.hasClass("today")&&!o.hasClass("day")&&(this.setViewMode(0),this._setDate(i(),"linked"===this.o.todayBtn?null:"view")),o.hasClass("clear")&&this.clearDates(),o.hasClass("disabled")||(o.hasClass("month")||o.hasClass("year")||o.hasClass("decade")||o.hasClass("century"))&&(this.viewDate.setUTCDate(1),1===this.viewMode?(s=o.parent().find("span").index(o),r=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(s)):(s=0,r=Number(o.text()),this.viewDate.setUTCFullYear(r)),this._trigger(m.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(n(r,s,1)):(this.setViewMode(this.viewMode-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},dayCellClick:function(t){var n=e(t.currentTarget).data("date"),i=new Date(n);this.o.updateViewDate&&(i.getUTCFullYear()!==this.viewDate.getUTCFullYear()&&this._trigger("changeYear",this.viewDate),i.getUTCMonth()!==this.viewDate.getUTCMonth()&&this._trigger("changeMonth",this.viewDate)),this._setDate(i)},navArrowsClick:function(t){var n=e(t.currentTarget).hasClass("prev")?-1:1;0!==this.viewMode&&(n*=12*m.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,n),this._trigger(m.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(e){var t=this.dates.contains(e);if(e||this.dates.clear(),-1!==t?(!0===this.o.multidate||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(t):!1===this.o.multidate?(this.dates.clear(),this.dates.push(e)):this.dates.push(e),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(e,t){t&&"date"!==t||this._toggle_multidate(e&&new Date(e)),(!t&&this.o.updateViewDate||"view"===t)&&(this.viewDate=e&&new Date(e)),this.fill(),this.setValue(),t&&"view"===t||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||t&&"date"!==t||this.hide()},moveDay:function(e,t){var n=new Date(e);return n.setUTCDate(e.getUTCDate()+t),n},moveWeek:function(e,t){return this.moveDay(e,7*t)},moveMonth:function(e,t){if(!(n=e)||isNaN(n.getTime()))return this.o.defaultViewDate;var n;if(!t)return e;var i,o,r=new Date(e.valueOf()),s=r.getUTCDate(),a=r.getUTCMonth(),l=Math.abs(t);if(t=t>0?1:-1,1===l)o=-1===t?function(){return r.getUTCMonth()===a}:function(){return r.getUTCMonth()!==i},i=a+t,r.setUTCMonth(i),i=(i+12)%12;else{for(var c=0;c<l;c++)r=this.moveMonth(r,t);i=r.getUTCMonth(),r.setUTCDate(s),o=function(){return i!==r.getUTCMonth()}}for(;o();)r.setUTCDate(--s),r.setUTCMonth(i);return r},moveYear:function(e,t){return this.moveMonth(e,12*t)},moveAvailableDate:function(e,t,n){do{if(e=this[n](e,t),!this.dateWithinRange(e))return!1;n="moveDay"}while(this.dateIsDisabled(e));return e},weekOfDateIsDisabled:function(t){return-1!==e.inArray(t.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(t){return this.weekOfDateIsDisabled(t)||e.grep(this.o.datesDisabled,(function(e){return o(t,e)})).length>0},dateWithinRange:function(e){return e>=this.o.startDate&&e<=this.o.endDate},keydown:function(e){if(this.picker.is(":visible")){var t,n,i=!1,o=this.focusDate||this.viewDate;switch(e.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),e.preventDefault(),e.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;t=37===e.keyCode||38===e.keyCode?-1:1,0===this.viewMode?e.ctrlKey?(n=this.moveAvailableDate(o,t,"moveYear"))&&this._trigger("changeYear",this.viewDate):e.shiftKey?(n=this.moveAvailableDate(o,t,"moveMonth"))&&this._trigger("changeMonth",this.viewDate):37===e.keyCode||39===e.keyCode?n=this.moveAvailableDate(o,t,"moveDay"):this.weekOfDateIsDisabled(o)||(n=this.moveAvailableDate(o,t,"moveWeek")):1===this.viewMode?(38!==e.keyCode&&40!==e.keyCode||(t*=4),n=this.moveAvailableDate(o,t,"moveMonth")):2===this.viewMode&&(38!==e.keyCode&&40!==e.keyCode||(t*=4),n=this.moveAvailableDate(o,t,"moveYear")),n&&(this.focusDate=this.viewDate=n,this.setValue(),this.fill(),e.preventDefault());break;case 13:if(!this.o.forceParse)break;o=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(o),i=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(e.preventDefault(),e.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}i&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))}else 40!==e.keyCode&&27!==e.keyCode||(this.show(),e.stopPropagation())},setViewMode:function(e){this.viewMode=e,this.picker.children("div").hide().filter(".datepicker-"+m.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}};var c=function(t,n){e.data(t,"datepicker",this),this.element=e(t),this.inputs=e.map(n.inputs,(function(e){return e.jquery?e[0]:e})),delete n.inputs,this.keepEmptyValues=n.keepEmptyValues,delete n.keepEmptyValues,h.call(e(this.inputs),n).on("changeDate",e.proxy(this.dateUpdated,this)),this.pickers=e.map(this.inputs,(function(t){return e.data(t,"datepicker")})),this.updateDates()};function d(t,n){var i=e(t).data(),o={},r=new RegExp("^"+n.toLowerCase()+"([A-Z])");function s(e,t){return t.toLowerCase()}for(var a in n=new RegExp("^"+n.toLowerCase()),i)n.test(a)&&(o[a.replace(r,s)]=i[a]);return o}function u(t){var n={};if(g[t]||(t=t.split("-")[0],g[t])){var i=g[t];return e.each(y,(function(e,t){t in i&&(n[t]=i[t])})),n}}c.prototype={updateDates:function(){this.dates=e.map(this.pickers,(function(e){return e.getUTCDate()})),this.updateRanges()},updateRanges:function(){var t=e.map(this.dates,(function(e){return e.valueOf()}));e.each(this.pickers,(function(e,n){n.setRange(t)}))},clearDates:function(){e.each(this.pickers,(function(e,t){t.clearDates()}))},dateUpdated:function(n){if(!this.updating){this.updating=!0;var i=e.data(n.target,"datepicker");if(i!==t){var o=i.getUTCDate(),r=this.keepEmptyValues,s=e.inArray(n.target,this.inputs),a=s-1,l=s+1,c=this.inputs.length;if(-1!==s){if(e.each(this.pickers,(function(e,t){t.getUTCDate()||t!==i&&r||t.setUTCDate(o)})),o<this.dates[a])for(;a>=0&&o<this.dates[a];)this.pickers[a--].setUTCDate(o);else if(o>this.dates[l])for(;l<c&&o>this.dates[l];)this.pickers[l++].setUTCDate(o);this.updateDates(),delete this.updating}}}},destroy:function(){e.map(this.pickers,(function(e){e.destroy()})),e(this.inputs).off("changeDate",this.dateUpdated),delete this.element.data().datepicker},remove:r("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")};var p=e.fn.datepicker,h=function(n){var i,o=Array.apply(null,arguments);if(o.shift(),this.each((function(){var t=e(this),r=t.data("datepicker"),s="object"==typeof n&&n;if(!r){var a=d(this,"date"),p=u(e.extend({},f,a,s).language),h=e.extend({},f,p,a,s);t.hasClass("input-daterange")||h.inputs?(e.extend(h,{inputs:h.inputs||t.find("input").toArray()}),r=new c(this,h)):r=new l(this,h),t.data("datepicker",r)}"string"==typeof n&&"function"==typeof r[n]&&(i=r[n].apply(r,o))})),i===t||i instanceof l||i instanceof c)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+n+" function)");return i};e.fn.datepicker=h;var f=e.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:e.noop,beforeShowMonth:e.noop,beforeShowYear:e.noop,beforeShowDecade:e.noop,beforeShowCentury:e.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,updateViewDate:!0,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&#x00AB;",rightArrow:"&#x00BB;"},showWeekDays:!0},y=e.fn.datepicker.locale_opts=["format","rtl","weekStart"];e.fn.datepicker.Constructor=l;var g=e.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},m={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(e){if("function"==typeof e.toValue&&"function"==typeof e.toDisplay)return e;var t=e.replace(this.validParts,"\0").split("\0"),n=e.match(this.validParts);if(!t||!t.length||!n||0===n.length)throw new Error("Invalid date format.");return{separators:t,parts:n}},parseDate:function(n,o,r,s){if(!n)return t;if(n instanceof Date)return n;if("string"==typeof o&&(o=m.parseFormat(o)),o.toValue)return o.toValue(n,o,r);var a,c,d,u,p,h={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},f={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(n in f&&(n=f[n]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(n)){for(a=n.match(/([\-+]\d+)([dmwy])/gi),n=new Date,u=0;u<a.length;u++)c=a[u].match(/([\-+]\d+)([dmwy])/i),d=Number(c[1]),p=h[c[2].toLowerCase()],n=l.prototype[p](n,d);return l.prototype._zero_utc_time(n)}a=n&&n.match(this.nonpunctuation)||[];var y,v,x={},b=["yyyy","yy","M","MM","m","mm","d","dd"],w={yyyy:function(e,t){return e.setUTCFullYear(s?(!0===(i=s)&&(i=10),(n=t)<100&&(n+=2e3)>(new Date).getFullYear()+i&&(n-=100),n):t);var n,i},m:function(e,t){if(isNaN(e))return e;for(t-=1;t<0;)t+=12;for(t%=12,e.setUTCMonth(t);e.getUTCMonth()!==t;)e.setUTCDate(e.getUTCDate()-1);return e},d:function(e,t){return e.setUTCDate(t)}};w.yy=w.yyyy,w.M=w.MM=w.mm=w.m,w.dd=w.d,n=i();var _=o.parts.slice();function k(){var e=this.slice(0,a[u].length),t=a[u].slice(0,e.length);return e.toLowerCase()===t.toLowerCase()}if(a.length!==_.length&&(_=e(_).filter((function(t,n){return-1!==e.inArray(n,b)})).toArray()),a.length===_.length){var T,j,C;for(u=0,T=_.length;u<T;u++){if(y=parseInt(a[u],10),c=_[u],isNaN(y))switch(c){case"MM":v=e(g[r].months).filter(k),y=e.inArray(v[0],g[r].months)+1;break;case"M":v=e(g[r].monthsShort).filter(k),y=e.inArray(v[0],g[r].monthsShort)+1}x[c]=y}for(u=0;u<b.length;u++)(C=b[u])in x&&!isNaN(x[C])&&(j=new Date(n),w[C](j,x[C]),isNaN(j)||(n=j))}return n},formatDate:function(t,n,i){if(!t)return"";if("string"==typeof n&&(n=m.parseFormat(n)),n.toDisplay)return n.toDisplay(t,n,i);var o={d:t.getUTCDate(),D:g[i].daysShort[t.getUTCDay()],DD:g[i].days[t.getUTCDay()],m:t.getUTCMonth()+1,M:g[i].monthsShort[t.getUTCMonth()],MM:g[i].months[t.getUTCMonth()],yy:t.getUTCFullYear().toString().substring(2),yyyy:t.getUTCFullYear()};o.dd=(o.d<10?"0":"")+o.d,o.mm=(o.m<10?"0":"")+o.m,t=[];for(var r=e.extend([],n.separators),s=0,a=n.parts.length;s<=a;s++)r.length&&t.push(r.shift()),t.push(o[n.parts[s]]);return t.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">'+f.templates.leftArrow+'</th><th colspan="5" class="datepicker-switch"></th><th class="next">'+f.templates.rightArrow+"</th></tr></thead>",contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};m.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+m.headTemplate+"<tbody></tbody>"+m.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+m.headTemplate+m.contTemplate+m.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+m.headTemplate+m.contTemplate+m.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+m.headTemplate+m.contTemplate+m.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+m.headTemplate+m.contTemplate+m.footTemplate+"</table></div></div>",e.fn.datepicker.DPGlobal=m,e.fn.datepicker.noConflict=function(){return e.fn.datepicker=p,this},e.fn.datepicker.version="1.9.0",e.fn.datepicker.deprecated=function(e){var t=window.console;t&&t.warn&&t.warn("DEPRECATED: "+e)},e(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',(function(t){var n=e(this);n.data("datepicker")||(t.preventDefault(),h.call(n,"show"))})),e((function(){h.call(e('[data-provide="datepicker-inline"]'))}))})?i.apply(t,o):i)||(e.exports=r)},function(e,t,n){var i,o,r;!function(s){"use strict";o=[n(0)],void 0===(r="function"==typeof(i=function(e){var t=window.Slick||{};(n=0,t=function(t,i){var o,r=this;r.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:e(t),appendDots:e(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(t,n){return e('<button type="button" />').text(n+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},r.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},e.extend(r,r.initials),r.activeBreakpoint=null,r.animType=null,r.animProp=null,r.breakpoints=[],r.breakpointSettings=[],r.cssTransitions=!1,r.focussed=!1,r.interrupted=!1,r.hidden="hidden",r.paused=!0,r.positionProp=null,r.respondTo=null,r.rowCount=1,r.shouldClick=!0,r.$slider=e(t),r.$slidesCache=null,r.transformType=null,r.transitionType=null,r.visibilityChange="visibilitychange",r.windowWidth=0,r.windowTimer=null,o=e(t).data("slick")||{},r.options=e.extend({},r.defaults,i,o),r.currentSlide=r.options.initialSlide,r.originalSettings=r.options,void 0!==document.mozHidden?(r.hidden="mozHidden",r.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(r.hidden="webkitHidden",r.visibilityChange="webkitvisibilitychange"),r.autoPlay=e.proxy(r.autoPlay,r),r.autoPlayClear=e.proxy(r.autoPlayClear,r),r.autoPlayIterator=e.proxy(r.autoPlayIterator,r),r.changeSlide=e.proxy(r.changeSlide,r),r.clickHandler=e.proxy(r.clickHandler,r),r.selectHandler=e.proxy(r.selectHandler,r),r.setPosition=e.proxy(r.setPosition,r),r.swipeHandler=e.proxy(r.swipeHandler,r),r.dragHandler=e.proxy(r.dragHandler,r),r.keyHandler=e.proxy(r.keyHandler,r),r.instanceUid=n++,r.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,r.registerBreakpoints(),r.init(!0)}).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},t.prototype.addSlide=t.prototype.slickAdd=function(t,n,i){var o=this;if("boolean"==typeof n)i=n,n=null;else if(n<0||n>=o.slideCount)return!1;o.unload(),"number"==typeof n?0===n&&0===o.$slides.length?e(t).appendTo(o.$slideTrack):i?e(t).insertBefore(o.$slides.eq(n)):e(t).insertAfter(o.$slides.eq(n)):!0===i?e(t).prependTo(o.$slideTrack):e(t).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each((function(t,n){e(n).attr("data-slick-index",t)})),o.$slidesCache=o.$slides,o.reinit()},t.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},t.prototype.animateSlide=function(t,n){var i={},o=this;o.animateHeight(),!0===o.options.rtl&&!1===o.options.vertical&&(t=-t),!1===o.transformsEnabled?!1===o.options.vertical?o.$slideTrack.animate({left:t},o.options.speed,o.options.easing,n):o.$slideTrack.animate({top:t},o.options.speed,o.options.easing,n):!1===o.cssTransitions?(!0===o.options.rtl&&(o.currentLeft=-o.currentLeft),e({animStart:o.currentLeft}).animate({animStart:t},{duration:o.options.speed,easing:o.options.easing,step:function(e){e=Math.ceil(e),!1===o.options.vertical?(i[o.animType]="translate("+e+"px, 0px)",o.$slideTrack.css(i)):(i[o.animType]="translate(0px,"+e+"px)",o.$slideTrack.css(i))},complete:function(){n&&n.call()}})):(o.applyTransition(),t=Math.ceil(t),!1===o.options.vertical?i[o.animType]="translate3d("+t+"px, 0px, 0px)":i[o.animType]="translate3d(0px,"+t+"px, 0px)",o.$slideTrack.css(i),n&&setTimeout((function(){o.disableTransition(),n.call()}),o.options.speed))},t.prototype.getNavTarget=function(){var t=this.options.asNavFor;return t&&null!==t&&(t=e(t).not(this.$slider)),t},t.prototype.asNavFor=function(t){var n=this.getNavTarget();null!==n&&"object"==typeof n&&n.each((function(){var n=e(this).slick("getSlick");n.unslicked||n.slideHandler(t,!0)}))},t.prototype.applyTransition=function(e){var t=this,n={};!1===t.options.fade?n[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:n[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,!1===t.options.fade?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},t.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},t.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(!1===e.options.infinite&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1==0&&(e.direction=1))),e.slideHandler(t))},t.prototype.buildArrows=function(){var t=this;!0===t.options.arrows&&(t.$prevArrow=e(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=e(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),!0!==t.options.infinite&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},t.prototype.buildDots=function(){var t,n,i=this;if(!0===i.options.dots&&i.slideCount>i.options.slidesToShow){for(i.$slider.addClass("slick-dotted"),n=e("<ul />").addClass(i.options.dotsClass),t=0;t<=i.getDotCount();t+=1)n.append(e("<li />").append(i.options.customPaging.call(this,i,t)));i.$dots=n.appendTo(i.options.appendDots),i.$dots.find("li").first().addClass("slick-active")}},t.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each((function(t,n){e(n).attr("data-slick-index",t).data("originalStyling",e(n).attr("style")||"")})),t.$slider.addClass("slick-slider"),t.$slideTrack=0===t.slideCount?e('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),!0!==t.options.centerMode&&!0!==t.options.swipeToSlide||(t.options.slidesToScroll=1),e("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),!0===t.options.draggable&&t.$list.addClass("draggable")},t.prototype.buildRows=function(){var e,t,n,i,o,r,s,a=this;if(i=document.createDocumentFragment(),r=a.$slider.children(),a.options.rows>0){for(s=a.options.slidesPerRow*a.options.rows,o=Math.ceil(r.length/s),e=0;e<o;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var c=document.createElement("div");for(n=0;n<a.options.slidesPerRow;n++){var d=e*s+(t*a.options.slidesPerRow+n);r.get(d)&&c.appendChild(r.get(d))}l.appendChild(c)}i.appendChild(l)}a.$slider.empty().append(i),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},t.prototype.checkResponsive=function(t,n){var i,o,r,s=this,a=!1,l=s.$slider.width(),c=window.innerWidth||e(window).width();if("window"===s.respondTo?r=c:"slider"===s.respondTo?r=l:"min"===s.respondTo&&(r=Math.min(c,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){for(i in o=null,s.breakpoints)s.breakpoints.hasOwnProperty(i)&&(!1===s.originalSettings.mobileFirst?r<s.breakpoints[i]&&(o=s.breakpoints[i]):r>s.breakpoints[i]&&(o=s.breakpoints[i]));null!==o?null!==s.activeBreakpoint?(o!==s.activeBreakpoint||n)&&(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[o]),!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):(s.activeBreakpoint=o,"unslick"===s.breakpointSettings[o]?s.unslick(o):(s.options=e.extend({},s.originalSettings,s.breakpointSettings[o]),!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t)),a=o):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,!0===t&&(s.currentSlide=s.options.initialSlide),s.refresh(t),a=o),t||!1===a||s.$slider.trigger("breakpoint",[s,a])}},t.prototype.changeSlide=function(t,n){var i,o,r=this,s=e(t.currentTarget);switch(s.is("a")&&t.preventDefault(),s.is("li")||(s=s.closest("li")),i=r.slideCount%r.options.slidesToScroll!=0?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,t.data.message){case"previous":o=0===i?r.options.slidesToScroll:r.options.slidesToShow-i,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-o,!1,n);break;case"next":o=0===i?r.options.slidesToScroll:i,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+o,!1,n);break;case"index":var a=0===t.data.index?0:t.data.index||s.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(a),!1,n),s.children().trigger("focus");break;default:return}},t.prototype.checkNavigable=function(e){var t,n;if(n=0,e>(t=this.getNavigableIndexes())[t.length-1])e=t[t.length-1];else for(var i in t){if(e<t[i]){e=n;break}n=t[i]}return e},t.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&null!==t.$dots&&(e("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",e.proxy(t.interrupt,t,!0)).off("mouseleave.slick",e.proxy(t.interrupt,t,!1)),!0===t.options.accessibility&&t.$dots.off("keydown.slick",t.keyHandler)),t.$slider.off("focus.slick blur.slick"),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow&&t.$prevArrow.off("keydown.slick",t.keyHandler),t.$nextArrow&&t.$nextArrow.off("keydown.slick",t.keyHandler))),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),e(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),!0===t.options.accessibility&&t.$list.off("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().off("click.slick",t.selectHandler),e(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),e(window).off("resize.slick.slick-"+t.instanceUid,t.resize),e("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),e(window).off("load.slick.slick-"+t.instanceUid,t.setPosition)},t.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.cleanUpRows=function(){var e,t=this;t.options.rows>0&&((e=t.$slides.children().children()).removeAttr("style"),t.$slider.empty().append(e))},t.prototype.clickHandler=function(e){!1===this.shouldClick&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},t.prototype.destroy=function(t){var n=this;n.autoPlayClear(),n.touchObject={},n.cleanUpEvents(),e(".slick-cloned",n.$slider).detach(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.$prevArrow.length&&(n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove()),n.$nextArrow&&n.$nextArrow.length&&(n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove()),n.$slides&&(n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function(){e(this).attr("style",e(this).data("originalStyling"))})),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.detach(),n.$list.detach(),n.$slider.append(n.$slides)),n.cleanUpRows(),n.$slider.removeClass("slick-slider"),n.$slider.removeClass("slick-initialized"),n.$slider.removeClass("slick-dotted"),n.unslicked=!0,t||n.$slider.trigger("destroy",[n])},t.prototype.disableTransition=function(e){var t=this,n={};n[t.transitionType]="",!1===t.options.fade?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},t.prototype.fadeSlide=function(e,t){var n=this;!1===n.cssTransitions?(n.$slides.eq(e).css({zIndex:n.options.zIndex}),n.$slides.eq(e).animate({opacity:1},n.options.speed,n.options.easing,t)):(n.applyTransition(e),n.$slides.eq(e).css({opacity:1,zIndex:n.options.zIndex}),t&&setTimeout((function(){n.disableTransition(e),t.call()}),n.options.speed))},t.prototype.fadeSlideOut=function(e){var t=this;!1===t.cssTransitions?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},t.prototype.filterSlides=t.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},t.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",(function(n){n.stopImmediatePropagation();var i=e(this);setTimeout((function(){t.options.pauseOnFocus&&(t.focussed=i.is(":focus"),t.autoPlay())}),0)}))},t.prototype.getCurrent=t.prototype.slickCurrentSlide=function(){return this.currentSlide},t.prototype.getDotCount=function(){var e=this,t=0,n=0,i=0;if(!0===e.options.infinite)if(e.slideCount<=e.options.slidesToShow)++i;else for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(!0===e.options.centerMode)i=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else i=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return i-1},t.prototype.getLeft=function(e){var t,n,i,o,r=this,s=0;return r.slideOffset=0,n=r.$slides.first().outerHeight(!0),!0===r.options.infinite?(r.slideCount>r.options.slidesToShow&&(r.slideOffset=r.slideWidth*r.options.slidesToShow*-1,o=-1,!0===r.options.vertical&&!0===r.options.centerMode&&(2===r.options.slidesToShow?o=-1.5:1===r.options.slidesToShow&&(o=-2)),s=n*r.options.slidesToShow*o),r.slideCount%r.options.slidesToScroll!=0&&e+r.options.slidesToScroll>r.slideCount&&r.slideCount>r.options.slidesToShow&&(e>r.slideCount?(r.slideOffset=(r.options.slidesToShow-(e-r.slideCount))*r.slideWidth*-1,s=(r.options.slidesToShow-(e-r.slideCount))*n*-1):(r.slideOffset=r.slideCount%r.options.slidesToScroll*r.slideWidth*-1,s=r.slideCount%r.options.slidesToScroll*n*-1))):e+r.options.slidesToShow>r.slideCount&&(r.slideOffset=(e+r.options.slidesToShow-r.slideCount)*r.slideWidth,s=(e+r.options.slidesToShow-r.slideCount)*n),r.slideCount<=r.options.slidesToShow&&(r.slideOffset=0,s=0),!0===r.options.centerMode&&r.slideCount<=r.options.slidesToShow?r.slideOffset=r.slideWidth*Math.floor(r.options.slidesToShow)/2-r.slideWidth*r.slideCount/2:!0===r.options.centerMode&&!0===r.options.infinite?r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)-r.slideWidth:!0===r.options.centerMode&&(r.slideOffset=0,r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)),t=!1===r.options.vertical?e*r.slideWidth*-1+r.slideOffset:e*n*-1+s,!0===r.options.variableWidth&&(i=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(e):r.$slideTrack.children(".slick-slide").eq(e+r.options.slidesToShow),t=!0===r.options.rtl?i[0]?-1*(r.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,!0===r.options.centerMode&&(i=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(e):r.$slideTrack.children(".slick-slide").eq(e+r.options.slidesToShow+1),t=!0===r.options.rtl?i[0]?-1*(r.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,t+=(r.$list.width()-i.outerWidth())/2)),t},t.prototype.getOption=t.prototype.slickGetOption=function(e){return this.options[e]},t.prototype.getNavigableIndexes=function(){var e,t=this,n=0,i=0,o=[];for(!1===t.options.infinite?e=t.slideCount:(n=-1*t.options.slidesToScroll,i=-1*t.options.slidesToScroll,e=2*t.slideCount);n<e;)o.push(n),n=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return o},t.prototype.getSlick=function(){return this},t.prototype.getSlideCount=function(){var t,n,i=this;return n=!0===i.options.centerMode?i.slideWidth*Math.floor(i.options.slidesToShow/2):0,!0===i.options.swipeToSlide?(i.$slideTrack.find(".slick-slide").each((function(o,r){if(r.offsetLeft-n+e(r).outerWidth()/2>-1*i.swipeLeft)return t=r,!1})),Math.abs(e(t).attr("data-slick-index")-i.currentSlide)||1):i.options.slidesToScroll},t.prototype.goTo=t.prototype.slickGoTo=function(e,t){this.changeSlide({data:{message:"index",index:parseInt(e)}},t)},t.prototype.init=function(t){var n=this;e(n.$slider).hasClass("slick-initialized")||(e(n.$slider).addClass("slick-initialized"),n.buildRows(),n.buildOut(),n.setProps(),n.startLoad(),n.loadSlider(),n.initializeEvents(),n.updateArrows(),n.updateDots(),n.checkResponsive(!0),n.focusHandler()),t&&n.$slider.trigger("init",[n]),!0===n.options.accessibility&&n.initADA(),n.options.autoplay&&(n.paused=!1,n.autoPlay())},t.prototype.initADA=function(){var t=this,n=Math.ceil(t.slideCount/t.options.slidesToShow),i=t.getNavigableIndexes().filter((function(e){return e>=0&&e<t.slideCount}));t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==t.$dots&&(t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(n){var o=i.indexOf(n);if(e(this).attr({role:"tabpanel",id:"slick-slide"+t.instanceUid+n,tabindex:-1}),-1!==o){var r="slick-slide-control"+t.instanceUid+o;e("#"+r).length&&e(this).attr({"aria-describedby":r})}})),t.$dots.attr("role","tablist").find("li").each((function(o){var r=i[o];e(this).attr({role:"presentation"}),e(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+t.instanceUid+o,"aria-controls":"slick-slide"+t.instanceUid+r,"aria-label":o+1+" of "+n,"aria-selected":null,tabindex:"-1"})})).eq(t.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var o=t.currentSlide,r=o+t.options.slidesToShow;o<r;o++)t.options.focusOnChange?t.$slides.eq(o).attr({tabindex:"0"}):t.$slides.eq(o).removeAttr("tabindex");t.activateADA()},t.prototype.initArrowEvents=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow.on("keydown.slick",e.keyHandler),e.$nextArrow.on("keydown.slick",e.keyHandler)))},t.prototype.initDotEvents=function(){var t=this;!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&(e("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),!0===t.options.accessibility&&t.$dots.on("keydown.slick",t.keyHandler)),!0===t.options.dots&&!0===t.options.pauseOnDotsHover&&t.slideCount>t.options.slidesToShow&&e("li",t.$dots).on("mouseenter.slick",e.proxy(t.interrupt,t,!0)).on("mouseleave.slick",e.proxy(t.interrupt,t,!1))},t.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",e.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",e.proxy(t.interrupt,t,!1)))},t.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),e(document).on(t.visibilityChange,e.proxy(t.visibility,t)),!0===t.options.accessibility&&t.$list.on("keydown.slick",t.keyHandler),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),e(window).on("orientationchange.slick.slick-"+t.instanceUid,e.proxy(t.orientationChange,t)),e(window).on("resize.slick.slick-"+t.instanceUid,e.proxy(t.resize,t)),e("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),e(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),e(t.setPosition)},t.prototype.initUI=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},t.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===t.options.accessibility?t.changeSlide({data:{message:!0===t.options.rtl?"next":"previous"}}):39===e.keyCode&&!0===t.options.accessibility&&t.changeSlide({data:{message:!0===t.options.rtl?"previous":"next"}}))},t.prototype.lazyLoad=function(){var t,n,i,o=this;function r(t){e("img[data-lazy]",t).each((function(){var t=e(this),n=e(this).attr("data-lazy"),i=e(this).attr("data-srcset"),r=e(this).attr("data-sizes")||o.$slider.attr("data-sizes"),s=document.createElement("img");s.onload=function(){t.animate({opacity:0},100,(function(){i&&(t.attr("srcset",i),r&&t.attr("sizes",r)),t.attr("src",n).animate({opacity:1},200,(function(){t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")})),o.$slider.trigger("lazyLoaded",[o,t,n])}))},s.onerror=function(){t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),o.$slider.trigger("lazyLoadError",[o,t,n])},s.src=n}))}if(!0===o.options.centerMode?!0===o.options.infinite?i=(n=o.currentSlide+(o.options.slidesToShow/2+1))+o.options.slidesToShow+2:(n=Math.max(0,o.currentSlide-(o.options.slidesToShow/2+1)),i=o.options.slidesToShow/2+1+2+o.currentSlide):(n=o.options.infinite?o.options.slidesToShow+o.currentSlide:o.currentSlide,i=Math.ceil(n+o.options.slidesToShow),!0===o.options.fade&&(n>0&&n--,i<=o.slideCount&&i++)),t=o.$slider.find(".slick-slide").slice(n,i),"anticipated"===o.options.lazyLoad)for(var s=n-1,a=i,l=o.$slider.find(".slick-slide"),c=0;c<o.options.slidesToScroll;c++)s<0&&(s=o.slideCount-1),t=(t=t.add(l.eq(s))).add(l.eq(a)),s--,a++;r(t),o.slideCount<=o.options.slidesToShow?r(o.$slider.find(".slick-slide")):o.currentSlide>=o.slideCount-o.options.slidesToShow?r(o.$slider.find(".slick-cloned").slice(0,o.options.slidesToShow)):0===o.currentSlide&&r(o.$slider.find(".slick-cloned").slice(-1*o.options.slidesToShow))},t.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},t.prototype.next=t.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},t.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},t.prototype.pause=t.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},t.prototype.play=t.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},t.prototype.postSlide=function(t){var n=this;n.unslicked||(n.$slider.trigger("afterChange",[n,t]),n.animating=!1,n.slideCount>n.options.slidesToShow&&n.setPosition(),n.swipeLeft=null,n.options.autoplay&&n.autoPlay(),!0===n.options.accessibility&&(n.initADA(),n.options.focusOnChange&&e(n.$slides.get(n.currentSlide)).attr("tabindex",0).focus()))},t.prototype.prev=t.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.progressiveLazyLoad=function(t){t=t||1;var n,i,o,r,s,a=this,l=e("img[data-lazy]",a.$slider);l.length?(n=l.first(),i=n.attr("data-lazy"),o=n.attr("data-srcset"),r=n.attr("data-sizes")||a.$slider.attr("data-sizes"),(s=document.createElement("img")).onload=function(){o&&(n.attr("srcset",o),r&&n.attr("sizes",r)),n.attr("src",i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===a.options.adaptiveHeight&&a.setPosition(),a.$slider.trigger("lazyLoaded",[a,n,i]),a.progressiveLazyLoad()},s.onerror=function(){t<3?setTimeout((function(){a.progressiveLazyLoad(t+1)}),500):(n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,n,i]),a.progressiveLazyLoad())},s.src=i):a.$slider.trigger("allImagesLoaded",[a])},t.prototype.refresh=function(t){var n,i,o=this;i=o.slideCount-o.options.slidesToShow,!o.options.infinite&&o.currentSlide>i&&(o.currentSlide=i),o.slideCount<=o.options.slidesToShow&&(o.currentSlide=0),n=o.currentSlide,o.destroy(!0),e.extend(o,o.initials,{currentSlide:n}),o.init(),t||o.changeSlide({data:{message:"index",index:n}},!1)},t.prototype.registerBreakpoints=function(){var t,n,i,o=this,r=o.options.responsive||null;if("array"===e.type(r)&&r.length){for(t in o.respondTo=o.options.respondTo||"window",r)if(i=o.breakpoints.length-1,r.hasOwnProperty(t)){for(n=r[t].breakpoint;i>=0;)o.breakpoints[i]&&o.breakpoints[i]===n&&o.breakpoints.splice(i,1),i--;o.breakpoints.push(n),o.breakpointSettings[n]=r[t].settings}o.breakpoints.sort((function(e,t){return o.options.mobileFirst?e-t:t-e}))}},t.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&0!==t.currentSlide&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),!0===t.options.focusOnSelect&&e(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses("number"==typeof t.currentSlide?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},t.prototype.resize=function(){var t=this;e(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout((function(){t.windowWidth=e(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()}),50))},t.prototype.removeSlide=t.prototype.slickRemove=function(e,t,n){var i=this;if(e="boolean"==typeof e?!0===(t=e)?0:i.slideCount-1:!0===t?--e:e,i.slideCount<1||e<0||e>i.slideCount-1)return!1;i.unload(),!0===n?i.$slideTrack.children().remove():i.$slideTrack.children(this.options.slide).eq(e).remove(),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slidesCache=i.$slides,i.reinit()},t.prototype.setCSS=function(e){var t,n,i=this,o={};!0===i.options.rtl&&(e=-e),t="left"==i.positionProp?Math.ceil(e)+"px":"0px",n="top"==i.positionProp?Math.ceil(e)+"px":"0px",o[i.positionProp]=e,!1===i.transformsEnabled?i.$slideTrack.css(o):(o={},!1===i.cssTransitions?(o[i.animType]="translate("+t+", "+n+")",i.$slideTrack.css(o)):(o[i.animType]="translate3d("+t+", "+n+", 0px)",i.$slideTrack.css(o)))},t.prototype.setDimensions=function(){var e=this;!1===e.options.vertical?!0===e.options.centerMode&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),!0===e.options.centerMode&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),!1===e.options.vertical&&!1===e.options.variableWidth?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):!0===e.options.variableWidth?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();!1===e.options.variableWidth&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},t.prototype.setFade=function(){var t,n=this;n.$slides.each((function(i,o){t=n.slideWidth*i*-1,!0===n.options.rtl?e(o).css({position:"relative",right:t,top:0,zIndex:n.options.zIndex-2,opacity:0}):e(o).css({position:"relative",left:t,top:0,zIndex:n.options.zIndex-2,opacity:0})})),n.$slides.eq(n.currentSlide).css({zIndex:n.options.zIndex-1,opacity:1})},t.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},t.prototype.setOption=t.prototype.slickSetOption=function(){var t,n,i,o,r,s=this,a=!1;if("object"===e.type(arguments[0])?(i=arguments[0],a=arguments[1],r="multiple"):"string"===e.type(arguments[0])&&(i=arguments[0],o=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===e.type(arguments[1])?r="responsive":void 0!==arguments[1]&&(r="single")),"single"===r)s.options[i]=o;else if("multiple"===r)e.each(i,(function(e,t){s.options[e]=t}));else if("responsive"===r)for(n in o)if("array"!==e.type(s.options.responsive))s.options.responsive=[o[n]];else{for(t=s.options.responsive.length-1;t>=0;)s.options.responsive[t].breakpoint===o[n].breakpoint&&s.options.responsive.splice(t,1),t--;s.options.responsive.push(o[n])}a&&(s.unload(),s.reinit())},t.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),!1===e.options.fade?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},t.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=!0===e.options.vertical?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||!0===e.options.useCSS&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&!1!==e.animType&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&!1!==e.animType},t.prototype.setSlideClasses=function(e){var t,n,i,o,r=this;if(n=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),r.$slides.eq(e).addClass("slick-current"),!0===r.options.centerMode){var s=r.options.slidesToShow%2==0?1:0;t=Math.floor(r.options.slidesToShow/2),!0===r.options.infinite&&(e>=t&&e<=r.slideCount-1-t?r.$slides.slice(e-t+s,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(i=r.options.slidesToShow+e,n.slice(i-t+1+s,i+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?n.eq(n.length-1-r.options.slidesToShow).addClass("slick-center"):e===r.slideCount-1&&n.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(e).addClass("slick-center")}else e>=0&&e<=r.slideCount-r.options.slidesToShow?r.$slides.slice(e,e+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):n.length<=r.options.slidesToShow?n.addClass("slick-active").attr("aria-hidden","false"):(o=r.slideCount%r.options.slidesToShow,i=!0===r.options.infinite?r.options.slidesToShow+e:e,r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-e<r.options.slidesToShow?n.slice(i-(r.options.slidesToShow-o),i+o).addClass("slick-active").attr("aria-hidden","false"):n.slice(i,i+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==r.options.lazyLoad&&"anticipated"!==r.options.lazyLoad||r.lazyLoad()},t.prototype.setupInfinite=function(){var t,n,i,o=this;if(!0===o.options.fade&&(o.options.centerMode=!1),!0===o.options.infinite&&!1===o.options.fade&&(n=null,o.slideCount>o.options.slidesToShow)){for(i=!0===o.options.centerMode?o.options.slidesToShow+1:o.options.slidesToShow,t=o.slideCount;t>o.slideCount-i;t-=1)n=t-1,e(o.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n-o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");for(t=0;t<i+o.slideCount;t+=1)n=t,e(o.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n+o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");o.$slideTrack.find(".slick-cloned").find("[id]").each((function(){e(this).attr("id","")}))}},t.prototype.interrupt=function(e){e||this.autoPlay(),this.interrupted=e},t.prototype.selectHandler=function(t){var n=this,i=e(t.target).is(".slick-slide")?e(t.target):e(t.target).parents(".slick-slide"),o=parseInt(i.attr("data-slick-index"));o||(o=0),n.slideCount<=n.options.slidesToShow?n.slideHandler(o,!1,!0):n.slideHandler(o)},t.prototype.slideHandler=function(e,t,n){var i,o,r,s,a,l,c=this;if(t=t||!1,!(!0===c.animating&&!0===c.options.waitForAnimate||!0===c.options.fade&&c.currentSlide===e))if(!1===t&&c.asNavFor(e),i=e,a=c.getLeft(i),s=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?s:c.swipeLeft,!1===c.options.infinite&&!1===c.options.centerMode&&(e<0||e>c.getDotCount()*c.options.slidesToScroll))!1===c.options.fade&&(i=c.currentSlide,!0!==n&&c.slideCount>c.options.slidesToShow?c.animateSlide(s,(function(){c.postSlide(i)})):c.postSlide(i));else if(!1===c.options.infinite&&!0===c.options.centerMode&&(e<0||e>c.slideCount-c.options.slidesToScroll))!1===c.options.fade&&(i=c.currentSlide,!0!==n&&c.slideCount>c.options.slidesToShow?c.animateSlide(s,(function(){c.postSlide(i)})):c.postSlide(i));else{if(c.options.autoplay&&clearInterval(c.autoPlayTimer),o=i<0?c.slideCount%c.options.slidesToScroll!=0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+i:i>=c.slideCount?c.slideCount%c.options.slidesToScroll!=0?0:i-c.slideCount:i,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,o]),r=c.currentSlide,c.currentSlide=o,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&(l=(l=c.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(c.currentSlide),c.updateDots(),c.updateArrows(),!0===c.options.fade)return!0!==n?(c.fadeSlideOut(r),c.fadeSlide(o,(function(){c.postSlide(o)}))):c.postSlide(o),void c.animateHeight();!0!==n&&c.slideCount>c.options.slidesToShow?c.animateSlide(a,(function(){c.postSlide(o)})):c.postSlide(o)}},t.prototype.startLoad=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},t.prototype.swipeDirection=function(){var e,t,n,i,o=this;return e=o.touchObject.startX-o.touchObject.curX,t=o.touchObject.startY-o.touchObject.curY,n=Math.atan2(t,e),(i=Math.round(180*n/Math.PI))<0&&(i=360-Math.abs(i)),i<=45&&i>=0||i<=360&&i>=315?!1===o.options.rtl?"left":"right":i>=135&&i<=225?!1===o.options.rtl?"right":"left":!0===o.options.verticalSwiping?i>=35&&i<=135?"down":"up":"vertical"},t.prototype.swipeEnd=function(e){var t,n,i=this;if(i.dragging=!1,i.swiping=!1,i.scrolling)return i.scrolling=!1,!1;if(i.interrupted=!1,i.shouldClick=!(i.touchObject.swipeLength>10),void 0===i.touchObject.curX)return!1;if(!0===i.touchObject.edgeHit&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(n=i.swipeDirection()){case"left":case"down":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.currentDirection=0;break;case"right":case"up":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.currentDirection=1}"vertical"!=n&&(i.slideHandler(t),i.touchObject={},i.$slider.trigger("swipe",[i,n]))}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},t.prototype.swipeHandler=function(e){var t=this;if(!(!1===t.options.swipe||"ontouchend"in document&&!1===t.options.swipe||!1===t.options.draggable&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,!0===t.options.verticalSwiping&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},t.prototype.swipeMove=function(e){var t,n,i,o,r,s,a=this;return r=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!a.dragging||a.scrolling||r&&1!==r.length)&&(t=a.getLeft(a.currentSlide),a.touchObject.curX=void 0!==r?r[0].pageX:e.clientX,a.touchObject.curY=void 0!==r?r[0].pageY:e.clientY,a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curX-a.touchObject.startX,2))),s=Math.round(Math.sqrt(Math.pow(a.touchObject.curY-a.touchObject.startY,2))),!a.options.verticalSwiping&&!a.swiping&&s>4?(a.scrolling=!0,!1):(!0===a.options.verticalSwiping&&(a.touchObject.swipeLength=s),n=a.swipeDirection(),void 0!==e.originalEvent&&a.touchObject.swipeLength>4&&(a.swiping=!0,e.preventDefault()),o=(!1===a.options.rtl?1:-1)*(a.touchObject.curX>a.touchObject.startX?1:-1),!0===a.options.verticalSwiping&&(o=a.touchObject.curY>a.touchObject.startY?1:-1),i=a.touchObject.swipeLength,a.touchObject.edgeHit=!1,!1===a.options.infinite&&(0===a.currentSlide&&"right"===n||a.currentSlide>=a.getDotCount()&&"left"===n)&&(i=a.touchObject.swipeLength*a.options.edgeFriction,a.touchObject.edgeHit=!0),!1===a.options.vertical?a.swipeLeft=t+i*o:a.swipeLeft=t+i*(a.$list.height()/a.listWidth)*o,!0===a.options.verticalSwiping&&(a.swipeLeft=t+i*o),!0!==a.options.fade&&!1!==a.options.touchMove&&(!0===a.animating?(a.swipeLeft=null,!1):void a.setCSS(a.swipeLeft))))},t.prototype.swipeStart=function(e){var t,n=this;if(n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow)return n.touchObject={},!1;void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==t?t.pageX:e.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==t?t.pageY:e.clientY,n.dragging=!0},t.prototype.unfilterSlides=t.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},t.prototype.unload=function(){var t=this;e(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},t.prototype.unslick=function(e){var t=this;t.$slider.trigger("unslick",[t,e]),t.destroy()},t.prototype.updateArrows=function(){var e=this;Math.floor(e.options.slidesToShow/2),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(e.currentSlide>=e.slideCount-e.options.slidesToShow&&!1===e.options.centerMode||e.currentSlide>=e.slideCount-1&&!0===e.options.centerMode)&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},t.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").end(),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active"))},t.prototype.visibility=function(){var e=this;e.options.autoplay&&(document[e.hidden]?e.interrupted=!0:e.interrupted=!1)},e.fn.slick=function(){var e,n,i=this,o=arguments[0],r=Array.prototype.slice.call(arguments,1),s=i.length;for(e=0;e<s;e++)if("object"==typeof o||void 0===o?i[e].slick=new t(i[e],o):n=i[e].slick[o].apply(i[e].slick,r),void 0!==n)return n;return i};var n})?i.apply(t,o):i)||(e.exports=r)}()},function(e,t,n){var i;"undefined"!=typeof self&&self,i=function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./dist/icons.json":function(e){e.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',delete:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"divide-circle":'<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',"divide-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',divide:'<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',dribbble:'<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',table:'<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'}},"./node_modules/classnames/dedupe.js":function(e,t,n){var i;!function(){"use strict";var n=function(){function e(){}function t(e,t){for(var n=t.length,i=0;i<n;++i)o(e,t[i])}e.prototype=Object.create(null);var n={}.hasOwnProperty,i=/\s+/;function o(e,o){if(o){var r=typeof o;"string"===r?function(e,t){for(var n=t.split(i),o=n.length,r=0;r<o;++r)e[n[r]]=!0}(e,o):Array.isArray(o)?t(e,o):"object"===r?function(e,t){for(var i in t)n.call(t,i)&&(e[i]=!!t[i])}(e,o):"number"===r&&function(e,t){e[t]=!0}(e,o)}}return function(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];var r=new e;t(r,i);var s=[];for(var a in r)r[a]&&s.push(a);return s.join(" ")}}();void 0!==e&&e.exports?e.exports=n:void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()},"./node_modules/core-js/es/array/from.js":function(e,t,n){n("./node_modules/core-js/modules/es.string.iterator.js"),n("./node_modules/core-js/modules/es.array.from.js");var i=n("./node_modules/core-js/internals/path.js");e.exports=i.Array.from},"./node_modules/core-js/internals/a-function.js":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"./node_modules/core-js/internals/an-object.js":function(e,t,n){var i=n("./node_modules/core-js/internals/is-object.js");e.exports=function(e){if(!i(e))throw TypeError(String(e)+" is not an object");return e}},"./node_modules/core-js/internals/array-from.js":function(e,t,n){"use strict";var i=n("./node_modules/core-js/internals/bind-context.js"),o=n("./node_modules/core-js/internals/to-object.js"),r=n("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),s=n("./node_modules/core-js/internals/is-array-iterator-method.js"),a=n("./node_modules/core-js/internals/to-length.js"),l=n("./node_modules/core-js/internals/create-property.js"),c=n("./node_modules/core-js/internals/get-iterator-method.js");e.exports=function(e){var t,n,d,u,p=o(e),h="function"==typeof this?this:Array,f=arguments.length,y=f>1?arguments[1]:void 0,g=void 0!==y,m=0,v=c(p);if(g&&(y=i(y,f>2?arguments[2]:void 0,2)),null==v||h==Array&&s(v))for(n=new h(t=a(p.length));t>m;m++)l(n,m,g?y(p[m],m):p[m]);else for(u=v.call(p),n=new h;!(d=u.next()).done;m++)l(n,m,g?r(u,y,[d.value,m],!0):d.value);return n.length=m,n}},"./node_modules/core-js/internals/array-includes.js":function(e,t,n){var i=n("./node_modules/core-js/internals/to-indexed-object.js"),o=n("./node_modules/core-js/internals/to-length.js"),r=n("./node_modules/core-js/internals/to-absolute-index.js");e.exports=function(e){return function(t,n,s){var a,l=i(t),c=o(l.length),d=r(s,c);if(e&&n!=n){for(;c>d;)if((a=l[d++])!=a)return!0}else for(;c>d;d++)if((e||d in l)&&l[d]===n)return e||d||0;return!e&&-1}}},"./node_modules/core-js/internals/bind-context.js":function(e,t,n){var i=n("./node_modules/core-js/internals/a-function.js");e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,o){return e.call(t,n,i,o)}}return function(){return e.apply(t,arguments)}}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":function(e,t,n){var i=n("./node_modules/core-js/internals/an-object.js");e.exports=function(e,t,n,o){try{return o?t(i(n)[0],n[1]):t(n)}catch(t){var r=e.return;throw void 0!==r&&i(r.call(e)),t}}},"./node_modules/core-js/internals/check-correctness-of-iteration.js":function(e,t,n){var i=n("./node_modules/core-js/internals/well-known-symbol.js")("iterator"),o=!1;try{var r=0,s={next:function(){return{done:!!r++}},return:function(){o=!0}};s[i]=function(){return this},Array.from(s,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}},"./node_modules/core-js/internals/classof-raw.js":function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},"./node_modules/core-js/internals/classof.js":function(e,t,n){var i=n("./node_modules/core-js/internals/classof-raw.js"),o=n("./node_modules/core-js/internals/well-known-symbol.js")("toStringTag"),r="Arguments"==i(function(){return arguments}());e.exports=function(e){var t,n,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?n:r?i(t):"Object"==(s=i(t))&&"function"==typeof t.callee?"Arguments":s}},"./node_modules/core-js/internals/copy-constructor-properties.js":function(e,t,n){var i=n("./node_modules/core-js/internals/has.js"),o=n("./node_modules/core-js/internals/own-keys.js"),r=n("./node_modules/core-js/internals/object-get-own-property-descriptor.js"),s=n("./node_modules/core-js/internals/object-define-property.js");e.exports=function(e,t){for(var n=o(t),a=s.f,l=r.f,c=0;c<n.length;c++){var d=n[c];i(e,d)||a(e,d,l(t,d))}}},"./node_modules/core-js/internals/correct-prototype-getter.js":function(e,t,n){var i=n("./node_modules/core-js/internals/fails.js");e.exports=!i((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},"./node_modules/core-js/internals/create-iterator-constructor.js":function(e,t,n){"use strict";var i=n("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,o=n("./node_modules/core-js/internals/object-create.js"),r=n("./node_modules/core-js/internals/create-property-descriptor.js"),s=n("./node_modules/core-js/internals/set-to-string-tag.js"),a=n("./node_modules/core-js/internals/iterators.js"),l=function(){return this};e.exports=function(e,t,n){var c=t+" Iterator";return e.prototype=o(i,{next:r(1,n)}),s(e,c,!1,!0),a[c]=l,e}},"./node_modules/core-js/internals/create-property-descriptor.js":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"./node_modules/core-js/internals/create-property.js":function(e,t,n){"use strict";var i=n("./node_modules/core-js/internals/to-primitive.js"),o=n("./node_modules/core-js/internals/object-define-property.js"),r=n("./node_modules/core-js/internals/create-property-descriptor.js");e.exports=function(e,t,n){var s=i(t);s in e?o.f(e,s,r(0,n)):e[s]=n}},"./node_modules/core-js/internals/define-iterator.js":function(e,t,n){"use strict";var i=n("./node_modules/core-js/internals/export.js"),o=n("./node_modules/core-js/internals/create-iterator-constructor.js"),r=n("./node_modules/core-js/internals/object-get-prototype-of.js"),s=n("./node_modules/core-js/internals/object-set-prototype-of.js"),a=n("./node_modules/core-js/internals/set-to-string-tag.js"),l=n("./node_modules/core-js/internals/hide.js"),c=n("./node_modules/core-js/internals/redefine.js"),d=n("./node_modules/core-js/internals/well-known-symbol.js"),u=n("./node_modules/core-js/internals/is-pure.js"),p=n("./node_modules/core-js/internals/iterators.js"),h=n("./node_modules/core-js/internals/iterators-core.js"),f=h.IteratorPrototype,y=h.BUGGY_SAFARI_ITERATORS,g=d("iterator"),m=function(){return this};e.exports=function(e,t,n,d,h,v,x){o(n,t,d);var b,w,_,k=function(e){if(e===h&&D)return D;if(!y&&e in C)return C[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},T=t+" Iterator",j=!1,C=e.prototype,S=C[g]||C["@@iterator"]||h&&C[h],D=!y&&S||k(h),A="Array"==t&&C.entries||S;if(A&&(b=r(A.call(new e)),f!==Object.prototype&&b.next&&(u||r(b)===f||(s?s(b,f):"function"!=typeof b[g]&&l(b,g,m)),a(b,T,!0,!0),u&&(p[T]=m))),"values"==h&&S&&"values"!==S.name&&(j=!0,D=function(){return S.call(this)}),u&&!x||C[g]===D||l(C,g,D),p[t]=D,h)if(w={values:k("values"),keys:v?D:k("keys"),entries:k("entries")},x)for(_ in w)(y||j||!(_ in C))&&c(C,_,w[_]);else i({target:t,proto:!0,forced:y||j},w);return w}},"./node_modules/core-js/internals/descriptors.js":function(e,t,n){var i=n("./node_modules/core-js/internals/fails.js");e.exports=!i((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"./node_modules/core-js/internals/document-create-element.js":function(e,t,n){var i=n("./node_modules/core-js/internals/global.js"),o=n("./node_modules/core-js/internals/is-object.js"),r=i.document,s=o(r)&&o(r.createElement);e.exports=function(e){return s?r.createElement(e):{}}},"./node_modules/core-js/internals/enum-bug-keys.js":function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"./node_modules/core-js/internals/export.js":function(e,t,n){var i=n("./node_modules/core-js/internals/global.js"),o=n("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,r=n("./node_modules/core-js/internals/hide.js"),s=n("./node_modules/core-js/internals/redefine.js"),a=n("./node_modules/core-js/internals/set-global.js"),l=n("./node_modules/core-js/internals/copy-constructor-properties.js"),c=n("./node_modules/core-js/internals/is-forced.js");e.exports=function(e,t){var n,d,u,p,h,f=e.target,y=e.global,g=e.stat;if(n=y?i:g?i[f]||a(f,{}):(i[f]||{}).prototype)for(d in t){if(p=t[d],u=e.noTargetGet?(h=o(n,d))&&h.value:n[d],!c(y?d:f+(g?".":"#")+d,e.forced)&&void 0!==u){if(typeof p==typeof u)continue;l(p,u)}(e.sham||u&&u.sham)&&r(p,"sham",!0),s(n,d,p,e)}}},"./node_modules/core-js/internals/fails.js":function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/internals/function-to-string.js":function(e,t,n){var i=n("./node_modules/core-js/internals/shared.js");e.exports=i("native-function-to-string",Function.toString)},"./node_modules/core-js/internals/get-iterator-method.js":function(e,t,n){var i=n("./node_modules/core-js/internals/classof.js"),o=n("./node_modules/core-js/internals/iterators.js"),r=n("./node_modules/core-js/internals/well-known-symbol.js")("iterator");e.exports=function(e){if(null!=e)return e[r]||e["@@iterator"]||o[i(e)]}},"./node_modules/core-js/internals/global.js":function(e,t,n){(function(t){var n="object",i=function(e){return e&&e.Math==Math&&e};e.exports=i(typeof globalThis==n&&globalThis)||i(typeof window==n&&window)||i(typeof self==n&&self)||i(typeof t==n&&t)||Function("return this")()}).call(this,n("./node_modules/webpack/buildin/global.js"))},"./node_modules/core-js/internals/has.js":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},"./node_modules/core-js/internals/hidden-keys.js":function(e,t){e.exports={}},"./node_modules/core-js/internals/hide.js":function(e,t,n){var i=n("./node_modules/core-js/internals/descriptors.js"),o=n("./node_modules/core-js/internals/object-define-property.js"),r=n("./node_modules/core-js/internals/create-property-descriptor.js");e.exports=i?function(e,t,n){return o.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},"./node_modules/core-js/internals/html.js":function(e,t,n){var i=n("./node_modules/core-js/internals/global.js").document;e.exports=i&&i.documentElement},"./node_modules/core-js/internals/ie8-dom-define.js":function(e,t,n){var i=n("./node_modules/core-js/internals/descriptors.js"),o=n("./node_modules/core-js/internals/fails.js"),r=n("./node_modules/core-js/internals/document-create-element.js");e.exports=!i&&!o((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},"./node_modules/core-js/internals/indexed-object.js":function(e,t,n){var i=n("./node_modules/core-js/internals/fails.js"),o=n("./node_modules/core-js/internals/classof-raw.js"),r="".split;e.exports=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?r.call(e,""):Object(e)}:Object},"./node_modules/core-js/internals/internal-state.js":function(e,t,n){var i,o,r,s=n("./node_modules/core-js/internals/native-weak-map.js"),a=n("./node_modules/core-js/internals/global.js"),l=n("./node_modules/core-js/internals/is-object.js"),c=n("./node_modules/core-js/internals/hide.js"),d=n("./node_modules/core-js/internals/has.js"),u=n("./node_modules/core-js/internals/shared-key.js"),p=n("./node_modules/core-js/internals/hidden-keys.js"),h=a.WeakMap;if(s){var f=new h,y=f.get,g=f.has,m=f.set;i=function(e,t){return m.call(f,e,t),t},o=function(e){return y.call(f,e)||{}},r=function(e){return g.call(f,e)}}else{var v=u("state");p[v]=!0,i=function(e,t){return c(e,v,t),t},o=function(e){return d(e,v)?e[v]:{}},r=function(e){return d(e,v)}}e.exports={set:i,get:o,has:r,enforce:function(e){return r(e)?o(e):i(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},"./node_modules/core-js/internals/is-array-iterator-method.js":function(e,t,n){var i=n("./node_modules/core-js/internals/well-known-symbol.js"),o=n("./node_modules/core-js/internals/iterators.js"),r=i("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||s[r]===e)}},"./node_modules/core-js/internals/is-forced.js":function(e,t,n){var i=n("./node_modules/core-js/internals/fails.js"),o=/#|\.prototype\./,r=function(e,t){var n=a[s(e)];return n==c||n!=l&&("function"==typeof t?i(t):!!t)},s=r.normalize=function(e){return String(e).replace(o,".").toLowerCase()},a=r.data={},l=r.NATIVE="N",c=r.POLYFILL="P";e.exports=r},"./node_modules/core-js/internals/is-object.js":function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/internals/is-pure.js":function(e,t){e.exports=!1},"./node_modules/core-js/internals/iterators-core.js":function(e,t,n){"use strict";var i,o,r,s=n("./node_modules/core-js/internals/object-get-prototype-of.js"),a=n("./node_modules/core-js/internals/hide.js"),l=n("./node_modules/core-js/internals/has.js"),c=n("./node_modules/core-js/internals/well-known-symbol.js"),d=n("./node_modules/core-js/internals/is-pure.js"),u=c("iterator"),p=!1;[].keys&&("next"in(r=[].keys())?(o=s(s(r)))!==Object.prototype&&(i=o):p=!0),null==i&&(i={}),d||l(i,u)||a(i,u,(function(){return this})),e.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:p}},"./node_modules/core-js/internals/iterators.js":function(e,t){e.exports={}},"./node_modules/core-js/internals/native-symbol.js":function(e,t,n){var i=n("./node_modules/core-js/internals/fails.js");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())}))},"./node_modules/core-js/internals/native-weak-map.js":function(e,t,n){var i=n("./node_modules/core-js/internals/global.js"),o=n("./node_modules/core-js/internals/function-to-string.js"),r=i.WeakMap;e.exports="function"==typeof r&&/native code/.test(o.call(r))},"./node_modules/core-js/internals/object-create.js":function(e,t,n){var i=n("./node_modules/core-js/internals/an-object.js"),o=n("./node_modules/core-js/internals/object-define-properties.js"),r=n("./node_modules/core-js/internals/enum-bug-keys.js"),s=n("./node_modules/core-js/internals/hidden-keys.js"),a=n("./node_modules/core-js/internals/html.js"),l=n("./node_modules/core-js/internals/document-create-element.js"),c=n("./node_modules/core-js/internals/shared-key.js")("IE_PROTO"),d=function(){},u=function(){var e,t=l("iframe"),n=r.length;for(t.style.display="none",a.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u.prototype[r[n]];return u()};e.exports=Object.create||function(e,t){var n;return null!==e?(d.prototype=i(e),n=new d,d.prototype=null,n[c]=e):n=u(),void 0===t?n:o(n,t)},s[c]=!0},"./node_modules/core-js/internals/object-define-properties.js":function(e,t,n){var i=n("./node_modules/core-js/internals/descriptors.js"),o=n("./node_modules/core-js/internals/object-define-property.js"),r=n("./node_modules/core-js/internals/an-object.js"),s=n("./node_modules/core-js/internals/object-keys.js");e.exports=i?Object.defineProperties:function(e,t){r(e);for(var n,i=s(t),a=i.length,l=0;a>l;)o.f(e,n=i[l++],t[n]);return e}},"./node_modules/core-js/internals/object-define-property.js":function(e,t,n){var i=n("./node_modules/core-js/internals/descriptors.js"),o=n("./node_modules/core-js/internals/ie8-dom-define.js"),r=n("./node_modules/core-js/internals/an-object.js"),s=n("./node_modules/core-js/internals/to-primitive.js"),a=Object.defineProperty;t.f=i?a:function(e,t,n){if(r(e),t=s(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"./node_modules/core-js/internals/object-get-own-property-descriptor.js":function(e,t,n){var i=n("./node_modules/core-js/internals/descriptors.js"),o=n("./node_modules/core-js/internals/object-property-is-enumerable.js"),r=n("./node_modules/core-js/internals/create-property-descriptor.js"),s=n("./node_modules/core-js/internals/to-indexed-object.js"),a=n("./node_modules/core-js/internals/to-primitive.js"),l=n("./node_modules/core-js/internals/has.js"),c=n("./node_modules/core-js/internals/ie8-dom-define.js"),d=Object.getOwnPropertyDescriptor;t.f=i?d:function(e,t){if(e=s(e),t=a(t,!0),c)try{return d(e,t)}catch(e){}if(l(e,t))return r(!o.f.call(e,t),e[t])}},"./node_modules/core-js/internals/object-get-own-property-names.js":function(e,t,n){var i=n("./node_modules/core-js/internals/object-keys-internal.js"),o=n("./node_modules/core-js/internals/enum-bug-keys.js").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o)}},"./node_modules/core-js/internals/object-get-own-property-symbols.js":function(e,t){t.f=Object.getOwnPropertySymbols},"./node_modules/core-js/internals/object-get-prototype-of.js":function(e,t,n){var i=n("./node_modules/core-js/internals/has.js"),o=n("./node_modules/core-js/internals/to-object.js"),r=n("./node_modules/core-js/internals/shared-key.js"),s=n("./node_modules/core-js/internals/correct-prototype-getter.js"),a=r("IE_PROTO"),l=Object.prototype;e.exports=s?Object.getPrototypeOf:function(e){return e=o(e),i(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?l:null}},"./node_modules/core-js/internals/object-keys-internal.js":function(e,t,n){var i=n("./node_modules/core-js/internals/has.js"),o=n("./node_modules/core-js/internals/to-indexed-object.js"),r=n("./node_modules/core-js/internals/array-includes.js"),s=n("./node_modules/core-js/internals/hidden-keys.js"),a=r(!1);e.exports=function(e,t){var n,r=o(e),l=0,c=[];for(n in r)!i(s,n)&&i(r,n)&&c.push(n);for(;t.length>l;)i(r,n=t[l++])&&(~a(c,n)||c.push(n));return c}},"./node_modules/core-js/internals/object-keys.js":function(e,t,n){var i=n("./node_modules/core-js/internals/object-keys-internal.js"),o=n("./node_modules/core-js/internals/enum-bug-keys.js");e.exports=Object.keys||function(e){return i(e,o)}},"./node_modules/core-js/internals/object-property-is-enumerable.js":function(e,t,n){"use strict";var i={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,r=o&&!i.call({1:2},1);t.f=r?function(e){var t=o(this,e);return!!t&&t.enumerable}:i},"./node_modules/core-js/internals/object-set-prototype-of.js":function(e,t,n){var i=n("./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,o){return i(n,o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},"./node_modules/core-js/internals/own-keys.js":function(e,t,n){var i=n("./node_modules/core-js/internals/global.js"),o=n("./node_modules/core-js/internals/object-get-own-property-names.js"),r=n("./node_modules/core-js/internals/object-get-own-property-symbols.js"),s=n("./node_modules/core-js/internals/an-object.js"),a=i.Reflect;e.exports=a&&a.ownKeys||function(e){var t=o.f(s(e)),n=r.f;return n?t.concat(n(e)):t}},"./node_modules/core-js/internals/path.js":function(e,t,n){e.exports=n("./node_modules/core-js/internals/global.js")},"./node_modules/core-js/internals/redefine.js":function(e,t,n){var i=n("./node_modules/core-js/internals/global.js"),o=n("./node_modules/core-js/internals/shared.js"),r=n("./node_modules/core-js/internals/hide.js"),s=n("./node_modules/core-js/internals/has.js"),a=n("./node_modules/core-js/internals/set-global.js"),l=n("./node_modules/core-js/internals/function-to-string.js"),c=n("./node_modules/core-js/internals/internal-state.js"),d=c.get,u=c.enforce,p=String(l).split("toString");o("inspectSource",(function(e){return l.call(e)})),(e.exports=function(e,t,n,o){var l=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,d=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof t||s(n,"name")||r(n,"name",t),u(n).source=p.join("string"==typeof t?t:"")),e!==i?(l?!d&&e[t]&&(c=!0):delete e[t],c?e[t]=n:r(e,t,n)):c?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&d(this).source||l.call(this)}))},"./node_modules/core-js/internals/require-object-coercible.js":function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},"./node_modules/core-js/internals/set-global.js":function(e,t,n){var i=n("./node_modules/core-js/internals/global.js"),o=n("./node_modules/core-js/internals/hide.js");e.exports=function(e,t){try{o(i,e,t)}catch(n){i[e]=t}return t}},"./node_modules/core-js/internals/set-to-string-tag.js":function(e,t,n){var i=n("./node_modules/core-js/internals/object-define-property.js").f,o=n("./node_modules/core-js/internals/has.js"),r=n("./node_modules/core-js/internals/well-known-symbol.js")("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,r)&&i(e,r,{configurable:!0,value:t})}},"./node_modules/core-js/internals/shared-key.js":function(e,t,n){var i=n("./node_modules/core-js/internals/shared.js"),o=n("./node_modules/core-js/internals/uid.js"),r=i("keys");e.exports=function(e){return r[e]||(r[e]=o(e))}},"./node_modules/core-js/internals/shared.js":function(e,t,n){var i=n("./node_modules/core-js/internals/global.js"),o=n("./node_modules/core-js/internals/set-global.js"),r=n("./node_modules/core-js/internals/is-pure.js"),s=i["__core-js_shared__"]||o("__core-js_shared__",{});(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.1.3",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/internals/string-at.js":function(e,t,n){var i=n("./node_modules/core-js/internals/to-integer.js"),o=n("./node_modules/core-js/internals/require-object-coercible.js");e.exports=function(e,t,n){var r,s,a=String(o(e)),l=i(t),c=a.length;return l<0||l>=c?n?"":void 0:(r=a.charCodeAt(l))<55296||r>56319||l+1===c||(s=a.charCodeAt(l+1))<56320||s>57343?n?a.charAt(l):r:n?a.slice(l,l+2):s-56320+(r-55296<<10)+65536}},"./node_modules/core-js/internals/to-absolute-index.js":function(e,t,n){var i=n("./node_modules/core-js/internals/to-integer.js"),o=Math.max,r=Math.min;e.exports=function(e,t){var n=i(e);return n<0?o(n+t,0):r(n,t)}},"./node_modules/core-js/internals/to-indexed-object.js":function(e,t,n){var i=n("./node_modules/core-js/internals/indexed-object.js"),o=n("./node_modules/core-js/internals/require-object-coercible.js");e.exports=function(e){return i(o(e))}},"./node_modules/core-js/internals/to-integer.js":function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},"./node_modules/core-js/internals/to-length.js":function(e,t,n){var i=n("./node_modules/core-js/internals/to-integer.js"),o=Math.min;e.exports=function(e){return e>0?o(i(e),9007199254740991):0}},"./node_modules/core-js/internals/to-object.js":function(e,t,n){var i=n("./node_modules/core-js/internals/require-object-coercible.js");e.exports=function(e){return Object(i(e))}},"./node_modules/core-js/internals/to-primitive.js":function(e,t,n){var i=n("./node_modules/core-js/internals/is-object.js");e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/internals/uid.js":function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":function(e,t,n){var i=n("./node_modules/core-js/internals/is-object.js"),o=n("./node_modules/core-js/internals/an-object.js");e.exports=function(e,t){if(o(e),!i(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}},"./node_modules/core-js/internals/well-known-symbol.js":function(e,t,n){var i=n("./node_modules/core-js/internals/global.js"),o=n("./node_modules/core-js/internals/shared.js"),r=n("./node_modules/core-js/internals/uid.js"),s=n("./node_modules/core-js/internals/native-symbol.js"),a=i.Symbol,l=o("wks");e.exports=function(e){return l[e]||(l[e]=s&&a[e]||(s?a:r)("Symbol."+e))}},"./node_modules/core-js/modules/es.array.from.js":function(e,t,n){var i=n("./node_modules/core-js/internals/export.js"),o=n("./node_modules/core-js/internals/array-from.js");i({target:"Array",stat:!0,forced:!n("./node_modules/core-js/internals/check-correctness-of-iteration.js")((function(e){Array.from(e)}))},{from:o})},"./node_modules/core-js/modules/es.string.iterator.js":function(e,t,n){"use strict";var i=n("./node_modules/core-js/internals/string-at.js"),o=n("./node_modules/core-js/internals/internal-state.js"),r=n("./node_modules/core-js/internals/define-iterator.js"),s=o.set,a=o.getterFor("String Iterator");r(String,"String",(function(e){s(this,{type:"String Iterator",string:String(e),index:0})}),(function(){var e,t=a(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=i(n,o,!0),t.index+=e.length,{value:e,done:!1})}))},"./node_modules/webpack/buildin/global.js":function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./src/default-attrs.json":function(e){e.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}},"./src/icon.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=a(n("./node_modules/classnames/dedupe.js")),s=a(n("./src/default-attrs.json"));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function(){function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];l(this,e),this.name=t,this.contents=n,this.tags=o,this.attrs=i({},s.default,{class:"feather feather-"+t})}return o(e,[{key:"toSvg",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i({},this.attrs,e,{class:(0,r.default)(this.attrs.class,e.class)});return"<svg "+d(t)+">"+this.contents+"</svg>"}},{key:"toString",value:function(){return this.contents}}]),e}();function d(e){return Object.keys(e).map((function(t){return t+'="'+e[t]+'"'})).join(" ")}t.default=c},"./src/icons.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(n("./src/icon.js")),o=s(n("./dist/icons.json")),r=s(n("./src/tags.json"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=Object.keys(o.default).map((function(e){return new i.default(e,o.default[e],r.default[e])})).reduce((function(e,t){return e[t.name]=t,e}),{})},"./src/index.js":function(e,t,n){"use strict";var i=s(n("./src/icons.js")),o=s(n("./src/to-svg.js")),r=s(n("./src/replace.js"));function s(e){return e&&e.__esModule?e:{default:e}}e.exports={icons:i.default,toSvg:o.default,replace:r.default}},"./src/replace.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=s(n("./node_modules/classnames/dedupe.js")),r=s(n("./src/icons.js"));function s(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=l(e),s=n["data-feather"];delete n["data-feather"];var a=r.default[s].toSvg(i({},t,n,{class:(0,o.default)(t.class,n.class)})),c=(new DOMParser).parseFromString(a,"image/svg+xml"),d=c.querySelector("svg");e.parentNode.replaceChild(d,e)}function l(e){return Array.from(e.attributes).reduce((function(e,t){return e[t.name]=t.value,e}),{})}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"==typeof document)throw new Error("`feather.replace()` only works in a browser environment.");var t=document.querySelectorAll("[data-feather]");Array.from(t).forEach((function(t){return a(t,e)}))}},"./src/tags.json":function(e){e.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],anchor:[],archive:["index","box"],"at-sign":["mention","at","email","message"],award:["achievement","badge"],aperture:["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],battery:["power","electricity"],"battery-charging":["power","electricity"],bell:["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read","library"],book:["read","dictionary","booklet","magazine","library"],bookmark:["read","clip","marker","tag"],box:["cube"],briefcase:["work","bag","baggage","folder"],calendar:["date"],camera:["photo"],cast:["chromecast","airplay"],"chevron-down":["expand"],"chevron-up":["collapse"],circle:["off","zero","record"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],code:["source","programming"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],columns:["layout"],command:["keyboard","cmd","terminal","prompt"],compass:["navigation","safari","travel","direction"],copy:["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],cpu:["processor","technology"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage","memory"],delete:["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],facebook:["logo","social"],"fast-forward":["music"],figma:["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],film:["movie","video"],filter:["funnel","hopper"],flag:["report"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],globe:["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],hash:["hashtag","number","pound"],headphones:["music","audio","sound"],heart:["like","love","emotion"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house","living"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication","secure"],layers:["stack"],layout:["window","webpage"],"life-bouy":["help","life ring","support"],link:["chain","url"],"link-2":["chain","url"],linkedin:["logo","social media"],list:["options"],lock:["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],mail:["email","message"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],mic:["record","sound","listen"],minimize:["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],minus:["subtract"],monitor:["tv","screen","display"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],music:["note"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],package:["box","container"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],percent:["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],phone:["call"],play:["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],printer:["fax","office","device"],radio:["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],repeat:["loop","arrows"],rewind:["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],rss:["feed","subscribe"],save:["floppy disk"],scissors:["cut"],search:["find","magnifier","magnifying glass"],send:["message","mail","email","paper airplane","paper aeroplane"],settings:["cog","edit","gear","preferences"],"share-2":["network","connections"],shield:["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slack:["logo"],slash:["ban","no"],sliders:["settings","controls"],smartphone:["cellphone","device"],smile:["emoji","face","happy","good","emotion"],speaker:["audio","music"],star:["bookmark","favorite","like"],"stop-circle":["media","music"],sun:["brightness","weather","light"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],tablet:["device"],tag:["label"],target:["logo","bullseye"],terminal:["code","command line","prompt"],thermometer:["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],tool:["settings","spanner"],trash:["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],triangle:["delta"],truck:["delivery","van","shipping","transport","lorry"],tv:["television","stream"],twitch:["logo"],twitter:["logo","social"],type:["text"],umbrella:["rain","weather"],unlock:["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],user:["person","account"],users:["group"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],"wifi-off":["disabled"],wifi:["connection","signal","wireless"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],x:["cancel","close","delete","remove","times","clear"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]}},"./src/to-svg.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=n("./src/icons.js"),r=(i=o)&&i.__esModule?i:{default:i};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!e)throw new Error("The required `key` (icon name) parameter is missing.");if(!r.default[e])throw new Error("No icon matching '"+e+"'. See the complete list of icons at https://feathericons.com");return r.default[e].toSvg(t)}},0:function(e,t,n){n("./node_modules/core-js/es/array/from.js"),e.exports=n("./src/index.js")}})},e.exports=i()},function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"top",(function(){return o})),n.d(i,"bottom",(function(){return r})),n.d(i,"right",(function(){return s})),n.d(i,"left",(function(){return a})),n.d(i,"auto",(function(){return l})),n.d(i,"basePlacements",(function(){return c})),n.d(i,"start",(function(){return d})),n.d(i,"end",(function(){return u})),n.d(i,"clippingParents",(function(){return p})),n.d(i,"viewport",(function(){return h})),n.d(i,"popper",(function(){return f})),n.d(i,"reference",(function(){return y})),n.d(i,"variationPlacements",(function(){return g})),n.d(i,"placements",(function(){return m})),n.d(i,"beforeRead",(function(){return v})),n.d(i,"read",(function(){return x})),n.d(i,"afterRead",(function(){return b})),n.d(i,"beforeMain",(function(){return w})),n.d(i,"main",(function(){return _})),n.d(i,"afterMain",(function(){return k})),n.d(i,"beforeWrite",(function(){return T})),n.d(i,"write",(function(){return j})),n.d(i,"afterWrite",(function(){return C})),n.d(i,"modifierPhases",(function(){return S})),n.d(i,"applyStyles",(function(){return L})),n.d(i,"arrow",(function(){return G})),n.d(i,"computeStyles",(function(){return te})),n.d(i,"eventListeners",(function(){return ie})),n.d(i,"flip",(function(){return me})),n.d(i,"hide",(function(){return be})),n.d(i,"offset",(function(){return we})),n.d(i,"popperOffsets",(function(){return _e})),n.d(i,"preventOverflow",(function(){return ke})),n.d(i,"popperGenerator",(function(){return De})),n.d(i,"detectOverflow",(function(){return ge})),n.d(i,"createPopperBase",(function(){return Ae})),n.d(i,"createPopper",(function(){return Ee})),n.d(i,"createPopperLite",(function(){return Me}));var o="top",r="bottom",s="right",a="left",l="auto",c=[o,r,s,a],d="start",u="end",p="clippingParents",h="viewport",f="popper",y="reference",g=c.reduce((function(e,t){return e.concat([t+"-"+d,t+"-"+u])}),[]),m=[].concat(c,[l]).reduce((function(e,t){return e.concat([t,t+"-"+d,t+"-"+u])}),[]),v="beforeRead",x="read",b="afterRead",w="beforeMain",_="main",k="afterMain",T="beforeWrite",j="write",C="afterWrite",S=[v,x,b,w,_,k,T,j,C];function D(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function E(e){return e instanceof A(e).Element||e instanceof Element}function M(e){return e instanceof A(e).HTMLElement||e instanceof HTMLElement}function O(e){return"undefined"!=typeof ShadowRoot&&(e instanceof A(e).ShadowRoot||e instanceof ShadowRoot)}var L={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},o=t.elements[e];M(o)&&D(o)&&(Object.assign(o.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],o=t.attributes[e]||{},r=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});M(i)&&D(i)&&(Object.assign(i.style,r),Object.keys(o).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]};function N(e){return e.split("-")[0]}var $=Math.max,H=Math.min,P=Math.round;function z(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),i=1,o=1;if(M(e)&&t){var r=e.offsetHeight,s=e.offsetWidth;s>0&&(i=P(n.width)/s||1),r>0&&(o=P(n.height)/r||1)}return{width:n.width/i,height:n.height/o,top:n.top/o,right:n.right/i,bottom:n.bottom/o,left:n.left/i,x:n.left/i,y:n.top/o}}function I(e){var t=z(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&O(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function W(e){return A(e).getComputedStyle(e)}function U(e){return["table","td","th"].indexOf(D(e))>=0}function V(e){return((E(e)?e.ownerDocument:e.document)||window.document).documentElement}function F(e){return"html"===D(e)?e:e.assignedSlot||e.parentNode||(O(e)?e.host:null)||V(e)}function R(e){return M(e)&&"fixed"!==W(e).position?e.offsetParent:null}function B(e){for(var t=A(e),n=R(e);n&&U(n)&&"static"===W(n).position;)n=R(n);return n&&("html"===D(n)||"body"===D(n)&&"static"===W(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&M(e)&&"fixed"===W(e).position)return null;var n=F(e);for(O(n)&&(n=n.host);M(n)&&["html","body"].indexOf(D(n))<0;){var i=W(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e,t,n){return $(e,H(t,n))}function K(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Q(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var G={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,l=e.options,d=n.elements.arrow,u=n.modifiersData.popperOffsets,p=N(n.placement),h=Y(p),f=[a,s].indexOf(p)>=0?"height":"width";if(d&&u){var y=function(e,t){return K("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Q(e,c))}(l.padding,n),g=I(d),m="y"===h?o:a,v="y"===h?r:s,x=n.rects.reference[f]+n.rects.reference[h]-u[h]-n.rects.popper[f],b=u[h]-n.rects.reference[h],w=B(d),_=w?"y"===h?w.clientHeight||0:w.clientWidth||0:0,k=x/2-b/2,T=y[m],j=_-g[f]-y[v],C=_/2-g[f]/2+k,S=X(T,C,j),D=h;n.modifiersData[i]=((t={})[D]=S,t.centerOffset=S-C,t)}},effect:function(e){var t=e.state,n=e.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&q(t.elements.popper,i)&&(t.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function J(e){return e.split("-")[1]}var Z={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ee(e){var t,n=e.popper,i=e.popperRect,l=e.placement,c=e.variation,d=e.offsets,p=e.position,h=e.gpuAcceleration,f=e.adaptive,y=e.roundOffsets,g=e.isFixed,m=d.x,v=void 0===m?0:m,x=d.y,b=void 0===x?0:x,w="function"==typeof y?y({x:v,y:b}):{x:v,y:b};v=w.x,b=w.y;var _=d.hasOwnProperty("x"),k=d.hasOwnProperty("y"),T=a,j=o,C=window;if(f){var S=B(n),D="clientHeight",E="clientWidth";if(S===A(n)&&"static"!==W(S=V(n)).position&&"absolute"===p&&(D="scrollHeight",E="scrollWidth"),S=S,l===o||(l===a||l===s)&&c===u)j=r,b-=(g&&S===C&&C.visualViewport?C.visualViewport.height:S[D])-i.height,b*=h?1:-1;if(l===a||(l===o||l===r)&&c===u)T=s,v-=(g&&S===C&&C.visualViewport?C.visualViewport.width:S[E])-i.width,v*=h?1:-1}var M,O=Object.assign({position:p},f&&Z),L=!0===y?function(e){var t=e.x,n=e.y,i=window.devicePixelRatio||1;return{x:P(t*i)/i||0,y:P(n*i)/i||0}}({x:v,y:b}):{x:v,y:b};return v=L.x,b=L.y,h?Object.assign({},O,((M={})[j]=k?"0":"",M[T]=_?"0":"",M.transform=(C.devicePixelRatio||1)<=1?"translate("+v+"px, "+b+"px)":"translate3d("+v+"px, "+b+"px, 0)",M)):Object.assign({},O,((t={})[j]=k?b+"px":"",t[T]=_?v+"px":"",t.transform="",t))}var te={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,i=n.gpuAcceleration,o=void 0===i||i,r=n.adaptive,s=void 0===r||r,a=n.roundOffsets,l=void 0===a||a,c={placement:N(t.placement),variation:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ee(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ee(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},ne={passive:!0};var ie={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,r=void 0===o||o,s=i.resize,a=void 0===s||s,l=A(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&c.forEach((function(e){e.addEventListener("scroll",n.update,ne)})),a&&l.addEventListener("resize",n.update,ne),function(){r&&c.forEach((function(e){e.removeEventListener("scroll",n.update,ne)})),a&&l.removeEventListener("resize",n.update,ne)}},data:{}},oe={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return oe[e]}))}var se={start:"end",end:"start"};function ae(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function le(e){var t=A(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ce(e){return z(V(e)).left+le(e).scrollLeft}function de(e){var t=W(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function ue(e,t){var n;void 0===t&&(t=[]);var i=function e(t){return["html","body","#document"].indexOf(D(t))>=0?t.ownerDocument.body:M(t)&&de(t)?t:e(F(t))}(e),o=i===(null==(n=e.ownerDocument)?void 0:n.body),r=A(i),s=o?[r].concat(r.visualViewport||[],de(i)?i:[]):i,a=t.concat(s);return o?a:a.concat(ue(F(s)))}function pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function he(e,t){return t===h?pe(function(e){var t=A(e),n=V(e),i=t.visualViewport,o=n.clientWidth,r=n.clientHeight,s=0,a=0;return i&&(o=i.width,r=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=i.offsetLeft,a=i.offsetTop)),{width:o,height:r,x:s+ce(e),y:a}}(e)):E(t)?function(e){var t=z(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):pe(function(e){var t,n=V(e),i=le(e),o=null==(t=e.ownerDocument)?void 0:t.body,r=$(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=$(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-i.scrollLeft+ce(e),l=-i.scrollTop;return"rtl"===W(o||n).direction&&(a+=$(n.clientWidth,o?o.clientWidth:0)-r),{width:r,height:s,x:a,y:l}}(V(e)))}function fe(e,t,n){var i="clippingParents"===t?function(e){var t=ue(F(e)),n=["absolute","fixed"].indexOf(W(e).position)>=0&&M(e)?B(e):e;return E(n)?t.filter((function(e){return E(e)&&q(e,n)&&"body"!==D(e)})):[]}(e):[].concat(t),o=[].concat(i,[n]),r=o[0],s=o.reduce((function(t,n){var i=he(e,n);return t.top=$(i.top,t.top),t.right=H(i.right,t.right),t.bottom=H(i.bottom,t.bottom),t.left=$(i.left,t.left),t}),he(e,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ye(e){var t,n=e.reference,i=e.element,l=e.placement,c=l?N(l):null,p=l?J(l):null,h=n.x+n.width/2-i.width/2,f=n.y+n.height/2-i.height/2;switch(c){case o:t={x:h,y:n.y-i.height};break;case r:t={x:h,y:n.y+n.height};break;case s:t={x:n.x+n.width,y:f};break;case a:t={x:n.x-i.width,y:f};break;default:t={x:n.x,y:n.y}}var y=c?Y(c):null;if(null!=y){var g="y"===y?"height":"width";switch(p){case d:t[y]=t[y]-(n[g]/2-i[g]/2);break;case u:t[y]=t[y]+(n[g]/2-i[g]/2)}}return t}function ge(e,t){void 0===t&&(t={});var n=t,i=n.placement,a=void 0===i?e.placement:i,l=n.boundary,d=void 0===l?p:l,u=n.rootBoundary,g=void 0===u?h:u,m=n.elementContext,v=void 0===m?f:m,x=n.altBoundary,b=void 0!==x&&x,w=n.padding,_=void 0===w?0:w,k=K("number"!=typeof _?_:Q(_,c)),T=v===f?y:f,j=e.rects.popper,C=e.elements[b?T:v],S=fe(E(C)?C:C.contextElement||V(e.elements.popper),d,g),D=z(e.elements.reference),A=ye({reference:D,element:j,strategy:"absolute",placement:a}),M=pe(Object.assign({},j,A)),O=v===f?M:D,L={top:S.top-O.top+k.top,bottom:O.bottom-S.bottom+k.bottom,left:S.left-O.left+k.left,right:O.right-S.right+k.right},N=e.modifiersData.offset;if(v===f&&N){var $=N[a];Object.keys(L).forEach((function(e){var t=[s,r].indexOf(e)>=0?1:-1,n=[o,r].indexOf(e)>=0?"y":"x";L[e]+=$[n]*t}))}return L}var me={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var u=n.mainAxis,p=void 0===u||u,h=n.altAxis,f=void 0===h||h,y=n.fallbackPlacements,v=n.padding,x=n.boundary,b=n.rootBoundary,w=n.altBoundary,_=n.flipVariations,k=void 0===_||_,T=n.allowedAutoPlacements,j=t.options.placement,C=N(j),S=y||(C===j||!k?[re(j)]:function(e){if(N(e)===l)return[];var t=re(e);return[ae(e),t,ae(t)]}(j)),D=[j].concat(S).reduce((function(e,n){return e.concat(N(n)===l?function(e,t){void 0===t&&(t={});var n=t,i=n.placement,o=n.boundary,r=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,d=void 0===l?m:l,u=J(i),p=u?a?g:g.filter((function(e){return J(e)===u})):c,h=p.filter((function(e){return d.indexOf(e)>=0}));0===h.length&&(h=p);var f=h.reduce((function(t,n){return t[n]=ge(e,{placement:n,boundary:o,rootBoundary:r,padding:s})[N(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}(t,{placement:n,boundary:x,rootBoundary:b,padding:v,flipVariations:k,allowedAutoPlacements:T}):n)}),[]),A=t.rects.reference,E=t.rects.popper,M=new Map,O=!0,L=D[0],$=0;$<D.length;$++){var H=D[$],P=N(H),z=J(H)===d,I=[o,r].indexOf(P)>=0,q=I?"width":"height",W=ge(t,{placement:H,boundary:x,rootBoundary:b,altBoundary:w,padding:v}),U=I?z?s:a:z?r:o;A[q]>E[q]&&(U=re(U));var V=re(U),F=[];if(p&&F.push(W[P]<=0),f&&F.push(W[U]<=0,W[V]<=0),F.every((function(e){return e}))){L=H,O=!1;break}M.set(H,F)}if(O)for(var R=function(e){var t=D.find((function(t){var n=M.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return L=t,"break"},B=k?3:1;B>0;B--){if("break"===R(B))break}t.placement!==L&&(t.modifiersData[i]._skip=!0,t.placement=L,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function xe(e){return[o,s,r,a].some((function(t){return e[t]>=0}))}var be={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,i=t.rects.reference,o=t.rects.popper,r=t.modifiersData.preventOverflow,s=ge(t,{elementContext:"reference"}),a=ge(t,{altBoundary:!0}),l=ve(s,i),c=ve(a,o,r),d=xe(l),u=xe(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":u})}};var we={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,r=n.offset,l=void 0===r?[0,0]:r,c=m.reduce((function(e,n){return e[n]=function(e,t,n){var i=N(e),r=[a,o].indexOf(i)>=0?-1:1,l="function"==typeof n?n(Object.assign({},t,{placement:e})):n,c=l[0],d=l[1];return c=c||0,d=(d||0)*r,[a,s].indexOf(i)>=0?{x:d,y:c}:{x:c,y:d}}(n,t.rects,l),e}),{}),d=c[t.placement],u=d.x,p=d.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=p),t.modifiersData[i]=c}};var _e={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ye({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var ke={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name,l=n.mainAxis,c=void 0===l||l,u=n.altAxis,p=void 0!==u&&u,h=n.boundary,f=n.rootBoundary,y=n.altBoundary,g=n.padding,m=n.tether,v=void 0===m||m,x=n.tetherOffset,b=void 0===x?0:x,w=ge(t,{boundary:h,rootBoundary:f,padding:g,altBoundary:y}),_=N(t.placement),k=J(t.placement),T=!k,j=Y(_),C="x"===j?"y":"x",S=t.modifiersData.popperOffsets,D=t.rects.reference,A=t.rects.popper,E="function"==typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,M="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),O=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(S){if(c){var P,z="y"===j?o:a,q="y"===j?r:s,W="y"===j?"height":"width",U=S[j],V=U+w[z],F=U-w[q],R=v?-A[W]/2:0,K=k===d?D[W]:A[W],Q=k===d?-A[W]:-D[W],G=t.elements.arrow,Z=v&&G?I(G):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[z],ne=ee[q],ie=X(0,D[W],Z[W]),oe=T?D[W]/2-R-ie-te-M.mainAxis:K-ie-te-M.mainAxis,re=T?-D[W]/2+R+ie+ne+M.mainAxis:Q+ie+ne+M.mainAxis,se=t.elements.arrow&&B(t.elements.arrow),ae=se?"y"===j?se.clientTop||0:se.clientLeft||0:0,le=null!=(P=null==O?void 0:O[j])?P:0,ce=U+re-le,de=X(v?H(V,U+oe-le-ae):V,U,v?$(F,ce):F);S[j]=de,L[j]=de-U}if(p){var ue,pe="x"===j?o:a,he="x"===j?r:s,fe=S[C],ye="y"===C?"height":"width",me=fe+w[pe],ve=fe-w[he],xe=-1!==[o,a].indexOf(_),be=null!=(ue=null==O?void 0:O[C])?ue:0,we=xe?me:fe-D[ye]-A[ye]-be+M.altAxis,_e=xe?fe+D[ye]+A[ye]-be-M.altAxis:ve,ke=v&&xe?function(e,t,n){var i=X(e,t,n);return i>n?n:i}(we,fe,_e):X(v?we:me,fe,v?_e:ve);S[C]=ke,L[C]=ke-fe}t.modifiersData[i]=L}},requiresIfExists:["offset"]};function Te(e,t,n){void 0===n&&(n=!1);var i,o,r=M(t),s=M(t)&&function(e){var t=e.getBoundingClientRect(),n=P(t.width)/e.offsetWidth||1,i=P(t.height)/e.offsetHeight||1;return 1!==n||1!==i}(t),a=V(t),l=z(e,s),c={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(r||!r&&!n)&&(("body"!==D(t)||de(a))&&(c=(i=t)!==A(i)&&M(i)?{scrollLeft:(o=i).scrollLeft,scrollTop:o.scrollTop}:le(i)),M(t)?((d=z(t,!0)).x+=t.clientLeft,d.y+=t.clientTop):a&&(d.x=ce(a))),{x:l.left+c.scrollLeft-d.x,y:l.top+c.scrollTop-d.y,width:l.width,height:l.height}}function je(e){var t=new Map,n=new Set,i=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(i){if(!n.has(i)){var o=t.get(i);o&&e(o)}})),i.push(o)}(e)})),i}var Ce={placement:"bottom",modifiers:[],strategy:"absolute"};function Se(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function De(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,o=t.defaultOptions,r=void 0===o?Ce:o;return function(e,t,n){void 0===n&&(n=r);var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ce,r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],c=!1,d={state:a,setOptions:function(n){var o="function"==typeof n?n(a.options):n;u(),a.options=Object.assign({},r,a.options,o),a.scrollParents={reference:E(e)?ue(e):e.contextElement?ue(e.contextElement):[],popper:ue(t)};var s=function(e){var t=je(e);return S.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(i,a.options.modifiers)));return a.orderedModifiers=s.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var r=o({state:a,name:t,instance:d,options:i});l.push(r||function(){})}})),d.update()},forceUpdate:function(){if(!c){var e=a.elements,t=e.reference,n=e.popper;if(Se(t,n)){a.rects={reference:Te(t,B(n),"fixed"===a.options.strategy),popper:I(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<a.orderedModifiers.length;i++)if(!0!==a.reset){var o=a.orderedModifiers[i],r=o.fn,s=o.options,l=void 0===s?{}:s,u=o.name;"function"==typeof r&&(a=r({state:a,options:l,name:u,instance:d})||a)}else a.reset=!1,i=-1}}},update:(o=function(){return new Promise((function(e){d.forceUpdate(),e(a)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){u(),c=!0}};if(!Se(e,t))return d;function u(){l.forEach((function(e){return e()})),l=[]}return d.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),d}}var Ae=De(),Ee=De({defaultModifiers:[ie,_e,te,L,we,me,ke,G,be]}),Me=De({defaultModifiers:[ie,_e,te,L]});const Oe=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},Le=e=>{const t=Oe(e);return t&&document.querySelector(t)?t:null},Ne=e=>{const t=Oe(e);return t?document.querySelector(t):null},$e=e=>{e.dispatchEvent(new Event("transitionend"))},He=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),Pe=e=>He(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,ze=(e,t,n)=>{Object.keys(n).forEach(i=>{const o=n[i],r=t[i],s=r&&He(r)?"element":null==(a=r)?""+a:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();var a;if(!new RegExp(o).test(s))throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${o}".`)})},Ie=e=>!(!He(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),qe=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),We=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?We(e.parentNode):null},Ue=()=>{},Ve=e=>{e.offsetHeight},Fe=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},Re=[],Be=()=>"rtl"===document.documentElement.dir,Ye=e=>{var t;t=()=>{const t=Fe();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}},"loading"===document.readyState?(Re.length||document.addEventListener("DOMContentLoaded",()=>{Re.forEach(e=>e())}),Re.push(t)):t()},Xe=e=>{"function"==typeof e&&e()},Ke=(e,t,n=!0)=>{if(!n)return void Xe(e);const i=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),o=Number.parseFloat(n);return i||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let o=!1;const r=({target:n})=>{n===t&&(o=!0,t.removeEventListener("transitionend",r),Xe(e))};t.addEventListener("transitionend",r),setTimeout(()=>{o||$e(t)},i)},Qe=(e,t,n,i)=>{let o=e.indexOf(t);if(-1===o)return e[!n&&i?e.length-1:0];const r=e.length;return o+=n?1:-1,i&&(o=(o+r)%r),e[Math.max(0,Math.min(o,r-1))]},Ge=/[^.]*(?=\..*)\.|.*/,Je=/\..*/,Ze=/::\d+$/,et={};let tt=1;const nt={mouseenter:"mouseover",mouseleave:"mouseout"},it=/^(mouseenter|mouseleave)/i,ot=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function rt(e,t){return t&&`${t}::${tt++}`||e.uidEvent||tt++}function st(e){const t=rt(e);return e.uidEvent=t,et[t]=et[t]||{},et[t]}function at(e,t,n=null){const i=Object.keys(e);for(let o=0,r=i.length;o<r;o++){const r=e[i[o]];if(r.originalHandler===t&&r.delegationSelector===n)return r}return null}function lt(e,t,n){const i="string"==typeof t,o=i?n:t;let r=ut(e);return ot.has(r)||(r=e),[i,o,r]}function ct(e,t,n,i,o){if("string"!=typeof t||!e)return;if(n||(n=i,i=null),it.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};i?i=e(i):n=e(n)}const[r,s,a]=lt(t,n,i),l=st(e),c=l[a]||(l[a]={}),d=at(c,s,r?n:null);if(d)return void(d.oneOff=d.oneOff&&o);const u=rt(s,t.replace(Ge,"")),p=r?function(e,t,n){return function i(o){const r=e.querySelectorAll(t);for(let{target:s}=o;s&&s!==this;s=s.parentNode)for(let a=r.length;a--;)if(r[a]===s)return o.delegateTarget=s,i.oneOff&&pt.off(e,o.type,t,n),n.apply(s,[o]);return null}}(e,n,i):function(e,t){return function n(i){return i.delegateTarget=e,n.oneOff&&pt.off(e,i.type,t),t.apply(e,[i])}}(e,n);p.delegationSelector=r?n:null,p.originalHandler=s,p.oneOff=o,p.uidEvent=u,c[u]=p,e.addEventListener(a,p,r)}function dt(e,t,n,i,o){const r=at(t[n],i,o);r&&(e.removeEventListener(n,r,Boolean(o)),delete t[n][r.uidEvent])}function ut(e){return e=e.replace(Je,""),nt[e]||e}const pt={on(e,t,n,i){ct(e,t,n,i,!1)},one(e,t,n,i){ct(e,t,n,i,!0)},off(e,t,n,i){if("string"!=typeof t||!e)return;const[o,r,s]=lt(t,n,i),a=s!==t,l=st(e),c=t.startsWith(".");if(void 0!==r){if(!l||!l[s])return;return void dt(e,l,s,r,o?n:null)}c&&Object.keys(l).forEach(n=>{!function(e,t,n,i){const o=t[n]||{};Object.keys(o).forEach(r=>{if(r.includes(i)){const i=o[r];dt(e,t,n,i.originalHandler,i.delegationSelector)}})}(e,l,n,t.slice(1))});const d=l[s]||{};Object.keys(d).forEach(n=>{const i=n.replace(Ze,"");if(!a||t.includes(i)){const t=d[n];dt(e,l,s,t.originalHandler,t.delegationSelector)}})},trigger(e,t,n){if("string"!=typeof t||!e)return null;const i=Fe(),o=ut(t),r=t!==o,s=ot.has(o);let a,l=!0,c=!0,d=!1,u=null;return r&&i&&(a=i.Event(t,n),i(e).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),d=a.isDefaultPrevented()),s?(u=document.createEvent("HTMLEvents"),u.initEvent(o,l,!0)):u=new CustomEvent(t,{bubbles:l,cancelable:!0}),void 0!==n&&Object.keys(n).forEach(e=>{Object.defineProperty(u,e,{get:()=>n[e]})}),d&&u.preventDefault(),c&&e.dispatchEvent(u),u.defaultPrevented&&void 0!==a&&a.preventDefault(),u}},ht=new Map,ft={set(e,t,n){ht.has(e)||ht.set(e,new Map);const i=ht.get(e);i.has(t)||0===i.size?i.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(e,t)=>ht.has(e)&&ht.get(e).get(t)||null,remove(e,t){if(!ht.has(e))return;const n=ht.get(e);n.delete(t),0===n.size&&ht.delete(e)}};class yt{constructor(e){(e=Pe(e))&&(this._element=e,ft.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ft.remove(this._element,this.constructor.DATA_KEY),pt.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,n=!0){Ke(e,t,n)}static getInstance(e){return ft.get(Pe(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.1.3"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}const gt=(e,t="hide")=>{const n="click.dismiss"+e.EVENT_KEY,i=e.NAME;pt.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),qe(this))return;const o=Ne(this)||this.closest("."+i);e.getOrCreateInstance(o)[t]()}))};class mt extends yt{static get NAME(){return"alert"}close(){if(pt.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const e=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),pt.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=mt.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}gt(mt,"close"),Ye(mt);class vt extends yt{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(e){return this.each((function(){const t=vt.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function xt(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function bt(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}pt.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',e=>{e.preventDefault();const t=e.target.closest('[data-bs-toggle="button"]');vt.getOrCreateInstance(t).toggle()}),Ye(vt);const wt={setDataAttribute(e,t,n){e.setAttribute("data-bs-"+bt(t),n)},removeDataAttribute(e,t){e.removeAttribute("data-bs-"+bt(t))},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter(e=>e.startsWith("bs")).forEach(n=>{let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=xt(e.dataset[n])}),t},getDataAttribute:(e,t)=>xt(e.getAttribute("data-bs-"+bt(t))),offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position:e=>({top:e.offsetTop,left:e.offsetLeft})},_t={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){const n=[];let i=e.parentNode;for(;i&&i.nodeType===Node.ELEMENT_NODE&&3!==i.nodeType;)i.matches(t)&&n.push(i),i=i.parentNode;return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>e+':not([tabindex^="-"])').join(", ");return this.find(t,e).filter(e=>!qe(e)&&Ie(e))}},kt=".bs.carousel",Tt={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},jt={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Ct="next",St="prev",Dt="left",At="right",Et={ArrowLeft:At,ArrowRight:Dt},Mt=`load${kt}.data-api`,Ot=`click${kt}.data-api`;class Lt extends yt{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=_t.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Tt}static get NAME(){return"carousel"}next(){this._slide(Ct)}nextWhenVisible(){!document.hidden&&Ie(this._element)&&this.next()}prev(){this._slide(St)}pause(e){e||(this._isPaused=!0),_t.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&($e(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=_t.findOne(".active.carousel-item",this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void pt.one(this._element,"slid.bs.carousel",()=>this.to(e));if(t===e)return this.pause(),void this.cycle();const n=e>t?Ct:St;this._slide(n,this._items[e])}_getConfig(e){return e={...Tt,...wt.getDataAttributes(this._element),..."object"==typeof e?e:{}},ze("carousel",e,jt),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=40)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?At:Dt)}_addEventListeners(){this._config.keyboard&&pt.on(this._element,"keydown.bs.carousel",e=>this._keydown(e)),"hover"===this._config.pause&&(pt.on(this._element,"mouseenter.bs.carousel",e=>this.pause(e)),pt.on(this._element,"mouseleave.bs.carousel",e=>this.cycle(e))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&("pen"===e.pointerType||"touch"===e.pointerType),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},i=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(e=>this.cycle(e),500+this._config.interval))};_t.find(".carousel-item img",this._element).forEach(e=>{pt.on(e,"dragstart.bs.carousel",e=>e.preventDefault())}),this._pointerEvent?(pt.on(this._element,"pointerdown.bs.carousel",e=>t(e)),pt.on(this._element,"pointerup.bs.carousel",e=>i(e)),this._element.classList.add("pointer-event")):(pt.on(this._element,"touchstart.bs.carousel",e=>t(e)),pt.on(this._element,"touchmove.bs.carousel",e=>n(e)),pt.on(this._element,"touchend.bs.carousel",e=>i(e)))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Et[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?_t.find(".carousel-item",e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===Ct;return Qe(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),i=this._getItemIndex(_t.findOne(".active.carousel-item",this._element));return pt.trigger(this._element,"slide.bs.carousel",{relatedTarget:e,direction:t,from:i,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=_t.findOne(".active",this._indicatorsElement);t.classList.remove("active"),t.removeAttribute("aria-current");const n=_t.find("[data-bs-target]",this._indicatorsElement);for(let t=0;t<n.length;t++)if(Number.parseInt(n[t].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[t].classList.add("active"),n[t].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||_t.findOne(".active.carousel-item",this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),i=_t.findOne(".active.carousel-item",this._element),o=this._getItemIndex(i),r=t||this._getItemByOrder(n,i),s=this._getItemIndex(r),a=Boolean(this._interval),l=n===Ct,c=l?"carousel-item-start":"carousel-item-end",d=l?"carousel-item-next":"carousel-item-prev",u=this._orderToDirection(n);if(r&&r.classList.contains("active"))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(r,u).defaultPrevented)return;if(!i||!r)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r;const p=()=>{pt.trigger(this._element,"slid.bs.carousel",{relatedTarget:r,direction:u,from:o,to:s})};if(this._element.classList.contains("slide")){r.classList.add(d),Ve(r),i.classList.add(c),r.classList.add(c);const e=()=>{r.classList.remove(c,d),r.classList.add("active"),i.classList.remove("active",d,c),this._isSliding=!1,setTimeout(p,0)};this._queueCallback(e,i,!0)}else i.classList.remove("active"),r.classList.add("active"),this._isSliding=!1,p();a&&this.cycle()}_directionToOrder(e){return[At,Dt].includes(e)?Be()?e===Dt?St:Ct:e===Dt?Ct:St:e}_orderToDirection(e){return[Ct,St].includes(e)?Be()?e===St?Dt:At:e===St?At:Dt:e}static carouselInterface(e,t){const n=Lt.getOrCreateInstance(e,t);let{_config:i}=n;"object"==typeof t&&(i={...i,...t});const o="string"==typeof t?t:i.slide;if("number"==typeof t)n.to(t);else if("string"==typeof o){if(void 0===n[o])throw new TypeError(`No method named "${o}"`);n[o]()}else i.interval&&i.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){Lt.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=Ne(this);if(!t||!t.classList.contains("carousel"))return;const n={...wt.getDataAttributes(t),...wt.getDataAttributes(this)},i=this.getAttribute("data-bs-slide-to");i&&(n.interval=!1),Lt.carouselInterface(t,n),i&&Lt.getInstance(t).to(i),e.preventDefault()}}pt.on(document,Ot,"[data-bs-slide], [data-bs-slide-to]",Lt.dataApiClickHandler),pt.on(window,Mt,()=>{const e=_t.find('[data-bs-ride="carousel"]');for(let t=0,n=e.length;t<n;t++)Lt.carouselInterface(e[t],Lt.getInstance(e[t]))}),Ye(Lt);const Nt={toggle:!0,parent:null},$t={toggle:"boolean",parent:"(null|element)"};class Ht extends yt{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=_t.find('[data-bs-toggle="collapse"]');for(let e=0,t=n.length;e<t;e++){const t=n[e],i=Le(t),o=_t.find(i).filter(e=>e===this._element);null!==i&&o.length&&(this._selector=i,this._triggerArray.push(t))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Nt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=_t.find(":scope .collapse .collapse",this._config.parent);t=_t.find(".collapse.show, .collapse.collapsing",this._config.parent).filter(t=>!e.includes(t))}const n=_t.findOne(this._selector);if(t.length){const i=t.find(e=>n!==e);if(e=i?Ht.getInstance(i):null,e&&e._isTransitioning)return}if(pt.trigger(this._element,"show.bs.collapse").defaultPrevented)return;t.forEach(t=>{n!==t&&Ht.getOrCreateInstance(t,{toggle:!1}).hide(),e||ft.set(t,"bs.collapse",null)});const i=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o="scroll"+(i[0].toUpperCase()+i.slice(1));this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[i]="",pt.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[i]=this._element[o]+"px"}hide(){if(this._isTransitioning||!this._isShown())return;if(pt.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const e=this._getDimension();this._element.style[e]=this._element.getBoundingClientRect()[e]+"px",Ve(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");const t=this._triggerArray.length;for(let e=0;e<t;e++){const t=this._triggerArray[e],n=Ne(t);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[e]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),pt.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}_isShown(e=this._element){return e.classList.contains("show")}_getConfig(e){return(e={...Nt,...wt.getDataAttributes(this._element),...e}).toggle=Boolean(e.toggle),e.parent=Pe(e.parent),ze("collapse",e,$t),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=_t.find(":scope .collapse .collapse",this._config.parent);_t.find('[data-bs-toggle="collapse"]',this._config.parent).filter(t=>!e.includes(t)).forEach(e=>{const t=Ne(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))})}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach(e=>{t?e.classList.remove("collapsed"):e.classList.add("collapsed"),e.setAttribute("aria-expanded",t)})}static jQueryInterface(e){return this.each((function(){const t={};"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=Ht.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}pt.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=Le(this);_t.find(t).forEach(e=>{Ht.getOrCreateInstance(e,{toggle:!1}).toggle()})})),Ye(Ht);const Pt=new RegExp("ArrowUp|ArrowDown|Escape"),zt=Be()?"top-end":"top-start",It=Be()?"top-start":"top-end",qt=Be()?"bottom-end":"bottom-start",Wt=Be()?"bottom-start":"bottom-end",Ut=Be()?"left-start":"right-start",Vt=Be()?"right-start":"left-start",Ft={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Rt={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Bt extends yt{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Ft}static get DefaultType(){return Rt}static get NAME(){return"dropdown"}toggle(){return this._isShown()?this.hide():this.show()}show(){if(qe(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element};if(pt.trigger(this._element,"show.bs.dropdown",e).defaultPrevented)return;const t=Bt.getParentFromElement(this._element);this._inNavbar?wt.setDataAttribute(this._menu,"popper","none"):this._createPopper(t),"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach(e=>pt.on(e,"mouseover",Ue)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add("show"),this._element.classList.add("show"),pt.trigger(this._element,"shown.bs.dropdown",e)}hide(){if(qe(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){pt.trigger(this._element,"hide.bs.dropdown",e).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>pt.off(e,"mouseover",Ue)),this._popper&&this._popper.destroy(),this._menu.classList.remove("show"),this._element.classList.remove("show"),this._element.setAttribute("aria-expanded","false"),wt.removeDataAttribute(this._menu,"popper"),pt.trigger(this._element,"hidden.bs.dropdown",e))}_getConfig(e){if(e={...this.constructor.Default,...wt.getDataAttributes(this._element),...e},ze("dropdown",e,this.constructor.DefaultType),"object"==typeof e.reference&&!He(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return e}_createPopper(e){if(void 0===i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:He(this._config.reference)?t=Pe(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),o=n.modifiers.find(e=>"applyStyles"===e.name&&!1===e.enabled);this._popper=Ee(t,this._menu,n),o&&wt.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains("show")}_getMenuElement(){return _t.next(this._element,".dropdown-menu")[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains("dropend"))return Ut;if(e.classList.contains("dropstart"))return Vt;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?It:zt:t?Wt:qt}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=_t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(Ie);n.length&&Qe(n,t,"ArrowDown"===e,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=Bt.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;const t=_t.find('[data-bs-toggle="dropdown"]');for(let n=0,i=t.length;n<i;n++){const i=Bt.getInstance(t[n]);if(!i||!1===i._config.autoClose)continue;if(!i._isShown())continue;const o={relatedTarget:i._element};if(e){const t=e.composedPath(),n=t.includes(i._menu);if(t.includes(i._element)||"inside"===i._config.autoClose&&!n||"outside"===i._config.autoClose&&n)continue;if(i._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(o.clickEvent=e)}i._completeHide(o)}}static getParentFromElement(e){return Ne(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?"Space"===e.key||"Escape"!==e.key&&("ArrowDown"!==e.key&&"ArrowUp"!==e.key||e.target.closest(".dropdown-menu")):!Pt.test(e.key))return;const t=this.classList.contains("show");if(!t&&"Escape"===e.key)return;if(e.preventDefault(),e.stopPropagation(),qe(this))return;const n=this.matches('[data-bs-toggle="dropdown"]')?this:_t.prev(this,'[data-bs-toggle="dropdown"]')[0],i=Bt.getOrCreateInstance(n);if("Escape"!==e.key)return"ArrowUp"===e.key||"ArrowDown"===e.key?(t||i.show(),void i._selectMenuItem(e)):void(t&&"Space"!==e.key||Bt.clearMenus());i.hide()}}pt.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',Bt.dataApiKeydownHandler),pt.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",Bt.dataApiKeydownHandler),pt.on(document,"click.bs.dropdown.data-api",Bt.clearMenus),pt.on(document,"keyup.bs.dropdown.data-api",Bt.clearMenus),pt.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',(function(e){e.preventDefault(),Bt.getOrCreateInstance(this).toggle()})),Ye(Bt);class Yt{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",t=>t+e),this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",t=>t+e),this._setElementAttributes(".sticky-top","marginRight",t=>t-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const o=window.getComputedStyle(e)[t];e.style[t]=n(Number.parseFloat(o))+"px"})}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&wt.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,e=>{const n=wt.getDataAttribute(e,t);void 0===n?e.style.removeProperty(t):(wt.removeDataAttribute(e,t),e.style[t]=n)})}_applyManipulationCallback(e,t){He(e)?t(e):_t.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const Xt={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Kt={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"};class Qt{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&Ve(this._getElement()),this._getElement().classList.add("show"),this._emulateAnimation(()=>{Xe(e)})):Xe(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation(()=>{this.dispose(),Xe(e)})):Xe(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_getConfig(e){return(e={...Xt,..."object"==typeof e?e:{}}).rootElement=Pe(e.rootElement),ze("backdrop",e,Kt),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),pt.on(this._getElement(),"mousedown.bs.backdrop",()=>{Xe(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(pt.off(this._element,"mousedown.bs.backdrop"),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){Ke(e,this._getElement(),this._config.isAnimated)}}const Gt={trapElement:null,autofocus:!0},Jt={trapElement:"element",autofocus:"boolean"};class Zt{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),pt.off(document,".bs.focustrap"),pt.on(document,"focusin.bs.focustrap",e=>this._handleFocusin(e)),pt.on(document,"keydown.tab.bs.focustrap",e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,pt.off(document,".bs.focustrap"))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const i=_t.focusableChildren(n);0===i.length?n.focus():"backward"===this._lastTabNavDirection?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?"backward":"forward")}_getConfig(e){return e={...Gt,..."object"==typeof e?e:{}},ze("focustrap",e,Jt),e}}const en={backdrop:!0,keyboard:!0,focus:!0},tn={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class nn extends yt{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=_t.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Yt}static get Default(){return en}static get NAME(){return"modal"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;pt.trigger(this._element,"show.bs.modal",{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add("modal-open"),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),pt.on(this._dialog,"mousedown.dismiss.bs.modal",()=>{pt.one(this._element,"mouseup.dismiss.bs.modal",e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;if(pt.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove("show"),pt.off(this._element,"click.dismiss.bs.modal"),pt.off(this._dialog,"mousedown.dismiss.bs.modal"),this._queueCallback(()=>this._hideModal(),this._element,e)}dispose(){[window,this._dialog].forEach(e=>pt.off(e,".bs.modal")),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Qt({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Zt({trapElement:this._element})}_getConfig(e){return e={...en,...wt.getDataAttributes(this._element),..."object"==typeof e?e:{}},ze("modal",e,tn),e}_showElement(e){const t=this._isAnimated(),n=_t.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&Ve(this._element),this._element.classList.add("show");this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,pt.trigger(this._element,"shown.bs.modal",{relatedTarget:e})},this._dialog,t)}_setEscapeEvent(){this._isShown?pt.on(this._element,"keydown.dismiss.bs.modal",e=>{this._config.keyboard&&"Escape"===e.key?(e.preventDefault(),this.hide()):this._config.keyboard||"Escape"!==e.key||this._triggerBackdropTransition()}):pt.off(this._element,"keydown.dismiss.bs.modal")}_setResizeEvent(){this._isShown?pt.on(window,"resize.bs.modal",()=>this._adjustDialog()):pt.off(window,"resize.bs.modal")}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove("modal-open"),this._resetAdjustments(),this._scrollBar.reset(),pt.trigger(this._element,"hidden.bs.modal")})}_showBackdrop(e){pt.on(this._element,"click.dismiss.bs.modal",e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(pt.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const{classList:e,scrollHeight:t,style:n}=this._element,i=t>document.documentElement.clientHeight;!i&&"hidden"===n.overflowY||e.contains("modal-static")||(i||(n.overflowY="hidden"),e.add("modal-static"),this._queueCallback(()=>{e.remove("modal-static"),i||this._queueCallback(()=>{n.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!Be()||n&&!e&&Be())&&(this._element.style.paddingLeft=t+"px"),(n&&!e&&!Be()||!n&&e&&Be())&&(this._element.style.paddingRight=t+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=nn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}pt.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(e){const t=Ne(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),pt.one(t,"show.bs.modal",e=>{e.defaultPrevented||pt.one(t,"hidden.bs.modal",()=>{Ie(this)&&this.focus()})});const n=_t.findOne(".modal.show");n&&nn.getInstance(n).hide();nn.getOrCreateInstance(t).toggle(this)})),gt(nn),Ye(nn);const on={backdrop:!0,keyboard:!0,scroll:!1},rn={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"};class sn extends yt{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return"offcanvas"}static get Default(){return on}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;if(pt.trigger(this._element,"show.bs.offcanvas",{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Yt).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show");this._queueCallback(()=>{this._config.scroll||this._focustrap.activate(),pt.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:e})},this._element,!0)}hide(){if(!this._isShown)return;if(pt.trigger(this._element,"hide.bs.offcanvas").defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),this._backdrop.hide();this._queueCallback(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Yt).reset(),pt.trigger(this._element,"hidden.bs.offcanvas")},this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...on,...wt.getDataAttributes(this._element),..."object"==typeof e?e:{}},ze("offcanvas",e,rn),e}_initializeBackDrop(){return new Qt({className:"offcanvas-backdrop",isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Zt({trapElement:this._element})}_addEventListeners(){pt.on(this._element,"keydown.dismiss.bs.offcanvas",e=>{this._config.keyboard&&"Escape"===e.key&&this.hide()})}static jQueryInterface(e){return this.each((function(){const t=sn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}pt.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(e){const t=Ne(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),qe(this))return;pt.one(t,"hidden.bs.offcanvas",()=>{Ie(this)&&this.focus()});const n=_t.findOne(".offcanvas.show");n&&n!==t&&sn.getInstance(n).hide();sn.getOrCreateInstance(t).toggle(this)})),pt.on(window,"load.bs.offcanvas.data-api",()=>_t.find(".offcanvas.show").forEach(e=>sn.getOrCreateInstance(e).show())),gt(sn),Ye(sn);const an=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),ln=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,cn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,dn=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!an.has(n)||Boolean(ln.test(e.nodeValue)||cn.test(e.nodeValue));const i=t.filter(e=>e instanceof RegExp);for(let e=0,t=i.length;e<t;e++)if(i[e].test(n))return!0;return!1},un={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function pn(e,t,n){if(!e.length)return e;if(n&&"function"==typeof n)return n(e);const i=(new window.DOMParser).parseFromString(e,"text/html"),o=[].concat(...i.body.querySelectorAll("*"));for(let e=0,n=o.length;e<n;e++){const n=o[e],i=n.nodeName.toLowerCase();if(!Object.keys(t).includes(i)){n.remove();continue}const r=[].concat(...n.attributes),s=[].concat(t["*"]||[],t[i]||[]);r.forEach(e=>{dn(e,s)||n.removeAttribute(e.nodeName)})}return i.body.innerHTML}const hn=new Set(["sanitize","allowList","sanitizeFn"]),fn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},yn={AUTO:"auto",TOP:"top",RIGHT:Be()?"left":"right",BOTTOM:"bottom",LEFT:Be()?"right":"left"},gn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:un,popperConfig:null},mn={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"};class vn extends yt{constructor(e,t){if(void 0===i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return gn}static get NAME(){return"tooltip"}static get Event(){return mn}static get DefaultType(){return fn}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),pt.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=pt.trigger(this._element,this.constructor.Event.SHOW),t=We(this._element),n=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(".tooltip-inner").innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const i=this.getTipElement(),o=(e=>{do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e));return e})(this.constructor.NAME);i.setAttribute("id",o),this._element.setAttribute("aria-describedby",o),this._config.animation&&i.classList.add("fade");const r="function"==typeof this._config.placement?this._config.placement.call(this,i,this._element):this._config.placement,s=this._getAttachment(r);this._addAttachmentClass(s);const{container:a}=this._config;ft.set(i,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(i),pt.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=Ee(this._element,i,this._getPopperConfig(s)),i.classList.add("show");const l=this._resolvePossibleFunction(this._config.customClass);l&&i.classList.add(...l.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>{pt.on(e,"mouseover",Ue)});const c=this.tip.classList.contains("fade");this._queueCallback(()=>{const e=this._hoverState;this._hoverState=null,pt.trigger(this._element,this.constructor.Event.SHOWN),"out"===e&&this._leave(null,this)},this.tip,c)}hide(){if(!this._popper)return;const e=this.getTipElement();if(pt.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;e.classList.remove("show"),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>pt.off(e,"mouseover",Ue)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const t=this.tip.classList.contains("fade");this._queueCallback(()=>{this._isWithActiveTrigger()||("show"!==this._hoverState&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),pt.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},this.tip,t),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove("fade","show"),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),".tooltip-inner")}_sanitizeAndSetContent(e,t,n){const i=_t.findOne(n,e);t||!i?this.setElementContent(i,t):i.remove()}setElementContent(e,t){if(null!==e)return He(t)?(t=Pe(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=pn(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"==typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return yn[e.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(e=>{if("click"===e)pt.on(this._element,this.constructor.Event.CLICK,this._config.selector,e=>this.toggle(e));else if("manual"!==e){const t="hover"===e?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n="hover"===e?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;pt.on(this._element,t,this._config.selector,e=>this._enter(e)),pt.on(this._element,n,this._config.selector,e=>this._leave(e))}}),this._hideModalHandler=()=>{this._element&&this.hide()},pt.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?"focus":"hover"]=!0),t.getTipElement().classList.contains("show")||"show"===t._hoverState?t._hoverState="show":(clearTimeout(t._timeout),t._hoverState="show",t._config.delay&&t._config.delay.show?t._timeout=setTimeout(()=>{"show"===t._hoverState&&t.show()},t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?"focus":"hover"]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState="out",t._config.delay&&t._config.delay.hide?t._timeout=setTimeout(()=>{"out"===t._hoverState&&t.hide()},t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=wt.getDataAttributes(this._element);return Object.keys(t).forEach(e=>{hn.has(e)&&delete t[e]}),(e={...this.constructor.Default,...t,..."object"==typeof e&&e?e:{}}).container=!1===e.container?document.body:Pe(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),ze("tooltip",e,this.constructor.DefaultType),e.sanitize&&(e.template=pn(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map(e=>e.trim()).forEach(t=>e.classList.remove(t))}_getBasicClassPrefix(){return"bs-tooltip"}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=vn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Ye(vn);const xn={...vn.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},bn={...vn.DefaultType,content:"(string|element|function)"},wn={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class _n extends vn{static get Default(){return xn}static get NAME(){return"popover"}static get Event(){return wn}static get DefaultType(){return bn}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),".popover-header"),this._sanitizeAndSetContent(e,this._getContent(),".popover-body")}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return"bs-popover"}static jQueryInterface(e){return this.each((function(){const t=_n.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Ye(_n);const kn={offset:10,method:"auto",target:""},Tn={offset:"number",method:"string",target:"(string|element)"},jn=".nav-link, .list-group-item, .dropdown-item";class Cn extends yt{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,pt.on(this._scrollElement,"scroll.bs.scrollspy",()=>this._process()),this.refresh(),this._process()}static get Default(){return kn}static get NAME(){return"scrollspy"}refresh(){const e=this._scrollElement===this._scrollElement.window?"offset":"position",t="auto"===this._config.method?e:this._config.method,n="position"===t?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();_t.find(jn,this._config.target).map(e=>{const i=Le(e),o=i?_t.findOne(i):null;if(o){const e=o.getBoundingClientRect();if(e.width||e.height)return[wt[t](o).top+n,i]}return null}).filter(e=>e).sort((e,t)=>e[0]-t[0]).forEach(e=>{this._offsets.push(e[0]),this._targets.push(e[1])})}dispose(){pt.off(this._scrollElement,".bs.scrollspy"),super.dispose()}_getConfig(e){return(e={...kn,...wt.getDataAttributes(this._element),..."object"==typeof e&&e?e:{}}).target=Pe(e.target)||document.documentElement,ze("scrollspy",e,Tn),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&(void 0===this._offsets[t+1]||e<this._offsets[t+1])&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=jn.split(",").map(t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`),n=_t.findOne(t.join(","),this._config.target);n.classList.add("active"),n.classList.contains("dropdown-item")?_t.findOne(".dropdown-toggle",n.closest(".dropdown")).classList.add("active"):_t.parents(n,".nav, .list-group").forEach(e=>{_t.prev(e,".nav-link, .list-group-item").forEach(e=>e.classList.add("active")),_t.prev(e,".nav-item").forEach(e=>{_t.children(e,".nav-link").forEach(e=>e.classList.add("active"))})}),pt.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:e})}_clear(){_t.find(jn,this._config.target).filter(e=>e.classList.contains("active")).forEach(e=>e.classList.remove("active"))}static jQueryInterface(e){return this.each((function(){const t=Cn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}pt.on(window,"load.bs.scrollspy.data-api",()=>{_t.find('[data-bs-spy="scroll"]').forEach(e=>new Cn(e))}),Ye(Cn);class Sn extends yt{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active"))return;let e;const t=Ne(this._element),n=this._element.closest(".nav, .list-group");if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?":scope > li > .active":".active";e=_t.find(t,n),e=e[e.length-1]}const i=e?pt.trigger(e,"hide.bs.tab",{relatedTarget:this._element}):null;if(pt.trigger(this._element,"show.bs.tab",{relatedTarget:e}).defaultPrevented||null!==i&&i.defaultPrevented)return;this._activate(this._element,n);const o=()=>{pt.trigger(e,"hidden.bs.tab",{relatedTarget:this._element}),pt.trigger(this._element,"shown.bs.tab",{relatedTarget:e})};t?this._activate(t,t.parentNode,o):o()}_activate(e,t,n){const i=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?_t.children(t,".active"):_t.find(":scope > li > .active",t))[0],o=n&&i&&i.classList.contains("fade"),r=()=>this._transitionComplete(e,i,n);i&&o?(i.classList.remove("show"),this._queueCallback(r,e,!0)):r()}_transitionComplete(e,t,n){if(t){t.classList.remove("active");const e=_t.findOne(":scope > .dropdown-menu .active",t.parentNode);e&&e.classList.remove("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),Ve(e),e.classList.contains("fade")&&e.classList.add("show");let i=e.parentNode;if(i&&"LI"===i.nodeName&&(i=i.parentNode),i&&i.classList.contains("dropdown-menu")){const t=e.closest(".dropdown");t&&_t.find(".dropdown-toggle",t).forEach(e=>e.classList.add("active")),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=Sn.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}pt.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),qe(this))return;Sn.getOrCreateInstance(this).show()})),Ye(Sn);const Dn={animation:"boolean",autohide:"boolean",delay:"number"},An={animation:!0,autohide:!0,delay:5e3};class En extends yt{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return Dn}static get Default(){return An}static get NAME(){return"toast"}show(){if(pt.trigger(this._element,"show.bs.toast").defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");this._element.classList.remove("hide"),Ve(this._element),this._element.classList.add("show"),this._element.classList.add("showing"),this._queueCallback(()=>{this._element.classList.remove("showing"),pt.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation)}hide(){if(!this._element.classList.contains("show"))return;if(pt.trigger(this._element,"hide.bs.toast").defaultPrevented)return;this._element.classList.add("showing"),this._queueCallback(()=>{this._element.classList.add("hide"),this._element.classList.remove("showing"),this._element.classList.remove("show"),pt.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),super.dispose()}_getConfig(e){return e={...An,...wt.getDataAttributes(this._element),..."object"==typeof e&&e?e:{}},ze("toast",e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){pt.on(this._element,"mouseover.bs.toast",e=>this._onInteraction(e,!0)),pt.on(this._element,"mouseout.bs.toast",e=>this._onInteraction(e,!1)),pt.on(this._element,"focusin.bs.toast",e=>this._onInteraction(e,!0)),pt.on(this._element,"focusout.bs.toast",e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=En.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}gt(En),Ye(En);n(5),n(6);window.jQuery=window.$=n(0),window.feather=n(7)}]);;
!function(a){a.fn.datepicker.dates.fr={days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],daysShort:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],daysMin:["d","l","ma","me","j","v","s"],months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],monthsShort:["janv.","févr.","mars","avril","mai","juin","juil.","août","sept.","oct.","nov.","déc."],today:"Aujourd'hui",monthsTitle:"Mois",clear:"Effacer",weekStart:1,format:"dd/mm/yyyy"}}(jQuery);;
var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
    state_color: "#00457a",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: "3",
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    location_description: "",
    location_url: "",
    location_color: "#ee0000",
    location_opacity: "1",
    location_hover_opacity: 1,
    location_size: "10",
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#FFFFFF",
    label_hover_color: "#d5ddec",
    label_size: "14",
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 1,
    //navigation_size: '0',

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "country-map",
    auto_load: "no",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "",
    popups: "detect",
    /*state_image_url: "https://uae.inventis.ma/themes/custom/uae/assets/images/map.png",
    state_image_position: "manual",
    state_image_size: "140",
    state_image_x: "0",
    state_image_y: "0",
    location_image_url: ""*/
  },
  state_specific: {
    MAR1430: {
      name: "Blank"
    },
    MAR1445: {
      name: "Martil"
    },
    MAR1446: {
      name: "Tétouan"
    },
    MAR1447: {
      name: "Tanger"
    },
    MAR1448: {
      name: "Al Hoceima"
    },
    MAR1449: {
      name: "Chefchaouen"
    },
    MAR1450: {
      name: "Ouezzane"
    },
    MAR1451: {
      name: "Ksar El Kebir"
    },
    MAR1452: {
      name: "Larache"
    },
    MAR1453: {
      name: "Oujda"
    },
    MAR1454: {
      name: "Fès"
    },
    MAR1455: {
      name: "Rabat"
    },
    MAR1456: {
      name: "Casablanca"
    },
    MAR1457: {
      name: "Safi"
    },
    MAR3456: {
      name: "Marrakech"
    },
    MAR3457: {
      name: "Agadir"
    },
    MAR3469: {
      name: "Laâyoune"
    },
    MAR3470: {
      name: "Dakhla"
    }
  },
  locations: {
    "0": {
      lat: "35.72425063782766",
      lng: "-5.574316549999996",
      name: "Blank",
      display: 'region'
    },
    "1": {
      lat: "35.74325063782766",
      lng: "-5.31016549999996",
      name: "Martil",
      display: 'region'
    },
    "2": {
      lat: 35.338,
      lng: -5.44889,
      name: "Tétouan",
      display: 'region'
    },
    "3": {
      lat: 35.4895,
      lng: -6.00,
      name: "Tanger",
      //display: 'region'
    },
    "4": {
      lat: 34.689,
      lng: -3.89,
      name: "Al Hoceima",
      display: 'region'
    },
    "5": {
      lat: 34.875,
      lng: -4.822,
      name: "Chefchaouen",
      display: 'region'
    },
    "6": {
      lat: 34.45,
      lng: -5.472,
      name: "Ouezzane",
      display: 'region'
    },
    "7": {
      lat: 34.76395951213762,
      lng: -5.9869015500000085,
      name: "Ksar El Kebir",
      display: 'region'
    },
    "8": {
      lat: 35.139,
      lng: -5.939,
      name: "Larache",
      display: 'region'
    },
    "9": {
      lat: 34.681,
      lng: -1.918,
      name: "Oujda"
    },
    "10": {
      lat: 34.042,
      lng: -5.001,
      name: "Fès"
    },
    "11": {
      lat: 34.018,
      lng: -6.836,
      name: "Rabat"
    },
    "12": {
      lat: 33.597,
      lng: -7.619,
      name: "Casablanca"
    },
    "13": {
      lat: 31.895,
      lng: -9.723,
      name: "Safi"
    },
    "14": {
      lat: 31.634,
      lng: -8.002,
      name: "Marrakech"
    },
    "15": {
      lat: "29.827754700000026",
      lng: "-10.28107200000005",
      name: "Agadir"
    },
    "16": {
      lat: "25.840328059793298",
      lng: "-15.183532799999993",
      name: "Laâyoune"
    },
    "17": {
      lat: "22.195430040635527",
      lng: "-18.045576050000003",
      name: "Dakhla"
    },
  },
  labels: {
    "1": {
      name: "Martil",
      parent_type: "location",
      parent_id: "0",
      //display: "state"
      color: "#080809",
      y: "24.2",
      x: "763"
    },
    "2": {
      name: "Tétouan",
      x: 728.9,
      y: "45",
      //display: "state",
      parent_type: "location",
      parent_id: "1"
    },
    "3": {
      name: "Tanger",
      x: 715.1,
      y: "28",
      display: "out",
      parent_type: "location",
      parent_id: "2"
    },
    "4": {
      name: "Al Hoceima",
      x: 818,
      y: "72",
      //display: "state",
      parent_type: "location",
      parent_id: "4"
    },
    "5": {
      name: "Chefchaouen",
      x: "734.9",
      y: "76",
      //display: "state",
      parent_type: "location",
      parent_id: "4"
    },
    "6": {
      name: "Ouezzane",
      x: 714.9,
      y: "105",
      //display: "state",
      parent_type: "location",
      parent_id: "5"
    },
    "7": {
      name: "Ksar El Kebir",
      x: 656.5,
      y: 36.5,
      color: "#080809",
      //display: "state",
      parent_type: "location",
      parent_id: "6"
    },
    "8": {
      name: "Larache",
      x: "643.8",
      y: "57.1",
      //display: "state",
      color: "#080809",
      parent_type: "location",
      parent_id: "7",
    },
    "9": {
      name: "Oujda",
      x: "910.7",
      y: 96.2,
      display: "out",
      parent_type: "location",
      parent_id: "8"
    },
    "10": {
      name: "Fès",
      x: 751.1,
      y: "165",
      display: "out",
      parent_type: "location",
      parent_id: "9"
    },
    "11": {
      name: "Rabat",
      x: "670",
      y: 146.4,
      display: "out",
      parent_type: "location",
      parent_id: "10"
    },
    "12": {
      name: "Casablanca",
      x: "635",
      y: 178,
      display: "out",
      parent_type: "location",
      parent_id: "11"
    },
    "13": {
      name: "Safi",
      x: "480",
      y: 306.9,
      display: "out",
      parent_type: "location",
      parent_id: "12"
    },
    "14": {
      name: "Marrakech",
      x: 563.7,
      y: "345",
      display: "out",
      parent_type: "location",
      parent_id: "13"
    },
    "15": {
      name: "Agadir",
      x: "455",
      y: 455.1,
      display: "out",
      parent_type: "location",
      parent_id: "14"
    },
    "16": {
      name: "Laâyoune",
      x: "160",
      y: 736.8,
      display: "out",
      parent_type: "location",
      parent_id: "15"
    },
    "17": {
      name: "Dakhla",
      x: "-25",
      y: 985.4,
      display: "out",
      parent_type: "location",
      parent_id: "16"
    }
  },
  legend: {
    entries: []
  },
  regions: {
    "0": {
      states: [
        "MAR1445",
        "MAR1446",
        "MAR1447",
        "MAR1448",
        "MAR1449",
        "MAR1450",
        "MAR1451",
        "MAR1452",
        'MAR1430'
      ],
      name: "Tanger-Tétouan-Al Hoceïma"
    },
    "1": {
      states: [
        "MAR1455"
      ],
      name: "Rabat-Salé-Kénitra",
      zoomable: "no"
    },
    "2": {
      states: [
        "MAR1456"
      ],
      name: "Casablanca-Settat",
      zoomable: "no"
    },
    "3": {
      states: [
        "MAR3456",
        "MAR1457"
      ],
      name: "Marrakech-Safi",
      zoomable: "no"
    },
    "4": {
      states: [
        "MAR3457"
      ],
      name: "Souss-Massa",
      zoomable: "no"
    },
    "5": {
      states: [
        "MAR3471"
      ],
      name: "Guelmim-Oued Noun",
      zoomable: "no"
    },
    "6": {
      states: [
        "MAR3469"
      ],
      name: "Laâyoune-Sakia El Hamra",
      zoomable: "no"
    },
    "7": {
      states: [
        "MAR3470"
      ],
      name: "Dakhla-Oued Ed-Dahab",
      zoomable: "no"
    },
    "8": {
      states: [
        "MAR1454"
      ],
      name: "Fès-Meknès",
      zoomable: "no"
    },
    "9": {
      states: [
        "MAR3472"
      ],
      name: "Drâa-Tafilalet",
      zoomable: "no"
    },
    "10": {
      states: [
        "MAR3473"
      ],
      name: "Béni Mellal-Khénifra",
      zoomable: "no"
    },
    "11": {
      states: [
        "MAR1453"
      ],
      name: "Oriental",
      zoomable: "no"
    }
  },
  data: {
    data: {}
  }
};
;
!function (t) {
    var e, f, p, a, d, g, x, y, m;
    t.eve = (e = "0.4.2", f = "hasOwnProperty", p = /[\.\/]/, a = function () {
    }, d = function (t, e) {
        return t - e
    }, (m = function (t, e) {
        t = String(t);
        var r, i = x, n = Array.prototype.slice.call(arguments, 2), s = m.listeners(t), a = 0, o = [], l = {}, h = [],
            u = g;
        g = t;
        for (var c = x = 0, f = s.length; c < f; c++) "zIndex" in s[c] && (o.push(s[c].zIndex), s[c].zIndex < 0 && (l[s[c].zIndex] = s[c]));
        for (o.sort(d); o[a] < 0;) if (r = l[o[a++]], h.push(r.apply(e, n)), x) return x = i, h;
        for (c = 0; c < f; c++) if ("zIndex" in (r = s[c])) if (r.zIndex == o[a]) {
            if (h.push(r.apply(e, n)), x) break;
            do {
                if ((r = l[o[++a]]) && h.push(r.apply(e, n)), x) break
            } while (r)
        } else l[r.zIndex] = r; else if (h.push(r.apply(e, n)), x) break;
        return x = i, g = u, h.length ? h : null
    })._events = y = {n: {}}, m.listeners = function (t) {
        for (var e, r, i, n, s, a, o = t.split(p), l = y, h = [l], u = [], c = 0, f = o.length; c < f; c++) {
            for (a = [], n = 0, s = h.length; n < s; n++) for (r = [(l = h[n].n)[o[c]], l["*"]], i = 2; i--;) (e = r[i]) && (a.push(e), u = u.concat(e.f || []));
            h = a
        }
        return u
    }, m.on = function (t, e) {
        if (t = String(t), "function" != typeof e) return function () {
        };
        for (var r = t.split(p), i = y, n = 0, s = r.length; n < s; n++) i = (i = i.n).hasOwnProperty(r[n]) && i[r[n]] || (i[r[n]] = {n: {}});
        for (i.f = i.f || [], n = 0, s = i.f.length; n < s; n++) if (i.f[n] == e) return a;
        return i.f.push(e), function (t) {
            +t == +t && (e.zIndex = +t)
        }
    }, m.f = function (t) {
        var e = [].slice.call(arguments, 1);
        return function () {
            m.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    }, m.stop = function () {
        x = 1
    }, m.nt = function (t) {
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(g) : g
    }, m.nts = function () {
        return g.split(p)
    }, m.off = m.unbind = function (t, e) {
        if (t) {
            for (var r, i, n, s = t.split(p), a = [y], o = 0, l = s.length; o < l; o++) for (u = 0; u < a.length; u += n.length - 2) {
                if (n = [u, 1], r = a[u].n, "*" != s[o]) r[s[o]] && n.push(r[s[o]]); else for (i in r) r[f](i) && n.push(r[i]);
                a.splice.apply(a, n)
            }
            for (o = 0, l = a.length; o < l; o++) for (r = a[o]; r.n;) {
                if (e) {
                    if (r.f) {
                        for (u = 0, c = r.f.length; u < c; u++) if (r.f[u] == e) {
                            r.f.splice(u, 1);
                            break
                        }
                        r.f.length || delete r.f
                    }
                    for (i in r.n) if (r.n[f](i) && r.n[i].f) {
                        for (var h = r.n[i].f, u = 0, c = h.length; u < c; u++) if (h[u] == e) {
                            h.splice(u, 1);
                            break
                        }
                        h.length || delete r.n[i].f
                    }
                } else for (i in delete r.f, r.n) r.n[f](i) && r.n[i].f && delete r.n[i].f;
                r = r.n
            }
        } else m._events = y = {n: {}}
    }, m.once = function (t, e) {
        var r = function () {
            return m.unbind(t, r), e.apply(this, arguments)
        };
        return m.on(t, r)
    }, m.version = e, m.toString = function () {
        return "You are running Eve " + e
    }, m)
}(this), function (t) {
    !function (t, N) {
        function j(t) {
            if (j.is(t, "function")) return i ? t() : N.on("raphael.DOMload", t);
            if (j.is(t, v)) return j._engine.create[x](j, t.splice(0, 3 + j.is(t[0], F))).add(t);
            var e = Array.prototype.slice.call(arguments, 0);
            if (j.is(e[e.length - 1], "function")) {
                var r = e.pop();
                return i ? r.call(j._engine.create[x](j, e)) : N.on("raphael.DOMload", function () {
                    r.call(j._engine.create[x](j, e))
                })
            }
            return j._engine.create[x](j, arguments)
        }

        j.version = "2.1.0", j.eve = N;

        function s(t, e) {
            return I(t) - I(e)
        }

        function e(t, e, r, i) {
            return null == i && (i = r), [["M", t, e], ["m", 0, -i], ["a", r, i, 0, 1, 1, 0, 2 * i], ["a", r, i, 0, 1, 1, 0, -2 * i], ["z"]]
        }

        var i, E = /[, ]+/, a = {circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1}, n = /\{(\d+)\}/g,
            L = "hasOwnProperty", d = {doc: document, win: t},
            r = {was: Object.prototype[L].call(d.win, "Raphael"), is: d.win.Raphael}, o = function () {
                this.ca = this.customAttributes = {}
            }, x = "apply", M = "concat",
            g = "ontouchstart" in d.win || d.win.DocumentTouch && d.doc instanceof DocumentTouch, w = " ", P = String,
            z = "split",
            l = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[z](w),
            h = {mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend"}, y = P.prototype.toLowerCase,
            B = Math, _ = B.max, k = B.min, S = B.abs, m = B.pow, T = B.PI, F = "number", u = "string", v = "array",
            c = Object.prototype.toString,
            f = (j._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
            p = {NaN: 1, Infinity: 1, "-Infinity": 1}, R = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
            C = B.round, I = parseFloat, b = parseInt, A = P.prototype.toUpperCase, q = j._availableAttrs = {
                "arrow-end": "none",
                "arrow-start": "none",
                blur: 0,
                "clip-rect": "0 0 1e9 1e9",
                cursor: "default",
                cx: 0,
                cy: 0,
                fill: "#fff",
                "fill-opacity": 1,
                font: '10px "Arial"',
                "font-family": '"Arial"',
                "font-size": "10",
                "font-style": "normal",
                "font-weight": 400,
                gradient: 0,
                height: 0,
                href: "http://raphaeljs.com/",
                "letter-spacing": 0,
                opacity: 1,
                path: "M0,0",
                r: 0,
                rx: 0,
                ry: 0,
                src: "",
                stroke: "#000",
                "stroke-dasharray": "",
                "stroke-linecap": "butt",
                "stroke-linejoin": "butt",
                "stroke-miterlimit": 0,
                "stroke-opacity": 1,
                "stroke-width": 1,
                target: "_blank",
                "text-anchor": "middle",
                title: "Raphael",
                transform: "",
                width: 0,
                x: 0,
                y: 0
            }, D = j._availableAnimAttrs = {
                blur: F,
                "clip-rect": "csv",
                cx: F,
                cy: F,
                fill: "colour",
                "fill-opacity": F,
                "font-size": F,
                height: F,
                opacity: F,
                path: "path",
                r: F,
                rx: F,
                ry: F,
                stroke: "colour",
                "stroke-opacity": F,
                "stroke-width": F,
                transform: "transform",
                width: F,
                x: F,
                y: F
            },
            V = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
            O = {hs: 1, rg: 1}, Y = /,?([achlmqrstvxz]),?/gi,
            G = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
            W = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
            X = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
            H = (j._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
            U = function (t) {
                return t
            }, $ = j._rectPath = function (t, e, r, i, n) {
                return n ? [["M", t + n, e], ["l", r - 2 * n, 0], ["a", n, n, 0, 0, 1, n, n], ["l", 0, i - 2 * n], ["a", n, n, 0, 0, 1, -n, n], ["l", 2 * n - r, 0], ["a", n, n, 0, 0, 1, -n, -n], ["l", 0, 2 * n - i], ["a", n, n, 0, 0, 1, n, -n], ["z"]] : [["M", t, e], ["l", r, 0], ["l", 0, i], ["l", -r, 0], ["z"]]
            }, Z = j._getPath = {
                path: function (t) {
                    return t.attr("path")
                }, circle: function (t) {
                    t = t.attrs;
                    return e(t.cx, t.cy, t.r)
                }, ellipse: function (t) {
                    t = t.attrs;
                    return e(t.cx, t.cy, t.rx, t.ry)
                }, rect: function (t) {
                    t = t.attrs;
                    return $(t.x, t.y, t.width, t.height, t.r)
                }, image: function (t) {
                    t = t.attrs;
                    return $(t.x, t.y, t.width, t.height)
                }, text: function (t) {
                    t = t._getBBox();
                    return $(t.x, t.y, t.width, t.height)
                }, set: function (t) {
                    t = t._getBBox();
                    return $(t.x, t.y, t.width, t.height)
                }
            }, Q = j.mapPath = function (t, e) {
                if (!e) return t;
                for (var r, i, n, s, a, o = 0, l = (t = Ct(t)).length; o < l; o++) for (n = 1, s = (a = t[o]).length; n < s; n += 2) r = e.x(a[n], a[n + 1]), i = e.y(a[n], a[n + 1]), a[n] = r, a[n + 1] = i;
                return t
            };
        if (j._g = d, j.type = d.win.SVGAngle || d.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == j.type) {
            var J, K = d.doc.createElement("div");
            if (K.innerHTML = '<v:shape adj="1"/>', (J = K.firstChild).style.behavior = "url(#default#VML)", !J || "object" != typeof J.adj) return j.type = "";
            K = null
        }

        function tt(t) {
            if ("function" == typeof t || Object(t) !== t) return t;
            var e, r = new t.constructor;
            for (e in t) t[L](e) && (r[e] = tt(t[e]));
            return r
        }

        j.svg = !(j.vml = "VML" == j.type), j._Paper = o, j.fn = K = o.prototype = j.prototype, j._id = 0, j._oid = 0, j.is = function (t, e) {
            return "finite" == (e = y.call(e)) ? !p[L](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || c.call(t).slice(8, -1).toLowerCase() == e
        }, j.angle = function (t, e, r, i, n, s) {
            if (null != n) return j.angle(t, e, n, s) - j.angle(r, i, n, s);
            r = t - r, i = e - i;
            return r || i ? (180 + 180 * B.atan2(-i, -r) / T + 360) % 360 : 0
        }, j.rad = function (t) {
            return t % 360 * T / 180
        }, j.deg = function (t) {
            return 180 * t / T % 360
        }, j.snapTo = function (t, e, r) {
            if (r = j.is(r, "finite") ? r : 10, j.is(t, v)) {
                for (var i = t.length; i--;) if (S(t[i] - e) <= r) return t[i]
            } else {
                var n = e % (t = +t);
                if (n < r) return e - n;
                if (t - r < n) return e - n + t
            }
            return e
        };
        j.createUUID = function (t, e) {
            return function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
            }
        }(/[xy]/g, function (t) {
            var e = 16 * B.random() | 0;
            return ("x" == t ? e : 3 & e | 8).toString(16)
        });
        j.setWindow = function (t) {
            N("raphael.setWindow", j, d.win, t), d.win = t, d.doc = d.win.document, j._engine.initWin && j._engine.initWin(d.win)
        };

        function et() {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        }

        function rt() {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        }

        function it() {
            return this.hex
        }

        function nt(t, e, r) {
            var i;
            return null == e && j.is(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, e = t.g, t = t.r), null == e && j.is(t, u) && (t = (i = j.getRGB(t)).r, e = i.g, r = i.b), (1 < t || 1 < e || 1 < r) && (t /= 255, e /= 255, r /= 255), [t, e, r]
        }

        function st(t, e, r, i) {
            return r = {
                r: t *= 255,
                g: e *= 255,
                b: r *= 255,
                hex: j.rgb(t, e, r),
                toString: it
            }, j.is(i, "finite") && (r.opacity = i), r
        }

        var at = function (t) {
            if (j.vml) {
                var r, i = /^\s+|\s+$/g;
                try {
                    var e = new ActiveXObject("htmlfile");
                    e.write("<body>"), e.close(), r = e.body
                } catch (t) {
                    r = createPopup().document.body
                }
                var n = r.createTextRange();
                at = ot(function (t) {
                    try {
                        r.style.color = P(t).replace(i, "");
                        var e = n.queryCommandValue("ForeColor");
                        return "#" + ("000000" + (e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16).toString(16)).slice(-6)
                    } catch (t) {
                        return "none"
                    }
                })
            } else {
                var s = d.doc.createElement("i");
                s.title = "Raphaël Colour Picker", s.style.display = "none", d.doc.body.appendChild(s), at = ot(function (t) {
                    return s.style.color = t, d.doc.defaultView.getComputedStyle(s, "").getPropertyValue("color")
                })
            }
            return at(t)
        };

        function ot(n, s, a) {
            function o() {
                var t = Array.prototype.slice.call(arguments, 0), e = t.join("␀"), r = o.cache = o.cache || {},
                    i = o.count = o.count || [];
                return r[L](e) ? function (t, e) {
                    for (var r = 0, i = t.length; r < i; r++) if (t[r] === e) return t.push(t.splice(r, 1)[0])
                }(i, e) : (1e3 <= i.length && delete r[i.shift()], i.push(e), r[e] = n[x](s, t)), a ? a(r[e]) : r[e]
            }

            return o
        }

        j.color = function (t) {
            var e;
            return j.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = j.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : j.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = j.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (j.is(t, "string") && (t = j.getRGB(t)), j.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = j.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = j.rgb2hsb(t), t.v = e.b) : (t = {hex: "none"}).r = t.g = t.b = t.h = t.s = t.v = t.l = -1), t.toString = it, t
        }, j.hsb2rgb = function (t, e, r, i) {
            var n, s, a;
            return this.is(t, "object") && "h" in t && "s" in t && "b" in t && (r = t.b, e = t.s, i = (t = t.h).o), s = (a = r * e) * (1 - S((t = (t *= 360) % 360 / 60) % 2 - 1)), r = e = n = r - a, st(r += [a, s, 0, 0, s, a][t = ~~t], e += [s, a, a, s, 0, 0][t], n += [0, 0, s, a, a, s][t], i)
        }, j.hsl2rgb = function (t, e, r, i) {
            var n, s, a;
            return this.is(t, "object") && "h" in t && "s" in t && "l" in t && (r = t.l, e = t.s, t = t.h), (1 < t || 1 < e || 1 < r) && (t /= 360, e /= 100, r /= 100), s = (a = 2 * e * (r < .5 ? r : 1 - r)) * (1 - S((t = (t *= 360) % 360 / 60) % 2 - 1)), r = e = n = r - a / 2, st(r += [a, s, 0, 0, s, a][t = ~~t], e += [s, a, a, s, 0, 0][t], n += [0, 0, s, a, a, s][t], i)
        }, j.rgb2hsb = function (t, e, r) {
            var i, n;
            return t = (r = nt(t, e, r))[0], e = r[1], r = r[2], {
                h: ((0 == (n = (i = _(t, e, r)) - k(t, e, r)) ? null : i == t ? (e - r) / n : i == e ? (r - t) / n + 2 : (t - e) / n + 4) + 360) % 6 * 60 / 360,
                s: 0 == n ? 0 : n / i,
                b: i,
                toString: et
            }
        }, j.rgb2hsl = function (t, e, r) {
            var i, n, s;
            return t = (r = nt(t, e, r))[0], e = r[1], r = r[2], i = ((n = _(t, e, r)) + (s = k(t, e, r))) / 2, {
                h: ((0 == (s = n - s) ? null : n == t ? (e - r) / s : n == e ? (r - t) / s + 2 : (t - e) / s + 4) + 360) % 6 * 60 / 360,
                s: 0 == s ? 0 : i < .5 ? s / (2 * i) : s / (2 - 2 * i),
                l: i,
                toString: rt
            }
        }, j._path2string = function () {
            return this.join(",").replace(Y, "$1")
        };
        j._preload = function (t, e) {
            var r = d.doc.createElement("img");
            r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function () {
                e.call(this), this.onload = null, d.doc.body.removeChild(this)
            }, r.onerror = function () {
                d.doc.body.removeChild(this)
            }, d.doc.body.appendChild(r), r.src = t
        };

        function lt() {
            return this.hex
        }

        function ht(t, e) {
            for (var r = [], i = 0, n = t.length; i < n - 2 * !e; i += 2) {
                var s = [{x: +t[i - 2], y: +t[i - 1]}, {x: +t[i], y: +t[i + 1]}, {
                    x: +t[i + 2],
                    y: +t[i + 3]
                }, {x: +t[i + 4], y: +t[i + 5]}];
                e ? i ? n - 4 == i ? s[3] = {x: +t[0], y: +t[1]} : n - 2 == i && (s[2] = {
                    x: +t[0],
                    y: +t[1]
                }, s[3] = {x: +t[2], y: +t[3]}) : s[0] = {
                    x: +t[n - 2],
                    y: +t[n - 1]
                } : n - 4 == i ? s[3] = s[2] : i || (s[0] = {
                    x: +t[i],
                    y: +t[i + 1]
                }), r.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
            }
            return r
        }

        j.getRGB = ot(function (t) {
            if (!t || (t = P(t)).indexOf("-") + 1) return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: lt};
            if ("none" == t) return {r: -1, g: -1, b: -1, hex: "none", toString: lt};
            O[L](t.toLowerCase().substring(0, 2)) || "#" == t.charAt() || (t = at(t));
            var e, r, i, n, s, a = t.match(f);
            return a ? (a[2] && (i = b(a[2].substring(5), 16), r = b(a[2].substring(3, 5), 16), e = b(a[2].substring(1, 3), 16)), a[3] && (i = b((t = a[3].charAt(3)) + t, 16), r = b((t = a[3].charAt(2)) + t, 16), e = b((t = a[3].charAt(1)) + t, 16)), a[4] && (s = a[4][z](V), e = I(s[0]), "%" == s[0].slice(-1) && (e *= 2.55), r = I(s[1]), "%" == s[1].slice(-1) && (r *= 2.55), i = I(s[2]), "%" == s[2].slice(-1) && (i *= 2.55), "rgba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])), s[3] && "%" == s[3].slice(-1) && (n /= 100)), a[5] ? (s = a[5][z](V), e = I(s[0]), "%" == s[0].slice(-1) && (e *= 2.55), r = I(s[1]), "%" == s[1].slice(-1) && (r *= 2.55), i = I(s[2]), "%" == s[2].slice(-1) && (i *= 2.55), "deg" != s[0].slice(-3) && "°" != s[0].slice(-1) || (e /= 360), "hsba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])), s[3] && "%" == s[3].slice(-1) && (n /= 100), j.hsb2rgb(e, r, i, n)) : a[6] ? (s = a[6][z](V), e = I(s[0]), "%" == s[0].slice(-1) && (e *= 2.55), r = I(s[1]), "%" == s[1].slice(-1) && (r *= 2.55), i = I(s[2]), "%" == s[2].slice(-1) && (i *= 2.55), "deg" != s[0].slice(-3) && "°" != s[0].slice(-1) || (e /= 360), "hsla" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])), s[3] && "%" == s[3].slice(-1) && (n /= 100), j.hsl2rgb(e, r, i, n)) : ((a = {
                r: e,
                g: r,
                b: i,
                toString: lt
            }).hex = "#" + (16777216 | i | r << 8 | e << 16).toString(16).slice(1), j.is(n, "finite") && (a.opacity = n), a)) : {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: lt
            }
        }, j), j.hsb = ot(function (t, e, r) {
            return j.hsb2rgb(t, e, r).hex
        }), j.hsl = ot(function (t, e, r) {
            return j.hsl2rgb(t, e, r).hex
        }), j.rgb = ot(function (t, e, r) {
            return "#" + (16777216 | r | e << 8 | t << 16).toString(16).slice(1)
        }), j.getColor = function (t) {
            var e = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: t || .75},
                t = this.hsb2rgb(e.h, e.s, e.b);
            return e.h += .075, 1 < e.h && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
                h: 0,
                s: 1,
                b: e.b
            })), t.hex
        }, j.getColor.reset = function () {
            delete this.start
        }, j.parsePathString = function (t) {
            if (!t) return null;
            var e = ut(t);
            if (e.arr) return bt(e.arr);
            var s = {a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0}, a = [];
            return j.is(t, v) && j.is(t[0], v) && (a = bt(t)), a.length || P(t).replace(G, function (t, e, r) {
                var i = [], n = e.toLowerCase();
                if (r.replace(X, function (t, e) {
                    e && i.push(+e)
                }), "m" == n && 2 < i.length && (a.push([e][M](i.splice(0, 2))), n = "l", e = "m" == e ? "l" : "L"), "r" == n) a.push([e][M](i)); else for (; i.length >= s[n] && (a.push([e][M](i.splice(0, s[n]))), s[n]);) ;
            }), a.toString = j._path2string, e.arr = bt(a), a
        }, j.parseTransformString = ot(function (t) {
            if (!t) return null;
            var n = [];
            return j.is(t, v) && j.is(t[0], v) && (n = bt(t)), n.length || P(t).replace(W, function (t, e, r) {
                var i = [];
                y.call(e);
                r.replace(X, function (t, e) {
                    e && i.push(+e)
                }), n.push([e][M](i))
            }), n.toString = j._path2string, n
        });
        var ut = function (e) {
            var r = ut.ps = ut.ps || {};
            return r[e] ? r[e].sleep = 100 : r[e] = {sleep: 100}, setTimeout(function () {
                for (var t in r) r[L](t) && t != e && (r[t].sleep--, r[t].sleep || delete r[t])
            }), r[e]
        };

        function ct(t, e, r, i, n) {
            return t * (t * (-3 * e + 9 * r - 9 * i + 3 * n) + 6 * e - 12 * r + 6 * i) - 3 * e + 3 * r
        }

        function ft(t, e, r, i, n, s, a, o, l) {
            null == l && (l = 1);
            for (var h = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2, u = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], c = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, p = 0; p < 12; p++) {
                var d = h * u[p] + h, g = ct(d, t, r, n, a), d = ct(d, e, i, s, o), d = g * g + d * d;
                f += c[p] * B.sqrt(d)
            }
            return h * f
        }

        function pt(t, e, r) {
            var i = j.bezierBBox(t), n = j.bezierBBox(e);
            if (!j.isBBoxIntersect(i, n)) return r ? 0 : [];
            for (var i = ft.apply(0, t), n = ft.apply(0, e), s = _(~~(i / 5), 1), a = _(~~(n / 5), 1), o = [], l = [], h = {}, u = r ? 0 : [], c = 0; c < s + 1; c++) {
                var f = j.findDotsAtSegment.apply(j, t.concat(c / s));
                o.push({x: f.x, y: f.y, t: c / s})
            }
            for (c = 0; c < a + 1; c++) f = j.findDotsAtSegment.apply(j, e.concat(c / a)), l.push({
                x: f.x,
                y: f.y,
                t: c / a
            });
            for (c = 0; c < s; c++) for (var p = 0; p < a; p++) {
                var d = o[c], g = o[c + 1], x = l[p], y = l[p + 1], m = S(g.x - d.x) < .001 ? "y" : "x",
                    v = S(y.x - x.x) < .001 ? "y" : "x", b = function (t, e, r, i, n, s, a, o) {
                        if (!(_(t, r) < k(n, a) || k(t, r) > _(n, a) || _(e, i) < k(s, o) || k(e, i) > _(s, o))) {
                            var l = (t * i - e * r) * (n - a) - (t - r) * (n * o - s * a),
                                h = (t * i - e * r) * (s - o) - (e - i) * (n * o - s * a),
                                u = (t - r) * (s - o) - (e - i) * (n - a);
                            if (u) {
                                var c = l / u, l = h / u, h = +c.toFixed(2), u = +l.toFixed(2);
                                if (!(h < +k(t, r).toFixed(2) || h > +_(t, r).toFixed(2) || h < +k(n, a).toFixed(2) || h > +_(n, a).toFixed(2) || u < +k(e, i).toFixed(2) || u > +_(e, i).toFixed(2) || u < +k(s, o).toFixed(2) || u > +_(s, o).toFixed(2))) return {
                                    x: c,
                                    y: l
                                }
                            }
                        }
                    }(d.x, d.y, g.x, g.y, x.x, x.y, y.x, y.y);
                b && h[b.x.toFixed(4)] != b.y.toFixed(4) && (h[b.x.toFixed(4)] = b.y.toFixed(4), d = d.t + S((b[m] - d[m]) / (g[m] - d[m])) * (g.t - d.t), x = x.t + S((b[v] - x[v]) / (y[v] - x[v])) * (y.t - x.t), 0 <= d && d <= 1.001 && 0 <= x && x <= 1.001 && (r ? u++ : u.push({
                    x: b.x,
                    y: b.y,
                    t1: k(d, 1),
                    t2: k(x, 1)
                })))
            }
            return u
        }

        function dt(t, e, r) {
            t = j._path2curve(t), e = j._path2curve(e);
            for (var i, n, s, a, o, l, h, u, c, f, p = r ? 0 : [], d = 0, g = t.length; d < g; d++) {
                var x = t[d];
                if ("M" == x[0]) i = o = x[1], n = l = x[2]; else {
                    n = "C" == x[0] ? (i = (c = [i, n].concat(x.slice(1)))[6], c[7]) : (c = [i, n, i, n, o, l, o, l], i = o, l);
                    for (var y = 0, m = e.length; y < m; y++) {
                        var v = e[y];
                        if ("M" == v[0]) s = h = v[1], a = u = v[2]; else {
                            a = "C" == v[0] ? (s = (f = [s, a].concat(v.slice(1)))[6], f[7]) : (f = [s, a, s, a, h, u, h, u], s = h, u);
                            var b = pt(c, f, r);
                            if (r) p += b; else {
                                for (var _ = 0, w = b.length; _ < w; _++) b[_].segment1 = d, b[_].segment2 = y, b[_].bez1 = c, b[_].bez2 = f;
                                p = p.concat(b)
                            }
                        }
                    }
                }
            }
            return p
        }

        j.findDotsAtSegment = function (t, e, r, i, n, s, a, o, l) {
            var h = 1 - l, u = m(h, 3), c = m(h, 2), f = l * l, p = f * l,
                d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * a,
                g = u * e + 3 * c * l * i + 3 * h * l * l * s + p * o, u = t + 2 * l * (r - t) + f * (n - 2 * r + t),
                c = e + 2 * l * (i - e) + f * (s - 2 * i + e), p = r + 2 * l * (n - r) + f * (a - 2 * n + r),
                f = i + 2 * l * (s - i) + f * (o - 2 * s + i), r = h * t + l * r, i = h * e + l * i, a = h * n + l * a,
                l = h * s + l * o, o = 90 - 180 * B.atan2(u - p, c - f) / T;
            return (p < u || c < f) && (o += 180), {
                x: d,
                y: g,
                m: {x: u, y: c},
                n: {x: p, y: f},
                start: {x: r, y: i},
                end: {x: a, y: l},
                alpha: o
            }
        }, j.bezierBBox = function (t, e, r, i, n, s, a, o) {
            j.is(t, "array") || (t = [t, e, r, i, n, s, a, o]);
            t = kt.apply(null, t);
            return {
                x: t.min.x,
                y: t.min.y,
                x2: t.max.x,
                y2: t.max.y,
                width: t.max.x - t.min.x,
                height: t.max.y - t.min.y
            }
        }, j.isPointInsideBBox = function (t, e, r) {
            return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2
        }, j.isBBoxIntersect = function (t, e) {
            var r = j.isPointInsideBBox;
            return r(e, t.x, t.y) || r(e, t.x2, t.y) || r(e, t.x, t.y2) || r(e, t.x2, t.y2) || r(t, e.x, e.y) || r(t, e.x2, e.y) || r(t, e.x, e.y2) || r(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }, j.pathIntersection = function (t, e) {
            return dt(t, e)
        }, j.pathIntersectionNumber = function (t, e) {
            return dt(t, e, 1)
        }, j.isPointInsidePath = function (t, e, r) {
            var i = j.pathBBox(t);
            return j.isPointInsideBBox(i, e, r) && dt(t, [["M", e, r], ["H", i.x2 + 10]], 1) % 2 == 1
        }, j._removedFactory = function (t) {
            return function () {
                N("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t)
            }
        };

        function gt(t, e, r, i) {
            return [t, e, r, i, r, i]
        }

        function xt(t, e, r, i, n, s) {
            return [1 / 3 * t + 2 / 3 * r, 1 / 3 * e + 2 / 3 * i, 1 / 3 * n + 2 / 3 * r, 1 / 3 * s + 2 / 3 * i, n, s]
        }

        function yt(t, e, r, i, n, s, a, o, l) {
            var h = 1 - l;
            return {
                x: m(h, 3) * t + 3 * m(h, 2) * l * r + 3 * h * l * l * n + m(l, 3) * a,
                y: m(h, 3) * e + 3 * m(h, 2) * l * i + 3 * h * l * l * s + m(l, 3) * o
            }
        }

        function mt(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case"t":
                    return [e, 0, 0];
                case"m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case"r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case"s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }

        var vt = j.pathBBox = function (t) {
            var e = ut(t);
            if (e.bbox) return tt(e.bbox);
            if (!t) return {x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0};
            for (var r, i, n = 0, s = 0, a = [], o = [], l = 0, h = (t = Ct(t)).length; l < h; l++) "M" == (i = t[l])[0] ? (n = i[1], s = i[2], a.push(n), o.push(s)) : (r = kt(n, s, i[1], i[2], i[3], i[4], i[5], i[6]), a = a[M](r.min.x, r.max.x), o = o[M](r.min.y, r.max.y), n = i[5], s = i[6]);
            var u = k[x](0, a), c = k[x](0, o), f = _[x](0, a), p = _[x](0, o), d = f - u, g = p - c,
                g = {x: u, y: c, x2: f, y2: p, width: d, height: g, cx: u + d / 2, cy: c + g / 2};
            return e.bbox = tt(g), g
        }, bt = function (t) {
            t = tt(t);
            return t.toString = j._path2string, t
        }, o = j._pathToRelative = function (t) {
            var e = ut(t);
            if (e.rel) return bt(e.rel);
            j.is(t, v) && j.is(t && t[0], v) || (t = j.parsePathString(t));
            var r = [], i = 0, n = 0, s = 0, a = 0, o = 0;
            "M" == t[0][0] && (s = i = t[0][1], a = n = t[0][2], o++, r.push(["M", i, n]));
            for (var l = o, h = t.length; l < h; l++) {
                var u = r[l] = [], c = t[l];
                if (c[0] != y.call(c[0])) switch (u[0] = y.call(c[0]), u[0]) {
                    case"a":
                        u[1] = c[1], u[2] = c[2], u[3] = c[3], u[4] = c[4], u[5] = c[5], u[6] = +(c[6] - i).toFixed(3), u[7] = +(c[7] - n).toFixed(3);
                        break;
                    case"v":
                        u[1] = +(c[1] - n).toFixed(3);
                        break;
                    case"m":
                        s = c[1], a = c[2];
                    default:
                        for (var f = 1, p = c.length; f < p; f++) u[f] = +(c[f] - (f % 2 ? i : n)).toFixed(3)
                } else {
                    u = r[l] = [], "m" == c[0] && (s = c[1] + i, a = c[2] + n);
                    for (var d = 0, g = c.length; d < g; d++) r[l][d] = c[d]
                }
                var x = r[l].length;
                switch (r[l][0]) {
                    case"z":
                        i = s, n = a;
                        break;
                    case"h":
                        i += +r[l][x - 1];
                        break;
                    case"v":
                        n += +r[l][x - 1];
                        break;
                    default:
                        i += +r[l][x - 2], n += +r[l][x - 1]
                }
            }
            return r.toString = j._path2string, e.rel = bt(r), r
        }, _t = j._pathToAbsolute = function (t) {
            var e = ut(t);
            if (e.abs) return bt(e.abs);
            if (j.is(t, v) && j.is(t && t[0], v) || (t = j.parsePathString(t)), !t || !t.length) return [["M", 0, 0]];
            var r = [], i = 0, n = 0, s = 0, a = 0, o = 0;
            "M" == t[0][0] && (s = i = +t[0][1], a = n = +t[0][2], o++, r[0] = ["M", i, n]);
            for (var l, h, u = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), c = o, f = t.length; c < f; c++) {
                if (r.push(l = []), (h = t[c])[0] != A.call(h[0])) switch (l[0] = A.call(h[0]), l[0]) {
                    case"A":
                        l[1] = h[1], l[2] = h[2], l[3] = h[3], l[4] = h[4], l[5] = h[5], l[6] = +(h[6] + i), l[7] = +(h[7] + n);
                        break;
                    case"V":
                        l[1] = +h[1] + n;
                        break;
                    case"H":
                        l[1] = +h[1] + i;
                        break;
                    case"R":
                        for (var p = [i, n][M](h.slice(1)), d = 2, g = p.length; d < g; d++) p[d] = +p[d] + i, p[++d] = +p[d] + n;
                        r.pop(), r = r[M](ht(p, u));
                        break;
                    case"M":
                        s = +h[1] + i, a = +h[2] + n;
                    default:
                        for (d = 1, g = h.length; d < g; d++) l[d] = +h[d] + (d % 2 ? i : n)
                } else if ("R" == h[0]) p = [i, n][M](h.slice(1)), r.pop(), r = r[M](ht(p, u)), l = ["R"][M](h.slice(-2)); else for (var x = 0, y = h.length; x < y; x++) l[x] = h[x];
                switch (l[0]) {
                    case"Z":
                        i = s, n = a;
                        break;
                    case"H":
                        i = l[1];
                        break;
                    case"V":
                        n = l[1];
                        break;
                    case"M":
                        s = l[l.length - 2], a = l[l.length - 1];
                    default:
                        i = l[l.length - 2], n = l[l.length - 1]
                }
            }
            return r.toString = j._path2string, e.abs = bt(r), r
        }, wt = function (t, e, r, i, n, s, a, o, l, h) {
            var u = 120 * T / 180, c = T / 180 * (+n || 0), f = [], p = ot(function (t, e, r) {
                return {x: t * B.cos(r) - e * B.sin(r), y: t * B.sin(r) + e * B.cos(r)}
            });
            h ? (b = h[0], _ = h[1], m = h[2], v = h[3]) : (t = (g = p(t, e, -c)).x, e = g.y, o = (g = p(o, l, -c)).x, l = g.y, B.cos(T / 180 * n), B.sin(T / 180 * n), 1 < (y = (x = (t - o) / 2) * x / (r * r) + (d = (e - l) / 2) * d / (i * i)) && (r *= y = B.sqrt(y), i *= y), g = r * r, y = i * i, m = (g = (s == a ? -1 : 1) * B.sqrt(S((g * y - g * d * d - y * x * x) / (g * d * d + y * x * x)))) * r * d / i + (t + o) / 2, v = g * -i * x / r + (e + l) / 2, b = B.asin(((e - v) / i).toFixed(9)), _ = B.asin(((l - v) / i).toFixed(9)), (b = t < m ? T - b : b) < 0 && (b = 2 * T + b), (_ = o < m ? T - _ : _) < 0 && (_ = 2 * T + _), a && _ < b && (b -= 2 * T), !a && b < _ && (_ -= 2 * T));
            var d, g, x, y = _ - b;
            S(y) > u && (d = _, g = o, x = l, _ = b + u * (a && b < _ ? 1 : -1), o = m + r * B.cos(_), l = v + i * B.sin(_), f = wt(o, l, r, i, n, 0, a, g, x, [_, d, m, v])), y = _ - b;
            var m = B.cos(b), v = B.sin(b), b = B.cos(_), _ = B.sin(_), y = B.tan(y / 4), r = 4 / 3 * r * y,
                i = 4 / 3 * i * y, y = [t, e], m = [t + r * v, e - i * m], b = [o + r * _, l - i * b], l = [o, l];
            if (m[0] = 2 * y[0] - m[0], m[1] = 2 * y[1] - m[1], h) return [m, b, l][M](f);
            for (var w = [], k = 0, C = (f = [m, b, l][M](f).join()[z](",")).length; k < C; k++) w[k] = k % 2 ? p(f[k - 1], f[k], c).y : p(f[k], f[k + 1], c).x;
            return w
        }, kt = ot(function (t, e, r, i, n, s, a, o) {
            var l, h = n - 2 * r + t - (a - 2 * n + r), u = 2 * (r - t) - 2 * (n - r), c = t - r,
                f = (-u + B.sqrt(u * u - 4 * h * c)) / 2 / h, p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h, d = [e, o],
                g = [t, a];
            return "1e12" < S(f) && (f = .5), "1e12" < S(p) && (p = .5), 0 < f && f < 1 && (l = yt(t, e, r, i, n, s, a, o, f), g.push(l.x), d.push(l.y)), 0 < p && p < 1 && (l = yt(t, e, r, i, n, s, a, o, p), g.push(l.x), d.push(l.y)), h = s - 2 * i + e - (o - 2 * s + i), c = e - i, f = (-(u = 2 * (i - e) - 2 * (s - i)) + B.sqrt(u * u - 4 * h * c)) / 2 / h, p = (-u - B.sqrt(u * u - 4 * h * c)) / 2 / h, "1e12" < S(f) && (f = .5), "1e12" < S(p) && (p = .5), 0 < f && f < 1 && (l = yt(t, e, r, i, n, s, a, o, f), g.push(l.x), d.push(l.y)), 0 < p && p < 1 && (l = yt(t, e, r, i, n, s, a, o, p), g.push(l.x), d.push(l.y)), {
                min: {
                    x: k[x](0, g),
                    y: k[x](0, d)
                }, max: {x: _[x](0, g), y: _[x](0, d)}
            }
        }), Ct = j._path2curve = ot(function (t, e) {
            var r = !e && ut(t);
            if (!e && r.curve) return bt(r.curve);

            function i(t, e, r) {
                var i, n;
                if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (t[0] in {T: 1, Q: 1} || (e.qx = e.qy = null), t[0]) {
                    case"M":
                        e.X = t[1], e.Y = t[2];
                        break;
                    case"A":
                        t = ["C"][M](wt[x](0, [e.x, e.y][M](t.slice(1))));
                        break;
                    case"S":
                        n = "C" == r || "S" == r ? (i = 2 * e.x - e.bx, 2 * e.y - e.by) : (i = e.x, e.y), t = ["C", i, n][M](t.slice(1));
                        break;
                    case"T":
                        "Q" == r || "T" == r ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][M](xt(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                        break;
                    case"Q":
                        e.qx = t[1], e.qy = t[2], t = ["C"][M](xt(e.x, e.y, t[1], t[2], t[3], t[4]));
                        break;
                    case"L":
                        t = ["C"][M](gt(e.x, e.y, t[1], t[2]));
                        break;
                    case"H":
                        t = ["C"][M](gt(e.x, e.y, t[1], e.y));
                        break;
                    case"V":
                        t = ["C"][M](gt(e.x, e.y, e.x, t[1]));
                        break;
                    case"Z":
                        t = ["C"][M](gt(e.x, e.y, e.X, e.Y))
                }
                return t
            }

            function n(t, e) {
                if (7 < t[e].length) {
                    t[e].shift();
                    for (var r = t[e]; r.length;) t.splice(e++, 0, ["C"][M](r.splice(0, 6)));
                    t.splice(e, 1), c = _(a.length, o && o.length || 0)
                }
            }

            function s(t, e, r, i, n) {
                t && e && "M" == t[n][0] && "M" != e[n][0] && (e.splice(n, 0, ["M", i.x, i.y]), r.bx = 0, r.by = 0, r.x = t[n][1], r.y = t[n][2], c = _(a.length, o && o.length || 0))
            }

            for (var a = _t(t), o = e && _t(e), l = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, h = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, u = 0, c = _(a.length, o && o.length || 0); u < c; u++) {
                a[u] = i(a[u], l), n(a, u), o && (o[u] = i(o[u], h)), o && n(o, u), s(a, o, l, h, u), s(o, a, h, l, u);
                var f = a[u], p = o && o[u], d = f.length, g = o && p.length;
                l.x = f[d - 2], l.y = f[d - 1], l.bx = I(f[d - 4]) || l.x, l.by = I(f[d - 3]) || l.y, h.bx = o && (I(p[g - 4]) || h.x), h.by = o && (I(p[g - 3]) || h.y), h.x = o && p[g - 2], h.y = o && p[g - 1]
            }
            return o || (r.curve = bt(a)), o ? [a, o] : a
        }, null, bt), Bt = (j._parseDots = ot(function (t) {
            for (var e = [], r = 0, i = t.length; r < i; r++) {
                var n = {}, s = t[r].match(/^([^:]*):?([\d\.]*)/);
                if (n.color = j.getRGB(s[1]), n.color.error) return null;
                n.color = n.color.hex, s[2] && (n.offset = s[2] + "%"), e.push(n)
            }
            for (r = 1, i = e.length - 1; r < i; r++) if (!e[r].offset) {
                for (var a = I(e[r - 1].offset || 0), o = 0, l = r + 1; l < i; l++) if (e[l].offset) {
                    o = e[l].offset;
                    break
                }
                o || (o = 100, l = i);
                for (var h = ((o = I(o)) - a) / (l - r + 1); r < l; r++) a += h, e[r].offset = a + "%"
            }
            return e
        }), j._tear = function (t, e) {
            t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
        }), St = (j._tofront = function (t, e) {
            e.top !== t && (Bt(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
        }, j._toback = function (t, e) {
            e.bottom !== t && (Bt(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
        }, j._insertafter = function (t, e, r) {
            Bt(t, r), e == r.top && (r.top = t), e.next && (e.next.prev = t), t.next = e.next, (t.prev = e).next = t
        }, j._insertbefore = function (t, e, r) {
            Bt(t, r), e == r.bottom && (r.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, (e.prev = t).next = e
        }, j.toMatrix = function (t, e) {
            var r = vt(t), t = {
                _: {transform: ""}, getBBox: function () {
                    return r
                }
            };
            return Tt(t, e), t.matrix
        }), Tt = (j.transformPath = function (t, e) {
            return Q(t, St(t, e))
        }, j._extractTransform = function (t, e) {
            if (null == e) return t._.transform;
            e = P(e).replace(/\.{3}|\u2026/g, t._.transform || "");
            var r, i = j.parseTransformString(e), n = 0, e = 0, s = 1, a = 1, o = t._, l = new Nt;
            if (o.transform = i || [], i) for (var h = 0, u = i.length; h < u; h++) {
                var c, f, p, d, g, x = i[h], y = x.length, m = P(x[0]).toLowerCase(), v = x[0] != m,
                    b = v ? l.invert() : 0;
                "t" == m && 3 == y ? v ? (c = b.x(0, 0), f = b.y(0, 0), p = b.x(x[1], x[2]), d = b.y(x[1], x[2]), l.translate(p - c, d - f)) : l.translate(x[1], x[2]) : "r" == m ? 2 == y ? (g = g || t.getBBox(1), l.rotate(x[1], g.x + g.width / 2, g.y + g.height / 2), n += x[1]) : 4 == y && (v ? (p = b.x(x[2], x[3]), d = b.y(x[2], x[3]), l.rotate(x[1], p, d)) : l.rotate(x[1], x[2], x[3]), n += x[1]) : "s" == m ? 2 == y || 3 == y ? (g = g || t.getBBox(1), l.scale(x[1], x[y - 1], g.x + g.width / 2, g.y + g.height / 2), s *= x[1], a *= x[y - 1]) : 5 == y && (v ? (p = b.x(x[3], x[4]), d = b.y(x[3], x[4]), l.scale(x[1], x[2], p, d)) : l.scale(x[1], x[2], x[3], x[4]), s *= x[1], a *= x[2]) : "m" == m && 7 == y && l.add(x[1], x[2], x[3], x[4], x[5], x[6]), o.dirtyT = 1, t.matrix = l
            }
            t.matrix = l, o.sx = s, o.sy = a, o.deg = n, o.dx = r = l.e, o.dy = e = l.f, 1 == s && 1 == a && !n && o.bbox ? (o.bbox.x += +r, o.bbox.y += +e) : o.dirtyT = 1
        }), At = j._equaliseTransform = function (t, e) {
            e = P(e).replace(/\.{3}|\u2026/g, t), t = j.parseTransformString(t) || [], e = j.parseTransformString(e) || [];
            for (var r, i, n, s, a = _(t.length, e.length), o = [], l = [], h = 0; h < a; h++) {
                if (n = t[h] || mt(e[h]), s = e[h] || mt(n), n[0] != s[0] || "r" == n[0].toLowerCase() && (n[2] != s[2] || n[3] != s[3]) || "s" == n[0].toLowerCase() && (n[3] != s[3] || n[4] != s[4])) return;
                for (o[h] = [], l[h] = [], r = 0, i = _(n.length, s.length); r < i; r++) r in n && (o[h][r] = n[r]), r in s && (l[h][r] = s[r])
            }
            return {from: o, to: l}
        };

        function Nt(t, e, r, i, n, s) {
            null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +i, this.e = +n, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
        }

        j._getContainer = function (t, e, r, i) {
            var n = null != i || j.is(t, "object") ? t : d.doc.getElementById(t);
            if (null != n) return n.tagName ? null == e ? {
                container: n,
                width: n.style.pixelWidth || n.offsetWidth,
                height: n.style.pixelHeight || n.offsetHeight
            } : {container: n, width: e, height: r} : {container: 1, x: t, y: e, width: r, height: i}
        }, j.pathToRelative = o, j._engine = {}, j.path2curve = Ct, j.matrix = function (t, e, r, i, n, s) {
            return new Nt(t, e, r, i, n, s)
        }, function (t) {
            function i(t) {
                return t[0] * t[0] + t[1] * t[1]
            }

            function n(t) {
                var e = B.sqrt(i(t));
                t[0] && (t[0] /= e), t[1] && (t[1] /= e)
            }

            t.add = function (t, e, r, i, n, s) {
                var a, o, l, h, u = [[], [], []], c = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                    f = [[t, r, n], [e, i, s], [0, 0, 1]];
                for (t && t instanceof Nt && (f = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), a = 0; a < 3; a++) for (o = 0; o < 3; o++) {
                    for (l = h = 0; l < 3; l++) h += c[a][l] * f[l][o];
                    u[a][o] = h
                }
                this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2]
            }, t.invert = function () {
                var t = this, e = t.a * t.d - t.b * t.c;
                return new Nt(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
            }, t.clone = function () {
                return new Nt(this.a, this.b, this.c, this.d, this.e, this.f)
            }, t.translate = function (t, e) {
                this.add(1, 0, 0, 1, t, e)
            }, t.scale = function (t, e, r, i) {
                null == e && (e = t), (r || i) && this.add(1, 0, 0, 1, r, i), this.add(t, 0, 0, e, 0, 0), (r || i) && this.add(1, 0, 0, 1, -r, -i)
            }, t.rotate = function (t, e, r) {
                t = j.rad(t), e = e || 0, r = r || 0;
                var i = +B.cos(t).toFixed(9), t = +B.sin(t).toFixed(9);
                this.add(i, t, -t, i, e, r), this.add(1, 0, 0, 1, -e, -r)
            }, t.x = function (t, e) {
                return t * this.a + e * this.c + this.e
            }, t.y = function (t, e) {
                return t * this.b + e * this.d + this.f
            }, t.get = function (t) {
                return +this[P.fromCharCode(97 + t)].toFixed(4)
            }, t.toString = function () {
                return j.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
            }, t.toFilter = function () {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
            }, t.offset = function () {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, t.split = function () {
                var t = {};
                t.dx = this.e, t.dy = this.f;
                var e = [[this.a, this.c], [this.b, this.d]];
                t.scalex = B.sqrt(i(e[0])), n(e[0]), t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * t.shear, e[1][1] - e[0][1] * t.shear], t.scaley = B.sqrt(i(e[1])), n(e[1]), t.shear /= t.scaley;
                var r = -e[0][1], e = e[1][1];
                return e < 0 ? (t.rotate = j.deg(B.acos(e)), r < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = j.deg(B.asin(r)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
            }, t.toTransformString = function (t) {
                t = t || this[z]();
                return t.isSimple ? (t.scalex = +t.scalex.toFixed(4), t.scaley = +t.scaley.toFixed(4), t.rotate = +t.rotate.toFixed(4), (t.dx || t.dy ? "t" + [t.dx, t.dy] : "") + (1 != t.scalex || 1 != t.scaley ? "s" + [t.scalex, t.scaley, 0, 0] : "") + (t.rotate ? "r" + [t.rotate, 0, 0] : "")) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
            }
        }(Nt.prototype);
        o = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
        "Apple Computer, Inc." == navigator.vendor && (o && o[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && o && o[1] < 8 ? K.safari = function () {
            var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
            setTimeout(function () {
                t.remove()
            })
        } : K.safari = function () {
        };

        function Et() {
            this.returnValue = !1
        }

        function Lt() {
            return this.originalEvent.preventDefault()
        }

        function Mt() {
            this.cancelBubble = !0
        }

        function Pt() {
            return this.originalEvent.stopPropagation()
        }

        function zt(t) {
            var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                r = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
            return {x: t.clientX + r, y: t.clientY + e}
        }

        function Ft(t) {
            for (var e, r = t.clientX, i = t.clientY, n = d.doc.documentElement.scrollTop || d.doc.body.scrollTop, s = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft, a = It.length; a--;) {
                if (e = It[a], g && t.touches) {
                    for (var o, l = t.touches.length; l--;) if ((o = t.touches[l]).identifier == e.el._drag.id) {
                        r = o.clientX, i = o.clientY, (t.originalEvent || t).preventDefault();
                        break
                    }
                } else t.preventDefault();
                var h, u = e.el.node, c = u.nextSibling, f = u.parentNode, p = u.style.display;
                d.win.opera && f.removeChild(u), u.style.display = "none", h = e.el.paper.getElementByPoint(r, i), u.style.display = p, d.win.opera && (c ? f.insertBefore(u, c) : f.appendChild(u)), h && N("raphael.drag.over." + e.el.id, e.el, h), r += s, i += n, N("raphael.drag.move." + e.el.id, e.move_scope || e.el, r - e.el._drag.x, i - e.el._drag.y, r, i, t)
            }
        }

        for (var Rt = d.doc.addEventListener ? function (s, t, a, o) {
            function e(t) {
                var e = zt(t);
                return a.call(o, t, e.x, e.y)
            }

            return s.addEventListener(t, e, !1), g && h[t] && s.addEventListener(h[t], function (t) {
                for (var e = zt(t), r = t, i = 0, n = t.targetTouches && t.targetTouches.length; i < n; i++) if (t.targetTouches[i].target == s) {
                    (t = t.targetTouches[i]).originalEvent = r, t.preventDefault = Lt, t.stopPropagation = Pt;
                    break
                }
                return a.call(o, t, e.x, e.y)
            }, !1), function () {
                return s.removeEventListener(t, e, !1), g && h[t] && s.removeEventListener(h[t], e, !1), !0
            }
        } : d.doc.attachEvent ? function (t, e, i, n) {
            function r(t) {
                t = t || d.win.event;
                var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    r = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft, r = t.clientX + r, e = t.clientY + e;
                return t.preventDefault = t.preventDefault || Et, t.stopPropagation = t.stopPropagation || Mt, i.call(n, t, r, e)
            }

            t.attachEvent("on" + e, r);
            return function () {
                return t.detachEvent("on" + e, r), !0
            }
        } : void 0, It = [], jt = function (t) {
            j.unmousemove(Ft).unmouseup(jt);
            for (var e, r = It.length; r--;) (e = It[r]).el._drag = {}, N("raphael.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, t);
            It = []
        }, qt = j.el = {}, Dt = l.length; Dt--;) !function (i) {
            j[i] = qt[i] = function (t, e) {
                return j.is(t, "function") && (this.events = this.events || [], this.events.push({
                    name: i,
                    f: t,
                    unbind: Rt(this.shape || this.node || d.doc, i, t, e || this)
                })), this
            }, j["un" + i] = qt["un" + i] = function (t) {
                for (var e = this.events || [], r = e.length; r--;) e[r].name != i || !j.is(t, "undefined") && e[r].f != t || (e[r].unbind(), e.splice(r, 1), e.length || delete this.events);
                return this
            }
        }(l[Dt]);
        qt.data = function (t, e) {
            var r = H[this.id] = H[this.id] || {};
            if (0 == arguments.length) return r;
            if (1 != arguments.length) return r[t] = e, N("raphael.data.set." + this.id, this, e, t), this;
            if (j.is(t, "object")) {
                for (var i in t) t[L](i) && this.data(i, t[i]);
                return this
            }
            return N("raphael.data.get." + this.id, this, r[t], t), r[t]
        }, qt.removeData = function (t) {
            return null == t ? H[this.id] = {} : H[this.id] && delete H[this.id][t], this
        }, qt.getData = function () {
            return tt(H[this.id] || {})
        }, qt.hover = function (t, e, r, i) {
            return this.mouseover(t, r).mouseout(e, i || r)
        }, qt.unhover = function (t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var Vt = [];
        qt.drag = function (o, l, h, u, c, f) {
            function t(t) {
                (t.originalEvent || t).preventDefault();
                var e = t.clientX, r = t.clientY, i = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    n = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
                if (this._drag.id = t.identifier, g && t.touches) for (var s, a = t.touches.length; a--;) if (s = t.touches[a], this._drag.id = s.identifier, s.identifier == this._drag.id) {
                    e = s.clientX, r = s.clientY;
                    break
                }
                this._drag.x = e + n, this._drag.y = r + i, It.length || j.mousemove(Ft).mouseup(jt), It.push({
                    el: this,
                    move_scope: u,
                    start_scope: c,
                    end_scope: f
                }), l && N.on("raphael.drag.start." + this.id, l), o && N.on("raphael.drag.move." + this.id, o), h && N.on("raphael.drag.end." + this.id, h), N("raphael.drag.start." + this.id, c || u || this, t.clientX + n, t.clientY + i, t)
            }

            return this._drag = {}, Vt.push({el: this, start: t}), this.mousedown(t), this
        }, qt.onDragOver = function (t) {
            t ? N.on("raphael.drag.over." + this.id, t) : N.unbind("raphael.drag.over." + this.id)
        }, qt.undrag = function () {
            for (var t = Vt.length; t--;) Vt[t].el == this && (this.unmousedown(Vt[t].start), Vt.splice(t, 1), N.unbind("raphael.drag.*." + this.id));
            Vt.length || j.unmousemove(Ft).unmouseup(jt), It = []
        }, K.circle = function (t, e, r) {
            r = j._engine.circle(this, t || 0, e || 0, r || 0);
            return this.__set__ && this.__set__.push(r), r
        }, K.rect = function (t, e, r, i, n) {
            n = j._engine.rect(this, t || 0, e || 0, r || 0, i || 0, n || 0);
            return this.__set__ && this.__set__.push(n), n
        }, K.ellipse = function (t, e, r, i) {
            i = j._engine.ellipse(this, t || 0, e || 0, r || 0, i || 0);
            return this.__set__ && this.__set__.push(i), i
        }, K.path = function (t) {
            !t || j.is(t, u) || j.is(t[0], v) || (t += "");
            var e = j._engine.path(j.format[x](j, arguments), this);
            return this.__set__ && this.__set__.push(e), e
        }, K.image = function (t, e, r, i, n) {
            n = j._engine.image(this, t || "about:blank", e || 0, r || 0, i || 0, n || 0);
            return this.__set__ && this.__set__.push(n), n
        }, K.text = function (t, e, r) {
            r = j._engine.text(this, t || 0, e || 0, P(r));
            return this.__set__ && this.__set__.push(r), r
        }, K.set = function (t) {
            j.is(t, "array") || (t = Array.prototype.splice.call(arguments, 0, arguments.length));
            var e = new re(t);
            return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e
        }, K.setStart = function (t) {
            this.__set__ = t || this.set()
        }, K.setFinish = function (t) {
            var e = this.__set__;
            return delete this.__set__, e
        }, K.setSize = function (t, e) {
            return j._engine.setSize.call(this, t, e)
        }, K.setViewBox = function (t, e, r, i, n) {
            return j._engine.setViewBox.call(this, t, e, r, i, n)
        }, K.top = K.bottom = null, K.raphael = j;

        function Ot() {
            return this.x + w + this.y + w + this.width + " × " + this.height
        }

        K.getElementByPoint = function (t, e) {
            var r, i, n, s, a, o = this.canvas, l = d.doc.elementFromPoint(t, e);
            if (d.win.opera && "svg" == l.tagName && (i = (r = o).getBoundingClientRect(), n = r.ownerDocument, s = n.body, a = n.documentElement, r = a.clientTop || s.clientTop || 0, n = a.clientLeft || s.clientLeft || 0, s = {
                y: i.top + (d.win.pageYOffset || a.scrollTop || s.scrollTop) - r,
                x: i.left + (d.win.pageXOffset || a.scrollLeft || s.scrollLeft) - n
            }, (n = o.createSVGRect()).x = t - s.x, n.y = e - s.y, n.width = n.height = 1, (n = o.getIntersectionList(n, null)).length && (l = n[n.length - 1])), !l) return null;
            for (; l.parentNode && l != o.parentNode && !l.raphael;) l = l.parentNode;
            return l == this.canvas.parentNode && (l = o), l = l && l.raphael ? this.getById(l.raphaelid) : null
        }, K.getElementsByBBox = function (e) {
            var r = this.set();
            return this.forEach(function (t) {
                j.isBBoxIntersect(t.getBBox(), e) && r.push(t)
            }), r
        }, K.getById = function (t) {
            for (var e = this.bottom; e;) {
                if (e.id == t) return e;
                e = e.next
            }
            return null
        }, K.forEach = function (t, e) {
            for (var r = this.bottom; r;) {
                if (!1 === t.call(e, r)) return this;
                r = r.next
            }
            return this
        }, K.getElementsByPoint = function (e, r) {
            var i = this.set();
            return this.forEach(function (t) {
                t.isPointInside(e, r) && i.push(t)
            }), i
        }, qt.isPointInside = function (t, e) {
            var r = this.realPath = Z[this.type](this);
            return this.attr("transform") && this.attr("transform").length && (r = j.transformPath(r, this.attr("transform"))), j.isPointInsidePath(r, t, e)
        }, qt.getBBox = function (t) {
            if (this.removed) return {};
            var e = this._;
            return t ? (!e.dirty && e.bboxwt || (this.realPath = Z[this.type](this), e.bboxwt = vt(this.realPath), e.bboxwt.toString = Ot, e.dirty = 0), e.bboxwt) : (!e.dirty && !e.dirtyT && e.bbox || (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = Z[this.type](this)), e.bbox = vt(Q(this.realPath, this.matrix)), e.bbox.toString = Ot, e.dirty = e.dirtyT = 0), e.bbox)
        }, qt.clone = function () {
            if (this.removed) return null;
            var t = this.paper[this.type]().attr(this.attr());
            return this.__set__ && this.__set__.push(t), t
        }, qt.glow = function (t) {
            if ("text" == this.type) return null;
            for (var e = {
                width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1),
                fill: t.fill || !1,
                opacity: t.opacity || .5,
                offsetx: t.offsetx || 0,
                offsety: t.offsety || 0,
                color: t.color || "#000"
            }, r = e.width / 2, i = this.paper, n = i.set(), s = this.realPath || Z[this.type](this), s = this.matrix ? Q(s, this.matrix) : s, a = 1; a < 1 + r; a++) n.push(i.path(s).attr({
                stroke: e.color,
                fill: e.fill ? e.color : "none",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": +(e.width / r * a).toFixed(3),
                opacity: +(e.opacity / r).toFixed(3)
            }));
            return n.insertBefore(this).translate(e.offsetx, e.offsety)
        };

        function Yt(t, e, r, i, n, s, a, o, l) {
            return null == l ? ft(t, e, r, i, n, s, a, o) : j.findDotsAtSegment(t, e, r, i, n, s, a, o, function (t, e, r, i, n, s, a, o, l) {
                if (!(l < 0 || ft(t, e, r, i, n, s, a, o) < l)) {
                    for (var h = .5, u = 1 - h, c = ft(t, e, r, i, n, s, a, o, u); .01 < S(c - l);) c = ft(t, e, r, i, n, s, a, o, u += (c < l ? 1 : -1) * (h /= 2));
                    return u
                }
            }(t, e, r, i, n, s, a, o, l))
        }

        var o = function (p, d) {
            return function (t, e, r) {
                for (var i, n, s, a, o, l = "", h = {}, u = 0, c = 0, f = (t = Ct(t)).length; c < f; c++) {
                    if ("M" == (s = t[c])[0]) i = +s[1], n = +s[2]; else {
                        if (e < u + (a = Yt(i, n, s[1], s[2], s[3], s[4], s[5], s[6]))) {
                            if (d && !h.start) {
                                if (l += ["C" + (o = Yt(i, n, s[1], s[2], s[3], s[4], s[5], s[6], e - u)).start.x, o.start.y, o.m.x, o.m.y, o.x, o.y], r) return l;
                                h.start = l, l = ["M" + o.x, o.y + "C" + o.n.x, o.n.y, o.end.x, o.end.y, s[5], s[6]].join(), u += a, i = +s[5], n = +s[6];
                                continue
                            }
                            if (!p && !d) return {
                                x: (o = Yt(i, n, s[1], s[2], s[3], s[4], s[5], s[6], e - u)).x,
                                y: o.y,
                                alpha: o.alpha
                            }
                        }
                        u += a, i = +s[5], n = +s[6]
                    }
                    l += s.shift() + s
                }
                return h.end = l, (o = p ? u : d ? h : j.findDotsAtSegment(i, n, s[0], s[1], s[2], s[3], s[4], s[5], 1)).alpha && (o = {
                    x: o.x,
                    y: o.y,
                    alpha: o.alpha
                }), o
            }
        }, Gt = o(1), Wt = o(), Xt = o(0, 1);
        j.getTotalLength = Gt, j.getPointAtLength = Wt, j.getSubpath = function (t, e, r) {
            if (this.getTotalLength(t) - r < 1e-6) return Xt(t, e).end;
            r = Xt(t, r, 1);
            return e ? Xt(r, e).end : r
        }, qt.getTotalLength = function () {
            var t = this.getPath();
            if (t) return this.node.getTotalLength ? this.node.getTotalLength() : Gt(t)
        }, qt.getPointAtLength = function (t) {
            var e = this.getPath();
            if (e) return Wt(e, t)
        }, qt.getPath = function () {
            var t, e = j._getPath[this.type];
            if ("text" != this.type && "set" != this.type) return e && (t = e(this)), t
        }, qt.getSubpath = function (t, e) {
            var r = this.getPath();
            if (r) return j.getSubpath(r, t, e)
        };
        o = j.easing_formulas = {
            linear: function (t) {
                return t
            }, "<": function (t) {
                return m(t, 1.7)
            }, ">": function (t) {
                return m(t, .48)
            }, "<>": function (t) {
                var e = .48 - t / 1.04, r = B.sqrt(.1734 + e * e), t = r - e, e = -r - e,
                    e = m(S(t), 1 / 3) * (t < 0 ? -1 : 1) + m(S(e), 1 / 3) * (e < 0 ? -1 : 1) + .5;
                return 3 * (1 - e) * e * e + e * e * e
            }, backIn: function (t) {
                return t * t * (2.70158 * t - 1.70158)
            }, backOut: function (t) {
                return --t * t * (2.70158 * t + 1.70158) + 1
            }, elastic: function (t) {
                return t == !!t ? t : m(2, -10 * t) * B.sin(2 * T * (t - .075) / .3) + 1
            }, bounce: function (t) {
                var e = 7.5625, r = 2.75,
                    t = t < 1 / r ? e * t * t : t < 2 / r ? e * (t -= 1.5 / r) * t + .75 : t < 2.5 / r ? e * (t -= 2.25 / r) * t + .9375 : e * (t -= 2.625 / r) * t + .984375;
                return t
            }
        };
        o.easeIn = o["ease-in"] = o["<"], o.easeOut = o["ease-out"] = o[">"], o.easeInOut = o["ease-in-out"] = o["<>"], o["back-in"] = o.backIn, o["back-out"] = o.backOut;
        var Ht = [],
            Ut = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
                setTimeout(t, 16)
            }, $t = function () {
                for (var t = +new Date, e = 0; e < Ht.length; e++) {
                    var r = Ht[e];
                    if (!r.el.removed && !r.paused) {
                        var i, n = t - r.start, s = r.ms, a = r.easing, o = r.from, l = r.diff, h = r.to, u = (r.t, r.el),
                            c = {}, f = {};
                        if (r.initstatus ? (n = (r.initstatus * r.anim.top - r.prev) / (r.percent - r.prev) * s, r.status = r.initstatus, delete r.initstatus, r.stop && Ht.splice(e--, 1)) : r.status = (r.prev + (r.percent - r.prev) * (n / s)) / r.anim.top, !(n < 0)) if (n < s) {
                            var p, d = a(n / s);
                            for (p in o) if (o[L](p)) {
                                switch (D[p]) {
                                    case F:
                                        b = +o[p] + d * s * l[p];
                                        break;
                                    case"colour":
                                        b = "rgb(" + [Zt(C(o[p].r + d * s * l[p].r)), Zt(C(o[p].g + d * s * l[p].g)), Zt(C(o[p].b + d * s * l[p].b))].join(",") + ")";
                                        break;
                                    case"path":
                                        b = [];
                                        for (var g = 0, x = o[p].length; g < x; g++) {
                                            b[g] = [o[p][g][0]];
                                            for (var y = 1, m = o[p][g].length; y < m; y++) b[g][y] = +o[p][g][y] + d * s * l[p][g][y];
                                            b[g] = b[g].join(w)
                                        }
                                        b = b.join(w);
                                        break;
                                    case"transform":
                                        if (l[p].real) for (b = [], g = 0, x = o[p].length; g < x; g++) for (b[g] = [o[p][g][0]], y = 1, m = o[p][g].length; y < m; y++) b[g][y] = o[p][g][y] + d * s * l[p][g][y]; else {
                                            function v(t) {
                                                return +o[p][t] + d * s * l[p][t]
                                            }

                                            var b = [["m", v(0), v(1), v(2), v(3), v(4), v(5)]]
                                        }
                                        break;
                                    case"csv":
                                        if ("clip-rect" == p) for (b = [], g = 4; g--;) b[g] = +o[p][g] + d * s * l[p][g];
                                        break;
                                    default:
                                        var _ = [][M](o[p]);
                                        for (b = [], g = u.paper.customAttributes[p].length; g--;) b[g] = +_[g] + d * s * l[p][g]
                                }
                                c[p] = b
                            }
                            u.attr(c), function (t, e, r) {
                                setTimeout(function () {
                                    N("raphael.anim.frame." + t, e, r)
                                })
                            }(u.id, u, r.anim)
                        } else {
                            if (!function (t, e, r) {
                                setTimeout(function () {
                                    N("raphael.anim.frame." + e.id, e, r), N("raphael.anim.finish." + e.id, e, r), j.is(t, "function") && t.call(e)
                                })
                            }(r.callback, u, r.anim), u.attr(h), Ht.splice(e--, 1), 1 < r.repeat && !r.next) {
                                for (i in h) h[L](i) && (f[i] = r.totalOrigin[i]);
                                r.el.attr(f), Kt(r.anim, r.el, r.anim.percents[0], null, r.totalOrigin, r.repeat - 1)
                            }
                            r.next && !r.stop && Kt(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat)
                        }
                    }
                }
                j.svg && u && u.paper && u.paper.safari(), Ht.length && Ut($t)
            }, Zt = function (t) {
                return 255 < t ? 255 : t < 0 ? 0 : t
            };

        function Qt(t, e, r, i, n, s) {
            var a, l = 3 * e, h = 3 * (i - e) - l, u = 1 - l - h, o = 3 * r, c = 3 * (n - r) - o, f = 1 - o - c;

            function p(t) {
                return ((u * t + h) * t + l) * t
            }

            return a = function (t, e) {
                var r, i, n, s, a, o;
                for (n = t, o = 0; o < 8; o++) {
                    if (s = p(n) - t, S(s) < e) return n;
                    if (S(a = (3 * u * n + 2 * h) * n + l) < 1e-6) break;
                    n -= s / a
                }
                if (i = 1, (n = t) < (r = 0)) return r;
                if (i < n) return i;
                for (; r < i;) {
                    if (s = p(n), S(s - t) < e) return n;
                    s < t ? r = n : i = n, n = (i - r) / 2 + r
                }
                return n
            }(t, a = 1 / (200 * s)), ((f * a + c) * a + o) * a
        }

        function Jt(t, e) {
            var r = [], i = {};
            if (this.ms = e, this.times = 1, t) {
                for (var n in t) t[L](n) && (i[I(n)] = t[n], r.push(I(n)));
                r.sort(s)
            }
            this.anim = i, this.top = r[r.length - 1], this.percents = r
        }

        function Kt(t, e, r, i, n, s) {
            r = I(r);
            var a, o, l, h, u, c = t.ms, f = {}, p = {}, d = {};
            if (i) for (x = 0, y = Ht.length; x < y; x++) {
                var g = Ht[x];
                if (g.el.id == e.id && g.anim == t) {
                    g.percent != r ? (Ht.splice(x, 1), l = 1) : o = g, e.attr(g.totalOrigin);
                    break
                }
            } else i = +p;
            for (var x = 0, y = t.percents.length; x < y; x++) {
                if (t.percents[x] == r || t.percents[x] > i * t.top) {
                    r = t.percents[x], u = t.percents[x - 1] || 0, c = c / t.top * (r - u), h = t.percents[x + 1], a = t.anim[r];
                    break
                }
                i && e.attr(t.anim[t.percents[x]])
            }
            if (a) {
                if (o) o.initstatus = i, o.start = new Date - o.ms * i; else {
                    for (var m in a) if (a[L](m) && (D[L](m) || e.paper.customAttributes[L](m))) switch (f[m] = e.attr(m), null == f[m] && (f[m] = q[m]), p[m] = a[m], D[m]) {
                        case F:
                            d[m] = (p[m] - f[m]) / c;
                            break;
                        case"colour":
                            f[m] = j.getRGB(f[m]);
                            var v = j.getRGB(p[m]);
                            d[m] = {r: (v.r - f[m].r) / c, g: (v.g - f[m].g) / c, b: (v.b - f[m].b) / c};
                            break;
                        case"path":
                            var b = Ct(f[m], p[m]), _ = b[1];
                            for (f[m] = b[0], d[m] = [], x = 0, y = f[m].length; x < y; x++) {
                                d[m][x] = [0];
                                for (var w = 1, k = f[m][x].length; w < k; w++) d[m][x][w] = (_[x][w] - f[m][x][w]) / c
                            }
                            break;
                        case"transform":
                            v = e._, b = At(v[m], p[m]);
                            if (b) for (f[m] = b.from, p[m] = b.to, d[m] = [], d[m].real = !0, x = 0, y = f[m].length; x < y; x++) for (d[m][x] = [f[m][x][0]], w = 1, k = f[m][x].length; w < k; w++) d[m][x][w] = (p[m][x][w] - f[m][x][w]) / c; else {
                                b = e.matrix || new Nt, v = {
                                    _: {transform: v.transform}, getBBox: function () {
                                        return e.getBBox(1)
                                    }
                                };
                                f[m] = [b.a, b.b, b.c, b.d, b.e, b.f], Tt(v, p[m]), p[m] = v._.transform, d[m] = [(v.matrix.a - b.a) / c, (v.matrix.b - b.b) / c, (v.matrix.c - b.c) / c, (v.matrix.d - b.d) / c, (v.matrix.e - b.e) / c, (v.matrix.f - b.f) / c]
                            }
                            break;
                        case"csv":
                            var C = P(a[m])[z](E), B = P(f[m])[z](E);
                            if ("clip-rect" == m) for (f[m] = B, d[m] = [], x = B.length; x--;) d[m][x] = (C[x] - f[m][x]) / c;
                            p[m] = C;
                            break;
                        default:
                            for (C = [][M](a[m]), B = [][M](f[m]), d[m] = [], x = e.paper.customAttributes[m].length; x--;) d[m][x] = ((C[x] || 0) - (B[x] || 0)) / c
                    }
                    var S, T = a.easing, A = j.easing_formulas[T];
                    if (A = A || ((A = P(T).match(R)) && 5 == A.length ? (S = A, function (t) {
                        return Qt(t, +S[1], +S[2], +S[3], +S[4], c)
                    }) : U), T = a.start || t.start || +new Date, g = {
                        anim: t,
                        percent: r,
                        timestamp: T,
                        start: T + (t.del || 0),
                        status: 0,
                        initstatus: i || 0,
                        stop: !1,
                        ms: c,
                        easing: A,
                        from: f,
                        diff: d,
                        to: p,
                        el: e,
                        callback: a.callback,
                        prev: u,
                        next: h,
                        repeat: s || t.times,
                        origin: e.attr(),
                        totalOrigin: n
                    }, Ht.push(g), i && !o && !l && (g.stop = !0, g.start = new Date - c * i, 1 == Ht.length)) return $t();
                    l && (g.start = new Date - g.ms * i), 1 == Ht.length && Ut($t)
                }
                N("raphael.anim.start." + e.id, e, t)
            }
        }

        function te(t) {
            for (var e = 0; e < Ht.length; e++) Ht[e].el.paper == t && Ht.splice(e--, 1)
        }

        qt.animateWith = function (t, e, r, i, n, s) {
            var a = this;
            if (a.removed) return s && s.call(a), a;
            s = r instanceof Jt ? r : j.animation(r, i, n, s);
            Kt(s, a, s.percents[0], null, a.attr());
            for (var o = 0, l = Ht.length; o < l; o++) if (Ht[o].anim == e && Ht[o].el == t) {
                Ht[l - 1].start = Ht[o].start;
                break
            }
            return a
        }, qt.onAnimation = function (t) {
            return t ? N.on("raphael.anim.frame." + this.id, t) : N.unbind("raphael.anim.frame." + this.id), this
        }, Jt.prototype.delay = function (t) {
            var e = new Jt(this.anim, this.ms);
            return e.times = this.times, e.del = +t || 0, e
        }, Jt.prototype.repeat = function (t) {
            var e = new Jt(this.anim, this.ms);
            return e.del = this.del, e.times = B.floor(_(t, 0)) || 1, e
        }, j.animation = function (t, e, r, i) {
            if (t instanceof Jt) return t;
            !j.is(r, "function") && r || (i = i || r || null, r = null), e = +e || 0;
            var n, s, a = {};
            for (s in t = Object(t)) t[L](s) && I(s) != s && I(s) + "%" != s && (n = !0, a[s] = t[s]);
            return n ? (r && (a.easing = r), i && (a.callback = i), new Jt({100: a}, e)) : new Jt(t, e)
        }, qt.animate = function (t, e, r, i) {
            var n = this;
            if (n.removed) return i && i.call(n), n;
            i = t instanceof Jt ? t : j.animation(t, e, r, i);
            return Kt(i, n, i.percents[0], null, n.attr()), n
        }, qt.setTime = function (t, e) {
            return t && null != e && this.status(t, k(e, t.ms) / t.ms), this
        }, qt.status = function (t, e) {
            var r, i, n = [], s = 0;
            if (null != e) return Kt(t, this, -1, k(e, 1)), this;
            for (r = Ht.length; s < r; s++) if ((i = Ht[s]).el.id == this.id && (!t || i.anim == t)) {
                if (t) return i.status;
                n.push({anim: i.anim, status: i.status})
            }
            return t ? 0 : n
        }, qt.pause = function (t) {
            for (var e = 0; e < Ht.length; e++) Ht[e].el.id != this.id || t && Ht[e].anim != t || !1 !== N("raphael.anim.pause." + this.id, this, Ht[e].anim) && (Ht[e].paused = !0);
            return this
        }, qt.resume = function (t) {
            for (var e, r = 0; r < Ht.length; r++) Ht[r].el.id != this.id || t && Ht[r].anim != t || (e = Ht[r], !1 !== N("raphael.anim.resume." + this.id, this, e.anim) && (delete e.paused, this.status(e.anim, e.status)));
            return this
        }, qt.stop = function (t) {
            for (var e = 0; e < Ht.length; e++) Ht[e].el.id != this.id || t && Ht[e].anim != t || !1 !== N("raphael.anim.stop." + this.id, this, Ht[e].anim) && Ht.splice(e--, 1);
            return this
        }, N.on("raphael.remove", te), N.on("raphael.clear", te), qt.toString = function () {
            return "Raphaël’s object"
        };
        var ee, re = function (t) {
            if (this.items = [], this.length = 0, this.type = "set", t) for (var e = 0, r = t.length; e < r; e++) !t[e] || t[e].constructor != qt.constructor && t[e].constructor != re || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
        }, ie = re.prototype;
        for (ee in ie.push = function () {
            for (var t, e, r = 0, i = arguments.length; r < i; r++) !(t = arguments[r]) || t.constructor != qt.constructor && t.constructor != re || (this[e = this.items.length] = this.items[e] = t, this.length++);
            return this
        }, ie.pop = function () {
            return this.length && delete this[this.length--], this.items.pop()
        }, ie.forEach = function (t, e) {
            for (var r = 0, i = this.items.length; r < i; r++) if (!1 === t.call(e, this.items[r], r)) return this;
            return this
        }, qt) qt[L](ee) && (ie[ee] = function (r) {
            return function () {
                var e = arguments;
                return this.forEach(function (t) {
                    t[r][x](t, e)
                })
            }
        }(ee));
        ie.attr = function (t, e) {
            if (t && j.is(t, v) && j.is(t[0], "object")) for (var r = 0, i = t.length; r < i; r++) this.items[r].attr(t[r]); else for (var n = 0, s = this.items.length; n < s; n++) this.items[n].attr(t, e);
            return this
        }, ie.clear = function () {
            for (; this.length;) this.pop()
        }, ie.splice = function (t, e, r) {
            t = t < 0 ? _(this.length + t, 0) : t, e = _(0, k(this.length - t, e));
            for (var i = [], n = [], s = [], a = 2; a < arguments.length; a++) s.push(arguments[a]);
            for (a = 0; a < e; a++) n.push(this[t + a]);
            for (; a < this.length - t; a++) i.push(this[t + a]);
            var o = s.length;
            for (a = 0; a < o + i.length; a++) this.items[t + a] = this[t + a] = a < o ? s[a] : i[a - o];
            for (a = this.items.length = this.length -= e - o; this[a];) delete this[a++];
            return new re(n)
        }, ie.exclude = function (t) {
            for (var e = 0, r = this.length; e < r; e++) if (this[e] == t) return this.splice(e, 1), !0
        }, ie.animate = function (t, e, r, i) {
            !j.is(r, "function") && r || (i = r || null);
            var n, s = this.items.length, a = s, o = this;
            if (!s) return this;
            i && (n = function () {
                --s || i.call(o)
            }), r = j.is(r, u) ? r : n;
            for (var l = j.animation(t, e, r, n), h = this.items[--a].animate(l); a--;) this.items[a] && !this.items[a].removed && this.items[a].animateWith(h, l, l), this.items[a] && !this.items[a].removed || s--;
            return this
        }, ie.insertAfter = function (t) {
            for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
            return this
        }, ie.getBBox = function () {
            for (var t, e = [], r = [], i = [], n = [], s = this.items.length; s--;) this.items[s].removed || (t = this.items[s].getBBox(), e.push(t.x), r.push(t.y), i.push(t.x + t.width), n.push(t.y + t.height));
            return {
                x: e = k[x](0, e),
                y: r = k[x](0, r),
                x2: i = _[x](0, i),
                y2: n = _[x](0, n),
                width: i - e,
                height: n - r
            }
        }, ie.clone = function (t) {
            t = this.paper.set();
            for (var e = 0, r = this.items.length; e < r; e++) t.push(this.items[e].clone());
            return t
        }, ie.toString = function () {
            return "Raphaël‘s set"
        }, ie.glow = function (r) {
            var i = this.paper.set();
            return this.forEach(function (t, e) {
                t = t.glow(r);
                null != t && t.forEach(function (t, e) {
                    i.push(t)
                })
            }), i
        }, ie.isPointInside = function (e, r) {
            var i = !1;
            return this.forEach(function (t) {
                if (t.isPointInside(e, r)) return console.log("runned"), !(i = !0)
            }), i
        }, j.registerFont = function (t) {
            if (!t.face) return t;
            this.fonts = this.fonts || {};
            var e, r = {w: t.w, face: {}, glyphs: {}}, i = t.face["font-family"];
            for (e in t.face) t.face[L](e) && (r.face[e] = t.face[e]);
            if (this.fonts[i] ? this.fonts[i].push(r) : this.fonts[i] = [r], !t.svg) for (var n in r.face["units-per-em"] = b(t.face["units-per-em"], 10), t.glyphs) if (t.glyphs[L](n)) {
                var s = t.glyphs[n];
                if (r.glyphs[n] = {
                    w: s.w, k: {}, d: s.d && "M" + s.d.replace(/[mlcxtrv]/g, function (t) {
                        return {l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[t] || "M"
                    }) + "z"
                }, s.k) for (var a in s.k) s[L](a) && (r.glyphs[n].k[a] = s.k[a])
            }
            return t
        }, K.getFont = function (t, e, r, i) {
            if (i = i || "normal", r = r || "normal", e = +e || {
                normal: 400,
                bold: 700,
                lighter: 300,
                bolder: 800
            }[e] || 400, j.fonts) {
                var n, s = j.fonts[t];
                if (!s) {
                    var a, o = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, "") + "(\\s|$)", "i");
                    for (a in j.fonts) if (j.fonts[L](a) && o.test(a)) {
                        s = j.fonts[a];
                        break
                    }
                }
                if (s) for (var l = 0, h = s.length; l < h && ((n = s[l]).face["font-weight"] != e || n.face["font-style"] != r && n.face["font-style"] || n.face["font-stretch"] != i); l++) ;
                return n
            }
        }, K.print = function (t, e, r, i, n, s, a, o) {
            s = s || "middle", a = _(k(a || 0, 1), -1), o = _(k(o || 1, 3), 1);
            var l, h = P(r)[z](""), u = 0, c = 0, f = "";
            if (j.is(i, "string") && (i = this.getFont(i)), i) {
                l = (n || 16) / i.face["units-per-em"];
                for (var p, d, n = i.face.bbox[z](E), g = +n[0], x = n[3] - n[1], y = 0, m = +n[1] + ("baseline" == s ? x + +i.face.descent : x / 2), v = 0, b = h.length; v < b; v++) "\n" == h[v] ? (c = d = u = 0, y += x * o) : (p = c && i.glyphs[h[v - 1]] || {}, d = i.glyphs[h[v]], u += c ? (p.w || i.w) + (p.k && p.k[h[v]] || 0) + i.w * a : 0, c = 1), d && d.d && (f += j.transformPath(d.d, ["t", u * l, y * l, "s", l, l, g, m, "t", (t - g) / l, (e - m) / l]))
            }
            return this.path(f).attr({fill: "#000", stroke: "none"})
        }, K.add = function (t) {
            if (j.is(t, "array")) for (var e, r = this.set(), i = 0, n = t.length; i < n; i++) e = t[i] || {}, a[L](e.type) && r.push(this[e.type]().attr(e));
            return r
        }, j.format = function (t, e) {
            var r = j.is(e, v) ? [0][M](e) : arguments;
            return t && j.is(t, u) && r.length - 1 && (t = t.replace(n, function (t, e) {
                return null == r[++e] ? "" : r[e]
            })), t || ""
        }, j.fullfill = function () {
            var e = /\{([^\}]+)\}/g, n = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
            return function (t, i) {
                return String(t).replace(e, function (t, e) {
                    return r = t, s = t = i, e.replace(n, function (t, e, r, i, n) {
                        e = e || i, s && (e in s && (s = s[e]), "function" == typeof s && n && (s = s()))
                    }), s = (null == s || s == t ? r : s) + "";
                    var r, s
                })
            }
        }(), j.ninja = function () {
            return r.was ? d.win.Raphael = r.is : delete t.Raphael, j
        }, j.st = ie, function (e, t, r) {
            null == e.readyState && e.addEventListener && (e.addEventListener(t, r = function () {
                e.removeEventListener(t, r, !1), e.readyState = "complete"
            }, !1), e.readyState = "loading"), function t() {
                /in/.test(e.readyState) ? setTimeout(t, 9) : j.eve("raphael.DOMload")
            }()
        }(document, "DOMContentLoaded"), N.on("raphael.DOMload", function () {
            i = !0
        }), function () {
            if (j.svg) {
                var k = "hasOwnProperty", C = String, g = parseFloat, x = parseInt, y = Math, m = y.max, v = y.abs,
                    b = y.pow, _ = /[, ]+/, f = j.eve, w = "http://www.w3.org/1999/xlink", B = {
                        block: "M5,0 0,2.5 5,5z",
                        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                        open: "M6,1 1,3.5 6,6",
                        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                    }, S = {};
                j.toString = function () {
                    return "Your browser supports SVG.\nYou are running Raphaël " + this.version
                };

                function T(t, e) {
                    var i = "linear", r = t.id + e, n = .5, s = .5, a = t.node, o = t.paper, l = a.style,
                        h = j._g.doc.getElementById(r);
                    if (!h) {
                        if (e = (e = C(e).replace(j._radial_gradient, function (t, e, r) {
                            return i = "radial", e && r && (n = g(e), r = 2 * (.5 < (s = g(r))) - 1, .25 < b(n - .5, 2) + b(s - .5, 2) && (s = y.sqrt(.25 - b(n - .5, 2)) * r + .5) && .5 != s && (s = s.toFixed(5) - 1e-5 * r)), ""
                        })).split(/\s*\-\s*/), "linear" == i) {
                            var u = e.shift(), u = -g(u);
                            if (isNaN(u)) return null;
                            var c = [0, 0, y.cos(j.rad(u)), y.sin(j.rad(u))], u = 1 / (m(v(c[2]), v(c[3])) || 1);
                            c[2] *= u, c[3] *= u, c[2] < 0 && (c[0] = -c[2], c[2] = 0), c[3] < 0 && (c[1] = -c[3], c[3] = 0)
                        }
                        var f = j._parseDots(e);
                        if (!f) return null;
                        if (r = r.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && r != t.gradient.id && (o.defs.removeChild(t.gradient), delete t.gradient), !t.gradient) {
                            h = L(i + "Gradient", {id: r}), t.gradient = h, L(h, "radial" == i ? {
                                fx: n,
                                fy: s
                            } : {
                                x1: c[0],
                                y1: c[1],
                                x2: c[2],
                                y2: c[3],
                                gradientTransform: t.matrix.invert()
                            }), o.defs.appendChild(h);
                            for (var p = 0, d = f.length; p < d; p++) h.appendChild(L("stop", {
                                offset: f[p].offset || (p ? "100%" : "0%"),
                                "stop-color": f[p].color || "#fff"
                            }))
                        }
                    }
                    return L(a, {
                        fill: "url(#" + r + ")",
                        opacity: 1,
                        "fill-opacity": 1
                    }), l.fill = "", l.opacity = 1, l.fillOpacity = 1
                }

                function A(t) {
                    var e = t.getBBox(1);
                    L(t.pattern, {patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"})
                }

                function N(t, e, r) {
                    if ("path" == t.type) {
                        for (var i, n, s, a, o, l, h, u, c, f = C(e).toLowerCase().split("-"), p = t.paper, d = r ? "end" : "start", g = t.node, x = t.attrs, y = x["stroke-width"], m = f.length, v = "classic", b = 3, _ = 3, w = 5; m--;) switch (f[m]) {
                            case"block":
                            case"classic":
                            case"oval":
                            case"diamond":
                            case"open":
                            case"none":
                                v = f[m];
                                break;
                            case"wide":
                                _ = 5;
                                break;
                            case"narrow":
                                _ = 2;
                                break;
                            case"long":
                                b = 5;
                                break;
                            case"short":
                                b = 2
                        }
                        for (u in u = "open" == v ? (b += 2, _ += 2, w += 2, l = 1, n = r ? 4 : 1, {
                            fill: "none",
                            stroke: x.stroke
                        }) : (n = l = b / 2, {
                            fill: x.stroke,
                            stroke: "none"
                        }), t._.arrows ? r ? (t._.arrows.endPath && S[t._.arrows.endPath]--, t._.arrows.endMarker && S[t._.arrows.endMarker]--) : (t._.arrows.startPath && S[t._.arrows.startPath]--, t._.arrows.startMarker && S[t._.arrows.startMarker]--) : t._.arrows = {}, "none" != v ? (s = "raphael-marker-" + v, a = "raphael-marker-" + d + v + b + _, j._g.doc.getElementById(s) ? S[s]++ : (p.defs.appendChild(L(L("path"), {
                            "stroke-linecap": "round",
                            d: B[v],
                            id: s
                        })), S[s] = 1), (o = j._g.doc.getElementById(a)) ? (S[a]++, h = o.getElementsByTagName("use")[0]) : (o = L(L("marker"), {
                            id: a,
                            markerHeight: _,
                            markerWidth: b,
                            orient: "auto",
                            refX: n,
                            refY: _ / 2
                        }), h = L(L("use"), {
                            "xlink:href": "#" + s,
                            transform: (r ? "rotate(180 " + b / 2 + " " + _ / 2 + ") " : "") + "scale(" + b / w + "," + _ / w + ")",
                            "stroke-width": (1 / ((b / w + _ / w) / 2)).toFixed(4)
                        }), o.appendChild(h), p.defs.appendChild(o), S[a] = 1), L(h, u), l = l * ("diamond" != v && "oval" != v), h = r ? (i = t._.arrows.startdx * y || 0, j.getTotalLength(x.path) - l * y) : (i = l * y, j.getTotalLength(x.path) - (t._.arrows.enddx * y || 0)), (u = {})["marker-" + d] = "url(#" + a + ")", (h || i) && (u.d = j.getSubpath(x.path, i, h)), L(g, u), t._.arrows[d + "Path"] = s, t._.arrows[d + "Marker"] = a, t._.arrows[d + "dx"] = l, t._.arrows[d + "Type"] = v, t._.arrows[d + "String"] = e) : (h = r ? (i = t._.arrows.startdx * y || 0, j.getTotalLength(x.path) - i) : (i = 0, j.getTotalLength(x.path) - (t._.arrows.enddx * y || 0)), t._.arrows[d + "Path"] && L(g, {d: j.getSubpath(x.path, i, h)}), delete t._.arrows[d + "Path"], delete t._.arrows[d + "Marker"], delete t._.arrows[d + "dx"], delete t._.arrows[d + "Type"], delete t._.arrows[d + "String"]), S) !S[k](u) || S[u] || (c = j._g.doc.getElementById(u)) && c.parentNode.removeChild(c)
                    }
                }

                function E(t, e, r) {
                    if (e = l[C(e).toLowerCase()]) {
                        for (var i = t.attrs["stroke-width"] || "1", n = {
                            round: i,
                            square: i,
                            butt: 0
                        }[t.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0, s = [], a = e.length; a--;) s[a] = e[a] * i + (a % 2 ? 1 : -1) * n;
                        L(t.node, {"stroke-dasharray": s.join(",")})
                    }
                }

                function p(t, e) {
                    var r, i = t.node, n = t.attrs, s = i.style.visibility;
                    for (r in i.style.visibility = "hidden", e) if (e[k](r) && j._availableAttrs[k](r)) {
                        var a = e[r];
                        switch (n[r] = a, r) {
                            case"blur":
                                t.blur(a);
                                break;
                            case"href":
                            case"title":
                                var o = L("title"), l = j._g.doc.createTextNode(a);
                                o.appendChild(l), i.appendChild(o);
                                break;
                            case"target":
                                var h = i.parentNode;
                                "a" != h.tagName.toLowerCase() && (o = L("a"), h.insertBefore(o, i), o.appendChild(i), h = o), "target" == r ? h.setAttributeNS(w, "show", "blank" == a ? "new" : a) : h.setAttributeNS(w, r, a);
                                break;
                            case"cursor":
                                i.style.cursor = a;
                                break;
                            case"transform":
                                t.transform(a);
                                break;
                            case"arrow-start":
                                N(t, a);
                                break;
                            case"arrow-end":
                                N(t, a, 1);
                                break;
                            case"clip-rect":
                                var u, l = C(a).split(_);
                                4 == l.length && (t.clip && t.clip.parentNode.parentNode.removeChild(t.clip.parentNode), h = L("clipPath"), u = L("rect"), h.id = j.createUUID(), L(u, {
                                    x: l[0],
                                    y: l[1],
                                    width: l[2],
                                    height: l[3]
                                }), h.appendChild(u), t.paper.defs.appendChild(h), L(i, {"clip-path": "url(#" + h.id + ")"}), t.clip = u), a || (u = i.getAttribute("clip-path")) && ((d = j._g.doc.getElementById(u.replace(/(^url\(#|\)$)/g, ""))) && d.parentNode.removeChild(d), L(i, {"clip-path": ""}), delete t.clip);
                                break;
                            case"path":
                                "path" == t.type && (L(i, {d: a ? n.path = j._pathToAbsolute(a) : "M0,0"}), t._.dirty = 1, t._.arrows && ("startString" in t._.arrows && N(t, t._.arrows.startString), "endString" in t._.arrows && N(t, t._.arrows.endString, 1)));
                                break;
                            case"width":
                                if (i.setAttribute(r, a), t._.dirty = 1, !n.fx) break;
                                r = "x", a = n.x;
                            case"x":
                                n.fx && (a = -n.x - (n.width || 0));
                            case"rx":
                                if ("rx" == r && "rect" == t.type) break;
                            case"cx":
                                i.setAttribute(r, a), t.pattern && A(t), t._.dirty = 1;
                                break;
                            case"height":
                                if (i.setAttribute(r, a), t._.dirty = 1, !n.fy) break;
                                r = "y", a = n.y;
                            case"y":
                                n.fy && (a = -n.y - (n.height || 0));
                            case"ry":
                                if ("ry" == r && "rect" == t.type) break;
                            case"cy":
                                i.setAttribute(r, a), t.pattern && A(t), t._.dirty = 1;
                                break;
                            case"r":
                                "rect" == t.type ? L(i, {rx: a, ry: a}) : i.setAttribute(r, a), t._.dirty = 1;
                                break;
                            case"src":
                                "image" == t.type && i.setAttributeNS(w, "href", a);
                                break;
                            case"stroke-width":
                                1 == t._.sx && 1 == t._.sy || (a /= m(v(t._.sx), v(t._.sy)) || 1), t.paper._vbSize && (a *= t.paper._vbSize), i.setAttribute(r, a), n["stroke-dasharray"] && E(t, n["stroke-dasharray"], e), t._.arrows && ("startString" in t._.arrows && N(t, t._.arrows.startString), "endString" in t._.arrows && N(t, t._.arrows.endString, 1));
                                break;
                            case"stroke-dasharray":
                                E(t, a, e);
                                break;
                            case"fill":
                                if (C(a).match(j._ISURL)) {
                                    L(i, {fill: a});
                                    break
                                }
                                var c, f, p = j.getRGB(a);
                                if (p.error) {
                                    if (("circle" == t.type || "ellipse" == t.type || "r" != C(a).charAt()) && T(t, a)) {
                                        !("opacity" in n || "fill-opacity" in n) || (c = j._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, ""))) && (f = c.getElementsByTagName("stop"), L(f[f.length - 1], {"stop-opacity": ("opacity" in n ? n.opacity : 1) * ("fill-opacity" in n ? n["fill-opacity"] : 1)})), n.gradient = a, n.fill = "none";
                                        break
                                    }
                                } else delete e.gradient, delete n.gradient, !j.is(n.opacity, "undefined") && j.is(e.opacity, "undefined") && L(i, {opacity: n.opacity}), !j.is(n["fill-opacity"], "undefined") && j.is(e["fill-opacity"], "undefined") && L(i, {"fill-opacity": n["fill-opacity"]});
                                p[k]("opacity") && L(i, {"fill-opacity": 1 < p.opacity ? p.opacity / 100 : p.opacity});
                            case"stroke":
                                p = j.getRGB(a), i.setAttribute(r, p.hex), "stroke" == r && p[k]("opacity") && L(i, {"stroke-opacity": 1 < p.opacity ? p.opacity / 100 : p.opacity}), "stroke" == r && t._.arrows && ("startString" in t._.arrows && N(t, t._.arrows.startString), "endString" in t._.arrows && N(t, t._.arrows.endString, 1));
                                break;
                            case"gradient":
                                "circle" != t.type && "ellipse" != t.type && "r" == C(a).charAt() || T(t, a);
                                break;
                            case"opacity":
                                n.gradient && !n[k]("stroke-opacity") && L(i, {"stroke-opacity": 1 < a ? a / 100 : a});
                            case"fill-opacity":
                                if (n.gradient) {
                                    (c = j._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, ""))) && (f = c.getElementsByTagName("stop"), L(f[f.length - 1], {"stop-opacity": a}));
                                    break
                                }
                            default:
                                "font-size" == r && (a = x(a, 10) + "px");
                                var d = r.replace(/(\-.)/g, function (t) {
                                    return t.substring(1).toUpperCase()
                                });
                                i.style[d] = a, t._.dirty = 1, i.setAttribute(r, a)
                        }
                    }
                    M(t, e), i.style.visibility = s
                }

                function o(t, e) {
                    (this[0] = this.node = t).raphael = !0, this.id = j._oid++, t.raphaelid = this.id, this.matrix = j.matrix(), this.realPath = null, this.paper = e, this.attrs = this.attrs || {}, this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        deg: 0,
                        dx: 0,
                        dy: 0,
                        dirty: 1
                    }, e.bottom || (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), (e.top = this).next = null
                }

                var L = function (t, e) {
                    if (e) for (var r in "string" == typeof t && (t = L(t)), e) e[k](r) && ("xlink:" == r.substring(0, 6) ? t.setAttributeNS(w, r.substring(6), C(e[r])) : t.setAttribute(r, C(e[r]))); else (t = j._g.doc.createElementNS("http://www.w3.org/2000/svg", t)).style && (t.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                    return t
                }, l = {
                    "": [0],
                    none: [0],
                    "-": [3, 1],
                    ".": [1, 1],
                    "-.": [3, 1, 1, 1],
                    "-..": [3, 1, 1, 1, 1, 1],
                    ". ": [1, 3],
                    "- ": [4, 3],
                    "--": [8, 3],
                    "- .": [4, 3, 1, 3],
                    "--.": [8, 3, 1, 3],
                    "--..": [8, 3, 1, 3, 1, 3]
                }, M = function (t, e) {
                    if ("text" == t.type && (e[k]("text") || e[k]("font") || e[k]("font-size") || e[k]("x") || e[k]("y"))) {
                        var r = t.attrs, i = t.node,
                            n = i.firstChild ? x(j._g.doc.defaultView.getComputedStyle(i.firstChild, "").getPropertyValue("font-size"), 10) : 10;
                        if (e[k]("text")) {
                            for (r.text = e.text; i.firstChild;) i.removeChild(i.firstChild);
                            for (var s, a = C(e.text).split("\n"), o = [], l = 0, h = a.length; l < h; l++) s = L("tspan"), l && L(s, {
                                dy: 1.2 * n,
                                x: r.x
                            }), s.appendChild(j._g.doc.createTextNode(a[l])), i.appendChild(s), o[l] = s
                        } else for (l = 0, h = (o = i.getElementsByTagName("tspan")).length; l < h; l++) l ? L(o[l], {
                            dy: 1.2 * n,
                            x: r.x
                        }) : L(o[0], {dy: 0});
                        L(i, {x: r.x, y: r.y}), t._.dirty = 1;
                        t = t._getBBox(), t = r.y - (t.y + t.height / 2);
                        t && j.is(t, "finite") && L(o[0], {dy: t})
                    }
                }, t = j.el;
                (o.prototype = t).constructor = o, j._engine.path = function (t, e) {
                    var r = L("path");
                    e.canvas && e.canvas.appendChild(r);
                    e = new o(r, e);
                    return e.type = "path", p(e, {fill: "none", stroke: "#000", path: t}), e
                }, t.rotate = function (t, e, r) {
                    return this.removed || ((t = C(t).split(_)).length - 1 && (e = g(t[1]), r = g(t[2])), t = g(t[0]), null == r && (e = r), null != e && null != r || (e = (i = this.getBBox(1)).x + i.width / 2, r = i.y + i.height / 2), this.transform(this._.transform.concat([["r", t, e, r]]))), this;
                    var i
                }, t.scale = function (t, e, r, i) {
                    return this.removed || ((t = C(t).split(_)).length - 1 && (e = g(t[1]), r = g(t[2]), i = g(t[3])), t = g(t[0]), null == e && (e = t), null == i && (r = i), null != r && null != i || (n = this.getBBox(1)), r = null == r ? n.x + n.width / 2 : r, i = null == i ? n.y + n.height / 2 : i, this.transform(this._.transform.concat([["s", t, e, r, i]]))), this;
                    var n
                }, t.translate = function (t, e) {
                    return this.removed || ((t = C(t).split(_)).length - 1 && (e = g(t[1])), t = g(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([["t", t, e]]))), this
                }, t.transform = function (t) {
                    var e = this._;
                    return null == t ? e.transform : (j._extractTransform(this, t), this.clip && L(this.clip, {transform: this.matrix.invert()}), this.pattern && A(this), this.node && L(this.node, {transform: this.matrix}), 1 == e.sx && 1 == e.sy || (e = this.attrs[k]("stroke-width") ? this.attrs["stroke-width"] : 1, this.attr({"stroke-width": e})), this)
                }, t.hide = function () {
                    return this.removed || this.paper.safari(this.node.style.display = "none"), this
                }, t.show = function () {
                    return this.removed || this.paper.safari(this.node.style.display = ""), this
                }, t.remove = function () {
                    if (!this.removed && this.node.parentNode) {
                        var t, e = this.paper;
                        for (t in e.__set__ && e.__set__.exclude(this), f.unbind("raphael.*.*." + this.id), this.gradient && e.defs.removeChild(this.gradient), j._tear(this, e), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node), this) this[t] = "function" == typeof this[t] ? j._removedFactory(t) : null;
                        this.removed = !0
                    }
                }, t._getBBox = function () {
                    var t;
                    "none" == this.node.style.display && (this.show(), t = !0);
                    var e = {};
                    try {
                        e = this.node.getBBox()
                    } catch (t) {
                    } finally {
                        e = e || {}
                    }
                    return t && this.hide(), e
                }, t.attr = function (t, e) {
                    if (this.removed) return this;
                    if (null == t) {
                        var r, i = {};
                        for (r in this.attrs) this.attrs[k](r) && (i[r] = this.attrs[r]);
                        return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
                    }
                    if (null == e && j.is(t, "string")) {
                        if ("fill" == t && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        if ("transform" == t) return this._.transform;
                        for (var n = t.split(_), s = {}, a = 0, o = n.length; a < o; a++) (t = n[a]) in this.attrs ? s[t] = this.attrs[t] : j.is(this.paper.customAttributes[t], "function") ? s[t] = this.paper.customAttributes[t].def : s[t] = j._availableAttrs[t];
                        return o - 1 ? s : s[n[0]]
                    }
                    if (null == e && j.is(t, "array")) {
                        for (s = {}, a = 0, o = t.length; a < o; a++) s[t[a]] = this.attr(t[a]);
                        return s
                    }
                    var l, h;
                    for (h in null != e ? (l = {})[t] = e : null != t && j.is(t, "object") && (l = t), l) f("raphael.attr." + h + "." + this.id, this, l[h]);
                    for (h in this.paper.customAttributes) if (this.paper.customAttributes[k](h) && l[k](h) && j.is(this.paper.customAttributes[h], "function")) {
                        var u, c = this.paper.customAttributes[h].apply(this, [].concat(l[h]));
                        for (u in this.attrs[h] = l[h], c) c[k](u) && (l[u] = c[u])
                    }
                    return p(this, l), this
                }, t.toFront = function () {
                    if (this.removed) return this;
                    "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
                    var t = this.paper;
                    return t.top != this && j._tofront(this, t), this
                }, t.toBack = function () {
                    if (this.removed) return this;
                    var t = this.node.parentNode;
                    "a" == t.tagName.toLowerCase() ? t.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : t.firstChild != this.node && t.insertBefore(this.node, this.node.parentNode.firstChild), j._toback(this, this.paper);
                    this.paper;
                    return this
                }, t.insertAfter = function (t) {
                    if (this.removed) return this;
                    var e = t.node || t[t.length - 1].node;
                    return e.nextSibling ? e.parentNode.insertBefore(this.node, e.nextSibling) : e.parentNode.appendChild(this.node), j._insertafter(this, t, this.paper), this
                }, t.insertBefore = function (t) {
                    if (this.removed) return this;
                    var e = t.node || t[0].node;
                    return e.parentNode.insertBefore(this.node, e), j._insertbefore(this, t, this.paper), this
                }, t.blur = function (t) {
                    var e, r, i = this;
                    return 0 != +t ? (e = L("filter"), r = L("feGaussianBlur"), i.attrs.blur = t, e.id = j.createUUID(), L(r, {stdDeviation: +t || 1.5}), e.appendChild(r), i.paper.defs.appendChild(e), i._blur = e, L(i.node, {filter: "url(#" + e.id + ")"})) : (i._blur && (i._blur.parentNode.removeChild(i._blur), delete i._blur, delete i.attrs.blur), i.node.removeAttribute("filter")), i
                }, j._engine.circle = function (t, e, r, i) {
                    var n = L("circle");
                    t.canvas && t.canvas.appendChild(n);
                    t = new o(n, t);
                    return t.attrs = {
                        cx: e,
                        cy: r,
                        r: i,
                        fill: "none",
                        stroke: "#000"
                    }, t.type = "circle", L(n, t.attrs), t
                }, j._engine.rect = function (t, e, r, i, n, s) {
                    var a = L("rect");
                    t.canvas && t.canvas.appendChild(a);
                    t = new o(a, t);
                    return t.attrs = {
                        x: e,
                        y: r,
                        width: i,
                        height: n,
                        r: s || 0,
                        rx: s || 0,
                        ry: s || 0,
                        fill: "none",
                        stroke: "#000"
                    }, t.type = "rect", L(a, t.attrs), t
                }, j._engine.ellipse = function (t, e, r, i, n) {
                    var s = L("ellipse");
                    t.canvas && t.canvas.appendChild(s);
                    t = new o(s, t);
                    return t.attrs = {
                        cx: e,
                        cy: r,
                        rx: i,
                        ry: n,
                        fill: "none",
                        stroke: "#000"
                    }, t.type = "ellipse", L(s, t.attrs), t
                }, j._engine.image = function (t, e, r, i, n, s) {
                    var a = L("image");
                    L(a, {
                        x: r,
                        y: i,
                        width: n,
                        height: s,
                        preserveAspectRatio: "none"
                    }), a.setAttributeNS(w, "href", e), t.canvas && t.canvas.appendChild(a);
                    t = new o(a, t);
                    return t.attrs = {x: r, y: i, width: n, height: s, src: e}, t.type = "image", t
                }, j._engine.text = function (t, e, r, i) {
                    var n = L("text");
                    t.canvas && t.canvas.appendChild(n);
                    t = new o(n, t);
                    return t.attrs = {
                        x: e,
                        y: r,
                        "text-anchor": "middle",
                        text: i,
                        font: j._availableAttrs.font,
                        stroke: "none",
                        fill: "#000"
                    }, t.type = "text", p(t, t.attrs), t
                }, j._engine.setSize = function (t, e) {
                    return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
                }, j._engine.create = function () {
                    var t = j._getContainer.apply(0, arguments), e = t && t.container, r = t.x, i = t.y, n = t.width,
                        s = t.height;
                    if (!e) throw new Error("SVG container not found.");
                    var a, o = L("svg"), t = "overflow:hidden;", r = r || 0, i = i || 0;
                    return L(o, {
                        height: s = s || 342,
                        version: 1.1,
                        width: n = n || 512,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), 1 == e ? (o.style.cssText = t + "position:absolute;left:" + r + "px;top:" + i + "px", j._g.doc.body.appendChild(o), a = 1) : (o.style.cssText = t + "position:relative", e.firstChild ? e.insertBefore(o, e.firstChild) : e.appendChild(o)), (e = new j._Paper).width = n, e.height = s, e.canvas = o, e.clear(), e._left = e._top = 0, a && (e.renderfix = function () {
                    }), e.renderfix(), e
                }, j._engine.setViewBox = function (t, e, r, i, n) {
                    f("raphael.setViewBox", this, this._viewBox, [t, e, r, i, n]);
                    var s, a = m(r / this.width, i / this.height), o = this.top, l = n ? "meet" : "xMinYMin",
                        h = null == t ? (this._vbSize && (a = 1), delete this._vbSize, "0 0 " + this.width + " " + this.height) : (this._vbSize = a, t + " " + e + " " + r + " " + i);
                    for (L(this.canvas, {
                        viewBox: h,
                        preserveAspectRatio: l
                    }); a && o;) s = "stroke-width" in o.attrs ? o.attrs["stroke-width"] : 1, o.attr({"stroke-width": s}), o._.dirty = 1, o._.dirtyT = 1, o = o.prev;
                    return this._viewBox = [t, e, r, i, !!n], this
                }, j.prototype.renderfix = function () {
                    var e, r = this.canvas, t = r.style;
                    try {
                        e = r.getScreenCTM() || r.createSVGMatrix()
                    } catch (t) {
                        e = r.createSVGMatrix()
                    }
                    var i = -e.e % 1, n = -e.f % 1;
                    (i || n) && (i && (this._left = (this._left + i) % 1, t.left = this._left + "px"), n && (this._top = (this._top + n) % 1, t.top = this._top + "px"))
                }, j.prototype.clear = function () {
                    j.eve("raphael.clear", this);
                    for (var t = this.canvas; t.firstChild;) t.removeChild(t.firstChild);
                    this.bottom = this.top = null, (this.desc = L("desc")).appendChild(j._g.doc.createTextNode("Created with Raphaël " + j.version)), t.appendChild(this.desc), t.appendChild(this.defs = L("defs"))
                }, j.prototype.remove = function () {
                    for (var t in f("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this) this[t] = "function" == typeof this[t] ? j._removedFactory(t) : null
                };
                var e, r = j.st;
                for (e in t) t[k](e) && !r[k](e) && (r[e] = function (r) {
                    return function () {
                        var e = arguments;
                        return this.forEach(function (t) {
                            t[r].apply(t, e)
                        })
                    }
                }(e))
            }
        }(), function () {
            if (j.vml) {
                function g(t, e, r) {
                    var i = j.matrix();
                    return i.rotate(-t, .5, .5), {dx: i.x(e, r), dy: i.y(e, r)}
                }

                function v(t, e, r, i, n, s) {
                    var a, o = t._, l = t.matrix, h = o.fillpos, u = t.node, c = u.style, f = 1, p = "", d = M / e,
                        t = M / r;
                    c.visibility = "hidden", e && r && (u.coordsize = x(d) + A + x(t), c.rotation = s * (e * r < 0 ? -1 : 1), s && (i = (a = g(s, i, n)).dx, n = a.dy), e < 0 && (p += "x"), r < 0 && (p += " y") && (f = -1), c.flip = p, u.coordorigin = i * -d + A + n * -t, (h || o.fillsize) && (t = (t = u.getElementsByTagName(S)) && t[0], u.removeChild(t), h && (a = g(s, l.x(h[0], h[1]), l.y(h[0], h[1])), t.position = a.dx * f + A + a.dy * f), o.fillsize && (t.size = o.fillsize[0] * x(e) + A + o.fillsize[1] * x(r)), u.appendChild(t)), c.visibility = "visible")
                }

                var b = "hasOwnProperty", _ = String, w = parseFloat, c = Math, k = c.round, C = c.max, B = c.min,
                    x = c.abs, S = "fill", T = /[, ]+/, f = j.eve, A = " ",
                    N = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"}, E = /([clmz]),?([^clmz]*)/gi,
                    i = / progid:\S+Blur\([^\)]+\)/g, L = /-?[^,\s-]+/g,
                    h = "position:absolute;left:0;top:0;width:1px;height:1px", M = 21600,
                    P = {path: 1, rect: 1, image: 1}, z = {circle: 1, ellipse: 1};
                j.toString = function () {
                    return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
                };

                function F(t, e, r) {
                    for (var i = _(e).toLowerCase().split("-"), r = r ? "end" : "start", n = i.length, s = "classic", a = "medium", o = "medium"; n--;) switch (i[n]) {
                        case"block":
                        case"classic":
                        case"oval":
                        case"diamond":
                        case"open":
                        case"none":
                            s = i[n];
                            break;
                        case"wide":
                        case"narrow":
                            o = i[n];
                            break;
                        case"long":
                        case"short":
                            a = i[n]
                    }
                    t = t.node.getElementsByTagName("stroke")[0];
                    t[r + "arrow"] = s, t[r + "arrowlength"] = a, t[r + "arrowwidth"] = o
                }

                function p(t, e) {
                    t.attrs = t.attrs || {};
                    var r, i, n, s, a, o, l, h = t.node, u = t.attrs, c = h.style,
                        f = P[t.type] && (e.x != u.x || e.y != u.y || e.width != u.width || e.height != u.height || e.cx != u.cx || e.cy != u.cy || e.rx != u.rx || e.ry != u.ry || e.r != u.r),
                        p = z[t.type] && (u.cx != e.cx || u.cy != e.cy || u.r != e.r || u.rx != e.rx || u.ry != e.ry),
                        d = t;
                    for (r in e) e[b](r) && (u[r] = e[r]);
                    if (f && (u.path = j._getPath[t.type](t), t._.dirty = 1), e.href && (h.href = e.href), e.title && (h.title = e.title), e.target && (h.target = e.target), e.cursor && (c.cursor = e.cursor), "blur" in e && t.blur(e.blur), (e.path && "path" == t.type || f) && (h.path = function (t) {
                        var e = /[ahqstv]/gi, r = j._pathToAbsolute;
                        if (_(t).match(e) && (r = j._path2curve), e = /[clmz]/g, r == j._pathToAbsolute && !_(t).match(e)) {
                            var i = _(t).replace(E, function (t, e, r) {
                                var i = [], n = "m" == e.toLowerCase(), s = N[e];
                                return r.replace(L, function (t) {
                                    n && 2 == i.length && (s += i + N["m" == e ? "l" : "L"], i = []), i.push(k(t * M))
                                }), s + i
                            });
                            return i
                        }
                        for (var n, s, a = r(t), i = [], o = 0, l = a.length; o < l; o++) {
                            n = a[o], "z" == (s = a[o][0].toLowerCase()) && (s = "x");
                            for (var h = 1, u = n.length; h < u; h++) s += k(n[h] * M) + (h != u - 1 ? "," : "");
                            i.push(s)
                        }
                        return i.join(A)
                    }(~_(u.path).toLowerCase().indexOf("r") ? j._pathToAbsolute(u.path) : u.path), "image" == t.type && (t._.fillpos = [u.x, u.y], t._.fillsize = [u.width, u.height], v(t, 1, 1, 0, 0, 0))), "transform" in e && t.transform(e.transform), p && (s = +u.cx, i = +u.cy, p = +u.rx || +u.r || 0, n = +u.ry || +u.r || 0, h.path = j.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", k((s - p) * M), k((i - n) * M), k((s + p) * M), k((i + n) * M), k(s * M)), t._.dirty = 1), "clip-rect" in e && (4 == (i = _(e["clip-rect"]).split(T)).length && (i[2] = +i[2] + +i[0], i[3] = +i[3] + +i[1], (s = (n = h.clipRect || j._g.doc.createElement("div")).style).clip = j.format("rect({1}px {2}px {3}px {0}px)", i), h.clipRect || (s.position = "absolute", s.top = 0, s.left = 0, s.width = t.paper.width + "px", s.height = t.paper.height + "px", h.parentNode.insertBefore(n, h), n.appendChild(h), h.clipRect = n)), e["clip-rect"] || h.clipRect && (h.clipRect.style.clip = "auto")), t.textpath && (o = t.textpath.style, e.font && (o.font = e.font), e["font-family"] && (o.fontFamily = '"' + e["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, "") + '"'), e["font-size"] && (o.fontSize = e["font-size"]), e["font-weight"] && (o.fontWeight = e["font-weight"]), e["font-style"] && (o.fontStyle = e["font-style"])), "arrow-start" in e && F(d, e["arrow-start"]), "arrow-end" in e && F(d, e["arrow-end"], 1), null == e.opacity && null == e["stroke-width"] && null == e.fill && null == e.src && null == e.stroke && null == e["stroke-width"] && null == e["stroke-opacity"] && null == e["fill-opacity"] && null == e["stroke-dasharray"] && null == e["stroke-miterlimit"] && null == e["stroke-linejoin"] && null == e["stroke-linecap"] || ((o = (o = h.getElementsByTagName(S)) && o[0]) || (o = R(S)), "image" == t.type && e.src && (o.src = e.src), e.fill && (o.on = !0), null != o.on && "none" != e.fill && null !== e.fill || (o.on = !1), o.on && e.fill && ((g = _(e.fill).match(j._ISURL)) ? (o.parentNode == h && h.removeChild(o), o.rotate = !0, o.src = g[1], o.type = "tile", a = t.getBBox(1), o.position = a.x + A + a.y, t._.fillpos = [a.x, a.y], j._preload(g[1], function () {
                        t._.fillsize = [this.offsetWidth, this.offsetHeight]
                    })) : (o.color = j.getRGB(e.fill).hex, o.src = "", o.type = "solid", j.getRGB(e.fill).error && (d.type in {
                        circle: 1,
                        ellipse: 1
                    } || "r" != _(e.fill).charAt()) && I(d, e.fill, o) && (u.fill = "none", u.gradient = e.fill, o.rotate = !1))), ("fill-opacity" in e || "opacity" in e) && (l = ((+u["fill-opacity"] + 1 || 2) - 1) * ((+u.opacity + 1 || 2) - 1) * ((+j.getRGB(e.fill).o + 1 || 2) - 1), l = B(C(l, 0), 1), o.opacity = l, o.src && (o.color = "none")), h.appendChild(o), a = !1, (g = h.getElementsByTagName("stroke") && h.getElementsByTagName("stroke")[0]) || (a = g = R("stroke")), (e.stroke && "none" != e.stroke || e["stroke-width"] || null != e["stroke-opacity"] || e["stroke-dasharray"] || e["stroke-miterlimit"] || e["stroke-linejoin"] || e["stroke-linecap"]) && (g.on = !0), "none" != e.stroke && null !== e.stroke && null != g.on && 0 != e.stroke && 0 != e["stroke-width"] || (g.on = !1), o = j.getRGB(e.stroke), g.on && e.stroke && (g.color = o.hex), l = ((+u["stroke-opacity"] + 1 || 2) - 1) * ((+u.opacity + 1 || 2) - 1) * ((+o.o + 1 || 2) - 1), o = .75 * (w(e["stroke-width"]) || 1), l = B(C(l, 0), 1), null == e["stroke-width"] && (o = u["stroke-width"]), e["stroke-width"] && (g.weight = o), o && o < 1 && (l *= o) && (g.weight = 1), g.opacity = l, e["stroke-linejoin"] && (g.joinstyle = e["stroke-linejoin"] || "miter"), g.miterlimit = e["stroke-miterlimit"] || 8, e["stroke-linecap"] && (g.endcap = "butt" == e["stroke-linecap"] ? "flat" : "square" == e["stroke-linecap"] ? "square" : "round"), e["stroke-dasharray"] && (l = {
                        "-": "shortdash",
                        ".": "shortdot",
                        "-.": "shortdashdot",
                        "-..": "shortdashdotdot",
                        ". ": "dot",
                        "- ": "dash",
                        "--": "longdash",
                        "- .": "dashdot",
                        "--.": "longdashdot",
                        "--..": "longdashdotdot"
                    }, g.dashstyle = l[b](e["stroke-dasharray"]) ? l[e["stroke-dasharray"]] : ""), a && h.appendChild(g)), "text" == d.type) {
                        d.paper.canvas.style.display = "";
                        var h = d.paper.span, g = u.font && u.font.match(/\d+(?:\.\d*)?(?=px)/), c = h.style;
                        u.font && (c.font = u.font), u["font-family"] && (c.fontFamily = u["font-family"]), u["font-weight"] && (c.fontWeight = u["font-weight"]), u["font-style"] && (c.fontStyle = u["font-style"]), g = w(u["font-size"] || g && g[0]) || 10, c.fontSize = 100 * g + "px", d.textpath.string && (h.innerHTML = _(d.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                        h = h.getBoundingClientRect();
                        d.W = u.w = (h.right - h.left) / 100, d.H = u.h = (h.bottom - h.top) / 100, d.X = u.x, d.Y = u.y + d.H / 2, ("x" in e || "y" in e) && (d.path.v = j.format("m{0},{1}l{2},{1}", k(u.x * M), k(u.y * M), k(u.x * M) + 1));
                        for (var x = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], y = 0, m = x.length; y < m; y++) if (x[y] in e) {
                            d._.dirty = 1;
                            break
                        }
                        switch (u["text-anchor"]) {
                            case"start":
                                d.textpath.style["v-text-align"] = "left", d.bbx = d.W / 2;
                                break;
                            case"end":
                                d.textpath.style["v-text-align"] = "right", d.bbx = -d.W / 2;
                                break;
                            default:
                                d.textpath.style["v-text-align"] = "center", d.bbx = 0
                        }
                        d.textpath.style["v-text-kern"] = !0
                    }
                }

                function u(t, e) {
                    (this[0] = this.node = t).raphael = !0, this.id = j._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = e, this.matrix = j.matrix(), this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        dx: 0,
                        dy: 0,
                        deg: 0,
                        dirty: 1,
                        dirtyT: 1
                    }, e.bottom || (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), (e.top = this).next = null
                }

                var R, I = function (t, e, r) {
                    t.attrs = t.attrs || {};
                    t.attrs;
                    var i = Math.pow, n = "linear", s = ".5 .5";
                    if (t.attrs.gradient = e, e = (e = _(e).replace(j._radial_gradient, function (t, e, r) {
                        return n = "radial", e && r && (e = w(e), r = w(r), .25 < i(e - .5, 2) + i(r - .5, 2) && (r = c.sqrt(.25 - i(e - .5, 2)) * (2 * (.5 < r) - 1) + .5), s = e + A + r), ""
                    })).split(/\s*\-\s*/), "linear" == n) {
                        var a = e.shift(), a = -w(a);
                        if (isNaN(a)) return null
                    }
                    var o = j._parseDots(e);
                    if (!o) return null;
                    if (t = t.shape || t.node, o.length) {
                        t.removeChild(r), r.on = !0, r.method = "none", r.color = o[0].color, r.color2 = o[o.length - 1].color;
                        for (var l = [], h = 0, u = o.length; h < u; h++) o[h].offset && l.push(o[h].offset + A + o[h].color);
                        r.colors = l.length ? l.join() : "0% " + r.color, "radial" == n ? (r.type = "gradientTitle", r.focus = "100%", r.focussize = "0 0", r.focusposition = s, r.angle = 0) : (r.type = "gradient", r.angle = (270 - a) % 360), t.appendChild(r)
                    }
                    return 1
                }, t = j.el;
                (u.prototype = t).constructor = u, t.transform = function (t) {
                    if (null == t) return this._.transform;
                    var e, r = this.paper._viewBoxShift, i = r ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy] : "";
                    r && (e = t = _(t).replace(/\.{3}|\u2026/g, this._.transform || "")), j._extractTransform(this, i + t);
                    var n = this.matrix.clone(), s = this.skew, a = this.node, o = ~_(this.attrs.fill).indexOf("-"),
                        r = !_(this.attrs.fill).indexOf("url(");
                    return n.translate(1, 1), r || o || "image" == this.type ? (s.matrix = "1 0 0 1", s.offset = "0 0", i = n.split(), o && i.noRotation || !i.isSimple ? (a.style.filter = n.toFilter(), t = this.getBBox(), r = this.getBBox(1), o = t.x - r.x, r = t.y - r.y, a.coordorigin = o * -M + A + r * -M, v(this, 1, 1, o, r, 0)) : (a.style.filter = "", v(this, i.scalex, i.scaley, i.dx, i.dy, i.rotate))) : (a.style.filter = "", s.matrix = _(n), s.offset = n.offset()), e && (this._.transform = e), this
                }, t.rotate = function (t, e, r) {
                    return this.removed ? this : null != t ? ((t = _(t).split(T)).length - 1 && (e = w(t[1]), r = w(t[2])), t = w(t[0]), null == r && (e = r), null != e && null != r || (e = (i = this.getBBox(1)).x + i.width / 2, r = i.y + i.height / 2), this._.dirtyT = 1, this.transform(this._.transform.concat([["r", t, e, r]])), this) : void 0;
                    var i
                }, t.translate = function (t, e) {
                    return this.removed || ((t = _(t).split(T)).length - 1 && (e = w(t[1])), t = w(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([["t", t, e]]))), this
                }, t.scale = function (t, e, r, i) {
                    return this.removed || ((t = _(t).split(T)).length - 1 && (e = w(t[1]), r = w(t[2]), i = w(t[3]), isNaN(r) && (r = null), isNaN(i) && (i = null)), t = w(t[0]), null == e && (e = t), null == i && (r = i), null != r && null != i || (n = this.getBBox(1)), r = null == r ? n.x + n.width / 2 : r, i = null == i ? n.y + n.height / 2 : i, this.transform(this._.transform.concat([["s", t, e, r, i]])), this._.dirtyT = 1), this;
                    var n
                }, t.hide = function () {
                    return this.removed || (this.node.style.display = "none"), this
                }, t.show = function () {
                    return this.removed || (this.node.style.display = ""), this
                }, t._getBBox = function () {
                    return this.removed ? {} : {
                        x: this.X + (this.bbx || 0) - this.W / 2,
                        y: this.Y - this.H,
                        width: this.W,
                        height: this.H
                    }
                }, t.remove = function () {
                    if (!this.removed && this.node.parentNode) {
                        for (var t in this.paper.__set__ && this.paper.__set__.exclude(this), j.eve.unbind("raphael.*.*." + this.id), j._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape), this) this[t] = "function" == typeof this[t] ? j._removedFactory(t) : null;
                        this.removed = !0
                    }
                }, t.attr = function (t, e) {
                    if (this.removed) return this;
                    if (null == t) {
                        var r, i = {};
                        for (r in this.attrs) this.attrs[b](r) && (i[r] = this.attrs[r]);
                        return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
                    }
                    if (null == e && j.is(t, "string")) {
                        if (t == S && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        for (var n = t.split(T), s = {}, a = 0, o = n.length; a < o; a++) (t = n[a]) in this.attrs ? s[t] = this.attrs[t] : j.is(this.paper.customAttributes[t], "function") ? s[t] = this.paper.customAttributes[t].def : s[t] = j._availableAttrs[t];
                        return o - 1 ? s : s[n[0]]
                    }
                    if (this.attrs && null == e && j.is(t, "array")) {
                        for (s = {}, a = 0, o = t.length; a < o; a++) s[t[a]] = this.attr(t[a]);
                        return s
                    }
                    var l, h;
                    for (h in null != e && ((l = {})[t] = e), null == e && j.is(t, "object") && (l = t), l) f("raphael.attr." + h + "." + this.id, this, l[h]);
                    if (l) {
                        for (h in this.paper.customAttributes) if (this.paper.customAttributes[b](h) && l[b](h) && j.is(this.paper.customAttributes[h], "function")) {
                            var u, c = this.paper.customAttributes[h].apply(this, [].concat(l[h]));
                            for (u in this.attrs[h] = l[h], c) c[b](u) && (l[u] = c[u])
                        }
                        l.text && "text" == this.type && (this.textpath.string = l.text), p(this, l)
                    }
                    return this
                }, t.toFront = function () {
                    return this.removed || this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && j._tofront(this, this.paper), this
                }, t.toBack = function () {
                    return this.removed || this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), j._toback(this, this.paper)), this
                }, t.insertAfter = function (t) {
                    return this.removed || (t.constructor == j.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), j._insertafter(this, t, this.paper)), this
                }, t.insertBefore = function (t) {
                    return this.removed || (t.constructor == j.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), j._insertbefore(this, t, this.paper)), this
                }, t.blur = function (t) {
                    var e = this.node.runtimeStyle, r = (r = e.filter).replace(i, "");
                    return 0 != +t ? (this.attrs.blur = t, e.filter = r + A + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+t || 1.5) + ")", e.margin = j.format("-{0}px 0 0 -{0}px", k(+t || 1.5))) : (e.filter = r, e.margin = 0, delete this.attrs.blur), this
                }, j._engine.path = function (t, e) {
                    var r = R("shape");
                    r.style.cssText = h, r.coordsize = M + A + M, r.coordorigin = e.coordorigin;
                    var i = new u(r, e), n = {fill: "none", stroke: "#000"};
                    t && (n.path = t), i.type = "path", i.path = [], i.Path = "", p(i, n), e.canvas.appendChild(r);
                    e = R("skew");
                    return e.on = !0, r.appendChild(e), i.skew = e, i.transform(""), i
                }, j._engine.rect = function (t, e, r, i, n, s) {
                    var a = j._rectPath(e, r, i, n, s), o = t.path(a), t = o.attrs;
                    return o.X = t.x = e, o.Y = t.y = r, o.W = t.width = i, o.H = t.height = n, t.r = s, t.path = a, o.type = "rect", o
                }, j._engine.ellipse = function (t, e, r, i, n) {
                    t = t.path(), t.attrs;
                    return t.X = e - i, t.Y = r - n, t.W = 2 * i, t.H = 2 * n, t.type = "ellipse", p(t, {
                        cx: e,
                        cy: r,
                        rx: i,
                        ry: n
                    }), t
                }, j._engine.circle = function (t, e, r, i) {
                    t = t.path(), t.attrs;
                    return t.X = e - i, t.Y = r - i, t.W = t.H = 2 * i, t.type = "circle", p(t, {cx: e, cy: r, r: i}), t
                }, j._engine.image = function (t, e, r, i, n, s) {
                    var a = j._rectPath(r, i, n, s), o = t.path(a).attr({stroke: "none"}), l = o.attrs, h = o.node,
                        t = h.getElementsByTagName(S)[0];
                    return l.src = e, o.X = l.x = r, o.Y = l.y = i, o.W = l.width = n, o.H = l.height = s, l.path = a, o.type = "image", t.parentNode == h && h.removeChild(t), t.rotate = !0, t.src = e, t.type = "tile", o._.fillpos = [r, i], o._.fillsize = [n, s], h.appendChild(t), v(o, 1, 1, 0, 0, 0), o
                }, j._engine.text = function (t, e, r, i) {
                    var n = R("shape"), s = R("path"), a = R("textpath");
                    e = e || 0, r = r || 0, i = i || "", s.v = j.format("m{0},{1}l{2},{1}", k(e * M), k(r * M), k(e * M) + 1), s.textpathok = !0, a.string = _(i), a.on = !0, n.style.cssText = h, n.coordsize = M + A + M, n.coordorigin = "0 0";
                    var o = new u(n, t), l = {fill: "#000", stroke: "none", font: j._availableAttrs.font, text: i};
                    o.shape = n, o.path = s, o.textpath = a, o.type = "text", o.attrs.text = _(i), o.attrs.x = e, o.attrs.y = r, o.attrs.w = 1, o.attrs.h = 1, p(o, l), n.appendChild(a), n.appendChild(s), t.canvas.appendChild(n);
                    t = R("skew");
                    return t.on = !0, n.appendChild(t), o.skew = t, o.transform(""), o
                }, j._engine.setSize = function (t, e) {
                    var r = this.canvas.style;
                    return (this.width = t) == +t && (t += "px"), (this.height = e) == +e && (e += "px"), r.width = t, r.height = e, r.clip = "rect(0 " + t + " " + e + " 0)", this._viewBox && j._engine.setViewBox.apply(this, this._viewBox), this
                }, j._engine.setViewBox = function (t, e, r, i, n) {
                    j.eve("raphael.setViewBox", this, this._viewBox, [t, e, r, i, n]);
                    var s, a = this.width, o = this.height, l = 1 / C(r / a, i / o);
                    return n && (r * (s = o / i) < a && (t -= (a - r * s) / 2 / s), i * (a = a / r) < o && (e -= (o - i * a) / 2 / a)), this._viewBox = [t, e, r, i, !!n], this._viewBoxShift = {
                        dx: -t,
                        dy: -e,
                        scale: l
                    }, this.forEach(function (t) {
                        t.transform("...")
                    }), this
                }, j._engine.initWin = function (t) {
                    var e = t.document;
                    e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                    try {
                        e.namespaces.rvml || e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), R = function (t) {
                            return e.createElement("<rvml:" + t + ' class="rvml">')
                        }
                    } catch (t) {
                        R = function (t) {
                            return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                        }
                    }
                }, j._engine.initWin(j._g.win), j._engine.create = function () {
                    var t = j._getContainer.apply(0, arguments), e = t.container, r = t.height, i = t.width, n = t.x,
                        s = t.y;
                    if (!e) throw new Error("VML container not found.");
                    var a = new j._Paper, o = a.canvas = j._g.doc.createElement("div"), t = o.style, n = n || 0,
                        s = s || 0, i = i || 512, r = r || 342;
                    return (a.width = i) == +i && (i += "px"), (a.height = r) == +r && (r += "px"), a.coordsize = 216e5 + A + 216e5, a.coordorigin = "0 0", a.span = j._g.doc.createElement("span"), a.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", o.appendChild(a.span), t.cssText = j.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", i, r), 1 == e ? (j._g.doc.body.appendChild(o), t.left = n + "px", t.top = s + "px", t.position = "absolute") : e.firstChild ? e.insertBefore(o, e.firstChild) : e.appendChild(o), a.renderfix = function () {
                    }, a
                }, j.prototype.clear = function () {
                    j.eve("raphael.clear", this), this.canvas.innerHTML = "", this.span = j._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
                }, j.prototype.remove = function () {
                    for (var t in j.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas), this) this[t] = "function" == typeof this[t] ? j._removedFactory(t) : null;
                    return !0
                };
                var e, r = j.st;
                for (e in t) t[b](e) && !r[b](e) && (r[e] = function (r) {
                    return function () {
                        var e = arguments;
                        return this.forEach(function (t) {
                            t[r].apply(t, e)
                        })
                    }
                }(e))
            }
        }(), r.was ? d.win.Raphael = j : t.Raphael = j
    }(t, t.eve)
}(this);

/* Map path and default settings - you can edit this */
var simplemaps_countrymap_mapinfo = {
    map_name: "morocco",
    state_bbox_array: {
        'MAR3457': {x: 390, y: 398, x2: 652, y2: 629},
        'MAR1454': {x: 693, y: 84, x2: 903, y2: 274},
        'MAR3456': {x: 408, y: 257, x2: 611, y2: 421},
        'MAR1455': {x: 610, y: 75, x2: 729, y2: 226},
        'MAR3469': {x: 1, y: 634, x2: 478, y2: 941},
        'MAR1457': {x: 408, y: 257, x2: 611, y2: 421},
        'MAR1445': {x: 671, y: -4, x2: 835, y2: 114},
        'MAR1446': {x: 671, y: -4, x2: 835, y2: 114},
        'MAR1447': {x: 671, y: -4, x2: 835, y2: 114},
        'MAR1453': {x: 820, y: 41, x2: 1036, y2: 348},
        'MAR1452': {x: 671, y: -4, x2: 835, y2: 114},
        'MAR1451': {x: 671, y: -4, x2: 835, y2: 114},
        'MAR1450': {x: 671, y: -4, x2: 835, y2: 114},
        'MAR1456': {x: 471, y: 174, x2: 628, y2: 295},
        'MAR1448': {x: 671, y: -4, x2: 835, y2: 114},
        'MAR1449': {x: 671, y: -4, x2: 835, y2: 114},
        'MAR1430': {x: 671, y: -4, x2: 835, y2: 114},
        'MAR3470': {x: -197, y: 917, x2: 218, y2: 1224},
        'MAR3471': {x: 256, y: 525, x2: 482, y2: 745},
        'MAR3472': {x: 557, y: 235, x2: 888, y2: 540},
        'MAR3473': {x: 591, y: 204, x2: 735, y2: 379}
    },
    paths: {
        MAR3457: "m484.27 601.39c0.37325-0.37325 4.0701-2.7516 8.2153-5.2852s17.543-12.279 29.773-21.656c12.23-9.3772 27.683-20.529 34.34-24.782 10.083-6.4416 13.145-7.9002 18.343-8.7374 3.8328-0.61725 9.7589-2.7722 15.361-5.5857l9.1209-4.5808 9.5876 1.5923c17.722 2.9432 23.545 3.1686 26.696 1.0331 1.5335-1.0395 4.5721-2.3576 6.7524-2.9292 4.2174-1.1055 5.2399-2.8336 5.4362-9.1878 0.0743-2.4036-0.53818-3.6449-2.4003-4.865-3.0721-2.0129-3.1246-3.1143-0.29194-6.1295 2.1966-2.3382 2.1983-2.3684 0.32311-5.8505l-1.885-3.5001 4.8893-4.9639c4.9835-5.0596 4.7069-5.9043-1.2302-3.7574-2.9776 1.0767-3.5648 0.97847-5.4563-0.91306l-2.1196-2.1196 4.312-6.9769-2.5068-1.8485c-1.3787-1.0167-2.7806-3.2425-3.1153-4.9463-0.52432-2.6694-0.0822-3.5943 3.1971-6.6881 3.7152-3.5051 3.7624-3.638 1.9885-5.5982-1.0169-1.1237-3.3962-2.1417-5.4031-2.3119-3.0894-0.26193-3.6992-0.74375-4.403-3.4786l-0.81689-3.1746-4.4685 2.4975c-2.4577 1.3736-4.9286 2.2131-5.491 1.8655-0.63157-0.39033-1.0225 0.89737-1.0225 3.3681 0 4.6931-1.396 5.9747-3.9703 3.6449-1.7323-1.5677-2.0892-1.5144-5.8782 0.8775l-4.034 2.5465-5.1388-4.062c-2.8264-2.2341-5.2394-3.9106-5.3622-3.7255-0.12286 0.18511-1.0984 2.3616-2.1679 4.8366s-2.9128 5.4097-4.0961 6.5216c-2.0034 1.8824-2.0585 2.2924-0.79942 5.9547 2.0582 5.9869 0.29932 7.3028-4.5511 3.4049-3.2002-2.5718-4.135-2.8803-5.8867-1.9428-1.7504 0.93678-2.43 0.71457-4.2633-1.3938-1.9015-2.187-2.9268-2.4877-8.0044-2.3478-3.2029 0.0883-6.1356-0.15164-6.5171-0.53316-0.38151-0.38151 0.70402-2.1494 2.4123-3.9287 3.0651-3.1925 3.0839-3.2746 1.4316-6.2501-1.1683-2.1039-2.3001-2.921-3.7453-2.7039-1.7326 0.26032-2.2501-0.47181-3.1677-4.4816-1.2914-5.6432-0.40966-7.2994 3.8859-7.2994 2.1757 0 3.1403-0.62592 3.8528-2.5 0.58192-1.5306 1.7356-2.5 2.9752-2.5 2.5979 0 2.55-0.4448-0.47525-4.4111-1.375-1.8027-2.5-4.4727-2.5-5.9333 0-2.4834-0.29377-2.6556-4.5314-2.6556-5.5939 0-6.4745-1.6364-3.4843-6.4746 1.7735-2.8695 1.8956-3.5254 0.65627-3.5254-2.4237 0-2.9381-1.7895-2.7338-9.5091 0.15703-5.9328-0.1075-7.354-1.4658-7.8752-1.2199-0.46811-1.5516-1.542-1.2568-4.0679l0.40066-3.4319-4.5424 3.3525c-3.6156 2.6684-4.9505 4.5254-6.5424 9.1009-2.7368 7.8661-4.3024 8.6372-10.53 5.1861l-4.9525-2.7447-6.6675 4.081c-5.1624 3.1598-7.2525 3.9278-9.259 3.4026-1.4253-0.3731-6.5065-1.1637-11.292-1.7569-8.6603-1.0736-8.7184-1.0658-12.691 1.6874-4.9638 3.4399-6.5285 2.6815-5.7907-2.8066 0.5172-3.8473-0.84298-7.6182-2.748-7.6182-0.39027 0-2.6748 1.3521-5.0768 3.0047-3.418 2.3516-4.4352 3.71-4.6802 6.25l-0.31301 3.2453-7.4301-0.26765c-4.0865-0.14721-7.691 0.15461-8.01 0.67071-0.31897 0.51611-1.7004 1.2189-3.0699 1.5619-2.1725 0.544-2.806 0.0441-4.9691-3.9207-1.3635-2.4993-2.6587-4.5442-2.8783-4.5442s-2.776 1.3599-5.6812 3.022l-5.282 3.022-5.2669-6.5441-1.7063 2.2852c-0.93846 1.2569-2.3813 3.1874-3.2063 4.29-1.0531 1.4075-2.8309 2.0674-5.967 2.2148-4.2284 0.19878-4.4957 0.0513-5.005-2.7619-0.49747-2.7481-0.74471-2.445-3.283 4.0248-3.3304 8.4887-3.3534 9.045-0.43976 10.665 2.4339 1.3535 8.5276 7.8503 13.024 13.886l2.6851 3.6041-1.9946 9.3959c-3.3278 15.677-3.5446 16.287-10.434 29.344-5.5382 10.497-7.8266 13.734-13.522 19.13-6.7989 6.442-6.8464 6.5239-5.7882 9.9718l1.067 3.4764 2.2774-2.1395c3.4064-3.2002 4.9954-1.8928 5.6725 4.6674 0.78201 7.5769 1.7122 8.3733 6.5826 5.636 4.6786-2.6295 5.897-2.7052 8.3154-0.51666 1.7357 1.5708 2.0287 1.5402 4.7882-0.5 3.4719-2.5669 4.8712-2.7257 5.6702-0.64339 0.35847 0.93417 1.2869 1.3077 2.3845 0.95932 0.98858-0.31376 2.11-0.0648 2.4919 0.55329 0.43244 0.6997 1.402-0.0397 2.5695-1.9593 2.1374-3.5146 1.8586-3.452 8.0725-1.8138 3.4343 0.90543 5.4827 2.2582 7.75 5.1182 1.695 2.1381 3.0818 4.6506 3.0818 5.5833s0.33101 2.0268 0.73557 2.4314c0.40456 0.40456 0.80336 2.0836 0.88622 3.7311 0.0829 1.6476 1.1019 4.008 2.2644 5.2456 2.4597 2.6182 2.9036 9.0718 0.70999 10.321-0.77209 0.43983-1.5596 1.9096-1.75 3.2661-0.26947 1.9197-1.1775 2.6622-4.0962 3.3493-4.2946 1.0111-5.1227 3.8792-1.6558 5.7347 1.3783 0.73763 1.9231 1.7753 1.5936 3.0352-0.38816 1.4843 0.0267 1.9144 1.8467 1.9144 3.4163 0 3.8928 1.5925 1.9771 6.6086-2.1081 5.5201-1.4861 7.3914 2.4569 7.3914 2.7704 0 3.0314 0.28768 3.0314 3.3417 0 3.0323 0.37041 3.4527 4 4.5401 3.684 1.1038 4 1.477 4 4.7253 0 2.8661 1.4519 5.4135 7.75 13.597l7.75 10.071 0.54811-13.602c0.30147-7.4813 0.8535-13.908 1.2268-14.281z",
        MAR1454: "m818.4 270.75c2.2578-2.8801 2.7782-3.1068 4.5724-1.9915 1.6437 1.0216 2.0247 1.0115 2.0247-0.0538 0-0.72177 1.575-2.8389 3.5-4.7046s3.5-4.2336 3.5-5.2619c0-2.5129 1.7064-5.5426 5.1833-9.2031 1.5856-1.6692 4.4053-5.285 6.2662-8.035s5.3722-6.9338 7.803-9.2973l4.4196-4.2973 5.8944 2.2054c6.229 2.3306 6.4373 2.3192 19.934-1.0842 2.2-0.55478 6.0904-1.2582 8.6453-1.5632 3.4298-0.40944 4.7744-1.0484 5.1388-2.442 0.344-1.3154 1.5699-1.9835 4.045-2.2044l3.5513-0.31699-3.8985-5.9152c-7.2684-11.028-14.229-16.585-20.776-16.585-3.1525 0-4.2059-1.3916-4.2059-5.5561 0-1.6174 0.9208-2.8687 2.8421-3.8622 2.6254-1.3576 13.301-11.672 13.936-13.464 0.1528-0.43149-0.3434-0.78453-1.1027-0.78453-1.3543 0-15.062-2.0583-19.358-2.9068-1.2009-0.23715-2.4703-1.3351-2.8209-2.4398-0.6001-1.8908-5.1945-4.9867-7.4003-4.9867-0.5522 0-2.5924 2.0804-4.5339 4.6232-1.9416 2.5427-6.2372 7.5012-9.5459 11.019-3.3086 3.5176-6.0157 6.8372-6.0157 7.3768s1.35 0.98122 3 0.98122c4.3914 0 3.8577 2.5605-1.7124 8.2156-4.6692 4.7405-7.2876 5.9924-7.2876 3.4844 0-2.7966-2.0951-3.5512-5.1297-1.8475-2.814 1.5797-3.0054 1.5577-4.6525-0.53467-0.9448-1.2002-3.0678-2.3252-4.7178-2.5-2.9794-0.31563-2.9985-0.35734-2.7779-6.0814 0.2704-7.0163 1.528-9.579 5.3554-10.913 2.4497-0.85399 2.9225-1.5636 2.9225-4.3862 0-2.3008 0.9318-4.4287 2.9421-6.7182 4.4765-5.0985 7.0579-12.657 7.0579-20.667 0-6.4439-0.192-7.0356-3.0676-9.4553-3.0474-2.5642-5.0174-6.9532-4.1951-9.3466 0.2361-0.6875 1.4944-1.25 2.7961-1.25 2.1781 0 2.3907-0.45585 2.6667-5.7168 0.2885-5.4993 0.4235-5.752 3.5499-6.6447 3.1742-0.90626 3.25-1.0599 3.25-6.5832 0-5.8969 1.1349-8.0553 4.2355-8.0553 2.1142 0 5.7645-7.5208 5.7645-11.877 0-2.4968-0.4708-2.8153-5.9631-4.0337-5.7845-1.2833-6.0969-1.2445-10.428 1.2937-2.8014 1.6417-5.955 2.6166-8.4643 2.6166-3.1295 0-4.4501 0.57308-6.0719 2.6349-1.1399 1.4492-2.0726 3.2117-2.0726 3.9167 0 1.712-1.3435 2.0639-6.1353 1.607-2.9603-0.28232-4.2326-0.94305-4.8534-2.5206-0.7878-2.0017-0.9167-1.9312-2.0227 1.1079-0.8754 2.4053-2.3546 3.7648-5.7121 5.25-5.5884 2.472-6.4861 2.4555-18.276-0.33564-9.2771-2.1962-9.5469-2.3418-11.5-6.2046-1.1-2.1756-2.1037-4.1343-2.2304-4.3527-0.12674-0.21841-3.1737 0.56909-6.771 1.75-3.5973 1.1809-8.3311 2.1471-10.52 2.1471h-3.979v17.971l-6.1122 3.0854c-3.593 1.8137-6.3244 3.897-6.6271 5.0544-0.60576 2.3164-4.3487 4.4396-9.5453 5.4145-2.0435 0.38336-3.7154 1.0087-3.7154 1.3896s1.6121 2.2433 3.5824 4.1387c3.4238 3.2936 3.5538 3.6664 2.9357 8.4212-0.35569 2.7362-1.0984 5.5193-1.6505 6.1845-2.2232 2.6788-9.5036 5.5702-14.026 5.5707-6.0433 6.5e-4 -7.1828-0.77244-6.4606-4.3834 0.49636-2.4818 0.19134-3.0591-2.0705-3.9191-3.6176-1.3754-5.168-0.88922-7.0409 2.208-1.4998 2.4802-1.4638 2.8013 0.60942 5.437 1.2118 1.5406 4.4349 4.3039 7.1624 6.1407s4.959 3.6751 4.959 4.0852c0 0.41008-1.4307 2.4813-3.1794 4.6028l-3.1794 3.8572 6.5764 5.3674-3.1856 6.3107c-2.7907 5.5284-3.1012 6.9244-2.5047 11.262 0.58747 4.2714 0.37914 5.2723-1.5177 7.2914l-2.1986 2.3403 2.3609 1.5469c2.895 1.8968 10.454 4.623 12.819 4.623 3.4176 0 7.0091 3.9007 7.0091 7.6124 0 3.7374 2.8551 10.192 5.4668 12.36 1.2744 1.0577 2.3863 1.1013 5.2977 0.20775 4.9356-1.5148 6.3227-0.13969 3.9788 3.9442-2.4284 4.2312-2.1783 7.6166 0.85667 11.596 2.5132 3.295 2.6653 3.3498 4.5545 1.6401 1.075-0.97281 3.1547-1.7893 4.6216-1.8144 2.2172-0.038 2.937-0.77628 4.2667-4.3762 1.8462-4.9984 3.2445-6.133 7.5847-6.1542 1.7202-8e-3 3.6878-0.69031 4.3724-1.5153 1.672-2.0147 3.5288-1.8886 6.2424 0.424 1.2417 1.0582 3.2867 2.7457 4.5444 3.75 1.76 1.4053 2.3071 2.896 2.3747 6.4697 0.048 2.554-0.2019 5.1127-0.5562 5.6858-0.3918 0.63395 1.121 1.3068 3.8625 1.7179 4.0884 0.61309 6.6612 0.35915 11.785-1.1632 2.7766-0.825 13.691 11.704 18.631 21.389 2.8178 5.5232 6.6739 5.8813 10.519 0.97691z",
        MAR3456: "m419.48 417.35c1.1087-1.7345 3.3278-3.9415 4.9315-4.9044 2.8348-1.7023 2.9644-1.6907 4.6711 0.41696 0.96547 1.1923 1.9332 2.7014 2.1506 3.3535 0.26066 0.78198 2.3118 0.10406 6.024-1.9909l5.6287-3.1766 2.0549 2.6124c1.1302 1.4368 2.0618 2.8892 2.0702 3.2276 8e-3 0.33833 0.40531 1.2308 0.88197 1.9832 0.69777 1.1015 1.2924 0.94227 3.0516-0.81691 1.6114-1.6114 2.522-1.9052 3.4689-1.1193 0.70619 0.58608 3.3283 1.3458 5.827 1.6883 4.411 0.6046 4.5619 0.53668 5.1932-2.3379 0.48842-2.2238 2.2926-4.0482 7.2496-7.3309l6.5993-4.3703 2.8566 3.4217c1.6706 2.0012 2.8566 4.6026 2.8566 6.2662 0 2.7355 0.0847 2.7851 2.2116 1.2954 1.7312-1.2125 3.958-1.4326 10.25-1.0131 4.4211 0.29481 9.6543 1.0148 11.629 1.6 3.3266 0.98561 4.0889 0.76149 10.352-3.0436 3.7187-2.2592 7.2858-4.1076 7.9269-4.1076s2.8212 1.125 4.8447 2.5c4.7703 3.2415 5.4848 3.1568 6.3262-0.75 0.38494-1.7875 1.2938-4.4131 2.0197-5.8347 2.0018-3.9204 12.241-11.157 17.843-12.61 2.7186-0.70521 5.901-2.1822 7.0718-3.2821 1.1709-1.1 4.5394-2.4571 7.4856-3.0158 3.2084-0.60847 5.8807-1.7639 6.6632-2.8811 0.87568-1.2502 2.9555-2.0236 6.308-2.3458 6.0332-0.57971 8.0679-2.0747 8.0679-5.9278 0-2.1343 0.62799-3.1411 2.3733-3.8046 1.3053-0.49628 2.6534-2.0183 2.9957-3.3824 0.34235-1.364 0.89751-3.1968 1.2337-4.0729 0.45974-1.1981-0.0147-1.5929-1.9142-1.5929-1.795 0-3.1352-0.98666-4.6339-3.4116-1.1596-1.8764-3.4464-3.8779-5.0816-4.448-4.092-1.4265-3.7412-3.6814 1.4979-9.6281l4.3942-4.9876 2.3877 2.2431c2.0416 1.918 3.0718 2.1493 7.1079 1.5961 6.2738-0.85991 8.125-3.76 4.3412-6.8005-2.2272-1.7898-2.4675-2.5278-1.8108-5.5635 0.62567-2.8925 0.34146-4.0052-1.6374-6.4103-2.2109-2.6872-2.3425-3.4643-1.7172-10.137 0.37248-3.9749 0.3753-8.9653 6e-3 -11.09-0.63886-3.6778-1.0148-4.0062-7.8569-6.8627-5.4623-2.2804-7.5466-3.7211-8.6896-6.0063l-1.5036-3.0063-4.9964 1.1603c-2.748 0.63816-5.722 1.2035-6.6089 1.2563-3.1165 0.18554-9.3267-5.883-11.958-11.685-2.4528-5.4087-2.819-5.7394-8-7.225-5.1066-1.4642-5.6182-1.9102-8.6017-7.4994-3.9398-7.381-5.3275-8.0079-5.3275-2.4065 0 2.5313-0.66096 4.9849-1.6318 6.0577-1.5091 1.6675-1.5091 1.9904 0 4.2936 1.7351 2.6481 2.1657 5.5608 0.82203 5.5608-0.44537 0-3.1682 2.0131-6.0508 4.4736s-7.4614 5.4922-10.175 6.7372c-3.3719 1.5469-5.2291 3.1099-5.866 4.9368-0.78882 2.2628-1.7508 2.8079-6.2651 3.5503-3.3488 0.55067-6.352 0.5041-8.0712-0.12516-3.1388-1.1489-6.1835-6.6698-5.2683-9.5531 0.34584-1.0896-0.12861-3.059-1.0907-4.5274-1.6051-2.4498-2.024-2.5594-7.3029-1.9116-3.0801 0.37793-6.5192 1.0302-7.6425 1.4495-2.5047 0.93498-5.0152-0.35295-10.371-5.3205-4.4806-4.1558-5.1064-6.856-2.1715-9.369 1.5558-1.3322 1.6983-1.9869 0.75945-3.4902-1.6556-2.6511-2.2103-2.3856-5.7432 2.7493-1.8296 2.6592-4.5921 5.1962-6.548 6.0134-3.6336 1.5182-4.2883 3.3908-1.8833 5.3868 2.2027 1.8281 1.864 3.6106-1.6593 8.7316l-3.1593 4.5919 2.1593 1.7485c2.4888 2.0153 2.6716 3.6679 0.6944 6.2776-1.0824 1.4287-1.1504 2.4003-0.29912 4.2688 0.94493 2.0739 0.72975 2.8088-1.5079 5.1503-1.4356 1.5022-3.4795 4.6772-4.5422 7.0556-1.0626 2.3784-4.4325 6.8784-7.4887 10s-8.2883 8.6388-11.627 12.26c-5.8099 6.3025-6.0703 6.8087-6.0703 11.802 0 5.0967-0.16452 5.3911-7.1178 12.737l-7.1178 7.5201 5.3939 5.63-2.6173 8.2852c-2.3229 7.3533-2.5405 9.25-1.9342 16.863 0.48032 6.0318 1.2336 9.2854 2.5382 10.962 1.0203 1.3117 1.8551 3.9305 1.8551 5.8196 0 2.9834 0.29355 3.3927 2.2343 3.1151 1.2288-0.17575 3.1413-1.7387 4.25-3.4731z",
        MAR1455: "m652.22 223.34 3.832-2.6555-4.3301-4.6092 2.6368-5.3895c1.4503-2.9642 2.6369-6.0462 2.6369-6.8487s0.5625-2.2198 1.25-3.1494c1.171-1.5834 1.661-1.573 7.75 0.16375 5.7358 1.636 6.4886 2.1356 6.4027 4.2491-0.0535 1.3173-0.46501 3.25-0.91443 4.2948-0.71659 1.666-0.49307 1.8183 1.8168 1.2386 2.5142-0.63103 3.4158 0.10948 6.2363 5.1224 0.0807 0.14337 2.1294-0.44921 4.5527-1.3168 2.6981-0.96603 5.8596-1.3532 8.156-0.99886 4.3945 0.67812 4.7245-0.4316 2.2302-7.5012-1.5122-4.2861-1.5051-4.323 1.422-7.3757 2.6159-2.7282 2.8829-3.5748 2.4096-7.6419-0.40163-3.4518-0.0145-5.5886 1.578-8.7102 2.7236-5.3388 2.6585-6.8106-0.3898-8.808-3.1726-2.0787-3.1506-3.8662 0.0997-8.1276l2.5997-3.4084-6.0997-5.5199c-7.0838-6.4104-7.4614-8.1723-3.0549-14.255 3.2576-4.497 3.3972-4.5169 10.705-1.5281 2.6661 1.0904 3.25 1.8774 3.25 4.3802 0 2.7258 0.32093 3.051 3.0109 3.051 1.656 0 4.9863-0.92853 7.4006-2.0634 3.6435-1.7127 4.5019-2.6614 5.0497-5.5815 0.60018-3.1992 0.24015-3.967-3.9726-8.4707-2.5479-2.7239-4.4511-5.4998-4.2292-6.1685 0.22185-0.66874 3.1543-1.9614 6.5165-2.8726 3.3622-0.91118 6.5881-1.9502 7.1686-2.309 1.9932-1.2319 1.0398-4.036-1.9509-5.7378-2.2548-1.2831-2.9937-2.4257-2.9937-4.6298 0-2.3769-1.0321-3.7056-5.4973-7.0769-6.8474-5.1698-7.8665-5.5613-9.465-3.6353-1.8272 2.2016-3.755 1.9192-6.648-0.97377-2.308-2.308-2.5003-3.1676-2.2936-10.249l0.2257-7.7298-5.3698-0.77279c-2.9534-0.42503-6.4612-1.4879-7.7952-2.362-1.5095-0.98906-5.05-1.6749-9.3756-1.8162l-6.9503-0.22699-5.4554 11.588c-11.813 25.093-14.641 30.547-29.336 56.588-6.4409 11.414-8.6253 14.253-13.851 18-3.0679 2.2-7.0808 5.2976-8.9175 6.8836-3.012 2.6007-3.1924 3.0461-1.8398 4.5408 0.8249 0.91151 1.986 4.1139 2.5803 7.1164 2.1963 11.097 1.6861 10.238 5.6427 9.4961 2.9251-0.54875 3.8245-0.29804 5.0118 1.3971 0.94315 1.3465 2.5589 2.0712 4.6403 2.0812 5.6003 0.0269 6.433 1.3262 3.399 5.3039-2.2956 3.0097-2.4548 3.6442-1.1797 4.7024 1.8558 1.5402 1.8344 3.9178-0.0578 6.4195-0.80751 1.0676-1.4682 3.8359-1.4682 6.1518v4.2107l5.8323 0.67691c3.9288 0.45598 6.7846 1.4554 8.75 3.0622 3.6904 3.017 4.0131 3.0096 8.6421-0.1983z",
        MAR3469: "m193.42 938.78c8.0454-2.0338 16.423-1.9326 22.212 0.26807 1.7422 0.6624 2.5713 0.57347 2.8919-0.31021 0.24724-0.68134 0.92437-11.589 1.5047-24.239 2.4121-52.576 2.9113-63.619 3.4354-76 0.90237-21.318 1.2633-23.393 4.1981-24.129 1.3835-0.34724 8.6637-0.2921 16.178 0.12253 7.5145 0.41463 16.813 0.921 20.663 1.1253s14.425 0.77155 23.5 1.2606 24.825 1.196 35 1.571c10.175 0.37498 21.65 0.8613 25.5 1.0807 3.85 0.21941 11.05 0.63264 16 0.9183s20.334 0.99969 34.187 1.5867 28.478 1.258 32.5 1.4909c15.743 0.91177 44.321 2.2818 44.465 2.1317 0.0838-0.0871 0.44372-11.6 0.79992-25.585 0.35621-13.984 0.82515-25.713 1.0421-26.064 0.21694-0.35103 0.47663-6.0092 0.57708-12.574 0.18166-11.872 0.16993-11.937-2.1944-12.248-1.3074-0.17163-5.4683-1.7466-9.2465-3.5l-6.8695-3.1879-11.256-17.97c-6.1911-9.8838-11.907-18.381-12.702-18.883-1.0249-0.6465-2.1893-0.1688-3.9985 1.6404-4.1898 4.1898-10.484 4.5617-19.024 1.1241-9.0811-3.6558-10.371-4.7404-15.78-13.267-2.475-3.9015-4.991-7.1052-5.5911-7.1193-0.60009-0.0141-3.1828 0.60394-5.7394 1.3734-4.5286 1.3629-4.7477 1.327-8.5034-1.3936-2.1203-1.5359-5.8375-4.8886-8.2606-7.4504-5.3601-5.667-9.8571-7.0384-17.821-5.4348-3.8805 0.78136-6.4319 0.78516-9 0.0134-1.9713-0.5924-11.234-1.2474-20.584-1.4555-15.661-0.34859-17.284-0.21787-20.604 1.6603l-3.6045 2.0386-6.412-3.1885c-5.5126-2.7412-7.4764-3.1885-14-3.1885h-7.5885l-4.145-8.9214c-2.2798-4.9067-4.145-9.3794-4.145-9.9392s-1.7348-3.0223-3.8552-5.4721c-2.537-2.9313-4.0797-5.8584-4.5118-8.5608-0.74506-4.6593-0.80232-4.6807-6.7573-2.5158-4.9775 1.8095-19.402 6.0758-25.376 7.5054-2.2 0.52646-4.675 1.2297-5.5 1.5628-0.825 0.33305-2.4 0.7364-3.5 0.89632-1.1 0.15993-6.725 1.0506-12.5 1.9792-12.23 1.9666-12.559 2.0109-24.905 3.3535-5.173 0.56255-9.7484 1.3804-10.168 1.8175-0.41926 0.43704-2.2044 3.4946-3.9671 6.7946-5.2025 9.7402-5.5892 10.169-10.215 11.334l-4.3859 1.1044-2.7734 10.281c-5.4143 20.071-6.0028 21.395-11.898 26.783-4.8247 4.4095-5.4846 5.4941-5.9198 9.7302-0.34627 3.3703-1.8494 6.952-5.1289 12.221-2.5515 4.0997-4.6391 7.8406-4.6391 8.313 0 0.47244-1.3589 3.6765-3.0197 7.1202-2.1539 4.466-3.9459 6.7355-6.25 7.9154-1.7767 0.9098-5.2553 3.414-7.7303 5.5649s-9.6006 6.4883-15.835 9.6387c-9.283 4.6912-11.952 5.6278-14.747 5.1743-2.9428-0.47754-3.4906-0.24098-3.9827 1.7198-0.31385 1.2504-2.8405 3.9681-5.6147 6.0393-4.0142 2.9969-5.6339 3.6478-7.933 3.188-7.0311-1.4062-10.888 3.4134-10.888 13.605 0 5.3375-0.56041 7.3878-3.5669 13.05-1.9618 3.6945-3.8743 6.7322-4.25 6.7506-2.3692 0.11539-5.3553 4.2839-5.6077 7.8284-0.1537 2.1579-1.1913 5.4344-2.3057 7.2809-1.1145 1.8466-2.334 5.0853-2.7101 7.1972-0.42363 2.3787-2.1183 5.4228-4.4538 8-4.176 4.6083-7.1058 11.094-7.1058 15.73 0 1.6662-0.69035 4.3644-1.5341 5.9961-1.3529 2.6163-1.3639 3.4679-0.0931 7.2112 1.7935 5.2826 0.636 12.905-3.071 20.223-3.227 6.3703-3.8857 13.557-1.5114 16.489 1.6891 2.086 5.2096 1.9942 5.2096-0.13588 0-0.52756 0.54276-0.48765 1.25 0.0919 0.6875 0.56339 2.6972 2.1833 4.466 3.5997 2.0387 1.6326 3.4528 3.8377 3.8629 6.0238 0.35581 1.8966 1.5266 4.5668 2.6019 5.9337l1.9549 2.4853 4.576-3.494c5.2292-3.9928 5.505-4.0533 8.7565-1.9229 1.9167 1.2559 2.8349 1.3371 4.5769 0.40485 1.1985-0.64143 3.3557-0.94131 4.7938-0.66641 1.5472 0.29578 4.2449-0.33187 6.6081-1.5375 3.6178-1.8457 4.4666-1.9186 9.0233-0.77583 2.7664 0.69381 5.4799 1.5797 6.0299 1.9687s7.4974 2.878 15.439 5.5312c14.38 4.8043 14.451 4.8167 17.5 3.0366 1.6838-0.9831 4.5526-2.6386 6.3752-3.6788s4.3335-2.5595 5.5798-3.3761c1.2463-0.81661 2.4894-1.2614 2.7625-0.98831 0.27304 0.27305 2.9371 0.99196 5.9202 1.5976 2.983 0.60562 6.5487 1.3384 7.9237 1.6284s7.45 0.84664 13.5 1.2369c10.778 0.69528 15.279 1.8257 31.5 7.9096 6.0068 2.253 7.5518 2.1712 20.417-1.081z",
        MAR1457: "m419.48 417.35c1.1087-1.7345 3.3278-3.9415 4.9315-4.9044 2.8348-1.7023 2.9644-1.6907 4.6711 0.41696 0.96547 1.1923 1.9332 2.7014 2.1506 3.3535 0.26066 0.78198 2.3118 0.10406 6.024-1.9909l5.6287-3.1766 2.0549 2.6124c1.1302 1.4368 2.0618 2.8892 2.0702 3.2276 8e-3 0.33833 0.40531 1.2308 0.88197 1.9832 0.69777 1.1015 1.2924 0.94227 3.0516-0.81691 1.6114-1.6114 2.522-1.9052 3.4689-1.1193 0.70619 0.58608 3.3283 1.3458 5.827 1.6883 4.411 0.6046 4.5619 0.53668 5.1932-2.3379 0.48842-2.2238 2.2926-4.0482 7.2496-7.3309l6.5993-4.3703 2.8566 3.4217c1.6706 2.0012 2.8566 4.6026 2.8566 6.2662 0 2.7355 0.0847 2.7851 2.2116 1.2954 1.7312-1.2125 3.958-1.4326 10.25-1.0131 4.4211 0.29481 9.6543 1.0148 11.629 1.6 3.3266 0.98561 4.0889 0.76149 10.352-3.0436 3.7187-2.2592 7.2858-4.1076 7.9269-4.1076s2.8212 1.125 4.8447 2.5c4.7703 3.2415 5.4848 3.1568 6.3262-0.75 0.38494-1.7875 1.2938-4.4131 2.0197-5.8347 2.0018-3.9204 12.241-11.157 17.843-12.61 2.7186-0.70521 5.901-2.1822 7.0718-3.2821 1.1709-1.1 4.5394-2.4571 7.4856-3.0158 3.2084-0.60847 5.8807-1.7639 6.6632-2.8811 0.87568-1.2502 2.9555-2.0236 6.308-2.3458 6.0332-0.57971 8.0679-2.0747 8.0679-5.9278 0-2.1343 0.62799-3.1411 2.3733-3.8046 1.3053-0.49628 2.6534-2.0183 2.9957-3.3824 0.34235-1.364 0.89751-3.1968 1.2337-4.0729 0.45974-1.1981-0.0147-1.5929-1.9142-1.5929-1.795 0-3.1352-0.98666-4.6339-3.4116-1.1596-1.8764-3.4464-3.8779-5.0816-4.448-4.092-1.4265-3.7412-3.6814 1.4979-9.6281l4.3942-4.9876 2.3877 2.2431c2.0416 1.918 3.0718 2.1493 7.1079 1.5961 6.2738-0.85991 8.125-3.76 4.3412-6.8005-2.2272-1.7898-2.4675-2.5278-1.8108-5.5635 0.62567-2.8925 0.34146-4.0052-1.6374-6.4103-2.2109-2.6872-2.3425-3.4643-1.7172-10.137 0.37248-3.9749 0.3753-8.9653 6e-3 -11.09-0.63886-3.6778-1.0148-4.0062-7.8569-6.8627-5.4623-2.2804-7.5466-3.7211-8.6896-6.0063l-1.5036-3.0063-4.9964 1.1603c-2.748 0.63816-5.722 1.2035-6.6089 1.2563-3.1165 0.18554-9.3267-5.883-11.958-11.685-2.4528-5.4087-2.819-5.7394-8-7.225-5.1066-1.4642-5.6182-1.9102-8.6017-7.4994-3.9398-7.381-5.3275-8.0079-5.3275-2.4065 0 2.5313-0.66096 4.9849-1.6318 6.0577-1.5091 1.6675-1.5091 1.9904 0 4.2936 1.7351 2.6481 2.1657 5.5608 0.82203 5.5608-0.44537 0-3.1682 2.0131-6.0508 4.4736s-7.4614 5.4922-10.175 6.7372c-3.3719 1.5469-5.2291 3.1099-5.866 4.9368-0.78882 2.2628-1.7508 2.8079-6.2651 3.5503-3.3488 0.55067-6.352 0.5041-8.0712-0.12516-3.1388-1.1489-6.1835-6.6698-5.2683-9.5531 0.34584-1.0896-0.12861-3.059-1.0907-4.5274-1.6051-2.4498-2.024-2.5594-7.3029-1.9116-3.0801 0.37793-6.5192 1.0302-7.6425 1.4495-2.5047 0.93498-5.0152-0.35295-10.371-5.3205-4.4806-4.1558-5.1064-6.856-2.1715-9.369 1.5558-1.3322 1.6983-1.9869 0.75945-3.4902-1.6556-2.6511-2.2103-2.3856-5.7432 2.7493-1.8296 2.6592-4.5921 5.1962-6.548 6.0134-3.6336 1.5182-4.2883 3.3908-1.8833 5.3868 2.2027 1.8281 1.864 3.6106-1.6593 8.7316l-3.1593 4.5919 2.1593 1.7485c2.4888 2.0153 2.6716 3.6679 0.6944 6.2776-1.0824 1.4287-1.1504 2.4003-0.29912 4.2688 0.94493 2.0739 0.72975 2.8088-1.5079 5.1503-1.4356 1.5022-3.4795 4.6772-4.5422 7.0556-1.0626 2.3784-4.4325 6.8784-7.4887 10s-8.2883 8.6388-11.627 12.26c-5.8099 6.3025-6.0703 6.8087-6.0703 11.802 0 5.0967-0.16452 5.3911-7.1178 12.737l-7.1178 7.5201 5.3939 5.63-2.6173 8.2852c-2.3229 7.3533-2.5405 9.25-1.9342 16.863 0.48032 6.0318 1.2336 9.2854 2.5382 10.962 1.0203 1.3117 1.8551 3.9305 1.8551 5.8196 0 2.9834 0.29355 3.3927 2.2343 3.1151 1.2288-0.17575 3.1413-1.7387 4.25-3.4731z",
        MAR1445: "m736.7 112.33 3.8656-1.6747-0.0737-8.0753c-0.0405-4.4414 0.22737-9.2003 0.59529-10.575 0.64173-2.3982 0.94555-2.4872 7.465-2.1854 5.5919 0.25889 7.8336-0.14585 12.652-2.2843 6.8177-3.0257 7.886-2.5972 9.4993 3.8098l1.0777 4.2796 6.7834 1.2742c3.7309 0.70079 8.2888 1.7354 10.129 2.2991 5.0846 1.5578 10.241-1.1323 12.981-6.7724 2.4222-4.9856 4.3183-5.5934 5.9917-1.9206 1.7163 3.7667 5.5032 3.3343 8.1383-0.92929 2.4406-3.949 3.4159-4.4536 7.5437-3.9029 1.9107 0.25489 4.4524-0.43823 7-1.9089 4.7062-2.7168 5.0068-4.0132 4.016-17.322-0.6549-8.7975-0.7752-9.1434-4.1043-11.8l-3.4296-2.7366-12.212 4.6465c-11.748 4.4697-12.489 4.6206-19.48 3.9655-4.4463-0.41665-12.187-2.375-19.939-5.0446l-12.671-4.3636-11.098-11.302c-18.355-18.692-22.07-24.314-21.37-32.336 0.23854-2.7313 0.74845-5.6539 1.1331-6.4947 0.38469-0.84078 0.0676-2.3928-0.7047-3.449-1.2992-1.7768-1.719-1.8164-5.6172-0.52985-2.581 0.8518-5.2193 2.7097-6.8106 4.796-2.3963 3.1417-2.9046 3.3564-6.5616 2.7717-3.4052-0.54452-4.357-0.25747-6.7508 2.0359-2.6643 2.5525-2.9934 2.6178-7.4915 1.4852-2.6058-0.65616-5.0864-0.80311-5.5601-0.32939-0.47041 0.47041-1.495 3.3062-2.2769 6.3017-4.3682 16.736-5.9046 21.881-7.7476 25.946-1.1221 2.475-2.6126 6.525-3.3122 9s-2.6759 8.2986-4.3918 12.941c-1.7158 4.6428-3.1197 8.7392-3.1197 9.1033 0 0.36402 3.4412 0.95275 7.6472 1.3083 4.2059 0.35553 8.3017 1.1897 9.1018 1.8536 0.80004 0.66398 4.6713 1.7018 8.6028 2.3062 6.2131 0.95521 7.11 1.3533 6.856 3.0431-1.4297 9.5122-1.3608 15.072 0.20296 16.37 1.4187 1.1774 1.9567 1.0783 3.8686-0.71262l2.2207-2.0802 8.25 6.097c7.329 5.4164 8.25 6.4524 8.25 9.2806 0 2.3134 0.61506 3.4802 2.25 4.2688 3.1348 1.5119 4.1926 1.456 8.6018-0.45419z",
        MAR1446: "m736.7 112.33 3.8656-1.6747-0.0737-8.0753c-0.0405-4.4414 0.22737-9.2003 0.59529-10.575 0.64173-2.3982 0.94555-2.4872 7.465-2.1854 5.5919 0.25889 7.8336-0.14585 12.652-2.2843 6.8177-3.0257 7.886-2.5972 9.4993 3.8098l1.0777 4.2796 6.7834 1.2742c3.7309 0.70079 8.2888 1.7354 10.129 2.2991 5.0846 1.5578 10.241-1.1323 12.981-6.7724 2.4222-4.9856 4.3183-5.5934 5.9917-1.9206 1.7163 3.7667 5.5032 3.3343 8.1383-0.92929 2.4406-3.949 3.4159-4.4536 7.5437-3.9029 1.9107 0.25489 4.4524-0.43823 7-1.9089 4.7062-2.7168 5.0068-4.0132 4.016-17.322-0.6549-8.7975-0.7752-9.1434-4.1043-11.8l-3.4296-2.7366-12.212 4.6465c-11.748 4.4697-12.489 4.6206-19.48 3.9655-4.4463-0.41665-12.187-2.375-19.939-5.0446l-12.671-4.3636-11.098-11.302c-18.355-18.692-22.07-24.314-21.37-32.336 0.23854-2.7313 0.74845-5.6539 1.1331-6.4947 0.38469-0.84078 0.0676-2.3928-0.7047-3.449-1.2992-1.7768-1.719-1.8164-5.6172-0.52985-2.581 0.8518-5.2193 2.7097-6.8106 4.796-2.3963 3.1417-2.9046 3.3564-6.5616 2.7717-3.4052-0.54452-4.357-0.25747-6.7508 2.0359-2.6643 2.5525-2.9934 2.6178-7.4915 1.4852-2.6058-0.65616-5.0864-0.80311-5.5601-0.32939-0.47041 0.47041-1.495 3.3062-2.2769 6.3017-4.3682 16.736-5.9046 21.881-7.7476 25.946-1.1221 2.475-2.6126 6.525-3.3122 9s-2.6759 8.2986-4.3918 12.941c-1.7158 4.6428-3.1197 8.7392-3.1197 9.1033 0 0.36402 3.4412 0.95275 7.6472 1.3083 4.2059 0.35553 8.3017 1.1897 9.1018 1.8536 0.80004 0.66398 4.6713 1.7018 8.6028 2.3062 6.2131 0.95521 7.11 1.3533 6.856 3.0431-1.4297 9.5122-1.3608 15.072 0.20296 16.37 1.4187 1.1774 1.9567 1.0783 3.8686-0.71262l2.2207-2.0802 8.25 6.097c7.329 5.4164 8.25 6.4524 8.25 9.2806 0 2.3134 0.61506 3.4802 2.25 4.2688 3.1348 1.5119 4.1926 1.456 8.6018-0.45419z",
        MAR1447: "m736.7 112.33 3.8656-1.6747-0.0737-8.0753c-0.0405-4.4414 0.22737-9.2003 0.59529-10.575 0.64173-2.3982 0.94555-2.4872 7.465-2.1854 5.5919 0.25889 7.8336-0.14585 12.652-2.2843 6.8177-3.0257 7.886-2.5972 9.4993 3.8098l1.0777 4.2796 6.7834 1.2742c3.7309 0.70079 8.2888 1.7354 10.129 2.2991 5.0846 1.5578 10.241-1.1323 12.981-6.7724 2.4222-4.9856 4.3183-5.5934 5.9917-1.9206 1.7163 3.7667 5.5032 3.3343 8.1383-0.92929 2.4406-3.949 3.4159-4.4536 7.5437-3.9029 1.9107 0.25489 4.4524-0.43823 7-1.9089 4.7062-2.7168 5.0068-4.0132 4.016-17.322-0.6549-8.7975-0.7752-9.1434-4.1043-11.8l-3.4296-2.7366-12.212 4.6465c-11.748 4.4697-12.489 4.6206-19.48 3.9655-4.4463-0.41665-12.187-2.375-19.939-5.0446l-12.671-4.3636-11.098-11.302c-18.355-18.692-22.07-24.314-21.37-32.336 0.23854-2.7313 0.74845-5.6539 1.1331-6.4947 0.38469-0.84078 0.0676-2.3928-0.7047-3.449-1.2992-1.7768-1.719-1.8164-5.6172-0.52985-2.581 0.8518-5.2193 2.7097-6.8106 4.796-2.3963 3.1417-2.9046 3.3564-6.5616 2.7717-3.4052-0.54452-4.357-0.25747-6.7508 2.0359-2.6643 2.5525-2.9934 2.6178-7.4915 1.4852-2.6058-0.65616-5.0864-0.80311-5.5601-0.32939-0.47041 0.47041-1.495 3.3062-2.2769 6.3017-4.3682 16.736-5.9046 21.881-7.7476 25.946-1.1221 2.475-2.6126 6.525-3.3122 9s-2.6759 8.2986-4.3918 12.941c-1.7158 4.6428-3.1197 8.7392-3.1197 9.1033 0 0.36402 3.4412 0.95275 7.6472 1.3083 4.2059 0.35553 8.3017 1.1897 9.1018 1.8536 0.80004 0.66398 4.6713 1.7018 8.6028 2.3062 6.2131 0.95521 7.11 1.3533 6.856 3.0431-1.4297 9.5122-1.3608 15.072 0.20296 16.37 1.4187 1.1774 1.9567 1.0783 3.8686-0.71262l2.2207-2.0802 8.25 6.097c7.329 5.4164 8.25 6.4524 8.25 9.2806 0 2.3134 0.61506 3.4802 2.25 4.2688 3.1348 1.5119 4.1926 1.456 8.6018-0.45419z",
        MAR1453: "m895.8 345.91c6.0733-0.84644 9.0621-1.7807 10.983-3.4332 2.5882-2.2263 2.608-2.3361 1.0203-5.6655-1.4219-2.9818-1.4455-3.7264-0.194-6.115 1.3371-2.5519 1.2579-2.8637-1.2832-5.0494l-2.7082-2.3295 5.8004-4.285c5.6796-4.1958 5.9238-4.2721 11.723-3.666 4.9294 0.51522 6.3741 0.29126 8.6184-1.3362 1.483-1.0753 4.7214-2.4004 7.1964-2.9447 4.4401-0.97637 4.5582-0.93357 8.8729 3.2148 2.7633 2.6569 4.5424 3.7443 4.8333 2.9544 0.2697-0.73208 2.2239-1.25 4.7166-1.25 3.545 0 4.4425-0.40891 5.3711-2.4471 0.6133-1.3459 2.2706-3.2043 3.683-4.1297 2.3926-1.5677 3.0278-1.5711 9.2956-0.0503 4.5743 1.1099 11.208 1.634 20.728 1.6374 11.104 4e-3 15.345 0.41566 20.5 1.9898 8.0241 2.4501 10.178 2.4865 12.978 0.2192l2.1992-1.7808-2.5884-4.8681c-1.7273-3.2486-2.5884-6.4324-2.5884-9.57 0-4.1034 0.7-5.6775 5.5-12.367 3.025-4.216 5.4883-7.9956 5.4739-8.3992-0.014-0.40358-4.9034-4.2213-10.865-8.4838-8.5394-6.1061-11.577-7.75-14.319-7.75-4.0139 0-5.2605-1.1791-9.7571-9.2286l-3.2-5.7286 2.0833-2.9258c3.0327-4.259 2.6365-7.194-1.5081-11.171-4.0609-3.8966-10.408-15.666-10.408-19.299 0-1.3216 0.6934-4.0625 1.541-6.091 2.0765-4.9697 1.0904-13.816-2.0872-18.725-3.118-4.8168-3.8851-8.1566-2.4774-10.787 0.8484-1.5854 0.8583-3.0149 0.038-5.5002-0.8547-2.5897-0.7543-5.3984 0.4389-12.275 1.5352-8.8487 1.5279-8.9734-0.9532-16.268-1.3751-4.0431-2.5002-9.0025-2.5002-11.021 0-2.3841-0.6918-4.2959-1.9745-5.4567-3.2484-2.9397-3.3823-5.1888-0.5314-8.9264 2.0639-2.7059 2.3351-3.6101 1.2793-4.2653-1.9966-1.2389-7.7734-9.5127-7.7734-11.133 0-0.77438 1.3439-3.3992 2.9864-5.8329l2.9863-4.425-2.5514-0.97006c-1.4032-0.53354-3.0492-0.97007-3.6576-0.97007-1.4891 0-4.7636-3.0368-4.7636-4.4179 0-0.60934-1.0125-1.5521-2.25-2.095s-2.384-1.9246-2.5477-3.0705c-0.2232-1.562-1.0211-2.0833-3.1884-2.0833-4.1187 0-14.014-7.6025-14.014-10.767 0-2.6327-4.5049-5.8563-9.5253-6.816-2.3774-0.45447-3.6628 0.0903-6.7106 2.8437-4.0442 3.6537-7.4697 4.2785-12.449 2.2708-1.5483-0.62432-5.7401-1.0641-9.3151-0.97728l-6.5 0.15785-2.6704-4.2727c-1.4688-2.35-3.1963-7.1967-3.8389-10.77-1.6671-9.2701-2.3469-9.9767-4.4074-4.5813-1.3438 3.5188-2.2575 4.579-3.946 4.579-1.2084 0-3.648 1.5381-5.4211 3.418-2.3035 2.4422-4.6643 3.7269-8.2693 4.5-8.0652 1.7297-10.982 1.2761-18.935-2.9443-4.1183-2.1855-8.2196-3.9737-9.114-3.9737-0.8945 0-2.8125 1.7117-4.2623 3.8038-2.4601 3.5499-2.636 4.5424-2.636 14.87v11.066l4.75 1.1937c2.6125 0.65654 6.1 1.5171 7.75 1.9124 2.7479 0.65834 3.0257 1.117 3.3057 5.4581 0.2472 3.8322-0.3234 5.8836-2.9808 10.718-2.0431 3.7163-3.9379 5.9782-5.008 5.9782-1.4132 0-1.7748 1.1191-2.0192 6.25-0.2895 6.0776-0.3861 6.276-3.505 7.1948-3.1038 0.91427-3.2168 1.1404-3.5 7-0.2617 5.4132-0.5313 6.0891-2.5427 6.3748-3.1561 0.44824-2.8136 1.6488 1.3838 4.8503l3.6337 2.7716-0.5573 9.0293c-0.5942 9.6276-2.9358 16.56-7.4024 21.915-1.7861 2.1413-2.2506 3.5981-1.8006 5.647 0.5315 2.4201 0.043 3.1657-3.9504 6.0338-2.5062 1.7999-4.5568 3.59-4.5568 3.978s-0.2812 2.1117-0.625 3.8305c-0.5276 2.6382-0.3237 3.125 1.3089 3.125 1.0636 0 2.8073 0.64436 3.875 1.4319 1.7439 1.2864 2.2165 1.1697 4.6518-1.1495l2.7108-2.5814 1.7892 3.1431c2.1092 3.7052 2.4153 3.779 4.7893 1.1558 1.7673-1.9528 1.7466-2-0.8764-2-1.4775 0-2.9319-0.63984-3.232-1.4219-0.8168-2.1287 1.0873-5.0359 8.6177-13.157 3.7499-4.0442 8.2831-9.3933 10.074-11.887 1.7908-2.4936 3.9521-4.5338 4.803-4.5338 3.379 0 9.9246 3.289 10.928 5.4911 0.7771 1.7055 2.1833 2.476 5.3694 2.9421 17.09 2.5002 19.817 3.3652 19.817 6.2859 0 1.8526-11.338 14.34-14.584 16.063-3.6081 1.9147-3.0244 3.8711 1.2026 4.03 5.015 0.18854 10.867 4.933 18.115 14.688 9.2915 12.504 9.8582 13.512 8.1872 14.57-0.7815 0.49464-3.3334 0.90624-5.6709 0.91466-3.5782 0.0129-4.25 0.33144-4.25 2.0153 0 1.7909-0.6667 2-6.3779 2-3.5459 0-8.0541 0.70037-10.153 1.5773-7.3585 3.0746-14.108 3.5519-19.775 1.3985l-5.1275-1.9483-3.3687 3.2362c-1.8528 1.7799-4.0728 4.5862-4.9334 6.2362-0.8605 1.65-3.737 5.441-6.3922 8.4245-2.6909 3.0236-5.5159 7.4967-6.3827 10.106-0.8553 2.575-2.6654 5.725-4.0225 6.9998-3.1804 2.9879-3.1358 6.6622 0.1223 10.063 2.2384 2.3363 2.4278 3.0053 1.3968 4.9319-1.2918 2.4138-1.5768 2.0481 4.706 6.0388 2.4046 1.5273 3.5768 3.35 4.75 7.3857 0.8567 2.9469 1.5576 6.4751 1.5576 7.8405 0 2.1756 0.5563 2.566 4.5 3.1574 3.618 0.54255 4.5 1.069 4.5 2.686 0 1.9158 0.1506 1.8933 3.1731-0.47212l3.1731-2.4833 10.728 6.0546 7.3702-2.6165c4.0536-1.439 7.8618-2.6165 8.4628-2.6165 2.0193 0 1.1167 2.6028-1.9074 5.5-2.5868 2.4783-3 3.5967-3 8.1198 0 6.8529 3.4582 13.849 7.9968 16.178 1.825 0.93644 3.3212 2.1526 3.3249 2.7026 0 0.55-2.551 2.3788-5.6769 4.064-5.6882 3.0666-6.4831 4.947-1.693 4.0052 1.4015-0.27557 6.303-1.0243 10.892-1.6639z",
        MAR1452: "m736.7 112.33 3.8656-1.6747-0.0737-8.0753c-0.0405-4.4414 0.22737-9.2003 0.59529-10.575 0.64173-2.3982 0.94555-2.4872 7.465-2.1854 5.5919 0.25889 7.8336-0.14585 12.652-2.2843 6.8177-3.0257 7.886-2.5972 9.4993 3.8098l1.0777 4.2796 6.7834 1.2742c3.7309 0.70079 8.2888 1.7354 10.129 2.2991 5.0846 1.5578 10.241-1.1323 12.981-6.7724 2.4222-4.9856 4.3183-5.5934 5.9917-1.9206 1.7163 3.7667 5.5032 3.3343 8.1383-0.92929 2.4406-3.949 3.4159-4.4536 7.5437-3.9029 1.9107 0.25489 4.4524-0.43823 7-1.9089 4.7062-2.7168 5.0068-4.0132 4.016-17.322-0.6549-8.7975-0.7752-9.1434-4.1043-11.8l-3.4296-2.7366-12.212 4.6465c-11.748 4.4697-12.489 4.6206-19.48 3.9655-4.4463-0.41665-12.187-2.375-19.939-5.0446l-12.671-4.3636-11.098-11.302c-18.355-18.692-22.07-24.314-21.37-32.336 0.23854-2.7313 0.74845-5.6539 1.1331-6.4947 0.38469-0.84078 0.0676-2.3928-0.7047-3.449-1.2992-1.7768-1.719-1.8164-5.6172-0.52985-2.581 0.8518-5.2193 2.7097-6.8106 4.796-2.3963 3.1417-2.9046 3.3564-6.5616 2.7717-3.4052-0.54452-4.357-0.25747-6.7508 2.0359-2.6643 2.5525-2.9934 2.6178-7.4915 1.4852-2.6058-0.65616-5.0864-0.80311-5.5601-0.32939-0.47041 0.47041-1.495 3.3062-2.2769 6.3017-4.3682 16.736-5.9046 21.881-7.7476 25.946-1.1221 2.475-2.6126 6.525-3.3122 9s-2.6759 8.2986-4.3918 12.941c-1.7158 4.6428-3.1197 8.7392-3.1197 9.1033 0 0.36402 3.4412 0.95275 7.6472 1.3083 4.2059 0.35553 8.3017 1.1897 9.1018 1.8536 0.80004 0.66398 4.6713 1.7018 8.6028 2.3062 6.2131 0.95521 7.11 1.3533 6.856 3.0431-1.4297 9.5122-1.3608 15.072 0.20296 16.37 1.4187 1.1774 1.9567 1.0783 3.8686-0.71262l2.2207-2.0802 8.25 6.097c7.329 5.4164 8.25 6.4524 8.25 9.2806 0 2.3134 0.61506 3.4802 2.25 4.2688 3.1348 1.5119 4.1926 1.456 8.6018-0.45419z",
        MAR1451: "m736.7 112.33 3.8656-1.6747-0.0737-8.0753c-0.0405-4.4414 0.22737-9.2003 0.59529-10.575 0.64173-2.3982 0.94555-2.4872 7.465-2.1854 5.5919 0.25889 7.8336-0.14585 12.652-2.2843 6.8177-3.0257 7.886-2.5972 9.4993 3.8098l1.0777 4.2796 6.7834 1.2742c3.7309 0.70079 8.2888 1.7354 10.129 2.2991 5.0846 1.5578 10.241-1.1323 12.981-6.7724 2.4222-4.9856 4.3183-5.5934 5.9917-1.9206 1.7163 3.7667 5.5032 3.3343 8.1383-0.92929 2.4406-3.949 3.4159-4.4536 7.5437-3.9029 1.9107 0.25489 4.4524-0.43823 7-1.9089 4.7062-2.7168 5.0068-4.0132 4.016-17.322-0.6549-8.7975-0.7752-9.1434-4.1043-11.8l-3.4296-2.7366-12.212 4.6465c-11.748 4.4697-12.489 4.6206-19.48 3.9655-4.4463-0.41665-12.187-2.375-19.939-5.0446l-12.671-4.3636-11.098-11.302c-18.355-18.692-22.07-24.314-21.37-32.336 0.23854-2.7313 0.74845-5.6539 1.1331-6.4947 0.38469-0.84078 0.0676-2.3928-0.7047-3.449-1.2992-1.7768-1.719-1.8164-5.6172-0.52985-2.581 0.8518-5.2193 2.7097-6.8106 4.796-2.3963 3.1417-2.9046 3.3564-6.5616 2.7717-3.4052-0.54452-4.357-0.25747-6.7508 2.0359-2.6643 2.5525-2.9934 2.6178-7.4915 1.4852-2.6058-0.65616-5.0864-0.80311-5.5601-0.32939-0.47041 0.47041-1.495 3.3062-2.2769 6.3017-4.3682 16.736-5.9046 21.881-7.7476 25.946-1.1221 2.475-2.6126 6.525-3.3122 9s-2.6759 8.2986-4.3918 12.941c-1.7158 4.6428-3.1197 8.7392-3.1197 9.1033 0 0.36402 3.4412 0.95275 7.6472 1.3083 4.2059 0.35553 8.3017 1.1897 9.1018 1.8536 0.80004 0.66398 4.6713 1.7018 8.6028 2.3062 6.2131 0.95521 7.11 1.3533 6.856 3.0431-1.4297 9.5122-1.3608 15.072 0.20296 16.37 1.4187 1.1774 1.9567 1.0783 3.8686-0.71262l2.2207-2.0802 8.25 6.097c7.329 5.4164 8.25 6.4524 8.25 9.2806 0 2.3134 0.61506 3.4802 2.25 4.2688 3.1348 1.5119 4.1926 1.456 8.6018-0.45419z",
        MAR1450: "m736.7 112.33 3.8656-1.6747-0.0737-8.0753c-0.0405-4.4414 0.22737-9.2003 0.59529-10.575 0.64173-2.3982 0.94555-2.4872 7.465-2.1854 5.5919 0.25889 7.8336-0.14585 12.652-2.2843 6.8177-3.0257 7.886-2.5972 9.4993 3.8098l1.0777 4.2796 6.7834 1.2742c3.7309 0.70079 8.2888 1.7354 10.129 2.2991 5.0846 1.5578 10.241-1.1323 12.981-6.7724 2.4222-4.9856 4.3183-5.5934 5.9917-1.9206 1.7163 3.7667 5.5032 3.3343 8.1383-0.92929 2.4406-3.949 3.4159-4.4536 7.5437-3.9029 1.9107 0.25489 4.4524-0.43823 7-1.9089 4.7062-2.7168 5.0068-4.0132 4.016-17.322-0.6549-8.7975-0.7752-9.1434-4.1043-11.8l-3.4296-2.7366-12.212 4.6465c-11.748 4.4697-12.489 4.6206-19.48 3.9655-4.4463-0.41665-12.187-2.375-19.939-5.0446l-12.671-4.3636-11.098-11.302c-18.355-18.692-22.07-24.314-21.37-32.336 0.23854-2.7313 0.74845-5.6539 1.1331-6.4947 0.38469-0.84078 0.0676-2.3928-0.7047-3.449-1.2992-1.7768-1.719-1.8164-5.6172-0.52985-2.581 0.8518-5.2193 2.7097-6.8106 4.796-2.3963 3.1417-2.9046 3.3564-6.5616 2.7717-3.4052-0.54452-4.357-0.25747-6.7508 2.0359-2.6643 2.5525-2.9934 2.6178-7.4915 1.4852-2.6058-0.65616-5.0864-0.80311-5.5601-0.32939-0.47041 0.47041-1.495 3.3062-2.2769 6.3017-4.3682 16.736-5.9046 21.881-7.7476 25.946-1.1221 2.475-2.6126 6.525-3.3122 9s-2.6759 8.2986-4.3918 12.941c-1.7158 4.6428-3.1197 8.7392-3.1197 9.1033 0 0.36402 3.4412 0.95275 7.6472 1.3083 4.2059 0.35553 8.3017 1.1897 9.1018 1.8536 0.80004 0.66398 4.6713 1.7018 8.6028 2.3062 6.2131 0.95521 7.11 1.3533 6.856 3.0431-1.4297 9.5122-1.3608 15.072 0.20296 16.37 1.4187 1.1774 1.9567 1.0783 3.8686-0.71262l2.2207-2.0802 8.25 6.097c7.329 5.4164 8.25 6.4524 8.25 9.2806 0 2.3134 0.61506 3.4802 2.25 4.2688 3.1348 1.5119 4.1926 1.456 8.6018-0.45419z",
        MAR1456: "m607.86 289.5c1.3394-2.8112 2.6039-7.698 2.8887-11.163 0.42683-5.1932 0.17134-6.6339-1.6234-9.1544-2.6444-3.7136-2.6197-4.2882 0.73702-17.182 2.1583-8.2908 3.1888-10.704 4.898-11.472 2.3747-1.0663 4.2351-7.5078 4.2351-14.664 0-3.568 0.34897-4.1694 3-5.17 2.6141-0.98672 3-1.6251 3-4.9628 0-2.1067 0.70772-5.199 1.5727-6.8717 1.4303-2.7658 1.4303-3.1986 0-4.7791-1.9681-2.1747-1.987-3.4916-0.0727-5.0803 2.2187-1.8414 1.8426-2.7658-1.4165-3.4816-1.604-0.35231-3.1536-1.2586-3.4435-2.0139-0.41759-1.0882-1.131-1.1454-3.4361-0.27532-3.8369 1.4483-5.8936 0.53548-6.5604-2.9115-2.9648-15.328-2.4787-14.178-6.4585-15.283-6.4062-1.7793-7.8123-1.3356-12.179 3.8427-4.916 5.8301-14.264 10.913-22.086 12.008-4.4519 0.62335-16.179 5.5676-23.92 10.085-0.825 0.48142-3.839 2.2415-6.6978 3.9113-3.0382 1.7746-7.4007 3.3121-10.5 3.7006-4.6957 0.58858-5.8742 1.2542-10.302 5.8185-7.8336 8.0747-7.9457 8.1305-11.398 5.6722l-2.9686-2.1138-2.4409 3.2706c-1.3425 1.7988-3.2042 5.6196-4.137 8.4906-1.7192 5.291-3.1418 6.8034-23.909 25.417l-4.0572 3.6365 5.7498 7.5384-5.7622 4.9564 3.9615 3.4147c3.6007 3.1037 4.3713 3.3605 8.4614 2.8201 14.185-1.8743 13.23-2.0119 16.245 2.3397 2.0431 2.9494 2.5971 4.6996 2.1675 6.8473-0.39978 1.9989 3e-3 3.6019 1.3122 5.2183 1.6532 2.0416 2.421 2.2433 6.1446 1.6142 3.0743-0.5194 4.4867-1.3275 5.089-2.9116 1.0645-2.8 2.8065-4.1585 6.4517-5.0318 1.6004-0.38337 5.6504-2.7978 9-5.3653 3.3496-2.5676 6.2833-4.7965 6.5192-4.9532 0.23593-0.15668-0.55157-1.6111-1.75-3.2321-2.6571-3.5939-2.6891-4.2565-0.30989-6.4097 1.028-0.93032 2.1365-3.6428 2.4634-6.0276 0.75138-5.4819 2.6002-9.5908 4.3155-9.5908 1.5184 0 5.9955 6.7064 8.1796 12.253 1.4664 3.7237 3.1452 4.6589 10.644 5.9297 1.2904 0.21868 3.063 2.5769 5.131 6.8259 1.7377 3.5705 4.3453 7.5896 5.7946 8.9313l2.6352 2.4395 7.0682-1.6964c3.8875-0.933 7.4474-1.462 7.9109-1.1755 0.46349 0.28646 1.3445 2.0411 1.9577 3.8993 0.87271 2.6443 2.138 3.8237 5.823 5.4274 7.2028 3.1347 9.2616 2.5662 12.073-3.3337z",
        MAR1448: "m736.7 112.33 3.8656-1.6747-0.0737-8.0753c-0.0405-4.4414 0.22737-9.2003 0.59529-10.575 0.64173-2.3982 0.94555-2.4872 7.465-2.1854 5.5919 0.25889 7.8336-0.14585 12.652-2.2843 6.8177-3.0257 7.886-2.5972 9.4993 3.8098l1.0777 4.2796 6.7834 1.2742c3.7309 0.70079 8.2888 1.7354 10.129 2.2991 5.0846 1.5578 10.241-1.1323 12.981-6.7724 2.4222-4.9856 4.3183-5.5934 5.9917-1.9206 1.7163 3.7667 5.5032 3.3343 8.1383-0.92929 2.4406-3.949 3.4159-4.4536 7.5437-3.9029 1.9107 0.25489 4.4524-0.43823 7-1.9089 4.7062-2.7168 5.0068-4.0132 4.016-17.322-0.6549-8.7975-0.7752-9.1434-4.1043-11.8l-3.4296-2.7366-12.212 4.6465c-11.748 4.4697-12.489 4.6206-19.48 3.9655-4.4463-0.41665-12.187-2.375-19.939-5.0446l-12.671-4.3636-11.098-11.302c-18.355-18.692-22.07-24.314-21.37-32.336 0.23854-2.7313 0.74845-5.6539 1.1331-6.4947 0.38469-0.84078 0.0676-2.3928-0.7047-3.449-1.2992-1.7768-1.719-1.8164-5.6172-0.52985-2.581 0.8518-5.2193 2.7097-6.8106 4.796-2.3963 3.1417-2.9046 3.3564-6.5616 2.7717-3.4052-0.54452-4.357-0.25747-6.7508 2.0359-2.6643 2.5525-2.9934 2.6178-7.4915 1.4852-2.6058-0.65616-5.0864-0.80311-5.5601-0.32939-0.47041 0.47041-1.495 3.3062-2.2769 6.3017-4.3682 16.736-5.9046 21.881-7.7476 25.946-1.1221 2.475-2.6126 6.525-3.3122 9s-2.6759 8.2986-4.3918 12.941c-1.7158 4.6428-3.1197 8.7392-3.1197 9.1033 0 0.36402 3.4412 0.95275 7.6472 1.3083 4.2059 0.35553 8.3017 1.1897 9.1018 1.8536 0.80004 0.66398 4.6713 1.7018 8.6028 2.3062 6.2131 0.95521 7.11 1.3533 6.856 3.0431-1.4297 9.5122-1.3608 15.072 0.20296 16.37 1.4187 1.1774 1.9567 1.0783 3.8686-0.71262l2.2207-2.0802 8.25 6.097c7.329 5.4164 8.25 6.4524 8.25 9.2806 0 2.3134 0.61506 3.4802 2.25 4.2688 3.1348 1.5119 4.1926 1.456 8.6018-0.45419z",
        MAR1449: "m736.7 112.33 3.8656-1.6747-0.0737-8.0753c-0.0405-4.4414 0.22737-9.2003 0.59529-10.575 0.64173-2.3982 0.94555-2.4872 7.465-2.1854 5.5919 0.25889 7.8336-0.14585 12.652-2.2843 6.8177-3.0257 7.886-2.5972 9.4993 3.8098l1.0777 4.2796 6.7834 1.2742c3.7309 0.70079 8.2888 1.7354 10.129 2.2991 5.0846 1.5578 10.241-1.1323 12.981-6.7724 2.4222-4.9856 4.3183-5.5934 5.9917-1.9206 1.7163 3.7667 5.5032 3.3343 8.1383-0.92929 2.4406-3.949 3.4159-4.4536 7.5437-3.9029 1.9107 0.25489 4.4524-0.43823 7-1.9089 4.7062-2.7168 5.0068-4.0132 4.016-17.322-0.6549-8.7975-0.7752-9.1434-4.1043-11.8l-3.4296-2.7366-12.212 4.6465c-11.748 4.4697-12.489 4.6206-19.48 3.9655-4.4463-0.41665-12.187-2.375-19.939-5.0446l-12.671-4.3636-11.098-11.302c-18.355-18.692-22.07-24.314-21.37-32.336 0.23854-2.7313 0.74845-5.6539 1.1331-6.4947 0.38469-0.84078 0.0676-2.3928-0.7047-3.449-1.2992-1.7768-1.719-1.8164-5.6172-0.52985-2.581 0.8518-5.2193 2.7097-6.8106 4.796-2.3963 3.1417-2.9046 3.3564-6.5616 2.7717-3.4052-0.54452-4.357-0.25747-6.7508 2.0359-2.6643 2.5525-2.9934 2.6178-7.4915 1.4852-2.6058-0.65616-5.0864-0.80311-5.5601-0.32939-0.47041 0.47041-1.495 3.3062-2.2769 6.3017-4.3682 16.736-5.9046 21.881-7.7476 25.946-1.1221 2.475-2.6126 6.525-3.3122 9s-2.6759 8.2986-4.3918 12.941c-1.7158 4.6428-3.1197 8.7392-3.1197 9.1033 0 0.36402 3.4412 0.95275 7.6472 1.3083 4.2059 0.35553 8.3017 1.1897 9.1018 1.8536 0.80004 0.66398 4.6713 1.7018 8.6028 2.3062 6.2131 0.95521 7.11 1.3533 6.856 3.0431-1.4297 9.5122-1.3608 15.072 0.20296 16.37 1.4187 1.1774 1.9567 1.0783 3.8686-0.71262l2.2207-2.0802 8.25 6.097c7.329 5.4164 8.25 6.4524 8.25 9.2806 0 2.3134 0.61506 3.4802 2.25 4.2688 3.1348 1.5119 4.1926 1.456 8.6018-0.45419z",
        MAR1430: "m736.7 112.33 3.8656-1.6747-0.0737-8.0753c-0.0405-4.4414 0.22737-9.2003 0.59529-10.575 0.64173-2.3982 0.94555-2.4872 7.465-2.1854 5.5919 0.25889 7.8336-0.14585 12.652-2.2843 6.8177-3.0257 7.886-2.5972 9.4993 3.8098l1.0777 4.2796 6.7834 1.2742c3.7309 0.70079 8.2888 1.7354 10.129 2.2991 5.0846 1.5578 10.241-1.1323 12.981-6.7724 2.4222-4.9856 4.3183-5.5934 5.9917-1.9206 1.7163 3.7667 5.5032 3.3343 8.1383-0.92929 2.4406-3.949 3.4159-4.4536 7.5437-3.9029 1.9107 0.25489 4.4524-0.43823 7-1.9089 4.7062-2.7168 5.0068-4.0132 4.016-17.322-0.6549-8.7975-0.7752-9.1434-4.1043-11.8l-3.4296-2.7366-12.212 4.6465c-11.748 4.4697-12.489 4.6206-19.48 3.9655-4.4463-0.41665-12.187-2.375-19.939-5.0446l-12.671-4.3636-11.098-11.302c-18.355-18.692-22.07-24.314-21.37-32.336 0.23854-2.7313 0.74845-5.6539 1.1331-6.4947 0.38469-0.84078 0.0676-2.3928-0.7047-3.449-1.2992-1.7768-1.719-1.8164-5.6172-0.52985-2.581 0.8518-5.2193 2.7097-6.8106 4.796-2.3963 3.1417-2.9046 3.3564-6.5616 2.7717-3.4052-0.54452-4.357-0.25747-6.7508 2.0359-2.6643 2.5525-2.9934 2.6178-7.4915 1.4852-2.6058-0.65616-5.0864-0.80311-5.5601-0.32939-0.47041 0.47041-1.495 3.3062-2.2769 6.3017-4.3682 16.736-5.9046 21.881-7.7476 25.946-1.1221 2.475-2.6126 6.525-3.3122 9s-2.6759 8.2986-4.3918 12.941c-1.7158 4.6428-3.1197 8.7392-3.1197 9.1033 0 0.36402 3.4412 0.95275 7.6472 1.3083 4.2059 0.35553 8.3017 1.1897 9.1018 1.8536 0.80004 0.66398 4.6713 1.7018 8.6028 2.3062 6.2131 0.95521 7.11 1.3533 6.856 3.0431-1.4297 9.5122-1.3608 15.072 0.20296 16.37 1.4187 1.1774 1.9567 1.0783 3.8686-0.71262l2.2207-2.0802 8.25 6.097c7.329 5.4164 8.25 6.4524 8.25 9.2806 0 2.3134 0.61506 3.4802 2.25 4.2688 3.1348 1.5119 4.1926 1.456 8.6018-0.45419z",
        MAR3470: "m-195.501 1217c-0.5371-3.179-0.15188-4.7483 2.115-8.6165 1.5245-2.6013 4.1849-9.9411 5.912-16.311l3.1403-11.581 10.416 0.2386c8.6278 0.1977 41.564 2.2961 74.416 4.7413 9.4076 0.7002 39.785 2.7989 101.5 7.0124 86.319 5.8934 109.92 7.5394 116.75 8.143l7.25 0.6406-0.0434-10.388c-0.0239-5.7133-0.4594-28.163-0.96783-49.888-0.77536-33.131-1.2363-40.87-2.8589-48l-1.9345-8.5 5.4821-10.739c5.9771-11.708 6.2621-11.984 19.823-19.216 4.95-2.6398 12.6-6.9586 17-9.5975 6.8147-4.0871 9.1853-4.9494 16-5.8197 5.6151-0.7171 10.534-2.1887 16.5-4.9362 4.675-2.153 10.664-4.2334 13.308-4.6232 2.6445-0.3897 4.9877-1.2396 5.2071-1.8886s0.87305-11.08 1.4526-23.18c0.57954-12.1 1.4854-30.751 2.013-41.446 0.5276-10.696 0.86022-19.538 0.73915-19.651s-3.6593-0.7786-7.8628-1.4804c-7.1654-1.1964-8.3996-1.1118-19.762 1.3544l-12.12 2.6305-15.563-5.4535c-14.193-4.9732-16.32-5.4535-24.151-5.4535-4.7234 0-12.507-0.75129-17.297-1.6695l-8.7092-1.6695-16.518 9.6838-20.366-6.9224c-20.335-6.9118-20.371-6.9197-23.449-5.1724-1.6958 0.9625-4.8202 1.75-6.9432 1.75s-4.1381 0.45-4.478 1c-0.88992 1.4399-4.6874 1.1731-6.8744-0.48298-1.6772-1.27-2.4531-1.0492-7.3749 2.0993l-5.5005 3.5186-2.8484-2.7289c-1.5666-1.5009-3.573-4.9106-4.4587-7.577-1.8378-5.5331-4.2156-7.2575-8.6612-6.2811-2.515 0.55238-3.4208 0.25665-4.7952-1.5655-2.4006-3.1825-6.8543-1.6473-9.2564 3.1908-1.4063 2.8324-2.9224 4.0054-7.3842 5.7128-7.1186 2.7241-17.103 11.189-17.534 14.866-0.25387 2.1651-1.2684 3.0424-5.4407 4.7048-7.5014 2.9888-16.507 11.438-17.283 16.217l-0.61147 3.7618-8.5601 1.5322c-6.7552 1.209-9.2975 2.1647-12.057 4.5321-3.1364 2.6908-12.859 16.258-12.859 17.944 0 1.5944 2.3544-1.0577 6.891-7.7624 5.6812-8.3965 7.8519-10.535 11.072-10.908 1.9062-0.2209 2.522 0.3452 3.2214 2.9616 1.259 4.7096-2.2721 10.946-12.199 21.546-7.1524 7.6372-8.1512 9.1414-7.6694 11.55 0.46621 2.3311-0.27201 3.6329-4.6608 8.2193-2.8681 2.9973-6.2838 7.2496-7.5904 9.4496s-3.9396 5.6542-5.8511 7.6761l-3.4754 3.676 2.1308 2.7088c2.6378 3.3535 2.6512 4.4987 0.11042 9.4789-1.6558 3.2456-2.5462 3.9602-4.9349 3.9602-1.603 0-4.1041 0.4523-5.558 1.005-2.3148 0.8801-2.5594 1.3876-1.9677 4.0819 0.53502 2.4359 0.18683 3.5938-1.6716 5.5591-1.8613 1.9683-2.5545 4.2809-3.3474 11.168-0.97114 8.4351-1.0931 8.7291-4.227 10.186-2.7532 1.2798-3.3188 2.1684-3.8527 6.0531-1.3287 9.6679-13.081 18.279-18.389 13.475-1.8343-1.6601-2.0652-1.6401-4.9724 0.43-2.4123 1.7177-2.9976 2.812-2.8037 5.2417 0.21403 2.6822-0.18461 3.2187-3.1497 4.2392-3.0847 1.0617-3.776 2.099-7.5689 11.358-2.2958 5.604-5.2326 11.316-6.5262 12.693-2.1467 2.285-2.2303 2.7309-0.95829 5.1077 1.2478 2.3316 1.1986 2.7468-0.4709 3.9676-1.0255 0.7498-2.2869 1.5041-2.8031 1.6762-0.55028 0.1834-0.45606 1.3716 0.2278 2.8725 0.98626 2.1646 0.69499 3.8949-1.8871 11.21-2.9442 8.3415-5.0106 16.653-8.6175 34.66-0.93465 4.6663-2.4893 10.066-3.4547 12-1.2817 2.5671-1.5291 4.3255-0.91672 6.5159 0.46126 1.65 0.5993 3.9 0.30675 5-0.49219 1.8507-0.44778 1.8654 0.59488 0.1976 0.67071-1.0729 0.86098-3.3758 0.47009-5.6895z",
        MAR3471: "m479.02 740.25c0.0106-2.6125 0.67556-23.2 1.4777-45.75s1.4685-45.311 1.4808-50.581l0.02226-9.5805-9-11.621c-6.6975-8.6478-9-12.379-9-14.586 0-2.5994-0.52409-3.1401-4.2458-4.3807-2.3352-0.77839-4.2916-2.0534-4.3477-2.8333-0.24999-3.478-0.52214-3.9181-2.4227-3.9181-1.3196 0-2.5928-1.2092-3.6852-3.5-1.5619-3.2754-1.5599-3.7288 0.0312-7.0654 1.6138-3.3841 1.6104-3.5562-0.0648-3.3848-3.9381 0.40286-4.4971 0.0112-3.8222-2.6777 0.48735-1.9418 0.12397-3.127-1.3916-4.539-2.2852-2.129-2.7361-7.0197-0.79559-8.6302 0.69058-0.57313 2.4906-1.352 4-1.7308 2.0479-0.514 2.7444-1.3037 2.7444-3.1118 0-1.3326 0.675-2.682 1.5-2.9986 2.0988-0.80538 1.8679-4.0784-0.5-7.0888-1.1-1.3984-2-3.8464-2-5.4398 0-6.4574-4.8784-13.344-10.154-14.334-3.2024-0.60078-3.5922-0.38593-5.399 2.9762-1.3631 2.5363-2.4723 3.487-3.6965 3.1681-0.96196-0.25056-2.001-0.0478-2.309 0.45055-1.0327 1.671-2.3785 0.92958-3.9982-2.2025l-1.6076-3.1086-2.7228 2.6086c-3.3321 3.1924-4.4344 3.2543-6.3858 0.35866l-1.5163-2.25-4.4342 2.3854c-4.2353 2.2784-4.5493 2.31-7.0012 0.70343-2.5954-1.7006-3.7374-4.2316-3.7623-8.3389-0.0162-2.671-0.73285-2.8141-3.1477-0.62872-2.396 2.1683-4.6484 1.1359-5.0444-2.3122-0.29405-2.5605-0.56138-2.2994-3.0214 2.951-1.4843 3.168-4.1185 7.0567-5.8536 8.6415-1.7444 1.5933-3.4617 4.3819-3.8412 6.2376-0.57654 2.819-1.5349 3.7619-5.9886 5.892-4.3276 2.0698-6.3527 4-11.016 10.5-5.1261 7.1445-6.7629 8.599-15.906 14.134-5.6055 3.3938-13.23 7.1725-16.943 8.3972-13.28 4.3798-16.961 6.4487-19.166 10.769-1.4284 2.7998-3.0298 4.3243-5.3451 5.0885-4.3144 1.4239-15.611 13.057-19.577 20.16l-3.1162 5.5806-22.242 6.8128 0.6576 5.013c0.47287 3.6047 1.4729 5.8582 3.5596 8.0216 1.5961 1.6548 4.6881 7.2798 6.871 12.5l3.969 9.4913 7.8188 0.51609c5.8988 0.38937 9.11 1.1926 13.077 3.2712 4.9578 2.5975 5.4269 2.6681 8.2003 1.2339 3.9785-2.0574 39.259-2.1607 42.931-0.12575 1.9901 1.103 3.1521 1.0952 6.9472-0.047 3.6445-1.0968 5.7305-1.1408 10.414-0.21928 5.1549 1.0142 6.4797 1.8066 11.053 6.611 2.8577 3.0023 6.3858 6.3107 7.8402 7.3521 2.4533 1.7566 2.9502 1.7856 6.8757 0.40056 6.9612-2.456 7.451-2.1992 13.841 7.2571 5.6955 8.4287 6.1647 8.8513 12.776 11.508 8.7722 3.5247 13.23 3.5778 16.407 0.19552 1.9112-2.0344 3.1791-2.4871 6.3016-2.25l3.909 0.29683 23.245 37.455 6 2.4738c3.3 1.3606 7.0125 2.4957 8.25 2.5225 2.0218 0.0438 2.252-0.43309 2.2692-4.7013z",
        MAR3472: "m711 537.6c0-1.3222 1.8686-6.2983 4.1525-11.058 2.9908-6.2329 5.3428-9.6294 8.4071-12.14 2.34-1.9175 4.9942-5.0448 5.8981-6.9497 1.0072-2.1224 2.8924-3.9852 4.8692-4.8112 2.1581-0.90171 3.2817-2.0906 3.3948-3.5921 0.18603-2.4696 1.8988-4.0877 7.4704-7.058 2.0306-1.0825 4.8734-3.5171 6.3174-5.4102 1.4439-1.8931 8.1075-7.1446 14.808-11.67 41.746-28.196 41.12-27.816 48.353-29.337 3.782-0.79557 8.1034-1.913 9.6031-2.4832s2.7267-0.84279 2.7267-0.6058 1.8063-0.20639 4.0139-0.9853c2.2077-0.77891 4.3452-1.434 4.75-1.4556 0.7486-0.0401 0.889-0.54159 1.1111-3.968 0.069-1.0607 0.694-2.5232 1.3894-3.25 0.6954-0.72679 2.8325-3.3464 4.7491-5.8214s4.1733-5.175 5.0149-6c7.7748-7.6214 9.4558-11.868 5.5298-13.969-1.6251-0.86974-2.5582-2.2224-2.5582-3.7086 0-2.0339-0.244-2.1871-1.8675-1.1732-2.2975 1.4348-5.5427 0.36198-4.7955-1.5853 0.4256-1.1089-0.1797-1.3016-2.7691-0.88136-4.3763 0.71018-4.9645-0.59175-2.6775-5.9269 1.5813-3.689 1.7383-5.2966 0.944-9.6666-1.0461-5.7556-0.089-8.0892 3.3194-8.0892 2.4753 0 3.307-2.2705 1.8375-5.0162-0.9794-1.8301-0.8065-2.5516 1.0973-4.5781 2.5413-2.7051 4.5697-2.9804 7.2093-0.97856 1.5782 1.1968 2.4614 0.93285 7.227-2.1603 2.986-1.938 6.3243-5.0409 7.4184-6.8953l1.9892-3.3716h9.0338c5.4261 0 9.0337-0.40406 9.0337-1.0118 0-0.60896-1.4931-0.77349-3.75-0.41324-3.3585 0.53608-3.9897 0.27408-6.0458-2.5096-1.2627-1.7095-2.0762-3.4635-1.8078-3.8978 0.2684-0.43427 2.3089-1.6621 4.5343-2.7286 3.6993-1.7727 5.2755-3.439 3.2532-3.439-0.4489 0-2.1162-2.72-3.7051-6.0444-2.2373-4.681-2.8992-7.5048-2.9339-12.518l-0.045-6.4737-4.1088 0.61052c-3.0869 0.45867-5.1288 0.0901-8.2101-1.4818-5.2995-2.7036-5.6669-2.6676-10.307 1.0071-4.7775 3.7838-7.3496 3.3405-6.3746-1.0987 0.5702-2.5962 0.374-3.0008-1.4555-3.0008-3.5894 0-7.0443-2.9378-7.0443-5.99 0-5.5707-1.3416-9.1516-4.679-12.489-1.8791-1.8791-4.2535-3.6822-5.2764-4.0068-2.2938-0.72802-3.4691-3.4897-2.0774-4.8814 1.8531-1.8531 1.0998-3.226-2.9588-5.3923-3.618-1.9312-4.2497-1.9959-6.75-0.69169-3.4017 1.7745-7.3724 1.8593-9.4193 0.20123-0.8487-0.6875-4.1088-5.1226-7.2447-9.8558s-7.1838-10.042-8.9953-11.798c-2.9638-2.8726-3.5527-3.0743-5.8806-2.0136-1.9326 0.88055-4.4094 0.90822-9.7915 0.10941-3.9625-0.58812-7.5571-1.4344-7.9882-1.8806-0.43104-0.44619-0.15344-2.6113 0.61687-4.8113 1.7287-4.9372 1.1885-6.8339-2.7439-9.634-2.4945-1.7762-3.418-1.9685-4.9273-1.026-1.0215 0.63798-3.4384 1.16-5.3709 1.16-2.3652 0-3.5136 0.46318-3.5136 1.4171 0 0.77941-0.87371 3.4554-1.9416 5.9466-1.8405 4.2937-2.1138 4.5021-5.25 4.0035-2.7569-0.43836-3.8526 9e-3 -6.5726 2.686-4.061 3.996-4.6703 6.362-3.8663 15.013 0.55143 5.9331 0.31076 7.6003-1.7795 12.327-2.0293 4.5885-2.752 5.378-4.5036 4.92-1.7107-0.44735-2.0864-0.08835-2.0864 1.9935 0 2.05-0.72225 2.7745-3.75 3.7615-3.3762 1.1006-5.1918 2.4752-5.2347 3.9634-8e-3 0.29192 1.3606 1.0501 3.0422 1.6849 2.8226 1.0654 3.007 1.4234 2.4002 4.6578-0.4614 2.4594-0.1805 4.1844 0.94246 5.7877 3.3289 4.7527 0.53637 6.4089-5.5229 3.2755-4.947-2.5582-10.41-0.52627-11.136 4.1419-0.54713 3.5181-1.8185 4.4215-6.2224 4.4215-4.1157 0-4.4303 0.20252-5.5406 3.5669-0.9777 2.9625-0.92427 3.7674 0.31526 4.75 0.82085 0.65071 2.1381 2.4633 2.9273 4.0279 1.2846 2.5469 1.2389 3.2408-0.43605 6.6262-1.5196 3.0715-2.5528 3.892-5.5036 4.3709-2.7825 0.45153-4.9373 1.9986-9.2068 6.61-5.1643 5.5779-6.1622 6.1842-13.574 8.2467-5.5354 1.5403-9.1562 3.239-11.753 5.5138-2.0641 1.8082-4.5753 3.2876-5.5805 3.2876s-4.0107 1.1052-6.6788 2.456c-3.7607 1.9039-5.7898 2.3273-9.0271 1.8836l-4.176-0.57238-0.69122 6.1096c-0.75912 6.7097-0.44695 6.4655-9.5934 7.506-2.475 0.28157-6.3517 0.80842-8.6149 1.1708-3.8796 0.62113-4.1544 0.50147-4.8054-2.092-0.51844-2.0656-0.97554-2.4657-1.8351-1.6062-1.811 1.811-5.573 1.334-6.7446-0.85536-1.4364-2.6839-2.6525-2.5205-3.3998 0.45684-0.66114 2.6342-7.8927 6.5432-12.105 6.5432-1.2377 0-2.7478 0.59928-3.3557 1.3317s-3.7005 2.1751-6.8724 3.2059c-3.172 1.0308-6.6962 2.6815-7.8317 3.6683s-2.5097 1.7941-3.0538 1.7941-2.4719 1.5295-4.2838 3.399l-3.2944 3.399 3.0982 0.68049c3.3497 0.73572 3.9871 2.539 1.5982 4.5216-0.95816 0.7952-1.5 3.0068-1.5 6.1224v4.8776h3.941c5.509 0 6.083 1.757 1.718 5.2587-4.727 3.7921-4.7002 5.5344 0.0911 5.931 3.5683 0.29533 3.7765 0.509 4.2973 4.4106 0.33697 2.5243 1.8165 5.7027 3.8495 8.2695 3.7512 4.7363 3.5278 6.8954-0.80317 7.7616-1.6245 0.32489-3.9635 1.6658-5.1979 2.9797-1.2344 1.314-3.0659 2.389-4.07 2.389-2.3869 0-2.3574 1.6277 0.0409 2.2549 1.0538 0.27558 3.0408 2.9701 4.5631 6.1881 2.2716 4.8017 2.4896 5.9513 1.3834 7.2944-1.162 1.4109-0.99421 1.515 1.458 0.90416 2.182-0.54349 3.3013-0.16006 5.265 1.8037 2.0041 2.0041 2.957 2.3178 4.8519 1.5974 1.574-0.59844 2.7816-0.5052 3.6322 0.28046 1.0034 0.92683 1.1446 0.80838 0.66439-0.55731-0.40406-1.1492 0.38393-2.6673 2.3359-4.5 1.6201-1.5212 3.7833-5.2407 4.8071-8.2657 1.1686-3.453 2.5075-5.6261 3.5973-5.8388 0.95471-0.18633 3.9511 1.5292 6.6587 3.8122l4.9228 4.151 4.2468-2.3122c4.9928-2.7183 5.711-3.5446 5.7315-6.5936 0.0197-2.9374 2.5877-3.9156 4.8662-1.8536 1.0546 0.95444 2.1568 1.2452 2.7128 0.71551 0.51499-0.49066 2.7119-1.8763 4.8819-3.0791 3.7574-2.0827 4.0078-2.1019 5.25-0.40311 0.71743 0.98115 1.3044 2.8229 1.3044 4.0928 0 1.878 0.53808 2.3089 2.8836 2.3089 2.0956 0 3.8719 1.0939 6.5 4.0029 1.989 2.2016 3.6164 4.2784 3.6164 4.6151s-1.5329 2.0229-3.4064 3.7471c-4.6424 4.2723-4.8628 6.5422-0.88207 9.0842 3.8306 2.4461 3.906 2.8748 1.1794 6.7039-2.3853 3.3498-1.8208 4.9983 0.8758 2.5579 1.2176-1.102 2.245-1.3152 3.2561-0.67585 0.81244 0.51375 2.5038 0.94099 3.7585 0.94941 4.2447 0.0285 3.7609 2.896-1.3669 8.1022l-4.8586 4.9328 1.8658 3.4646c1.8934 3.5159 1.4508 5.3169-1.8954 7.7131-0.57075 0.40872-0.0287 1.7034 1.3097 3.128 2.0418 2.1734 2.2276 3.1316 1.755 9.0527-0.29069 3.6421-0.40022 6.622-0.24339 6.622 3.0246 0 12.6 2.5763 13.899 3.7394 3.9324 3.522 26.15 0.35725 29.1-4.1451 1.1748-1.793 2.1576-2.1339 5.1465-1.7849 3.3139 0.38688 3.6455 0.6868 3.2201 2.9121-0.43101 2.2547-0.21994 2.43 2.316 1.9228 3.0816-0.61631 4.4706 1.2066 3.4264 4.4967-0.40389 1.2724-0.09545 1.8591 0.97727 1.8591 0.98852 0 1.5674-0.88784 1.5674-2.404z",
        MAR3473: "m626.5 377.62c1.6968-0.2579 2.0758-1.2755 2.5-6.7135l0.5-6.4095 5.6994 0.30186c3.7217 0.19711 6.7407-0.23664 8.7003-1.25 1.6505-0.85352 4.1661-1.5519 5.5902-1.5519 1.6849 0 3.9104-1.3478 6.3719-3.859 3.1602-3.2241 5.2253-4.2402 12.551-6.1753 8.5289-2.2531 8.9205-2.4888 14.355-8.641 4.2624-4.825 6.2275-6.3247 8.2873-6.3247 5.1745 0 6.7723-6.2942 2.1772-8.576-3.4968-1.7364-3.5482-1.9567-1.7328-7.4225 1.8099-5.4492 3.9218-7.0015 9.5254-7.0015 2.5221 0 3.0527-0.52728 4.1219-4.0958 1.3703-4.5735 3.5985-5.9042 9.8868-5.9042 2.9335 0 3.7701-0.34761 3.3667-1.3988-0.29523-0.76937-0.0561-1.6959 0.53139-2.059 1.8983-1.1732 1.14-2.3674-1.9318-3.0421-1.65-0.3624-3-1.2432-3-1.9573 0-1.8911 2.8994-8.5298 3.7634-8.617 2.4022-0.24235 5.6908-1.0465 6.1475-1.5033 0.29282-0.29282 0.57148-1.9702 0.61925-3.7274 0.076-2.7943 0.411-3.1732 2.6716-3.0213 2.1746 0.1461 2.8354-0.48866 4.1643-4 1.2858-3.3976 1.3968-5.4468 0.59707-11.02-0.89182-6.2151-0.78263-7.2022 1.1836-10.701l2.166-3.8539-2.7492-3.6044c-2.3079-3.0258-2.6942-4.3934-2.4064-8.5201 0.34012-4.8771 0.32004-4.914-2.554-4.695-2.4295 0.18508-3.4738-0.57481-6.4742-4.7112-2.3947-3.3013-3.7513-6.4305-4.1032-9.4649-0.57003-4.9146-1.1709-5.4143-10.026-8.3379-2.475-0.81718-5.3512-1.8463-6.3916-2.2869-1.7314-0.73327-1.8298-0.46998-1.1621 3.1102 0.40121 2.1512 0.80241 4.3613 0.89155 4.9113 0.0915 0.56466-2.45 1.0429-5.8379 1.0985-3.3 0.0542-7.8 0.61419-10 1.2444-5.9236 1.6969-7.4409 1.4427-8.5329-1.4295-0.89464-2.3531-1.3344-2.5272-4.8726-1.9294-4.7363 0.80018-5.7142-0.38486-3.6354-4.405 2.1598-4.1765 2.0062-4.6006-2.1241-5.8683-4.0041-1.2289-5.335-0.88259-5.335 1.3881 0 0.81445-0.95057 3.3441-2.1124 5.6214l-2.1124 4.1406 2.6124 1.903c1.4368 1.0466 2.6124 2.2892 2.6124 2.7611 0 1.237-11.587 9.975-13.227 9.975-0.75843 0-3.1551-1.2882-5.326-2.8626-3.0365-2.2022-5.5275-3.0184-10.798-3.5382-8.1444-0.80318-9.6485 0.05017-9.6485 5.474 0 5.0896-1.9318 13.895-3.0829 14.052-0.50443 0.0688-1.4476 0.18125-2.0959 0.25-0.64831 0.0688-2.2993 4.7864-3.6689 10.484-2.4618 10.24-2.4689 10.398-0.62566 13.821 1.0255 1.9042 1.9935 5.5679 2.151 8.1414 0.3273 5.3453-2.7519 15.732-5.82 19.633-1.7231 2.1906-1.9236 3.4668-1.3829 8.8041 0.34776 3.4332 0.20851 8.4213-0.30943 11.085-0.8839 4.5452-0.76605 5.0426 1.9194 8.1011 2.4605 2.8023 2.7371 3.6909 1.9754 6.3466-0.79213 2.762-0.55883 3.34 2.2099 5.4752l3.0955 2.3872-2.971 4.4237c-1.634 2.433-3.4038 4.4457-3.9328 4.4726-0.52897 0.0269-3.1392 0.39798-5.8006 0.8246-3.9146 0.6275-5.1999 0.44887-6.7294-0.93523-1.7953-1.6247-1.9906-1.5907-3.8779 0.67541-2.3946 2.8752-2.544 3.8863-0.57425 3.8863 0.81382 0 2.398 1.8 3.5203 4 1.7903 3.5094 2.4675 4 5.5203 4 3.7644 0 4.0138 0.46495 2.4526 4.5714-1.8752 4.9322-2.0802 8.9002-0.56591 10.952 1.169 1.5841 1.7099 1.7282 2.7257 0.7263 2.0709-2.0426 4.8284-1.4296 6.0974 1.3556 1.2319 2.7038 2.5542 2.7981 14.27 1.0174z",
    },
    names: {
        MAR3457: "Agadir",
        MAR1454: "Fès",
        MAR3456: "Marrakech",
        MAR1455: "Rabat",
        MAR3469: "Laâyoune",
        MAR1457: "Safi",
        MAR1430: "Blank",
        MAR1445: "Martil",
        MAR1446: "Tétouan",
        MAR1447: "Tanger",
        MAR1448: "Al Hoceima",
        MAR1449: "Chefchaouen",
        MAR1450: "Ouezzane",
        MAR1451: "Ksar El Kebir",
        MAR1452: "Larache",
        MAR1453: "Oujda",
        MAR1456: "Casablanca",
        MAR3470: "Dakhla",
        MAR3471: "Guelmim",
        MAR3472: "Ouarzazate",
        MAR3473: "Béni Mellal",
    },
    default_regions: {},
    proj: "mercator",
    default_labels: {},
    proj_coordinates: [{lat: 34.217781, x: 747.9, lng: -5.052945, y: 131.3}, {
        lat: 35.172161,
        x: 778.6,
        lng: -4.561582,
        y: 58.8
    }, {lat: 33.386829, x: 682, lng: -6.107803, y: 193.7}],
    initial_view: {x2: 1008.99, x: -270.99, y2: 1248.38, y: 0.99}
}

/* Map logic - do not edit */
!function (t) {
    var e = {};
    (function () {
        var t, e, o, i, n, a, r, s, l, c, m, u = this || Function("return this")(), p = function () {
            "use strict";
            var t, e, o, i, n, a = "linear", r = Date.now || function () {
                return +new Date
            }, s = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : r;

            function l() {
            }

            function c(t, e) {
                for (var o in t) Object.hasOwnProperty.call(t, o) && e(o)
            }

            function m(t, e) {
                return c(e, function (o) {
                    t[o] = e[o]
                }), t
            }

            function p(t, e) {
                c(e, function (o) {
                    void 0 === t[o] && (t[o] = e[o])
                })
            }

            function d(e, o, i, n, a, r, s) {
                var l, c, m = e < r ? 0 : (e - r) / a;
                for (l in o) o.hasOwnProperty(l) && (c = "function" == typeof (c = s[l]) ? c : t[c], o[l] = _(i[l], n[l], c, m));
                return o
            }

            function _(t, e, o, i) {
                return t + (e - t) * o(i)
            }

            function h(t, e) {
                var o = y.prototype.filter, i = t._filterArgs;
                c(o, function (n) {
                    void 0 !== o[n][e] && o[n][e].apply(t, i)
                })
            }

            function f(t, e, a, r, l, c, m, u, p, _, f) {
                n = e + a + r, o = Math.min(f || s(), n), i = n <= o, n = r - (n - o), t.isPlaying() && (i ? (p(m, t._attachment, n), t.stop(!0)) : (t._scheduleId = _(t._timeoutHandler, 1e3 / 60), h(t, "beforeTween"), o < e + a ? d(1, l, c, m, 1, 1, u) : d(o, l, c, m, r, e + a, u), h(t, "afterTween"), p(l, t._attachment, n)))
            }

            function v(t, e) {
                var o = {}, i = typeof e;
                return c(t, "string" == i || "function" == i ? function (t) {
                    o[t] = e
                } : function (t) {
                    o[t] || (o[t] = e[t] || a)
                }), o
            }

            function y(t, o) {
                this._currentState = t || {}, this._configured = !1, this._scheduleFunction = e, void 0 !== o && this.setConfig(o)
            }

            return e = "undefined" != typeof window && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame) || setTimeout, y.prototype.tween = function (t) {
                return this._isTweening ? this : (void 0 === t && this._configured || this.setConfig(t), this._timestamp = s(), this._start(this.get(), this._attachment), this.resume())
            }, y.prototype.setConfig = function (t) {
                t = t || {}, this._configured = !0, this._attachment = t.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = t.delay || 0, this._start = t.start || l, this._step = t.step || l, this._finish = t.finish || l, this._duration = t.duration || 500, this._currentState = m({}, t.from || this.get()), this._originalState = this.get(), this._targetState = m({}, t.to || this.get());
                var e = this;
                this._timeoutHandler = function () {
                    f(e, e._timestamp, e._delay, e._duration, e._currentState, e._originalState, e._targetState, e._easing, e._step, e._scheduleFunction)
                };
                var o = this._currentState, i = this._targetState;
                return p(i, o), this._easing = v(o, t.easing || a), this._filterArgs = [o, this._originalState, i, this._easing], h(this, "tweenCreated"), this
            }, y.prototype.get = function () {
                return m({}, this._currentState)
            }, y.prototype.set = function (t) {
                this._currentState = t
            }, y.prototype.pause = function () {
                return this._pausedAtTime = s(), this._isPaused = !0, this
            }, y.prototype.resume = function () {
                return this._isPaused && (this._timestamp += s() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this
            }, y.prototype.seek = function (t) {
                t = Math.max(t, 0);
                var e = s();
                return this._timestamp + t === 0 || (this._timestamp = e - t, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, f(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, e), this.pause())), this
            }, y.prototype.stop = function (t) {
                return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = l, (u.cancelAnimationFrame || u.webkitCancelAnimationFrame || u.oCancelAnimationFrame || u.msCancelAnimationFrame || u.mozCancelRequestAnimationFrame || u.clearTimeout)(this._scheduleId), t && (h(this, "beforeTween"), d(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), h(this, "afterTween"), h(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
            }, y.prototype.isPlaying = function () {
                return this._isTweening && !this._isPaused
            }, y.prototype.setScheduleFunction = function (t) {
                this._scheduleFunction = t
            }, y.prototype.dispose = function () {
                for (var t in this) this.hasOwnProperty(t) && delete this[t]
            }, y.prototype.filter = {}, t = y.prototype.formula = {
                linear: function (t) {
                    return t
                }
            }, m(y, {
                now: s,
                each: c,
                tweenProps: d,
                tweenProp: _,
                applyFilter: h,
                shallowCopy: m,
                defaults: p,
                composeEasingObject: v
            }), "function" == typeof SHIFTY_DEBUG_NOW && (u.timeoutHandler = f), u.Tweenable = y
        }();

        function d(t) {
            e.each(t, function (e) {
                var o = t[e];
                "string" == typeof o && o.match(s) && (t[e] = f(s, o, _))
            })
        }

        function _(t) {
            return "rgb(" + (t = function (t) {
                return 3 === (t = t.replace(/#/, "")).length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]), c[0] = h(t.substr(0, 2)), c[1] = h(t.substr(2, 2)), c[2] = h(t.substr(4, 2)), c
            }(t))[0] + "," + t[1] + "," + t[2] + ")"
        }

        function h(t) {
            return parseInt(t, 16)
        }

        function f(t, e, o) {
            var i = e.match(t), n = e.replace(t, l);
            if (i) for (var a, r = i.length, s = 0; s < r; s++) a = i.shift(), n = n.replace(l, o(a));
            return n
        }

        function v(t) {
            for (var e = t.match(n), o = e.length, i = t.match(r)[0], a = 0; a < o; a++) i += parseInt(e[a], 10) + ",";
            return i.slice(0, -1) + ")"
        }

        function y(t, o) {
            e.each(o, function (e) {
                for (var i = b(t[e]), n = i.length, a = 0; a < n; a++) t[o[e].chunkNames[a]] = +i[a];
                delete t[e]
            })
        }

        function g(t, o) {
            e.each(o, function (e) {
                var i = t[e], n = function (t, e) {
                    m.length = 0;
                    for (var o = e.length, i = 0; i < o; i++) m.push(t[e[i]]);
                    return m
                }(function (t, e) {
                    for (var o, i = {}, n = e.length, a = 0; a < n; a++) i[o = e[a]] = t[o], delete t[o];
                    return i
                }(t, o[e].chunkNames), o[e].chunkNames);
                i = function (t, e) {
                    for (var o = t, i = e.length, n = 0; n < i; n++) o = o.replace(l, +e[n].toFixed(4));
                    return o
                }(o[e].formatString, n);
                t[e] = f(a, i, v)
            })
        }

        function b(t) {
            return t.match(n)
        }

        p.shallowCopy(p.prototype.formula, {
            easeInQuad: function (t) {
                return Math.pow(t, 2)
            }, easeOutQuad: function (t) {
                return -(Math.pow(t - 1, 2) - 1)
            }, easeInOutQuad: function (t) {
                return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2)
            }, easeInCubic: function (t) {
                return Math.pow(t, 3)
            }, easeOutCubic: function (t) {
                return Math.pow(t - 1, 3) + 1
            }, easeInOutCubic: function (t) {
                return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
            }, easeInQuart: function (t) {
                return Math.pow(t, 4)
            }, easeOutQuart: function (t) {
                return -(Math.pow(t - 1, 4) - 1)
            }, easeInOutQuart: function (t) {
                return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
            }, easeInQuint: function (t) {
                return Math.pow(t, 5)
            }, easeOutQuint: function (t) {
                return Math.pow(t - 1, 5) + 1
            }, easeInOutQuint: function (t) {
                return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
            }, easeInSine: function (t) {
                return 1 - Math.cos(t * (Math.PI / 2))
            }, easeOutSine: function (t) {
                return Math.sin(t * (Math.PI / 2))
            }, easeInOutSine: function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            }, easeInExpo: function (t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            }, easeOutExpo: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            }, easeInOutExpo: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            }, easeInCirc: function (t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }, easeOutCirc: function (t) {
                return Math.sqrt(1 - Math.pow(t - 1, 2))
            }, easeInOutCirc: function (t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }, easeOutBounce: function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, easeInBack: function (t) {
                return t * t * (2.70158 * t - 1.70158)
            }, easeOutBack: function (t) {
                return --t * t * (2.70158 * t + 1.70158) + 1
            }, easeInOutBack: function (t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            }, elastic: function (t) {
                return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1
            }, swingFromTo: function (t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            }, swingFrom: function (t) {
                return t * t * (2.70158 * t - 1.70158)
            }, swingTo: function (t) {
                return --t * t * (2.70158 * t + 1.70158) + 1
            }, bounce: function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, bouncePast: function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }, easeFromTo: function (t) {
                return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
            }, easeFrom: function (t) {
                return Math.pow(t, 4)
            }, easeTo: function (t) {
                return Math.pow(t, .25)
            }
        }), p.setBezierFunction = function (t, e, o, i, n) {
            var a, r, s, l, c = (a = e, r = o, s = i, l = n, function (t) {
                return function (t, e, o, i, n, a) {
                    var r, s, l, c, m = 0, u = 0, p = 0;

                    function d(t) {
                        return ((m * t + u) * t + p) * t
                    }

                    function _(t) {
                        return 0 <= t ? t : 0 - t
                    }

                    return m = 1 - (p = 3 * e) - (u = 3 * (i - e) - p), s = 1 - (c = 3 * o) - (l = 3 * (n - o) - c), r = function (t, e) {
                        var o, i, n, a, r, s;
                        for (n = t, s = 0; s < 8; s++) {
                            if (_(a = d(n) - t) < e) return n;
                            if (_(r = (3 * m * n + 2 * u) * n + p) < 1e-6) break;
                            n -= a / r
                        }
                        if ((n = t) < (o = 0)) return o;
                        if ((i = 1) < n) return i;
                        for (; o < i;) {
                            if (_((a = d(n)) - t) < e) return n;
                            a < t ? o = n : i = n, n = .5 * (i - o) + o
                        }
                        return n
                    }(t, r = 1 / (200 * a)), ((s * r + l) * r + c) * r
                }(t, a, r, s, l, 1)
            });
            return c.displayName = t, c.x1 = e, c.y1 = o, c.x2 = i, c.y2 = n, p.prototype.formula[t] = c
        }, p.unsetBezierFunction = function (t) {
            delete p.prototype.formula[t]
        }, (t = new p)._filterArgs = [], p.interpolate = function (e, o, i, n, a) {
            var r = p.shallowCopy({}, e), s = a || 0;
            a = p.composeEasingObject(e, n || "linear");
            return t.set({}), (n = t._filterArgs).length = 0, n[0] = r, n[1] = e, n[2] = o, n[3] = a, p.applyFilter(t, "tweenCreated"), p.applyFilter(t, "beforeTween"), e = e, r = r, o = o, i = i, a = a, s = s, a = p.tweenProps(i, r, e, o, 1, s, a), p.applyFilter(t, "afterTween"), a
        }, e = p, o = /(\d|\-|\.)/, i = /([^\-0-9\.]+)/g, n = /[0-9.\-]+/g, a = new RegExp("rgb\\(" + n.source + /,\s*/.source + n.source + /,\s*/.source + n.source + "\\)", "g"), r = /^.*\(/, s = /#([0-9]|[a-f]){3,6}/gi, l = "VAL", c = [], m = [], e.prototype.filter.token = {
            tweenCreated: function (t, n, a, r) {
                d(t), d(n), d(a), this._tokenData = function (t) {
                    var n = {};
                    return e.each(t, function (e) {
                        var a, r, s = t[e];
                        "string" == typeof s && (a = b(s), n[e] = {
                            formatString: ((s = (r = s).match(i)) ? 1 !== s.length && !r.charAt(0).match(o) || s.unshift("") : s = ["", ""], s.join(l)),
                            chunkNames: function (t, e) {
                                for (var o = [], i = t.length, n = 0; n < i; n++) o.push("_" + e + "_" + n);
                                return o
                            }(a, e)
                        })
                    }), n
                }(t)
            }, beforeTween: function (t, o, i, n) {
                var a, r;
                a = n, r = this._tokenData, e.each(r, function (t) {
                    var e = r[t].chunkNames, o = e.length, i = a[t];
                    if ("string" == typeof i) for (var n = i.split(" "), s = n[n.length - 1], l = 0; l < o; l++) a[e[l]] = n[l] || s; else for (l = 0; l < o; l++) a[e[l]] = i;
                    delete a[t]
                }), y(t, this._tokenData), y(o, this._tokenData), y(i, this._tokenData)
            }, afterTween: function (t, o, i, n) {
                var a, r;
                g(t, this._tokenData), g(o, this._tokenData), g(i, this._tokenData), a = n, r = this._tokenData, e.each(r, function (t) {
                    var e = r[t].chunkNames, o = e.length, i = a[e[0]];
                    if ("string" == typeof i) {
                        for (var n = "", s = 0; s < o; s++) n += " " + a[e[s]], delete a[e[s]];
                        a[t] = n.substr(1)
                    } else a[t] = i
                })
            }
        }
    }).call(null), function (t, e) {
        t = t || "docReady", e = e || window;
        var o = [], i = !1, n = !1;

        function a() {
            if (!i) {
                i = !0;
                for (var t = 0; t < o.length; t++) o[t].fn.call(window, o[t].ctx);
                o = []
            }
        }

        function r() {
            "complete" === document.readyState && a()
        }

        e[t] = function (t, e) {
            i ? setTimeout(function () {
                t(e)
            }, 1) : (o.push({
                fn: t,
                ctx: e
            }), "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(a, 1) : n || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", a, !1), window.addEventListener("load", a, !1)) : (document.attachEvent("onreadystatechange", r), window.attachEvent("onload", a)), n = !0))
        }
    }("docReady", e), function (t, e, o) {
        void 0 !== t && void 0 !== t.log || ((t = {}).log = function () {
        }), "function" != typeof e.create && (e.create = function (t) {
            function e() {
            }

            return e.prototype = t, new e
        }), o.prototype.forEach || (o.prototype.forEach = function (t, e) {
            for (var o = 0, i = this.length; o < i; ++o) t.call(e, this[o], o, this)
        })
    }(window.console, window.Object, window.Array), Object.size = function (t) {
        var e, o = 0;
        for (e in t) t.hasOwnProperty(e) && o++;
        return o
    };
    var o = function () {
            var t = {
                Android: function () {
                    return navigator.userAgent.match(/Android/i)
                }, BlackBerry: function () {
                    return navigator.userAgent.match(/BlackBerry/i)
                }, iOS: function () {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
                }, Opera: function () {
                    return navigator.userAgent.match(/Opera\sMini/i)
                }, Windows: function () {
                    return navigator.userAgent.match(/IEMobile/i)
                }, any: function () {
                    return t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
                }
            };

            function e(t, e) {
                var o = t[0], i = t[1], n = Raphael.transformPath("M" + o + "," + i, e).toString(),
                    a = /M(-?\d+.?\d*),(-?\d+.?\d*)/.exec(n);
                return [a[1], a[2]]
            }

            function i(t) {
                return Math.min.apply(Math, t)
            }

            function n(t) {
                return Math.max.apply(Math, t)
            }

            return {
                min: i, max: n, addEvent: function (t, e, o) {
                    t.attachEvent ? (t["e" + e + o] = o, t[e + o] = function () {
                        t["e" + e + o](window.event)
                    }, t.attachEvent("on" + e, t[e + o])) : t.addEventListener(e, o, !1)
                }, isMobile: t, linePath: function (t, e, o, i) {
                    return "M" + t + " " + e + " L" + o + " " + i
                }, clone: function t(e) {
                    if ("object" != typeof e || null === e) return e;
                    var o = e.constructor();
                    for (var i in e) o[i] = t(e[i]);
                    return o
                }, isFunction: function (t) {
                    return t && "[object Function]" === {}.toString.call(t)
                }, findPos: function (t) {
                    function e(t, e) {
                        if (t.currentStyle) var o = t.currentStyle[e]; else window.getComputedStyle && (o = window.getComputedStyle(t, null)[e]);
                        return o
                    }

                    var o = e(document.body, "position");
                    "relative" == o && (document.body.style.position = "static"), e(document.body, "position");
                    for (var i, n, a = i = 0, r = t, s = !1; (r = r.parentNode) && r != document.body;) a -= r.scrollLeft || 0, i -= r.scrollTop || 0, "fixed" == e(r, "position") && (s = !0);
                    if (s && !window.opera) {
                        var l = (n = document.getElementsByTagName("html")[0]).scrollTop && document.documentElement.scrollTop ? [n.scrollLeft, n.scrollTop] : n.scrollTop || document.documentElement.scrollTop ? [n.scrollLeft + document.documentElement.scrollLeft, n.scrollTop + document.documentElement.scrollTop] : document.body.scrollTop ? [document.body.scrollLeft, document.body.scrollTop] : [0, 0];
                        a += l[0], i += l[1]
                    }
                    do {
                        a += t.offsetLeft, i += t.offsetTop
                    } while (t = t.offsetParent);
                    return document.body.style.position = o, [a, i]
                }, replaceAll: function (t, e, o) {
                    return t.replace(new RegExp(e, "g"), o)
                }, rotate_bbox: function (t, o) {
                    var a = [t.x, t.y], r = [t.x2, t.y], s = [t.x, t.y2], l = [t.x2, t.y2], c = e(a, o), m = e(r, o),
                        u = e(s, o), p = e(l, o), d = [c[0], m[0], u[0], p[0]], _ = [c[1], m[1], u[1], p[1]], h = i(d),
                        f = n(d), v = i(_), y = n(_);
                    return {x: h, y: v, x2: f, y2: y, width: f - h, height: y - v}
                }, rotate: e, bbox_union: function (t) {
                    for (var e = [], i = [], n = [], a = [], r = 0; r < t.length; r++) {
                        var s = t[r];
                        e.push(s.x), i.push(s.x2), a.push(s.y), n.push(s.y2)
                    }
                    var l = o.min(e), c = o.max(i), m = o.min(a), u = o.max(n);
                    return {x: l, x2: c, y: m, y2: u, width: c - l, height: u - m}
                }, distance: function (t, e) {
                    var o = t.x, i = t.y, n = e.x - o, a = e.y - i;
                    return Math.sqrt(a * a + n * n)
                }, x_in_array: function (t, e) {
                    for (var o = e.length; o--;) if (e[o] === t) return !0;
                    return !1
                }, clear_sets: function (t) {
                    for (var e = 0; e < t.length; e++) {
                        var o = t[e];
                        o.forEach(function (t) {
                            t.remove()
                        }), o.splice(0, o.length)
                    }
                }, delete_element: function (t) {
                    t.parentNode && t.parentNode.removeChild(t)
                }, to_float: function (t) {
                    var e = parseFloat(t);
                    return !isNaN(e) && e
                }, callback_closure: function (t, e) {
                    return function () {
                        return e(t)
                    }
                }, new_style: function (t) {
                    var e = document.getElementsByTagName("head")[0], o = document.createElement("style");
                    return o.type = "text/css", o.media = "screen", o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t)), e.appendChild(o), o
                }
            }
        }(), i = !!window[t + "_mapdata"] && window[t + "_mapdata"], n = !!window[t + "_mapinfo"] && window[t + "_mapinfo"],
        a = t.substring(0, t.length - 3).replace("simplemaps_", ""), r = !0, s = !1, l = !1, c = [], m = {
            rounded_box: "m2.158.263h5.684c1.05 0 1.895.845 1.895 1.895v5.684c0 1.05-.845 1.895-1.895 1.895h-5.684c-1.05 0-1.895-.845-1.895-1.895v-5.684c0-1.05.845-1.895 1.895-1.895z",
            plus: "m4.8 1.5c-.111 0-.2.089-.2.2v3h-2.9c-.111 0-.2.134-.2.3 0 .166.089.3.2.3h2.9v3c0 .111.089.2.2.2h.2c.111 0 .2-.089.2-.2v-3h3.1c.111 0 .2-.134.2-.3 0-.166-.089-.3-.2-.3h-3.1v-3c0-.111-.089-.2-.2-.2z",
            minus: "m1.8 4.7h6.6c.111 0 .2.134.2.3 0 .166-.089.3-.2.3h-6.6c-.111 0-.2-.134-.2-.3 0-.166.089-.3.2-.3",
            arrow: "m7.07 8.721c2.874-1.335 2.01-5.762-2.35-5.661v-1.778l-3.445 2.694 3.445 2.843v-1.818c3.638-.076 3.472 2.802 2.35 3.721z"
        }, u = {
            mapdata: i,
            mapinfo: n,
            load: p,
            hooks: o.clone({
                over_state: !1,
                over_region: !1,
                over_location: !1,
                out_state: !1,
                out_region: !1,
                out_location: !1,
                click_state: !1,
                click_region: !1,
                click_location: !1,
                close_popup: !1,
                zoomable_click_state: !1,
                zoomable_click_region: !1,
                complete: !1,
                refresh_complete: !1,
                zooming_complete: !1,
                back: !1,
                ready: !1,
                click_xy: !1
            }),
            plugin_hooks: o.clone({
                over_state: [],
                over_region: [],
                over_location: [],
                out_state: [],
                out_region: [],
                out_location: [],
                click_state: [],
                click_region: [],
                click_location: [],
                preclick_state: [],
                preclick_region: [],
                preclick_location: [],
                close_popup: [],
                zoomable_click_state: [],
                zoomable_click_region: [],
                complete: [],
                refresh_complete: [],
                zooming_complete: [],
                back: [],
                ready: [],
                click_xy: []
            }),
            copy: function () {
                var t = {
                    mapdata: o.clone(this.mapdata),
                    mapinfo: o.clone(this.mapinfo),
                    hooks: o.clone(this.hooks),
                    plugin_hooks: o.clone(this.plugin_hooks),
                    copy: this.copy,
                    load: p
                };
                return c.push(t), t
            },
            create: function () {
                var e = {
                    mapdata: !!window[t + "_mapdata"] && o.clone(window[t + "_mapdata"]),
                    mapinfo: !!window[t + "_mapinfo"] && o.clone(window[t + "_mapinfo"]),
                    hooks: o.clone(this.hooks),
                    plugin_hooks: o.clone(this.plugin_hooks),
                    copy: this.copy,
                    load: p
                };
                return c.push(e), e
            },
            mobile_device: !!o.isMobile.any(),
            loaded: !1
        };

    function p() {
        var t = this, i = t.mapdata, n = t.mapinfo;
        if (i && n) {
            var c, u, p, d, _, h, f, v, y, g, b, x, w, k, z, M, E, A, C, T, S, O, B, F, I, P, R, j, N, L, D, H, q, W, Y,
                V, Q, X, U, Z, G, J, K, $, tt, et, ot, it, nt, at, rt, st, lt = t.hooks, ct = t.plugin_hooks,
                mt = void 0 === i.main_settings.div ? "map" : i.main_settings.div;
            if (!document.getElementById(mt)) return console.log("Can't find target for map #" + mt + ".  Check mapdata.main_settings.div"), !1;
            var ut, pt, dt, _t, ht, ft, vt, yt, gt, bt, xt, wt, kt, zt, Mt, Et, At, Ct, Tt, St, Ot, Bt, Ft, It, Pt, Rt,
                jt, Nt, Lt, Dt, Ht, qt, Wt, Yt, Vt, Qt, Xt, Ut, Zt, Gt, Jt, Kt, $t, te, ee, oe, ie, ne, ae, re, se, le,
                ce, me, ue, pe, de, _e, he, fe, ve, ye, ge, be, xe, we, ke, ze, Me, Ee, Ae, Ce, Te, Se, Oe, Be, Fe, Ie,
                Pe, Re, je, Ne, Le = !1, De = !1, He = !1, qe = !1, We = !1, Ye = !1, Ve = !1, Qe = !1, Xe = !1, Ue = {
                    triangle: "M -0.57735,.3333 .57735,.3333 0,-.6666 Z",
                    diamond: "M 0,-0.5 -0.4,0 0,0.5 0.4,0 Z",
                    marker: "m-.015-.997c-.067 0-.13.033-.18.076-.061.054-.099.136-.092.219-.0001.073.034.139.068.201.058.104.122.206.158.32.021.058.039.117.058.175.006.009.011-.004.011-.009.037-.125.079-.249.144-.362.043-.08.095-.157.124-.244.022-.075.016-.161-.026-.229-.048-.08-.134-.136-.227-.146-.013-.0001-.027-.0001-.04-.0001z",
                    heart: "m-.275-.5c-.137.003-.257.089-.3.235-.073.379.348.539.58.765.202-.262.596-.33.576-.718-.017-.086-.065-.157-.13-.206-.087-.066-.208-.089-.311-.05-.055.02-.106.053-.143.098-.065-.081-.169-.127-.272-.125",
                    star: "m0-.549c-.044.126-.084.252-.125.379-.135.0001-.271.0001-.405.002.108.078.216.155.323.233-.002.029-.016.057-.023.085-.032.099-.066.199-.097.298.049-.031.095-.068.143-.101.062-.044.124-.089.185-.133.109.077.216.158.326.233-.04-.127-.082-.253-.123-.379.109-.079.219-.156.327-.236-.135-.0001-.27-.002-.405-.003-.042-.126-.081-.252-.125-.377"
                }, Ze = function (t, e, o, i) {
                    null == o && (o = !1), null == i && (i = !1), i || (i = "over" == e ? t.sm.over_attributes : "adjacent" == e ? t.sm.adjacent_attributes : t.sm.attributes), !o || t.sm.image ? t.attr(i) : t.animate(i, H)
                }, Ge = function (t, e, i) {
                    if (null == i && (i = !1), "state" == i) var n = t.sm.parent; else if ("region" == i) n = ye[t.sm.parent.sm.region]; else n = Zo(t.sm.parent);
                    var a;
                    if (a = "over" == e ? o.clone(n.sm.over_attributes) : "adjacent" == e ? o.clone(n.sm.adjacent_attributes) : o.clone(n.sm.attributes), n.sm.image && "state" == n.sm.type) {
                        var r = ie[n.sm.id];
                        a.fill = "over" == e ? r.hover_color : r.color
                    }
                    Ze(t, e, !1, a)
                }, Je = !1, Ke = function (t, e) {
                    if (t) {
                        var i = !!(t.sm.image || ut && b);
                        if (Ne.hide(), Go(t)) t.sm.ignore_hover || t.animate(t.sm.attributes, H, n), t.animate(t.sm.adjacent_attributes, H, n), Jo(t, "out", !0); else {
                            if (nt && "location" == t.sm.type && "image" == t.sm.shape_type) return;
                            if (!t || !t.sm) return;
                            t.sm.ignore_hover || (i ? (t.attr(t.sm.attributes), n()) : t.animate(t.sm.attributes, H, n)), Jo(t, "out")
                        }
                    } else e();

                    function n() {
                        o.isFunction(e) && e()
                    }
                }, $e = !1, to = !1, eo = function () {
                    Po()
                }, oo = !1, io = function (t, e) {
                    if (!oo || t || e) {
                        oo = !0;
                        var i = function (e) {
                            var i = at ? event.clientX + document.documentElement.scrollLeft : e.pageX,
                                n = at ? event.clientY + document.documentElement.scrollTop : e.pageY, a = o.findPos(ht),
                                r = a[0], s = a[1], l = ge.sm.zooming_dimensions, c = l.r * wt / zt, m = l.r * kt / zt,
                                u = l.x / zt + c * (i - r) / wt, p = l.y / zt + m * (n - s) / kt,
                                d = "You clicked on\nx: " + (u = Math.round(1e5 * u) / 1e5) + ",\ny: " + (p = Math.round(1e5 * p) / 1e5) + ",";
                            t && console.log(d), _o("click_xy", [{x: u, y: p}])
                        };
                        e || Wt.click(i), Ut.click(i)
                    }
                }, no = function () {
                    io(!0)
                }, ao = function (t) {
                    (lt.click_xy || ct.click_xy.length > 0) && io(!1, t)
                }, ro = function (t) {
                    var e = t.sm.type;
                    "state" == e && _o("over_state", [t.sm.id]), "location" == e && _o("over_location", [t.sm.id]), "region" == e && _o("over_region", [t.sm.id])
                }, so = function (t) {
                    var e = t.sm.type;
                    "state" == e && _o("out_state", [t.sm.id]), "location" == e && _o("out_location", [t.sm.id]), "region" == e && _o("out_region", [t.sm.id])
                }, lo = function (t, e) {
                    var o = t.sm.type;
                    "state" == o && _o("click_state", [t.sm.id, e]), "region" == o && _o("click_region", [t.sm.id, e]), "location" == o && _o("click_location", [t.sm.id, e])
                }, co = function (t, e) {
                    var o = t.sm.type;
                    "state" == o && _o("preclick_state", [t.sm.id, e]), "region" == o && _o("preclick_region", [t.sm.id, e]), "location" == o && _o("preclick_location", [t.sm.id, e])
                }, mo = function (t, e) {
                    var o = t.sm.type;
                    "state" == o && _o("zoomable_click_state", [t.sm.id, e]), "region" == o && _o("zoomable_click_region", [t.sm.id, e])
                }, uo = !1, po = (uo = !1, !1);
            po = !1;
            xi(), ri()
        } else console.log("The mapdata or mapinfo object is missing or corrupted.");

        function _o(e, o) {
            (a = lt[e]) && a.apply(null, o);
            for (var i = t.plugin_hooks[e], n = 0; n < i.length; n++) {
                var a;
                (a = i[n]) && a.apply(null, o)
            }
        }

        function ho() {
            T = !(!_.background_image_url || "no" == _.background_image_url) && _.background_image_url, S = !!_.background_image_bbox && _.background_image_bbox, V = "yes" == _.background_transparent ? 0 : 1, X = _.label_size ? _.label_size : 22, _.label_color ? _.label_color : "#ffffff", U = "yes" == _.url_new_tab, Z = _.location_opacity ? _.location_opacity : 1, "yes" == _.js_hooks, G = _.border_size ? _.border_size : 1.5, J = _.popup_color ? _.popup_color : "#ffffff", R = _.popup_orientation ? _.popup_orientation : "auto", P = _.popup_centered ? _.popup_centered : "auto", $ = _.popup_opacity ? _.popup_opacity : .9, tt = _.popup_shadow > -1 ? _.popup_shadow : 1, et = _.popup_corners ? _.popup_corners : 5, ot = "yes" == _.popup_nocss, K = !!_.popup_maxwidth && _.popup_maxwidth, it = _.popup_font ? _.popup_font : "12px/1.5 Verdana, Arial, Helvetica, sans-serif", Q = "no" != _.zoom_out_incrementally, Y = _.adjacent_opacity ? _.adjacent_opacity : .3, O = _.zoom_time ? _.zoom_time : .5, F = _.zoom_increment ? _.zoom_increment : 2, B = "no" != _.zoom_mobile, H = _.fade_time ? 1e3 * _.fade_time : 200, W = i.labels, I = _.custom_shapes ? _.custom_shapes : {}, N = !(!_.initial_back || "no" == _.initial_back) && _.initial_back, q = "yes" == _.hide_eastern_labels, L = _.link_text ? _.link_text : "View Website", !!_.order_number && _.order_number, j = _.zoom_percentage ? _.zoom_percentage : .99
        }

        function fo(t) {
            return "on_click" == t || !("detect" != t || !ut)
        }

        function vo(t) {
            return "off" == t
        }

        function yo(t) {
            if (ft.style.width = "", vt.style.width = "", x ? ((wt = ft.offsetWidth) < 1 && (wt = ft.parentNode.offsetWidth), vt.style.width = wt + "px") : (wt = void 0 === _.width ? 800 : _.width, ft.style.width = wt + "px"), wt *= 1, n.calibrate ? ((At = {}).x = -1 * n.calibrate.x_adjust, At.y = -1 * n.calibrate.y_adjust, At.x2 = At.x + n.calibrate.width, At.y2 = (At.x2 - At.x) / n.calibrate.ratio) : At = n.initial_view, Mt = At.x2 - At.x, Et = At.y2 - At.y, kt = wt / (St = Mt / Et), Ct = Mt / 1e3, ht.style.height = kt + "px", !t) {
                if (zt = wt / Mt, Tt = 1, g) {
                    var e = [];
                    for (var i in n.state_bbox_array) {
                        var a = n.state_bbox_array[i];
                        e.push(a)
                    }
                    var r = o.bbox_union(e), s = .5 * (r.x2 + r.x) * zt, l = .5 * (r.y2 + r.y) * zt;
                    xt = "r" + g + "," + s + "," + l;
                    var c = o.rotate_bbox(At, xt);
                    Mt = c.width, Et = c.height
                }
                Nt = "s" + zt + "," + zt + ",0,0", jt = g ? Nt + xt : Nt
            }
        }

        function go(t, e, o) {
            if (void 0 === o && (o = "location" == t ? 4 : 1), "location" == t) var i = Me[e]; else if ("state" == t) i = ve[e]; else {
                if ("region" != t) return !1;
                i = ye[e]
            }
            var n = function () {
                var t = i.sm.on_click;
                i.sm.on_click = !0, i.sm.content = No(i), ui(i.sm.type, i.sm.id, function () {
                    i.sm.on_click = t, i.sm.content = No(i)
                })
            };
            if ("state" == t) {
                function a() {
                    i.sm.zoomable || i.sm.region ? li(i.sm.id, n) : n()
                }

                Ke(M, a)
            } else if ("location" == t) {
                function a() {
                    ci(i.sm.id, o, n)
                }

                Ke(M, a)
            } else if ("region" == t) {
                function a() {
                    !function (t, e, o) {
                        void 0 === e && (e = 4);
                        void 0 === o && (o = function () {
                        });
                        Ro({sm: {type: "manual", zp: e, bbox: t}}, !1, function () {
                            o(), wo()
                        })
                    }(i.sm.bbox, 1, n)
                }

                Ke(M, a)
            }
        }

        function bo() {
            if (r) if (location.hostname.match("simplemaps.com")) r = !1; else {
                if (De) {
                    if (Math.random() > .05) return;
                    o.delete_element(De)
                }
                De = document.createElement("div");
                var t = s || l ? "20px" : "5px";
                De.style.cssText = "";
            }
        }

        function xo() {
            Gt.hide(), _t.style.display = "none"
        }

        function wo() {
            Gt.show(), _t.style.display = "block"
        }

        function ko() {
            var e, o, i = _.navigation_color ? _.navigation_color : "#f7f7f7",
                n = _.navigation_border_color ? _.navigation_border_color : "#636363",
                a = _.navigation_opacity ? _.navigation_opacity : .8, r = _.arrow_color ? _.arrow_color : i,
                s = _.arrow_color_border ? _.arrow_color_border : n,
                l = _.arrow_border_color ? _.arrow_border_color : s,
                u = void 0 === _.navigation_size ? 40 : _.navigation_size,
                p = void 0 === _.navigation_size_mobile ? dt * u : _.navigation_size_mobile, d = ut ? p : u,
                h = "yes" == _.arrow_box ? 1 : 0, f = d *= 1, v = .1 * d, y = d / 10;
            !function () {
                Gt = Ot.set();
                var s = d, u = d;
                if (c) {
                    var p = new Image;
                    p.onload = function () {
                        e = p.width, o = p.height, _()
                    }, p.src = c
                } else _();

                function _() {
                    if (c) {
                        var p = (Zt = Raphael(_t, e, o)).image(c, 0, 0, e, o);
                        f = o, p.attr({cursor: "pointer"}), Gt.push(p), Gt.click(Re)
                    } else {
                        Zt = Raphael(_t, s, u);
                        var _ = Zt.path(m.rounded_box).attr({
                            fill: r,
                            "stroke-width": 1,
                            stroke: l,
                            "stroke-opacity": h,
                            "fill-opacity": 0,
                            cursor: "pointer"
                        }), g = {
                            stroke: l,
                            "stroke-width": 1.5,
                            "stroke-opacity": 1,
                            fill: r,
                            "fill-opacity": 1,
                            cursor: "pointer"
                        }, x = Zt.path(m.arrow).attr(g);
                        (Gt = Ot.set()).push(_, x);
                        var z = "S" + y + "," + y + ",0,0 T0,0";
                        Gt.transform(z)
                    }
                    N || xo(), _t.style.left = v + "px", _t.style.top = v + "px", b && function () {
                        $t = Raphael(yt, d, 2 * d + v);
                        var e = m.plus, o = m.minus, r = m.rounded_box, s = $t.path(r).attr({
                            fill: i,
                            "stroke-width": 1,
                            stroke: n,
                            "stroke-opacity": 1,
                            "fill-opacity": a,
                            cursor: "pointer"
                        }), l = $t.path(e).attr({
                            "stroke-width": 0,
                            "stroke-opacity": 0,
                            fill: n,
                            "fill-opacity": 1,
                            opacity: 1,
                            cursor: "pointer"
                        });
                        (Jt = Ot.set()).push(s, l);
                        var c = "S" + y + "," + y + ",0,0 T0,0";
                        Jt.transform(c);
                        var u = $t.path(r).attr({
                            fill: i,
                            "stroke-width": 1,
                            stroke: n,
                            "stroke-opacity": 1,
                            "fill-opacity": a,
                            cursor: "pointer"
                        }), p = $t.path(o).attr({
                            "stroke-width": 0,
                            "stroke-opacity": 0,
                            fill: n,
                            "fill-opacity": 1,
                            opacity: 1,
                            cursor: "pointer"
                        });
                        (Kt = Ot.set()).push(u, p);
                        var c = "S" + y + "," + y + ",0,0 T0," + (d + v);

                        function _(t, e) {
                            if (void 0 === e && (e = "z"), M && "region" != M.sm.type) Be.call(M, !0, function () {
                                M = !1, _(t)
                            }); else {
                                if ("z" == e && !function (t) {
                                    var e = ge.sm.zooming_dimensions.w / t, o = t < 1;
                                    if (-1 != w && ("manual" == ge.sm.type || k)) {
                                        var i = ye[w].sm.zooming_dimensions.w, n = e > i - 1;
                                        if (o && n) {
                                            var a = Lo(ge, ye[w]);
                                            if (a || k) return Ro(ye[w]), !1
                                        }
                                    }
                                    if (o && e > ye[-1].sm.zooming_dimensions.w - 1) return k || Ro(ye[-1]), !1;
                                    return !0
                                }(t)) return;
                                var o = {sm: {type: "manual", zp: 1}};
                                _e && ((ge = {
                                    sm: {
                                        type: "manual",
                                        zp: 1
                                    }
                                }).sm.zooming_dimensions = he, ge.sm.bbox = {
                                    x: he.x / zt,
                                    y: he.y / zt,
                                    width: he.w / zt,
                                    height: he.h / zt
                                });
                                var i = function (t, e) {
                                    var o = ge.sm.zooming_dimensions.w, i = ge.sm.zooming_dimensions.h,
                                        n = ge.sm.zooming_dimensions.x, a = ge.sm.zooming_dimensions.y;
                                    if ("x" == e) var n = ge.sm.zooming_dimensions.x + ge.sm.zooming_dimensions.w * t; else if ("y" == e) var a = ge.sm.zooming_dimensions.y + ge.sm.zooming_dimensions.h * t; else var o = ge.sm.zooming_dimensions.w / t,
                                        i = ge.sm.zooming_dimensions.h / t,
                                        n = ge.sm.zooming_dimensions.x + (ge.sm.zooming_dimensions.w - o) / 2,
                                        a = ge.sm.zooming_dimensions.y + (ge.sm.zooming_dimensions.h - i) / 2;
                                    return {x: n, y: a, w: o, h: i, r: o / (Mt * zt)}
                                }(t, e);
                                if (!i) return;
                                o.sm.zooming_dimensions = i, Ro(o)
                            }
                        }

                        Kt.transform(c), yt.style.top = f + 2 * v + "px", yt.style.left = v + "px", (Kt = Ot.set()).push(u, p), te = function () {
                            _(F)
                        }, oe = function (t, e) {
                            _(t, e)
                        }, ee = function () {
                            _(1 / F)
                        }, t.zoom_in = te, t.zoom_out = ee, Jt.click(te), Kt.click(ee), Jt.touchend(te), Kt.touchend(ee)
                    }()
                }
            }()
        }

        function zo() {
            ce = i.locations, ie = [], ne = [], se = [], le = [], ae = [], pe = [];
            !function () {
                var t = {color: !1, hover_color: !1};
                if (t.opacity = _.region_opacity ? _.region_opacity : 1, t.hover_opacity = _.region_hover_opacity ? _.region_hover_opacity : .6, t.url = !1, t.description = !1, t.description_mobile = !1, t.inactive = !1, t.zoomable = !0, t.hide_name = "yes" == _.region_hide_name, t.popup = _.region_popups ? _.region_popups : pt, t.cascade = "yes" == _.region_cascade_all, t.zoom_percentage = j, t.x = !1, t.y = !1, t.x2 = !1, t.y2 = !1, A) for (var e in A) for (var o = 0; o < A[e].states.length; o++) {
                    var i = A[e].states[o];
                    se[i] = e
                }
                for (var n in A) for (var a in ae[n] = Object.create(t), A[n].url && (ae[n].zoomable = !1), A[n]) "default" != A[n][a] && (ae[n][a] = A[n][a]), "yes" == A[n][a] && (ae[n][a] = !0), "no" == A[n][a] && (ae[n][a] = !1)
            }(), function () {
                for (var t in me = function (t) {
                    var e = {};
                    e.color = _.state_color, e.image_url = !!_.state_image_url && _.state_image_url, e.image_size = _.state_image_size ? _.state_image_size : "auto", e.image_position = _.state_image_position ? _.state_image_position : "center", e.image_x = _.state_image_x ? _.state_image_x : "0", e.image_y = _.state_image_y ? _.state_image_y : "0", e.image_color = !!_.state_image_color && _.state_image_color, e.image_background_opacity = _.image_background_opacity ? _.image_background_opacity : "1", e.image_hover_url = !!_.state_image_hover_url && _.state_image_hover_url, e.image_hover_size = _.state_image_hover_size ? _.state_image_hover_size : "auto", e.image_hover_position = _.state_image_hover_position ? _.state_image_hover_position : "center", e.image_hover_x = _.state_image_hover_x ? _.state_image_hover_x : "0", e.image_hover_y = _.state_image_hover_y ? _.state_image_hover_y : "0", e.image_hover_color = !!_.state_image_hover_color && _.state_image_hover_color, e.pulse_size = _.state_pulse_size ? _.state_pulse_size : 1.1, e.pulse_speed = _.state_pulse_speed ? _.state_pulse_speed : 1;
                    var o = _.state_pulse_color;
                    e.pulse_color = !(!o || "auto" == o) && o, e.hover_color = _.state_hover_color, e.image_source = !1, e.description = _.state_description, e.url = _.state_url, e.inactive = "yes" == _.all_states_inactive, e.hide = "yes" == _.all_states_hidden, e.hide_label = !1, e.hide_name = "yes" == _.state_hide_name, e.border_color = _.border_color ? _.border_color : "#ffffff", e.border_hover_color = !!_.border_hover_color && _.border_hover_color, e.border_hover_size = !!_.border_hover_size && _.border_hover_size, e.emphasize = "yes", e.zoom_percentage = j, e.zoomable = "yes" == _.all_states_zoomable, e.popup = _.state_popups ? _.state_popups : pt, e.opacity = _.state_opacity ? _.state_opacity : 1, e.hover_opacity = _.state_hover_opacity ? _.state_hover_opacity : 1, e.description_mobile = !!_.state_description_mobile && state_description_mobile, e.pu, e.path = !1;
                    var i = !!se[t] && se[t];
                    for (var n in i && ae[i].hide && (e.hide = !0), i && ae[i].cascade && (ae[i].color && (e.color = ae[i].color), ae[i].hover_color && (e.hover_color = ae[i].hover_color), ae[i].description && (e.description = ae[i].description), ae[i].url && (e.url = ae[i].url), ae[i].inactive && (e.inactive = ae[i].inactive), ae[i].hide && (e.hide = ae[i].hide)), ie[t] = Object.create(e), "us" != a || "GU" != t && "PR" != t && "VI" != t && "MP" != t && "AS" != t || (ie[t].hide = "yes"), "us" != a || !q || "VT" != t && "NJ" != t && "DE" != t && "DC" != t && "NH" != t && "MA" != t && "CT" != t && "RI" != t && "MD" != t || (ie[t].hide_label = "yes"), d[t]) "default" != d[t][n] && (ie[t][n] = d[t][n]), "yes" == d[t][n] && (ie[t][n] = !0), "no" == d[t][n] && (ie[t][n] = !1);
                    "off" == _.state_hover_color && (ie[t].hover_color = ie[t].color)
                }, re = {}, n.paths) re[t] = !0;
                for (var t in i.state_specific) i.state_specific[t] && i.state_specific[t].path && (re[t] = !0);
                for (var t in re) me(t)
            }(), function () {
                var t = {};
                t.font_family = _.label_font ? _.label_font : "arial,sans-serif", t.color = _.label_color ? _.label_color : "white", t.hover_color = _.label_hover_color ? _.label_hover_color : t.color, t.opacity = _.label_opacity || "0" == _.label_opacity ? _.label_opacity : 1, t.hover_opacity = _.label_hover_opacity ? _.label_hover_opacity : t.opacity, t.size = X, t.hide = "yes" == _.hide_labels, t.line = !1, t.scale = !!_.label_scale && _.label_scale, t.scale_limit = _.scale_limit ? _.scale_limit : .0625, t.rotate = _.label_rotate ? _.label_rotate : 0, t.line_color = _.label_line_color ? _.label_line_color : "#000000", t.line_size = _.label_line_size ? _.label_line_size : "1", t.line_x = !1, t.line_y = !1, t.parent_type = "state", t.parent_id = !1, t.anchor = _.label_anchor ? _.label_anchor : "middle", t.pill = !1, t.width = !!_.pill_width && _.pill_width, t.x = !1, t.y = !1, t.name = "Not Named", t.pill_radius = _.pill_radius ? _.pill_radius : "auto", t.display = !!_.label_display && _.label_display, t.display_ids = !1, t.id = !1;
                var e = "no" == _.import_labels ? {} : n.default_labels, o = function (o) {
                    for (var i in le[o] = Object.create(t), e[o]) "default" != e[o][i] && (le[o][i] = e[o][i]), "yes" == e[o][i] && (le[o][i] = !0), "no" == e[o][i] && (le[o][i] = !1)
                }, i = function (e) {
                    for (var o in le[e] || (le[e] = Object.create(t)), W[e]) "default" != W[e][o] && (le[e][o] = W[e][o]), "yes" == W[e][o] && (le[e][o] = !0), "no" == W[e][o] && (le[e][o] = !1)
                };
                for (var a in e) o(a);
                for (var a in W) i(a);
                ue = function (t) {
                    o(t), i(t)
                }
            }(), function () {
                var t = {}, e = ut ? _.scale_limit_mobile ? _.scale_limit_mobile : .4 : .0625;
                t.scale_limit = _.scale_limit ? _.scale_limit : e, t.color = _.location_color ? _.location_color : "#FF0067", t.hover_color = !!_.location_hover_color && _.location_hover_color, t.border = _.location_border ? _.location_border : 1.5, t.border_color = _.location_border_color ? _.location_border_color : "#FFFFFF", t.hover_border = _.location_hover_border ? _.location_hover_border : 2, t.size = _.location_size, t.description = _.location_description, t.description_mobile = !!_.location_description_mobile && location_description_mobile, t.url = _.location_url, t.inactive = "yes" == _.all_locations_inactive, t.type = _.location_type, t.position = "top", t.pulse = "yes" == _.location_pulse, t.pulse_size = _.location_pulse_size ? _.location_pulse_size : 4, t.pulse_speed = _.location_pulse_speed ? _.location_pulse_speed : .5;
                var o = _.location_pulse_color;
                for (var i in t.pulse_color = !(!o || "auto" == o) && o, t.image_source = _.location_image_source ? _.location_image_source : "", t.hide = _.all_locations_hide ? _.all_locations_hide : "no", t.opacity = Z, t.scale = !_.location_scale || _.location_scale, t.hover_opacity = !!_.location_hover_opacity && _.location_hover_opacity, t.image_source = _.location_image_source ? _.location_image_source : "", t.image_url = !!_.location_image_url && _.location_image_url, t.image_position = _.location_image_position ? _.location_image_position : "center", t.image_hover_source = _.location_image_hover_source ? _.location_image_hover_source : "", t.image_hover_url = !!_.location_image_hover_url && _.location_image_hover_url, t.image_hover_position = _.location_image_hover_position ? _.location_image_hover_position : "center", t.popup = _.location_popups ? _.location_popups : pt, t.x = !1, t.y = !1, t.display = _.location_display ? _.location_display : "all", t.display_ids = !1, t.hide = "yes" == _.all_locations_hidden, t.hide_name = "yes" == _.location_hide_name, null == t.type && (t.type = "square"), ce) {
                    for (var n in ne[i] = Object.create(t), ce[i]) "overwrite_image_location" != n ? ("region" == n && (ne[i].display = "region"), "default" != ce[i][n] && (ne[i][n] = ce[i][n]), "yes" == ce[i][n] && (ne[i][n] = !0), "no" == ce[i][n] && (ne[i][n] = !1)) : ne[i].image_url = ce[i][n];
                    ne[i].hover_opacity || (ne[i].hover_opacity = ne[i].opacity), ne[i].hover_color || (ne[i].hover_color = ne[i].color)
                }
            }(), function () {
                var t = {};
                t.color = _.line_color ? _.line_color : "#000000", t.size = _.line_size ? _.line_size : 1.5, t.dash = _.line_dash ? _.line_dash : "", t.origin_location = !1, t.destination_location = !1, t.angle = !1;
                var e = i.lines ? i.lines : i.borders;
                for (var o in e) for (var n in pe[o] = Object.create(t), e[o]) "default" != e[o][n] && (pe[o][n] = e[o][n]), "yes" == e[o][n] && (pe[o][n] = !0), "no" == e[o][n] && (pe[o][n] = !1)
            }()
        }

        function Mo(t, e) {
            if ("lambert" == n.proj) var i = function (t) {
                var e = .017453293, o = Math.PI, i = t.lat * e, n = t.lng * e, a = 33 * e,
                    r = Math.log(Math.cos(a) * (1 / Math.cos(.785398185))) / Math.log(Math.tan(.25 * o + .3926990925) * (1 / Math.tan(.25 * o + .5 * a))),
                    s = Math.cos(a) * Math.pow(Math.tan(.25 * o + .5 * a), r) / r,
                    l = s * Math.pow(1 / Math.tan(.25 * o + .5 * i), r),
                    c = s * Math.pow(1 / Math.tan(.25 * o + .3926990925), r);
                return {x: l * Math.sin(r * (n - 1.57079637)), y: c - l * Math.cos(r * (n - 1.57079637))}
            }; else if ("xy" == n.proj) i = function (t) {
                return {x: t.lng, y: t.lat}
            }; else if ("robinson_pacific" == n.proj) i = function (t) {
                var e = t.lng - 150;
                e < -180 && (e += 360);
                return r({lat: t.lat, lng: e})
            }; else if ("mercator" == n.proj) i = function (t) {
                var e = Math.log(Math.tan((t.lat / 90 + 1) * (Math.PI / 4))) * (180 / Math.PI);
                return {x: t.lng, y: e}
            }; else i = r;
            var a = {lat: t, lng: e};

            function r(t) {
                var e, o, i = function (t) {
                        return t < 0 ? -1 : 1
                    }, n = i(t.lng), a = i(t.lat), r = Math.abs(t.lng), s = Math.abs(t.lat),
                    l = (e = 5, o = s - 1e-10, Math.floor(o / e) * e), c = (l = 0 == s ? 0 : l) / 5, m = (l + 5) / 5,
                    u = (s - l) / 5,
                    p = [.8487, .84751182, .84479598, .840213, .83359314, .8257851, .814752, .80006949, .78216192, .76060494, .73658673, .7086645, .67777182, .64475739, .60987582, .57134484, .52729731, .48562614, .45167814],
                    d = [0, .0838426, .1676852, .2515278, .3353704, .419213, .5030556, .5868982, .67182264, .75336633, .83518048, .91537187, .99339958, 1.06872269, 1.14066505, 1.20841528, 1.27035062, 1.31998003, 1.3523];
                return {x: ((p[m] - p[c]) * u + p[c]) * r * .017453293 * n * 1, y: ((d[m] - d[c]) * u + d[c]) * a * 1}
            }

            var s = n.proj_coordinates;

            function l(t, e, n, a) {
                var r, s, l, c, m, u, p, d, _, h, f, v, y, g, b, x = i(t), w = i(e), k = i(n), z = i(a),
                    M = o.distance(x, w), E = o.distance(x, k), A = o.distance(w, k) / o.distance(e, n), C = M / A,
                    T = E / A,
                    S = (r = e.x, s = e.y, l = C, c = n.x, m = n.y, g = c - r, b = s + (p = m - s) * (_ = (l * l - (u = T) * u + (d = Math.sqrt(p * p + g * g)) * d) / (2 * d)) / d, {
                        opt1: {
                            x: (h = r + g * _ / d) + (v = (f = Math.sqrt(l * l - _ * _)) / d * -p),
                            y: b + (y = g * (f / d))
                        }, opt2: {x: h - v, y: b - y}
                    }), O = o.distance(x, z) / A;
                return Math.abs(o.distance(S.opt1, a) - O) < Math.abs(o.distance(S.opt2, a) - O) ? {
                    x: S.opt1.x,
                    y: S.opt1.y
                } : {x: S.opt2.x, y: S.opt2.y}
            }

            function c(t, e, i) {
                var n = /lat[ ]?<([-]?\d+[\.]?\d+)/g.exec(d);
                if (n && t > o.to_float(n[1])) return !1;
                var a = /lat[ ]?>([-]?\d+[\.]?\d+)/g.exec(d);
                if (a && t < o.to_float(a[1])) return !1;
                var r = /lng[ ]?<([-]?\d+[\.]?\d+)/g.exec(d);
                if (r && e > o.to_float(r[1])) return !1;
                var s = /lng[ ]?>([-]?\d+[\.]?\d+)/g.exec(d);
                return !(s && e < o.to_float(s[1]))
            }

            var m = n.proj_rules;
            if (m) for (var u = 0; u < m.length; u++) {
                var p = m[u], d = p.condition;
                if (c(t, e, p.condition)) {
                    var _ = p.points;
                    return l(a, s[_[0]], s[_[1]], s[_[2]])
                }
            }
            return l(a, s[0], s[1], s[2])
        }

        function Eo(t) {
            if (t.sm.zooming_dimensions) return t.sm.zooming_dimensions;
            var e, i = o.rotate_bbox(t.sm.bbox, jt), n = i.x, a = i.y, r = i.width, s = i.height, l = t.sm.zp,
                c = Mt * zt, m = Et * zt;
            return n -= .5 * (r / l - r), a -= .5 * (s / l - s), (r /= l) / (s /= l) > St ? (a -= (m * (e = r / c) - s) / 2, s = r / St) : (n -= (c * (e = s / m) - r) / 2, r = s * St), {
                x: n,
                y: a,
                w: r,
                h: s,
                r: e
            }
        }

        function Ao(t) {
            if (t) {
                Wt.stop();
                for (var e = 0; e < t.sm.states.length; ++e) {
                    var o = ve[t.sm.states[e]];
                    o.attr(o.sm.attributes), Jo(o, "reset", !1, "state")
                }
            }
        }

        function Co(t) {
            if (t) {
                t.stop(), t.attr(t.sm.attributes);
                for (var e = 0; e < t.sm.states.length; ++e) {
                    Jo(ve[t.sm.states[e]], "reset", !1, "region")
                }
            }
        }

        function To() {
            Yt.forEach(function (t) {
                -1 != t.sm.id && Co(t)
            })
        }

        function So(t, e) {
            var i = t.sm.display, a = e.sm.type;
            if ("all" == i) return !0;
            if ("out" == i && "out" == a) return !0;
            if ("region" == i && "region" == a) return function (t, e) {
                var o = t.sm.point0;
                if (t.sm.display_ids) {
                    var i = t.sm.display_ids.indexOf(e.sm.id) > -1;
                    return i
                }
                if (Raphael.isPointInsideBBox(e.sm.bbox, o.x, o.y)) return !0;
                return !1
            }(t, e);
            if ("state" == i && "state" == a) return function (t, e) {
                var o = t.sm.point0;
                if (t.sm.display_ids) {
                    var i = t.sm.display_ids.indexOf(e.sm.id) > -1;
                    return i
                }
                if (Raphael.isPointInsideBBox(e.sm.bbox, o.x, o.y)) {
                    var a = n.paths[e.sm.id];
                    if (Raphael.isPointInsidePath(a, o.x, o.y)) return !0
                }
                return !1
            }(t, e);
            var r = o.to_float(i);
            return !!(r && Tt < r)
        }

        function Oo(t, e, o) {
            var i = {transform: e};
            nt || ut || o ? t.attr(i) : t.animate(i, 1e3 * O)
        }

        function Bo(t, e) {
            var i = t.sm.type;
            xo(), function (t, e) {
                Vt.hide(), Vt.forEach(function (o) {
                    o.sm.hide || (So(o, t) && o.show(), o.sm.scale && Oo(o, Xo(o, (Tt > o.sm.scale_limit ? Tt : o.sm.scale_limit) * zt), e))
                })
            }(t, e), function (t, e) {
                for (var o in Ut.hide(), xe) {
                    var i = xe[o];
                    if (!i.sm.hide) {
                        if (So(i, t) && we[i.sm.id].show(), i.sm.line) {
                            var n = Qo(i);
                            i.sm.line.attr({path: n, transform: jt})
                        }
                        if (i.sm.scale) {
                            var a = Xo(i, (Tt > i.sm.scale_limit ? Tt : i.sm.scale_limit) * zt);
                            Oo(i, a, e), i.sm.pill && Oo(ze[i.sm.id], a, e)
                        }
                    }
                }
            }(t, e), o.x_in_array(i, ["state", "region", "out"]) && To(), "region" == i ? Ao(t) : "state" == i ? Ao(ye[t.sm.region]) : "manual" == i && Yt.forEach(function (t) {
                -1 != t.sm.id && (t.sm.zooming_dimensions.r > Tt && t.sm.zoomable ? Ao(t) : Co(t))
            }), "out" != i && "manual" != i ? (Wt.stop(), qt.stop(), Wt.attr({"fill-opacity": Y}), qt.attr({"fill-opacity": Y}), t.stop(), t.attr({"fill-opacity": 1}), t.sm.labels.forEach(function (t) {
                t.sm && t.sm.pill && (t.sm.pill.stop(), t.sm.pill.attr({"fill-opacity": 1}))
            }), t.animate({"stroke-width": t.sm.border_hover_size * (wt / Mt) * Ct * 1.25}, 1e3 * O)) : (Wt.attr({"fill-opacity": 1}), qt.attr({"fill-opacity": 1})), Wt.animate({"stroke-width": G * (wt / Mt) * Ct * 1.25}, 1e3 * O)
        }

        function Fo(t) {
            if (k && "-1" != w && "region" == t.sm.type) {
                if (!N) return;
                wo()
            } else "state" == t.sm.type || "region" == t.sm.type || N ? wo() : b && "out" != t.sm.type && wo()
        }

        function Io(t) {
            return {x: t.x, y: t.y, w: t.w, h: t.h}
        }

        function Po() {
            M.sm && E && (Ne.hide(), E = !1, M.sm && Be.call(M), st = !1)
        }

        function Ro(i, n, a) {
            if (!qe) {
                Po(), to && (to.stop(), to = !1), $e && i != $e && Be.call($e), M = !1, i, Ne.hide(), E = !1, qe = !0, i.sm.zooming_dimensions = Eo(i);
                var r = Io(i.sm.zooming_dimensions), s = Io(ge.sm.zooming_dimensions);
                if (Tt = i.sm.zooming_dimensions.r, Bo(i, n), nt || ut && !B || n) he = r, Ot.setViewBox(r.x, r.y, r.w, r.h, !1), c(); else {
                    var l = e.Tweenable ? new e.Tweenable : new Tweenable;
                    _e = l.tween({
                        from: s, to: r, duration: 1e3 * O, easing: "easeOutQuad", step: function (t) {
                            !function (t) {
                                he = t, Ot.setViewBox(t.x, t.y, t.w, t.h, !1)
                            }(t)
                        }, finish: function () {
                            c()
                        }
                    })
                }
            }

            function c() {
                Fo(i), ge = i, qe = !1, st = !1, t.zoom_level = ge.sm.type, t.zoom_level_id = !!ge.sm.id && ge.sm.id, _o("zooming_complete", []), o.isFunction(a) && a()
            }
        }

        function jo(t) {
            var e = "", o = {};
            for (var i in n.paths) {
                var a = n.paths[i];
                a = Raphael._pathToAbsolute(a);
                var r, s = Raphael.pathBBox(a);
                r = s.x2 - s.x < 10 ? 10 : 1;
                var l = Math.round(s.x * r) / r, c = Math.round(s.y * r) / r, m = Math.round(s.y2 * r) / r;
                e += "'" + i + "':{x: " + l + ",y:" + c + ",x2:" + Math.round(s.x2 * r) / r + ",y2:" + m + "},", o[i] = s
            }
            return e = e.substring(0, e.length - 1), e += "}", t || console.log("The new state_bbox_array is: \n\n{" + e), o
        }

        function No(t) {
            var e = t.sm.description,
                i = nt ? '<a style="line-height: 1.5" id="xpic_sm_' + mt + '">X</a>' : '<a id="xpic_sm_' + mt + '" href="#"><img src="data:image/svg+xml,%3Csvg%20enable-background%3D%22new%200%200%20256%20256%22%20height%3D%22256px%22%20id%3D%22Layer_1%22%20version%3D%221.1%22%20viewBox%3D%220%200%20256%20256%22%20width%3D%22256px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M137.051%2C128l75.475-75.475c2.5-2.5%2C2.5-6.551%2C0-9.051s-6.551-2.5-9.051%2C0L128%2C118.949L52.525%2C43.475%20%20c-2.5-2.5-6.551-2.5-9.051%2C0s-2.5%2C6.551%2C0%2C9.051L118.949%2C128l-75.475%2C75.475c-2.5%2C2.5-2.5%2C6.551%2C0%2C9.051%20%20c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875s3.275-0.625%2C4.525-1.875L128%2C137.051l75.475%2C75.475c1.25%2C1.25%2C2.888%2C1.875%2C4.525%2C1.875%20%20s3.275-0.625%2C4.525-1.875c2.5-2.5%2C2.5-6.551%2C0-9.051L137.051%2C128z%22%2F%3E%3C%2Fsvg%3E" style="width: 100%" alt="Close" border="0" /></a>';
            i = '<div class="xmark_sm">' + i + "</div>";
            var n = t.sm.url ? t.sm.url : "", a = n, r = "javascript:" == a.substring(0, 11),
                s = 'return (function(e){window.open("' + n + '","_blank"); return false})()',
                l = r ? 'return (function(){window.location.href="' + n + '"; return false;})()' : 'return (function(){window.top.location.href="' + n + '"; return false;})()',
                c = o.replaceAll(a, "'", '"'), m = U ? s : l;
            r && (m = "(function(){" + c + "})()");
            var u = t.sm.description_mobile ? t.sm.description_mobile : '<div class="tt_mobile_sm"><a tabindex="0" class="btn_simplemaps" onClick=\'' + m + "'>" + L + "</a></div>";
            t.sm.on_click || (i = "", u = ""), "" != t.sm.url || t.sm.description_mobile || (u = "");
            var p = "" == e ? p = "" : '<div class="tt_custom_sm"; />' + e + "</div>";
            return '<div class="tt_sm"><div>' + (!!t.sm.hide_name ? "" : '<div class="tt_name_sm">' + t.sm.name + "</div>") + i + '<div style="clear: both;"></div></div>' + p + u + "</div></div>"
        }

        function Lo(t, e) {
            var o = t.sm.zooming_dimensions;
            if (o.w > e.sm.zooming_dimensions.w) return !1;
            var i = e.sm.bbox, n = i.x * zt, a = i.y * zt, r = i.x2 * zt, s = i.y2 * zt, l = o.x + o.w / 2,
                c = o.y + o.h / 2;
            return l > n && c > a && l < r && c < s
        }

        function Do(t, e) {
            var i = e.hover ? "_hover" : "", a = mt + "_pattern_" + t.sm.id + i, r = document.getElementById(a);
            r && o.delete_element(r);
            var s = ht.firstChild, l = s.namespaceURI, c = s.querySelector("defs"),
                m = document.createElementNS(l, "pattern"), u = t.sm.id;
            m.id = a, m.setAttribute("patternUnits", "objectBoundingBox");
            var p = document.createElementNS(l, "image"), d = document.createElementNS(l, "rect"),
                _ = e.image_color ? e.image_color : e.color;
            d.setAttribute("fill", "#ffffff"), d.setAttribute("opacity", e.bg_opacity), p.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e.image_url), m.appendChild(d), m.appendChild(p), c.appendChild(m), s.appendChild(c);
            var h = e.image_position, f = "auto" == e.image_size, v = "repeat" == h, y = "manual" == h,
                b = "center" == h, x = Raphael.pathBBox(n.paths[u]), w = x.x2 - x.x, k = x.y2 - x.y, z = w / k;
            return Raphael._preload(e.image_url, function () {
                var t = this.offsetWidth, o = this.offsetHeight, i = t / o;
                var n, a, r = function () {
                    var n = e.image_size;
                    return f ? v || y ? n = i > 1 ? t > w ? 1 : t / w : o > k ? 1 / z : o / k / z : b && (n = i / z, n = i > z ? n : 1 / n) : n > 1 && (n = e.image_size * Ct / w), n
                }(), s = w * r, l = s / i, c = 0, u = 0;
                if (v ? (n = r, a = r * z / i) : y ? (n = 1, a = 1, c = e.image_x * w, u = e.image_y * k) : b && (n = 1, a = 1, c = .5 * (w - s), u = .5 * (k - l)), d.setAttribute("x", 0), d.setAttribute("y", 0), d.setAttribute("width", w), d.setAttribute("height", k), d.setAttribute("fill", _), d.setAttribute("opacity", "1"), m.setAttribute("y", 0), m.setAttribute("x", 0), m.setAttribute("y", 0), m.setAttribute("width", n), m.setAttribute("height", a), p.setAttribute("x", c), p.setAttribute("y", u), p.setAttribute("width", s), g) {
                    var h = c + .5 * s, x = u + .5 * l;
                    p.setAttribute("transform", "rotate(-" + g + "," + h + "," + x + ")")
                }
                p.setAttribute("height", l)
            }), 'url("#' + m.id + '")'
        }

        function Ho(t) {
            t || ({}, ve = {}), Qe = n.state_bbox_array;
            var e = G * zt * Ct * 1.25;
            for (var o in fe = function (t) {
                var o = !ve[t], i = ie[t], a = i.path ? i.path : n.paths[t], r = o ? Ot.path(a) : ve[t];
                o && (r.sm = {id: t}), nt || r.node.setAttribute("class", "sm_state_" + t);
                var s = {
                        fill: i.color,
                        opacity: i.opacity,
                        stroke: i.border_color,
                        cursor: "pointer",
                        "stroke-opacity": 1,
                        "stroke-width": e,
                        "stroke-linejoin": "round"
                    }, l = i.border_hover_color ? i.border_hover_color : _.border_color,
                    c = i.border_hover_size ? i.border_hover_size : G, m = c * zt * Ct * 1.25,
                    u = {opacity: i.hover_opacity, fill: i.hover_color, stroke: l, "stroke-width": m};
                if (r.sm.image = !1, i.image_url && !nt) {
                    var d = Do(r, {
                        hover: !1,
                        image_url: i.image_url,
                        image_size: i.image_size,
                        image_position: i.image_position,
                        image_x: i.image_x,
                        image_y: i.image_y,
                        image_color: i.image_color,
                        bg_opacity: i.image_background_opacity
                    });
                    if (r.sm.image = !0, s.fill = d, i.image_hover_url) {
                        d = Do(r, {
                            hover: !0,
                            image_url: i.image_hover_url,
                            image_size: i.image_hover_size,
                            image_position: i.image_hover_position,
                            image_x: i.image_hover_x,
                            image_y: i.image_hover_y,
                            image_color: i.image_hover_color,
                            bg_opacity: i.image_background_opacity
                        });
                        u.fill = d
                    } else u.fill = d
                }
                i.inactive && (s.cursor = "default"), i.image_source && (r.sm.ignore_hover = !0, s.fill = "url(" + p + i.image_source + ")"), (i.border_hover_color || i.border_hover_size) && i.emphasize ? r.sm.emphasizable = !0 : r.sm.emphasizable = !1, r.sm.border_hover_size = c, r.attr(s), r.transform(jt), r.sm.attributes = s, r.sm.over_attributes = u, r.sm.description = i.description, r.sm.adjacent_attributes = {"fill-opacity": Y}, r.sm.hide = i.hide, r.sm.hide_label = i.hide_label, r.sm.hide_name = i.hide_name, o && (r.sm.region = !1), r.sm.name = i.name ? i.name : n.names[t], r.sm.name || (r.sm.name = t), r.sm.url = i.url, r.sm.inactive = i.inactive, r.sm.on_click = fo(i.popup), r.sm.popup_off = vo(i.popup), r.sm.labels = [], r.sm.zp = i.zoom_percentage, r.sm.zoomable = i.zoomable, r.sm.description_mobile = i.description_mobile, r.sm.type = "state", r.sm.hide_labels = i.hide_label, r.sm.content = No(r);
                var h = Qe[t];
                h || (h = Raphael.pathBBox(n.paths[t]));
                var f = {x: h.x, x2: h.x2, y: h.y, y2: h.y2};
                r.sm.bbox = f, r.sm.bbox.width = f.x2 - f.x, r.sm.bbox.height = f.y2 - f.y, r.sm.pulse_speed = i.pulse_speed, r.sm.pulse_size = i.pulse_size, r.sm.pulse_color = i.pulse_color ? i.pulse_color : i.border_color, r.sm.hide ? r.hide() : o && Ft.push(r), o && (ve[t] = r, Wt.push(r))
            }, re) fe(o);
            fe[-1], Wt.hide()
        }

        function qo() {
            Dt.attr({fill: _.background_color, "fill-opacity": V, stroke: "none"})
        }

        function Wo(t) {
            if (t || (ye = {}), A) for (var e in A) {
                var i = ae[e], n = A[e], a = t ? ye[e] : Ot.set();
                if (!t) {
                    if (a.sm = {}, a.sm.states = [], ye[e]) {
                        console.log("Duplicate Regions");
                        continue
                    }
                    for (var r = [], s = 0; s < n.states.length; s++) {
                        var l = n.states[s], c = ve[l];
                        c ? c.sm.region ? console.log(c.sm.name + " already assigned to a region") : (c.sm.region = e, a.sm.states.push(l), nt && c.sm.ignore_hover && (i.color || i.hover_color) || a.push(c), r.push(c.sm.bbox)) : console.log(l + " does not exist")
                    }
                    i.x && i.y && i.x2 && i.y2 && (r = [{
                        x: i.x,
                        y: i.y,
                        x2: i.x2,
                        y2: i.y2
                    }]), a.sm.bbox = o.bbox_union(r)
                }
                var m = {"fill-opacity": i.opacity, cursor: "pointer"}, u = {"fill-opacity": i.hover_opacity};
                i.color && (m.fill = i.color), i.hover_color && (u.fill = i.hover_color), i.inactive && (m.cursor = "default"), a.sm.attributes = m, a.sm.name = n.name, a.sm.description = i.description, a.sm.description_mobile = i.description_mobile, a.sm.url = i.url, a.sm.labels = Ot.set(), a.sm.on_click = fo(i.popup), a.sm.over_attributes = u, a.sm.hide_name = i.hide_name, a.sm.adjacent_attributes = {"fill-opacity": Y}, a.sm.zoomable = i.zoomable, a.sm.popup_off = vo(i.popup), a.sm.zp = i.zoom_percentage, a.sm.inactive = i.inactive, a.sm.type = "region", a.sm.id = e, a.sm.content = No(a), t || (Yt.push(a), ye[e] = a), a.sm.zooming_dimensions = Eo(a)
            }
            if (!t) {
                ye[-1] = {};
                var p = ye[-1];
                p.sm = {}, p.sm.type = "out", p.sm.zp = 1;
                var d = o.clone(At);
                if (d.width = d.x2 - d.x, d.height = d.y2 - d.y, p.sm.bbox = d, p.sm.zooming_dimensions = Eo(p), ge = p, "object" == typeof w ? ((be = {}).sm = {
                    type: "manual",
                    zp: 1,
                    bbox: w
                }, be.sm.zooming_dimensions = Eo(be), w = -1, k = !1) : -1 == w || w in ye || (w in ve ? (Xe = ve[w], k = !1) : console.log("The initial_zoom is not the id of a region or state"), w = -1), y) {
                    ye[-2] = {};
                    var _ = ye[-2];
                    _.sm = {type: "manual", zp: 1};
                    var h = Eo(ye[w]), f = h.w, v = h.h, g = h.w * (y - 1) * .5, b = h.h * (y - 1) * .5;
                    _.sm.zooming_dimensions = {x: h.x - g, y: h.y - b, w: f * y, h: v * y, r: y}
                }
            }
        }

        function Yo(t) {
            var e = t.getBBox(!0);
            if (nt) {
                var o = t._getBBox(!0);
                e.height = o.height
            }
            var i = .5 * e.width, n = .5 * e.height, a = t.sm.point0;
            return {x: a.x - i, y: a.y - n, x2: a.x + i, y2: a.y + n, width: e.width, height: e.height}
        }

        function Vo() {
            for (var t in o.clear_sets([Ut, Bt, qt]), xe = {}, ze = {}, we = {}, le = le.reverse(), ke = function (t) {
                var e = le[t], i = !1, a = !1;
                if (le.hasOwnProperty(t)) {
                    var r = !xe[t], s = Ot.set(), l = {x: 1 * e.x, y: 1 * e.y}, c = {}, m = !1, u = !1;
                    if ("state" == e.parent_type ? m = ve[e.parent_id] : "region" == e.parent_type ? m = ye[e.parent_id] : "location" == e.parent_type && (m = Me[e.parent_id]), !e.x && !e.y && m) if ("location" == m.sm.type) a = !0, c.x = m.sm.x, c.y = m.sm.y, l = m.sm.point0, i = !0, m.sm.auto_size && (u = !0); else if ("state" == m.sm.type) {
                        var p = m.sm.bbox;
                        if (p.cx && p.cy) var d = T, h = S; else d = (p.x + p.x2) / 2, h = (p.y + p.y2) / 2;
                        e.x = d, e.y = h, c.x = d, c.y = h, l = {x: d, y: h}
                    }
                    if (e.parent_type, m) {
                        if ("Not Named" == e.name && m && (e.name = m.sm.id), r) {
                            if (!a) {
                                var f = o.rotate([e.x, e.y], jt);
                                c = {x: f[0], y: f[1]}
                            }
                            var v = Ot.text(c.x, c.y, e.name);
                            xe[t] = v
                        } else v = xe[t];
                        v.sm = {}, v.sm.hide = e.hide, m && (m.sm.hide_label || m.sm.hide) && (v.sm.hide = !0), v.sm.parent = m, m.sm.labels.push(v), m.sm.region && ye[m.sm.region].sm.labels.push(v);
                        var y = {
                            "stroke-width": 0,
                            fill: e.color,
                            "font-size": e.size,
                            "font-weight": "bold",
                            cursor: "pointer",
                            "font-family": e.font_family,
                            "text-anchor": e.anchor,
                            opacity: e.opacity
                        }, g = {fill: e.hover_color, opacity: e.hover_opacity}, b = {fill: e.color, opacity: e.opacity};
                        if (m.sm.inactive && (y.cursor = "default"), v.attr(y), v.sm.attributes = y, v.sm.over_attributes = g, v.sm.out_attributes = b, v.sm.type = "label", v.sm.id = t, v.sm.scale = i || e.scale, v.sm.scale_limit = e.scale_limit, v.sm.x = c.x, v.sm.y = c.y, v.sm.point0 = l, v.sm.line_x = e.line_x, v.sm.line_y = e.line_y, v.sm.line = !1, v.sm.rotate = e.rotate, v.transform(Xo(v, zt)), e.display ? v.sm.display = e.display : "region" == e.parent_type ? v.sm.display = "out" : "location" == e.parent_type ? v.sm.display = m.sm.display : v.sm.display = _.labels_display ? _.labels_display : "all", v.sm.display_ids = !!e.display_ids && e.display_ids, (e.line || e.pill || u) && (v.sm.bbox = Yo(v)), "auto" == e.display && "state" == e.parent_type) {
                            v.sm.display = 1e-4, v.sm.bbox || (v.sm.bbox = Yo(v));
                            var x = [1.01, .501, .251, .1251, .06251, .031251], w = n.paths[m.sm.id], k = m.sm.bbox;
                            for (var z in x) {
                                var M = x[z], E = Yo(v), A = E.width * M * .5, C = E.height * M * .5,
                                    T = .5 * (E.x2 + E.x), S = .5 * (E.y2 + E.y), O = T + A, B = (h = S - C, S + C),
                                    F = (d = T - A) > k.x && O < k.x2, I = h > k.y && B < k.y2;
                                if (F && I) {
                                    var P = Raphael.isPointInsidePath(w, d, h), R = Raphael.isPointInsidePath(w, O, h),
                                        j = Raphael.isPointInsidePath(w, d, B), N = Raphael.isPointInsidePath(w, O, B),
                                        L = P && R && j && N, D = E.width / M < Mt;
                                    if (L && D) {
                                        v.sm.display = M;
                                        break
                                    }
                                }
                                if (!v.sm.scale) break
                            }
                        }
                        if (e.line) {
                            var H = Qo(v), q = Ot.path(H), W = e.line_size * Ct * zt * 1.25,
                                Y = {stroke: e.line_color, cursor: "pointer", "stroke-width": W};
                            q.attr(Y), q.sm = {}, q.sm.type = "label", v.sm.pill = !1, q.sm.size = e.line_size, q.sm.id = t, v.sm.line = q, Bt.push(q), s.push(q)
                        }
                        if ("state" == m.sm.type && e.pill) {
                            var V = v.sm.bbox, Q = 1.45 * V.width, X = e.width ? e.width : Q, U = 1.15 * V.height,
                                Z = (d = v.sm.x - .5 * X, h = v.sm.y - .5 * U, "auto" != e.pill_radius ? e.pill_radius : U / 5);
                            if (ze[t]) var G = ze[t]; else {
                                G = Ot.rect(d, h, X, U, Z);
                                ze[t] = G
                            }
                            if (G.transform(Xo(v, zt)), G.sm = {}, G.sm.parent = m, G.sm.attributes = o.clone(m.sm.attributes), m.sm.image && (G.sm.attributes.fill = ie[m.sm.id].color), G.sm.over_attributes = o.clone(m.sm.over_attributes), m.sm.image && (G.sm.over_attributes.fill = ie[m.sm.id].hover_color), G.sm.adjacent_attributes = o.clone(m.sm.adjacent_attributes), G.attr(G.sm.attributes), o.x_in_array(v.sm.display, ["state", "all"]) && (m.sm.bbox = o.bbox_union([m.sm.bbox, v.sm.bbox])), o.x_in_array(v.sm.display, ["region", "all"]) && m.sm.region) {
                                var J = ye[m.sm.region];
                                J.sm.bbox = o.bbox_union([J.sm.bbox, v.sm.bbox]), J.sm.zooming_dimensions = !1, J.sm.zooming_dimensions = Eo(J)
                            }
                            v.sm.pill = G, qt.push(G), s.push(G), s.push(v)
                        } else s.push(v);
                        if ("out" != v.sm.display && "all" != v.sm.display || v.sm.hide ? s.hide() : Rt.push(s), "location" != v.sm.parent.sm.type || v.sm.line || It.push(s), Ut.push(s), we[t] = s, nt || v.node.setAttribute("class", "sm_label_" + t), u) {
                            var K = (_.location_auto_padding ? 1 + 2 * _.location_auto_padding : 1.3) * v.sm.bbox.width / Ct,
                                $ = (ot = v.sm.parent).sm.labels, tt = ot.sm.shape_type;
                            "triangle" == tt ? K *= 1.3 : "star" == tt && (K *= 2);
                            var et = ot.sm.id;
                            ne[et].size = K, Ee(et);
                            var ot = Me[et];
                            v.sm.parent = ot, ot.sm.labels = $, ot.sm.labels.push(v), ot.sm.auto_size = !0
                        }
                    } else console.log("The following object does not exist: " + t)
                }
            }, le) ke(t);
            Ut.hide()
        }

        function Qo(t) {
            var e = t.sm.bbox, i = e.x2 - e.x, n = e.y2 - e.y, a = t.sm.scale ? Tt : 1, r = .5 * (1 - a) * i,
                s = .5 * (1 - a) * n, l = t.sm.line_x, c = t.sm.line_y, m = !l || !c, u = t.sm.parent.sm.type;
            if ("location" == u && m) l = t.sm.parent.sm.point0.x, c = t.sm.parent.sm.point0.y; else if ("state" == u && m) {
                var p = t.sm.parent.sm.bbox;
                l = .5 * (p.x2 + p.x), c = .5 * (p.y2 + p.y)
            }
            var d = {x: l, y: c}, _ = [];
            _.push({x: e.x2 - r, y: .5 * (e.y + e.y2)}), _.push({
                x: e.x + r,
                y: .5 * (e.y + e.y2)
            }), _.push({x: .5 * (e.x + e.x2), y: e.y + s}), _.push({x: .5 * (e.x + e.x2), y: e.y2 - s});
            var h = {};
            for (var f in _) {
                var v = _[f], y = o.distance(v, d);
                (0 == f || y < h.distance) && (h.label = v, h.location = d, h.distance = y)
            }
            return o.linePath(h.label.x, h.label.y, h.location.x, h.location.y)
        }

        function Xo(t, e, o, i, n, a) {
            var r = void 0 === i ? t.sm.x : i, s = void 0 === n ? t.sm.y : n;
            return void 0 === o && (o = "0,0"), void 0 === a && (a = t.sm.rotate), "t " + o + " s" + e + "," + e + "," + r + "," + s + "r" + a
        }

        function Uo(t) {
            for (var e in I) Ue[e] = I[e];
            var i = [];
            for (var e in Ue) i.push(e);
            for (var e in o.clear_sets([Vt]), Me = {}, Ee = function (t) {
                var e = "center", n = ne[t];
                if ("image" != n.type) var a = {
                    "stroke-width": n.border * zt * Ct,
                    stroke: n.border_color,
                    fill: n.color,
                    opacity: n.opacity,
                    cursor: "pointer"
                }, r = {
                    "stroke-width": n.hover_border * zt * Ct,
                    stroke: n.border_color,
                    fill: n.hover_color,
                    opacity: n.hover_opacity,
                    cursor: "pointer"
                }; else {
                    e = n.image_position;
                    a = {cursor: "pointer"}, r = {cursor: "pointer"}
                }
                n.inactive && (a.cursor = "default");
                var s = ne[t].type, l = n.size * Ct;
                if (n.x && n.y) (c = {}).x = n.x, c.y = n.y; else var c = Mo(n.lat, n.lng);
                var m = o.rotate([c.x, c.y], jt), u = {x: m[0], y: m[1]};
                if ("auto" == n.size) {
                    var d = {sm: {}};
                    return d.sm.display = n.display, d.sm.auto_size = !0, d.sm.type = "location", d.sm.hide_label = !1, d.sm.labels = [], d.sm.point0 = c, d.sm.x = u.x, d.sm.y = u.y, d.sm.shape_type = s, d.sm.id = t, void (Me[t] = d)
                }
                if ("circle" == s) var _ = Ot.circle(u.x, u.y, .5 * l), h = {
                    x: u.x - .5 * l * Tt,
                    y: u.y - .5 * l * Tt,
                    x2: u.x + .5 * l * Tt,
                    y2: u.y + .5 * l * Tt
                }; else if (o.x_in_array(s, i)) {
                    var f = "S" + l + "," + l + ",0,0 T" + u.x + "," + u.y,
                        v = Raphael.transformPath(Ue[s], f).toString() + "Z";
                    "marker" == s && (e = "bottom-center");
                    h = Raphael.pathBBox(v), _ = Ot.path(v)
                } else if ("image" == s) {
                    var y = n.image_url ? n.image_url : p + n.image_source;
                    _ = Ot.image(y, 0, 0);
                    a.src = y, _.sm = {};
                    h = !1;
                    if (Raphael._preload(y, function () {
                        var t = this.width / this.height, o = l, i = o * t, n = u.x - i / 2,
                            a = "bottom-center" == e ? u.y - o : u.y - o / 2;
                        _.attr({height: o, width: i, x: n, y: a}), _.sm.bbox = {x: n, y: a, x2: n + i, y2: a + o}
                    }), n.image_hover_url || n.image_hover_source) {
                        var g = n.image_hover_url ? n.image_hover_url : p + n.image_hover_source;
                        r.src = g
                    }
                } else {
                    var b = l, x = b, w = u.x - x / 2, k = u.y - b / 2;
                    _ = Ot.rect(w, k, x, b), h = {x: w, y: k, x2: w + x, y2: k + kt}
                }
                _.sm = {}, _.sm.image = "image" == s, _.sm.attributes = a, _.attr(a), _.sm.original_transform = jt, _.sm.over_attributes = r, _.sm.id = t, _.sm.name = n.name, _.sm.scale = n.scale, _.sm.scale_limit = n.scale_limit, _.sm.position = e, _.sm.url = n.url, _.sm.type = "location", _.sm.shape_type = s, _.sm.description = n.description, _.sm.description_mobile = n.description_mobile, _.sm.inactive = n.inactive, _.sm.on_click = fo(n.popup), _.sm.popup_off = vo(n.popup), _.sm.pulse = n.pulse;
                var z = "bottom" == n.position;
                _.sm.underlay = z, _.sm.pulse_speed = n.pulse_speed, _.sm.pulse_size = n.pulse_size, _.sm.pulse_color = n.pulse_color ? n.pulse_color : n.color, _.sm.x = u.x, _.sm.y = u.y, _.sm.point0 = c, _.sm.bbox = h, _.sm.labels = [], _.sm.size = l, _.sm.hide = n.hide, _.sm.hide_name = n.hide_name, _.sm.display = n.display, _.sm.display_ids = !!n.display_ids && n.display_ids, _.transform(Xo(_, Tt * zt)), ("region" == _.sm.display || "state" == _.sm.display || n.hide) && _.hide(), _.sm.content = No(_), z ? Xt.push(_) : Qt.push(_), Vt.push(_), Me[t] = _, nt || _.node.setAttribute("class", "sm_location_" + t)
            }, ce) Ee(e)
        }

        function Zo(e) {
            var o = t.zoom_level, i = t.zoom_level_id, n = !!e.sm.region && ye[e.sm.region];
            return n ? "out" == o ? n : "region" == o ? i == n.sm.id ? e : n : "state" == o ? ve[i].sm.region === n.sm.id ? e : n : "manual" == o ? Tt > n.sm.zooming_dimensions.r || !n.sm.zoomable ? n : e : void 0 : e
        }

        function Go(e) {
            var o = t.zoom_level, i = t.zoom_level_id;
            if ("state" == o) return i != e.sm.id;
            if ("region" != o) return !1;
            var n = !!e.sm.region && ye[e.sm.region];
            return !n || i != n.sm.id && void 0
        }

        function Jo(t, e, o, i) {
            t.sm.labels && t.sm.labels.forEach(function (t) {
                if (t.sm) {
                    var n = t.sm.pill;
                    "over" == e ? (t.stop(), Ze(t, "over"), n && Ge(n, "over")) : "reset" != e && "out" != e || (Ze(t, "out"), n && (Ge(n, "out", i), o && Ge(n, "adjacent", i)))
                }
            })
        }

        function Ko() {
            Fe = function () {
                this.sm.parent && Oe.call(this.sm.parent)
            }, Ie = function () {
                this.sm.parent && Be.call(this.sm.parent)
            }, Te = function (t) {
                this.sm.parent && Se.call(this.sm.parent, t)
            }, Ae = function (t, e) {
                if (t.sm.pulse || e) {
                    var o = t.sm.shape_type;
                    if (!("location" != t.sm.type || "image" == o || Tt < .05)) {
                        var i = t.clone();
                        Qt.toFront(), It.toFront();
                        var n = 1 * t.sm.pulse_size,
                            a = {"stroke-width": 4 * t.attrs["stroke-width"], "stroke-opacity": 0};
                        i.attr({"fill-opacity": 0, stroke: t.sm.pulse_color});
                        var r = t.sm.scale ? Tt : 1, s = .5 * (n - 1) * t.sm.size * r * zt,
                            l = "bottom-center" == t.sm.position ? Xo(t, r * zt * n, "0," + s) : Xo(t, r * zt * n);
                        a.transform = l, i.animate(a, 1e3 * t.sm.pulse_speed, "ease-out", function () {
                            i.remove()
                        })
                    }
                }
            }, Ce = function (t) {
                if (!nt || !at) for (var e = Array.isArray(t) ? t : [t], o = 0; o < e.length; o++) {
                    var i = ve[e[o]];
                    if (!i || !i.sm || Tt < .05) return;
                    i.sm.shape_type;
                    var n = i.clone(), a = 1 * i.sm.pulse_size, r = {
                        "stroke-width": 4 * (i.attrs["stroke-width"] ? i.attrs["stroke-width"] : 1),
                        "stroke-opacity": 0,
                        "fill-opacity": 0
                    };
                    n.attr({"fill-opacity": 0, stroke: i.sm.pulse_color});
                    var s = i.sm.bbox;
                    i.sm.x = (s.x2 + s.x) / 2, i.sm.y = (s.y2 + s.y) / 2, i.sm.rotate = 0;
                    var l = Xo(i, a, "0,0");
                    r.transform = jt + l;
                    i.sm.bbox;
                    n.animate(r, 1e3 * i.sm.pulse_speed, "ease-out", function () {
                        n.remove()
                    })
                }
            }, Oe = function () {
                if (bo(), ao(), mi(), (this.id || "set" != !this.type) && !Je && !uo) {
                    var t = Zo(this);
                    if (t.sm.on_click) var e = !0;
                    if (Le = t.sm.popup_off, !(We || Ye || qe || E && st)) {
                        if ($e && !z) return !1;
                        if ($e = this, t && (function (t) {
                            t.sm.labels && t.sm.labels.forEach(function (e) {
                                t.sm.inactive ? e.attr({cursor: "default"}) : e.attr({cursor: "pointer"})
                            })
                        }(t), !t.sm.inactive)) if (function (t) {
                            "state" == t.sm.type && t.sm.emphasizable && (Je = !0, t.insertBefore(Ft), setTimeout(function () {
                                Je = !1
                            }, 1))
                        }(t), ro(t), e) {
                            if (!E) {
                                if (t.stop(), nt && "location" == t.sm.type && "image" == t.sm.shape_type) return;
                                t.sm.ignore_hover || (Ze(t, "over"), Ae(t)), Jo(t, "over")
                            }
                        } else {
                            if (Ne.show(t), t.stop(), nt && "location" == t.sm.type && "image" == t.sm.shape_type) return;
                            t.sm.ignore_hover || (Ze(t, "over"), Jo(t, "over"), Ae(t), Ce(t))
                        }
                    }
                }
            }, Be = function (t, e) {
                if (e && "function" == typeof e || (e = !1), !qe && !uo && ($e = !1, this.id || "set" != !this.type)) {
                    var o = Zo(this);
                    if (o && !o.sm.inactive) if (so(o), st) E && !0 !== t || (Ke(o, e), to = o); else {
                        if (Ne.hide(), Go(o)) {
                            if (qe) return !1;
                            o.sm.ignore_hover || Ze(o, "out", !0), Ze(o, "adjacent", !0), Jo(o, "out", !0)
                        } else {
                            if (nt && "location" == o.sm.type && "image" == o.sm.shape_type) return;
                            o.sm.ignore_hover || Ze(o, "out", !0), Jo(o, "out")
                        }
                        Ke(o, e)
                    }
                }
            };
            var e = !1;
            Se = function (o) {
                if (!(qe || We || Ye)) {
                    bo(), ut && (e = !0, setTimeout(function () {
                        e = !1
                    }, 500)), e || Po();
                    var i = Zo(this);
                    if (!i.sm.inactive && (co(i, o), !t.ignore_clicks)) {
                        if (st = i.sm.on_click, o) {
                            if (E && "touchend" == o.type) return;
                            if (!E && "touchstart" == o.type) return
                        }
                        if (st && Ne.update_pos(), Le = i.sm.popup_off, !i.sm.zoomable || "region" != i.sm.type && ge == i && "out" != i.sm.type) if (st) {
                            if (M == i || !M || (c = M, "state" == (l = i).sm.type && "region" == c.sm.type && c.sm.id == l.sm.region) || "region" != i.sm.type && "region" == t.zoom_level || Ke(M), lo(i, o), o) {
                                var n = $o(o);
                                Ne.pos(o, {l: n.x, u: n.y})
                            }
                            Ne.show(i), E = !0, Jo(i, "over"), Ae(i), nt && "location" == i.sm.type && "image" == i.sm.shape_type || i.sm.ignore_hover || i.attr(i.sm.over_attributes), M = i;
                            var a = document.getElementById("xpic_sm_" + mt);
                            a && (a.onclick = function () {
                                return Ne.hide(), E = !1, M.sm && Be.call(M), st = !1, _o("close_popup", []), !1
                            })
                        } else {
                            lo(i, o);
                            var r = i.sm.url;
                            if ("" != r && !po) {
                                var s = "javascript" == r.substring(0, 10);
                                return !U || s ? void (s ? window.location.href = r : window.top.location.href = r) : (window.open(r, "_blank"), void Ne.hide())
                            }
                        } else mo(i, o), mi(), M && M.sm ? Be.call(M, !0, function () {
                            Ro(i), M = i
                        }) : (Ro(i), M = i);
                        var l, c
                    }
                }
            }, Pe = function (t) {
                if (void 0 === t && (t = !1), _o("back", []), ("out" == ge.sm.type || "region" == ge.sm.type && k) && N) window.location.href = "javascript:" + N; else if (Q && "state" == ge.sm.type && ge.sm.region) M ? Be.call(M, !0, function () {
                    Ro(ye[ge.sm.region])
                }) : Ro(ye[ge.sm.region], !1, t); else {
                    var e = Lo(ge, ye[w]), o = "manual" == ge.sm.type && e ? ye[w] : ye[-1];
                    M && M.sm && "region" != M.sm.type ? Be.call(M, !0, function () {
                        Ro(o)
                    }) : Ro(o, !1, t)
                }
            }, Re = function () {
                Pe()
            }
        }

        function $o(t) {
            if (t.touches) {
                var e = t.changedTouches ? t.changedTouches[0] : t.touches[0];
                return {x: e.clientX, y: e.clientY}
            }
            var o = at ? t.clientY + document.documentElement.scrollTop : t.pageY;
            return {x: at ? t.clientX + document.documentElement.scrollLeft : t.pageX, y: o}
        }

        function ti() {
            var t = !1;

            function e(e) {
                if (!qe && e.touches && e.touches.length > 1) {
                    Ye = !0;
                    var i = function (t) {
                        var e = {x: t.touches[0].pageX, y: t.touches[0].pageY},
                            i = {x: t.touches[1].pageX, y: t.touches[1].pageY};
                        return o.distance(e, i)
                    }(e);
                    if (t) {
                        var n = i - t;
                        Math.abs(n) > 10 && (n > 0 ? te() : ee(), t = i)
                    } else t = i
                }
            }

            o.addEvent(vt, "touchstart", e), o.addEvent(vt, "touchmove", e), o.addEvent(vt, "touchend", function (e) {
                t = !1, setTimeout(function () {
                    Ye = !1
                }, 100)
            })
        }

        function ei() {
            Wt.toBack(), Xt.toBack(), Lt.toBack(), Pt && Pt.toFront(), Ut.toFront(), Qt.toFront(), It.toFront()
        }

        function oi(t) {
            if (!t) {
                rt ? (Wt.mouseup(Se), Lt.mouseup(eo), Gt.mouseup(Re), Lt.mouseup(mi)) : (Wt.hover(Oe, Be), Wt.click(Se), Lt.click(eo), Gt.click(Re), Lt.hover(mi, mi)), x && function () {
                    function t() {
                        ii()
                    }

                    var e;
                    je = function () {
                        clearTimeout(e), e = setTimeout(t, 300)
                    }, window.addEventListener ? (window.addEventListener("resize", je, !1), window.addEventListener("orientationchange", je, !1)) : (window.attachEvent("resize", je, !1), window.attachEvent("orientationchange", je, !1));
                    nt && (document.body.onresize = function () {
                        t()
                    })
                }(), b && (Wt.touchstart(Se), Wt.touchend(Se), Gt.touchend(Pe), function () {
                    function t(t) {
                        var o = $o(t), a = o.x, r = o.y, s = (i - a) * e.r, l = (n - r) * e.r, c = 5 * e.r;
                        return (Math.abs(s) > c || Math.abs(l) > c) && (We = !0), {
                            x: e.x + s,
                            y: e.y + l,
                            w: e.w,
                            h: e.h,
                            r: e.r
                        }
                    }

                    var e, i, n, a = !1;

                    function r(t) {
                        if (E) return !1;
                        t.preventDefault ? t.preventDefault() : t.returnValue = !1, e = {
                            x: he.x,
                            y: he.y,
                            w: he.w,
                            h: he.h,
                            r: he.w / Mt / zt
                        }, a = !0;
                        var o = $o(t);
                        i = o.x, n = o.y, Ne.hide(), Ne.pos(t, {l: i, u: n})
                    }

                    function s(e) {
                        if (a && !(e.touches && e.touches.length > 1)) {
                            var o = t(e);
                            Ot.setViewBox(o.x, o.y, o.w, o.h)
                        }
                    }

                    function l(e) {
                        if (!a || !We) return We = !1, void (a = !1);
                        var o = t(e);
                        Ot.setViewBox(o.x, o.y, o.w, o.h), he = o, (ge = {sm: {}}).sm.zooming_dimensions = he, ge.sm.type = "manual", a = !1, setTimeout(function () {
                            We = !1
                        }, 1), wo()
                    }

                    o.addEvent(ht, "mousedown", r), o.addEvent(ht, "mousemove", s), o.addEvent(ht, "mouseup", l), o.addEvent(ht, "mouseleave", l), o.addEvent(ht, "touchstart", r), o.addEvent(ht, "touchmove", s), o.addEvent(ht, "touchend", l)
                }(), ti()), ft.mouseIsOver = !1, ft.onmouseover = function () {
                    this.mouseIsOver = !0
                }, ft.onmouseout = function () {
                    this.mouseIsOver = !1
                }, ft.onwheel = function (t) {
                    ft.mouseIsOver && b && C && (t.preventDefault(), t.deltaY < 0 ? te() : ee())
                }, o.addEvent(document, "keyup", function (t) {
                    if ("auto" == f) {
                        var e = vt.contains(document.activeElement);
                        gt.style.display = e ? "block" : "none"
                    }
                })
            }
            Vt.hover(Oe, Be), Vt.click(Se), Ut.hover(Fe, Ie), Ut.click(Te), b && (Vt.touchend(Se), Vt.touchstart(Se), Ut.touchend(Te))
        }

        function ii() {
            if (!(ft.offsetWidth < 1)) {
                yo(!0), Ot.setSize(wt, kt);
                var t = G * (wt / Mt) * Ct * 1.25;
                Wt && Vt && (Wt.forEach(function (e) {
                    e.attr({"stroke-width": t}), e.sm.attributes["stroke-width"] = t, e.sm.over_attributes["stroke-width"] = e.sm.border_hover_size * (wt / Mt) * Ct * 1.25
                }), Vt.forEach(function (t) {
                    "image" != ne[t.sm.id].type && (t.sm.attributes["stroke-width"] = ne[t.sm.id].border * (wt / Mt) * Ct * 1.25, t.sm.over_attributes["stroke-width"] = ne[t.sm.id].hover_border * (wt / Mt) * Ct * 1.25, t.attr({"stroke-width": t.sm.attributes["stroke-width"]}))
                }), Bt.forEach(function (t) {
                    var e = t.sm.size * (wt / Mt) * Ct * 1.25;
                    t.attr({"stroke-width": e})
                }), Pt.forEach(function (t) {
                    var e = t.sm.size * (wt / Mt) * Ct * 1.25;
                    t.attr({"stroke-width": e})
                })), bo(), de = K || (wt / 2 > 250 ? wt / 2 : 250)
            }
        }

        function ni(t) {
            var e = y ? ye[-2] : ye[w], o = ye[w];
            if (N || xo(), !t) {
                if (Xe) var i = Xe; else if (be) i = be; else i = e;
                Ro(i, !Xe && !be || !y)
            }
            if (k && -1 != w) {
                Lt.show(), N || xo();
                for (var n = 0; n < o.sm.states.length; n++) {
                    var a = o.sm.states[n], r = ve[a];
                    r.sm.hide || r.show()
                }
                for (var n in xe) {
                    var s = xe[n], l = we[n];
                    s.sm.parent && "state" == s.sm.parent.sm.type && (s.sm.parent.sm.region == o.sm.id && s.sm.parent.sm.region || (s.sm.hide = !0, l.hide()))
                }
                return Pt.forEach(function (t) {
                    Raphael.isPointInsideBBox(o.sm.bbox, t.sm.bbox.x, t.sm.bbox.y) && t.show()
                }), void (!t && y && Ro(ye[w]))
            }
            Lt.show(), Ft.show(), Rt.show(), Pt.show(), t || !y || Xe || be || Ro(ye[w])
        }

        function ai(t) {
            ho(), zo(), Ho(!0), Wo(!0), Uo(), Vo(), qo(), Bo(ge, !0), ei(), oi(!0), ii(), ni(!0), Fo(ge), wi(), ao(!0), _o("refresh_complete", []), o.isFunction(t) && t()
        }

        function ri(e) {
            var r, m, O, B, F, I, j, N, L, H;
            (i = t.mapdata, n = t.mapinfo, ht && delete window.paper, xi(), function () {
                d = i.state_specific, _ = i.main_settings;
                var t = document.getElementsByTagName("script"), e = t[t.length - 1].src,
                    o = "no" != _.back_image && _.back_image;
                c = "no" != _.back_image_url && _.back_image_url, u = "default" != _.images_directory && _.images_directory, p = u || e.substring(0, e.lastIndexOf("/usmap.js") + 1) + "map_images/", !c && o && (c = p + o)
            }(), nt = "VML" == Raphael.type, at = !!window.document.documentMode, rt = !!o.isMobile.iOS(), ut = !!o.isMobile.any(), pt = _.pop_ups ? _.pop_ups : _.popups, dt = void 0 === _.mobile_scaling && "no" != _.mobile_scaling ? 1 : _.mobile_scaling, st = !1, Le = vo(pt), mt = void 0 === _.div ? "map" : _.div, w = void 0 === _.initial_zoom ? -1 : _.initial_zoom, k = "yes" == _.initial_zoom_solo && -1 != w, y = void 0 !== _.fly_in_from && "no" != _.fly_in_from && _.fly_in_from, x = "responsive" == _.width, "0" == (g = !!_.rotate && _.rotate) && (g = !1), D = "no" != _.zoom, b = "yes" == _.manual_zoom, f = void 0 === _.keyboard_navigation ? "auto" : _.keyboard_navigation, v = void 0 === _.legend_position ? "inside" : _.legend_position, C = "no" != _.allow_scrolling, A = !(!n.default_regions || !D) && n.default_regions, i.regions && (A = i.regions), i.labels && (W = i.labels), z = !1, M = !1, E = !1, h = !1, function () {
                if ("continent" != a) return !1;
                var t = 0;
                for (var e in n.paths) t++;
                return t > 8
            }()) ? alert("The continent map can't be used with other data.") : (ho(), function () {
                if (ft = document.getElementById(mt), vt = !!document.getElementById(mt + "_holder") && document.getElementById(mt + "_holder")) {
                    ft.removeChild(vt);
                    var t = document.getElementById("tt_sm_" + mt);
                    t && t.parentNode.removeChild(t)
                }
                vt = document.createElement("div"), _t = document.createElement("div"), gt = document.createElement("div"), yt = document.createElement("div"), ht = document.createElement("div"), bt = document.createElement("div"), _t.id = mt + "_outer", yt.id = mt + "_zoom", gt.id = mt + "_access", bt.id = mt + "_legend", ht.id = mt + "_inner", vt.id = mt + "_holder", vt.style.position = "relative", vt.setAttribute("tabIndex", 0), vt.style.outline = "none", ht.style.position = "relative", _t.style.position = "absolute", yt.style.position = "absolute", gt.style.position = "absolute", gt.style.maxWidth = "75%", bt.style.position = "inside" == v ? "absolute" : "relative", yt.style.zIndex = "1", _t.style.zIndex = "1", gt.style.zIndex = "1", gt.style.display = "yes" == f ? "block" : "none", bt.style.zIndex = "1", ft.appendChild(vt), vt.appendChild(yt), vt.appendChild(_t), vt.appendChild(gt), vt.appendChild(ht), vt.appendChild(bt)
            }(), yo(), function () {
                if (Ot = Raphael(ht, wt, kt), Lt = Ot.set(), Dt = Ot.rect(At.x - 2 * Mt, At.y - 2 * Et, 5 * Mt, 5 * Et), T) {
                    T.indexOf("/osm/noattr/") > -1 && (l = !0);
                    var t = S || At;
                    Ht = Ot.image(T, t.x, t.y, t.x2 - t.x, t.y2 - t.y), Lt.push(Ht)
                }
                Lt.push(Dt), Lt.transform(Nt), Lt.hide(), Wt = Ot.set(), Ft = Ot.set(), Yt = Ot.set(), Vt = Ot.set(), Qt = Ot.set(), Xt = Ot.set(), Ut = Ot.set(), It = Ot.set(), Rt = Ot.set(), Pt = Ot.set(), qt = Ot.set(), Bt = Ot.set(), Ot.set().push(Wt, Vt, Lt, Ut, Pt)
            }(), bo(), function () {
                (He = document.createElement("div")).style.cssText = "overflow: visible !important; clip-path: none !important; display:inline !important; opacity:1 !important; transform: none !important; visibility: visible !important; z-index: 1 !important; right: 5px !important; bottom: 5px !important; z-index: 1 !important; position: absolute !important; filter: opacity(1) !important;", ht.appendChild(He);
                var t = "font: 12px Verdana, Arial, Helvetica, sans-serif !important; cursor: pointer !important; float: right !important; color: #000000 !important; text-decoration: none !important;";
                if (l) {
                    var e = document.createElement("a");
                    e.href = "https://www.openstreetmap.org/copyright", e.title = "Background © OpenStreetMap contributors", e.innerHTML = s ? "| OSM" : "&copy; OSM", e.style.cssText = t, e.style.marginLeft = ".5em", He.appendChild(e)
                }
                if (s) {
                    var o = document.createElement("a");
                    o.style.cssText = t, o.href = "https://simplemaps.com", o.title = "Built with with SimpleMaps", o.innerHTML = "&copy; Simplemaps.com", He.appendChild(o)
                }
            }(), ot || function () {
                if (!Ve) {
                    var t = s(["borderRadius", "MozBorderRadius", "WebkitBorderRadius"]),
                        e = t ? t + ": " + (ut ? 2 * et : et) + "px;" : "";
                    de = K || (wt / 2 > 250 ? wt / 2 : 250);
                    var i = s(["boxShadow", "MozBoxShadow", "WebkitBoxShadow"]),
                        n = i ? i + ": " + 3 * tt + "px " + 3 * tt + "px " + 4 * tt + "px rgba(0,0,0,.5);" : "";
                    if (tt < .01 && (n = ""), ut) {
                        var a = /(\d+)(px|em)(.*)/g.exec(it);
                        it = parseFloat(a[1]) * dt + a[2] + a[3]
                    }
                    var r = ".tt_mobile_sm{margin-top: .4em;} .tt_sm{" + e + n + "z-index: 1000000; background-color: " + J + "; padding: .6em; opacity:" + $ + "; font: " + it + "; color: black;} .tt_name_sm{float: left; font-weight: bold} .tt_custom_sm{overflow: hidden;}";
                    r += ".btn_simplemaps{color: black;text-decoration: none;background: #ffffff;display: inline-block;padding: .5em .5em;margin: 0; width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; line-height: 1.43;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid;border-radius: .3em;}    .btn_simplemaps:hover{  text-decoration: underline;}", r += ".xmark_sm{float: " + (nt ? "left" : "right") + "; margin-left: .5em; cursor: pointer; line-height: 0px; width: 1.3em !important;}", o.new_style(r), Ve = !0
                }

                function s(t) {
                    for (var e = document.documentElement, o = 0; o < t.length; o++) if (t[o] in e.style) {
                        var i = t[o];
                        return i = (i = (i = (i = (i = (i = i.replace("borderRadius", "border-radius")).replace("MozBorderRadius", "-moz-border-radius")).replace("WebkitBorderRadius", "-webkit-border-radius")).replace("boxShadow", "box-shadow")).replace("MozBoxShadow", "-moz-box-shadow")).replace("WebkitBoxShadow", "-webkit-box-shadow")
                    }
                }
            }(), I = o.findPos(ht), j = I[0], N = I[1], L = 0, H = 0, Ne = {
                create: function () {
                    (F = document.createElement("div")).setAttribute("id", "tt_sm_" + mt), F.style.position = "absolute", F.style.display = "none", ht.appendChild(F), ht.onmousemove = this.pos, F.onmousemove = this.pos
                }, show: function (t) {
                    Le || (h = !1, null == F && Ne.create(), F.style.display = "block", F.style.zIndex = 2, F.style.maxWidth = de + "px", F.innerHTML = t.sm.content, Ne.update_pos(t))
                }, reset_pos: function (t, e, o) {
                    null == F && Ne.create(), Ne.set_pos(0 + e, 0 + t, o)
                }, update_pos: function (t) {
                    Ne.set_pos(r, m, t)
                }, pos: function (t, e) {
                    e ? (r = e.u, m = e.l) : (r = at ? event.clientY + document.documentElement.scrollTop : t.pageY, m = at ? event.clientX + document.documentElement.scrollLeft : t.pageX), r -= N, m -= j, Le || z || h || E && st || Ne.set_pos(r, m)
                }, set_pos: function (t, e, o) {
                    if (F) {
                        var i = !t || !e;
                        if (o && o.sm.on_click && ("yes" == P || "auto" == P && wt < 401) || i) {
                            F.style.top = "-100px", F.style.left = "-100px", F.style.bottom = "auto", F.style.right = "auto", L = parseInt(F.offsetHeight, 10), H = parseInt(F.offsetWidth, 10);
                            var n = wt - H > 0 ? .5 * (wt - H) : 0, a = kt - L > 0 ? .5 * (kt - L) : 0;
                            F.style.top = a + "px", F.style.left = n + "px", F.style.right = "auto", F.style.bottom = "auto"
                        } else {
                            if (B = 0 + .5 * kt, e > (O = 0 + .5 * wt) && t > B) r = 4; else if (e < O && t > B) r = 3; else if (e > O && t < B) r = 2; else var r = 1;
                            "below" == R ? (3 == r && (r = 1), 4 == r && (r = 2)) : "above" == R && (1 == r && (r = 3), 2 == r && (r = 4)), 1 == r ? (F.style.bottom = "auto", F.style.top = t + 5 + "px", F.style.left = e + 5 + 5 + "px", F.style.right = "auto") : 2 == r ? (F.style.bottom = "auto", F.style.top = t + 5 + "px", F.style.right = wt - e + 5 + "px", F.style.left = "auto") : 3 == r ? (F.style.bottom = kt - t + 5 + "px", F.style.top = "auto", F.style.left = e + 5 + 3 + "px", F.style.right = "auto") : (F.style.bottom = kt - t + 5 + "px", F.style.top = "auto", F.style.right = wt - e + 5 + "px", F.style.left = "auto")
                        }
                    }
                }, hide: function () {
                    null != F && (F.style.display = "none"), (I = o.findPos(ht)) && (j = I[0], N = I[1])
                }
            }, ko(), zo(), qo(), Ho(), Wo(), setTimeout(function () {
                Uo(), Vo(), function () {
                    var t = i.lines ? i.lines : i.borders;
                    if (t) {
                        for (var e in t) {
                            var o = t[e], n = pe[e], a = n.size * (wt / Mt) * Ct * 1.25, r = !1;
                            if (n.origin_location && n.destination_location) {
                                var s = Me[n.origin_location].sm.point0, l = Me[n.destination_location].sm.point0;
                                if (r = "M " + s.x + "," + s.y + " " + l.x + "," + l.y + " Z", n.angle) {
                                    var c = parseFloat(n.angle);
                                    if (c > -61 && c < 61) {
                                        s.x <= l.x && (c *= -1);
                                        var m = Raphael.transformPath(r, "R" + c + "," + s.x + "," + s.y + "S2").toString(),
                                            u = Raphael.transformPath(r, "R-90S2").toString(),
                                            p = Raphael.pathIntersection(m, u)[0];
                                        r = "M " + s.x + "," + s.y + " C" + s.x + "," + s.y + "," + p.x + "," + p.y + "," + l.x + "," + l.y
                                    }
                                }
                            }
                            var d = r || o.path, _ = Ot.path(d);
                            _.transform(jt), _.attr({
                                stroke: n.color,
                                fill: "none",
                                cursor: "pointer",
                                "stroke-dasharray": [n.dash],
                                "stroke-width": a,
                                "stroke-linejoin": "round",
                                "stroke-miterlimit": 4
                            }), _.sm = {}, _.sm.size = n.size, _.sm.bbox = _.getBBox(!0), nt || _.node.setAttribute("class", "sm_line_" + e), Pt.push(_)
                        }
                        Pt.hide()
                    }
                }(), function () {
                    gt.style.right = "0em", gt.style.top = "0em";
                    var t = void 0 === _.navigate_title ? "Navigate" : _.navigate_title,
                        e = void 0 === _.keyboard_omit ? "" : _.keyboard_omit;
                    if (!(e.indexOf("navigat") > -1)) {
                        var i = document.createElement("select");
                        i.options.add(new Option(t, "-1")), i.options.add(new Option("Back", "back")), b && (i.options.add(new Option("Zoom in", "in")), i.options.add(new Option("Zoom out", "out")), i.options.add(new Option("Left", "left")), i.options.add(new Option("Right", "right")), i.options.add(new Option("Up", "up")), i.options.add(new Option("Down", "down"))), i.style.marginRight = ".5em", i.style.marginTop = ".5em", i.style.float = "left", gt.appendChild(i), i.onchange = function (t) {
                            if ("-1" == this.value) return !1;
                            "back" == this.value && Pe(), "out" == this.value && ee(), "in" == this.value && te(), "left" == this.value && oe("-.25", "x"), "right" == this.value && oe(".25", "x"), "up" == this.value && oe("-.25", "y"), "down" == this.value && oe(".25", "y"), setTimeout(function () {
                                i.value = "-1"
                            }, 1e3)
                        }
                    }
                    var n = void 0 === _.states_title ? "States" : _.states_title,
                        a = void 0 === _.regions_title ? "Regions" : _.regions_title,
                        r = void 0 === _.locations_title ? "Locations" : _.locations_title, s = {
                            state: {title: n, array: ve},
                            location: {title: r, array: Me},
                            region: {title: a, array: ye}
                        };
                    for (var l in s) {
                        var c = s[l], m = e.indexOf(l) > -1, u = Object.size(c.array);
                        if (!(u < 1 || u < 2 && "region" == l || m)) {
                            var p = document.createElement("select");
                            p.options.add(new Option(c.title, "-1")), p.style.marginRight = ".5em", p.style.marginTop = ".5em", p.style.float = "left";
                            var d = [];
                            for (var h in c.array) d.push(c.array[h]);
                            var f = d.sort(function (t, e) {
                                return t.sm.name > e.sm.name ? 1 : -1
                            });
                            for (h = 0; h < f.length; h++) {
                                var v = f[h];
                                "out" == v.sm.type || v.sm.inactive || v.sm.hide || p.options.add(new Option(v.sm.name, v.sm.id))
                            }
                            p.onchange = o.callback_closure({entry: c, dropdown: p}, function (t) {
                                var e = t.dropdown, o = t.entry;
                                if ("-1" == e.value) return !1;
                                var i = o.array[e.value];
                                go(i.sm.type, i.sm.id)
                            }), gt.appendChild(p)
                        }
                    }
                }(), function () {
                    if (!(!i.legend || !i.legend.entries || i.legend.entries.length < 1 || at && nt)) {
                        var t = {};
                        bt.style.left = "0em", bt.style.bottom = "0em", bt.style.padding = ".8em", bt.style.lineHeight = "1em", bt.style["background-color"] = at ? "#ffffff" : "rgba(186, 186, 186, 0.2)";
                        var e = document.createElement("ul");
                        e.style.display = "inline-block", e.style["list-style-type"] = "none", e.style.margin = "0", e.style.padding = "0", bt.appendChild(e);
                        var n = "#" + mt + "_holder .sm_legend_item{float: left; cursor: pointer; margin-right: .75em; margin-bottom: .4em; margin-top: .4em;} #" + mt + "_holder{font: " + it + ";}";
                        o.new_style(n);
                        for (var a = i.legend.entries, r = 0; r < a.length; r++) m(r, a[r]);
                        var s = i.legend.html;
                        s && "no" != s ? bt.innerHTML = s : function () {
                            for (var t = 0; t < a.length; t++) {
                                var o = a[t];
                                o.shape = o.shape ? o.shape : "circle", o.color = o.color ? o.color : "#cecece", o.type = o.type ? o.type : "location";
                                var i = document.createElement("li");
                                i.setAttribute("class", "sm_legend_item"), i.setAttribute("data-id", t);
                                var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                if (n.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), n.style.display = "inline-block", n.style["margin-right"] = ".2em", n.style.width = "1em", n.style.height = "1em", n.style.stoke = "#ffffff", n.style["stoke-width"] = "3", n.style.fill = "#ff0067", n.style["vertical-align"] = "-0.15em", "circle" == o.shape) (r = document.createElementNS("http://www.w3.org/2000/svg", "circle")).setAttribute("cx", "50"), r.setAttribute("cy", "50"), r.setAttribute("r", "40"); else if ("square" == o.shape) (r = document.createElementNS("http://www.w3.org/2000/svg", "rect")).setAttribute("x", "10"), r.setAttribute("y", "10"), r.setAttribute("width", "80"), r.setAttribute("height", "80"); else {
                                    var r, s = Ue[o.shape];
                                    (r = document.createElementNS("http://www.w3.org/2000/svg", "path")).setAttribute("d", s), n.setAttribute("width", "1.5"), n.setAttribute("height", "1.5"), r.setAttribute("stroke-width", ".1")
                                }
                                ["square", "circle"].indexOf(o.shape) > -1 ? (r.setAttribute("stroke-width", "10"), n.setAttribute("viewBox", "0 0 100 100"), n.setAttribute("width", "100"), n.setAttribute("height", "100")) : ["diamond", "star"].indexOf(o.shape) > -1 ? (n.setAttribute("viewBox", "-.5 -.6 1 1.2"), n.setAttribute("height", "1.8")) : ["triangle"].indexOf(o.shape) > -1 ? (n.setAttribute("viewBox", "-.6 -.7 1.2 1.1"), n.setAttribute("width", "1.8"), n.setAttribute("height", "1.8")) : ["heart"].indexOf(o.shape) > -1 ? (n.setAttribute("viewBox", "-.7 -.5 1.3 1"), n.setAttribute("width", "2")) : ["marker"].indexOf(o.shape) > -1 && (n.setAttribute("viewBox", "-.6 -.9 1.1 .8"), n.setAttribute("width", "1.7"), n.setAttribute("height", "1.7")), r.setAttribute("fill", o.color), r.setAttribute("stroke", "white"), n.appendChild(r), i.appendChild(n);
                                var l = document.createTextNode(o.name);
                                i.appendChild(l), e.appendChild(i)
                            }
                        }();
                        var l = vt.getElementsByClassName("sm_legend_item");
                        for (r = 0; r < l.length; r++) o.addEvent(l[r], "mouseover", c), o.addEvent(l[r], "mousedown", c)
                    }

                    function c() {
                        for (var e = this.dataset.id, o = t[e], i = 0; i < o.length; i++) {
                            var n = o[i].sm;
                            ("state" == n.type ? Ce : pi)(n.id)
                        }
                    }

                    function m(e, o) {
                        t[e] = [];
                        var i = "state" == o.type ? ve : Me;
                        for (var n in i) {
                            var a = i[n];
                            o.ids ? o.ids.split(",").indexOf(a.sm.id) > -1 && t[e].push(a) : a.sm.attributes.fill != o.color || a.sm.hide || t[e].push(a)
                        }
                    }
                }(), To(), ei(), Ne.create(), Ko(), oi(), ni(), wi(), _o("complete", []), o.isFunction(e) && e(), ao()
            }, 1))
        }

        function si(t, e) {
            Ro(ye[t], !1, e)
        }

        function li(t, e) {
            Ro(ve[t], !1, e)
        }

        function ci(t, e, o) {
            void 0 === e && (e = 4), void 0 === o && (o = function () {
            });
            var i = {sm: {type: "manual", zp: e}}, n = Me[t], a = n.sm.size * zt * e, r = a * Et / Mt,
                s = n.sm.x - .5 * a, l = n.sm.y - .5 * r, c = a / (Mt * zt);
            i.sm.zooming_dimensions = {x: s, y: l, w: a, h: r, r: c}, Ro(i, !1, function () {
                o(), wo()
            })
        }

        function mi() {
            $e && Be.call($e), z && (z = !1, st || (Ne.hide(), E = !1))
        }

        function ui(e, o, i) {
            if (void 0 === i && (i = function () {
            }), "state" == e) var n = ve[o]; else if ("region" == e) n = ye[o]; else n = Me[o];
            var a = n.sm.on_click, r = ge.sm.zooming_dimensions;
            if ("location" != e) {
                var s = n.sm.bbox, l = .5 * (s.x + s.x2), c = .5 * (s.y + s.y2);
                l *= zt, c *= zt
            } else l = n.sm.x, c = n.sm.y;
            var m = (l - r.x) / Tt, u = (c - r.y) / Tt, p = m > 1.1 * wt || u > 1.1 * kt,
                d = !n.sm.region && "region" == t.zoom_level;
            return p || d ? si("-1", function () {
                ui(e, o, i)
            }) : n.sm.region && "out" == t.zoom_level ? si(n.sm.region, function () {
                ui(e, o, i)
            }) : (z = !0, a ? Se.call(n) : Oe.call(n), Ne.reset_pos(m, u, n), h = !0, z = !1, i(), !0)
        }

        function pi(t) {
            var e = Me[t];
            e && Ae(e, !0)
        }

        function di() {
            Ne.hide(), E = !1, st ? Be.call(M) : $e && Be.call($e)
        }

        function _i(t, e) {
            me(t);
            var i = ve[t].sm.labels;
            fe(t);
            for (var n = 0; n < i.length; n++) {
                var a = i[n].sm.id;
                ue(a), ke(a)
            }
            o.isFunction(e) && e()
        }

        function hi() {
            uo = !0, Ne.hide()
        }

        function fi() {
            uo = !1
        }

        function vi() {
            po = !0
        }

        function yi() {
            po = !1
        }

        function gi(t) {
            Pe(t)
        }

        function bi(t) {
            Ce(t)
        }

        function xi() {
            t.calibrate = jo, t.get_xy = no, t.proj = Mo, t.load = ri, t.region_zoom = si, t.state_zoom = li, t.zoom_in = !1, t.zoom_out = !1, t.location_zoom = ci, t.zoom_to_popup = go, t.back = gi, t.popup = ui, t.pulse = pi, t.pulse_state = bi, t.popup_hide = di, t.zoom_level = "out", t.ignore_clicks = !1, t.zoom_level_id = !1, t.disable_urls = vi, t.enable_urls = yi, t.disable_popups = hi, t.enable_popups = fi, t.refresh = ai, t.refresh_state = _i, t.loaded = !0, t.trial = r
        }

        function wi() {
            t.states = ve, t.regions = ye, t.locations = Me, t.labels = xe, t.tooltip = Ne
        }
    }

    window[t] = u, e.docReady(function () {
        if (function (t, e) {
            (n = u.hooks[t]) && n.apply(null, e);
            for (var o = u.plugin_hooks[t], i = 0; i < o.length; i++) {
                var n;
                (n = o[i]) && n.apply(null, e)
            }
        }("ready"), !window[t].loaded) for (var e = 0; e < c.length; e++) {
            var o = c[e];
            !(!o || !o.mapdata || "no" == o.mapdata.main_settings.auto_load) && function (t) {
                setTimeout(function () {
                    t.load()
                }, 1)
            }(o)
        }
    }), c.push(u)
}("simplemaps_countrymap");;
/*!
 * Lightbox v2.11.4
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.lightbox=b(a.jQuery)}(this,function(a){function b(b){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=a.extend({},this.constructor.defaults),this.option(b)}return b.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1,sanitizeTitle:!1},b.prototype.option=function(b){a.extend(this.options,b)},b.prototype.imageCountLabel=function(a,b){return this.options.albumLabel.replace(/%1/g,a).replace(/%2/g,b)},b.prototype.init=function(){var b=this;a(document).ready(function(){b.enable(),b.build()})},b.prototype.enable=function(){var b=this;a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(c){return b.start(a(c.currentTarget)),!1})},b.prototype.build=function(){if(!(a("#lightbox").length>0)){var b=this;a('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" role="button" tabindex="0" aria-label="Previous image" href="" ></a><a class="lb-next" role="button" tabindex="0" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel" role="button" tabindex="0"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close" role="button" tabindex="0"></a></div></div></div></div>').appendTo(a("body")),this.$lightbox=a("#lightbox"),this.$overlay=a("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.$image=this.$lightbox.find(".lb-image"),this.$nav=this.$lightbox.find(".lb-nav"),this.containerPadding={top:parseInt(this.$container.css("padding-top"),10),right:parseInt(this.$container.css("padding-right"),10),bottom:parseInt(this.$container.css("padding-bottom"),10),left:parseInt(this.$container.css("padding-left"),10)},this.imageBorderWidth={top:parseInt(this.$image.css("border-top-width"),10),right:parseInt(this.$image.css("border-right-width"),10),bottom:parseInt(this.$image.css("border-bottom-width"),10),left:parseInt(this.$image.css("border-left-width"),10)},this.$overlay.hide().on("click",function(){return b.end(),!1}),this.$lightbox.hide().on("click",function(c){"lightbox"===a(c.target).attr("id")&&b.end()}),this.$outerContainer.on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return 0===b.currentImageIndex?b.changeImage(b.album.length-1):b.changeImage(b.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return b.currentImageIndex===b.album.length-1?b.changeImage(0):b.changeImage(b.currentImageIndex+1),!1}),this.$nav.on("mousedown",function(a){3===a.which&&(b.$nav.css("pointer-events","none"),b.$lightbox.one("contextmenu",function(){setTimeout(function(){this.$nav.css("pointer-events","auto")}.bind(b),0)}))}),this.$lightbox.find(".lb-loader, .lb-close").on("click keyup",function(a){if("click"===a.type||"keyup"===a.type&&(13===a.which||32===a.which))return b.end(),!1})}},b.prototype.start=function(b){function c(a){d.album.push({alt:a.attr("data-alt"),link:a.attr("href"),title:a.attr("data-title")||a.attr("title")})}var d=this,e=a(window);e.on("resize",a.proxy(this.sizeOverlay,this)),this.sizeOverlay(),this.album=[];var f,g=0,h=b.attr("data-lightbox");if(h){f=a(b.prop("tagName")+'[data-lightbox="'+h+'"]');for(var i=0;i<f.length;i=++i)c(a(f[i])),f[i]===b[0]&&(g=i)}else if("lightbox"===b.attr("rel"))c(b);else{f=a(b.prop("tagName")+'[rel="'+b.attr("rel")+'"]');for(var j=0;j<f.length;j=++j)c(a(f[j])),f[j]===b[0]&&(g=j)}var k=e.scrollTop()+this.options.positionFromTop,l=e.scrollLeft();this.$lightbox.css({top:k+"px",left:l+"px"}).fadeIn(this.options.fadeDuration),this.options.disableScrolling&&a("body").addClass("lb-disable-scrolling"),this.changeImage(g)},b.prototype.changeImage=function(b){var c=this,d=this.album[b].link,e=d.split(".").slice(-1)[0],f=this.$lightbox.find(".lb-image");this.disableKeyboardNav(),this.$overlay.fadeIn(this.options.fadeDuration),a(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var g=new Image;g.onload=function(){var h,i,j,k,l,m;f.attr({alt:c.album[b].alt,src:d}),a(g),f.width(g.width),f.height(g.height);var n=g.width/g.height;m=a(window).width(),l=a(window).height(),k=m-c.containerPadding.left-c.containerPadding.right-c.imageBorderWidth.left-c.imageBorderWidth.right-20,j=l-c.containerPadding.top-c.containerPadding.bottom-c.imageBorderWidth.top-c.imageBorderWidth.bottom-c.options.positionFromTop-70,"svg"===e?(n>=1?(i=k,h=parseInt(k/n,10)):(i=parseInt(j/n,10),h=j),f.width(i),f.height(h)):(c.options.fitImagesInViewport?(c.options.maxWidth&&c.options.maxWidth<k&&(k=c.options.maxWidth),c.options.maxHeight&&c.options.maxHeight<j&&(j=c.options.maxHeight)):(k=c.options.maxWidth||g.width||k,j=c.options.maxHeight||g.height||j),(g.width>k||g.height>j)&&(g.width/k>g.height/j?(i=k,h=parseInt(g.height/(g.width/i),10),f.width(i),f.height(h)):(h=j,i=parseInt(g.width/(g.height/h),10),f.width(i),f.height(h)))),c.sizeContainer(f.width(),f.height())},g.src=this.album[b].link,this.currentImageIndex=b},b.prototype.sizeOverlay=function(){var b=this;setTimeout(function(){b.$overlay.width(a(document).width()).height(a(document).height())},0)},b.prototype.sizeContainer=function(a,b){function c(){d.$lightbox.find(".lb-dataContainer").width(g),d.$lightbox.find(".lb-prevLink").height(h),d.$lightbox.find(".lb-nextLink").height(h),d.$overlay.trigger("focus"),d.showImage()}var d=this,e=this.$outerContainer.outerWidth(),f=this.$outerContainer.outerHeight(),g=a+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right,h=b+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;e!==g||f!==h?this.$outerContainer.animate({width:g,height:h},this.options.resizeDuration,"swing",function(){c()}):c()},b.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},b.prototype.updateNav=function(){var a=!1;try{document.createEvent("TouchEvent"),a=!!this.options.alwaysShowNavOnTouchDevices}catch(a){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(a&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),a&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),a&&this.$lightbox.find(".lb-next").css("opacity","1"))))},b.prototype.updateDetails=function(){var a=this;if(void 0!==this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title){var b=this.$lightbox.find(".lb-caption");this.options.sanitizeTitle?b.text(this.album[this.currentImageIndex].title):b.html(this.album[this.currentImageIndex].title),b.fadeIn("fast")}if(this.album.length>1&&this.options.showImageNumberLabel){var c=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(c).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return a.sizeOverlay()})},b.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){(new Image).src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){(new Image).src=this.album[this.currentImageIndex-1].link}},b.prototype.enableKeyboardNav=function(){this.$lightbox.on("keyup.keyboard",a.proxy(this.keyboardAction,this)),this.$overlay.on("keyup.keyboard",a.proxy(this.keyboardAction,this))},b.prototype.disableKeyboardNav=function(){this.$lightbox.off(".keyboard"),this.$overlay.off(".keyboard")},b.prototype.keyboardAction=function(a){var b=a.keyCode;27===b?(a.stopPropagation(),this.end()):37===b?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):39===b&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},b.prototype.end=function(){this.disableKeyboardNav(),a(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),this.options.disableScrolling&&a("body").removeClass("lb-disable-scrolling")},new b});

!function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=2)}({1:function(e,t,i){self,e.exports=(()=>{"use strict";var e={d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>i,divideNumbers:()=>n});const i=(e,t={})=>{const{action:i="start",duration:r=1e3,delay:s=16}=t;if("stop"===i)return void o(e);if(o(e),!/[0-9]/.test(e.innerHTML))return;const l=n(e.innerHTML,{duration:r||e.getAttribute("data-duration"),delay:s||e.getAttribute("data-delay")});e._countUpOrigInnerHTML=e.innerHTML,e.innerHTML=l[0]||"&nbsp;",e.style.visibility="visible";const a=function(){e.innerHTML=l.shift()||"&nbsp;",l.length?(clearTimeout(e.countUpTimeout),e.countUpTimeout=setTimeout(a,s)):e._countUpOrigInnerHTML=void 0};e.countUpTimeout=setTimeout(a,s)},o=e=>{clearTimeout(e.countUpTimeout),e._countUpOrigInnerHTML&&(e.innerHTML=e._countUpOrigInnerHTML,e._countUpOrigInnerHTML=void 0),e.style.visibility=""},n=(e,t={})=>{const{duration:i=1e3,delay:o=16}=t,n=i/o,r=e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),s=[];for(let e=0;e<n;e++)s.push("");for(let e=0;e<r.length;e++)if(/([0-9.][,.0-9]*[0-9]*)/.test(r[e])&&!/<[^>]+>/.test(r[e])){let t=r[e];const i=[...t.matchAll(/[.,]/g)].map(e=>({char:e[0],i:t.length-e.index-1})).sort((e,t)=>e.i-t.i);t=t.replace(/[.,]/g,"");let o=s.length-1;for(let e=n;e>=1;e--){let r=parseInt(t/n*e,10);r=i.reduce((e,{char:t,i:i})=>e.length<=i?e:e.slice(0,-i)+t+e.slice(-i),r.toString()),s[o--]+=r}}else for(let t=0;t<n;t++)s[t]+=r[e];return s[s.length]=e.toString(),s};return t})()},12:function(e,t){},17:function(e,t){},2:function(e,t,i){i(3),i(12),e.exports=i(17)},3:function(e,t,i){"use strict";i.r(t);var o=i(1),n=i.n(o),r={init:function(){!function(){function e(e,t,i,o){var n=$(e),r={mobileFirst:!0,dots:t,arrows:i,autoplay:!0,autoplaySpeed:3e3,prevArrow:'<span class="slick-pre"><i class="fa-solid fa-chevron-right"></i></span>',nextArrow:'<span class="slick-nxt"><i class="fa-solid fa-chevron-left"></i></span>',responsive:[{breakpoint:o,settings:"unslick"}]};n.slick(r),$(window).on("resize",(function(){if(!($(window).width()>o))return n.hasClass("slick-initialized")?void 0:n.slick(r)}))}$(".main-slider").slick({slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:3e3,arrows:!1}),e(".statics-slide",!1,!0,767),e(".slider-act",!0,!1,767),$(".img-slide").slick({slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!1,autoplaySpeed:3e3,prevArrow:'<button type="button" class="slick-prev fas fa-chevron-left">Next</button>',nextArrow:'<button type="button" class="slick-next fas fa-chevron-right">Next</button>'}),$(".calendrier-slider").slick({slidesToShow:3,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:3e3,arrows:!1,centerPadding:"0",responsive:[{breakpoint:768,settings:{arrows:!1,slidesToShow:1}},{breakpoint:425,settings:{arrows:!1,slidesToShow:1}}]}),$(".slider-news").slick({slidesToShow:3,slidesToScroll:2,dots:!1,autoplay:!1,autoplaySpeed:3e3,arrows:!1,centerPadding:"0",responsive:[{breakpoint:768,settings:{arrows:!1,slidesToShow:1}},{breakpoint:425,settings:{arrows:!1,slidesToShow:1}}]}),$(".slick-priv").on("click",(function(){$(".slider-news").slick("slickPrev")})),$(".slick-nixt").on("click",(function(){$(".slider-news").slick("slickNext")})),$(".slider-images").slick({slidesToShow:7,slidesToScroll:1,autoplay:!0,autoplaySpeed:800,arrows:!1,centerPadding:"0",responsive:[{breakpoint:1400,settings:{arrows:!1,slidesToShow:5,slidesToScroll:5}},{breakpoint:768,settings:{arrows:!1,slidesToShow:3}},{breakpoint:425,settings:{arrows:!1,slidesToShow:3}}]}),$("#calendar").datepicker({language:"fr",todayHighlight:!0});var t=$("section"),i=$("nav"),o=i.outerHeight();$(window).on("scroll",(function(){var e=$(this).scrollTop();t.each((function(){var n=$(this).offset().top-o,r=n+$(this).outerHeight();e>=n&&e<=r&&(i.find("li").removeClass("active"),t.removeClass("active"),$(this).addClass("active"),i.find('a[href="#'+$(this).attr("id")+'"]').parent("li").addClass("active"))}))})),$("#hide").click((function(){})),$('[data-visible="visible"]').each((function(){var e=$(this);e.on("click",(function(){var t=e.attr("data-handle-visible"),i=e.attr("data-handle-style");$(t).is(":visible")?($(t).hide(),e.toggleClass("fa-solid fa-circle-plus fa fa-circle-minus "),$(i).toggleClass("title-module edit")):($(t).show(),e.toggleClass("fa-solid fa-circle-plus fa fa-circle-minus"),$(i).toggleClass("title-module edit"))}))}))}(),$(".counter").each((function(){n()(this,{duration:3e3,delay:16})})),feather.replace()}};jQuery(document).ready((function(){r.init()}))}});;
"use strict";

var CustomUAEScript = function () {

  var submitExposedFilter = function () {
    $('.views-exposed-form .form-filter').keypress(function (event) {
      if (event.which === 13) {
        event.preventDefault();
        $('.views-exposed-form .form-submit').focus().click();
      }
    });

    $(document).on('change', '.views-exposed-form .form-filter', function () {
      $('.views-exposed-form .form-submit').focus().click();
    });
  };

  var initControls = function () {
    jQuery('.card-news, .card-events').on('DOMSubtreeModified', function () {
      feather.replace();
      /*initExposedDatepicker();
      console.log('dd');*/
    });

    jQuery('.navbar-nav .nav-link').on('click', function (e) {
      if (jQuery(this).attr('href') === '') {
        e.preventDefault();
      }
    });
  };

  var initExposedDatepicker = function () {
    jQuery(document).find('.exposed-datepicker').each(function () {
      $(this).datepicker({
        language: "fr",
        todayHighlight: true,
        format: "yyyy-mm-dd",
      }).on("changeDate", function (e) {
        $(this).closest('.input-search').find('input').val(getFormattedDate(e.date));
        $('.views-exposed-form .form-submit').focus().click();
        setTimeout(function () {
          initExposedDatepicker();
        }, 1000);
      });
    });
  };

  var handleBodyImage = function () {
    jQuery(document).find('.content-body img').each(function (i) {
      var currImg = $(this);
      currImg.wrap("<a data-lightbox='image-" + i + "' data-title='" + currImg.attr("alt") + "' href='" + currImg.attr("src") + "' />");
    });
  };

  var getFormattedDate = function (date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
  };

  var initCountryMap = function () {
    if (!jQuery('#country-map').length) {
      return;
    }

    let currentPath = '/' + drupalSettings.path.currentPath;
    let language = drupalSettings.language;
    let path = language === 'fr' ? '/formations' : '/' + language + '/formations';
    if (currentPath.indexOf('formations/') !== -1) {
      path = language === 'fr' ? currentPath : '/' + language + currentPath;
    }

    simplemaps_countrymap.load();

    const myLocations = {
      "0": {
        lat: "35.72425063782766",
        lng: "-5.538416549999996",
        name: "",
        type: "image",
        size: "29.5",
        image_url: "/themes/custom/uae/assets/images/maps/blank-br.png",
      },
      "1": {
        lat: "35.74325063782766",
        lng: "-5.27016549999996",
        name: "Martil",
        type: "image",
        size: "27",
        image_url: "/themes/custom/uae/assets/images/maps/martil-br.png",
        url: path + '?city=Martil'
      },
      "2": {
        lat: 35.338,
        lng: -5.42689,
        name: "Tétouan",
        type: "image",
        size: "41.4",
        image_url: "/themes/custom/uae/assets/images/maps/tetouan-br.png",
        url: path + '?city=Tétouan'
      },
      "3": {
        lat: 35.5250,
        lng: -6.0207,
        name: "Tanger",
        type: "image",
        size: "46.5",
        image_url: "/themes/custom/uae/assets/images/maps/tanger-br.png",
        url: path + '?city=Tanger'
      },
      "4": {
        lat: 34.726,
        lng: -3.93,
        name: "Al Hoceima",
        type: "image",
        size: "52.3",
        image_url: "/themes/custom/uae/assets/images/maps/hoceima-br.png",
        url: path + '?city=Al Hoceima'
      },
      "5": {
        lat: 34.895,
        lng: -4.822,
        name: "Chefchaouen",
        type: "image",
        size: "58.7",
        image_url: "/themes/custom/uae/assets/images/maps/chefchaouen-br.png",
        url: path + '?city=Chefchaouen'
      },
      "6": {
        lat: 34.46,
        lng: -5.435,
        name: "Ouezzane",
        type: "image",
        size: "46.6",
        image_url: "/themes/custom/uae/assets/images/maps/ouezzane-br.png",
        url: path + '?city=Ouezzaner'
      },
      "7": {
        lat: 34.74395951213762,
        lng: -5.9869015500000085,
        name: "Ksar El Kebir",
        type: "image",
        size: "21.13",
        image_url: "/themes/custom/uae/assets/images/maps/ksar-br.png",
        url: path + '?city=ksar el Kebir'
      },
      "8": {
        lat: 35.139,
        lng: -5.910,
        name: "Larache",
        type: "image",
        size: "26.1",
        image_url: "/themes/custom/uae/assets/images/maps/larache-br.png",
        url: path + '?city=Larache'
      },
    };

    setTimeout(function () {
      simplemaps_countrymap.region_zoom(0);
      simplemaps_countrymap_mapdata.main_settings.location_size = '10';
      simplemaps_countrymap_mapdata.main_settings.initial_zoom = '0';
      simplemaps_countrymap_mapdata.main_settings.state_color = '';
      //simplemaps_countrymap_mapdata.main_settings.border_color = '#f0f2f3';
      simplemaps_countrymap_mapdata.main_settings.border_size = '0';
      simplemaps_countrymap_mapdata.main_settings.initial_zoom_solo = 'yes';
      //simplemaps_countrymap_mapdata.main_settings.all_locations_hidden='yes';
      $.each(simplemaps_countrymap_mapdata.locations, function (i) {
        if (i > 8) {
          simplemaps_countrymap_mapdata.locations[i].hide = 'yes';
        } else {
          simplemaps_countrymap_mapdata.locations[i] = myLocations[i];
        }
      });
      simplemaps_countrymap.load();
    }, 3000);
  };

  return {
    init: function () {
      submitExposedFilter();
      initControls();
      initExposedDatepicker();
      initCountryMap();
      handleBodyImage();
    }
  }

}();

jQuery(document).ready(function () {
  CustomUAEScript.init();
});
;
