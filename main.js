let products = [
    { id: 1, name: "Laptop", price: 250000 },
    { id: 2, name: "Telefon", price: 120000 },
    { id: 3, name: "Tablet", price: 80000 }
];

function genProduct(obj) {
    return `
    <tr>
        <td>${obj.id}</td>
        <td>${obj.name}</td>
        <td id="price">${obj.price}</td>
        <td>
            <button onclick="this.parentElement.parentElement.querySelector('#price').innerText = prompt('Add meg az új árat');">Ár módosítás</button>
            <button class="delete" onclick="this.parentElement.parentElement.remove();">Törlés</button>
        </td>
    </tr>
    `
}

function renderProducts(arr){
    arr.forEach(obj => {
        document.querySelector("tbody").innerHTML += genProduct(obj);
    });
}

renderProducts(products)