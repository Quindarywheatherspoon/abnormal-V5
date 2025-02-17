document.addEventListener("DOMContentLoaded", () => {
  const games = {
    "button-10-minutes": "https://abnormal-hosting.netlify.app/10-minutes-till-dawn/index.html",
    "button-2048": "https://abnormal-hosting.netlify.app/2048/index.html",
    "button-bitlife": "https://abnormal-hosting.netlify.app/bitlife/index.html",
    "button-tboi": "https://isaac-but-abnormal.netlify.app/",
  };

  const openGameInNewTab = (url) => {
    const newTab = window.open("about:blank", "_blank");
    if (!newTab) {
      alert("Popup blocked! Please allow popups for this site.");
      return;
    }

    Object.assign(newTab.document.body.style, { margin: "0", padding: "0" });

    const objectTag = Object.assign(document.createElement("object"), {
      data: url,
      type: "text/html",
      style: "width: 100%; height: 100vh;",
    });

    newTab.document.body.appendChild(objectTag);
  };

  Object.entries(games).forEach(([buttonId, url]) => {
    const button = document.getElementById(buttonId);
    if (button) button.addEventListener("click", () => openGameInNewTab(url));
  });
});
