!function(l){function e(t,e,n,i){var a=t.text().split(e),s="";a.length&&(l(a).each(function(t,e){s+='<span class="'+n+(t+1)+'">'+e+"</span>"+i}),t.empty().append(s))}var n={init:function(){return this.each(function(){e(l(this),"","char","")})},words:function(){return this.each(function(){e(l(this)," ","word"," ")})},lines:function(){return this.each(function(){var t="eefec303079ad17405c889e092e105b0";e(l(this).children("br").replaceWith(t).end(),t,"line","")})}};l.fn.lettering=function(t){return t&&n[t]?n[t].apply(this,[].slice.call(arguments,1)):"letters"!==t&&t?(l.error("Method "+t+" does not exist on jQuery.lettering"),this):n.init.apply(this,[].slice.call(arguments,0))}}(jQuery),function(c){"use strict";function r(t){return/In/.test(t)||0<=c.inArray(t,c.fn.textillate.defaults.inEffects)}function u(t){return/Out/.test(t)||0<=c.inArray(t,c.fn.textillate.defaults.outEffects)}function a(t){return"true"!==t&&"false"!==t?t:"true"===t}function f(t){var e=t.attributes||[],i={};return e.length&&c.each(e,function(t,e){var n=e.nodeName.replace(/delayscale/,"delayScale");/^data-in-*/.test(n)?(i.in=i.in||{},i.in[n.replace(/data-in-/,"")]=a(e.nodeValue)):/^data-out-*/.test(n)?(i.out=i.out||{},i.out[n.replace(/data-out-/,"")]=a(e.nodeValue)):/^data-*/.test(n)&&(i[n.replace(/data-/,"")]=a(e.nodeValue))}),i}function d(t,l,i){var o=t.length;o?(l.shuffle&&(t=function(t){for(var e,n,i=t.length;i;e=parseInt(Math.random()*i),n=t[--i],t[i]=t[e],t[e]=n);return t}(t)),l.reverse&&(t=t.toArray().reverse()),c.each(t,function(t,e){var a=c(e);function s(){r(l.effect)?"typeOut"===l.effect?a.css("display","inline-block"):a.css("visibility","visible"):u(l.effect)&&("typeOut"===l.effect?a.css("display","none"):a.css("visibility","hidden")),!--o&&i&&i()}var n=l.sync?l.delay:l.delay*t*l.delayScale;a.text()?setTimeout(function(){var t,e,n,i;t=a,e=l.effect,n=s,i=0,"clipIn"===e?(t.css("width","auto"),i=t.width(),t.css("overflow","hidden"),t.css("width","0"),t.css("visibility","visible"),t.animate({width:i+.3*parseFloat(t.css("font-size"))},1200,function(){setTimeout(function(){n&&n()},100)})):"clipOut"===e?t.animate({width:"2px"},1200,function(){setTimeout(function(){n&&n()},100)}):"typeIn"===e?t.addClass("fusion-title-animated "+e).show():t.addClass("fusion-title-animated "+e).css("visibility","visible").show(),t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){t.removeClass("fusion-title-animated "+e),n&&n()})},n):s()})):i&&i()}function s(t,e){var l=this,o=c(t);l.init=function(){l.$texts=o.find(e.selector),l.$texts.length||(l.$texts=c('<ul class="texts"><li>'+o.html()+"</li></ul>"),o.html(l.$texts)),l.$texts.hide(),l.$current=c('<span class="fusion-textillate">').html(l.$texts.find(":first-child").html()).prependTo(o),r(e.in.effect)?l.$current.css("visibility","hidden"):u(e.out.effect)&&l.$current.css("visibility","visible"),l.setOptions(e),l.timeoutRun=null,setTimeout(function(){l.options.autoStart&&l.start()},l.options.initialDelay)},l.setOptions=function(t){l.options=t},l.triggerEvent=function(t){var e=c.Event(t+".tlt");return o.trigger(e,l),e},l.in=function(t,e){t=t||0;var n,i=l.$texts.find(":nth-child("+((t||0)+1)+")"),a=c.extend(!0,{},l.options,i.length?f(i[0]):{}),s=l.$current.closest(".fusion-animated-texts-wrapper");i.addClass("current"),l.triggerEvent("inAnimationBegin"),o.attr("data-active",i.data("id")),"line"==l.options.length?l.$current.html(i.html()).lettering("lines"):l.$current.html(i.html()).lettering("words"),"char"==l.options.length&&l.$current.find('[class^="word"]').css({display:"inline-block","-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"}).each(function(){c(this).lettering()}),n=l.$current.find('[class^="'+l.options.length+'"]').css("display","inline-block"),r(a.in.effect)?"typeIn"===a.in.effect?n.css("display","none"):n.css("visibility","hidden"):u(a.in.effect)&&n.css("visibility","visible"),"typeIn"!==a.in.effect&&"clipIn"!==a.in.effect||void 0!==s.attr("style")&&-1!==s.attr("style").indexOf("width")||l.$current.closest(".fusion-animated-texts-wrapper").css("width","auto"),l.currentIndex=t,d(n,a.in,function(){l.triggerEvent("inAnimationEnd"),a.in.callback&&a.in.callback(),e&&e(l)})},l.out=function(t){var e=l.$texts.find(":nth-child("+((l.currentIndex||0)+1)+")"),n=l.$current.find('[class^="'+l.options.length+'"]'),i=c.extend(!0,{},l.options,e.length?f(e[0]):{});l.triggerEvent("outAnimationBegin"),d(n,i.out,function(){e.removeClass("current"),l.triggerEvent("outAnimationEnd"),o.removeAttr("data-active"),i.out.callback&&i.out.callback(),t&&t(l)})},l.start=function(t){setTimeout(function(){l.triggerEvent("start"),function e(n){l.in(n,function(){var t=l.$texts.children().length;n+=1,!l.options.loop&&t<=n?(l.options.callback&&l.options.callback(),l.triggerEvent("end")):(n%=t,l.timeoutRun=setTimeout(function(){l.out(function(){e(n)})},l.options.minDisplayTime))})}(t||0)},l.options.initialDelay)},l.stop=function(){l.timeoutRun&&(clearInterval(l.timeoutRun),l.timeoutRun=null)},l.init()}c.fn.textillate=function(i,a){return this.each(function(){var t=c(this),e=t.data("textillate"),n=c.extend(!0,{},c.fn.textillate.defaults,f(this),"object"==typeof i&&i);e?"string"==typeof i?e[i].apply(e,[].concat(a)):e.setOptions.call(e,n):t.data("textillate",e=new s(this,n))})},c.fn.textillate.defaults={selector:".texts",loop:!0,minDisplayTime:1200,initialDelay:0,in:{effect:"fadeIn",delayScale:1.5,delay:100,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},out:{effect:"fadeOut",delayScale:1.5,delay:100,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},autoStart:!0,inEffects:[],outEffects:["hinge"],callback:function(){},type:"word"}}(jQuery);