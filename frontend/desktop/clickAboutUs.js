let aboutUs = document.getElementById('about_us');

let clickOnAboutUs = () => {
    if(styleOfWall) styleOfWall.remove();

    document.getElementById('catalogues_text').setAttribute("data-products_or_catalogues", "products");

    if(document.getElementById('all_content')) document.getElementById('all_content').remove();
    if(document.getElementById('field_and_catalogs')) document.getElementById('field_and_catalogs').remove();

    // Create main container
    const main = document.createElement("main");
    main.id = "all_content";

    // Create header
    const header = document.createElement("header");
    header.id = "choose_catalogue";
    main.appendChild(header);

    document.querySelectorAll('#product_path').forEach((path) => {
            if(path.innerHTML == "You can personalize a frmae by filling this form") {
                path.remove();
            }
    });

    // Create product path div
    const aboutUs_text = document.createElement("div");
    aboutUs_text.id = "product_path";
    aboutUs_text.innerHTML = "";
    main.appendChild(aboutUs_text);

    // Create section container
    const productsContainer = document.createElement("section");
    productsContainer.id = "products_container";

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



    if(document.querySelector('#product_path').classList[0] == 'show_product_path')
        document.querySelector('#product_path').classList.remove('show_product_path');

        void document.querySelector('#product_path').offsetWidth;

    document.querySelector('#product_path').classList.add('hide_product_path');

    document.querySelectorAll('.card').forEach((element) => {
        if(element.classList[0] == 'hide_card')
            element.classList.remove('hide_card');

            void element.offsetWidth;

        element.classList.add('show_card');
    });


    document.querySelectorAll('.product_name').forEach((element) => {
        if(element.classList[0] == 'show_product_name')
        element.classList.remove('show_product_name');

        void element.offsetWidth;

        element.classList.add('hide_product_name');
    });


    document.querySelectorAll('.product_price').forEach((element) => {
        if(element.classList[0] == 'show_product_price')
        element.classList.remove('show_product_price');

        void element.offsetWidth;

        element.classList.add('hide_product_price');
    });



    document.querySelectorAll('.product_image').forEach((element) => {
        if(element.classList[0] == 'show_product_image')
        element.classList.remove('show_product_image');

        void element.offsetWidth;

        element.classList.add('hide_product_image');
    });

    document.getElementById('left_arrow').style.position = 'relative';
    document.getElementById('right_arrow').style.position = 'relative';
    document.querySelector('.arrow_left').style.position = 'absolute';
    document.querySelector('.arrow_right').style.position = 'absolute';
    document.getElementById('catalogues_text').style.position = 'absolute';
    document.getElementById('catalogues_text').style.zIndex = '3';
    document.getElementById('catalogues_text').innerHTML = 'See our products';

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
                background: transparent; /* black thumb */
                border-radius: 4px;
            }
        `;
        document.head.appendChild(style);
    }, 0);
}

aboutUs.addEventListener('click', clickOnAboutUs);