let cadrella = document.getElementById('logo');

    if(styleOfWall) styleOfWall.remove();

    cadrella.addEventListener('click', () => {

        document.getElementById('catalogues_text').setAttribute("data-products_or_catalogues", "products");


        if(document.querySelector('.arrow_left').classList[1] == 'hide_left_arrow')
            document.querySelector('.arrow_left').classList.remove('hide_left_arrow');

        void document.querySelector('.arrow_left').offsetWidth;

        document.querySelector('.arrow_left').classList.add('show_left_arrow');


        if(document.querySelector('.arrow_right').classList[1] == 'hide_right_arrow')
            document.querySelector('.arrow_right').classList.remove('hide_right_arrow');

        void document.querySelector('.arrow_right').offsetWidth;

        document.querySelector('.arrow_right').classList.add('show_right_arrow');


        if(document.querySelector('.Frame_Image_Left').classList[1] == 'hide_left')
            document.querySelector('.Frame_Image_Left').classList.remove('hide_left');

            void document.querySelector('.Frame_Image_Left').offsetWidth;

        document.querySelector('.Frame_Image_Left').classList.add('show_left');


        if(document.querySelector('.Frame_Image').classList[1] == 'hide')
            document.querySelector('.Frame_Image').classList.remove('hide');

            void document.querySelector('.Frame_Image').offsetWidth;

        document.querySelector('.Frame_Image').classList.add('show');


        if(document.querySelector('.Frame_Image_Right').classList[1] == 'hide_right')
            document.querySelector('.Frame_Image_Right').classList.remove('hide_right');

            void document.querySelector('.Frame_Image_Right').offsetWidth;

        document.querySelector('.Frame_Image_Right').classList.add('show_right');


        if(document.querySelector('#welcome_text').classList[0] == 'hide_welcome')
            document.querySelector('#welcome_text').classList.remove('hide_welcome');

            void document.querySelector('#welcome_text').offsetWidth;

        document.querySelector('#welcome_text').classList.add('show_welcome');



        if(document.querySelector('#cadrella_text').classList[0] == 'hide_cadrella')
            document.querySelector('#cadrella_text').classList.remove('hide_cadrella');

            void document.querySelector('#cadrella_text').offsetWidth;

        document.querySelector('#cadrella_text').classList.add('show_cadrella');


        if(document.querySelector('#catalogues_text').classList[0] == 'hide_catalogues_text')
            document.querySelector('#catalogues_text').classList.remove('hide_catalogues_text');

            void document.querySelector('#catalogues_text').offsetWidth;

        document.querySelector('#catalogues_text').classList.add('show_catalogues_text');



        if(document.querySelector('#product_path').classList.length > 0 && document.querySelector('#product_path').classList[0] == 'show_product_path')
            document.querySelector('#product_path').classList.remove('show_product_path');

            void document.querySelector('#product_path').offsetWidth;

        document.querySelector('#product_path').classList.add('hide_product_path');

        if(document.querySelectorAll('.card').length == 1) {
            if(document.querySelector('.card').classList[1] == 'show_card')
                document.querySelector('.card').classList.remove('show_card');
    
                void document.querySelector('.card').offsetWidth;
    
                document.querySelector('.card').className = 'hide_card';
        } else {
            document.querySelectorAll('.card').forEach((element) => {
                if(element.classList[1] == 'show_card')
                    element.classList.remove('show_card');
        
                    void element.offsetWidth;
        
                element.classList.add('hide_card');
            });
        }

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

        setTimeout(() => {
            if(document.getElementById('all_content')) document.getElementById('all_content').remove();
        }, 0)

        setTimeout(() => {
            document.querySelectorAll('#product_path').forEach((path) => {
                //if(path.innerHTML == "You can personalize a frmae by filling this form") {
                    path.remove();
                //}
            });
        }, 0); //It should be inside a setTimeout(), even if 0ms!

    });