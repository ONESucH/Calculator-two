define(["../core","../event","./trigger"],function(e){"use strict";e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(o,u){e.fn[u]=function(e,o){return arguments.length>0?this.on(u,null,e,o):this.trigger(u)}}),e.fn.extend({hover:function(e,o){return this.mouseenter(e).mouseleave(o||e)}})});
//# sourceMappingURL=alias.js.map
