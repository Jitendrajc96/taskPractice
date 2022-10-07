console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

  //it's a person3's Promise to show ticket when wife arrives
  const getTickets = new Promise((resolve, reject) => {  
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 4000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 5000);
  });

  let ticket = await getTickets;

  console.log(`Wife: i got the ${ticket}`);
  console.log(`Husband: we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn} bucket`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);
   
  console.log(`Husband: Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4: shows ticket');
