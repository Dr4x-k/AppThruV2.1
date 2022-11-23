document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn'),
        sidebar = document.getElementById('sidebar');
    
    btn.addEventListener('click', () => {
        if (!sidebar.classList.contains("active")) {
            sidebar.classList.add("active");
        } else {
            sidebar.classList.remove("active");
        }
    });
    // console.log(sidebar)
});