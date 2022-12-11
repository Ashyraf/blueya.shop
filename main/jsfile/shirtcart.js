let carts = document.querySelectorAll('.add-cart');
let products = [
{
    name : 'Korean Shirt',
    tag: 'shirt1',
    price :29.90,
    inCart :0
},

{
    name : 'white Stussy Shirt',
    tag: 'stussyshirt',
    price :39.90,
    inCart :0
},
{
    name : 'Centered Champion shirt',
    tag: 'champshirt',
    price :34.90,
    inCart :0
},
{
    name : 'Trasher Shirt',
    tag: 'thrashershirt',
    price :89.90,
    inCart :0
},

];



for (let i=0;  i< carts.length; i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
    
}



function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}




function cartNumbers(products){
   

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers=parseInt(productNumbers);
    
    if(productNumbers){

    localStorage.setItem('cartNumbers',productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(products);
}




function setItems(product){
 let cartItems=localStorage.getItem('productsInCart');
 cartItems=JSON.parse(cartItems)

if(cartItems != null){

        if(cartItems[product.tag]== undefined){
            cartItems={
                ...cartItems,
                [product.tag]: product
            }
        }
        
    cartItems[product.tag].inCart += 1;
} else{
    product.inCart=1;
    cartItems = {
        [product.tag] : product
    }
}

 
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
;}

function totalCost (product) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost );
    if(cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost +
    product.price);
    } else {
    localStorage.setItem("totalCost", product.price);
    }

}

function displaycart(){

        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        
        let productContainer = document.querySelector
         (".products");
         let cartCost = localStorage.getItem('totalCost');

            console.log(cartItems);



    

        if(cartItems && productContainer){
            productContainer.innerHTML='';
                Object.values(cartItems).map(item => {

                        productContainer.innerHTML += `

                        <div class="product">
                            <i class="fa fa-times-circle-o"></i>
                            <image src="pic/${item.tag}.jpg" style="width:50%">
                            <span>${item.name}</span>
                        </div>

                        <div class="price"> RM${item.price}</div>

                        <div class="quantity"> <i class="fa fa-arrow-circle-left"></i>
                        <span> ${item.inCart} </span>
                       <i class=" fa fa-arrow-circle-right"></i>
                        </div>
                        
                        <div class ="total">RM${item.inCart * item.price}</div>
                        `
                       
                });

                productContainer.innerHTML += `
                <div class ="basketTotalContainer">
                <h4 class = "basketTotalContainer">
                Overall Total </h4>
                <h4 class = "basketTotalContainer">
                ${cartCost} </h4>
                </div>
                
                `
        }
}



onLoadCartNumbers();
displaycart();

