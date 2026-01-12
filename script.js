const slides=document.querySelectorAll('.hero-slide');let i=0;
setInterval(()=>{
  slides[i].classList.remove('active');
  i=(i+1)%slides.length;
  slides[i].classList.add('active');
},5000);

document.getElementById('themeToggle').onclick=()=>{
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
};
