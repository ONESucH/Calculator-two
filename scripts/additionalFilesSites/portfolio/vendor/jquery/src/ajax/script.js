define(["../core","../var/document","../ajax"],function(t,r){t.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return t.globalEval(r),r}}}),t.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),t.ajaxTransport("script",function(a){if(a.crossDomain){var c,e;return{send:function(i,n){c=t("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",e=function(t){c.remove(),e=null,t&&n("error"===t.type?404:200,t.type)}),r.head.appendChild(c[0])},abort:function(){e&&e()}}}})});
//# sourceMappingURL=script.js.map
