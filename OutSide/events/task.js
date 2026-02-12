const EventEmitter  = require('events');
const fs  = require('fs');
const emitter  =new EventEmitter();


const COUNTER_FILE = "./counter.json";

// Load counter
let eventCounter = JSON.parse(fs.readFileSync(COUNTER_FILE, "utf-8"));

// Save counter function
function saveCounter() {
  fs.writeFileSync(COUNTER_FILE, JSON.stringify(eventCounter, null, 2));
}

//define:
//user-login
// const eventCounter ={
//     "user-login":0,
//     "user-purcahse":0,
//     "user-update":0,
//     "user-logout":0,
// }

emitter.on("user-login",(username)=>{
    eventCounter['user-login']++;
    console.log(`${username} is logged-in`);
    saveCounter();
    
});
emitter.emit("user-login","vishal")
//----------------------------------------------------------
//user-purchase
emitter.on("user-purchase",(username,item)=>{
    eventCounter['user-purcahse']++;
    console.log(`${username} is purchase ${item}`);
    saveCounter();
});

emitter.emit("user-purchase","vishal","phone")
//------------------------------------------------------------
//profile-update
emitter.on("profile-update",(username,mail)=>{
    eventCounter['user-update']++;
    console.log(`${username} is updated${mail}`);
    saveCounter();
});
emitter.emit("profile-update","vishal","gmail")
//---------------------------------------------------------
//user-logout
emitter.on("user-logout",(username)=>{
    eventCounter['user-logout']++;
    console.log(`${username} is logged-in`);
    saveCounter();
});

emitter.emit("user-logout","vishal")
//-------------------------------------------------------
emitter.on("summary",()=>{
    console.log(eventCounter);
})

emitter.emit("summary")
