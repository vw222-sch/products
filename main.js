let products = [
    { id: 1, name: "Laptop", price: 250000 },
    { id: 2, name: "Telefon", price: 120000 },
    { id: 3, name: "Tablet", price: 80000 }
];

function renderProducts(arr){
    arr.forEach(obj => {
        document.querySelector("tbody").innerHTML += `
        <tr>
            <td>${obj.id}</td>
            <td>${obj.name}</td>
            <td>${obj.price}</td>
            <td>
                <button>Ár módosítás</button>
                <button>Törlés</button>
            </td>
        </tr>
        `
    });
}

renderProducts(products)