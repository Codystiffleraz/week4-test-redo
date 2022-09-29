

const baseURL = "http://localhost:4000"

//Step 1 Select HTML ELement
const complimentBtn = document.getElementById("complimentButton")

const getWeaponsBtn = document.getElementById('getWeapons')

const weaponRack = document.getElementById('displayWeapons')

const addForm = document.getElementById('addForm')
const addInput = document.getElementById('addInput')

const deleteForm = document.getElementById('deleteForm')
const deleteInput = document.getElementById('deleteInput')

const editForm = document.getElementById('editForm')
const editInput = document.getElementById('editInput')
const editIndex = document.getElementById('editIndex')


//Step:2 Write funciton
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getWeapons = () => {
    axios.get(`${baseURL}/api/weapons`)
        .then((res) => {
            console.log(res.data)
            const weapons = res.data
            weaponRack.innerHTML = ''

            for(let i = 0; i< weapons.length; i++){
                let newWeapon = document.createElement('li')
                newWeapon.textContent = weapons[i]
                weaponRack.appendChild(newWeapon)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

const addNewItem = (event) => {
    event.preventDefault()

    let bodyObj ={
        item: addInput.value
    }

    axios.post(`${baseURL}/api/addWeapon`, bodyObj)
        .then((res)=> {
            console.log(res.data)
            const weapons = res.data
            weaponRack.innerHTML = ''

            for(let i = 0; i< weapons.length; i++){
                let newWeapon = document.createElement('li')
                newWeapon.textContent = weapons[i]
                weaponRack.appendChild(newWeapon)
            }

            addInput.value = ''
        })
        .catch((err)=> {
            console.log(err)
        })
}

const deleteItem = (event) => {
    event.preventDefault()

    axios.delete(`${baseURL}/api/deleteWeapon/${deleteInput.value}`)
    .then((res) => {
        const weapons = res.data
        weaponRack.innerHTML = ''

        for(let i = 0; i< weapons.length; i++){
            let newWeapon = document.createElement('li')
            newWeapon.textContent = weapons[i]
            weaponRack.appendChild(newWeapon)
        }

        addInput.value = ''
    })
    .catch((err)=> {
        console.log(err)
    })
   
}

const editItem = (event) => {
    event.preventDefault()

    let bodyObj = {
        item: editInput.value
    }

    axios.put(`${baseURL}/api/editWeapon/${editIndex}`, bodyObj)
        .then((res) => {
            const weapons = res.data
            weaponRack.innerHTML = ''
    
            for(let i = 0; i< weapons.length; i++){
                let newWeapon = document.createElement('li')
                newWeapon.textContent = weapons[i]
                weaponRack.appendChild(newWeapon)
            }
    
            editIndex.value = ''
            editInput.value = ''
        })
        .catch((err)=> {
            console.log(err)
        })
       
        

}

//step:3 combine with event listener
complimentBtn.addEventListener('click', getCompliment)
getWeaponsBtn.addEventListener('click', getWeapons)
addForm.addEventListener('submit', addNewItem)
deleteForm.addEventListener('submit', deleteItem)
editForm.addEventListener('submit', editItem)
