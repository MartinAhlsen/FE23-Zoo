$( () => {

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
        const animal = this;
        $(".sidebar").append(`
          <div class="animal">
          <img src="${this.thumbnail}" alt="${this.name}" width="100" height="100">
              <h4>${this.name}</h4>
          </div>
        `);
    
        $(".sidebar .animal")
          .last()
          .on("click", function () {
            handleAnimalClick(animal);
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
          <img class="image-large" src="${this.image}" alt="${this.name}">
              <h3>${this.name}</h3>
              <p>${this.description}</p>
              <ul>
                <li>Lifespan: ${this.lifespan}</li>
                <li>Group: ${this.group}</li>
                <li>Food: ${this.food}</li>
                <li>Length: ${this.length}</li>
                <li>Weight: ${this.weight}</li>
                <li>Found: ${this.found}</li>
              <ul>
          </div>
        `);
      };
    
      let lizard = new Animal(
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
    
      let turtle = new Animal(
        "Hawksbill Turtle",
        "50 years",
        "reptile",
        "other animals (sponges & jellyfish), sea plants",
        "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
        "80cm (carapace)",
        "50 kg",
        "Tropical coasts of Queensland, Northern Territory and Western Australia.",
        "../images/turtle_thumb.png",
        "../images/turtle_large.jpeg"
      );
    
      let perentie = new Animal(
        "Perentie",
        "20 years",
        "reptile",
        "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
        "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
        "2.5 m",
        "20 kg",
        "Deserts",
        "../images/perentie_thumb.jpg",
        "../images/perentie_large.jpg"
      );
    
      let animalsArray = [
        lizard,
        turtle,
        perentie,
      ];
    
      // animalsArray.forEach((animal) => animal.createAnimal());
      animalsArray.forEach((animal) => animal.createAnimalList());
    
})