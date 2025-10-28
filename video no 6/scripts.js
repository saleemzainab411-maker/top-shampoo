// scripts.js — small behaviors for nav toggle and form
document.addEventListener('DOMContentLoaded',()=>{
  // set year
  const year = document.getElementById('year'); if(year) year.textContent = new Date().getFullYear();

  // nav toggle
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  navToggle && navToggle.addEventListener('click',()=>{
    if(nav.style.display === 'flex'){nav.style.display='none'} else {nav.style.display='flex'; nav.style.flexDirection='column'; nav.style.gap='12px'}
  });

  // form submit (demo - no backend)
  const form = document.getElementById('orderForm');
  const msg = document.getElementById('orderMsg');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || 'Customer';
      // simple validation
      if(!data.get('email')){
        msg.textContent = 'Please provide a valid email.'; msg.style.color='crimson'; return;
      }
      // fake submit
      msg.style.color='green';
      msg.textContent = `Thanks ${name}! Your order has been placed. We'll email you shortly.`;
      form.reset();
    });
  }
  
  // reveal on scroll using IntersectionObserver
  const reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && reveals.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    },{threshold:0.12});
    reveals.forEach(r=>io.observe(r));
  } else {
    // fallback: show all
    reveals.forEach(r=>r.classList.add('in-view'))
  }
});
