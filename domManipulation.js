// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {

myName.innerHTML="My name is Stephanie!";
myHobby.innerHTML="I like to do arts and crafts";
myLocation.innerHTML="I live in Queens";


});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener ("click",function(){
  image.src= "https://m.media-amazon.com/images/S/pv-target-images/ce8c15666ad504500a868c77165d3f1f9cfecda3d7970d27ae134cfff2a1d85f.jpg"; 
})




// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener("mouseover",function(){
  image.src= "https://lumiere-a.akamaihd.net/v1/images/pooh_baeb7dc6.jpeg?region=410,0,1229,1229";
})

// BONUS
// 7. Try using different event types for your buttons.
 