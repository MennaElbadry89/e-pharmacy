const products = [
    {
        id: 1,
        name: 'paracetamol',
        price: 13,
        imag: "image/paracetamol.jpg",
        category: "Medicine",
        amount: 1,
        },
  {
        id: 2,
        name: 'Folic Acid',
        price: 15,
        imag: "image/folic.jpg",
        category: "Medicine",
        amount: 1,
    },
    {  
        id: 3,
        name: 'vit C',
        price: 10,
        imag: "image/vitc.jpg",
        category: "Medicine",
        amount: 1,
    },
    {  
        id: 4,
        name: 'jonson',
        price: 5,
        imag: "image/jonson.jpg",
        category: "Cosmetic",
        amount: 1,
    },
    {  
        id: 5,
        name: 'sun block',
        price: 80,
        imag: "image/sunblock.jpg",
        category: "Cosmetic",
        amount: 1,
    },
    {
        id: 6,
        name: 'panadol',
        price: 25,
        imag: "image/cold.jpg",
        category: " Medicine",
        amount: 1,
    },
     {  
        id: 7,
        name: 'oxgyn',
        price: 5,
        imag: "image/oxgyn.jpg",
        category: " Devices",
        amount: 1,
    },
    {  
        id: 8,
        name: 'Pressure',
        price: 80,
        imag: "image/pressure.jpg",
        category: " Devices",
        amount: 1,
    },
    {
        id: 9,
        name: 'Termometer',
        price: 125,
        imag: "image/termometer.jpg",
        category: " Devices ",
        amount: 1,
    },
     {  
        id: 10,
        name: 'rouge',
        price: 25,
        imag: "image/rouge.jpg",
        category: "Cosmetic",
        amount: 1,
    },
    {
        id: 11,
        name: 'tooth paste',
        price: 25,
        imag: "image/tooth.jpg",
        category: "Cosmetic",
        amount: 1,
    },
]

const productsContainer = document.querySelector('.products .container')

const cartContainer = document.querySelector('.cart .container')
const total = document.querySelector('.totall')
const amoun = document.querySelector('.amount')



const setItemsOn = ()=>{
    let items = ''
    for(let i = 0; i< products.length; i++){
        items += 
        `<div class="card">
            <div class="pic">
                <img src="${products[i].img}" alt="">
            </div>
            <div class="details">
                <b>${products[i].name}</b>
                <p>$${products[i].price}</p>
                <button onclick="addToCart(${i})> Add to cart </button>
            </div>
        </div>  `
    }
 productsContainer.innerHTML = items
}

setItemsOn()

let cart
if(localStorage.getItem('cartData')){
    cart = JSON.parse(localStorage.getItem('cartData'))
}else{
    cart = []
}


function addToCart(index){
    let pro = products[index]
    cart.push(pro)
    displayProducts()
}

function displayProducts(){
    let totall = 0
    let data = cart.map( (val,i)=>{
        totall += val.price
        
    return    ` <div class="card">
            <img src="${val.img}" alt="">
            <div>
                <p> ${val.name} </p>
                <p> $${val.price} </p>
            </div>
            <div>
                <button> + </button>
                <span> 0 </span>
                <button>  -  </button>
            </div>
              <i class="fa-solid fa-trash" onclick="deletProduct(${i})"></i>
        </div> 
    `
}).join('')

       if(cart.length> 0){
        cartContainer.innerHTML = data
       }else{
        cartContainer.innerHTML = 'Your cart is empty'
       }
       
      total.innerText = totall
      localStorage.setItem('cartData', JSON.stringify(cart))
      amoun.innerText = cart.length
}
displayProducts()

function deletProduct(index){
    cart.splice(index, 1)
    displayProducts()
}
    


searchInput.addEventListener('input', function(){
    let x = searchInput.value.toLowerCase()
    // let items = ''
    // for(let i = 0; i < products.length; i++){
    //     if(products[i].name.toLowerCase().includes(x) || products[i].category.toLowerCase().includes(x)){
    //     items +=
    //     ` <div class="productCard">
    //             <img src="${products[i].imag}" alt="${products.name}">
    //             <h3>${products[i].name}</h3>
    //             <p>${products[i].category}</p>
    //             <p>price: ${products[i].price}$</p>
    //             <button onclick="addToCart(${i})"> Add to cart </button>
    //         </div>`
    // }
    //  productsContainer.innerHTML = items
    // }

    let y = products.filter((e) => 
        e.name.toLowerCase().includes(x) || e.category.toLowerCase().includes(x) )

    console.log(y)

        displayProducts() 
    })


displayProducts()
displayCart()