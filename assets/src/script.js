// menu icon animation

const inputEl = document.querySelector('.header input[type="checkbox"]');
const headerEl = document.querySelector('.header');

inputEl.addEventListener('click', () => {
  if (inputEl.checked) {
    headerEl.classList.add('has-checked');
  } else {
    headerEl.classList.remove('has-checked');
  }
});

////////////////////////////////////////////////////
// Make the navigation link bold when clicked

const navLink = document.querySelectorAll('.navLink')
navLink.forEach(el => el.addEventListener("click", clickLinkHandler))

function clickLinkHandler(e){
  const el = e.currentTarget
  document.querySelector('.navLink.bold').classList.remove('bold')
  el.classList.add('bold')
}

////////////////////////////////////////////////////
// Number Counting Animation

document.addEventListener("DOMContentLoaded", () => {
const statEls = document.querySelectorAll('.num')
statEls.forEach(counter => {
  animateValue(counter, 1, +counter.textContent, 5000);
})
})

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

///////////////////////////////////////////////////////
// observer

function initObserver(elements, addedClass, threshold) {
  const observer = new IntersectionObserver(cb, { threshold });
  function cb(entries) {
    entries.forEach((entry) => {
      entry.target.classList.toggle(addedClass, entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  }
  if (elements.length) elements.forEach((el) => observer.observe(el));
  else observer.observe(elements);
}

const headingEl = document.querySelector('.heading-primary');
initObserver(headingEl, 'reveal', 0.5);

const btnEl = document.querySelector('button');
initObserver(btnEl, 'reveal', 0.5);

const statEl = document.querySelector('.statistics');
initObserver(statEl, 'reveal', 0.5);

const heroServices = document.querySelector('.hero-services');
initObserver(heroServices, 'up', 0.3);

const heroPic = document.querySelector('.hero-pic');
initObserver(heroPic, 'up', 0.1);

const heroAbout = document.querySelector('.hero-about');
initObserver(heroAbout, 'up', 0.3);