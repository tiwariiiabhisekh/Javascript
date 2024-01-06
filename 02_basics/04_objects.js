//const tinderUser = new object()      singleton object
const tinderUser = {}                //non singleton object
 
tinderUser.id = "123abc"
tinderUser.name = "abhisekh"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email : "abhisekhkumar941@gmail.com",
    fullname : {
        userfullname : {
            firstname : "abhisekh",
            lastname : "tiwari"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1, obj2}
//console.log(obj3);

//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}

//console.log(obj3);

//database value
const users = [
    {
        id :1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
]

users[1].email
//console.log(tinderUser)
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "abhisekh"
}

// course.courseInstructor
const {courseInstructor : instructor} = course    //  <- Destructuring
//console.log(courseInstructor);
console.log(instructor);
  
           //  API
// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]