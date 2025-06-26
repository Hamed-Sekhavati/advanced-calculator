const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

// پشتیبانی از صفحه‌کلید فیزیکی
document.addEventListener("keydown", function (event) {
  const allowedKeys = "0123456789+-*/().%";
  if (allowedKeys.includes(event.key)) {
    appendToDisplay(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    backspace();
  } else if (event.key === "c" || event.key === "C") {
    clearDisplay();
  }
});