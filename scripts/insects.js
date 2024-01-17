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
        const animal = this;
        $(".sidebar").append(`
          <div class="animal">
          <img src="${this.thumbnail}" alt="${this.name}">
              <h3>${this.name}</h3>  
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
        } else {
          $(".main-content .animal").remove();
          animal.createAnimal();
          currentDisplayedAnimal = animal;
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

      const orchidMantis = new Animal(
        " Orchid Mantis (Hymenopus coronatus)",
        "The lifespan of an Orchid Mantis can range from 6 to 9 months, depending on factors such as environment and diet.",
        "Orchid Mantises belong to the Mantidae family, which includes various species of praying mantises.",
        "Orchid Mantises are carnivorous and primarily feed on insects. They are known for their ambush hunting strategy, patiently waiting for prey to come close before striking.",
        "The Orchid Mantis is named for its remarkable resemblance to an orchid flower. This mimicry serves as camouflage, allowing the mantis to ambush prey and avoid predators. It has delicate pink and white coloration with body parts that mimic the structure of a flower.",
        " Adult Orchid Mantises typically have a length ranging from 2 to 3 inches (5 to 7.5 cm).",
        "The weight of an Orchid Mantis is relatively light, given its size and structure.",
        " Orchid Mantises are native to Southeast Asia, including countries like Malaysia and Indonesia. They inhabit tropical rainforests where they can blend into the vegetation.",
        "../images/Orchid-Mantis_thumb.jpg",
        "../images/Orchid-Mantis_large.jpg"
      );

      let animalsArray = [
        orchidMantis
      ];

      animalsArray.forEach((animal) => animal.createAnimalList());
})