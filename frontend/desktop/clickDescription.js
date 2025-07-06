let description_function = () => {
    if(document.getElementById('change_wall_color_button')) document.getElementById('change_wall_color_button').remove();
    if(document.getElementById('mockup_frame')) document.getElementById('mockup_frame').remove();
    
    if(styleOfWall) styleOfWall.remove();
    
    let product_description = document.getElementById('product_description');
    if (document.getElementById('description_text')) document.getElementById('description_text').remove();
    if (document.querySelector('.mockup_bg')) document.querySelector('.mockup_bg').remove();
    if (document.getElementById('form_container_order')) document.getElementById('form_container_order').remove();
    
    let description_text = document.createElement('span');
    description_text.id = 'description_text';
    description_text.innerHTML = `${description_content}`;
    product_description.prepend(description_text);

    let d_button = document.getElementById('description_button');
    d_button.style.backgroundColor = '#fafafa';
    d_button.style.color = '#4B4D4A';

    let m_button = document.getElementById('mockup_button');
    m_button.style.backgroundColor = '#C0904B';
    m_button.style.color = '#fafafa';

    let o_button = document.getElementById('order_button');
    o_button.style.backgroundColor = '#C0904B';
    o_button.style.color = '#fafafa';
}