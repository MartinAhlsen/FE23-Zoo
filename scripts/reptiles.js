$( () => {

    function Reptile(name, lifespan, group, food, description, length, weight, found, thumbnail, imgLarge) {
        this.name = name,
        this.lifespan = lifespan,
        this.group = group,
        this.food = food,
        this.description = description,
        this.length = length,
        this.weight = weight,
        this.found = found,
        this.thumbnail = thumbnail,
        this.imgLarge = imgLarge,

        this.createReptileElement = function() {         
            $('.main-content').append(`
            <div class="reptile">
                <h3>${this.name}</h3>
                <img src="${this.thumbnail}" alt="${this.name}" width="100" height="100">
                <p>Group: ${this.group}</p>
                <p>Lifespan: ${this.lifespan}</p>
                <p>Food: ${this.food}</p>
                <p>Description: ${this.description}</p>
                <p>Length: ${this.length}</p>
                <p>Weight: ${this.weight}</p>
                <p>Found: ${this.found}</p>
                <img class="imgLarge" src="${this.imgLarge}" alt="${this.name}" width="1000" height="600">
            </div>
            `)
        }
    }

    let lizard = new Reptile(
        'Frilled-Neck lizard',
        '20 years',
        'Reptile',
        'Small insects and spiders',
        'When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.',
        '90 cm',
        '1 kg',
        'Northern Australia',
        '../images/frill-neck-lizard_thumb.jpg',
        '../images/frill-neck-lizard_large.jpg'
    )

       let reptileArray = [lizard];

    $(reptileArray).each((index, reptile) => {
        reptile.createReptileElement(); 
    })

    
})