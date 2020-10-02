const userList = document.getElementById("userList")
const searchBar = document.getElementById('searchBar');
let masculino = document.getElementById('masculino')
let mediaIdades = document.getElementById('mediaIdades')
let somaIdades = document.getElementById('somaIdades')
let feminino = document.getElementById('feminino')

let users = []

// Pega o JSON , popula o Array users e faz o displayUsers
const loadUsers = async () => {
    try {
        const res = await fetch("utils/randomuser.me.json")
        users = await res.json()
        displayUsers(users)
    } catch (err) {
        console.error(err)
    }
}

//Bota o que eu quero do Array no HTML
const displayUsers = (allUsers) => {
    const htmlString = allUsers.map((user) => {
        return `
        <li class="user">
            <p>
                <img src="${user.picture.thumbnail}"></img>
                <b>${user.name.first} 
                    ${user.name.last}, 
                        ${user.dob.age}<b>
            </p>
        </li>
        `
    }).join('')
    userList.innerHTML = htmlString
}

//Faz a busca com o EventListener e atualiza o displayUsers
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredUsers = users.filter((user) => {
        return (
            user.name.first.toLowerCase().includes(searchString) ||
            user.name.last.toLowerCase().includes(searchString)
        );
    });
    displayUsers(filteredUsers);
    let totalmasculino = filteredUsers.filter(item => item.gender === 'male')
    let totalfeminino = filteredUsers.filter(item => item.gender === 'female')
    let totalsoma = filteredUsers.reduce((a, b) => a + b.dob.age, 0)
    let totalmedia = (filteredUsers.reduce((a, b) => a + b.dob.age, 0)) / filteredUsers.length

    masculino.textContent = totalmasculino.length
    feminino.textContent = totalfeminino.length
    somaIdades.textContent = totalsoma
    mediaIdades.textContent = totalmedia
    console.log(filteredUsers)

});


function textContent() {

}





//chama funcões
loadUsers()































//         showData(data)
//     })
//     .catch(error => console.log(error))
// })

// function showData(data){
//     console.log(data)
//      const user = document.getElementById("user")
//      //user.textContent = data.results[0].name.first +' '+ data.results[0].name.last


//     for (i in data.results) {

//     }
// }






// // async function consumeAPI(){
// //     const res = await fetch ("randomuser.me.json")
// //     return res.json()
// //     const data = JSON.parse(res)
// //     //const json = await res.json()
// // }

// // // function escreve(){

// // //     let user = document.getElementById("user")
// // //     user.textContent = data
// // // }

// // consumeAPI()
// // // escreve()