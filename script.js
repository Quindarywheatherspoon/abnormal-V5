document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("button-10-minutes")
    .addEventListener("click", function () {
      const newTab = window.open("about:blank", "_blank");
      newTab.document.body.style.margin = "0";
      newTab.document.body.style.padding = "0";

      const objectTag = document.createElement("object");
      objectTag.data =
        "https://abnormal-hosting.netlify.app/10-minutes-till-dawn/index.html";
      objectTag.type = "text/html";
      objectTag.style.width = "100%";
      objectTag.style.height = "100vh";

      newTab.document.body.appendChild(objectTag);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button-2048").addEventListener("click", function () {
    const newTab = window.open("about:blank", "_blank");
    newTab.document.body.style.margin = "0";
    newTab.document.body.style.padding = "0";

    const objectTag = document.createElement("object");
    objectTag.data = "https://abnormal-hosting.netlify.app/2048/index.html";
    objectTag.type = "text/html";
    objectTag.style.width = "100%";
    objectTag.style.height = "100vh";

    newTab.document.body.appendChild(objectTag);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("button-bitlife")
    .addEventListener("click", function () {
      const newTab = window.open("about:blank", "_blank");
      newTab.document.body.style.margin = "0";
      newTab.document.body.style.padding = "0";

      const objectTag = document.createElement("object");
      objectTag.data =
        "https://abnormal-hosting.netlify.app/bitlife/index.html";
      objectTag.type = "text/html";
      objectTag.style.width = "100%";
      objectTag.style.height = "100vh";

      newTab.document.body.appendChild(objectTag);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("button-binding")
    .addEventListener("click", function () {
      const newTab = window.open("about:blank", "_blank");
      newTab.document.body.style.margin = "0";
      newTab.document.body.style.padding = "0";

      const objectTag = document.createElement("object");
      objectTag.data =
        "https://isaac-but-abnormal.netlify.app/";
      objectTag.type = "text/html";
      objectTag.style.width = "100%";
      objectTag.style.height = "100vh";

      newTab.document.body.appendChild(objectTag);
    });
});
