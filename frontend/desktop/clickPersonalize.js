let personalize = document.getElementById('personalize');

let clickOnPersonalize = () => {
    if(document.getElementById('change_wall_color_button')) document.getElementById('change_wall_color_button').remove();
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

    // Create product path div
    const personalize_text = document.createElement("div");
    personalize_text.id = "product_path";
    personalize_text.innerHTML = "You can personalize a frame by filling this form";
    main.appendChild(personalize_text);

    document.querySelectorAll('#product_path').forEach((path) => {
            path.remove();           
    });

    // Create section container
    const productsContainer = document.createElement("form");
    //productsContainer.action = '/submit';
    //productsContainer.method = 'post';
    productsContainer.setAttribute("onsubmit", "return false;");
    productsContainer.id = "products_container";
    productsContainer.style.display = 'flex';

    productsContainer.style.gap = '0px';

    // Create personalizing form

    // The image holder
    const image_holder = document.createElement("section");
    //image_holder.action = '/submit';
    //image_holder.method = 'post';
    image_holder.id = "image_holder";
    
    //Just to fill a gap
    const fill_gap = document.createElement('section');
    fill_gap.className = 'fill_gap';
    image_holder.appendChild(fill_gap);

    const enter_image = document.createElement('section');
    enter_image.className = 'enter_image';
    image_holder.appendChild(enter_image);
    const entered_image = document.createElement('section');
    entered_image.className = 'entered_image';
    image_holder.appendChild(entered_image);
    const submit_image = document.createElement('section');
    submit_image.className = 'submit_image';
    image_holder.appendChild(submit_image);

    const image_input = document.createElement('input');
    image_input.type = 'file';
    image_input.name = 'image_input';
    image_input.accept = 'image/*';
    image_input.id = 'image_input';
    image_input.required = true;
    const image_input_label = document.createElement('label');
    image_input_label.htmlFor = 'image_input';
    image_input_label.innerHTML = 'Choose a image';
    enter_image.appendChild(image_input_label);
    enter_image.appendChild(image_input);
    const image_to_appear = document.createElement('img');
    image_to_appear.className = 'image_to_appear';
    entered_image.appendChild(image_to_appear);

    image_input.addEventListener('change', () => {
        const file = image_input.files[0]; // Get the first selected file
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            image_to_appear.src = e.target.result; // Show image preview
          }
          reader.readAsDataURL(file); // Read the file as a data URL
        }
      });


    // The form
    const form_container = document.createElement("section");
    //form_container.action = '/submit';
    //form_container.method = 'post';
    form_container.id = "form_container";
    form_container.style.display = 'flex';

    // Create the form in the right
    const right_form = document.createElement("section");
    right_form.id = 'right_form';

    const first_name = document.createElement('section');
    first_name.className = 'first_name';
    const first_name_label = document.createElement('label');
    first_name_label.classList = 'input_label';
    first_name_label.for = 'first_name_input';
    first_name_label.innerHTML = 'First name:';
    const first_name_input = document.createElement('input');
    first_name_input.type = 'text';
    first_name_input.required = true;
    first_name_input.className = 'first_name_input';
    first_name_input.name = 'first_name';
    first_name.appendChild(first_name_label);
    first_name.appendChild(first_name_input);
    right_form.appendChild(first_name);

    const email = document.createElement('section');
    email.className = 'email';
    const email_label = document.createElement('label');
    email_label.classList = 'input_label';
    email_label.for = 'email_input';
    email_label.innerHTML = 'E-mail:';
    const email_input = document.createElement('input');
    email_input.type = 'email';
    email_input.required = true;
    email_input.className = 'email_input';
    email_input.name = 'email';
    email.appendChild(email_label);
    email.appendChild(email_input);
    right_form.appendChild(email);

    const address = document.createElement('section');
    address.className = 'address';
    const address_label = document.createElement('label');
    address_label.classList = 'input_label';
    address_label.for = 'address_input';
    address_label.innerHTML = 'Address:';
    const address_input = document.createElement('input');
    address_input.type = 'text';
    address_input.required = true;
    address_input.className = 'address_input';
    address_input.name = 'address';
    address.appendChild(address_label);
    address.appendChild(address_input);
    right_form.appendChild(address);


    // Create the form in the left
    const left_form= document.createElement("section");
    left_form.id = 'left_form';

    const last_name = document.createElement('section');
    last_name.className = 'last_name';
    const last_name_label = document.createElement('label');
    last_name_label.classList = 'input_label';
    last_name_label.for = 'last_name_input';
    last_name_label.innerHTML = 'Last name:';
    const last_name_input = document.createElement('input');
    last_name_input.type = 'text';
    last_name_input.required = true;
    last_name_input.className = 'last_name_input';
    last_name_input.name = 'last_name';
    last_name.appendChild(last_name_label);
    last_name.appendChild(last_name_input);
    left_form.appendChild(last_name);

    const phone = document.createElement('section');
    phone.className = 'phone';
    const phone_label = document.createElement('label');
    phone_label.classList = 'input_label';
    phone_label.for = 'phone_input';
    phone_label.innerHTML = 'Phone Num:';
    const phone_input = document.createElement('input');
    phone_input.type = 'tel';
    phone_input.setAttribute('pattern', '\\d+');
    phone_input.required = true;
    phone_input.className = 'phone_input';
    phone_input.name = 'phone';
    phone.appendChild(phone_label);
    phone.appendChild(phone_input);
    left_form.appendChild(phone);

    const quantity = document.createElement('section');
    quantity.className = 'quantity';
    const quantity_label = document.createElement('label');
    quantity_label.classList = 'input_label';
    quantity_label.for = 'quantity_input';
    quantity_label.innerHTML = 'Quantity:';
    const quantity_input = document.createElement('input');
    quantity_input.type = 'number';
    quantity_input.min = '1';
    quantity_input.max = '200';
    quantity_input.step = '1';
    quantity_input.required = true;
    quantity_input.className = 'quantity_input';
    quantity_input.name = 'quantity';
    quantity.appendChild(quantity_label);
    quantity.appendChild(quantity_input);
    left_form.appendChild(quantity);

    const submit_personalize = document.createElement('section');
    submit_personalize.id = 'submit_personalize';
    const submit_personalize_button = document.createElement('input');
    submit_personalize_button.className = 'submit_personalize_button';
    submit_personalize_button.type = 'submit';
    submit_personalize_button.innerHTML = 'Submit';
    submit_personalize.appendChild(submit_personalize_button);
    left_form.appendChild(submit_personalize);

    submit_personalize_button.addEventListener('click', clickOnSubmitPersonalize);

    // Start appending
    form_container.appendChild(right_form);
    form_container.appendChild(left_form);

    productsContainer.appendChild(image_holder);
    productsContainer.appendChild(form_container);


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

personalize.addEventListener('click', clickOnPersonalize);
