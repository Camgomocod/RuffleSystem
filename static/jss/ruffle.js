(function () {
  let count = 0;
  const items = [
    "🍭",
    "❌",
    "⛄️",
    "🦄",
    "🍌",
    "💩",
    "👻",
    "😻",
    "💵",
    "🤡",
    "🦖",
    "🍎",
    "😂",
    "🖕",
  ];
  const doors = document.querySelectorAll(".door");

  document.querySelector("#spinner").addEventListener("click", spin);
  document.querySelector("#reseter").addEventListener("click", init);

  function init(firstInit = true, groups = 1, duration = 1) {
    for (const door of doors) {
      if (firstInit) {
        door.dataset.spinned = "0";
      } else if (door.dataset.spinned === "1") {
        return;
      }

      const boxes = door.querySelector(".boxes");
      const boxesClone = boxes.cloneNode(false);
      const pool = ["❓"];

      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        pool.push(...shuffle(arr));

        boxesClone.addEventListener(
          "transitionstart",
          function () {
            door.dataset.spinned = "1";
            this.querySelectorAll(".box").forEach((box) => {
              box.style.filter = "blur(1px)";
            });
          },
          { once: true }
        );

        boxesClone.addEventListener(
          "transitionend",
          function () {
            this.querySelectorAll(".box").forEach((box, index) => {
              box.style.filter = "blur(0)";
              if (index > 0) this.removeChild(box);
            });
          },
          { once: true }
        );
      }

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = door.clientWidth + "px";
        box.style.height = door.clientHeight + "px";
        box.textContent = pool[i];
        boxesClone.appendChild(box);
      }
      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${
        door.clientHeight * (pool.length - 1)
      }px)`;
      door.replaceChild(boxesClone, boxes);
    }
  }
  /* Sección del codigo que permite animar el apartado del sorteo y cambiar el color de las luces,
  también el poder mostrar el mensaje correspondiente*/
  async function spin() {
    count++;
    init(false, 1, 2);
    const messageBox = document.getElementById("messageBox");
    const light1 = document.getElementById("light1");
    const light2 = document.getElementById("light2");

    messageBox.innerText = "🔥🔥🔥🔥🔥";

    for (const door of doors) {
      const boxes = door.querySelector(".boxes");
      const duration = parseInt(boxes.style.transitionDuration);
      boxes.style.transform = "translateY(0)";
      light1.style.backgroundColor = "#dafff7";
      light2.style.backgroundColor = "#dafff7";

      light1.classList.remove("desactive");
      light2.classList.remove("desactive");

      if (count === 5) {
        boxes.querySelector(".box").textContent = "😊";
        setTimeout(() => {
          light1.classList.add("active");
          light2.classList.add("active");
        }, 2400);
        showMessage();
      } else {
        light1.classList.remove("active");
        light2.classList.remove("active");
        setTimeout(() => {
          light1.classList.add("desactive");
          light2.classList.add("desactive");
          messageBox.textContent = "Suerte la proxima 😞";
        }, 2400);
      }

      await new Promise((resolve) => setTimeout(resolve, duration * 100));
    }
  }

  function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  }

  function showMessage() {
    setTimeout(() => {
      const messageBox = document.getElementById("messageBox");
      const message = "Ganador! 😄";
      messageBox.innerText = message;
    }, 2500);
  }

  init();
})();
