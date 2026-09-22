import heroLoveImage from '../assets/love/hero.jpeg';
import firstLoveImage from '../assets/love/First.jpeg';
import secondLoveImage from '../assets/love/Second.jpeg';
import thirdLoveImage from '../assets/love/third.jpeg';
import fourthLoveImage from '../assets/love/Fourth.jpeg';
import fifthLoveImage from '../assets/love/fifth.jpeg';
import sixthLoveImage from '../assets/love/sixth.jpeg';
import finalLoveImage from '../assets/love/final.jpeg';

/**
 * CENTRALIZED ROM-COM COUPLE CONFIGURATION
 * Edit names, photos, stories, questions, and letter here.
 */

export const romcomData = {
  couple: {
    partner1: 'Pratham',
    partner2: 'Vini',
    displayNames: 'PRATHAM + VINI',
  },

  // Splash Screen
  splashScreen: {
    video: '/splashscreen.mp4',
    badge: 'AN UNOFFICIAL LOVE STORY 🎬',
    title: 'Somehow, we became a whole story.',
    cta: 'ENTER OUR STORY →',
    skipText: 'Skip to story',
  },

  // Hero Section
  hero: {
    label: 'AN UNOFFICIAL LOVE STORY',
    heading: 'Somehow, we became a whole story.',
    handwrittenNote: "and honestly... we're obsessed.",
    photo: heroLoveImage,
    cta: 'ENTER OUR STORY →',
  },

  // Opening Scene (Home Screen after Splash)
  openingScene: {
    tag: 'SCENE 01',
    heading: 'How it all started.',
    photo: heroLoveImage,
    lead: 'When we first met, I never thought you’d become such an important part of my life.',
    story: 'Somehow, we got this close… and here we are.',
    annotation: 'plot twist:\nit actually\nworked.',
  },

  // Section 03 — Our Lore (Timeline)
  lore: [
    {
      id: 'lore-1',
      title: 'THE FIRST HELLO',
      date: 'Chapter I',
      description: 'A harmless exchange of messages that accidentally led to staying awake until the sky started turning blue.',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 'lore-2',
      title: 'THE FIRST HANGOUT',
      date: 'Chapter II',
      description: 'Pretending to have zero expectations while secretly hoping this wouldn’t be awkward. It was not awkward at all.',
      photo: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 'lore-3',
      title: 'THE FIRST REAL DATE',
      date: 'Chapter III',
      description: 'Shared a meal, argued about which food was superior, and stayed talking until the cafe started wiping the tables.',
      photo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 'lore-4',
      title: 'THE RANDOM DAY WE STILL TALK ABOUT',
      date: 'Chapter IV',
      description: 'No reservations, no itinerary. Just driving around, bad singing, and crying from laughing in a supermarket aisle.',
      photo: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 'lore-5',
      title: 'THE MOST CHAOTIC DAY',
      date: 'Chapter V',
      description: 'Everything that could possibly go wrong went wrong, yet somehow it ended up being one of our favorite memories.',
      photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 'lore-6',
      title: 'THE CORE MEMORY',
      date: 'Chapter VI',
      description: 'Sitting beside you in silence and realizing that home is not a place, but a person sitting next to you.',
      photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80',
    },
  ],

  // Section 04 — Camera Roll (Pinterest Collage)
  cameraRoll: [
    {
      id: 'cr-1',
      title: 'main characters',
      caption: 'Main characters in our own indie rom-com.',
      image: firstLoveImage,
      aspect: 'aspect-3/4',
      rotate: '-rotate-1',
      fit: 'object-contain',
      position: 'object-center',
    },
    {
      id: 'cr-2',
      title: 'no context',
      caption: 'Zero explanation will ever be provided for this.',
      image: secondLoveImage,
      aspect: 'aspect-4/5',
      rotate: 'rotate-2',
      fit: 'object-contain',
      position: 'object-center',
    },
    {
      id: 'cr-3',
      title: 'core memory',
      caption: 'The lighting was good, but the vibes were better.',
      image: thirdLoveImage,
      aspect: 'aspect-4/5',
      rotate: '-rotate-2',
      fit: 'object-contain',
      position: 'object-center',
    },
    {
      id: 'cr-4',
      title: 'we looked cute here',
      caption: 'Rare footage of both of us looking like civilized adults.',
      image: fourthLoveImage,
      aspect: 'aspect-3/4',
      rotate: 'rotate-1',
      fit: 'object-contain',
      position: 'object-center',
    },
    {
      id: 'cr-5',
      title: 'why do we look like this?',
      caption: 'Two chaotic minds sharing half a collective braincell.',
      image: fifthLoveImage,
      aspect: 'aspect-4/5',
      rotate: '-rotate-1',
      fit: 'object-contain',
      position: 'object-center',
    },
    {
      id: 'cr-6',
      title: 'this one stays.',
      caption: 'A permanent fixture in the favorites album.',
      image: sixthLoveImage,
      aspect: 'aspect-4/5',
      rotate: 'rotate-2',
      fit: 'object-contain',
      position: 'object-center',
    },
  ],

  // Section 05 — The Chaos Report (Statistics)
  chaosReport: {
    heading: 'THE CHAOS REPORT',
    subtitle: "Scientifically speaking, we're a little ridiculous.",
    stats: [
      {
        value: '∞',
        label: 'Inside jokes',
        note: 'Speaking our own dialect at this point.',
      },
      {
        value: 'Too many',
        label: 'Food arguments',
        note: 'you should take healthy food avoid snacks , add salad curd and alll ufff',
      },
      {
        value: '99%',
        label: 'Snaps & random videos',
        note: 'me taking unnecessay snaps and random videos of yours bcz you are too cutu and suar',
      },
      {
        value: '100%',
        label: 'Lectures & gyan',
        note: 'You were always giving me lectures basically gyan about the world, and end up on my food',
      },
      {
        value: '∞',
        label: 'Favourite dialogue',
        badge: '🔫 favourite dialogue',
        emoji: '💥',
        note: "sabko goli se uda dunga that's my favourite by the way",
      },
    ],
  },

  // Section 06 — Green Flags / Questionable Behaviour
  flags: {
    heading: 'THE GOOD, THE BAD & THE VERY US',
    greenFlags: [
      { text: 'Always makes me laugh' },
      { text: 'Remembers tiny details' },
      { text: 'Shows up when it matters' },
      { text: 'Understands my weirdness' },
    ],
    questionableBehaviour: [
      { text: 'Always ready to give me lecture (gyan)' },
      { text: 'Block kr dunga' },
      { text: 'Avoid snacks' },
      { text: 'So jao bhaiyaa' },
    ],
  },

  // Section 07 — Who Is More Likely?
  whoIsMoreLikely: [
    {
      id: 'q1',
      question: 'Who gets jealous first?',
      meReaction: 'Subtle side-eye activated immediately 👀',
      themReaction: 'Full detective mode in seconds 🕵️',
    },
    {
      id: 'q2',
      question: 'Who takes longer to get ready?',
      meReaction: '"Almost ready" is a complete fable 💅',
      themReaction: 'Wardrobe exploded on the bed again 👗',
    },
    {
      id: 'q3',
      question: "Who says 'I'm hungry' first?",
      meReaction: 'Metabolism runs like a 2-hour timer 🍕',
      themReaction: '"I\'m not hungry" (proceeds to steal fries) 🍟',
    },
    {
      id: 'q4',
      question: 'Who starts the argument?',
      meReaction: 'Boredom leads to questionable hypothetical debates 💭',
      themReaction: 'Presents evidence from three months ago 📋',
    },
    {
      id: 'q5',
      question: 'Who apologizes first?',
      meReaction: 'Giving up just to get cuddles back 🥹',
      themReaction: 'Will send an offering of food instead of words 🍩',
    },
    {
      id: 'q6',
      question: 'Who is more dramatic?',
      meReaction: 'Practicing their Oscar acceptance monologue 🎭',
      themReaction: 'Dramatic sigh heard across the room ✨',
    },
    {
      id: 'q7',
      question: 'Who sends more reels?',
      meReaction: 'Inbox looks like an algorithmic crime scene 📱',
      themReaction: 'Spams 15 links at 1:40 AM with zero context 😂',
    },
  ],

  // Section 08 — Things Only We Get
  insideJokes: [
    {
      id: 'j1',
      title: '01 — Where it all started',
      secret:
        'Sitting beside you in coaching, waiting for you, finding little reasons to be around you… I never knew those small moments would turn into something this beautiful. From sitting beside you to eventually sitting in your lap — look how far we’ve come. ❤️',
    },
    {
      id: 'j2',
      title: '02 — The distance',
      secret:
        'We spent a long time apart, got busy with our own lives, and somehow ended up on different paths for a while. But no matter how much time passed or how far life took us, somehow, we found our way back to each other. Maybe that’s what makes our love feel so real. ❤️',
    },
    {
      id: 'j3',
      title: '03 — Remember that day',
      secret:
        'Remember the day we first met? The butterflies in my stomach, all that excitement, and just a tiny bit of fear. Then came our first hug, our first kiss, and those uncontrollable smiles we just couldn’t hide. I still remember every little feeling. 🦋❤️',
    },
    {
      id: 'j4',
      title: '04 — Still not over it',
      secret:
        'And honestly… I’m still not over that first meeting. I still get that little feeling in my stomach when I think about it. And somehow, I still love hearing your sleepy morning voice like it’s the cutest thing in the world. ❤️',
    },
  ],

  // Section 09 — The Soft Part
  softPart: {
    subtext: 'okay, jokes aside...',
    heading: "You're my favorite part of this story.",
    paragraph:
      'Through all the silly fights, random talks, and everyday chaos, you’re still my favorite person to come back to. Thank you for listening to me, understanding my weirdness, and making ordinary moments feel special. Being with you just feels natural… and I wouldn’t want it any other way. ❤️',
  },

  // Section 10 — The Letter
  letter: {
    heading: 'ONE THING I NEVER SAY ENOUGH',
    buttonText: 'OPEN THIS 💌',
    recipient: 'Dearest Pratham,',
    paragraphs: [
      'I wanted to put into words something I don’t say out loud often enough.',
      'You have this quiet way of making everything feel lighter. Whether we are cooking something questionable or simply existing in the same room, you make the world feel safe and endlessly bright.',
      'Thank you for being my teammate, my favorite confidant, and the person who knows every version of me and stays anyway. Loving you is the greatest privilege of my life.',
    ],
    closing: 'Always,',
    sender: 'Vini ♡',
  },

  // Final Scene
  finalScene: {
    heading: 'AND THIS IS JUST\nOUR STORY SO FAR.',
    subheading: 'More memories pending...',
    photo: finalLoveImage,
    tagline: 'Same chaos. Same people. New memories.',
    replayCta: 'START AGAIN ↻',
  },

  // Music Settings
  music: {
    audioUrl: '', // Optional mp3 link. If empty, falls back to gentle soothing synth chimes
  },
};
