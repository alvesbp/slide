import debounce from "./debounce.js";

export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);

    this.wrapper = document.querySelector(wrapper);
    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
  }

  onStart(event) {
    let moveType;
    if (event.type === "mousedown") {
      event.preventDefault();
      this.dist.startX = event.pageX;
      moveType = "mousemove";
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      moveType = "touchmove";
    }

    this.wrapper.addEventListener(moveType, this.onMove);
  }

  onMove(event) {
    const pointerEvent =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX;
    this.dist.movement =
      -(this.dist.startX - pointerEvent) * 1.5 + this.dist.finalPosition;
    this.slideMove();
  }

  slideMove() {
    this.slide.style.transform = `translate3d(${this.dist.movement}px, 0, 0)`;
  }

  onEnd(event) {
    const moveType = event.type === "mouseup" ? "mousemove" : "touchmove";
    this.dist.finalPosition = this.dist.movement;
    this.dist.finalPosition = this.dist.finalPosition;
    this.wrapper.removeEventListener(moveType, this.onMove);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.slideMove = this.slideMove.bind(this);
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("touchstart", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchend", this.onEnd);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
