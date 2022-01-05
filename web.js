//close icon  concept
const icon=document.querySelector('.icon');
const searchBar=document.querySelector('.search-bar');
icon.addEventListener('click',close);
function close(){
  searchBar.style.display="none";  
}
//icon open concept
const open=document.querySelector('.search-container');
open.addEventListener('click',openbar);
function openbar(){
    document.getElementsByClassName(".search-bar").style.display="block";
}