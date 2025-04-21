document.addEventListener("DOMContentLoaded", function () {
    const supportedLangs = ["en", "es"];

    document.querySelectorAll('.md-select__link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetLang = this.dataset.lang;
        const targetBase = this.dataset.baseUrl;

        const currentPath = window.location.pathname;

        // Split the path into parts
        const pathParts = currentPath.split('/').filter(Boolean);  // remove empty strings

        // Find the current language prefix in the path
        const currentLangIndex = pathParts.findIndex(part => supportedLangs.some(lang => part === lang));

        let newPath;
        if (currentLangIndex !== -1) {
          // Replace the language segment with the target
          pathParts[currentLangIndex] = targetLang;
          newPath = "/" + pathParts.join("/") + "/";
        } else {
          // No language code is found --> Go to target base
          window.location.href = targetBase;
          return;
        }

        const newUrl = window.location.origin + newPath;

        fetch(newUrl, { method: 'HEAD' }).then(res => {
          if (res.ok) {
            window.location.href = newPath;
          } else {
            window.location.href = targetBase;
          }
        }).catch(() => {
          window.location.href = targetBase;
        });
      });
    });
  });