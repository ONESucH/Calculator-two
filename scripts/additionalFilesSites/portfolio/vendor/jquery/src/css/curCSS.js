define(["../core","./var/rnumnonpx","./var/rmargin","./var/getStyles","./support","../selector"],function(t,i,e,n,r){function d(d,o,a){var h,m,s,u,v=d.style;return a=a||n(d),u=a?a.getPropertyValue(o)||a[o]:void 0,""!==u&&void 0!==u||t.contains(d.ownerDocument,d)||(u=t.style(d,o)),a&&!r.pixelMarginRight()&&i.test(u)&&e.test(o)&&(h=v.width,m=v.minWidth,s=v.maxWidth,v.minWidth=v.maxWidth=v.width=u,u=a.width,v.width=h,v.minWidth=m,v.maxWidth=s),void 0!==u?u+"":u}return d});
//# sourceMappingURL=curCSS.js.map
