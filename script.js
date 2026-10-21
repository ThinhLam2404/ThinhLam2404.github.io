/* ==========================================================================
   PORTFOLIO SCRIPTS
   Lam Duc Thinh — Backend & Fullstack Developer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Toast Notification System
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navigation = document.getElementById('navigation');

  function closeMenu() {
    if (!navigation || !menuToggle) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    const toggleIcon = menuToggle.querySelector('.toggle-icon');
    if (toggleIcon) toggleIcon.textContent = '+';
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      navigation.classList.toggle('open', !isExpanded);
      const toggleIcon = menuToggle.querySelector('.toggle-icon');
      if (toggleIcon) {
        toggleIcon.textContent = !isExpanded ? '×' : '+';
      }
    });

    navigation.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navigation.classList.contains('open')) {
        closeMenu();
        menuToggle.focus();
      }
    });

    document.addEventListener('click', e => {
      if (!e.target.closest('.header')) {
        closeMenu();
      }
    });

    window.matchMedia('(min-width: 769px)').addEventListener('change', closeMenu);
  }

  // Copy Buttons & Chips Handler
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      const text = button.getAttribute('data-copy');
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied! ✓';
        showToast(`Copied ${text} to clipboard!`);

        setTimeout(() => {
          button.textContent = originalText;
        }, 2200);
      }).catch(() => {
        showToast('Copied to clipboard!');
      });
    });
  });

  // Ticket Booking: Seat Reservation Decorative Grid Generator
  const seatMap = document.querySelector('.seat-map');
  if (seatMap) {
    seatMap.innerHTML = '';
    const selectedIndices = [18, 19];
    const reservedIndices = [2, 3, 8, 9, 24, 25, 30];

    for (let i = 0; i < 32; i++) {
      const seat = document.createElement('span');
      seat.className = 'seat';
      if (selectedIndices.includes(i)) seat.classList.add('selected');
      if (reservedIndices.includes(i)) seat.classList.add('reserved');
      seatMap.appendChild(seat);
    }
  }
});
