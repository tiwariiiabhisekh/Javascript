// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Hitesh",
    "full name":"hitesh choudhary",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","Saturday"]
}
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email="hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
//console.log(JsUser)

JsUser.greeting=function(){
    console.log(`hello JS user`);
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());