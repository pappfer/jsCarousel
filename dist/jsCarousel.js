"use strict";function _createForOfIteratorHelper(a){if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(a=_unsupportedIterableToArray(a))){var b=0,c=function(){};return{s:c,n:function n(){return b>=a.length?{done:!0}:{done:!1,value:a[b++]}},e:function e(a){throw a},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,e,f=!0,g=!1;return{s:function s(){d=a[Symbol.iterator]()},n:function n(){var a=d.next();return f=a.done,a},e:function e(a){g=!0,e=a},f:function f(){try{f||null==d["return"]||d["return"]()}finally{if(g)throw e}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(c):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var JsCarousel=/*#__PURE__*/function(){function a(b,c){var d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};_classCallCheck(this,a),this.id="jsCarousel",this.name="jsCarousel",this.options=Object.assign({title:"jsCarousel",imagesToShow:3,animationDelay:5,animationDuration:1.5,displayToggleButton:!0,imageOffsetX:-100,imageOffsetY:30,imageHeight:350,ctaButton:{enabled:!0,text:"REQUEST A DEMO",href:"/contact"/*dataAttributes: {
                    toggle: 'modal',
                    target: '#contact-modal'
                }*/}},d),this.container=document.getElementById(b),this.currentImage=0,this.gotoImage=null,this.images=c,this.animations=[],this.animationSettings={duration:1e3*this.options.animationDuration,easing:"ease-in-out",fill:"both",delay:1e3*this.options.animationDelay//iterations: Infinity
},document.getElementById(b).innerHTML="",this.container.classList.add("jsCarousel"),this.container.classList.add("animated"),this.container.classList.add("fadeIn");var e=this,f=document.createElement("div");f.setAttribute("id",this.setId("__body")),f.setAttribute("class",this.setClass("__body")),f.setAttribute("style","height: "+this.options.imageHeight+"px"),this.container.appendChild(f);var g=document.createElement("div");g.setAttribute("id",this.setId("__footer")),g.setAttribute("class",this.setClass("__footer")),this.container.appendChild(g);var h=document.createElement("div");h.setAttribute("id",this.setId("__content")),h.setAttribute("class",this.setClass("__content")),f.appendChild(h);var j=document.createElement("div");j.setAttribute("id",this.setId("__images")),j.setAttribute("class",this.setClass("__images")),f.appendChild(j);var k=document.createElement("div");k.setAttribute("id",this.setId("__slides")),k.setAttribute("class",this.setClass("__slides")),h.appendChild(k);var l=document.createElement("h1");l.setAttribute("class",e.setClass("__title")),l.innerText=e.options.title,h.appendChild(l);var m=document.createElement("div");m.setAttribute("id",this.setId("__footer-items")),m.setAttribute("class",this.setClass("__footer-items")),h.appendChild(m);var n=document.createElement("div");n.setAttribute("id",this.setId("__dots-container")),n.setAttribute("class",this.setClass("__dots-container")),h.appendChild(n);var o=1,p=1.2,q=1,r=1,s=100,t=0,u=document.createElement("div");u.setAttribute("class",e.setClass("__btn-cta-container")),document.getElementById("jsCarousel__content").appendChild(u);var v=document.createElement("a");/*let playButton = document.createElement("img");
        playButton.setAttribute('class', this.setClass('__play-button'));
        //playButton.setAttribute('src', imgPlay);
        dotsContainer.appendChild(playButton);
        */if(v.setAttribute("class",e.setClass("__btn-cta")),v.innerText=e.options.ctaButton.text,v.href=e.options.ctaButton.href,e.options.ctaButton.dataAttributes&&Object.keys(e.options.ctaButton.dataAttributes).forEach(function(a){v.dataset[a]=e.options.ctaButton.dataAttributes[a]}),u.appendChild(v),Object.keys(this.images).forEach(function(a,b){var c=document.createElement("a"),d=e.id+"__link--"+b;c.setAttribute("id",d),c.setAttribute("class",e.id+"__link"+(0===b?" active":"")),n.appendChild(c),document.getElementById(d).addEventListener("click",function(){e.gotoSlide(b)});var f=document.createElement("div");f.setAttribute("id",e.setId("__footer-item--"+b)),f.setAttribute("class",e.id+"__footer-item"+(0===b?" active":""));var g=.4;e.images[b].footerItems.forEach(function(a){var b=document.createElement("div");b.setAttribute("class",e.id+"__footer-item-column column"),b.innerHTML=a,b.style.transitionDelay=g+"s",f.appendChild(b),g+=.2}),m.appendChild(f);var h=document.createElement("section");h.setAttribute("id",e.setId("__slide--"+b)),h.setAttribute("class",e.setClass("__slide")),k.appendChild(h),0===b&&h.classList.add("active");var i=document.createElement("h2");i.setAttribute("class",e.setClass("__subtitle")),i.innerText=e.images[b].title,h.appendChild(i);var l=document.createElement("div");if(l.innerHTML=e.images[b].description,h.appendChild(l),""!==e.images[b].url&&"#"!==e.images[b].url){var u=document.createTextNode("...read more"),v=document.createElement("a");v.setAttribute("href",e.images[b].url),v.appendChild(u);var w=document.createElement("div");w.setAttribute("class",e.setClass("__url")),w.appendChild(v),h.appendChild(w)}if(b<=e.options.imagesToShow){var x=document.createElement("img");x.setAttribute("src",e.images[b].src),x.setAttribute("alt",e.images[b].title),x.setAttribute("title",e.images[b].title),x.setAttribute("id",e.id+"__image--"+b),x.setAttribute("class",e.id+"__image "+e.id+"__image--"+b),x.style.left=s+"px",x.style.top=t+"px",x.style.height=e.options.imageHeight+"px",x.style.zIndex=(e.images.length-b).toString(),j.appendChild(x),0===b?r=0:b===e.options.imagesToShow?q=0:r=1;var y=[{transform:"translate(0, 0) scale("+o+")",opacity:q},{transform:"translate("+e.options.imageOffsetX+"px, "+e.options.imageOffsetY+"px) scale("+p+")",opacity:r}];e.animations[b]=x.animate(y,e.animationSettings),o-=.2,p-=.2,s-=e.options.imageOffsetX,t-=e.options.imageOffsetY}}),this.animations instanceof Array&&"object"===_typeof(this.animations[0])){var w=this;this.animations[0].onfinish=function(){w.currentImage++,w.currentImage>=w.images.length&&(w.currentImage=0),w.updateSlide()}}}return _createClass(a,[{key:"updateSlide",value:function updateSlide(){var a,b=document.getElementsByClassName(this.id+"__slide active"),c=document.getElementsByClassName(this.id+"__link active"),d=document.getElementsByClassName(this.id+"__footer-item active"),e=_createForOfIteratorHelper(c);try{for(e.s();!(a=e.n()).done;){var q=a.value;q.classList.remove("active")}}catch(a){e.e(a)}finally{e.f()}var f,g=_createForOfIteratorHelper(b);try{for(g.s();!(f=g.n()).done;){var r=f.value;r.classList.remove("active")}}catch(a){g.e(a)}finally{g.f()}var h,k=_createForOfIteratorHelper(d);try{for(k.s();!(h=k.n()).done;){var s=h.value;s.classList.remove("active")}}catch(a){k.e(a)}finally{k.f()}var l=document.getElementById(this.id+"__link--"+this.currentImage),m=document.getElementById(this.id+"__slide--"+this.currentImage),n=document.getElementById(this.id+"__footer-item--"+this.currentImage);if(this.gotoImage===this.currentImage){for(var t=0;t<=this.options.imagesToShow;t++)this.animations[t].effect.updateTiming({delay:1e3*this.options.animationDelay,duration:1e3*this.options.animationDuration});this.gotoImage=null,this.pause()}l.classList.add("active"),m.classList.add("active"),n.classList.add("active");for(var o=this.currentImage,p=0;p<=this.options.imagesToShow;p++)o=this.currentImage+p,o>=this.images.length&&(o-=this.images.length),document.getElementById(this.id+"__image--"+p).src=this.images[o].src,this.animations[p].currentTime=0}},{key:"gotoSlide",value:function gotoSlide(a){if(this.gotoImage=a,this.currentImage!==this.gotoImage)for(var b=0;b<=this.options.imagesToShow;b++)this.animations[b].effect.updateTiming({delay:0,duration:100});else this.pause()}},{key:"setId",value:function setId(a){return this.id+a}},{key:"setClass",value:function setClass(a){return this.name+a}},{key:"pause",value:function pause(){for(var a=0;a<=this.options.imagesToShow;a++)this.animations[a].pause()}},{key:"play",value:function play(){for(var a=0;a<=this.options.imagesToShow;a++)this.animations[a].play()}}]),a}();