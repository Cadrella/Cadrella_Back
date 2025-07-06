let width = 56;
    let height = 28;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let div = document.createElement('div');
            div.className = 'point';
            div.style.top = `${5+i*23}px`;
            div.style.left = `${5+j*23}px`;
            div.style.zIndex = `0`;
            document.body.appendChild(div);
        }
    }