document.addEventListener("DOMContentLoaded", function () {
  const button10Minutes = document.getElementById("button-10-minutes");

  button10Minutes.addEventListener("click", function () {
    // Open a new tab
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
  const button10Minutes = document.getElementById("button-2048");

  button10Minutes.addEventListener("click", function () {
    // Open a new tab
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
