$(document).ready(function() {
    $("button").click(function() {
        var fact = facts[Math.round(Math.random() * (facts.length - 1))];
        $(".fact").empty();
        $(".fact").append(fact);
        //Let's think about this
    });
});

var facts = [
    "85% of plant life is found in the ocean.",
    "Brazil is named after a tree.",
    "Stress relief can be achieved with chemicals in freshly-cut grass, according to scientists.",
    "70,000 plant species are utilized for medicine.",
    "2009 is the year scientists discovered a plant in the Philippines that is capable of devouring rats.",
    "Some bamboo plants can grow almost a meter in just one day.",
    "More than 20 percent of the world oxygen is produced in the Amazon Rainforest.",
    "Dandelion is completely edible, from the petals to the roots.",
    "The first certified botanical garden was founded by Pope Nicholas III in the Vatican City in 1278 AD.",
    "Trees are the longest-living organisms on earth.",
    "The earth has more than 80,000 species of edible plants.",
    " A herb is specifically from the leaf of a plant, and a spice is from the seed, berry, stem, bark, root or bulb.",
    " The Poison Garden at England’s Alnwick Garden is filled with plants that can kill you.",
    "The smell of freshly-cut grass is actually a plant distress call.",
    " Plants can recognise their siblings and give them preferential treatment, competing less for valuable resources like root space than when surrounded by plants that are strangers.",
    "Plants dislike human noise.",
    "All teas (black, green and white) come from the same plant, camellia sinensis. The only thing that differs is the processing methods.",
    "There is a plant in Australia known as the “Suicide Plant” because the effect of its sting can last for years, and its pain is so unbearable that people have killed themselves after touching it.",
    "Plants may be deaf, but they can feel, see, smell and remember, according to plant biologist Daniel Chamovitz.",
    "3.34m is the height of the world’s tallest recorded basil plant.",
    "Tree resin which has been fossilized is known as amber, it sometimes contains plant material or small animals that were trapped inside. ",
    "Some plants are carnivores, gaining nutrients by eating various small insects and spiders. A well known example of a carnivorous plant is the Venus Flytrap.",
    "Plant matter found at the bottom of areas with water such as swamps can eventually turn into coal due to a process called metamorphosis.",
    "Poison ivy produces a skin irritant called urushiol. Touching poison ivy will cause an allergic reaction, usually in the form of an itchy rash.",
    "Caffeine serves the function of a pesticide in a coffee plant! ",
    "Peaches, Pears, apricots, quinces, strawberries, and apples are members of the rose family!",
    "Apple, potatoes and onions have the same taste, to test this eat them with your nose closed!",
    "The tears during cutting an onion are caused by sulfuric acid present in them!",
    "The tallest tree ever was an Australian eucalyptus – In 1872 it was measured at 435 feet tall!",
    "The first potatoes were cultivated in Peru about 7,000 years ago!"
];