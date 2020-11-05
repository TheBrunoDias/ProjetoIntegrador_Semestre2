function SlideTo(block) {
  let pos = document.querySelector(`#${block}`).getBoundingClientRect().top;
  window.scrollBy({
    top: pos,
    behavior: "smooth"
  });
}

const animationAbove = document.querySelectorAll('.animation-above');
const animationBelow = document.querySelectorAll('.animation-below');
const animationLeft = document.querySelectorAll('.animation-left');
const animationRight = document.querySelectorAll('.animation-right');
const animationOrigin = document.querySelectorAll('.animation-origin');
const animationOutside = document.querySelectorAll('.animation-outside');

window.addEventListener('scroll', () => {

  //animation 1
  animationAbove.forEach((e, index) => {
    let speed = e.getAttribute('speed');
    e.style.transition = `${speed} cubic-bezier(0.31, 0.49, 0.51, 1.21)`;
    e.style.transform = 'translateY(-100%) scale(0,0)';
    e.style.visibility= 'hidden';
    if(e.getBoundingClientRect().top < window.innerHeight){
      e.style.transform = 'translateY(0) scale(1,1)';
      e.style.visibility= 'visible';
    }
    if(e.getBoundingClientRect().top < -200){
      e.style.transform = 'translateY(-100%) scale(0,0)';
      e.style.visibility= 'hidden';
    }
  });

  //animation 2
  animationBelow.forEach((e, index) => {
    let speed = e.getAttribute('speed');
    e.style.transition = `${speed} cubic-bezier(0.31, 0.49, 0.51, 1.21)`;
    e.style.transform = 'translateY(100%) scale(0,0)';
    e.style.visibility= 'hidden';
    if(e.getBoundingClientRect().top < window.innerHeight){
      e.style.transform = 'translateY(0) scale(1,1)';
      e.style.visibility= 'visible';
    }
    if(e.getBoundingClientRect().top < -200){
      e.style.transform = 'translateY(100%) scale(0,0)';
      e.style.visibility= 'hidden';
    }
  });

  //animation 3
  animationLeft.forEach((e, index) => {
    let speed = e.getAttribute('speed');
    e.style.transition = `${speed} cubic-bezier(0.31, 0.49, 0.51, 1.21)`;
    e.style.transform = 'translateX(-100%) scale(0,0)';
    e.style.visibility= 'hidden';
    if(e.getBoundingClientRect().top < window.innerHeight){
      e.style.transform = 'translateX(0) scale(1,1)';
      e.style.visibility= 'visible';
    }
    if(e.getBoundingClientRect().top < -200){
      e.style.transform = 'translateX(-100%) scale(0,0)';
      e.style.visibility= 'hidden';
    }
  });

  //animation 4
  animationRight.forEach((e, index) => {
    let speed = e.getAttribute('speed');
    e.style.transition = `${speed} cubic-bezier(0.31, 0.49, 0.51, 1.21)`;
    e.style.transform = 'translateX(100%) scale(0,0)';
    e.style.visibility= 'hidden';
    if(e.getBoundingClientRect().top < window.innerHeight){
      e.style.transform = 'translateX(0) scale(1,1)';
      e.style.visibility= 'visible';
    }
    if(e.getBoundingClientRect().top < -200){
      e.style.transform = 'translateX(100%) scale(0,0)';
      e.style.visibility= 'hidden';
    }
  });
 
  animationOrigin.forEach((e, index) => {
    let speed = e.getAttribute('speed');
    e.style.transition = `${speed} cubic-bezier(0.31, 0.49, 0.05, 1.47)`;
    e.style.transform = 'scale(0,0)';
    e.style.visibility= 'hidden';
    if(e.getBoundingClientRect().top < window.innerHeight){
      e.style.transform = 'scale(1,1)';
      e.style.visibility= 'visible';
    }
    if(e.getBoundingClientRect().top < -200){
      e.style.transform = 'scale(0,0)';
      e.style.visibility= 'hidden';
    }
  });
  
  animationOutside.forEach((e, index) => {
    let speed = e.getAttribute('speed');
    e.style.transition = `${speed} cubic-bezier(0.31, 0.49, 0.51, 1.21)`;
    e.style.transform = 'scale(2,2)';
    e.style.visibility= 'hidden';
    if(e.getBoundingClientRect().top < window.innerHeight){
      e.style.transform = 'scale(1,1)';
      e.style.visibility= 'visible';
    }
    if(e.getBoundingClientRect().top < -200){
      e.style.transform = 'scale(2,2)';
      e.style.visibility= 'hidden';
    }
  });

})