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
    newproduct: true,
    id: "1",
    name: "Тумба с раковиной «SPECTRUM» Мадейро 80 (EUPHORIA 80) подвесная белая",
    cost: "26 122",
    image: "content/new1.png",
    class: "shells",
    alt: "Тумба",
  },
  {
    newproduct: true,
    id: "2",
    name: "Смеситель для раковины без донного клапана Ideal Standard Ceraplan BD222XG",
    cost: "cost",
    image: "content/new2.png",
    class: "mixers",
    alt: "Смеситель",
  },
  {
    newproduct: true,
    id: "3",
    name: "Акриловая ванна 170х80 см Sancos First FB10",
    cost: "cost",
    image: "content/new3.png",
    class: "bath",
    alt: "Ванна",
  },
  {
    newproduct: true,
    id: "4",
    name: "Душевая кабина «TRITON» ХИТ А 88/88 низкий поддон прозрачная/белая",
    cost: "cost",
    image: "content/new4.png",
    class: "showers",
    alt: "Душевая кабина",
  },
  {
    newproduct: false,
    id: "5",
    name: "FLDFДушевая кабина «TRITON» ХИТ А 88/88 низкий поддон прозрачная/белая",
    cost: "cost",
    image: "content/new4.png",
    class: "showers",
    alt: "Душевая кабина",
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
const filters = ["bath", "showers", "shells", "toilet", "mixers", "towel"];
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
