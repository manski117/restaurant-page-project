import _, { add, divide } from 'lodash';
import './style.css';
import{renderHome} from './home';
import{renderMenu} from './menu';
import{renderAbout} from './about';

//global variables
const content = document.getElementById("content");
let buttonIDs = ["about", "home", "menu"]


function renderLayout(){
    //render children to append to body
    const sidebarDiv = document.createElement('div');
    sidebarDiv.setAttribute('id', 'sidebar');
    sidebarDiv.classList.add('flexbox');

    const sidebarText = document.createElement('h1');
    sidebarText.classList.add("sidebar-text");
    sidebarText.innerText = "Bob's Country Bunker";

    sidebarDiv.appendChild(sidebarText);


    const logo = document.createElement('img');
    logo.setAttribute('src', 'https://openclipart.org/download/96427/hat.svg');
    logo.setAttribute('alt', 'logo');
    logo.classList.add('logo');

    const btnHome = document.createElement('button');
    btnHome.classList.add("nav-btn");
    btnHome.setAttribute('id', 'home');
    btnHome.innerText = "Home";

    const btnMenu = document.createElement('button');
    btnMenu.classList.add("nav-btn");
    btnMenu.setAttribute('id', 'menu');
    btnMenu.innerText = "Menu";

    const btnAbout = document.createElement('button');
    btnAbout.classList.add("nav-btn");
    btnAbout.setAttribute('id', 'about');
    btnAbout.innerText = "About";
    
    

    const navbar = document.createElement('div');
    navbar.classList.add('navbar', 'flexbox');
    navbar.appendChild(logo);
    navbar.appendChild(btnHome);
    navbar.appendChild(btnMenu);
    navbar.appendChild(btnAbout);

    
    const contentBody = document.createElement('div');
    contentBody.classList.add("flexbox");
    contentBody.setAttribute('id', 'content-body');
    contentBody.appendChild(navbar);
    
    //use replace child to add content-body as a parent to content
    //make sure to add the navbar child to content-body before content
    let parent = content.parentNode;
    parent.replaceChild(contentBody, content);
    contentBody.appendChild(content);
    



    //append those suckers to body
    document.body.appendChild(sidebarDiv);
    document.body.appendChild(contentBody);


    
};


//initial homepage load:
renderLayout();
renderHome();






    
    
function insertNode(parentID, element, innerText, ID, classes){
    const node = document.createElement(element);
    node.innerText = innerText;
    if (!ID == null){
        node.setAttribute('id', ID)
    } else{
        null;
    };
    if (!classes == null){
        node.setAttribute('class', classes)
    } else{
        null;
    };
    document.getElementById(parentID).appendChild(node);  

};

const clearContent=()=>{
    //replaces content area with a blank space to erase all elements in that DOM node
    content.textContent = "";
};

const loadContent = (navID) =>{
    if (navID === "home"){
        
        clearContent();
        renderHome();
    }
    if(navID === "menu"){
        clearContent();
        renderMenu();
    }
    if(navID === "about"){
        clearContent();
        
        renderAbout();
        
    };
};

//query selectors and event listners
buttonIDs.forEach(element => {
    let navButton = document.getElementById(element);
    navButton.addEventListener('click', function(){
        loadContent(navButton.id);
    });
});


    