const input = document.querySelector("input");
const items = document.querySelector(".list-items");

function loadList() {
    fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
            dataCountry = data;
            let listItem = data.map((item) => {
                return `
                <li class="item">${item.name.common}</li>
            `;
            }).join("");
            items.innerHTML = listItem;
        });
        
}
loadList();


input.addEventListener("keyup", ()=>{
    const item = document.querySelectorAll(".list-items .item");
    let inputSearch = input.value.toLowerCase();
    for (let i = 0; i < item.length; i++) {
        if (item[i].innerHTML.toLowerCase().includes(inputSearch)) {
            item[i].style.display = "";
        }else{
            item[i].style.display = "none";
        }
    }
})
