$(function() {
    createProductItem(products);
});

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

function createProductItem(arr) {

    arr.forEach(function(item) {
        var elem = $('<div>'),
            link = $('<a>');

        $(elem).addClass('product-item').attr('id', 'product-' + item.id);
        $(elem).append('<h2>' + item.name + '</h2>');
        $(elem).append('<strong>' + item.price + '</strong>');
        $(link).attr('href', '/product' + item.id).text('More...');
        $(elem).append(link);
        $('#product-list').append(elem);
    });
}