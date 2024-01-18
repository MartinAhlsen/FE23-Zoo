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
      <img src="${this.thumbnail}" alt="${this.name}" class="thumbnail">
      <h4>${this.name}</h4>  
    </div>
  `);

    $(".sidebar .animal")
      .last()
      .on("click", () => {
        handleAnimalClick(this);
        $("html, body").animate({ scrollTop: 0 }, "slow"); // Add this line
      });
  };

  let currentDisplayedAnimal = null;

  function handleAnimalClick(animal) {
    if (currentDisplayedAnimal === animal) {
      $(".main-content .animal").remove();
      currentDisplayedAnimal = null;
      $(".message").show();
    } else {
      $(".main-content .animal").remove();
      animal.createAnimal();
      currentDisplayedAnimal = animal;
      $(".message").hide();
    }
  }

  Animal.prototype.createAnimal = function () {
    $(".main-content").append(`
      <div class="animal">
      <img src="${this.image}" alt="${this.name}" class="image-large">
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

  const baldEagle = new Animal(
    "Bald Eagle",
    "20-30 years",
    "bird",
    "Fish, carrion, smaller birds, and rodents",
    "The Bald Eagle, the national bird of the United States, is a symbol of strength and freedom. Known for its white head and tail feathers, this majestic bird prefers habitats near water bodies with abundant food supply and large trees for nesting.",
    "70-102 cm",
    "3-6.3 kg",
    "North America",
    "../images/bald_eagle_thumb.png",
    "../images/bald_eagle_large.png"
  );

  const cassowary = new Animal(
    "Cassowary",
    "20 years",
    "bird",
    "Plants matter like fruit, insects and small animals like mice and lizards",
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    "1.7m",
    "44kg",
    "Queensland",
    "../images/cassowary_thumb.png",
    "../images/cassowary_large.png"
  );

  const hummingbird = new Animal(
    "Hummingbird",
    "3-5 years",
    "bird",
    "Nectar, small insects, and spiders",
    "Hummingbirds are among the smallest of birds, known for their ability to hover in mid-air by rapidly flapping their wings. These vibrant birds are a marvel of precision flying and are found primarily in the Americas.",
    "7.5-13 cm",
    "2-20 g",
    "Americas",
    "../images/hummingbird_thumb.png",
    "../images/hummingbird_large.png"
  );

  const kiwi = new Animal(
    "Kiwi",
    "25-50 years",
    "bird",
    "Insects, worms, berries, and seeds",
    "Kiwi birds, flightless and nocturnal, are a unique symbol of New Zealand. These birds have a highly developed sense of smell and are the only birds with nostrils at the end of their long beaks.",
    "35-45 cm",
    "1.3-3.5 kg",
    "New Zealand",
    "../images/kiwi_thumb.png",
    "../images/kiwi_large.png"
  );

  const peregrineFalcon = new Animal(
    "Peregrine Falcon",
    "15-20 years",
    "bird",
    "Small to medium-sized birds, bats",
    "The Peregrine Falcon is renowned for its speed, reaching over 320 km/h (200 mph) during its characteristic hunting stoop, making it the fastest member of the animal kingdom. These birds are found worldwide and are known for their incredible migratory journeys.",
    "34-58 cm",
    "0.7-1.5 kg",
    "Worldwide",
    "../images/peregrine_falcon_thumb.png",
    "../images/peregrine_falcon_large.png"
  );

  const peacock = new Animal(
    "Peacock",
    "15-20 years",
    "bird",
    "Plants, insects, small reptiles",
    "Peacocks are known for their colorful plumage and the spectacular fan-like display of their tail feathers. They are often found in India and Sri Lanka and are a symbol of grace and beauty.",
    "1-1.2 m",
    "4-6 kg",
    "India, Sri Lanka",
    "../images/peacock_thumb.png",
    "../images/peacock_large.png"
  );

  let animalsArray = [
    baldEagle,
    cassowary,
    hummingbird,
    kiwi,
    peregrineFalcon,
    peacock,
  ];

  // animalsArray.forEach((animal) => animal.createAnimal());
  animalsArray.forEach((animal) => animal.createAnimalList());
});
