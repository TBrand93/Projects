const url = 'https://striveschool-api.herokuapp.com/books';

fetch(url)
.then(response => response.json()
.then(data => createCards(data) ));


function createCards(data) {
    data.forEach(book => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '14rem';
        card.style.display = 'inline-block';
        

        let img = document.createElement('img');
        img.src = book.img;
        img.style.height = '20rem';
        img.classList.add('card-img-top');

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        card.classList.add('m-1');
        
        let cardTitle = document.createElement('h4');
        cardTitle.classList.add('card-title');
        cardBody.innerText = book.title;
        let cardText = document.createElement('p');
        cardText.classList.add('card-text');

        let addCartBtn = document.createElement('button');
        addCartBtn.classList.add('btn', 'btn-success');
        let a1 = document.createElement('a');
        a1.href = 'https://google.it';
        addCartBtn.appendChild(a1);
        addCartBtn.innerText = 'ADD';

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger', 'mx-1');
        deleteBtn.innerText = 'X';

        let faveBtn = document.createElement('button');
        faveBtn.classList.add('btn', 'btn-info');
        let a2 = document.createElement('a');
        a2.href = 'https://google.it';
        
        faveBtn.innerText = '<3';
        

        let basket = document.getElementById('basket');
        
        
        
        cardText.innerText = 'category: ' + book.category;
        cardBody.innerText = 'price: ' + book.price + '€';
        cardText.style.objectFit = 'fill';

        
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(addCartBtn);
        cardBody.appendChild(deleteBtn);
        cardBody.appendChild(faveBtn);
        faveBtn.appendChild(a2);
        
        card.appendChild(img);
        card.appendChild(cardBody);
        row.appendChild(card);



        document.querySelector('#selection').appendChild(card);
        



        deleteBtn.addEventListener('click', function() {
            document.querySelector('#selection').removeChild(card);
        });

            //cart

        const cart = [];
        
        

        addCartBtn.addEventListener('click', function() {

            cart.push('-' + book.title + ' €'+ book.price);
            localStorage.setItem('cartStorage', JSON.stringify(cart));
            basket.innerText = cart;

            console.log(cart);
            
            
        } )



    });

}

createCards();