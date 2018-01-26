var products = [{
        name: 'Banana',
        price: '$2',
        id: '001'
    },
    {
        name: 'Apple',
        price: '$1',
        id: '002'
    },
    {
        name: 'Orange',
        price: '$3',
        id: '003'
    },
    {
        name: 'Pineapple',
        price: '$10',
        id: '015'
    }
];

createElementinDom(products);

function createElementinDom(arr) {

    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            var div = document.createElement('div'),
                h2 = document.createElement('h2'),
                strong = document.createElement('strong'),
                button = document.createElement('a');

            div.className = 'product-item';
            div.setAttribute('id', 'product-' + arr[i].id + '');
            h2.innerText = arr[i].name;
            strong.innerText = arr[i].price;
            button.innerText = 'more';
            button.setAttribute('href', '/product/#' + arr[i].id);


            div.appendChild(h2);
            div.appendChild(strong);
            div.appendChild(button);
            var wrapper = document.getElementById('product-list');
            wrapper.appendChild(div);
        }
    } else {
        alert('Передайте массив товаров!');
    }
}