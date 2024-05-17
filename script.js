/**
 *
 * @param {number} n
 * @returns
 */
const factorize = (n) => {
  try {
    if (!isNaN(Number(n))) {
      if (n < 0) {
        return -1;
      } else if (n === 0) {
        return 0;
      } else {
        for (let i = n - 1; i >= 1; i--) {
          n = n * i;
        }
        return n;
      }
    } else {
      return -2;
    }
  } catch (e) {
    return -2;
  }
};

const handleChange = (e) => {
  const factor = factorize(e.value);
  if (factor >= 0) {
    console.debug("factor ", factor);
  } else if (factor === -2) {
    sendAlert("Error, debe introducir un número");
  } else if (factor === -1) {
    sendAlert("Error, debe introducir un número mayor a 0");
  }
};

const sendAlert = (msg) => {
  const alert = document.createElement("div");
  alert.className = "alert alert-danger";
  alert.role = "alert";
  alert.innerText = msg;

  const container = document.querySelector("#alert");

  if (container) {
    const child = container.querySelector("div[role='alert']");
    if (child) {
      container.removeChild(child);
    }
    container.appendChild(alert);
  }
};
