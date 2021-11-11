document.addEventListener("DOMContentLoaded", init)


function init() {
    let userURL = 'https://api.github.com/search/users?q='


    let form = document.getElementById('github-form')
    form.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        fetchUserData(e.target.children[0].value)
        .then(userData => displayUserData(userData))
        .then(function () {resetForm(e.target.children[0])})
    }

    function resetForm(input) {input.value = '';}


    function displayUserData(data) {
        const ul = document.getElementById('user-list');
        ul.innerHTML = '';

        data.items.forEach(user => {
            const li = document.createElement('li');
            const avatar = document.createElement('img')
            const profileLink = document.createElement('a')

            avatar.className = 'user-avatar';
            avatar.src = user.avatar_url

            profileLink.innerText = user.login;
            profile.target = "_blank"
            profileLink.href = user.html_url;

            li.append(avatar, profileLink);
            
            ul.appendChild(li);
        })

    }

    function fetchUserData(input) {
        return fetch(userURL + input)
            .then(response => response.json())
            .then(userData => userData)
    }



}


// console.log(document.querySelector('#github-form'))

