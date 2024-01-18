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
                <li>Weigth: ${this.weight}</li>
                <li>Found: ${this.found}</li>
              <ul>
          </div>
        `);
  };

  const orchidMantis = new Animal(
    "Orchid Mantis (Hymenopus coronatus)",
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

  const peacockSpider = new Animal(
    "Peacock Spider (Maratus volans)",
    "The lifespan of a Peacock Spider is relatively short, ranging from several months to a year, depending on the species and environmental conditions.",
    " Peacock Spiders belong to the Salticidae family, which includes jumping spiders. The Maratus genus is specifically known as Peacock Spiders.",
    "Peacock Spiders are carnivorous and feed on small insects. They are active hunters, using their keen eyesight and jumping abilities to catch prey.",
    " Peacock Spiders are famous for the colorful and elaborate courtship displays performed by males during the mating ritual. These displays involve intricate leg and abdomen movements, showcasing vibrant patterns. The name Peacock Spider is derived from the spider's colorful abdomen resembling a peacock's tail feathers.",
    "Adult Peacock Spiders are small, with a body length ranging from 1 to 5 millimeters, depending on the species.",
    "Due to their small size, Peacock Spiders are lightweight.",
    " Peacock Spiders are native to Australia, where they inhabit various habitats, including grasslands, shrublands, and forests. Different species of Peacock Spiders can be found in different regions of Australia.",
    "../images/Peacock-Spider_thumb.jpg",
    "../images/Peacock-Spider_large.jpg"
  );

  const iridescentLonghornBeetle = new Animal(
    "Iridescent Longhorn Beetle (Agapanthia villosoviridescens)",
    "The lifespan of the Iridescent Longhorn Beetle can vary, but it typically ranges from several weeks to a few months, depending on environmental conditions.",
    "The Iridescent Longhorn Beetle belongs to the Cerambycidae family, commonly known as longhorn beetles. This family includes a diverse group of beetles characterized by their long antennae.",
    "The larvae of the Iridescent Longhorn Beetle feed on wood, particularly dead or decaying wood. The adults may also consume nectar from flowers.",
    " The Iridescent Longhorn Beetle is named for the vivid iridescent colors that adorn its body, particularly on the elytra (wing covers). The coloration can include shades of green, blue, and purple. The long antennae, characteristic of longhorn beetles, add to its distinctive appearance.",
    " Adult Iridescent Longhorn Beetles are medium-sized, with a body length ranging from 8 to 15 millimeters.",
    "The weight of the Iridescent Longhorn Beetle is relatively light, given its size and structure.",
    " This species is native to various parts of Europe, including the United Kingdom. It can be found in habitats such as meadows, woodlands, and areas with dead or decaying wood.",
    "../images/Iridescent-Longhorn-Beetle_thumb.jpg",
    "../images/Iridescent-Longhorn-Beetle_large.jpg"
  );

  const blueCarpenterBee = new Animal(
    " Blue Carpenter Bee (Xylocopa caerulea)",
    "The lifespan of the Blue Carpenter Bee can vary, but it typically ranges from a few weeks to a few months, depending on factors such as environmental conditions and predation.",
    "Blue Carpenter Bees belong to the Xylocopa genus, which includes various species of carpenter bees. Carpenter bees are solitary bees known for nesting in wood.",
    " Adult Blue Carpenter Bees primarily feed on nectar from flowers. They are important pollinators in their ecosystems.",
    " The Blue Carpenter Bee is named for its vibrant blue and black coloration, which is particularly noticeable on its abdomen. The large size and distinctive color make it easily identifiable. These bees are solitary, and females create nests in wood by burrowing into it.",
    " Adult Blue Carpenter Bees are relatively large, with a body length ranging from 0.8 to 1.6 inches (2 to 4 cm).",
    "The weight of the Blue Carpenter Bee is relatively light, given its size.",
    " Blue Carpenter Bees are native to various regions, including Southeast Asia and parts of the Indian subcontinent. They can be found in tropical and subtropical habitats where suitable nesting sites are available.",
    "../images/Blue-Carpenter-Bee_thumb.jpg",
    "../images/Blue-Carpenter-Bee_large.jpg"
  );

  const madagascanSunsetMoth = new Animal(
    " Madagascan Sunset Moth (Chrysiridia rhipheus)",
    "The lifespan of the Madagascan Sunset Moth is relatively short, typically ranging from a few days to a few weeks. This short lifespan is common among many moth species.",
    "The Madagascan Sunset Moth belongs to the family Uraniidae. Moths in this family are often characterized by their bright colors and unique wing shapes.",
    " In the adult stage, Madagascan Sunset Moths primarily feed on nectar from flowers. The caterpillar (larval) stage feeds on specific host plants.",
    "This moth is renowned for its breathtakingly beautiful appearance. The wings of the Madagascan Sunset Moth exhibit a vibrant array of colors, including iridescent greens, blues, and reds. The iridescence is a result of microscopic scales on the wings that refract light.",
    "The wingspan of the Madagascan Sunset Moth can reach up to 10 centimeters (approximately 4 inches).",
    " The weight of the Madagascan Sunset Moth is relatively light, as is typical for most moths.",
    "As the name suggests, the Madagascan Sunset Moth is native to Madagascar, an island nation in the Indian Ocean. It inhabits rainforests and other tropical environments on the island.",
    "../images/Madagascan-Sunset-Moth_thumb.jpg",
    "../images/Madagascan-Sunset-Moth_large.jpg"
  );

  const goldenTortoiseBeetle = new Animal(
    "Golden Tortoise Beetle (Charidotella sexpunctata)",
    "The lifespan of the Golden Tortoise Beetle is relatively short, lasting a few weeks to a few months, depending on environmental conditions.",
    "The Golden Tortoise Beetle belongs to the leaf beetle family Chrysomelidae. This family includes a diverse group of beetles, many of which are associated with plants.",
    "Both the larvae and adults of the Golden Tortoise Beetle feed on the leaves of plants, with a preference for members of the morning glory family (Convolvulaceae). The feeding activity may cause damage to plant leaves.",
    "The Golden Tortoise Beetle is named for its unique appearance. The adult beetles have a shiny, metallic gold or copper color, making them stand out. These beetles are known for their ability to change color. When disturbed, they can change from gold to a reddish or purplish hue.",
    "Adult Golden Tortoise Beetles are relatively small, with a length ranging from 6 to 7 millimeters.",
    "The weight of the Golden Tortoise Beetle is light, typical for beetles of its size.",
    " Golden Tortoise Beetles are found in various regions, including North and South America. They inhabit fields, gardens, and areas with the preferred host plants",
    "../images/Golden-Tortoise-Beetle_thumb.jpg",
    "../images/Golden-Tortoise-Beetle_large.jpg"
  );

  let animalsArray = [
    orchidMantis,
    peacockSpider,
    iridescentLonghornBeetle,
    blueCarpenterBee,
    madagascanSunsetMoth,
    goldenTortoiseBeetle,
  ];

  animalsArray.forEach((animal) => animal.createAnimalList());
});
