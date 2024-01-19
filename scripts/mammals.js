$(() => {
  class Animal {
    constructor(
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

    createAnimalList() {
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
          $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    }

    createAnimal() {
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
    }
  }

  let currentDisplayedAnimal = null;

  const handleAnimalClick = (animal) => {
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
  };

  const animalsArray = [
    new Animal(
      "Elephant",
      "60-70 years",
      "mammal",
      "Grass, leaves, bamboo, bark",
      "Elephants are the largest land animals in the world. They are known for their long trunks, large ears, and social behavior. They are native to Africa and Asia.",
      "2.5-4 m (at the shoulder)",
      "2,700-6,000 kg",
      "Africa, Asia",
      "../images/elephant_thumb.png",
      "../images/elephant_large.png"
    ),

    new Animal(
      "Lion",
      "10-14 years",
      "mammal",
      "Meat (carnivore)",
      "Lions are known as the 'king of the jungle.' They are social felines living in groups called prides. Lions are apex predators and are found in the African savannas.",
      "1.2 m (at the shoulder)",
      "120-250 kg",
      "Africa, India (Gir Forest)",
      "../images/lion_thumb.png",
      "../images/lion_large.png"
    ),

    new Animal(
      "Panda",
      "20 years",
      "mammal",
      "Bamboo, fruits, small animals",
      "Pandas are easily recognizable by their distinctive black and white coloring. Native to China, they are a symbol of peace and are known for their playful nature.",
      "1.2-1.5 m",
      "75-135 kg",
      "Central China",
      "../images/panda_thumb.png",
      "../images/panda_large.png"
    ),

    new Animal(
      "Kangaroo",
      "8-12 years",
      "mammal",
      "Grasses, leaves",
      "Kangaroos are marsupials known for their powerful hind legs and large tails. They are native to Australia and are the only large animals that use hopping as their primary means of locomotion.",
      "1.3-1.6 m",
      "35-90 kg",
      "Australia",
      "../images/kangaroo_thumb.png",
      "../images/kangaroo_large.png"
    ),

    new Animal(
      "Giraffe",
      "20-25 years",
      "mammal",
      "Leaves, especially from acacia trees",
      "Giraffes are the tallest mammals on Earth, known for their long necks and legs. Their height allows them to reach leaves and shoots high in the trees, which is their main food source.",
      "4.6-5.5 m",
      "800-1,200 kg",
      "African savannas",
      "../images/giraffe_thumb.png",
      "../images/giraffe_large.png"
    ),
  ];

  animalsArray.forEach((animal) => animal.createAnimalList());
});
