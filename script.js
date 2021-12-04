let menuIco = document.getElementById("menu-ico");
let menu = document.getElementById("menu");
let menuBg = document.getElementById("menu-bg");
let menuContainer = document.getElementById("menu-container");
let close = document.getElementById("close");
let close2 = document.getElementById("close2");
let cartIco = document.getElementById("cart-ico");
let cart = document.getElementById("cart");
let galery = document.getElementById("galery");
let selectedThumb2 = document.getElementById("selected-thumb2");
let selectedThumb = document.getElementById("selected-thumb");
let thumb1 = document.getElementById("thumb1");
let thumb2 = document.getElementById("thumb2");
let thumb3 = document.getElementById("thumb3");
let thumb4 = document.getElementById("thumb4");
let thumbs = [thumb1, thumb2, thumb3, thumb4];
let thumb12 = document.getElementById("thumb12");
let thumb22 = document.getElementById("thumb22");
let thumb32 = document.getElementById("thumb32");
let thumb42 = document.getElementById("thumb42");
let thumbs2 = [thumb12, thumb22, thumb32, thumb42];
let topGalery = document.getElementById("galery-top");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let amount = document.getElementById("amount");
let next2 = document.getElementById("next2");
let previous2 = document.getElementById("previous2");
let addToCart = document.getElementById("add-to-cart");
let notif = document.getElementById("notif");
let empty = document.getElementById("empty");
let added = document.getElementById("added");

menuIco.onclick = () => {
    menu.classList.remove("hidden");
}
cartIco.onclick = () => {
    cart.classList.toggle("hidden");
}
addEventListener("click", e => {
    if (e.target == close) {
        menu.classList.add("hidden");
    }
    if (e.target == menuBg) {
        menu.classList.add("hidden");
    }
    if (!cart.contains(e.target) && !cartIco.contains(e.target)) {
        cart.classList.add("hidden");
    }
    if (e.target == close2) {
        galery.classList.add("hidden");
    }
    if(e.target.classList.contains("delete") ){
        notif.innerHTML = Number(notif.innerHTML) - Number(e.target.previousElementSibling.children[1].children[0].innerHTML);
        if (notif.innerHTML == 0){
            notif.innerHTML = '';
        }  
        e.target.parentElement.parentElement.remove();
        if (added.children.length == 0){
            empty.classList.remove("hidden");
        }
    }
})
next.onclick = () => {
    for (let index = 0; index < 4; index++) {
        if (!topGalery.children[index].classList.contains("hidden")) {
            topGalery.children[index].classList.add("hidden");
            if (index === 3) {
                topGalery.children[0].classList.remove("hidden");
            }
            else {
                topGalery.children[index + 1].classList.remove("hidden");
            }
            break;
        }

    }
}
previous.onclick = () => {
    for (let index = 0; index < 4; index++) {
        if (!topGalery.children[index].classList.contains("hidden")) {
            topGalery.children[index].classList.add("hidden");
            if (index === 0) {
                topGalery.children[3].classList.remove("hidden");
            }
            else {
                topGalery.children[index - 1].classList.remove("hidden");
            }
            break;
        }

    }
}
plus.onclick = () => {
    amount.innerHTML = Number(amount.innerHTML) + 1;
}
minus.onclick = () => {

    if (Number(amount.innerHTML) > 0) {
        amount.innerHTML = Number(amount.innerHTML) - 1;
    }
}
thumb1.onclick = () => {
    selectedThumb.setAttribute("src", "images/image-product-1.jpg");
    selectedThumb2.setAttribute("src", "images/image-product-1.jpg");;
    thumbs.forEach(element => {
        element.classList.remove("opacity-40");
    })
    thumbs2.forEach(element => {
        element.classList.remove("brightness-75");
    })
    thumb1.classList.add("opacity-40");
    thumb12.classList.add("brightness-75");
}
thumb2.onclick = () => {
    selectedThumb.setAttribute("src", "images/image-product-2.jpg");
    selectedThumb2.setAttribute("src", "images/image-product-2.jpg");;
    thumbs.forEach(element => {
        element.classList.remove("opacity-40");
    })
    thumbs2.forEach(element => {
        element.classList.remove("brightness-75");
    })
    thumb2.classList.add("opacity-40");
    thumb22.classList.add("brightness-75");
}
thumb3.onclick = () => {
    selectedThumb.setAttribute("src", "images/image-product-3.jpg");
    selectedThumb2.setAttribute("src", "images/image-product-3.jpg");;
    thumbs.forEach(element => {
        element.classList.remove("opacity-40");
    })
    thumbs2.forEach(element => {
        element.classList.remove("brightness-75");
    })
    thumb3.classList.add("opacity-40");
    thumb32.classList.add("brightness-75");
}
thumb4.onclick = () => {
    selectedThumb.setAttribute("src", "images/image-product-4.jpg");
    selectedThumb2.setAttribute("src", "images/image-product-4.jpg");;
    thumbs.forEach(element => {
        element.classList.remove("opacity-40");
    })
    thumbs2.forEach(element => {
        element.classList.remove("brightness-75");
    })
    thumb4.classList.add("opacity-40");
    thumb42.classList.add("brightness-75");
}
thumb12.onclick = () => {
    selectedThumb.setAttribute("src", "images/image-product-1.jpg");
    selectedThumb2.setAttribute("src", "images/image-product-1.jpg");;
    thumbs.forEach(element => {
        element.classList.remove("opacity-40");
    })
    thumbs2.forEach(element => {
        element.classList.remove("brightness-75");
    })
    thumb1.classList.add("opacity-40");
    thumb12.classList.add("brightness-75");
}
thumb22.onclick = () => {
    selectedThumb.setAttribute("src", "images/image-product-2.jpg");
    selectedThumb2.setAttribute("src", "images/image-product-2.jpg");;
    thumbs.forEach(element => {
        element.classList.remove("opacity-40");
    })
    thumbs2.forEach(element => {
        element.classList.remove("brightness-75");
    })
    thumb2.classList.add("opacity-40");
    thumb22.classList.add("brightness-75");
}
thumb32.onclick = () => {
    selectedThumb.setAttribute("src", "images/image-product-3.jpg");
    selectedThumb2.setAttribute("src", "images/image-product-3.jpg");;
    thumbs.forEach(element => {
        element.classList.remove("opacity-40");
    })
    thumbs2.forEach(element => {
        element.classList.remove("brightness-75");
    })
    thumb3.classList.add("opacity-40");
    thumb32.classList.add("brightness-75");
}
thumb42.onclick = () => {
    selectedThumb.setAttribute("src", "images/image-product-4.jpg");
    selectedThumb2.setAttribute("src", "images/image-product-4.jpg");;
    thumbs.forEach(element => {
        element.classList.remove("opacity-40");
    })
    thumbs2.forEach(element => {
        element.classList.remove("brightness-75");
    })
    thumb4.classList.add("opacity-40");
    thumb42.classList.add("brightness-75");
}
selectedThumb.onclick = () => {
    galery.classList.remove("hidden");
}
previous2.onclick = () => {
    for (let index = 0; index < 4; index++) {
        if (thumbs2[index].classList.contains("brightness-75")) {
            thumbs2[index].classList.remove("brightness-75");
            if (index == 0) {
                thumbs2[3].click();
            }
            else {
                thumbs2[index - 1].click();
            }
            break;
        }
    }
}
next2.onclick = () => {
    for (let index = 0; index < 4; index++) {
        if (thumbs2[index].classList.contains("brightness-75")) {
            thumbs2[index].classList.remove("brightness-75");
            if (index == 3) {
                thumbs2[0].click();
            }
            else {
                thumbs2[index + 1].click();
            }
            break;
        }
    }
}
addToCart.onclick = () => {
    if (amount.innerHTML > 0) {
        notif.innerHTML = Number(notif.innerHTML) + Number(amount.innerHTML);
        empty.classList.add("hidden");
        added.innerHTML += `
        <div class="px-3 flex-col">
            <div class="flex items-center justify-between mt-4">
                <img src="images/image-product-1-thumbnail.jpg" alt="product" class="w-10 rounded-md">
                <div class="text-sm">
                    <p class="text-gray-500">Fall Limited Edition Sneakers</p>
                    <p class="text-gray-500">$125.00x <span>${amount.innerHTML}</span><span class="text-gray-900 font-bold">
                        ${"$" + amount.innerHTML * 125 + ".00"}</span></p>
                </div>
                <img src="images/icon-delete.svg" alt="delete"
                class="delete cursor-pointer filter hover:brightness-0 transition duration-300">
           </div>
        <button
            class="py-3 w-full font-bold bg-yellow-500 rounded-md mt-5 text-white  hover:bg-yellow-400 transition duration-200">Checkout</button>
        </div>
        `
        
    }
    amount.innerHTML = 0;
}