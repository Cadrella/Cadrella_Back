let order_function = (product) => {
    if(document.getElementById('change_wall_color_button')) document.getElementById('change_wall_color_button').remove();
    if(document.getElementById('mockup_frame')) document.getElementById('mockup_frame').remove();

    if(styleOfWall) styleOfWall.remove();

    let product_description = document.getElementById('product_description');
    if (document.getElementById('description_text')) document.getElementById('description_text').remove();
    if (document.querySelector('.mockup_bg')) document.querySelector('.mockup_bg').remove();
    if (document.getElementById('form_container_order')) document.getElementById('form_container_order').remove();
    

    // The form
    const form_container = document.createElement("form");
    //form_container.action = '/submit';
    //form_container.method = 'post';
    form_container.setAttribute("onsubmit", "return false;");
    form_container.id = "form_container_order";
    form_container.style.display = 'flex';

    // Create the form in the rightw
    const right_form = document.createElement("section");
    right_form.id = 'right_form_order';

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
    address_input.name = 'address';
    address_input.className = 'address_input';
    address.appendChild(address_label);
    address.appendChild(address_input);
    right_form.appendChild(address);


    // Create the form in the left
    const left_form= document.createElement("section");
    left_form.id = 'left_form_order';

    const last_name = document.createElement('section');
    last_name.className = 'last_name';
    const last_name_label = document.createElement('label');
    last_name_label.classList = 'input_label';
    last_name_label.for = 'last_name_input';
    last_name_label.innerHTML = 'Last name:';
    const last_name_input = document.createElement('input');
    last_name_input.type = 'text';
    last_name_input.required = true;
    last_name_input.name = 'last_name';
    last_name_input.className = 'last_name_input';
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
    phone_input.required = true;
    phone_input.name = 'phone'
    phone_input.className = 'phone_input';
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
    quantity_input.name = 'quantity'
    quantity_input.className = 'quantity_input';
    quantity.appendChild(quantity_label);
    quantity.appendChild(quantity_input);
    left_form.appendChild(quantity);

    const submit_order = document.createElement('section');
    submit_order.id = 'submit_order';
    const submit_order_button = document.createElement('input');
    submit_order_button.className = 'submit_order_button';
    submit_order_button.type = 'submit';
    submit_order_button.innerHTML = 'Submit';
    submit_order.appendChild(submit_order_button);
    left_form.appendChild(submit_order);

    submit_order_button.addEventListener('click', clickOnSubmitOrder);

    // Start appending
    form_container.appendChild(right_form);
    form_container.appendChild(left_form);

    product_description.appendChild(form_container);


    let o_button = document.getElementById('order_button');
    o_button.style.backgroundColor = '#fafafa';
    o_button.style.color = '#4B4D4A';

    let d_button = document.getElementById('description_button');
    d_button.style.backgroundColor = '#C0904B';
    d_button.style.color = '#fafafa';

    let m_button = document.getElementById('mockup_button');
    m_button.style.backgroundColor = '#C0904B';
    m_button.style.color = '#fafafa';
}