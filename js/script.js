import axios from "axios";

const row = document.querySelector('.row')
axios('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    console.log(res.data)
    res.data.map(el => (
        row.innerHTML += `<div class="col-4 my - 5">
            <img src=" " alt="">
        </div>`
    ))
})