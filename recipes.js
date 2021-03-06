// Nouns
(() => {
  const nouns = [
    '<a href="https://www.cookinglight.com/recipes/kale-radicchio-salad-run-fast-eat-slow" target="_blank">Shalanes Farro and Kale salad.</a> Kids: Hotdog n chips',
    '<a href="https://www.epicurious.com/recipes/member/views/easy-chicken-tacos-50113913" target="_blank">Adobo Chicken Tacos</a>',
    '<a href="https://www.seriouseats.com/recipes/2010/04/sloppy-joes-with-barbecue-sauce-carrot-jalapeno-slaw-recipe.html" target="_blank">Serious Eats Sloppy Joes with Jalapeno-carrot slaw</a>',
    'TJs Frozen Bean burgers with <a href="https://www.delish.com/cooking/recipe-ideas/a19695920/simple-spinach-salad-recipe/" target="_blank">Spinach salad.</a> Kids: mac n cheese',
    '<a href="https://dadwithapan.com/recipe/tuna-salad-lettuce-wrap/" target="_blank">Tuna salad lettuce cups.</a> Kids: snack board',
    'Bean n Cheese Quesadillas',
    '<a href="https://www.foodandwine.com/recipes/challah-french-toast" target="_blank">Challah French Toast with Scrambled eggs, bacon</a>',
    '<a href="https://www.simplyrecipes.com/recipes/sheet_pan_harissa_chicken_with_carrots_and_cauliflower/" target="_blank">Sheet-Pan Harissa Chicken with Carrots and Cauliflower</a>',
    '<a href="https://www.skinnytaste.com/one-pot-spaghetti-and-meat-sauce-stove-top-recipe/" target="_blank">Spaghetti with meat sauce.</a> Kids: butter noodles and veggies',
    '<a href="http://www.slimmingeats.com/blog/instant-pot-teriyaki-pork-tenderloin" target="_blank">Instant pot teriyaki pork tenderloin with rice, veggies</a>',
    '<a href="https://food52.com/recipes/22622-heidi-swanson-s-baked-oatmeal" target="_blank">Baked oatmeal</a>',
    '<a href="https://www.pamperedchef.com/recipe/Main+Dishes/BBQ+%26+Grilling/Chili-Lime+Halibut+with+Grilled+Corn+Salsa/65115" target="_blank">Peruvian Chili-Lime Halibut with Hasselbeck potatoes. </a>Kids: TJs frozen meatballs and tater tots',
    '<a href="https://www.youtube.com/watch?v=V3ykiECDTV0&feature=youtu.be" target="_blank">Chimichurry Flank steak with green beans, and cauliflower.</a> Kids: Breakfast burritos',
    '<a href="https://www.cookinglight.com/recipes/thai-turkey-lettuce-cups" target="_blank">Thai Turkey Lettuce Cups.</a> Kids: turkey sandos and veggies.',
    '<a href="https://hungrynovelist.wordpress.com/2014/06/10/gorgeous-grilled-cheese-inspired-by-chef-the-film/" target="_blank">Grilled Cheese (Chef) with carrot fries</a>',
    '<a href="https://www.bettycrocker.com/recipes/sheet-pan-honey-balsamic-pork-chop-dinner/a2eb0eb5-a5dc-41ba-8173-d5b0db56a5cf" target="_blank">Sheet-Pan Honey-Balsamic Pork Chop Dinner with curly sweet potatoes</a>',
    'Snack plate / Charcuterie board',
    'New Seasons Wok at home. Kids: snack plate',
    '<a href="https://www.copymethat.com/r/Ut4WBRP/shalane-flanagans-moroccan-lentil-salad/" target="_blank">Shalanes Moroccan Salad.</a> Kids hot dogs and chips',
    '<a href="https://cupofjo.com/2015/04/boursin-pasta-with-spring-peas/" target="_blank">Boursin and Pea ravioli with broccoli</a>',
    'Chicken/Leftover Chicken and TJs frozen stir fried rice',
    '<a href="https://www.spendwithpennies.com/easy-chicken-fajitas/" target="_blank">Chicken fajitas</a>',
    'The "not in college anymore" Leftover bean nachos with avocado',
    '<a href="https://www.nutmegnanny.com/sweet-potato-black-bean-burrito-bowls/" target="_blank">Bean bowls with leftover veggies, rice</a>',
    '<a href="https://www.laurafuentes.com/easy-taco-night-recipe/" target="_blank">Taco night!</a>',
    'Breakfast for dinner: yogurt bowls with shredded coconut, apricots, cherries, granola and hemp seeds',
    '<a href="https://www.thespruceeats.com/falafel-sliders-4139863" target="_blank">Falafel sliders with TJs tzatkiki and hummus</a>',
    '<a href="https://www.iheartnaptime.net/twice-baked-potatoes/" target="_blank">Twiced baked potatoes</a>',
    '<a href="http://www.shutterbean.com/2015/coconut-steel-cut-oats/" target="_blank">Breakfast for dinner: Overnight Steel Cut oats </a>',
    '<a href="https://www.seriouseats.com/recipes/2016/01/homemade-egg-mcmuffin-mcdonalds-recipe.html" target="_blank">Breakfast for dinner: Homemade egg McMuffins</a>',
    '<a href="https://hatchery.co/lamb-burgers/" target="_blank">Pita Pocket lamb burgers with cucumber and feta</a>',
    '<a href="https://hatchery.co/spicy-bbq-chicken-sandwiches-with-roasted-garlic-slaw/" target="_blank">Spicy Pulled Pork BBQ sandos with roasted garlic slaw</a>',
    'Culinary Workshop Thai Chicken Curry',
    '<a href="https://www.foodandwine.com/blogs/2014/05/22/how-to-seduce-scarlett-johansson-with-spaghetti" target="_blank">Chef movie pasta for Scarlett Johansson</a>',
    '<a href="https://cooking.nytimes.com/recipes/9558-takeout-style-sesame-noodles?action=click&pgtype=sectionfront&module=featuredBand" target="_blank">Take-Out style Sesame Noodles</a>',
    // '<a href="" target="_blank">Template</a>',
  ];

  // For meals
  const sample = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };

  // click on button, find all nodes with message, randomizes from line 43
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const messages = form.querySelectorAll('.message');
    messages.forEach((message) => {
      message.innerHTML = sample(nouns);
    });
  });

  // to print all recipes
  const items = nouns.map((noun) => `<li>${noun}</li>`);
  document.querySelector('.all-recipes').innerHTML = items.join('\n');

})()
