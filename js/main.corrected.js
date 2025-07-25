
document.querySelectorAll('.nsw-main-nav__list a[role="button"]').forEach(button => {
  button.addEventListener('click', function () {
    const targetId = this.getAttribute('aria-controls');
    document.querySelectorAll('.nsw-main-nav__sub-nav').forEach(sub => {
      sub.style.display = 'none'; // Hide all submenus
    });
    const target = document.getElementById(targetId);
    if (target) {
      target.style.display = 'block'; // Show the correct submenu
    }
  });
});
