let titleStyle = {

    backgroundColor : 'blue',
    width : '200px',
    height: '50px',
    color:'white',
    textAign: 'center',
}
//Create h1 element
let title = document.createElement('h1');
let textcont = document.createTextNode('My list');
title.append(textcont);
document.body.append(title);

//Title style
title.style.background = titleStyle.backgroundColor;
title.style.color = titleStyle.color;
title.style.width = titleStyle.width;
title.style.height = titleStyle.height;
title.style.textAlign =titleStyle.textAign;

//Create ul with li
let ul = document.createElement('ul');
document.body.append(ul);
while(true){
    let data = prompt('Enter data','');
    if(!data){
        break;
    }
    let elem = document.createElement('li');
    elem.textContent = data;
    ul.append(elem);
}