//const { json } = require("body-parser");

let description_content = 'A sturdy wooden wall frame, minimalist in design, stretches across the living room wall—crafted from dark walnut with subtle grain textures that echo nature’s calm. Its corners are smoothly rounded, evoking a modern yet timeless feel. The frame surrounds a large canvas, centered perfectly at eye level, and softly illuminated by a pair of warm-toned LED sconces above. The contrast between the natural wood and the swirling blues of the canvas makes the art feel alive. Beneath the painting, a slim brass nameplate simply reads: Vincent van Gogh – 1889. The wall itself is painted a soft, matte stone gray, enhancing the dramatic blues and yellows within the artwork, making the entire frame seem like a portal into the dreamscape beyond.';

let catalogues = document.getElementById('catalogues');

let clickOnSeeOurProducts = () => {
    if(styleOfWall) styleOfWall.remove();
    
    whichCatalog = '';
//const { json } = require("body-parser");

let description_content = 'A sturdy wooden wall frame, minimalist in design, stretches across the living room wall—crafted from dark walnut with subtle grain textures that echo nature’s calm. Its corners are smoothly rounded, evoking a modern yet timeless feel. The frame surrounds a large canvas, centered perfectly at eye level, and softly illuminated by a pair of warm-toned LED sconces above. The contrast between the natural wood and the swirling blues of the canvas makes the art feel alive. Beneath the painting, a slim brass nameplate simply reads: Vincent van Gogh – 1889. The wall itself is painted a soft, matte stone gray, enhancing the dramatic blues and yellows within the artwork, making the entire frame seem like a portal into the dreamscape beyond.';

let catalogues = document.getElementById('catalogues');

let clickOnSeeOurProducts = () => {
    whichCatalog = '';

    if(document.getElementById('catalogues_text').getAttribute("data-products_or_catalogues") == "catalogues")
        return;
    
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
    const fourth_row = document.createElement('section');
    fourth_row.id = 'fourth_row';

    productsContainer.appendChild(first_row);
    productsContainer.appendChild(second_row);
    productsContainer.appendChild(third_row);
    productsContainer.appendChild(fourth_row);

    function addProduct(product, number) {
        const img = document.createElement("img");
        img.className = "product_img";
        img.src = product.product_image;

        if(number == i) {
            first_row.appendChild(img);
            img.setAttribute('data-column', '1');
        }
        else if(number == i+1) {
            second_row.appendChild(img);
            img.setAttribute('data-column', '2');
        }
        else if(number == i+2) {
            third_row.appendChild(img);
            img.setAttribute('data-column', '3');
        }
        else if(number == i+3) {
            fourth_row.appendChild(img);
            img.setAttribute('data-column', '4');
        }

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

            const addTocart = document.createElement("button");
            addTocart.innerHTML = `Add to cart`;
            addTocart.className = "add_to_cart_button";
            document.body.appendChild(addTocart);

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

            const addToCart = document.createElement('button');
            
            addToCart.id = 'add_to_cart_button';
            addToCart.textContent = 'Add to cart';
            addToCart.style.left = (rect.left) + 'px';
            addToCart.style.top = (rect.top - 30) + 'px';

            document.body.appendChild(addToCart);

            let isMouseOverBox = false;

            addToCart.addEventListener('mouseenter', () => isMouseOverBox = true);
            addToCart.addEventListener('mouseleave', () => isMouseOverBox = false);
            
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
                    addToCart.remove();
                    document.removeEventListener('mousemove', checkMouseLeave);
                }
            }

            // Add event listener for mouse movement
            document.addEventListener('mousemove', checkMouseLeave);

            addToCart.addEventListener('click', () => {
                console.log('Im clicked!');
                if(!localStorage.getItem('cart_products')) {
                    const emptyArray = [];
                    localStorage.setItem('cart_products', JSON.stringify(emptyArray));
                }

                let cartProducts = JSON.parse(localStorage.getItem('cart_products'));

                let isAlreadyHere = false;
                let lastIndex = 0;
                cartProducts.some((cartProduct) => {
                    if(cartProduct.id == product.product_id) {
                        isAlreadyHere = true;
                        //return true; we don't use this to get the last index
                    }
                    lastIndex++;
                })
                if(isAlreadyHere) return;

                let productToAdd = {
                    id: product.product_id,
                    index: lastIndex
                };

                cartProducts.push(productToAdd);

                localStorage.setItem('cart_products', JSON.stringify(cartProducts));

                //Update cart number
                cartNumber.innerHTML = `${cartProducts.length}`;
            })
        });
    };

    let i=0;
    for (i; i < products_data.length; i+=4) {
        if(products_data[i]){
            addProduct(products_data[i], products_data[i].product_number -1);
        }
        if(products_data[i+1]){
            addProduct(products_data[i+1], products_data[i+1].product_number -1);
        }
        if(products_data[i+2]){
            addProduct(products_data[i+2], products_data[i+2].product_number -1);
        }
        if(products_data[i+3]){
           addProduct(products_data[i+3], products_data[i+3].product_number -1);
        }
    }

    // Append the section to main
    main.appendChild(productsContainer);

    // Append everything to the body
    document.body.appendChild(main);

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



    if(document.querySelector('#product_path').classList[0] == 'hide_product_path')
        document.querySelector('#product_path').classList.remove('hide_product_path');

        void document.querySelector('#product_path').offsetWidth;

    document.querySelector('#product_path').classList.add('show_product_path');

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



    document.querySelectorAll('.product_img').forEach((element) => {
        if(element.classList[0] == 'hide_product_image')
        element.classList.remove('hide_product_image');

        void element.offsetWidth;

        element.classList.add('show_product_image');
    });



    document.getElementById('left_arrow').style.position = 'relative';
    document.getElementById('right_arrow').style.position = 'relative';
    document.querySelector('.arrow_left').style.position = 'absolute';
    document.querySelector('.arrow_right').style.position = 'absolute';
    document.getElementById('catalogues_text').style.position = 'absolute';
    document.getElementById('catalogues_text').style.zIndex = '3';
    document.getElementById('catalogues_text').innerHTML = 'Choose Catalogues';


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
            clickOnProduct(card, currentIndex, index, card.getAttribute('data-column'));
        });
    });
}

catalogues.addEventListener('click', clickOnSeeOurProducts);

    if(document.getElementById('catalogues_text').getAttribute("data-products_or_catalogues") == "catalogues")
        return;
    
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
    const fourth_row = document.createElement('section');
    fourth_row.id = 'fourth_row';

    productsContainer.appendChild(first_row);
    productsContainer.appendChild(second_row);
    productsContainer.appendChild(third_row);
    productsContainer.appendChild(fourth_row);

    function addProduct(product, number) {
        const img = document.createElement("img");
        img.className = "product_img";
        img.src = product.product_image;

        if(number == i) {
            first_row.appendChild(img);
            img.setAttribute('data-column', '1');
        }
        else if(number == i+1) {
            second_row.appendChild(img);
            img.setAttribute('data-column', '2');
        }
        else if(number == i+2) {
            third_row.appendChild(img);
            img.setAttribute('data-column', '3');
        }
        else if(number == i+3) {
            fourth_row.appendChild(img);
            img.setAttribute('data-column', '4');
        }

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

            const addTocart = document.createElement("button");
            addTocart.innerHTML = `Add to cart`;
            addTocart.className = "add_to_cart_button";
            document.body.appendChild(addTocart);

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

            const addToCart = document.createElement('button');
            
            addToCart.id = 'add_to_cart_button';
            addToCart.textContent = 'Add to cart';
            addToCart.style.left = (rect.left) + 'px';
            addToCart.style.top = (rect.top - 30) + 'px';

            document.body.appendChild(addToCart);

            let isMouseOverBox = false;

            addToCart.addEventListener('mouseenter', () => isMouseOverBox = true);
            addToCart.addEventListener('mouseleave', () => isMouseOverBox = false);
            
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
                    addToCart.remove();
                    document.removeEventListener('mousemove', checkMouseLeave);
                }
            }

            // Add event listener for mouse movement
            document.addEventListener('mousemove', checkMouseLeave);

            addToCart.addEventListener('click', () => {
                console.log('Im clicked!');
                if(!localStorage.getItem('cart_products')) {
                    const emptyArray = [];
                    localStorage.setItem('cart_products', JSON.stringify(emptyArray));
                }

                let cartProducts = JSON.parse(localStorage.getItem('cart_products'));

                let isAlreadyHere = false;
                let lastIndex = 0;
                cartProducts.some((cartProduct) => {
                    if(cartProduct.id == product.product_id) {
                        isAlreadyHere = true;
                        //return true; we don't use this to get the last index
                    }
                    lastIndex++;
                })
                if(isAlreadyHere) return;

                let productToAdd = {
                    id: product.product_id,
                    index: lastIndex
                };

                cartProducts.push(productToAdd);

                localStorage.setItem('cart_products', JSON.stringify(cartProducts));

                //Update cart number
                cartNumber.innerHTML = `${cartProducts.length}`;
            })
        });
    };

    let i=0;
    for (i; i < products_data.length; i+=4) {
        if(products_data[i]){
            addProduct(products_data[i], products_data[i].product_number -1);
        }
        if(products_data[i+1]){
            addProduct(products_data[i+1], products_data[i+1].product_number -1);
        }
        if(products_data[i+2]){
            addProduct(products_data[i+2], products_data[i+2].product_number -1);
        }
        if(products_data[i+3]){
            addProduct(products_data[i+3], products_data[i+3].product_number -1);
        }
    }

    // Append the section to main
    main.appendChild(productsContainer);

    // Append everything to the body
    document.body.appendChild(main);

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



    if(document.querySelector('#product_path').classList[0] == 'hide_product_path')
        document.querySelector('#product_path').classList.remove('hide_product_path');

        void document.querySelector('#product_path').offsetWidth;

    document.querySelector('#product_path').classList.add('show_product_path');

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



    document.querySelectorAll('.product_img').forEach((element) => {
        if(element.classList[0] == 'hide_product_image')
        element.classList.remove('hide_product_image');

        void element.offsetWidth;

        element.classList.add('show_product_image');
    });



    document.getElementById('left_arrow').style.position = 'relative';
    document.getElementById('right_arrow').style.position = 'relative';
    document.querySelector('.arrow_left').style.position = 'absolute';
    document.querySelector('.arrow_right').style.position = 'absolute';
    document.getElementById('catalogues_text').style.position = 'absolute';
    document.getElementById('catalogues_text').style.zIndex = '3';
    document.getElementById('catalogues_text').innerHTML = 'Choose Catalogues';


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
            if(document.querySelector('#add_to_cart_button')) document.querySelector('#add_to_cart_button').remove(); 
            clickOnProduct(card, currentIndex, index, card.getAttribute('data-column'));
        });
    });
}

catalogues.addEventListener('click', clickOnSeeOurProducts);