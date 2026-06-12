const text = "Nadia.";
const el = document.getElementById("typewriter");
let i = 0;

function type() {
    if (i < text.length) {
        el.textContent += text[i];
        i++;
        setTimeout(type, 150);
    } setTimeout(() => {
        el.classList.add("done");
    }, 3500);
}

type();