// HEAVEN LOUNGE & BAR - Interactive Controller

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle (Light Warm Cream #FAF6F5 <-> Dark Obsidian Nightlife)
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const htmlRoot = document.documentElement;

  // Initialize theme from storage (default to 'light' to match tapbar.in reference)
  const savedTheme = localStorage.getItem('heaven-theme') || 'light';
  if (savedTheme === 'dark') {
    htmlRoot.setAttribute('data-theme', 'dark');
    updateThemeIcons(true);
  } else {
    htmlRoot.removeAttribute('data-theme');
    updateThemeIcons(false);
  }

  function updateThemeIcons(isDark) {
    themeToggleBtns.forEach(btn => {
      btn.innerHTML = isDark
        ? `<!-- Sun icon for light mode -->
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <circle cx="12" cy="12" r="5"></circle>
             <line x1="12" y1="1" x2="12" y2="3"></line>
             <line x1="12" y1="21" x2="12" y2="23"></line>
             <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
             <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
             <line x1="1" y1="12" x2="3" y2="12"></line>
             <line x1="21" y1="12" x2="23" y2="12"></line>
             <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
             <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
           </svg>`
        : `<!-- Moon icon for dark mode -->
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
           </svg>`;
      btn.setAttribute('aria-label', isDark ? 'Switch to Warm Cream (Light) Theme' : 'Switch to Dark Nightlife Theme');
      btn.setAttribute('title', isDark ? 'Switch to Warm Cream Theme' : 'Switch to Dark Nightlife Theme');
    });
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isCurrentDark = htmlRoot.getAttribute('data-theme') === 'dark';
      if (isCurrentDark) {
        htmlRoot.removeAttribute('data-theme');
        localStorage.setItem('heaven-theme', 'light');
        updateThemeIcons(false);
      } else {
        htmlRoot.setAttribute('data-theme', 'dark');
        localStorage.setItem('heaven-theme', 'dark');
        updateThemeIcons(true);
      }
    });
  });

  // Sticky Navbar Blur Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Navigation Drawer
  const mobileToggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', openDrawer);
  }
  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Reservation Modal Logic
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalTriggers = document.querySelectorAll('[data-open-modal="reservation"]');
  const modalClose = document.querySelector('.modal-close');
  const bookingForm = document.getElementById('reservationForm');

  const openModal = () => {
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  modalTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('resName').value;
      const guests = document.getElementById('resGuests').value;
      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const phone = document.getElementById('resPhone').value;

      alert(`Thank you, ${name}! Your table reservation request for ${guests} guests on ${date} at ${time} has been received. Our team will contact you at ${phone} to confirm.`);
      closeModal();
      bookingForm.reset();
    });
  }

  // Gallery Lightbox Modal
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return;

      const lightbox = document.createElement('div');
      lightbox.className = 'modal-backdrop open';
      lightbox.style.cursor = 'zoom-out';
      lightbox.innerHTML = `
        <div style="position: relative; max-width: 90vw; max-height: 90vh;">
          <img src="${img.src}" alt="${img.alt}" style="max-width: 90vw; max-height: 85vh; border-radius: 8px; border: 1px solid rgba(184,134,11,0.4); box-shadow: 0 20px 50px rgba(0,0,0,0.8); object-fit: contain;">
        </div>
      `;
      document.body.appendChild(lightbox);
      lightbox.addEventListener('click', () => {
        lightbox.remove();
      });
    });
  });

});
