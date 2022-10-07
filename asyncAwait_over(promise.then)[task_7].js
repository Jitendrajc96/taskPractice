//we use Async-await over promises just save the code from promise hell
function buyCar(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('buy a car');
        },4000);
    });
}
function planTrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('lets trip to Manali');
        },3000);
    });
}
function bookRoom(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('Error: Shit!! Our room booking got cancelled');
        },1000);
    });
}
async function asyncCall(){
try{
    const msg1 = await buyCar();
    console.log(msg1);
    const msg2 = await planTrip();
    console.log(msg2);
    const msg3 = await bookRoom();
    console.log(msg3);
} catch(error){
    console.log(error);
    console.log('we have to get back to home now!!');
}
}
asyncCall();
