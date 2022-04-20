const url = 'https://jsonplaceholder.typicode.com/users'

const xhr = new XMLHttpRequest();

xhr.open('GET', url);
xhr.responseType = 'json';
xhr.onload = function () {
    const list = document.getElementById('list')
    if (xhr.status>=200 && xhr.status <= 204) {
        console.log(xhr.response)
        xhr.response.forEach( e => {
            list.innerHTML +=`<div>
                    <ul>
                        <p>Имя: ${e.name}</p>
                        <li>Почта: ${e.email}</li>
                    </ul>
                </div>`

        })
    }
}
xhr.send()

//second dz

const name = document.getElementById('first');
const username = document.getElementById('second');
const knopka = document.getElementById('knopka');


function sendUserInfo () {


    const xhr = new XMLHttpRequest();
    if (!name.value.trim() & !username.value.trim()){
        alert('Заполните все поля')
    }
    else {
        const info =  {
            name: name.value,
            username: username.value
        }

        xhr.open('POST', url);

        xhr.responseType = 'json'

        xhr.onload = function () {
            console.log(xhr.response)
        }

        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.send(JSON.stringify(info));
    }
}

knopka.addEventListener('click', sendUserInfo)