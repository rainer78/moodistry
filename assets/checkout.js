(function () {
  'use strict';
  var links = window.MOODISTRY_CHECKOUT || {};
  function trustedPayPalLink(value) {
    if (typeof value !== 'string' || !value.trim()) return null;
    try {
      var u = new URL(value.trim());
      if (u.protocol !== 'https:') return null;
      var host = u.hostname.toLowerCase();
      if (!(host === 'paypal.com' || host.endsWith('.paypal.com') || host === 'paypal.me' || host.endsWith('.paypal.me'))) return null;
      return u.href;
    } catch(e) { return null; }
  }
  var product = document.body.dataset.moodistryProduct;
  var url = trustedPayPalLink(links[product]);
  var btn = document.querySelector('[data-paypal-buy]');
  var message = document.querySelector('[data-checkout-message]');
  if (!btn) return;
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    if (url) {
      window.location.assign(url);
    } else if (message) {
      message.textContent = 'Secure PayPal checkout is being connected. Purchases are not available on this preview yet.';
      message.hidden = false; message.classList.add('show');
      message.scrollIntoView({block:'nearest',behavior:'smooth'});
    }
  });
})();
