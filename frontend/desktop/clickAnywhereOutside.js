let removeCatalogues = (event) => {
    if(document.getElementById('field_and_catalogs')){
        if(!document.getElementById('field_and_catalogs').contains(event.target)) {
            document.getElementById('field_and_catalogs').remove();
        }
    }
}

let removeNetwork = (event) => {
    if(document.getElementById('network_links')){
        if(!document.getElementById('network_links').contains(event.target)) {
            document.getElementById('network_links').remove();
        }
    }
}

let removeColors = (event) => {
    if(document.getElementById('colors')){
        if(!document.getElementById('colors').contains(event.target)) {
            document.getElementById('colors').remove();
        }
    }
}