"use strict";function _createForOfIteratorHelper(a){if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(a=_unsupportedIterableToArray(a))){var b=0,c=function(){};return{s:c,n:function n(){return b>=a.length?{done:!0}:{done:!1,value:a[b++]}},e:function e(a){throw a},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,e,f=!0,g=!1;return{s:function s(){d=a[Symbol.iterator]()},n:function n(){var a=d.next();return f=a.done,a},e:function e(a){g=!0,e=a},f:function f(){try{f||null==d["return"]||d["return"]()}finally{if(g)throw e}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(c):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var JsCarousel=/*#__PURE__*/function(){function a(b,c){var d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};_classCallCheck(this,a),this.id="jsCarousel",this.name="jsCarousel",this.options=Object.assign({title:"jsCarousel",imagesToShow:3,animationDelay:5,animationDuration:1.5,displayToggleButton:!0,imageOffsetX:-100,imageOffsetY:30,imageHeight:350,ctaButton:{enabled:!0,text:"REQUEST A DEMO",href:"/contact"/*dataAttributes: {
                    toggle: 'modal',
                    target: '#contact-modal'
                }*/}},d),this.container=document.getElementById(b),this.currentImage=0,this.gotoImage=null,this.images=c,this.animations=[],this.animationSettings={duration:1e3*this.options.animationDuration,easing:"ease-in-out",fill:"both",delay:1e3*this.options.animationDelay//iterations: Infinity
},this.container.classList.add("jsCarousel");var e=this,f=document.createElement("div");f.setAttribute("id",this.setId("__body")),f.setAttribute("class",this.setClass("__body")),f.setAttribute("style","height: "+this.options.imageHeight+"px"),this.container.appendChild(f);var g=document.createElement("div");g.setAttribute("id",this.setId("__footer")),g.setAttribute("class",this.setClass("__footer")),this.container.appendChild(g);var h=document.createElement("div");h.setAttribute("id",this.setId("__content")),h.setAttribute("class",this.setClass("__content")),f.appendChild(h);var j=document.createElement("div");j.setAttribute("id",this.setId("__images")),j.setAttribute("class",this.setClass("__images")),f.appendChild(j);var k=document.createElement("div");k.setAttribute("id",this.setId("__slides")),k.setAttribute("class",this.setClass("__slides")),h.appendChild(k);var l=document.createElement("h1");l.setAttribute("class",e.setClass("__title")),l.innerText=e.options.title,h.appendChild(l);var m=document.createElement("div");m.setAttribute("id",this.setId("__footer-items")),m.setAttribute("class",this.setClass("__footer-items")),g.appendChild(m);var n=document.createElement("div");n.setAttribute("id",this.setId("__dots-container")),n.setAttribute("class",this.setClass("__dots-container")),g.appendChild(n);var o=document.createElement("div");o.setAttribute("id",this.setId("__bottom-text-container")),o.setAttribute("class",this.setClass("__bottom-text-container")),g.appendChild(o);var p=1,q=1.2,r=1,s=1,t=100,u=0,v=0,w=document.createElement("div");w.setAttribute("class",e.setClass("__btn-cta-container")),document.getElementById("jsCarousel__content").appendChild(w);var x=document.createElement("a");if(x.setAttribute("class",e.setClass("__btn-cta")),x.innerText=e.options.ctaButton.text,x.href=e.options.ctaButton.href,e.options.ctaButton.dataAttributes&&Object.keys(e.options.ctaButton.dataAttributes).forEach(function(a){x.dataset[a]=e.options.ctaButton.dataAttributes[a]}),w.appendChild(x),Object.keys(this.images).forEach(function(a,b){var c=document.createElement("a"),d=e.id+"__link--"+b;if(c.setAttribute("id",d),c.setAttribute("class",e.id+"__link"+(0===b?" active":"")),n.appendChild(c),document.getElementById(d).addEventListener("click",function(){e.currentImage=b,e.updateSlide()}),document.getElementById(d).addEventListener("mouseover",function(){e.gotoSlide(b)}),document.getElementById(d).addEventListener("mouseleave",function(){e.play()}),""!==e.images[b].bottomText){var f=e.setClass("__bottom-text"+(0===b?" active":"")),g=document.createElement("div");if(g.setAttribute("id",e.setId("__bottom-text--"+b)),g.setAttribute("class",f),g.innerText=e.images[b].bottomText,o.appendChild(g),3==v%4){var A=document.createElement("hr");o.appendChild(A)}v++}var h=document.createElement("div");h.setAttribute("id",e.setId("__footer-item--"+b)),h.setAttribute("class",e.id+"__footer-item"+(0===b?" active":""));var i=.4;e.images[b].footerItems.forEach(function(a){var b=document.createElement("div");b.setAttribute("class",e.id+"__footer-item-column column"),b.innerHTML=a,b.style.transitionDelay=i+"s",h.appendChild(b),i+=.2}),m.appendChild(h);var l=document.createElement("section");l.setAttribute("id",e.setId("__slide--"+b)),l.setAttribute("class",e.setClass("__slide")),k.appendChild(l),0===b&&l.classList.add("active");var w=document.createElement("h2");w.setAttribute("class",e.setClass("__subtitle")),w.innerText=e.images[b].title,l.appendChild(w);var x=document.createElement("div");if(x.innerHTML=e.images[b].description,l.appendChild(x),""!==e.images[b].url&&"#"!==e.images[b].url){var y=document.createTextNode("...read more"),z=document.createElement("a");z.setAttribute("href",e.images[b].url),z.appendChild(y);var B=document.createElement("div");B.setAttribute("class",e.setClass("__url")),B.appendChild(z),l.appendChild(B)}if(b<=e.options.imagesToShow){var C=document.createElement("img");C.setAttribute("src",e.images[b].src),C.setAttribute("alt",e.images[b].title),C.setAttribute("title",e.images[b].title),C.setAttribute("id",e.id+"__image--"+b),C.setAttribute("class",e.id+"__image "+e.id+"__image--"+b),C.style.left=t+"px",C.style.top=u+"px",C.style.height=e.options.imageHeight+"px",C.style.zIndex=(e.images.length-b).toString(),j.appendChild(C),0===b?s=0:b===e.options.imagesToShow?r=0:s=1;var D=[{transform:"translate(0, 0) scale("+p+")",opacity:r},{transform:"translate("+e.options.imageOffsetX+"px, "+e.options.imageOffsetY+"px) scale("+q+")",opacity:s}];e.animations[b]=C.animate(D,e.animationSettings),p-=.2,q-=.2,t-=e.options.imageOffsetX,u-=e.options.imageOffsetY}}),this.animations instanceof Array&&"object"===_typeof(this.animations[0])){var y=this;this.animations[0].onfinish=function(){y.currentImage++,y.currentImage>=y.images.length&&(y.currentImage=0),y.updateSlide()}}}return _createClass(a,[{key:"updateSlide",value:function updateSlide(){var a,b=document.getElementsByClassName(this.id+"__slide active"),c=document.getElementsByClassName(this.id+"__link active"),d=document.getElementsByClassName(this.id+"__footer-item active"),e=document.getElementsByClassName(this.id+"__bottom-text active"),f=_createForOfIteratorHelper(c);try{for(f.s();!(a=f.n()).done;){var u=a.value;u.classList.remove("active")}}catch(a){f.e(a)}finally{f.f()}var g,h=_createForOfIteratorHelper(b);try{for(h.s();!(g=h.n()).done;){var v=g.value;v.classList.remove("active")}}catch(a){h.e(a)}finally{h.f()}var k,l=_createForOfIteratorHelper(d);try{for(l.s();!(k=l.n()).done;){var w=k.value;w.classList.remove("active")}}catch(a){l.e(a)}finally{l.f()}var m,n=_createForOfIteratorHelper(e);try{for(n.s();!(m=n.n()).done;){var x=m.value;x.classList.remove("active")}}catch(a){n.e(a)}finally{n.f()}var o=document.getElementById(this.id+"__link--"+this.currentImage),p=document.getElementById(this.id+"__slide--"+this.currentImage),q=document.getElementById(this.id+"__footer-item--"+this.currentImage),r=document.getElementById(this.id+"__bottom-text--"+this.currentImage);if(this.gotoImage===this.currentImage){for(var y=0;y<=this.options.imagesToShow;y++)this.animations[y].effect.updateTiming({delay:1e3*this.options.animationDelay,duration:1e3*this.options.animationDuration});this.gotoImage=null,this.pause()}o.classList.add("active"),p.classList.add("active"),q.classList.add("active"),null!==r&&r.classList.add("active");for(var s=this.currentImage,t=0;t<=this.options.imagesToShow;t++)s=this.currentImage+t,s>=this.images.length&&(s-=this.images.length),document.getElementById(this.id+"__image--"+t).src=this.images[s].src,this.animations[t].currentTime=0}},{key:"gotoSlide",value:function gotoSlide(a){if(this.gotoImage=a,this.currentImage!==this.gotoImage)for(var b=0;b<=this.options.imagesToShow;b++)this.animations[b].effect.updateTiming({delay:0,duration:100});else this.pause()}},{key:"setId",value:function setId(a){return this.id+a}},{key:"setClass",value:function setClass(a){return this.name+a}},{key:"pause",value:function pause(){for(var a=0;a<=this.options.imagesToShow;a++)this.animations[a].pause()}},{key:"play",value:function play(){for(var a=0;a<=this.options.imagesToShow;a++)this.animations[a].play()}}]),a}();