
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


// Scroll reveals, subtle hover motion, and the home-page typing effect.
(function(){
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const typing=document.querySelector('[data-typing]');
  if(typing){
    const fullText=typing.getAttribute('aria-label')||typing.textContent.trim();
    if(reduceMotion){
      typing.textContent=fullText;
      typing.classList.add('typing-done');
    }else{
      typing.textContent='';
      let index=0;
      const typeNext=()=>{
        if(index>=fullText.length){
          typing.classList.add('typing-done');
          return;
        }
        typing.textContent+=fullText.charAt(index++);
        window.setTimeout(typeNext,42);
      };
      window.setTimeout(typeNext,260);
    }
  }

  if(reduceMotion || !('IntersectionObserver' in window)) return;
  const targets=document.querySelectorAll(
    '.hero-grid > .reveal, .strip-grid > div, .section-head, .two-col > div, .card, .project, .sample, .service-row, .timeline-item, .case-image, .contact-item, .form, .cta-inner, .page-hero .container, .case-hero > .container'
  );
  const observer=new IntersectionObserver((entries,obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -35px 0px'});

  targets.forEach((element,index)=>{
    element.classList.add('motion-reveal');
    element.style.setProperty('--motion-delay',((index%4)*85)+'ms');
    observer.observe(element);
  });
})();
