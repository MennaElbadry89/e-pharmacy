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
        name: 'Johnson',
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


const productsContainer = document.querySelector('.productsContainer')
const shoppingCart = document.querySelector(".main .car")
const cartItems = document.querySelector('.main .car #cartItems')
const clearCart = document.querySelector('#clearCart')
const searchInput = document.querySelector('#searchInput')
const totalPrice = document.querySelector('#totalPrice')



let cart = JSON.parse(localStorage.getItem('pharmacyCart')) || []


function displayProducts( list = products){
    let items = ''
    for(let i = 0; i < list.length; i++){
        items +=
        ` <div class="productCard">
                <img src="${list[i].imag}" alt="${list[i].name}">
                <h3>${list[i].name}</h3>
                <p>${list[i].category}</p>
                <p>price: ${list[i].price}$</p>
                <button onclick="addToCart(${list[i].id})"> Add to cart </button>
            </div>`
    }
     productsContainer.innerHTML = items
}
displayProducts()
    
function addToCart(index){
    let product = products.find(function(e){
        return e.id === index
    } );
    if(!product) return;
    let found = cart.find(function(c){
        return c.id === index
    });
    if(found){
        found.amount += 1
    }else{
        let newitem = {
            id: product.id,
            name: product.name,
            price: product.price,
            imag: product.imag,
            category: product.category,
            amount: 1,
        }
            cart.push(newitem)
            }
    saveCart()
    displayCart()
}

function saveCart(){
    localStorage.setItem("pharmacyCart", JSON.stringify(cart))
}

function displayCart(){
    if(cart.length > 0){

        shoppingCart.style.display = 'block'
    let total = 0
    let xx =''
    for(let i = 0; i< cart.length; i++){
        total += cart[i].price * cart[i].amount
        xx +=
                `<div class="card">
                 <p>${cart[i].name} <span style="color: aqua;">(  ${cart[i].amount}  )</span> </p>
                 <div>
                 <button onclick="changeAmount(${cart[i].id}, -1)"> - </button>
                 <button onclick="changeAmount(${cart[i].id},  1)"> + </button>
                 <button onclick="removeFromCart(${i})"> Delete </button>
                 </div> 
                 </div>
                  `
    }
        cartItems.innerHTML = xx
        totalPrice.innerHTML = `Total : ${total}  $`
}else{
    shoppingCart.style.display = 'none'
}
}

function removeFromCart(id){
   
        cart.splice(id, 1)
        saveCart()
        displayCart()  
}


clearCart.addEventListener('click', function(){
    
    if(confirm('Are you sure' )){
    cart.splice(0)
    saveCart()
    displayCart()
    }   
})

searchInput.addEventListener('input', function(){
 
    let x = searchInput.value.toLowerCase()
    let y = products.filter( function(e){ 
        return(
        e.name.toLowerCase().includes(x) || e.category.toLowerCase().includes(x))
    })
    console.log(y)
    displayProducts(y) 
    })


displayProducts()
displayCart()

function changeAmount(id, delta){
    let item = cart.find((i) => i.id === id )
        if(!item) return;
        item.amount += delta
        if(item.amount < 1){
            cart = cart.filter(i => i.id !== id)
        }
        saveCart()
        displayCart()

}