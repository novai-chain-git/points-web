import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// handles the infinite part, wrapping around at either end....
export const multipleScroll = () => {
  const content = gsap.utils.toArray('.nftbox');
  const rect = content[0].getBoundingClientRect();
  const offsetTop = rect.top + scrollTop - innerHeight / 3;
  // console.log('offsetTop', offsetTop);
  // gsap.set('.nftbox', { minHeight: '100vh' });
  let imgs = gsap.utils.toArray('.content > img'),
    currentSection = imgs[0];
  // console.log('imgs', imgs);
  gsap.defaults({ overwrite: 'auto', duration: 0.3 });

  // create a ScrollTrigger for each section
  imgs.forEach((img, i) => {
    gsap.to(img, { scale: 0.8, autoAlpha: 0 });
    gsap.to(currentSection, { scale: 1, autoAlpha: 1 });
    ScrollTrigger.create({
      // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
      start: () => offsetTop + (i - 0.5) * (innerHeight / 3),
      end: () => offsetTop + (i + 0.5) * (innerHeight / 3),
      // when a new section activates (from either direction), set the section accordinglyl.
      onToggle: (self) => self.isActive && setSection(img)
    });
  });

  function setSection(newSection) {
    // console.log('newSection', newSection, newSection !== currentSection);
    if (newSection !== currentSection) {
      gsap.to(currentSection, { scale: 0.8, autoAlpha: 0 });
      gsap.to(newSection, { scale: 1, autoAlpha: 1 });
      currentSection = newSection;
    }
  }
};
