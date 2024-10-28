const menuIcon = document.getElementById('menu-icon');
const links = document.getElementById('nav-links');
function handleMenu(){
    if (links.style.display === 'none') {
        links.style.display = 'block';
    } else {
        links.style.display = 'none';
    }    
}
menuIcon.addEventListener('click', handleMenu);