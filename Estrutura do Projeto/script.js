document.getElementById('fetch-users').addEventListener('click', fetchUser);

function fetchUser() {
    fetch('https://randomuser.me/api/?results=20')
         .then(response => response.json())
         .then(data => {
            const users = data = data.results;
            const userContainer = document.getElementById('user-container')
            userContainer.innerHTML = '';
            users.forEach(user => {
                const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML= `
                <img src="${user.picture.medium}" alt="User Picture">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
                <p>${user.location.city}, ${user.location.country}</p>
            `;
            userContainer.appendChild(userCard);

            });
        })
        .catch(error => console.error('Erro ao buscar usuarioas:', error));
    }