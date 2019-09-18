const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input")];

  fields.forEach(field => {
    if (field.value === "") form.classList.add("validate-error");
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName === "nono") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    form.classList.add("form-hide");
  }
});

form.addEventListener("animationstart", event => {
  if (event.animationName === "down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

form.addEventListener("animationend", event => {
  if (event.animationName === "down") {
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});

/* background stars */
const stars = document.querySelector("ul.stars");

for (let i = 0; i < 41; i++) {
  const li = document.createElement("li");

  const star = document.createElement('img');
  star.setAttribute('src', './img/star.png');


  li.appendChild(star);



  const random = (min, max) => Math.random() * (max - min) + min;

  const size = Math.floor(random(10, 30));
  const position = random(1, 99);
  const delay = random(3, 0.1);
  const duration = random(24, 12);


  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.borderRadius = `${size}px`;

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

  stars.appendChild(li);
}
