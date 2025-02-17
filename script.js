document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {
      name: "10 Minutes Till Dawn",
      id: "button-10-minutes",
      img: "https://abnormal-alt-hosting.netlify.app/10-minutes-till-dawn.webp",
      url: "https://abnormal-hosting.netlify.app/10-minutes-till-dawn/index.html",
    },
    {
      name: "2048",
      id: "button-2048",
      img: "https://abnormal-alt-hosting.netlify.app/2048.png",
      url: "https://abnormal-hosting.netlify.app/2048/index.html",
    },
    {
      name: "A Dark Room",
      id: "button-a-dark-room",
      img: "https://abnormal-alt-hosting.netlify.app/adr.png",
      url: "https://abnormal-hosting.netlify.app/adarkroom/index.html",
    },
    {
      name: "Bitlife",
      id: "button-bitlife",
      img: "https://abnormal-alt-hosting.netlify.app/Bitlife.png",
      url: "https://abnormal-hosting.netlify.app/bitlife/index.html",
    },
    {
      name: "Binding of Isaac",
      id: "button-tboi",
      img: "https://abnormal-alt-hosting.netlify.app/binding-of-isaac.jpg",
      url: "https://isaac-but-abnormal.netlify.app/",
    },
    {
      name: ". Oh Yeah Musa!!!",
      id: "button-tboi",
      img: "https://abnormal-alt-hosting.netlify.app/placeholder",
      url: "https://musa.com",
    },
    {
      name: ".. Do That UI!!!",
      id: "button-tboi",
      img: "https://abnormal-alt-hosting.netlify.app/placeholder",
      url: "https://musa.com",
    },
  ];

  // Sort games alphabetically
  games.sort((a, b) => a.name.localeCompare(b.name));

  const buttonBox = document.querySelector(".button-box");
  buttonBox.innerHTML = "";

  games.forEach((game) => {
    const button = document.createElement("div");
    button.classList.add("button");
    button.style.backgroundImage = `url('${game.img}')`;
    button.id = game.id;

    const text = document.createElement("p");
    text.textContent = game.name;

    button.appendChild(text);
    button.addEventListener("click", () => {
      const newTab = window.open("about:blank", "_blank");
      const iframe = newTab.document.createElement("iframe");
      iframe.src = game.url;
      iframe.style.width = "100%";
      iframe.style.height = "100vh";
      iframe.style.border = "none";
      newTab.document.body.style.margin = "0";
      newTab.document.body.style.padding = "0";
      newTab.document.body.appendChild(iframe);
    });

    buttonBox.appendChild(button);
  });
});
