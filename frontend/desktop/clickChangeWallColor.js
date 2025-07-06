const styleOfWall = document.createElement('style'); // It has to be declared globaly

let changeWallColor = () => {
    if(document.getElementById('colors')) {
        document.getElementById('colors').remove();
        return;
    }

    const colors = document.createElement('section');
    colors.id = "colors";
    document.getElementById('change_wall_color_button').appendChild(colors);

    colors.addEventListener('click', (event) => {
        event.stopPropagation();
    })

    const redButtonContainer = document.createElement('div');
    redButtonContainer.classList = 'change_wall_color_buttons_container';
    colors.appendChild(redButtonContainer);

    const redButton = document.createElement('button');
    redButton.classList = 'change_wall_color_buttons';
    redButton.id = 'red_button';
    redButtonContainer.appendChild(redButton);

    const greenButtonContainer = document.createElement('div');
    greenButtonContainer.classList = 'change_wall_color_buttons_container';
    colors.appendChild(greenButtonContainer);

    const greenButton = document.createElement('button');
    greenButton.classList = 'change_wall_color_buttons';
    greenButton.id = 'green_button';
    greenButtonContainer.appendChild(greenButton);

    const blueButtonContainer = document.createElement('div');
    blueButtonContainer.classList = 'change_wall_color_buttons_container';
    colors.appendChild(blueButtonContainer);

    const blueButton = document.createElement('button');
    blueButton.classList = 'change_wall_color_buttons';
    blueButton.id = 'blue_button';
    blueButtonContainer.appendChild(blueButton);

    const yellowButtonContainer = document.createElement('div');
    yellowButtonContainer.classList = 'change_wall_color_buttons_container';
    colors.appendChild(yellowButtonContainer);

    const yellowButton = document.createElement('button');
    yellowButton.classList = 'change_wall_color_buttons';
    yellowButton.id = 'yellow_button';
    yellowButtonContainer.appendChild(yellowButton);

    const cyanButtonContainer = document.createElement('div');
    cyanButtonContainer.classList = 'change_wall_color_buttons_container';
    colors.appendChild(cyanButtonContainer);

    const cyanButton = document.createElement('button');
    cyanButton.classList = 'change_wall_color_buttons';
    cyanButton.id = 'cyan_button';
    cyanButtonContainer.appendChild(cyanButton);

    const magentaButtonContainer = document.createElement('div');
    magentaButtonContainer.classList = 'change_wall_color_buttons_container';
    colors.appendChild(magentaButtonContainer);

    const magentaButton = document.createElement('button');
    magentaButton.classList = 'change_wall_color_buttons';
    magentaButton.id = 'magenta_button';
    magentaButtonContainer.appendChild(magentaButton);

    const blackButtonContainer = document.createElement('div');
    blackButtonContainer.classList = 'change_wall_color_buttons_container';
    colors.appendChild(blackButtonContainer);

    const blackButton = document.createElement('button');
    blackButton.classList = 'change_wall_color_buttons';
    blackButton.id = 'black_button';
    blackButtonContainer.appendChild(blackButton);


    document.querySelectorAll('.change_wall_color_buttons').forEach((colorButton) => {
        colorButton.addEventListener('click', (event) => {
            event.stopPropagation();
            if(colorButton.id == 'red_button') {
                styleOfWall.innerHTML = `
                    #product_description::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: rgba(244, 67, 54, 0.5);
                        pointer-events: none;
                        border-radius: 5px;
                        width: 96%;
                        height: 95.5%;
                    }
                    .mockup_bg{
                        width: 96%;
                        height: 250px;
                        box-shadow: 5px 5px 20px rgba(244, 67, 54, 0.5);
                        border-radius: 5px;
                    }
                `;
            } else if(colorButton.id == 'green_button') {
                styleOfWall.innerHTML = `
                    #product_description::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: rgba(4, 170, 109, 0.5);
                        pointer-events: none;
                        border-radius: 5px;
                        width: 96%;
                        height: 95.5%;
                    }
                    .mockup_bg{
                        width: 96%;
                        height: 250px;
                        box-shadow: 5px 5px 20px rgba(4, 170, 109, 0.5);
                        border-radius: 5px;
                    }
                `;
            } else if(colorButton.id == 'blue_button') {
                styleOfWall.innerHTML = `
                    #product_description::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: rgba(33, 150, 243, 0.5);
                        pointer-events: none;
                        border-radius: 5px;
                        width: 96%;
                        height: 95.5%;
                    }
                    .mockup_bg{
                        width: 96%;
                        height: 250px;
                        box-shadow: 5px 5px 20px rgba(33, 150, 243, 0.5);
                        border-radius: 5px;
                    }
                `;
            } else if(colorButton.id == 'yellow_button') {
                styleOfWall.innerHTML = `
                    #product_description::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: rgba(255, 235, 59, 0.5);
                        pointer-events: none;
                        border-radius: 5px;
                        width: 96%;
                        height: 95.5%;
                    }
                    .mockup_bg{
                        width: 96%;
                        height: 250px;
                        box-shadow: 5px 5px 20px rgba(255, 235, 59, 0.5);
                        border-radius: 5px;
                    }
                `;
            } else if(colorButton.id == 'cyan_button') {
                styleOfWall.innerHTML = `
                    #product_description::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: rgba(0, 255, 255, 0.5);
                        pointer-events: none;
                        border-radius: 5px;
                        width: 96%;
                        height: 95.5%;
                    }
                    .mockup_bg{
                        width: 96%;
                        height: 250px;
                        box-shadow: 5px 5px 20px rgba(0, 255, 255, 0.5);
                        border-radius: 5px;
                    }
                `;
            } else if(colorButton.id == 'magenta_button') {
                styleOfWall.innerHTML = `
                    #product_description::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: rgba(255, 0, 255, 0.5);
                        pointer-events: none;
                        border-radius: 5px;
                        width: 96%;
                        height: 95.5%;
                    }
                    .mockup_bg{
                        width: 96%;
                        height: 250px;
                        box-shadow: 5px 5px 20px rgba(155, 0, 255, 0.5);
                        border-radius: 5px;
                    }
                `;
            } else if(colorButton.id == 'black_button') {
                styleOfWall.innerHTML = `
                    #product_description::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: rgba(0, 0, 0, 0.5);
                        pointer-events: none;
                        border-radius: 5px;
                        width: 96%;
                        height: 95.5%;
                    }
                    .mockup_bg{
                        width: 96%;
                        height: 250px;
                        box-shadow: 5px 5px 20px rgba(0, 0, 0, 1);
                        border-radius: 5px;
                    }
                `;
            }
            document.head.appendChild(styleOfWall);
        })
    })
}