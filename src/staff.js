const createStaff = ()=>{
    const staffContent = document.createElement('div');
    staffContent.textContent = 'HOME';
    staffContent.setAttribute('class', 'play');

    return staffContent;
}

const loadStaff = () =>{
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createStaff());
}

export default loadStaff