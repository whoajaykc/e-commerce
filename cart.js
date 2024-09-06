const product = [
    {
        id: 0,
        image: 'img/p1.jpg',
        title: 'Roronoa Zoro | One Piece',
        price: 399,
    },
    {
        id: 1,
        image: 'img/p2.jpg',
        title: 'Eren Jeager | Attack Titan',
        price: 349,
    },
    {
        id: 2,
        image: 'img/p3.jpg',
        title: 'Naruto Uzumaki | Naruto',
        price: 299,
    },
    {
        id: 3,
        image: 'img/p4.jpg',
        title: 'Customised Anime',
        price: 399,
    },
    {
        id: 4,
        image: 'img/p5.jpg',
        title: 'Monkey Luffy | One Piece',
        price: 349,
    },
    {
        id: 5,
        image: 'img/p6.jpg',
        title: 'Itachi Uchiha | Naruto',
        price: 349,
    },
    {
        id: 6,
        image: 'img/p7.jpg',
        title: 'Itachi Uchiha 2 | Naruto',
        price: 349,
    },
    {
        id: 7,
        image: 'img/p8.jpg',
        title: 'Levi | Attack on titan',
        price: 399,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>&#8377 ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "&#8377 "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "&#8377 "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>&#8377 ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
