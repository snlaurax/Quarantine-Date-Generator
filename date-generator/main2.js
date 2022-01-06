
//stores the outside idea 
const ideaout = document.getElementById('ideabutton');

function outdoorDate(event) {
  const number = Math.floor(Math.random() * 31)+1;
  var btn = document.getElementById("ideabutton");
  var img = document.getElementById("image");

  switch (number) {
    case 1:
      btn.value = 'go on a picnic'; // will just add a hidden value
      btn.innerHTML = 'Go on a picnic!';
      img.src="may1.jpg";
      break;
      
    case 2:
      btn.value = 'go on a picnic'; // will just add a hidden value
      btn.innerHTML = 'Buy canvases and paint outside 👨‍🎨';
      break;
   
    case 3:
      btn.value = 'go on a picnic'; // will just add a hidden value
      btn.innerHTML = 'Have a watergun fight ☀️';
      img.src="H+L1.jpg";
      break;
 
    case 4: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
        btn.innerHTML = 'bike to a garden store and buy eachother a plant 🌼';
        break;

    case 5: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'lets sit outside and read something from the Bible :)';
      img.src="H+L2.jpg";

      break;

    case 6: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'i know LOTS of places dt so just suggest that we go somewhere hehe';
      break;

    case 7: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'lets go to the courts and ball 🏀';
      img.src="H+L3.jpg";
      break;

    case 8: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'play tennis 🎾';
      break;
   
    case 9: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'pick up litter 💚';
      img.src="may2.jpg";

      break;

    case 10: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'BEACH DAY BABY';
      break;

    case 11: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'have a two person campfire🔥';
            img.src="may3.jpg";

      break;

    case 12: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'go fruit picking 🍓';
      break;

    case 13: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'go mini golfing/golf range 🏌️‍♂️';
                  img.src="may4.jpg";

      break;

    case 14: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'collect rocks and paint them';
      break;


    case 15: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'tie dye tshirts together👔';
      img.src="may5.jpg";

      break;
    
    case 16: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'bring laptop to the park and watch something';
      img.src="may6.jpg";
      break;
   
    case 17: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'make twig sailboats and race them';
      break;
    
    case 18: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'suggest that we bike somewhere to go eat';
      img.src="may7.jpg";
      break;
 
    case 19: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'play soccer (idek how so teach me)⚽️';
      break;

    case 20: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'go shopping/thrifting';
      img.src="may8.jpg";
      break;

    case 21: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'lets make/buy a kite and fly it';
      break;

    case 22: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'outdoor movie screening!!';
      img.src="may9.jpg";
      break;

    case 23: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'go to Edwards garden';
      break;

    case 24: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'ive always dreamt of going to a ballet show🕺';
      break;

case 25: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'go on a couple photoshoot with ourselves';
      img.src="may10.jpg";
      break;

    case 26: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'go to ikea, browse and eat';
                        img.src="may26.jpg";

      break;

    case 27: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'bowling date!🎳';
                  img.src="comic3.jpeg";

      break;

    case 28: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'go to legoland (or we can buy lego and build it)';
                  img.src="comic2.jpeg";

      break;
    
    case 29: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'chill in pmall area pretending we in china';
      img.src="may11.jpg";
      break;

    case 30: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'tandem biking🚴‍♂️';
            img.src="comic1.jpeg";

      break;

    case 31: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'indoor rock climbing';
      img.src="may12.png";

      break;

    default:
      btn.value = 'hehe'; // will just add a hidden value
      btn.innerHTML = 'hopefully this wont happen LMAO';
    // code block
  }
}

ideaout.onclick = outdoorDate;
