
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


/* Scroll-reveal animations for all main-page content */
document.documentElement.classList.add('js');

const revealTargets = Array.from(document.querySelectorAll(
  'main h1, main h2, main h3, main p, main li, main .kicker, main .eyebrow, main .card, main .project, main .sample, main .service-row, main .timeline-item, main .strip-grid > div, main .case-image, main .notice, main .contact-item, main .form, main .btn, main .pill, main .link'
)).filter(element => !element.closest('.hero'));

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -35px 0px'
  });

  revealTargets.forEach((element, index) => {
    let revealType = 'text';

    if (element.matches('h1, h2, h3, .section-head h2, .page-hero h1')) {
      revealType = 'heading';
    } else if (element.matches('.card, .project, .sample, .service-row, .timeline-item, .contact-item, .form')) {
      revealType = 'card';
    } else if (element.matches('li, .strip-grid > div')) {
      revealType = 'list';
    } else if (element.matches('.case-image, .project-visual, img')) {
      revealType = 'media';
    } else if (element.matches('a.btn, button, input[type="submit"], .pill')) {
      revealType = 'action';
    } else if (element.matches('p')) {
      revealType = 'paragraph';
    }

    element.setAttribute('data-reveal', revealType);
    element.style.transitionDelay = (index % 4) * 70 + 'ms';
    revealObserver.observe(element);
  });
} else {
  revealTargets.forEach(element => element.classList.add('is-visible'));
}
