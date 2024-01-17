$(() => {
  function Animal(
    name,
    lifespan,
    group,
    food,
    description,
    length,
    weight,
    found,
    thumbnail,
    image
  ) {
    this.name = name;
    this.lifespan = lifespan;
    this.group = group;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.found = found;
    this.thumbnail = thumbnail;
    this.image = image;
  }

  Animal.prototype.createAnimalList = function () {
    $(".sidebar").append(`
      <div class="animal">
      <img src="${this.thumbnail}" alt="${this.name}">
          <h3>${this.name}</h3>  
      </div>
    `);
  };

  Animal.prototype.createAnimal = function () {
    $(".main-content").append(`
      <div class="animal">
      <img src="${this.thumbnail}" alt="${this.name}">
          <h3>${this.name}</h3>
          <p>${this.description}</p>
          <ul>
            <li>Lifespan: ${this.lifespan}</li>
            <li>Group: ${this.group}</li>
            <li>Food: ${this.food}</li>
            <li>Length: ${this.length}</li>
            <li>Width: ${this.width}</li>
            <li>Found: ${this.found}</li>
          <ul>
      </div>
    `);
  };

  let cassowary = new Animal(
    "Cassowary",
    "20 years",
    "bird",
    "Plants matter like fruit, insects and small animals like mice and lizards",
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    "1.7m",
    "44kg",
    "Queensland",
    "./images/cassowary_thumb.png",
    "./images/cassowary_large.png"
  );

  let bluebird = new Animal(
    "Blue Bird",
    "10 years",
    "bird",
    "Plants matter like fruit, insects and small animals like mice and lizards",
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    "1.7m",
    "44kg",
    "Queensland",
    "./images/bluebird_thumb.png",
    "./images/bluebird_large.png"
  );

  let animalsArray = [cassowary, bluebird];

  animalsArray.forEach((animal) => animal.createAnimal());
  animalsArray.forEach((animal) => animal.createAnimalList());
});
