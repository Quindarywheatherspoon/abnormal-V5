document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {
      name: "10 Minutes Till Dawn",
      id: "button-10-minutes",
      img: "https://abnormal-alt-hosting.netlify.app/10-minutes-till-dawn.webp",
      url: "https://abnormal-hosting.netlify.app/10-minutes-till-dawn/",
    },
    {
      name: "2048",
      id: "button-2048",
      img: "https://abnormal-alt-hosting.netlify.app/2048.png",
      url: "https://abnormal-hosting.netlify.app/2048/",
    },
    {
      name: "A Dark Room",
      id: "button-a-dark-room",
      img: "https://abnormal-alt-hosting.netlify.app/adr.png",
      url: "https://abnormal-hosting.netlify.app/adarkroom/",
    },
    {
      name: "Bitlife",
      id: "button-bitlife",
      img: "https://abnormal-alt-hosting.netlify.app/Bitlife.png",
      url: "https://abnormal-hosting.netlify.app/bitlife/",
    },
    {
      name: "Binding of Isaac",
      id: "button-tboi",
      img: "https://abnormal-alt-hosting.netlify.app/binding-of-isaac.jpg",
      url: "https://isaac-but-abnormal.netlify.app/",
    },
    {
      name: ". Oh Yeah Musa!!!",
      id: "button-musa-1",
      img: "https://abnormal-alt-hosting.netlify.app/placeholder",
      url: "https://musa.com",
    },
    {
      name: ".. Do That UI!!!",
      id: "button-musa-2",
      img: "https://abnormal-alt-hosting.netlify.app/placeholder",
      url: "https://musa.com",
    },
    {
      name: "Monkey Mart",
      id: "button-monkey-mart",
      img: "https://abnormal-alt-hosting.netlify.app/placeholder",
      url: "https://abnormal-hosting.netlify.app/monkeymart/",
    },
    {
      name: "Awesome Tanks 2",
      id: "button-awesome-tanks-2",
      img: "https://abnormal-alt-hosting.netlify.app/placeholder",
      url: "https://abnormal-hosting.netlify.app/awesometanks2/",
    },
    {
      name: "Basketball Stars",
      id: "button-basketball-stars",
      img: "https://abnormal-alt-hosting.netlify.app/placeholder",
      url: "https://abnormal-hosting.netlify.app/basketball-stars/",
    },
    {
      name: "Circloo",
      id: "button-circloo",
      img: "https://abnormal-alt-hosting.netlify.app/placeholder",
      url: "https://abnormal-hosting.netlify.app/circlo/",
    },
    {
      name: "Cluster Rush",
      id: "button-cluster-rush",
      img: "https://abnormal-alt-hosting.netlify.app/placeholder",
      url: "https://abnormal-hosting.netlify.app/cluster-rush/",
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
      if (newTab) {
        newTab.document.write(`
          <html>
            <head>
              <title>New Tab</title>
              <style>
                body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
                object { width: 100%; height: 100vh; border: none; }
              </style>
            </head>
            <body>
              <object data="${game.url}" type="text/html"></object>
            </body>
          </html>
        `);
        newTab.document.close();

        const favicon = newTab.document.createElement("link");
        favicon.rel = "icon";
        favicon.type = "image/png";
        favicon.href = "https://this-doesnt-even-work.com";
        newTab.document.head.appendChild(favicon);
      } else {
        alert("Popup blocked! Please allow popups for this site.");
      }
    });

    buttonBox.appendChild(button);
  });
});
