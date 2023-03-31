const createMenu = ()=>{
    const menuContent = document.createElement('div');
    menuContent.textContent = 'MENU';
    menuContent.setAttribute('class', 'play');

    return menuContent;
}

const loadMenu = () =>{
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu