AUI.add("aui-loading-mask",function(n){var g=n.Lang,u="boundingBox",l="contentBox",q="hide",t="host",b="messageEl",h="loadingmask",m="position",f="show",j="static",s="strings",k="target",e="toggle",i=n.getClassName,p=i(h),v=i(h,"masked"),a=i(h,"masked","relative"),c=i(h,"message"),o=i(h,"message","content"),r='<div class="'+c+'"><div class="'+o+'">{0}</div></div>';var d=n.Component.create({NAME:h,NS:h,ATTRS:{messageEl:{valueFn:function(y){var x=this;var w=x.get(s);return n.Node.create(g.sub(r,[w.loading]));}},strings:{value:{loading:"Loading&hellip;"}},target:{setter:function(){var w=this;var x=w.get(t);if(x instanceof n.Widget){x=x.get(l);}return x;},value:null}},EXTENDS:n.Plugin.Base,prototype:{initializer:function(x){var w=this;w.IGNORED_ATTRS=n.merge({host:true},d.ATTRS);w.renderUI();w.bindUI();w._createDynamicAttrs(x);},renderUI:function(){var x=this;var w=x.get(s);x._renderOverlayMask();x.overlayMask.get(u).append(x.get(b));},bindUI:function(){var w=this;w._bindOverlayMaskUI();},_bindOverlayMaskUI:function(){var w=this;w.overlayMask.after("visibleChange",w._afterVisibleChange,w);},centerMessage:function(){var w=this;w.get(b).center(w.overlayMask.get(u));},refreshMask:function(){var w=this;w.overlayMask.refreshMask();w.centerMessage();},_afterVisibleChange:function(x){var w=this;var y=w.get(k);var z=(y.getStyle(m)==j);y.toggleClass(v,(x.newVal));y.toggleClass(a,(x.newVal&&z));if(x.newVal){w.refreshMask();}},_renderOverlayMask:function(){var w=this;var x=w.get(k);w.overlayMask=new n.OverlayMask({target:x,cssClass:p}).render(x);},_createDynamicAttrs:function(x){var w=this;n.each(x,function(A,z){var y=w.IGNORED_ATTRS[z];if(!y){w.addAttr(z,{setter:function(B){this.overlayMask.set(z,B);return B;},value:A});}});}}});n.each([q,f,e],function(w){d.prototype[w]=function(){this.overlayMask[w]();};});n.LoadingMask=d;},"@VERSION@",{requires:["aui-overlay-mask","plugin"],skinnable:true});