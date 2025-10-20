const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const rejectBtn = document.getElementById('reject-cookies');
if (localStorage.getItem('cookieConsent')) { banner.style.display = 'none'; }
acceptBtn.addEventListener('click', () => { localStorage.setItem('cookieConsent', 'accepted'); banner.style.display = 'none'; });
rejectBtn.addEventListener('click', () => { localStorage.setItem('cookieConsent', 'rejected'); banner.style.display = 'none'; });
