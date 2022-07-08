// Steps
(async () => {
  
   // fetch API, which takes some time
	const apiURL =	"https://store.zapier.com/api/records?secret=814446f8-a251-42eb-871a-f2a20dd15664";
  
  // create object to get all the data, incl wrapper
  const resp = await fetch(apiURL)
  
  // create object that performs function on data (json)
  const json = await resp.json()
  const steps = json.steps.list[0].split("|||")
  
  // calling a function and a function around it
  // alert = function, steps = array
  

  // For exercises
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
      message.innerHTML = sample(steps);
    });
  });

  // to print all exercises
  const items = steps.map((step) => `<li>${step}</li>`);
  document.querySelector('.all-recipes').innerHTML = items.join('\n');

})()