const createHome = ()=>{
    const homeContent = document.createElement('div');
    homeContent.textContent = 'HOME';
    homeContent.setAttribute('class', 'play');

    return homeContent;
}

const loadHome = () =>{
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome