const burger = document.querySelector(".burger"),
  menu = document.querySelector(".menu");
burger.addEventListener("click", () => {
  menu.classList.add("menu-active");
});
menu.addEventListener("click", () => {
  menu.classList.remove("menu-active");
});
const openCart = document.querySelector("#open_cart"),
  closeCart = document.querySelector("#close_btn"),
  busket = document.querySelector(".busket");
openCart.addEventListener("click", () => {
  busket.classList.add("busket_active");
});
closeCart.addEventListener("click", () => {
  busket.classList.remove("busket_active");
});

let noveltys = [
  {
    newproduct: false,
    id: "1",
    name: "ТУМБА С РАКОВИНОЙ «ROCA» VICTORIA NORD 80 (VICTORIA NORD 80) ПОДВЕСНАЯ БЕЛАЯ ГЛЯНЦЕВАЯ",
    cost: "29 732",
    image: "content/shells1.png",
    class: "shells",
    alt: "Тумба",
  },
  {
    newproduct: false,
    id: "2",
    name: "ТУМБА С РАКОВИНОЙ «ROCA» THE GAP NEW 60 С 3 ЯЩИКАМИ (VICTORIA-N 60) ПОДВЕСНАЯ БЕЛЫЙ ГЛЯНЕЦ",
    cost: "40 980",
    image: "content/shells2.png",
    class: "shells",
    alt: "Тумба",
  },
  {
    newproduct: false,
    id: "3",
    name: "ТУМБА С РАКОВИНОЙ «ROCA» RONDA 60 (THE GAP UNIK 60) ПОДВЕСНАЯ БЕТОН/БЕЛАЯ",
    cost: "37 880",
    image: "content/shells3.png",
    class: "shells",
    alt: "Тумба",
  },
  {
    newproduct: false,
    id: "4",
    name: "ТУМБА С РАКОВИНОЙ «ROCA» DOMI NEW 100 (THE GAP PLUS 100/46 3270ME004) ПОДВЕСНАЯ БЕЛЫЙ ГЛЯНЕЦ ПРАВАЯ",
    cost: "57 980",
    image: "content/shells4.png",
    class: "shells",
    alt: "Тумба",
  },
  {
    newproduct: true,
    id: "5",
    name: "ТУМБА С РАКОВИНОЙ «AQUANET» АЛВИТА NEW 100 (FLAT 100) ПОДВЕСНАЯ АНТРАЦИТ МАТОВЫЙ",
    cost: "36 297",
    image: "content/shells5.png",
    class: "shells",
    alt: "Тумба",
  },
  {
    newproduct: true,
    id: "",
    name: "СМЕСИТЕЛЬ ДЛЯ ВАННЫ «ORANGE» LUTZ M04-100B ЧЁРНЫЙ МАТОВЫЙ",
    cost: "9 490",
    image: "content/mixer1.png",
    class: "mixers",
    alt: "Смеситель",
  },
  {
    newproduct: false,
    id: "",
    name: "СМЕСИТЕЛЬ ДЛЯ РАКОВИНЫ «BRAVAT» REAL F1121179CP ХРОМ",
    cost: "6 870",
    image: "content/mixer2.png",
    class: "mixers",
    alt: "Смеситель",
  },
  {
    newproduct: false,
    id: "",
    name: "СМЕСИТЕЛЬ ДЛЯ РАКОВИНЫ «ORANGE» LUTZ M04-121B ЧЁРНЫЙ МАТОВЫЙ",
    cost: "9 990",
    image: "content/mixer3.png",
    class: "mixers",
    alt: "Смеситель",
  },
  {
    newproduct: false,
    id: "",
    name: "СМЕСИТЕЛЬ С ГИГИЕНИЧЕСКИМ ДУШЕМ «ALLEN BRAU» PRIORITY ЧЁРНЫЙ МАТОВЫЙ",
    cost: "14 060",
    image: "content/mixer4.png",
    class: "mixers",
    alt: "Смеситель",
  },
  {
    newproduct: false,
    id: "",
    name: "СМЕСИТЕЛЬ ДЛЯ ВАННЫ «ORANGE» LOOP M26-100CR ХРОМ",
    cost: "3 490",
    image: "content/mixer5.png",
    class: "mixers",
    alt: "Смеситель",
  },
  {
    newproduct: true,
    id: "",
    name: "ВАННА АКРИЛОВАЯ «RADOMIR» ГРАНАДА 185/110 С КАРКАСОМ БЕЗ СИФОНА БЕЛАЯ С МОЛДИНГОМ ХРОМ",
    cost: "96 511",
    image: "content/bath1.png",
    class: "bath",
    alt: "Ванна",
  },
  {
    newproduct: false,
    id: "",
    name: "ВАННА АКРИЛОВАЯ КОМПЛЕКТ «RADOMIR» ИРМА 160/105 БЕЛАЯ ЛЕВАЯ/ПРАВАЯ",
    cost: "34 467",
    image: "content/bath2.png",
    class: "bath",
    alt: "Ванна",
  },
  {
    newproduct: false,
    id: "",
    name: "ВАННА АКРИЛОВАЯ «ART&MAX» AM-203 160/75 С НОЖКАМИ С СИФОНОМ БЕЛАЯ",
    cost: "63 900",
    image: "content/bath3.png",
    class: "bath",
    alt: "Ванна",
  },
  {
    newproduct: false,
    id: "",
    name: "ВАННА АКРИЛОВАЯ КОМПЛЕКТ «1MARKA» DIANA 170/105 БЕЛАЯ ЛЕВАЯ/ПРАВАЯ",
    cost: "39 610",
    image: "content/bath4.png",
    class: "bath",
    alt: "Ванна",
  },
  {
    newproduct: false,
    id: "",
    name: "ВАННА АКРИЛОВАЯ «ROCA» EASY 170/75 (ZRU9302899) БЕЗ ОПОР БЕЗ СИФОНА БЕЛАЯ",
    cost: "21 990",
    image: "content/bath5.png",
    class: "bath",
    alt: "Ванна",
  },
  {
    newproduct: true,
    id: "",
    name: "Душевая кабина «TRITON» ХИТ А 88/88 низкий поддон прозрачная/белая",
    cost: "19 840",
    image: "content/shower1.png",
    class: "showers",
    alt: "Душевая кабина",
  },
  {
    newproduct: false,
    id: "",
    name: "ДУШЕВАЯ КАБИНА «TRITON» ТОП 88/88 НИЗКИЙ ПОДДОН ПРОЗРАЧНАЯ/ЧЁРНАЯ",
    cost: "24 290",
    image: "content/shower2.png",
    class: "showers",
    alt: "Душевая кабина",
  },
  {
    newproduct: false,
    id: "",
    name: "ДУШЕВОЙ УГОЛОК «RIHO» NOVIK Z201 90/90 КВАДРАТНЫЙ ПРОЗРАЧНЫЙ",
    cost: "83 076",
    image: "content/shower3.png",
    class: "showers",
    alt: "Душевая кабина",
  },
  {
    newproduct: false,
    id: "",
    name: "ДУШЕВАЯ КАБИНА «TRITON» СТАНДАРТ ДН4 100/100 СРЕДНИЙ ПОДДОН АКВА-МОЗАИКА/БЕЛАЯ",
    cost: "31 390",
    image: "content/shower4.png",
    class: "showers",
    alt: "Душевая кабина",
  },
  {
    newproduct: false,
    id: "",
    name: "ДУШЕВОЙ УГОЛОК «WASSERKRAFT» LIPPE 120/90 ПРЯМОУГОЛЬНЫЙ ПРОЗРАЧНЫЙ/ХРОМ УНИВЕРСАЛЬНЫЙ",
    cost: "49 950",
    image: "content/shower5.png",
    class: "showers",
    alt: "Душевая кабина",
  },
  {
    newproduct: false,
    id: "",
    name: "УНИТАЗ КОМПАКТ БЕЗОБОДКОВЫЙ «ORANS» WM-9902 БЕЛЫЙ С СИДЕНЬЕМ ДЮРОПЛАСТ С МИКРОЛИФТОМ БЕЛОЕ",
    cost: "19 800",
    image: "content/toilet1.png",
    class: "toilet",
    alt: "Унитаз",
  },
  {
    newproduct: false,
    id: "",
    name: "ПОДВЕСНОЕ БИДЕ «GROSSMAN» GROSSMAN GR-B4412 БЕЛОЕ",
    cost: "5 700",
    image: "content/toilet2.png",
    class: "toilet",
    alt: "Унитаз",
  },
  {
    newproduct: false,
    id: "",
    name: "ПОДВЕСНОЕ БИДЕ «VITRA» PLURAL 7831B483-0288 ЧЕРНОЕ МАТОВОЕ",
    cost: "76 690",
    image: "content/toilet3.png",
    class: "toilet",
    alt: "Унитаз",
  },
  {
    newproduct: false,
    id: "",
    name: "ПОДВЕСНОЙ УНИТАЗ БЕЗОБОДКОВЫЙ «OWL 1975» VIND CIRKEL-H ЧЕРНЫЙ С СИДЕНЬЕМ ДЮРОПЛАСТ",
    cost: "16 950",
    image: "content/toilet4.png",
    class: "toilet",
    alt: "Унитаз",
  },
  {
    newproduct: false,
    id: "",
    name: "УНИТАЗ КОМПАКТ БЕЗОБОДКОВЫЙ «CERSANIT» NATURE 011 БЕЛЫЙ С СИДЕНЬЕМ ДЮРОПЛАСТ",
    cost: "12 990",
    image: "content/toilet5.png",
    class: "toilet",
    alt: "Унитаз",
  },
];

let placeholder = document.querySelector("#novinki");
let catalog = document.querySelector("#catalog_items");
if (placeholder) {
  const newCatalog = noveltys.filter((catalogOne) => catalogOne.newproduct);
  renderCatalogs(newCatalog, placeholder);
} else if (catalog) {
  renderCatalogs(noveltys, catalog);
}
function renderCatalogs(products, selector) {
  let out = "";
  for (let novelty of products) {
    out += `
          <div class=" ${novelty.class} card card3">
          <img src=" ${novelty.image} " class="card-img-top" alt=" ${novelty.alt} ">
             <div class="card-body">
                <p class="card-text"> ${novelty.name} </p>
                <h4 class="card-title"> ${novelty.cost} ₽</h4>
                <a class="btn btn-primary" onclick="add_to_cart(${novelty.id})">В корзину</a>
             </div>
          </div>
    `;
  }
  selector.innerHTML = out;
}

const localBusket = localStorage.getItem("busket");
const busketArr = localBusket ? JSON.parse(localBusket) : [];
if (localBusket) {
  renderBusket();
}
function add_to_cart(id) {
  const add_pass = noveltys.find((item) => item.id === String(id));
  busketArr.push(add_pass);
  renderBusket();
  localStorage.setItem("busket", JSON.stringify(busketArr));
}
function renderBusket() {
  const busketDiv = document.querySelector(".busket_items");
  let out = "";
  busketArr.forEach((novelty) => {
    out += `<div class=" ${novelty.class} card card3">
          <img src=" ${novelty.image} " class="card-img-top" alt=" ${novelty.alt} ">
             <div class="card-body">
                <p class="card-text"> ${novelty.name} </p>
                <h4 class="card-title"> ${novelty.cost} ₽</h4>
                <a class="btn btn-primary" onclick="add_to_cart(${novelty.id})">В корзину</a>
             </div>
          </div>`;
  });
  busketDiv.innerHTML = out;
}

const filterCatalog = [...noveltys];
const buttonDiv = document.querySelector("#buttonFilter");
const filters = ["bath", "showers", "shells", "toilet", "mixers", "towel", "tile"];
buttonDiv.addEventListener("click", (e) => {
  e.preventDefault();
  let filterCatalog = [];
  const form = document.forms.filter;
  filters.forEach((element) => {
    if (form[element]?.checked) {
      filterCatalog = [
        ...filterCatalog,
        ...noveltys.filter((item) => element === item.class),
      ];
      console.log(filterCatalog);
    }
  });
  if (filterCatalog.length) {
    renderCatalogs(filterCatalog, catalog);
  } else {
    renderCatalogs(noveltys, catalog);
  }
});