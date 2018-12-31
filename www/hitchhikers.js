const DEFAULT_TEXT = "Don't Panic!";
const DEFAULT_TEXT_SIZE = "10vw";

let  index = 0;
const text = [
  "Space is big. Really big. You just won't believe how vastly hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist, but that's just peanuts to space.", 
  "The Hitchhiker's Guide to the Galaxy is a wholly remarkable book. Perhaps the most remarkable, certainly the most successful book ever to come out of the great publishing corporations of Ursa Minor, more popular than the Celestial Home Care Omnibus, better selling than Fifty-Three More Things to do in Zero Gravity, and more controversial than Oolon Colluphid's trilogy of philosophical blockbusters, \"Where God Went Wrong\", \"Some More of God's Greatest Mistakes\", and \"Who is this God Person Anyway?\" It's already supplanted the Encyclopedia Galactica as the standard repository of all knowledge and wisdom, for two important reasons. First, it's slightly cheaper; and secondly it has the words DON'T PANIC printed in large friendly letters on its cover.", 
  "The best drink in existence is the Pan Galactic Gargle Blaster. The effect of a Pan Galactic Gargle Blaster is like having your brains smashed out by a slice of lemon wrapped round a large gold brick.", 
  "A towel is about the most massively useful thing an interstellar hitchhiker can have. Partly it has great practical value: you can wrap it around you for warmth as you bound across the cold moons of Jaglan Beta; you can lie on it on the brilliant marble‐sanded beaches of Santraginus V, inhaling the heady sea vapours; you can sleep under it beneath the stars which shine so redly on the desert world of Kakrafoon; use it to sail a mini raft down the slow heavy river Moth; wet it for use in hand‐to‐hand‐combat; wrap it round your head to ward off noxious fumes or to avoid the gaze of the Ravenous Bugblatter Beast of Traal (a mindbogglingly stupid animal, it assumes that if you can't see it, it can't see you - daft as a bush, but very ravenous); you can wave your towel in emergencies as a distress signal, and of course dry yourself off with it if it still seems to be clean enough.", 
  "More importantly, a towel has immense psychological value. For some reason, if a strag (a nonhitchhiker) discovers that a hitchhiker has his towel with him, he will automatically assume that he is also in possession of a toothbrush, washcloth, soap, tin of biscuits, flask, compass, map, ball of string, gnat spray, wet-weather gear, space suit etc., etc. Furthermore, the strag will then happily lend the hitchhiker any of these or a dozen other items that the hitchhiker might have accidentally \"lost.\". What the strag will think is that any man that can hitch the length and breadth of the Galaxy, ruff it, slum it, struggle against terrible odds, win through and still know where his towel is, is clearly a man to be reckoned with.", 
  "Hence a phrase that has passed into hitchhiking slang, as in \"Hey, you sass that hoopy Ford Prefect? There's a frood who really knows where his towel is.\" (Sass: know, be aware of, meet, have sex with; hoopy: really together guy; frood: really amazingly together guy.)", 
  "Vogon Constructor Fleets. Here is what to do if you want to get a lift from a Vogon: forget it. They are one of the most unpleasant races in the Galaxy--not actually evil, but bad-tempered, officious and callous. They wouldn't even lift a finger to save their own grandmothers from the Ravenous Bugblatter Beast of Traal without orders signed in triplicate, sent in, sent back, queried, lost, found, subjected to public inquiry, queried, lost again, and finally buried in soft peat for three months and recycled as firelighters. Beast of Traal. On no account let a Vogon read poetry to you.", 
  "The Babel fish is small, yellow and leech-like, and probably the oddest thing in the Universe. It feeds on brainwave energy received not from its own carrier but from those around it. It absorbs all unconscious mental frequencies from this brainwave energy to nourish itself with. It then excretes into the mind of its carrier a telepathic matrix formed by combining the conscious thought frequencies with nerve signals picked up from the speech centres of the brain which has supplied them. The practical upshot of all this is that if you stick a Babel fish in your ear you can instantly understand anything in any form of language. The speech patterns you actually hear decode the brainwave matrix which has been fed into your mind by your Babel fish. \"Now it is such a bizarrely improbable coincidence that anything so mindbogglingly useful could have evolved purely by chance that some thinkers have chosen to see it as the final and clinching proof of the non-existence of God. \"The argument goes something like this: 'I refuse to prove that I exist,' says God, 'for proof denies faith, and without faith I am nothing.' \"'But,' says Man, 'the Babel fish is a dead giveaway, isn't it? It could not have evolved by chance. It proves you exist, and so therefore, by your own arguments, you don't. QED.' \"'Oh dear,' says God, 'I hadn't thought of that,' and promptly vanishes in a puff of logic. \"'Oh, that was easy,' says Man, and for an encore goes on to prove that black is white and gets himself killed on the next pedestrian crossing. \"Most leading theologians claim that this argument is a load of dingo's kidneys, but that didn't stop Oolon Colluphid making a small fortune when he used it as the central theme of his bestselling book, Well, That About Wraps It Up For God. \"Meanwhile, the poor Babel fish, by effectively removing all barriers to communication between different races and cultures, has caused more and bloodier wars than anything else in the history of creation.", 
];

function isFullscreen() {
  return !document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement;
}

function toggleFullScreen() {
  if (isFullscreen()) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function resizeText() {

  const textContainer = document.querySelector('#text-container');
  const mainContainer = document.querySelector('#main-container');

  textContainer.style.fontSize = DEFAULT_TEXT_SIZE;

  while (true) {
    let innerHeight = textContainer.offsetHeight;
    let outerHeight = mainContainer.clientHeight;

    if (innerHeight < outerHeight) {
      break;
    }

    const currentFontSize = window.getComputedStyle(textContainer).fontSize;

    const newFontSize = (parseFloat(currentFontSize) - 1) + 'px';

    textContainer.style.fontSize = newFontSize;
  }
}

function setText(newText) {
  const textContainer = document.querySelector('#text-container');
  if (newText) {
    textContainer.innerText = newText;
    textContainer.classList.remove('with-text-stroke');

  } else {
    textContainer.innerText = DEFAULT_TEXT;
    textContainer.classList.add('with-text-stroke');
  }

  resizeText();
}

let status = "dontpanic";

window.addEventListener('load', function() {

  const fullscreenController = document.querySelector('#fullscreen');

  fullscreenController.addEventListener('click', function(event) {
    toggleFullScreen();
  });

  function handleStatusChange() {
    if (!isFullscreen()) {
      fullscreenController.classList.add('hidden');
    } else {
      fullscreenController.classList.remove('hidden');
      responsiveVoice.cancel();
    }
    
  }

  document.addEventListener('webkitfullscreenchange', handleStatusChange);
  document.addEventListener('mozfullscreenchange', handleStatusChange);
  document.addEventListener('fullscreenchange', handleStatusChange);
 
  const mainContainer = document.querySelector('#main-container');

  mainContainer.addEventListener('click', function(e) {

    responsiveVoice.CHARACTER_LIMIT = 1000;

    if (status === "dontpanic") {
      const newText = text[index];
      
      setText(newText);
      
      const speechText = newText.split(/\. |, |; |\? |! /);
      
      responsiveVoice.speak(newText, 'UK English Male', { rate: 0.9 });
      
      status = "speaking";
      
      index = (index + 1) % text.length;
  
    } else {
      setText();
      responsiveVoice.cancel();
      status = "dontpanic";
    }
  });

  document.addEventListener('visibilitychange', function(e) {
    if(document.hidden) {
      responsiveVoice.cancel();
    }
  });
});

window.addEventListener('resize', resizeText);

