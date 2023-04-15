(()=>{"use strict";const t=new class{constructor(t,i){this.slide=document.querySelector(t),this.wrapper=document.querySelector(i),this.dist={finalPosition:0,startX:0,movement:0}}transition(t){this.slide.style.transition=t?"transform .3s":""}moveSlide(t){this.dist.movePosition=t,this.slide.style.transform=`translate3d(${t}px, 0, 0)`}updatePosition(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}onStart(t){let i;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,i="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,i="touchmove"),this.wrapper.addEventListener(i,this.onMove),this.transition(!1)}onMove(t){const i="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,e=this.updatePosition(i);this.moveSlide(e)}onEnd(t){const i="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(i,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}changeSlideOnEnd(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}addSlideEvents(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}bindEvents(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this)}slidePosition(t){const i=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-i)}slidesConfig(){this.slideArray=[...this.slide.children].map((t=>({position:this.slidePosition(t),element:t})))}slidesIndexNav(t){const i=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===i?void 0:t+1}}changeSlide(t){const i=this.slideArray[t];this.moveSlide(i.position),this.slidesIndexNav(t),this.dist.finalPosition=i.position}activePrevSlide(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}activeNextSlide(){void 0!==this.index.next&&this.changeSlide(this.index.next)}init(){return this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this}}(".slide",".slide-wrapper");t.init(),t.changeSlide(2)})();