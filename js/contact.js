(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = 'Incubatech Relais — ' + data.get('profil') + ' — ' + data.get('nom');
    const body = Array.from(data.entries()).map(([key, value]) => key + ' : ' + value).join('\n\n');
    window.location.href = 'mailto:gabriel.fourier@etu.umontpellier.fr?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    const status = document.getElementById('contact-status');
    status.textContent = 'Votre brouillon est prêt à ouvrir dans votre messagerie. Relisez-le et envoyez-le pour nous contacter. Si rien ne s’ouvre, écrivez à gabriel.fourier@etu.umontpellier.fr.';
    status.style.display = 'block';
  });
})();
