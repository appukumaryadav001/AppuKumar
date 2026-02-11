const links = document.querySelectorAll('.navList ul li a');
const currentPage = window.location.pathname.split("/").pop(); 

for( const link of links){
    if(link.getAttribute("href")===currentPage){
      link.classList.add("active");
    }
}