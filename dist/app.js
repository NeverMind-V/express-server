console.log('connected');

let deleteUser = (id) => {
    console.log('delete user',id);
    fetch('/users', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_id: id})
    })
        .then(response => response.json())
        .then(data => {
            console.log(`user with id: ${id} deleted`);
            console.log('refresh users');

            fetch('/users')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('content').innerHTML = '';
                        data.map(user => {
                            console.log(user);
                            document.getElementById('content').innerHTML += `
                            <div>User: ${user.name} Age: ${user.age}</div><button onclick=deleteUser(${user.id})>Delete</button>`;
                        });
                    })
                    .catch(err => console.error(err));
        })
};

window.onload = () => {
    fetch('/users')
        .then(response => response.json())
        .then(data => {
            document.getElementById('content').innerHTML = '';
            data.map(user => {
                console.log(user);
                document.getElementById('content').innerHTML += `
                <div>User: ${user.name} Age: ${user.age}</div><button onclick=deleteUser(${user.id})>Delete</button>`;
            });
        })
        .catch(err => console.error(err));
};