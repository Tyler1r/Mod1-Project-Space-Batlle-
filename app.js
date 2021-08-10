 
//  const USSShwartz = {

//     hull: 20,
//     firepower :'5',
//     accuracy: '.7'
     

     

//      }
// this needs run a 'check win' for the health of the alien(s) and/or the USS Schwarzenegger
//  check_win =() => {
//      if(USSShwartz hull <= 0  ){
//          console.log("ship went kablooey")
//      }
//     }


    // 

// Make a method for the alien ship to attack a target. At a status console log for the end of the round.
// while ---> ship hull > 0; =-2
// attackFuunction = () => {
//      while(i = 20 ; i >= 0; i =-2 ){
//          console.log("you have 18 hull points left")
//      }
// }


// var choiceone = prompt("Choose to attack or flee")
// if(attackFunctionone()){
//       console.log(20  -  Math.floor(Math.random() * 3) + 2)
    //  20 is the ships health 
    // math.floor is the firepower function for the enemy aliens  

 

 
 
 
 
 
 class Ships {
     constructor(hull,firepower,accuracy){
         this.hull=hull || Math.floor(Math.random() * 4) + 3,
         this.firepower=firepower || Math.floor(Math.random() * 3) + 2;
         this.accuracy=accuracy || (Math.floor(Math.random() * 3) + 6) / 10;
         this.name = "enemy Shipper"
     }
     
     //for(i = 20; i >=0 ; i=-Math.floor(Math.random() * 3) + 2);
     
     attackFunctionone = () => { 
        if(Math.random() <= this.accuracy){
            this.hull -= enemyships[0].firepower
        }
            console.log("you have been hit")
            alert("you have been hit!")
}





// var uSS = new Ships(5, 20, .7)


// console.log(uSS);

// Math for hull, fire power and accurazy 

// var hull = Math.floor(Math.random() * 4) + 3
// var firepower = Math.floor(Math.random() * 3) + 2;
// var accuracy = (Math.floor(Math.random() * 3) + 6) / 10;

// need to make an empty array to push enemy ships into 
var enemyShipArr = [];

for(i = 1 ; i <= 6 ; i++){


var hull = Math.floor(Math.random() * 4) + 3
var firepower = Math.floor(Math.random() * 3) + 2;
var accuracy = (Math.floor(Math.random() * 3) + 6) / 10;

var enemyships = new Ships(hull,firepower,accuracy)
var USSShwartz = new Ships(20, 5 , .7)

//console.log(USSShwartz)

enemyShipArr.push(enemyships)

console.log(enemyships)

}

 //attackFunctionone = () => { //for(i = 20; i >=0 ; i=-Math.floor(Math.random() * 3) + 2);
    if(i >= 0){
        console.log("you have been hit")
        
}
else(i === 0 )
// console.log("you have lost")
console.log("you have lost")

}

attackFunctionone()
// this attack function does work!

// since this attack function works now, I need to make this able to attack the 6 
// enemy ships in  a for loop 

// While the main USS SHIP still has health( hull 20 ) continue to attack enemy ships 

//  attackFunction = () => { if(Math.random() < enemyShipArr[0].accuracy){
//  console.log('You have been hit!')
//  alert("you have been hit"); }
//  else{
//      console.log("you have missed")
//      alert("you have missed ")

//  }
//  }


 

// now we have the array , we need to make the fist attack function!
// which is the if (Math.random() < alien[0].accuracy) { console.log('You have been hit!'); }


// variable set to make new enemy ship
// var enemyShip = new Ships

// the code to push the enemy ship into the array 
// enemyShipArr.push(enemyShip);

// function to for attacking 
// attackFunction(){
//     if (Math.random() < enemyShipArr[0].accuracy) { console.log('You have been hit!'); 
//     }
    
// }



 


// class Aliens  {
//     constructor(hull,firepower,accuracy){
//         this.hull=hull
//         this.firepower=firepower
//         this.accuracy=accuracy
//     }
// }

// var attack_ship =()=>{
//     if(Math.random() < alien1[0].accuracy) { console.log('You have been hit!');
    

// }
// }
// var alien1 = new Aliens(4,3,.7)

// attackShip()

// console.log(alien1)





// step 1 create alert that says start game 
// once you push start game , the USS attacks the alien ship
