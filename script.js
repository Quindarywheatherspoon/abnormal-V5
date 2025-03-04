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
      name: "Monkey Mart",
      id: "button-monkey-mart",
      img: "https://abnormal-alt-hosting.netlify.app/monkey-mart.png",
      url: "https://abnormal-hosting.netlify.app/monkeymart/",
    },
    {
      name: "Awesome Tanks 2",
      id: "button-awesome-tanks-2",
      img: "https://abnormal-alt-hosting.netlify.app/awesome-tanks-2.png",
      url: "https://abnormal-hosting.netlify.app/awesometanks2/",
    },
    {
      name: "Basketball Stars",
      id: "button-basketball-stars",
      img: "https://abnormal-alt-hosting.netlify.app/basketball-stars.png",
      url: "https://abnormal-hosting.netlify.app/basketball-stars/",
    },
    {
      name: "Circloo",
      id: "button-circloo",
      img: "https://abnormal-alt-hosting.netlify.app/circloo.png",
      url: "https://abnormal-hosting.netlify.app/circlo/",
    },
    {
      name: "Cluster Rush",
      id: "button-cluster-rush",
      img: "https://abnormal-alt-hosting.netlify.app/Cluster-Rush.jpg",
      url: "https://abnormal-hosting.netlify.app/cluster-rush/",
    },
    {
      name: "Drive Mad",
      id: "button-drive-mad",
      img: "https://abnormal-alt-hosting.netlify.app/drive-mad.jpg",
      url: "https://abnormal-hosting.netlify.app/drive-mad/",
    },
    {
      name: "Cookie Clicker",
      id: "button-cookie-clicker",
      img: "https://abnormal-alt-hosting.netlify.app/cookie-clicker.png",
      url: "https://abnormal-hosting.netlify.app/cookie-clicker/",
    },
    {
      name: "OvO",
      id: "button-ovo",
      img: "https://abnormal-alt-hosting.netlify.app/ovo.png",
      url: "https://abnormal-hosting.netlify.app/OvO/",
    },
    {
      name: "Gladihopper",
      id: "button-gladihopper",
      img: "https://abnormal-alt-hosting.netlify.app/gladihopper.png",
      url: "https://abnormal-hosting.netlify.app/gladihopper/",
    },
    {
      name: "Getaway Shootout",
      id: "button-getaway-shootout",
      img: "https://abnormal-alt-hosting.netlify.app/getaway-shootout.png",
      url: "https://abnormal-hosting.netlify.app/getaway-shootout/",
    },
    {
      name: "Slope",
      id: "button-slope",
      img: "https://abnormal-alt-hosting.netlify.app/slope.jpg",
      url: "https://abnormal-hosting.netlify.app/slope/",
    },
    {
      name: "Recoil",
      id: "button-recoil",
      img: "https://abnormal-alt-hosting.netlify.app/recoil.png",
      url: "https://learn.follobusiness.com/semag/recoil/index.html",
    },
    {
      name: "Retro Bowl",
      id: "button-retro-bowl",
      img: "https://abnormal-alt-hosting.netlify.app/retro-bull.jpg",
      url: "https://abnormal-hosting.netlify.app/retro-bowl/",
    },
    {
      name: "Snow Rider 3D",
      id: "button-snow-rider-3d",
      img: "https://abnormal-alt-hosting.netlify.app/snow-rider-3d.png",
      url: "https://abnormal-hosting.netlify.app/snowrider3d/",
    },
    {
      name: "Stickman Hook",
      id: "button-stickman-hook",
      img: "https://abnormal-alt-hosting.netlify.app/stickman-hook.jpg",
      url: "https://abnormal-hosting.netlify.app/stickman-hook/",
    },
    {
      name: "Subway Surfers",
      id: "button-subway-surfer",
      img: "https://abnormal-alt-hosting.netlify.app/subway-surfers.webp",
      url: "https://abnormal-hosting.netlify.app/subway-surfers/",
    },
    {
      name: "Time Shooter 3",
      id: "button-time-shooter-3",
      img: "https://abnormal-alt-hosting.netlify.app/time-shooter-3.jpg",
      url: "https://mgalternative.github.io/3222e6b5-c758-4838-bbae-ed3388cdcc49/content/unblockeds-games.com/webgl/time-shooter-3/index.html",
    },
    {
      name: "Sort the Court",
      id: "button-sort-the-court",
      img: "https://abnormal-alt-hosting.netlify.app/sort-the-court.png",
      url: "https://abnormal-hosting.netlify.app/sort-the-court/",
    },
    {
      name: "Vex 3",
      id: "button-vex-3",
      img: "https://abnormal-alt-hosting.netlify.app/vex-3.jpg",
      url: "https://abnormal-hosting.netlify.app/vex-3/",
    },
    {
      name: "Color Tunnel",
      id: "button-color-tunnel",
      img: "https://abnormal-alt-hosting.netlify.app/color-tunnel.png",
      url: "https://the.deconstructors.co.uk/tam-color-tunnel/",
    },
    {
      name: "Fruit Ninja",
      id: "button-fruit-ninja",
      img: "https://abnormal-alt-hosting.netlify.app/fruit-ninja.webp",
      url: "https://abnormal-hosting.netlify.app/fruitninja/",
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
