const renderHome = () =>{
    //render headline
    let headline = document.createElement('h1');
    let headlineTextNode = document.createTextNode("-Home-");
    headline.appendChild(headlineTextNode);
    headline.classList.add("page-headline");
    //make the div container for the menu items
    let contentWrapper = document.createElement('div');
    contentWrapper.classList.add("content-wrapper");
    contentWrapper.classList.add("flexbox");
    //now make and append the necessary elements to the wrapper
    //make item name
    
    contentWrapper.innerHTML += '<h1 class="content-headline">Welcome to Bob\'s place</h1>';
    contentWrapper.innerHTML += '<img src="https://images.pexels.com/photos/13723179/pexels-photo-13723179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Ole Bob" class="content-img">';
    contentWrapper.innerHTML += '<img src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="drinks galore" class="content-img">';
    contentWrapper.innerHTML +='<p class="content-text">Bob\'s Country Bunker has offered good music, good food, and good drinks to the good ole\' boys of southern Illinois since 1958.</p>';
    contentWrapper.innerHTML += '<p class="content-text">We host live music every Friday and Saturday, featuring a mix of both local and visiting bands. Happy hour every day between 4pm and 6pm</p>';
    //add stuff to content
    content.appendChild(headline);
    content.appendChild(contentWrapper);
    return;
    
};

export {renderHome};