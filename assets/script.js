
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
