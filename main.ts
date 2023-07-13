// Problem 2 Personal Message
let name2:string = "Sameed Ahmed";
console.log("Hello " + name2 + ", would you like to learn some Python today?\n");

// Problem 3 Name Cases

let name3:string = "Sameed Ahmed"
console.log(name3.toUpperCase());
console.log(name3.toLowerCase());
const CaseCapital:string = name3.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(CaseCapital+"\n")

// Problem 4 Famous Quote

let name4quote:string = "It is possible for ordinary people to choose to be extra ordinary";
console.log("Elon Musk" + ' once said,' +' "'+name4quote+'"\n');

//Problem 5 Famouse Quote2
let famous_person:string = "Elon Musk"
let message:string = famous_person + ' once said, "It is possible for ordinary people to choose to be extra ordinary"'
console.log(message+'\n');

//Problem 6 Stripping names
// let name6 = "Sameed Ahmed"


// Problem 7 Number Eight
console.log(4+4);
console.log(10-2);
console.log(4*2);
console.log(16/2+'\n');

// Problem 9 
let fav_num:number = 10;
let mess:string = "My fav number is " + fav_num + "!";
console.log(mess+'\n');

// Problem 11 Names
const names:string[] = ['Ronaldo','Messi']
for (let i=0; i<names.length;i++){
   console.log(names[i])
}
console.log('\n')


// Problem 12 Greetings
let personalized_message:string = 'Best Player'
for (let i=0; i<names.length;i++){
   console.log(names[i]+' '+personalized_message)}
console.log('\n')

// Problem 13 your own array
const cars:string[] = ['BMW','Bugatti','Honda']
for (let i=0; i<cars.length;i++){
   console.log('I would like to own a '+cars[i])}
console.log('\n')

// Problem 14 Guest list
const guest:string[] = ['Albert','Elon','Top G']
const personalized_message_guests :string[] = ['Scientist','Innovator','TOPG']
for (let i=0; i<guest.length;i++){
   console.log('I would like to invite '+guest[i] + ' '+personalized_message_guests[i])}
console.log('\n')

// Problem 15 Chaning Guest list
guest[0] = 'Ronaldo'
const personalized_message_guests_change:string[] = ['Best Player','Innovator','TOPG']
for (let i=0; i<cars.length;i++){
   console.log('I would like to invite '+guest[i] + ' '+personalized_message_guests_change[i])}
console.log('\n')

// Problem 14 Continued
guest[0] ='Albert'
for (let i=0; i<guest.length;i++){
   if (guest[i] == 'Albert'){
      console.log('Cant make it '+guest[i] + ' '+personalized_message_guests[i])}
   else {
      console.log('I would like to invite '+guest[i] + ' '+personalized_message_guests[i])}
   }
console.log('\n')

// Problem 14 continued
guest[0] = 'Ronaldo'

// Problem 14 continued
for (let i=0; i<guest.length;i++){
   console.log('I would like to invite '+guest[i] + ' '+personalized_message_guests_change[i])}
console.log('\n')

// Problem 16 More Guest
for (let i=0; i<cars.length;i++){
   console.log('I have found a bigger table '+guest[i] + ' '+personalized_message_guests_change[i])}
console.log('\n')

// Prblem 16 continued
guest.unshift('Imran Khan')
let start:number = 2
let deleteCount:number = 0;
guest.splice(start,deleteCount,'Babar')
guest.push('Trump')

const new_invites:string[] = ['Leader','Best Player','Batsmen','Inventor','TopG','President']
for (let i=0; i<guest.length;i++){
   console.log(guest[i] + ' ' + new_invites[i])}
console.log('\n')

// Problem 17
for (let i=0; i<guest.length;i++){
   console.log('I can only invite 2 peoples ' +guest[i])}
console.log('\n')

for (let i=guest.length-1; i>=2;i--){
   console.log('I am sorry, I cant invite you ' + guest[i]);
   guest.pop();}
console.log('\n')

for (let i=0; i<guest.length;i++){
   console.log('you are still invited ' + guest[i]);}

console.log('\n')
guest.pop()
guest.pop()

console.log(guest)

// Problem 18 Seeing the world

const places:string[] = ['Turkey','Kashmir','Bali','England']
for (let i=0; i<places.length;i++){
   console.log(places[i])
}
console.log('\n')

let sorted_guest:string[] = [...places].sort();

console.log(places)

console.log(sorted_guest.reverse())

console.log(places)

console.log(places.reverse())

console.log(places.reverse())

console.log(places.sort())

console.log(places.reverse())

// Problem 19 Dinner Guest

const guest2:string[] = ['Ronaldo','Messi']
console.log(guest2.length)

// Problem 20 

const cities:string[] = ['Karachi','New York','London']
console.log(cities);
console.log('\n')

// Problem 21

interface City{
    name:string;
    population:number;
    country:string;
}

const city_ : City={
    name:'London',
    population:898200,
    country:'UK'
}

// Problem 22 Intentional Error

console.log(city_[3])

// Problem 23 Conditional Test

let car:string = 'subaru';
console.log("Is car == 'subaru'? | predict True")
console.log(car == 'subaru')



// Problem 24 More conditional test

let car2:string = 'bmw'
let car3:string = 'subaru'
console.log(car===car2)
console.log(car===car3)

console.log(car.toUpperCase()==car3)

let a:number = 2;
let b:number = 3;

console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)

console.log(a<b && a%2==0)
console.log(a>b || a%2==0)

const fruits:string[] = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Watermelon"))

console.log(fruits.includes("Banana",1))

console.log(!fruits.includes("Banana"))


// Problem 25 Alien Color # 1

var alien_color:string = 'green'

if (alien_color=='green') {
   console.log("Player just earned 5 points")
}
else {}

// Problem 26 Alien color # 2

var alien_color:string ='green'
if (alien_color=='green'){
   console.log("Player just earned 5 points")
}
else if (alien_color!='green'){
   console.log("Player just earned 10 points")
}
console.log('\n')

// Problem 27 Alien color # 3

let alien_colors:string[] = ['green','yellow','red']

for (let i = 0; i<alien_color.length;i++){
   if (alien_colors[i]=='green'){
      console.log("Player just earned 5 points")
   }
   else if (alien_colors[i]=='yellow'){
      console.log("Player just earned 10 points")
   }
   else if (alien_colors[i]=='red'){
      console.log("Player just earned 15 points")
   }
}

// Problem 28 Stages of life 

var age:number = 20;

if (age<2) {
   console.log("person is a baby")
}
else if (age>=2 && age<4){
   console.log("person is toddler")
}
else if (age>=4 && age<13){
   console.log("person is a kid")

}
else if (age>=13 && age<20){
   console.log("person is a teenage")
}
else if (age>=20 && age<65){
   console.log("person is adult")
} 
else if (age>=65){
   console.log("person is old")
}

// Problem 29 favorite fruit

var z:string = 'Banana'
const fav_fruits:string[] = ['Mango','Banana','Watermelon']
if (fav_fruits.includes(z)){
   console.log("you really like "+z)
}
console.log('\n')

// Problem 30 Hello Admin:

var users:string[] = ['admin','user1','user2','user3','user4'];
for (let i=0;i<users.length;i++){
   if (users[i] == 'admin'){
      console.log("Hello admin, would you like to see report")
   }
   else {
      console.log("Hello "+users[i]+" thank you for logging in")
}}

// Problem 31 No users

if (users.length<1){
   console.log("we need more users")
}

var users:string[] = [];

if (users.length<1){
   console.log("we need more users")
}

// Problem 32 checking username

var current_users:string[] = ['user1','user2','user3','user4','user5'];
var new_users:string[] = ['user6','USER2','user1','user7','user8'];

for (let i=0;i<new_users.length;i++) {
   if (current_users.includes(new_users[i].toLowerCase())){
      console.log("Enter new username\n")
   }
   else {
      console.log("Username is available\n")
   }
}

// Problem 33 Ordinal Numbers

var number:number[] = [1,2,3,4,5,6,7,8,9];
for (let i=0;i<number.length;i++){
   if (number[i]==1){
      console.log(number[i]+'st')
   }
   else if (number[i]==2){
      console.log(number[i]+'nd')
   }
   else if (number[i]==3){
      console.log(number[i]+'rd')
   }
   else if (number[i]>3){
      console.log(number[i]+'th')
   }
}

// Problem 34 Pizza

var fav_pizza:string[] = ["Pepporoni","Fajita","Special"];
for (let i=0;i<fav_pizza.length;i++){
   console.log("I like "+fav_pizza[i])
}

// Problem 35 Animals

var animals:string[] = ['dog','cat','lion'];
for (let i =0;i<animals.length;i++){
   console.log("A "+animals[i]+" would make a great pet")
   
}
console.log("Any of these pets can be a great pet")


// Problem 36 T-Shirt

function make_shirt2(size:number,text:string):void {
   console.log(size,text);
}

make_shirt2(23,"hello")

// Problem 37 Large Shirts

function make_shirt_large(Large:number,text:string):void{
   console.log(Large,text)
}

make_shirt_large(50,"I love typescript")
make_shirt_large(12,"Hello")

// Problem 38 Cities

function describe_city(city:string,country:string):void{
   console.log(city+" is in "+country)
}

describe_city('karachi','Pakistan')
describe_city('lahore','Pakistan')

// Problem 39 city names

function city_country(city:string,country:string):void{
   console.log(city+","+country)
}

city_country('karachi','pakistan')
city_country('lahore','Pakistan')
city_country('London','Uk')

// Problem 40 Album

interface Album {
    artist:string;
    albumtitle:string;
    tracks?:number;
}

function make_album(artist:string, albumTitle:string, numTracks?:number):Album {
   const album : Album= {
     artist: artist,
     albumtitle: albumTitle
   };
 
   if (numTracks) {
     album.tracks = numTracks;
   }
 
   return album;
 }
 
 // Example usage
 const album1:object = make_album('Artist A', 'Album 1');
 console.log(album1);
 
 const album2:object = make_album('Artist B', 'Album 2');
 console.log(album2);
 
 const album3:object = make_album('Artist C', 'Album 3', 12);
 console.log(album3);

 
 // Problem 41 Magicians

 var Magicians:string[] = ['Chris','Biden','Shahruk'];

 function show_magicians_(magic:string[]):void{
   for (let i=0;i<magic.length;i++){
      console.log(magic[i]);
   }
 }

 show_magicians_(Magicians);

 // Problem 42 Great Magicians

 var Magicians_:string[] = ['Chris','Biden','Shahruk'];
 function show_magicians__(magic:string[]):void{
   for (let i=0;i<magic.length;i++){
      console.log(magic[i])
   }
 }
 show_magicians__(Magicians_)

 function make_great(magic:string[]):void{
   for (let i=0;i<magic.length;i++){
      console.log("The great magician "+magic[i])
   }
 }
 make_great(Magicians_)

 // Problem 43 Unchanged Magicians

//  const new_magicians = make_great(Magicians)
//  show_magicians(new_magicians)
//  show_magicians(Magicians)

// Problem 44 Sandwiches

function make_sandwich(items:string[]):void{
   for (let i=0;i<items.length;i++){
      console.log("The great magician "+items[i])
   }
}
make_sandwich(['tomamto','onion','potatto\n'])
make_sandwich(['lettuce','mango','banana\n'])
make_sandwich(['jallepeno','watermelon','cheese\n'])

// Problem 45 Cars

interface Cars1{
    manufacturer:string;
    model:string;
    [key:string]:any;
}

function createCar(manufacturer:string,model:string,...args:any[]): Cars1{
    const car_: Cars1 ={
        manufacturer:manufacturer,
        model:model
    };
    args.forEach((arg,index)=>{
        if (index%2==0 && typeof arg=='string'){
            const key =arg;
            const value = args[index+1];
            car[key]=value;
        }
    });
    return car_
}
const myCar = createCar('Tesla', 'Model S', 'color', 'red', 'optional_feature', 'autopilot');

// Print the object to verify the stored information
console.log(myCar);
