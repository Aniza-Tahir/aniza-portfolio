
const menu=document.querySelector('.menu');
const links=document.querySelector('.navlinks');
if(menu){menu.addEventListener('click',()=>{links.classList.toggle('open');menu.setAttribute('aria-expanded',links.classList.contains('open'));});}
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
const form=document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const subject=encodeURIComponent('Portfolio inquiry from '+(data.get('name')||'website visitor'));
    const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nProject Type: ${data.get('type')}\n\n${data.get('message')}`);
    window.location.href=`mailto:YOUR-EMAIL@example.com?subject=${subject}&body=${body}`;
  });
}


/* Scroll-reveal animations for portfolio content */
document.documentElement.classList.add('js');

const revealTargets = document.querySelectorAll(
  '.section-head, .two-col, .cards .card, .work-grid .project, .sample-list .sample, .service-row, .timeline-item, .contact-grid > *, .cta-inner, .page-hero .container, .case-hero .container'
);

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -45px 0px'
  });

  revealTargets.forEach((element, index) => {
    element.setAttribute('data-reveal', '');
    if (element.matches('.cards .card, .work-grid .project, .service-row, .timeline-item')) {
      element.style.transitionDelay = (index % 3) * 90 + 'ms';
    }
    revealObserver.observe(element);
  });
} else {
  revealTargets.forEach(element => element.classList.add('is-visible'));
}
