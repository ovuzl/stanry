;/*FB_PKG_DELIM*/

__d("TrustedTypesIEFixDOMPolicy",["TrustedTypes"],(function(a,b,c,d,e,f,g){"use strict";a={createHTML:function(a){return a}};b=c("TrustedTypes").createPolicy("dom-ie-fix",a);d=b;g["default"]=d}),98);
__d("UserAgent_DEPRECATED",[],(function(a,b,c,d,e,f){var g=!1,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;function x(){if(g)return;g=!0;var a=navigator.userAgent,b=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a),c=/(Mac OS X)|(Windows)|(Linux)/.exec(a);s=/\b(iPhone|iP[ao]d)/.exec(a);t=/\b(iP[ao]d)/.exec(a);q=/Android/i.exec(a);u=/FBAN\/\w+;/i.exec(a);v=/FBAN\/mLite;/i.exec(a);w=/Mobile/i.exec(a);r=!!/Win64/.exec(a);if(b){h=b[1]?parseFloat(b[1]):b[5]?parseFloat(b[5]):NaN;h&&document&&document.documentMode&&(h=document.documentMode);var d=/(?:Trident\/(\d+.\d+))/.exec(a);m=d?parseFloat(d[1])+4:h;i=b[2]?parseFloat(b[2]):NaN;j=b[3]?parseFloat(b[3]):NaN;k=b[4]?parseFloat(b[4]):NaN;k?(b=/(?:Chrome\/(\d+\.\d+))/.exec(a),l=b&&b[1]?parseFloat(b[1]):NaN):l=NaN}else h=i=j=l=k=NaN;if(c){if(c[1]){d=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);n=d?parseFloat(d[1].replace("_",".")):!0}else n=!1;o=!!c[2];p=!!c[3]}else n=o=p=!1}function y(){return x()||h}function a(){return x()||m>h}function b(){return y()&&r}function c(){return x()||i}function d(){return x()||j}function z(){return x()||k}function e(){return z()}function A(){return x()||l}function B(){return x()||o}function C(){return x()||n}function D(){return x()||p}function E(){return x()||s}function F(){return x()||s||t||q||w}function G(){return x()||v!=null?null:u}function H(){return x()||q}function I(){return x()||t}f.ie=y;f.ieCompatibilityMode=a;f.ie64=b;f.firefox=c;f.opera=d;f.webkit=z;f.safari=e;f.chrome=A;f.windows=B;f.osx=C;f.linux=D;f.iphone=E;f.mobile=F;f.nativeApp=G;f.android=H;f.ipad=I}),66);
__d("isScalar",[],(function(a,b,c,d,e,f){function a(a){return/string|number|boolean/.test(typeof a)}f["default"]=a}),66);
__d("DOM",["$","DOMQuery","Event","FBLogger","FbtResultBase","HTML","TrustedTypesIEFixDOMPolicy","UserAgent_DEPRECATED","createArrayFromMixed","fb-error","isNode","isScalar","isTextNode"],(function(a,b,c,d,e,f,g){a=function(a,b,c){a=document.createElement(a);b&&h.setAttributes(a,b);c!=null&&h.setContent(a,c);return a};var h={find:(b=d("DOMQuery")).find,findPushSafe:b.findPushSafe,scry:b.scry,getSelection:b.getSelection,contains:b.contains,getRootElement:b.getRootElement,isNodeOfType:b.isNodeOfType,isInputNode:b.isInputNode,create:a,setAttributes:function(a,b){b.type&&(a.type=b.type);for(var d in b){var e=b[d],f=/^on/i.test(d);f&&typeof e!=="function"&&c("FBLogger")("dom").warn("Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s",d,typeof e);if(d=="type")continue;else d=="style"?typeof e==="string"?a.style.cssText=e:Object.assign(a.style,e):f?c("Event").listen(a,d.substr(2),e):d in a?a[d]=e:a.setAttribute&&a.setAttribute(d,e)}},prependContent:function(a,b){if(!a)throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));return j(b,a,function(b){a.firstChild?a.insertBefore(b,a.firstChild):a.appendChild(b)})},insertAfter:function(a,b){if(!a||!a.parentNode)throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));var d=a.parentNode;return j(b,d,function(b){a.nextSibling?d.insertBefore(b,a.nextSibling):d.appendChild(b)})},insertBefore:function(a,b){if(!a||!a.parentNode)throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));var d=a.parentNode;return j(b,d,function(b){d.insertBefore(b,a)})},setContent:function(a,b){if(!a)throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));while(a.firstChild)i(a.firstChild);return h.appendContent(a,b)},appendContent:function(a,b){if(!a)throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));return j(b,a,function(b){a.appendChild(b)})},replace:function(a,b){if(!a||!a.parentNode)throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));var d=a.parentNode;return j(b,d,function(b){d.replaceChild(b,a)})},remove:function(a){i(typeof a==="string"?c("$")(a):a)},empty:function(a){a=typeof a==="string"?c("$")(a):a;while(a.firstChild)i(a.firstChild)}};function i(a){a.parentNode&&a.parentNode.removeChild(a)}function j(a,b,e){a=c("HTML").replaceJSONWrapper(a);if(a instanceof c("HTML")&&b.firstChild===null&&-1===a.toString().indexOf("<script")){var f=d("UserAgent_DEPRECATED").ie();if(!f||f>7&&!d("DOMQuery").isNodeOfType(b,["table","tbody","thead","tfoot","tr","select","fieldset"])){var g=f?'<em style="display:none;">&nbsp;</em>':"";b.innerHTML=c("TrustedTypesIEFixDOMPolicy").createHTML(g+a);f&&b.removeChild(b.firstChild);return Array.from(b.childNodes)}}else if(c("isTextNode")(b)){b.data=a;return[a]}g=document.createDocumentFragment();var h;f=[];b=[];var i=!1;a=c("createArrayFromMixed")(a);a.length===1&&a[0]instanceof c("FbtResultBase")&&(a=a[0].getContents());for(var j=0;j<a.length;j++){h=c("HTML").replaceJSONWrapper(a[j]);if(h instanceof c("HTML")){b.push(h.getAction());var k=h.getNodes();!i&&h.hasInlineJs()&&(c("FBLogger")("staticresources").warn("DOM: adding HTML which contains inline JS"),i=!0);for(var l=0;l<k.length;l++)f.push(k[l]),g.appendChild(k[l])}else if(c("isScalar")(h)||h instanceof c("FbtResultBase")){l=document.createTextNode(h);f.push(l);g.appendChild(l)}else c("isNode")(h)?(f.push(h),g.appendChild(h)):(Array.isArray(h)&&c("FBLogger")("dom").warn("Nest arrays not supported"),h!==null&&c("FBLogger")("dom").warn("No way to set content %s",h))}e(g);b.forEach(function(a){a()});return f}e=h;g["default"]=e}),98);
__d("ScriptPath",["ErrorGuard","SubscriptionList","TimeSlice","WebStorage","isInIframe"],(function(a,b,c,d,e,f){"use strict";var g,h,i="sp_pi",j=1e3*30,k=null,l=null,m=new(b("SubscriptionList"))(),n=null,o=[],p=b("TimeSlice").guard(function(a,c){m.getCallbacks().forEach(function(d){(g||(g=b("ErrorGuard"))).applyWithGuard(function(){d({source:k,dest:l,cause:a,extraData:c})},null,[])})},"ScriptPath Notifying callbacks",{propagationType:b("TimeSlice").PropagationType.ORPHAN});function q(){return l?l.scriptPath:void 0}function r(){var a=(h||(h=b("WebStorage"))).getSessionStorage();if(!a||b("isInIframe")())return;h.setItemGuarded(a,i,JSON.stringify({pageInfo:l,clickPoint:n,time:Date.now()}))}function a(){var a=(h||(h=b("WebStorage"))).getSessionStorageForRead();if(!a)return;var c=a.getItem(i);if(c){c=JSON.parse(c);c&&(c.time<Date.now()-j&&(a=(h||(h=b("WebStorage"))).getSessionStorage(),a&&a.removeItem(i)),l=c.pageInfo,n=c.clickPoint,l&&(l.restored=!0))}}a();c={set:function(a,b,c){k=l,l={scriptPath:a,categoryToken:b,extraData:c||{}},o=[],window._script_path=a,p()},openOverlayView:function(a,b,c){if(!a)return;var d=o.length;(d===0||o[d-1]!==a)&&(k=babelHelpers["extends"]({},l),l&&(l.topViewEndpoint=a),c&&c.replaceTopOverlay&&d>0?(o[d-1]=a,p("replace_overlay_view",b)):(o.push(a),p("open_overlay_view",b)))},closeOverlayView:function(a,b){a=o.lastIndexOf(a);if(a===-1)return;k=babelHelpers["extends"]({},l);l&&(a>0?l.topViewEndpoint=o[a-1]:l.topViewEndpoint=null);o=o.slice(0,a);p("close_overlay_view",b)},setClickPointInfo:function(a){n=a,r()},getClickPointInfo:function(){return n},getScriptPath:q,getCategoryToken:function(){return l?l.categoryToken:void 0},getEarlyFlushPage:function(){var a;return(a=l)==null?void 0:(a=a.extraData)==null?void 0:a.ef_page},getTopViewEndpoint:function(){var a=o.length;return a>0?o[a-1]:q()},getPageInfo:function(){return l},getSourcePageInfo:function(){return k},subscribe:function(a){return m.add(b("TimeSlice").guard(a,"ScriptPath.subscribe"))},shutdown:function(){r()}};e.exports=c}),null);