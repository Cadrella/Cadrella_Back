function clickOnProduct(card, currentIndex, index, column) {
    console.log(card);
    if(styleOfWall) styleOfWall.remove();
    
    if(document.querySelector('#add_to_cart_button')) document.querySelector('#add_to_cart_button').remove(); 

    //Removing all other products, and only the selected one remains at the top left
    document.querySelectorAll('.product_img').forEach((card, index) => {
        if(index != currentIndex){
            card.remove();
        }
    });

    //document.getElementById('products_container').style.paddingLeft = '20px';

    //Transform the products container into a flexbox
    let pc = document.getElementById('products_container');
    pc.style.display = 'flex';

    //Removing other columns
    if(column == '1') {
        document.getElementById('second_row').remove();
        document.getElementById('third_row').remove();
        //document.getElementById('fourth_row').remove();
    } else if(column == '2') {
        document.getElementById('first_row').remove();
        document.getElementById('third_row').remove();
        //document.getElementById('fourth_row').remove();
    } else if(column == '3') {
        document.getElementById('first_row').remove();
        document.getElementById('second_row').remove();
        //document.getElementById('fourth_row').remove();
    } /*else if(column == '4') {
        document.getElementById('first_row').remove();
        document.getElementById('second_row').remove();
        document.getElementById('third_row').remove();
    }*/
    
    //Create the product's details box inside the flexbox near the selected product card
    let details = document.createElement('section');
    details.id = 'product_details';
    pc.appendChild(details);

    //Add the description section
    let description = document.createElement('section');
    description.id = 'product_description';
    description.innerHTML = `<span id="description_text">${description_content}</span>`;
    details.appendChild(description);

    //Add the functionality section
    let functionality = document.createElement('section');
    functionality.id = 'product_functionality';
    details.appendChild(functionality);

    //Add nothing in the left
    let nothing_left = document.createElement('div');
    nothing_left.id = 'nothing_left_c';
    functionality.appendChild(nothing_left);

    //Add the description button
    let desc_conatiner = document.createElement('div');
    desc_conatiner.id = 'description_button_c';
    functionality.appendChild(desc_conatiner);

    let desc = document.createElement('button');
    desc.id = 'description_button';
    desc.className = 'products_buttons';
    desc.innerHTML = 'Description';
    desc.style.backgroundColor = '#fafafa';
    desc.style.color = '#4B4D4A';
    desc_conatiner.appendChild(desc);

    desc.addEventListener('click', description_function);

    //Add the Mockup Placement (or Scene Rendering) button
    let mockup_container = document.createElement('div');
    mockup_container.id = 'mockup_button_c';
    functionality.appendChild(mockup_container);

    let mockup = document.createElement('button');
    mockup.id = 'mockup_button';
    mockup.className = 'products_buttons';
    mockup.innerHTML = 'Mockup';
    mockup_container.appendChild(mockup);

    mockup.addEventListener('click', (event) => {
        event.stopPropagation();
        mockup_function(card);
    });

    //Add the order button
    let order_container = document.createElement('div');
    order_container.id = 'order_button_c';
    functionality.appendChild(order_container);

    let order = document.createElement('button');
    order.id = 'order_button';
    order.className = 'products_buttons';
    order.innerHTML = 'Order';
    order_container.appendChild(order);

    order.addEventListener('click', () => {
        order_function(card);
    });

    //Add back to gallery button
    let back_to_gallery = document.createElement('button');
    back_to_gallery.id = 'back_to_gallery_button';
    back_to_gallery.className = 'products_buttons';
    back_to_gallery.innerHTML = 'Back to Gallery';
    functionality.appendChild(back_to_gallery);

    back_to_gallery.addEventListener('click', back_to_gallery_function);

    //Add nothing in the right
    let nothing_right = document.createElement('div');
    nothing_right.id = 'nothing_right_c';
    functionality.appendChild(nothing_right);

    //Give flex: 0.3; for the selected card
    card.classList.add = ('flex_0_3');

    //Give the product image a smaller size
    let pi = document.querySelector('.product_img');
    pi.style.width = '180px';
}