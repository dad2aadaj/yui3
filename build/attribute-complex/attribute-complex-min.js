YUI.add("attribute-complex",function(b){var a=b.Object,c=".";b.Attribute.Complex=function(){};b.Attribute.Complex.prototype={_normAttrVals:function(g){var i={},h={},j,d,f,e;if(g){for(e in g){if(g.hasOwnProperty(e)){if(e.indexOf(c)!==-1){j=e.split(c);d=j.shift();f=h[d]=h[d]||[];f[f.length]={path:j,value:g[e]};}else{i[e]=g[e];}}}return{simple:i,complex:h};}else{return null;}},_getAttrInitVal:function(p,n,s){var g=n.value,r=n.valueFn,e,m=false,k=this._alwaysExecValueFn,d,f,j,h,t,q,o;if(!n.readOnly&&s){d=s.simple;if(d&&d.hasOwnProperty(p)){g=d[p];m=true;}}if(r&&(!m||k)){if(!r.call){r=this[r];}if(r){e=r.call(this,p);if(!m){g=e;}}}if(!n.readOnly&&s){f=s.complex;if(f&&f.hasOwnProperty(p)&&(g!==undefined)&&(g!==null)){o=f[p];for(j=0,h=o.length;j<h;++j){t=o[j].path;q=o[j].value;a.setValue(g,t,q);}}}return g;}};b.mix(b.Attribute,b.Attribute.Complex,true,null,1);b.AttributeComplex=b.Attribute.Complex;},"@VERSION@",{requires:["attribute-base"]});