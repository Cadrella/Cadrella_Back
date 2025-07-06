let clickOnCart = () => {

    whichCatalog = "cart";
    
    if(styleOfWall) styleOfWall.remove();

    document.getElementById('catalogues_text').setAttribute("data-products_or_catalogues", "catalogues");

    if(document.getElementById('all_content')) document.getElementById('all_content').remove();

    // Create main container
    const main = document.createElement("main");
    main.id = "all_content";

    // Create header
    const header = document.createElement("header");
    header.id = "choose_catalogue";
    main.appendChild(header);

    document.querySelectorAll('#product_path').forEach((path) => {
        //if(path.innerHTML == "You can personalize a frmae by filling this form") {
            path.remove();
        //}
    });

    // Create product path div
    const productPath = document.createElement("div");
    productPath.id = "product_path";
    productPath.innerHTML = "Art > Van Gogh";
    main.appendChild(productPath);

    // Create section container
    const productsContainer = document.createElement("section");
    productsContainer.id = "products_container";

    const first_row = document.createElement('section');
    first_row.id = 'first_row';
    const second_row = document.createElement('section');
    second_row.id = 'second_row';
    const third_row = document.createElement('section');
    third_row.id = 'third_row';
    /*const fourth_row = document.createElement('section');
    fourth_row.id = 'fourth_row';*/

    productsContainer.appendChild(first_row);
    productsContainer.appendChild(second_row);
    productsContainer.appendChild(third_row);
    //productsContainer.appendChild(fourth_row);

    function addProduct(product, index) {
        /*let itBelongs = false;

        let index;
        cartProducts.forEach((cartProduct) => {
            if(product.product_id == cartProduct.id) {
                itBelongs = true;
                index = cartProduct.index;
            }
        })

        if(!itBelongs) return;*/

        console.log(index);
        console.log(i);

        const img = document.createElement("img");
        img.className = "product_img";
        img.src = product.product_image;

        console.log(product.product_image);

        if(index == i) {
            console.log('Piw!');
            first_row.appendChild(img);
            img.setAttribute('data-column', '1');
        }
        else if(index == i+1) {
            console.log('Piw!');
            second_row.appendChild(img);
            img.setAttribute('data-column', '2');
        }
        else if(index == i+2) {
            console.log('Piw!');
            third_row.appendChild(img);
            img.setAttribute('data-column', '3');
        }
        /*else if(index == i+3) {
            console.log('Piw!');
            fourth_row.appendChild(img);
            img.setAttribute('data-column', '4');
        }*/

        img.setAttribute('data-product-id', product.product_id);

        let floatingDiv;

        img.addEventListener('mouseenter', () => {
            floatingDiv = document.createElement('div');
            floatingDiv.className = 'floating_div';

            // Show name, price and add to cart button
            const name = document.createElement("b");
            name.innerHTML= product.product_name;
            name.className = "product_name";
            floatingDiv.appendChild(name);
            //RX3YeK3v //Imad yeh!

            const price = document.createElement("p");
            price.innerHTML = product.product_price + ' DA';
            price.className = "product_price";
            floatingDiv.appendChild(price);

            const removeFromCart = document.createElement("button");
            removeFromCart.innerHTML = `Remove from cart`;
            removeFromCart.className = "add_to_cart_button";
            document.body.appendChild(removeFromCart);

            document.body.appendChild(floatingDiv); // Append to body so it can float
        });
    
        img.addEventListener('mousemove', (e) => {
            if (floatingDiv) {
                floatingDiv.style.position = 'absolute';
                floatingDiv.style.left = e.pageX + 10 + 'px';
                floatingDiv.style.top = e.pageY + 10 + 'px';
                floatingDiv.style.pointerEvents = 'none'; // optional
            }
        });
    
        img.addEventListener('mouseleave', () => {
            if (floatingDiv) {
                floatingDiv.remove();
                floatingDiv = null;
            }
        });



        ////////////////////////////////////////////////////////////////////////////////////
        img.addEventListener('mouseenter', function(e) {
            // Check if the tooltip already exists
            if (document.getElementById('hoverBox')) return;

            const img = e.target;
            const rect = img.getBoundingClientRect();

            const removeFromCart = document.createElement('button');
            
            removeFromCart.id = 'add_to_cart_button';
            removeFromCart.textContent = 'Remove from cart';
            removeFromCart.style.left = (rect.left) + 'px';
            removeFromCart.style.top = (rect.top - 30) + 'px';

            document.body.appendChild(removeFromCart);

            let isMouseOverBox = false;

            removeFromCart.addEventListener('mouseenter', () => isMouseOverBox = true);
            removeFromCart.addEventListener('mouseleave', () => isMouseOverBox = false);
            
            // Function to check if mouse is 100px above the image
            function checkMouseLeave(e) {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
        
                // Check against the image bounds
                const imageLeft = rect.left;
                const imageRight = rect.right;
                const imageTop = rect.top;
                const imageBottom = rect.bottom;
        
                const isAbove = mouseY < imageTop - 45;
                const isBelow = mouseY > imageBottom;
                const isLeft = mouseX < imageLeft;
                const isRight = mouseX > imageRight;
        
                // If mouse is outside image by any side (with special 100px for top), and not on box
                if ((isAbove || isBelow || isLeft || isRight) && !isMouseOverBox) {
                    removeFromCart.remove();
                    document.removeEventListener('mousemove', checkMouseLeave);
                }
            }

            // Add event listener for mouse movement
            document.addEventListener('mousemove', checkMouseLeave);

            removeFromCart.addEventListener('click', () => {
                console.log('Im clicked!');

                console.log(cartProducts);
                
                let i = 0;
                let j;
                let isFound = false;
                cartProducts.forEach((cartProduct) => {
                    if(isFound){
                        cartProducts[i].index -= 1;
                    }
                    if(product.product_id == cartProduct.id){
                        cartProducts.splice(i, 1);
                        isFound = true;
                        //i--;
                        j = i;
                    }
                    i++;
                })

                console.log(cartProducts);

                //Modify the item tha was just after the deleted item, because the forEach() skipped it!
                if(cartProducts[j]) cartProducts[j].index -= 1;

                localStorage.setItem('cart_products', JSON.stringify(cartProducts));

                //Update cart number
                cartNumber.innerHTML = `${cartProducts.length}`;

                //clickOnCart(); not this, but this...
                document.getElementById('settings').click();
            })
        });
    };

    let i=0;
    const cartProducts = JSON.parse(localStorage.getItem('cart_products'));
    if(!cartProducts) return;
    for (i; i < cartProducts.length; i+=/*4*/3) {
        if(cartProducts[i]){
            let id = cartProducts[i].id;
            let number;
            products_data.forEach((product) => {
                if(product.product_id == id) {
                    number = product.product_number - 1;
                }
            })
            console.log(products_data[number].product_image);
            addProduct(products_data[number], cartProducts[i].index);
        }
        if(cartProducts[i+1]){
            let id = cartProducts[i+1].id;
            let number;
            products_data.forEach((product) => {
                if(product.product_id == id) {
                    number = product.product_number  - 1;
                }
            })
            addProduct(products_data[number], cartProducts[i+1].index);
        }
        if(cartProducts[i+2]){
            let id = cartProducts[i+2].id;
            let number;
            products_data.forEach((product) => {
                if(product.product_id == id) {
                    number = product.product_number  - 1;
                }
            })
            addProduct(products_data[number], cartProducts[i+2].index);
        }
        if(cartProducts[i+3]){
            let id = cartProducts[i+3].id;
            let number;
            products_data.forEach((product) => {
                if(product.product_id == id) {
                    number = product.product_number  - 1;
                }
            })
            addProduct(products_data[number], cartProducts[i+3].index);
        }
    }

    // Append the section to main
    main.appendChild(productsContainer);

    // Append everything to the body
    document.body.appendChild(main);
    main.style.top = '107.5px';

    if(document.querySelector('.arrow_left').classList[1] == 'show_left_arrow')
        document.querySelector('.arrow_left').classList.remove('show_left_arrow');

        void document.querySelector('.arrow_left').offsetWidth;

    document.querySelector('.arrow_left').classList.add('hide_left_arrow');


    if(document.querySelector('.arrow_right').classList[1] == 'show_right_arrow')
        document.querySelector('.arrow_right').classList.remove('show_right_arrow');

        void document.querySelector('.arrow_right').offsetWidth;

    document.querySelector('.arrow_right').classList.add('hide_right_arrow');


    if(document.querySelector('.Frame_Image_Left').classList[1] == 'show_left')
        document.querySelector('.Frame_Image_Left').classList.remove('show_left');

        void document.querySelector('.Frame_Image_Left').offsetWidth;

    document.querySelector('.Frame_Image_Left').classList.add('hide_left');


    if(document.querySelector('.Frame_Image').classList[1] == 'show')
        document.querySelector('.Frame_Image').classList.remove('show');

        void document.querySelector('.Frame_Image').offsetWidth;

    document.querySelector('.Frame_Image').classList.add('hide');


    if(document.querySelector('.Frame_Image_Right').classList[1] == 'show_right')
        document.querySelector('.Frame_Image_Right').classList.remove('show_right');

        void document.querySelector('.Frame_Image_Right').offsetWidth;

    document.querySelector('.Frame_Image_Right').classList.add('hide_right');


    if(document.querySelector('#welcome_text').classList[0] == 'show_welcome')
        document.querySelector('#welcome_text').classList.remove('show_welcome');

        void document.querySelector('#welcome_text').offsetWidth;

    document.querySelector('#welcome_text').classList.add('hide_welcome');



    if(document.querySelector('#cadrella_text').classList[0] == 'show_cadrella')
        document.querySelector('#cadrella_text').classList.remove('show_cadrella');

        void document.querySelector('#cadrella_text').offsetWidth;

    document.querySelector('#cadrella_text').classList.add('hide_cadrella');



    if(document.querySelector('#catalogues_text').classList[0] == 'show_catalogues_text')
        document.querySelector('#catalogues_text').classList.remove('show_catalogues_text');

        void document.querySelector('#catalogues_text').offsetWidth;

    document.querySelector('#catalogues_text').classList.add('hide_catalogues_text');



    /*if(document.querySelector('#product_path').classList[0] == 'hide_product_path')
        document.querySelector('#product_path').classList.remove('hide_product_path');

        void document.querySelector('#product_path').offsetWidth;

    document.querySelector('#product_path').classList.add('show_product_path');*/

    document.querySelectorAll('.card').forEach((element) => {
        if(element.classList[0] == 'hide_card')
            element.classList.remove('hide_card');

            void element.offsetWidth;

        element.classList.add('show_card');
    });


    document.querySelectorAll('.product_name').forEach((element) => {
        if(element.classList[0] == 'hide_product_name')
        element.classList.remove('hide_product_name');

        void element.offsetWidth;

        element.classList.add('show_product_name');
    });


    document.querySelectorAll('.product_price').forEach((element) => {
        if(element.classList[0] == 'hide_product_price')
        element.classList.remove('hide_product_price');

        void element.offsetWidth;

        element.classList.add('show_product_price');
    });



    /*document.querySelectorAll('.product_img').forEach((element) => {
        if(element.classList[0] == 'hide_product_image')
        element.classList.remove('hide_product_image');

        void element.offsetWidth;

        element.classList.add('show_product_image');
    });*/



    document.getElementById('left_arrow').style.position = 'relative';
    document.getElementById('right_arrow').style.position = 'relative';
    document.querySelector('.arrow_left').style.position = 'absolute';
    document.querySelector('.arrow_right').style.position = 'absolute';
    document.getElementById('catalogues_text').style.position = 'absolute';
    document.getElementById('catalogues_text').style.zIndex = '3';
    document.getElementById('catalogues_text').innerHTML = 'See our product';


    setTimeout(() => {
        const style = document.createElement('style');
        style.textContent = `
            #products_container::-webkit-scrollbar {
                width: 8px;
                height: 8px;
            }

            #products_container::-webkit-scrollbar-track {
                background: transparent;
            }

            #products_container::-webkit-scrollbar-thumb {
                background: #4B4D4A; /* black thumb */
                border-radius: 4px;
            }
        `;
        document.head.appendChild(style);
    }, 1250);



    document.querySelectorAll('.product_img').forEach((card, index) => {
        let currentIndex = index;
        card.addEventListener('click', () => {
            clickOnCartProduct(card, currentIndex, index, card.getAttribute('data-column'));
        });
    });

    catalogues.removeEventListener('click', clickOnChooseCatalogs);
catalogues.addEventListener('click', clickOnSeeOurProducts);
}

document.getElementById('settings').addEventListener('click', clickOnCart);