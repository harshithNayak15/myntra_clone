//  console.log('WORKING');
let bagItems;
onload();

function onload(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}


function addToBag(itemId) {
    bagItems.push(itemId);
    console.log(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon()


}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length > 0){
        bagItemCountElement.style.visibility = 'visible';

        bagItemCountElement.innerText = bagItems.length;

    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
    

}


function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');

    if (!itemsContainerElement){
        return;
    } 

    
    let innerHTML = '';
    items.forEach(item => {
        innerHTML +=`
         <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">
           ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">
                Rs 606
            </span>
            <span class="original-price">
                Rs 1045
            </span>
            <span class="discount">
                (42% OFF)
            </span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To bag</button>
    </div> `
    });
    itemsContainerElement.innerHTML = innerHTML;
}





