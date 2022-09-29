const weapons = ['sword', 'the thing', 'wizard wand']

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getWeapons: (req, res) => {
        res.status(200).send(weapons)
    },

    addWeapon: (req, res) => {
        let {item} = req.body
        weapons.push(item)

        res.status(200).send(weapons)
    },

    deleteWeapon: (req,res) => {
        let index = req.params.id

        weapons.splice(index, 1)

        res.status(200).send(weapons)
    },

    editWeapon: (req, res) => {
        let index = req.params.id
        let {item} = req.body

        weapons.splice(index, 1, item)

        res.status(200).send(weapons)
    }

}