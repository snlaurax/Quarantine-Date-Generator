
//stores the outside idea 
const ideain = document.getElementById('ideabutton2');

function indoorDate(event) {
  const number = Math.floor(Math.random() * 31)+1;
  var btn = document.getElementById("ideabutton2");
  var img = document.getElementById("image");

  switch (number) {
    case 1:
      btn.value = 'go on a picnic'; // will just add a hidden value
      btn.innerHTML = 'finish our puzzle HAHA';
      img.src="may13.jpg";

      break;
      
    case 2:
      btn.value = 'go on a picnic'; // will just add a hidden value
      btn.innerHTML = 'play super smash bros';
      img.src="may14.jpg";

      break;
   
    case 3:
      btn.value = 'go on a picnic'; // will just add a hidden value
      btn.innerHTML = 'just dance competition again bc u suck ugh';
      break;
 
    case 4: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
        btn.innerHTML = 'read together and pretend were at a bookstore';
        break;

    case 5: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'make korean corndogs/cook/bake';
      img.src="may15.jpg";

      break;

    case 6: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'play ping pong🏓';
      img.src="may16.png";

      break;

    case 7: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'pick out our favourite pics and get them printed/framed';
      img.src="may17.png";
      break;

    case 8: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'play kahoots';
                  img.src="comic4.jpeg";

      break;
   
    case 9: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'go through old yearbooks/photo albums';
      img.src="may18.jpg";
      break;

    case 10: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'have a 2 person dance party :D';
      img.src="may19.jpg";
      break;

    case 11: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'teach me how to play monopoly go';
      break;

    case 12: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'play chess♚';
      break;

    case 13: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'pillow fight!!!!';
      img.src="may20.png";
      break;

    case 14: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'practice wrestling/self defense';
                  img.src="comic5.gif";

      break;


    case 15: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'paint mugs or pots then buy seeds';
      img.src="may21.jpg";
      break;
    
    case 16: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'lets send letters to people📝';
      break;
   
    case 17: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'make our own pizzas together';
      img.src="may22.jpg";
      break;
    
    case 18: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'watch a horror movie';
      break;
 
    case 19: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'play hide and seek🙈';
      img.src="may23.jpg";
      break;

    case 20: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'make a bird feeder together🦅';
       img.src="may27.jpg";
      break;

    case 21: 
      btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'lets learn how to do magic tricks';
      img.src="may24.jpg";
      break;

    case 22: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'make bubble tea from scratch';
      break;

    case 23: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'colour together';
      break;

    case 24: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'make an obstacle course and race';
      break;

case 25: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'invent a writing code and write a letter to eachother with it';
      img.src="may25.jpg";
      break;

    case 26: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'lets try meditating LOL like nathaniel drew';
      break;

    case 27: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'WRITE A SONG PLS DONT IGNORE';
      break;

    case 28: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'do origami together';
      break;
    
    case 29: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'play piano or laura listens to harrison play bc she loves that🎧';
      break;

    case 30: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'teach laura how to play mahjong';
      break;

    case 31: 
       btn.value = 'bike to a garden store and look at plants'; // will just add a hidden value
      btn.innerHTML = 'learn chinese hehe <3';
      break;

    default:
      btn.value = 'hehe'; // will just add a hidden value
      btn.innerHTML = 'hopefully this wont happen LMAO';
    // code block
  }
}

ideain.onclick = indoorDate;
