$( () => {
/*     let reptiles = {
        lifespan: "20 years",
        group: "reptiles",
        food: "Plants matter like fruit, insects and small animals like mice amd lizards",
        description: "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
        length: "1.7m",
        weight: "44kg",
        found: "Queensland"
    }
 */

    function Reptile(lifespan, group, food, description, length, weigh, found) {
        this.lifespan = lifespan,
        this.group = group,
        this.food = food,
        this.description = description,
        this.length = length,
        this.weigh = weigh,
        this.found = found,

        this.createCountryElement = function() {         
            $('.main-content').append(`
            <div class="country">
                <h3>${this.group}</h3>
                <p> The capital of ${this.name} is ${this.capitalCity}.</p>
                <p> They speak ${this.language} and they spend ${this.currency}</p>
            </div>
            `)
        }
    }

    let reptiles = new Reptile(
        '20 years',
        'reptiles',
        'Plants matter like fruit, insects and small animals like mice amd lizards',
        'It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida',
        '1.7m',
        '44kg',
        'Queensland'
    )



})