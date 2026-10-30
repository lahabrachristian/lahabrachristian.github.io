(function(){
  var btn=document.querySelector('.menu-btn'), menu=document.getElementById('menu'), top=document.querySelector('.top');
  function setOpen(open){
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
    if(open){ menu.removeAttribute('hidden'); } else { menu.setAttribute('hidden',''); }
    document.body.classList.toggle('menu-open', open);
  }
  if(btn && menu){
    btn.addEventListener('click', function(){ setOpen(menu.hasAttribute('hidden')); });
    menu.addEventListener('click', function(e){ if(e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape' && !menu.hasAttribute('hidden')){ setOpen(false); btn.focus(); } });
  }
  function onScroll(){ if(top) top.classList.toggle('scrolled', window.scrollY>8); }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
})();
