YUI.add("stylesheet",function(b,r){var k=b.config.doc,c=k.createElement("p"),g=c.style,e=b.Lang.isString,n={},j={},l=("cssFloat" in g)?"cssFloat":"styleFloat",h,a,m,o="opacity",q="float",f="";a=(o in g)?function(d){d.opacity=f;}:function(d){d.filter=f;};g.border="1px solid red";g.border=f;m=g.borderLeft?function(d,t){var s;if(t!==l&&t.toLowerCase().indexOf(q)!=-1){t=l;}if(e(d[t])){switch(t){case o:case"filter":a(d);break;case"font":d.font=d.fontStyle=d.fontVariant=d.fontWeight=d.fontSize=d.lineHeight=d.fontFamily=f;break;default:for(s in d){if(s.indexOf(t)===0){d[s]=f;}}}}}:function(d,p){if(p!==l&&p.toLowerCase().indexOf(q)!=-1){p=l;}if(e(d[p])){if(p===o){a(d);}else{d[p]=f;}}};function i(x,s){var A,v,z,y={},p,B,u,w,d,t;if(!(b.instanceOf(this,i))){return new i(x,s);}if(x){if(b.Node&&x instanceof b.Node){v=x._node;}else{if(x.nodeName){v=x;}else{if(e(x)){if(x&&j[x]){return j[x];}v=k.getElementById(x.replace(/^#/,f));}}}if(v&&j[b.stamp(v)]){return j[b.stamp(v)];}}if(!v||!/^(?:style|link)$/i.test(v.nodeName)){v=k.createElement("style");v.type="text/css";}if(e(x)){if(x.indexOf("{")!=-1){if(v.styleSheet){v.styleSheet.cssText=x;}else{v.appendChild(k.createTextNode(x));}}else{if(!s){s=x;}}}if(!v.parentNode||v.parentNode.nodeName.toLowerCase()!=="head"){A=(v.ownerDocument||k).getElementsByTagName("head")[0];A.appendChild(v);}z=v.sheet||v.styleSheet;p=z&&("cssRules" in z)?"cssRules":"rules";u=("deleteRule" in z)?function(C){z.deleteRule(C);}:function(C){z.removeRule(C);};B=("insertRule" in z)?function(E,D,C){z.insertRule(E+" {"+D+"}",C);}:function(E,D,C){z.addRule(E,D,C);};for(w=z[p].length-1;w>=0;--w){d=z[p][w];t=d.selectorText;if(y[t]){y[t].style.cssText+=";"+d.style.cssText;u(w);}else{y[t]=d;}}i.register(b.stamp(v),this);if(s){i.register(s,this);}b.mix(this,{getId:function(){return b.stamp(v);},enable:function(){z.disabled=false;return this;},disable:function(){z.disabled=true;return this;},isEnabled:function(){return !z.disabled;},set:function(F,E){var H=y[F],G=F.split(/\s*,\s*/),D,C;if(G.length>1){for(D=G.length-1;D>=0;--D){this.set(G[D],E);}return this;}if(!i.isValidSelector(F)){return this;}if(H){H.style.cssText=i.toCssText(E,H.style.cssText);}else{C=z[p].length;E=i.toCssText(E);if(E){B(F,E,C);y[F]=z[p][C];}}return this;},unset:function(F,E){var H=y[F],G=F.split(/\s*,\s*/),C=!E,I,D;if(G.length>1){for(D=G.length-1;D>=0;--D){this.unset(G[D],E);}return this;}if(H){if(!C){E=b.Array(E);g.cssText=H.style.cssText;for(D=E.length-1;D>=0;--D){m(g,E[D]);}if(g.cssText){H.style.cssText=g.cssText;}else{C=true;}}if(C){I=z[p];for(D=I.length-1;D>=0;--D){if(I[D]===H){delete y[F];u(D);break;}}}}return this;},getCssText:function(E){var F,D,C;if(e(E)){F=y[E.split(/\s*,\s*/)[0]];return F?F.style.cssText:null;}else{D=[];for(C in y){if(y.hasOwnProperty(C)){F=y[C];D.push(F.selectorText+" {"+F.style.cssText+"}");}}return D.join("\n");}}});}h=function(s,u){var t=s.styleFloat||s.cssFloat||s[q],d=b.Lang.trim,w;try{g.cssText=u||f;}catch(v){c=k.createElement("p");g=c.style;g.cssText=u||f;}if(t&&!s[l]){s=b.merge(s);delete s.styleFloat;delete s.cssFloat;delete s[q];s[l]=t;}for(w in s){if(s.hasOwnProperty(w)){try{g[w]=d(s[w]);}catch(p){}}}return g.cssText;};b.mix(i,{toCssText:((o in g)?h:function(d,p){if(o in d){d=b.merge(d,{filter:"alpha(opacity="+(d.opacity*100)+")"});delete d.opacity;}return h(d,p);}),register:function(d,p){return !!(d&&p instanceof i&&!j[d]&&(j[d]=p));},isValidSelector:function(p){var d=false;if(p&&e(p)){if(!n.hasOwnProperty(p)){n[p]=!/\S/.test(p.replace(/\s+|\s*[+~>]\s*/g," ").replace(/([^ ])\[.*?\]/g,"$1").replace(/([^ ])::?[a-z][a-z\-]+[a-z](?:\(.*?\))?/ig,"$1").replace(/(?:^| )[a-z0-6]+/ig," ").replace(/\\./g,f).replace(/[.#]\w[\w\-]*/g,f));}d=n[p];}return d;}},true);b.StyleSheet=i;},"@VERSION@",{"requires":["yui-base"]});