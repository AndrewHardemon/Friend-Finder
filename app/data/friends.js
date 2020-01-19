//Save all app data inside of 'app/data/friends.js' as an array of objects
//this is the format


//var nextFriend = require("../public/survey.html")
//var nextFriend = localStorage.getItem("newGuystored")

var friends = [
  {
    name:"Bob",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[
      5,1,4,4,5,1,2,5,4,1
    ]
  },
  {
    name:"Jeff",
    photo:"https://www.pitzer.edu/academics/wp-content/uploads/sites/38/2014/12/FAC-Jeff-Lewis.jpg",
    scores:[
      2,4,1,1,1,3,4,5,2,2
    ]
  },
  {
    name:"Bigboy",
    photo:"https://www.peta.org/wp-content/uploads/2018/09/big-boy-2.jpg",
    scores:[
      5,5,5,5,5,5,5,5,5,5
    ]
  },
  {
    name:"Alfred",
    photo:"https://space.mines.edu/wp-content/uploads/sites/134/2018/10/bill-eustes.jpeg",
    scores:[
      4,5,3,2,3,4,5,1,2,5
    ]
  }
];

module.exports = friends;