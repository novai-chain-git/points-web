import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const hide = (elem) => {
  gsap.set(elem, { autoAlpha: 0 });
};

const animateFrom = (elem, direction) => {
  direction = direction || 1;
  var x = 0,
    y = direction * 200;

  elem.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  elem.style.opacity = '0';
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto'
    }
  );
};

const strokeup = (className) => {
  gsap.utils.toArray(className).forEach((elem, i) => {
    hide(elem);
    let n = i + 1;
    ScrollTrigger.create({
      markers: false,
      trigger: elem,
      // end: 'bottom',
      onEnter: function () {
        animateFrom(elem, n);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      } // assure that the element is hidden when scrolled into view
    });
  });
};

export default strokeup;
