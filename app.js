const $=id=>document.getElementById(id);
const address=$("address");
function navigate(value){
  const v=value.trim(); if(!v)return;
  let url;
  try{
    if(/^https?:\/\//i.test(v)) url=v;
    else if(/^[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(v)) url="https://"+v;
    else url="https://www.google.com/search?q="+encodeURIComponent(v);
  }catch(e){url="https://www.google.com/search?q="+encodeURIComponent(v)}
  window.location.href=url;
}
$("searchForm").addEventListener("submit",e=>{e.preventDefault();navigate(address.value)});
document.querySelectorAll("[data-url]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.url)));
$("theme").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light")});
if(localStorage.getItem("theme")==="dark")document.body.classList.add("dark");
$("reload").addEventListener("click",()=>location.reload());
$("home").addEventListener("click",()=>location.href="index.html");
$("back").addEventListener("click",()=>history.back());
$("forward").addEventListener("click",()=>history.forward());