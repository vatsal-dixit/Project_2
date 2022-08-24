var result = document.getElementById("content");

const getItems = () => {
    let url = "https://fakestoreapi.com/products";
    fetch(url).then((res) => {
        return res.json();
    }).then((res) => {
        result.innerHTML = "";
        let item = document.getElementById("search");
        let arr = res.filter((obj) => {return (obj.category == item.value || obj.title.includes(item.value))});
        console.log(arr);
        arr.forEach(element => {
            result.innerHTML = result.innerHTML + `<div class="item">
            <image src=${element.image}><br>
            <p>${element.title}</p>
            <p class="price">$${element.price}</p>
            <p class="rating">${element.rating.rate} <i class="fa-solid fa-star"></i> (${element.rating.count})</p>
        </div>`;
        })
    })
} 