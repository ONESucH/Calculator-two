define(["../core","../var/indexOf","./var/rneedsContext","../selector"],function(t,n,e){"use strict";function r(e,r,u){return t.isFunction(r)?t.grep(e,function(t,n){return!!r.call(t,n,t)!==u}):r.nodeType?t.grep(e,function(t){return t===r!==u}):"string"!=typeof r?t.grep(e,function(t){return n.call(r,t)>-1!==u}):i.test(r)?t.filter(r,e,u):(r=t.filter(r,e),t.grep(e,function(t){return n.call(r,t)>-1!==u&&1===t.nodeType}))}var i=/^.[^:#\[\.,]*$/;t.filter=function(n,e,r){var i=e[0];return r&&(n=":not("+n+")"),1===e.length&&1===i.nodeType?t.find.matchesSelector(i,n)?[i]:[]:t.find.matches(n,t.grep(e,function(t){return 1===t.nodeType}))},t.fn.extend({find:function(n){var e,r,i=this.length,u=this;if("string"!=typeof n)return this.pushStack(t(n).filter(function(){for(e=0;e<i;e++)if(t.contains(u[e],this))return!0}));for(r=this.pushStack([]),e=0;e<i;e++)t.find(n,u[e],r);return i>1?t.uniqueSort(r):r},filter:function(t){return this.pushStack(r(this,t||[],!1))},not:function(t){return this.pushStack(r(this,t||[],!0))},is:function(n){return!!r(this,"string"==typeof n&&e.test(n)?t(n):n||[],!1).length}})});
//# sourceMappingURL=findFilter.js.map