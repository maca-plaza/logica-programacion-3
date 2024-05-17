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
  const result = document.querySelector("#result");
  const containerAlert = document.querySelector("#alert");
  if (result && containerAlert) {
    result.innerText = "";
    containerAlert.innerHTML = "";
    const factor = factorize(e.value);
    if (factor >= 0) {
      result.innerText = "Factorizado " + factor;
    } else if (factor === -2) {
      sendAlert("Error, debe introducir un número", containerAlert);
    } else if (factor === -1) {
      sendAlert("Error, debe introducir un número mayor a 0", containerAlert);
    }
  }
};

const sendAlert = (msg, container) => {
  const alert = document.createElement("div");
  alert.className = "alert alert-danger";
  alert.role = "alert";
  alert.innerText = msg;
  container.appendChild(alert);
};
