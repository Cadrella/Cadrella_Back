let mockup_function = (product) => {
    if(document.getElementById('change_wall_color_button')) {
        document.getElementById('change_wall_color_button').remove();
        //document.removeEventListener('click', removeColors);
    }

    if(styleOfWall) styleOfWall.remove();

    /*setTimeout(() => {
        document.addEventListener('click', removeColors);
    }, 0);*/

    let product_description = document.getElementById('product_description');
    if (document.getElementById('description_text')) document.getElementById('description_text').remove();
    if (document.querySelector('.mockup_bg')) document.querySelector('.mockup_bg').remove();
    if (document.getElementById('form_container_order')) document.getElementById('form_container_order').remove();

    let mockup_bg = document.createElement('img');
    mockup_bg.src = 'wall.jpg';
    mockup_bg.className = 'mockup_bg';
    product_description.prepend(mockup_bg);

    document.querySelector('.mockup_bg').style.height = '235px';

    let m_button = document.getElementById('mockup_button');
    m_button.style.backgroundColor = '#fafafa';
    m_button.style.color = '#4B4D4A';

    let d_button = document.getElementById('description_button');
    d_button.style.backgroundColor = '#C0904B';
    d_button.style.color = '#fafafa';

    let o_button = document.getElementById('order_button');
    o_button.style.backgroundColor = '#C0904B';
    o_button.style.color = '#fafafa';

    const change_wall_color = document.createElement('button');
    change_wall_color.id = 'change_wall_color_button';
    change_wall_color.textContent = 'Change wall color';
    product_description.prepend(change_wall_color);

    change_wall_color.addEventListener('click', changeWallColor);

    const mockup_frame = document.createElement('img');
    mockup_frame.id = 'mockup_frame';
    mockup_frame.src = product.src;
    product_description.appendChild(mockup_frame);
}