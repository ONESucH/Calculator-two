define(["../core","../queue","../effects"],function(e){"use strict";return e.fn.delay=function(n,t){return n=e.fx?e.fx.speeds[n]||n:n,t=t||"fx",this.queue(t,function(e,t){var u=window.setTimeout(e,n);t.stop=function(){window.clearTimeout(u)}})},e.fn.delay});
//# sourceMappingURL=delay.js.map
