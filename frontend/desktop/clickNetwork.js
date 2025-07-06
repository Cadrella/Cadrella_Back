let clickOnNetwork = () => {
    if(document.getElementById('network_links')) {
        document.getElementById('network_links').remove();
        document.removeEventListener('click', removeNetwork);
        return;
    }

    setTimeout(() => {
        document.addEventListener('click', removeNetwork);
    }, 0)

    const networkLinks = document.createElement('section');
    networkLinks.id = 'network_links';
    document.getElementById('network').appendChild(networkLinks);

    const instagram = document.createElement('section');
    instagram.id = 'instagram_link';
    networkLinks.appendChild(instagram);

    const instagramLink = document.createElement('a');
    instagramLink.id = 'instagram_link_text';
    instagramLink.innerHTML = 'Instagram';
    instagramLink.href = 'https://www.instagram.com/cadrella.dz?igsh=MWZ1dHNoMXdld2tl';
    instagram.appendChild(instagramLink);
}

document.getElementById('network').addEventListener('click', (event) => {
    event.stopPropagation();
    clickOnNetwork();
});