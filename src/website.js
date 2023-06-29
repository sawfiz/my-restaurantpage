import loadHome from './home';
import loadMenu from './menu';
import loadStaff from './staff';
import './style.css';


const content = document.createElement('div')
content.setAttribute('id', 'content')
document.body.appendChild(content)

function createNav(){

const navBar = document.createElement('div');
const homebtn = document.createElement('button');
const menubtn = document.createElement('button');
const staffbtn = document.createElement('button');

homebtn.textContent = 'Home';
menubtn.textContent = 'Menu';
staffbtn.textContent = 'Staff';

homebtn.setAttribute('id', 'homebtn');
menubtn.setAttribute('id', 'menubtn');
staffbtn.setAttribute('id', 'staffbtn');

navBar.appendChild(homebtn);
navBar.appendChild(menubtn);
navBar.appendChild(staffbtn);

navBar.setAttribute('id', 'header')


function loadPage(elem){
    switch(elem.id){
        case 'homebtn':
            console.log("home")
            loadHome();
            setActiveButton(elem);
            // set
            break;
        case 'menubtn':
            console.log("menu")
            loadMenu();
            setActiveButton(elem);
            break;
        case 'staffbtn':
            console.log('staff')
            loadStaff();
            setActiveButton(elem);
            break;
    }

}
const buttons = document.querySelectorAll('button')
function setActiveButton(button){
    buttons.forEach(btn=>{
        if (btn!== button){
            btn.classList.remove('activebtn')
        }
        button.classList.add('activebtn')
    })
}
buttons.forEach(button => button.addEventListener('click', (e)=>{
    loadPage(e.target)
}))

return navBar
}



const createMain = ()=>{
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    return main;
}

const createFooter = ()=>{
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    return footer;
}

function combineSections(){
    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    
    loadHome();
}

export {combineSections}