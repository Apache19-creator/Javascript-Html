// "use strict";

// // console.log(this)

// function namedFunction(){
//     // console.log(arguments);
//     console.log(this.name);

//     let that = this
//     function insideName(){
//         console.log(that)
//     }
//     const insideName =()=>{
//         console.log(this.name)
//     }

//     insideName();
// }
// obj.namedFunction();

// // namedFunction(2,3,4,5);

// const obj ={
//     name: "Dorcas",
//     namedFunction(){
//         console.log (this.name);

//     }

// };
// obj.namedFunction();

// const anotherObj ={
//     name: "Eden",
// };

// anotherObj.namedFunction =obj.namedFunction
// anotherObj.namedFunction()

const person = {
  firstName: "Dorcas",
  lastName: "Seriki Olopolo",
  Gender: "F",
  Age: 18,

  fullname() {
    let self = this;

    const getTitle = () => {
      return this.gender === "F" ? "Mrs." : "Mr.";
    };

    return `${getTitle()} ${this.lastName} ${this.firstName}`;
  },

  // return'${this.gender ==='F'? "Mrs." : "Mr."} ${this.lastName}${this.firstName}';    }
  // },

  isMinor() {
    return this.age < 18;
  },
};

// console.log(person.fullname());

const arr =[1,2,3,4,5,66,7];

arr.forEach(element , index, myself) => {
 console.log (element , index, myself );
    
});

const mainImage = document.querySelector(".main-image")
const images = document.querySelectorAll(".image-thumbnails>img")
console.log(images);

console.log (images);
const.log ("I was clicked")

images.forEach((img) => {