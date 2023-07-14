


function toggleMenu() {
    document.getElementById("priNav").classList.toggle("open");
    document.getElementById("navBtn").classList.toggle("open");
}   

const x = document.getElementById('navBtn');
x.onclick = toggleMenu;