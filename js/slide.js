import debounce from "./debounce.js";

export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);

    this.wrapper = document.querySelector(wrapper);
    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
  }

  onStart(event) {
    event.preventDefault();
    this.dist.startX = event.pageX;

    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  onMove(event) {
    this.dist.movement =
      -(this.dist.startX - event.pageX) * 1.5 + this.dist.finalPosition;
    this.slideMove();
  }

  slideMove() {
    this.slide.style.transform = `translate3d(${this.dist.movement}px, 0, 0)`;
  }

  onEnd() {
    this.dist.finalPosition = this.dist.movement;
    this.dist.finalPosition = this.dist.finalPosition;
    this.wrapper.removeEventListener("mousemove", this.onMove);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.slideMove = this.slideMove.bind(this);
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
