const form=document.getElementById('searchForm'),input=document.getElementById('query'),privacy=document.getElementById('privacy'),status=document.getElementById('status');
function search(q){q=q.trim();if(!q)return;let url;if(/^https?:\\/\\//i.test(q))url=q;else if(/^[a-z0-9.-]+\\.[a-z]{2,}(\\/.*)?$/i.test(q))url='https://'+q;else url='https://www.google.com/search?q='+encodeURIComponent(q);window.open(url,'_blank','noopener,noreferrer')}
form.addEventListener('submit',e=>{e.preventDefault();search(input.value)});
document.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>search(b.dataset.q));
privacy.onclick=()=>{document.body.classList.toggle('dark');const on=document.body.classList.contains('dark');status.textContent='Privacy mode '+(on?'on':'off');privacy.textContent=on?'🔒':'🛡️'};
