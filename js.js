const langWrap = document.querySelector(".langWrap");
const links = document.querySelectorAll("a");
const title = document.querySelector(".title");
const description = document.querySelector(".description");

links.forEach((e) => {
  e.addEventListener("click", () => {
    langWrap.querySelector(".active").classList.remove("active");
    e.classList.add("active");
    const attr = e.getAttribute("language");
    title.textContent = data[attr].title;
    description.textContent = data[attr].description;
  });
});

var data = {
  english: {
    title: "Programmers",
    description: `Programmers It's not only writers who can benefit from this free
        online tool. If you're a programmer who's working on a project where
        blocks of text are needed, this tool can be a great way to get that.
        It's a good way to test your programming and that the tool being
        created is working well.`,
  },
  ukrainian: {
    title: "Програмісти",
    description: `Програмісти Не лише автори можуть скористатися цією безкоштовністю
        онлайн-інструмент. Якщо ви програміст, який працює над проектом, де
        потрібні блоки тексту, цей інструмент може бути чудовим способом отримати це.
        Це хороший спосіб перевірити ваше програмування та інструмент
        створений працює добре.`,
  },
  spanish: {
    title: "Programadores",
    description: `Los programadores Autores no son los únicos que pueden beneficiarse de este servicio gratuito
        herramienta en línea. Si eres un programador trabajando en un proyecto donde
        necesita bloques de texto, esta herramienta puede ser una gran manera de conseguirlo.
        Esta es una buena manera de probar su programación y herramienta.
        creado funciona bien.`,
  },
};
