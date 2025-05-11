
    const quotes = {
      Positive: [
        { text: "First they ignore you, then they laugh at you, then they fight you, then you win" },
        { text: "Only you can control your future." },
        { text: "If you do not think about your future, you cannot have one." },
        { text: "There is always one moment in childhood when the door opens and lets the future in." }
      ],
      inspiration: [
        { text: "Believe you can and you're halfway there." },
        { text: "Love what you do." },
        { text: "The best preparation for tomorrow is doing your best today." },
        { text: "Ah, but a man's reach should exceed his grasp, Or what's a heaven for?" }
      ],
        Computers: [
        { text: "Never trust a computer you can't throw out a window." },
        { text: "To err is human, but to really foul things up you need a computer." },
        { text: "Man is still the most extraordinary computer of all." },
        { text: "The computer is a moron." }
      ]
    };

    let category = "Positive";
    let index = 0;
    let fontSize = 1.2;

    const quoteEl = document.getElementById("quote");
    const categorySelect = document.getElementById("category");

    /* Update*/

    function updateQuote() {
      const list = quotes[category];
      const q = list[index];
      quoteEl.textContent = `"${q.text}"`;
      quoteEl.style.fontSize = fontSize + "rem";
    }

    /* Next */

    function nextQuote() {
      const list = quotes[category];
      index = (index + 1) % list.length;
      updateQuote();
    }
     /* previous*/
    function prevQuote() {
      const list = quotes[category];
      index = (index - 1 + list.length) % list.length;
      updateQuote();
    }

    /* Randome*/

    function randomQuote() {
      const list = quotes[category];
      let rand;
      do {
        rand = Math.floor(Math.random() * list.length);
      } while (rand === index);
      index = rand;
      updateQuote();
    }

    /* Change Font Size*/

    function changeFontSize(delta) {
      fontSize = Math.max(0.8, fontSize + delta);
      updateQuote();
    }

    /* Dark Mode*/

    function toggleDarkMode() {
      document.body.classList.toggle("dark");
    }

    /* Category*/

    categorySelect.addEventListener("change", () => {
      category = categorySelect.value;
      index = 0;
      updateQuote();
    });

    updateQuote();
