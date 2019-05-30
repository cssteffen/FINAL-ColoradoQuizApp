"use strict";
let QUIZ = [
  {
    number: 1,
    question: "Which of these states borders Colorado?",
    answers: ["Delaware", "Oklahoma", "New Hampshire", "Georgia"],
    correctAnswer: "Oklahoma",
    info:
      "Colorado is bordered by 7 states.<br> Wyoming, Nebraska, Kansas, Oklahoma, New Mexico, Utah and Arizona.",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58584240-64fa7280-8245-11e9-9e92-5a28896ab7ce.png",
    alt: "Map showing states that border Colorado"
  },
  {
    number: 2,
    question: "Where is the U.S. Air Force Academy located?",
    answers: ["Boulder", "Denver", "Aspen", "Colorado Springs"],
    correctAnswer: "Colorado Springs",
    info:
      'The Air Force Academy is the youngest of the five U.S. service academies, graduating its first class in 1959. It\'s motto is "Integrity First, Service Before Self, Excellence in All We Do".',
    graphic:
      "https://user-images.githubusercontent.com/30050423/58591104-15bc3e00-8255-11e9-9fab-fbed878bab34.png",
    alt: "Image of Air Force Academy"
  },
  {
    number: 3,
    question:
      "What song was Katherine Bates inspired to write after viewing Pikes Peak?",
    answers: [
      "Let Freedom Ring",
      "The Star-Spangled Banner",
      "America the Beautiful",
      "Rocky Mountain High"
    ],
    correctAnswer: "America the Beautiful",
    info:
      "Katharine Lee Bates, a professor, poet and writer based the song on a poem she wrote during a 1893 trip to Colorado Springs.",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58591105-15bc3e00-8255-11e9-946b-b2b02e1df7d7.png",
    alt: "America the Beautiful lyrics"
  },
  {
    number: 4,
    question: "What is the tallest mountain in Colorado?",
    answers: ["Pikes Peak", "Mt. Whitney", "Mt. Elbert", "Mt. McKinley"],
    correctAnswer: "Mt. Elbert",
    info:
      "Mt. Elbert is located in the San Isabel National Forest near Leadville, CO. It is the highest point in Colorado with an elevation of 14,440 ft.",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58595405-127a7f80-8260-11e9-9869-4a19a77b5ba7.png",
    alt: "view of Mt. Elbert"
  },
  {
    number: 5,
    question:
      "In what year did President Grant sign a proclamation admitting Colorado to the Union?",
    answers: ["1846", "1876", "1975", "1806"],
    correctAnswer: "1876",
    info:
      "Although approved by Congress on March 3, 1875, President Ulysses S. Grant signed the proclamation of statehood into action on August 1st, 1876. ",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58595364-e959ef00-825f-11e9-9c75-be33486e568c.png",
    alt: "President Ulysses S. Grant"
  },
  {
    number: 6,
    question: "Colorado was admitted to the Union as the _________ state?",
    answers: ["38th", "23rd", "46th", "17th"],
    correctAnswer: "38th",
    info:
      "Colorado became the 38th state admitted to the Union, 9 years after Nebraska was admitted as the 37th state and 13 years before North Dakota was admitted as the 39th State.",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58595375-f24ac080-825f-11e9-888d-362257f8d8cd.png",
    alt: "38"
  },
  {
    number: 7,
    question:
      "What does the yellow circle in the middle of the Colorado state flag stand for?",
    answers: ["Sunshine", "Bravery", "Aspen leaves in the fall", "Craft Beer"],
    correctAnswer: "Sunshine",
    info:
      "The gold circle stands for the abundant sunshine the state enjoys, the blue is meant to represent the skies, the white represents the snowcapped mountains, and the red represents the reddish-colored earth.",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58591110-1654d480-8255-11e9-85e0-d50258b0efab.png",
    alt: "Colorado flag"
  },
  {
    number: 8,
    question:
      "What is the state of Colorado's average elevation in feet above sea level, making it the highest of all 50 states?",
    answers: ["7,543ft.", "6,800ft.", "1,000ft.", "5,280ft."],
    correctAnswer: "6,800ft.",
    info:
      "At a mean elevation of 6,800 feet above sea level, Colorado has the highest average elevation of the 50 states.",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58591109-1654d480-8255-11e9-9321-83a2645091bb.png",
    alt: "mountain lake"
  },
  {
    number: 9,
    question: "What is the Colorado State Flower?",
    answers: ["Corn Flower", "Mountain Laurel", "Columbine", "Sunflower"],
    correctAnswer: "Columbine",
    info:
      "The white and lavender Columbine was adopted as the official state flower on April 4, 1899.",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58591108-1654d480-8255-11e9-948a-f38e79b7b7cc.png",
    alt: "Columbine flower"
  },
  {
    number: 10,
    question:
      'You might not want to eat "Rocky Mountain Oysters" because they are actually ___________?',
    answers: [
      "Roadkill",
      "Bull or bison testicles",
      "Scallops",
      "Deer Gizzards"
    ],
    correctAnswer: "Bull or bison testicles",
    info:
      "Rocky Mountain oysters is a dish made of bull testicles. The organs are often coated in flour, pepper and salt and deep-fried.",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58591106-1654d480-8255-11e9-8e02-c85e11544afc.png",
    alt: "bull cow"
  },
  {
    number: 11,
    question:
      "When did Colorado legalize recreational marijuana, becoming the first state to do so?",
    answers: [
      "November 13, 2010",
      "January 22, 2012",
      "January 01, 2014",
      "April 20, 2016"
    ],
    correctAnswer: "January 01, 2014",
    info:
      "Colorado Amendment 64 passed on November 6, 2012 allowing personal use and regulation of marijuana, however the commercial sale of marijuana to the general public began on January 1, 2014.",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58595383-fd9dec00-825f-11e9-9015-2588868bba8a.png",
    alt: "marijuana leaf"
  },
  {
    number: 12,
    question: "Which chain restaurant got their start in Colorado?",
    answers: [
      "Tokyo Joe's",
      "Chipotle",
      "Noodles & Company",
      "All of the Above"
    ],
    correctAnswer: "All of the Above",
    info:
      "Tokyo Joe's: 1996 - Englewood, CO. Chipotle: 1993 - Denver, CO. Noodles & Company: 1995 - Cherry Creek, CO.",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58595759-44401600-8261-11e9-88a8-41f0094b57d1.png",
    alt: "restaurant logos"
  },
  {
    number: 13,
    question: "What is the name of the mountain range in Colorado?",
    answers: [
      "Appalachian Mountains",
      "Rocky Mountains",
      "Ozark Mountains",
      "San Bernadino Mountains"
    ],
    correctAnswer: "Rocky Mountains",
    info:
      "The Rocky Mountains stretch more than 3,000mi. The Continental Divide is located in the Rockies and designates the line at which water flows either to the Atlantic or Pacific Oceans.",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58591128-2076d300-8255-11e9-950b-c699e644b588.png",
    alt: "The Rocky Mountains"
  },
  {
    number: 14,
    question:
      "In an average year, how many days of sunshine does Denver brag to have?",
    answers: ["300", "260", "180", "345"],
    correctAnswer: "300",
    info:
      "The National Weather Service established a criteria for determing if a day is clear, cloudy or partly cloudy. Clear days = cloud coverage 30% or less of the day. Cloudy days = over 80% cloud coverage. Partly Cloudy = anything in between. Based off of this criteria, Denver typically gets 115 clear days, 130 partly cloudy days & 120 cloudy days each year. Do you think it's a myth?",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58596880-3ee4ca80-8265-11e9-9ae1-e965d8726174.png",
    alt: "sunshine"
  },
  {
    number: 15,
    question: "What is Colorado's State Motto?",
    answers: [
      "All for our Country",
      "Our liberties we prize and rights we will maintain",
      "Nil Sine Numine - Nothing without the providence",
      "Keep calm and Chive on"
    ],
    correctAnswer: "Nil Sine Numine - Nothing without the providence",
    info:
      '"Nile Sine Numine", Latin words meaning "Nothing without providence" or "Nothing without the Deity" is Colorado\'s state motto.',
    graphic:
      "https://user-images.githubusercontent.com/30050423/58596718-ac442b80-8264-11e9-8a7f-a3463583bf65.png",
    alt: "Colorado motto"
  },
  {
    number: 16,
    question:
      "What is the name of the highest paved road in America, which is located in Colorado?",
    answers: [
      "Mount Evans Scenic Byway",
      "Frontier Pathway",
      "Pawnee Pioneer Trail",
      "Pikes Peak Road"
    ],
    correctAnswer: "Mount Evans Scenic Byway",
    info:
      "The Mount Evans Scenic Byway climbs over 7,000 feet in its 28-mile length and reaches an altitude of 14,130 feet.",
    graphic:
      "https://user-images.githubusercontent.com/30050423/58591125-2076d300-8255-11e9-983d-721ffec3825d.png",
    alt: "view from road"
  }
];

let length = QUIZ.length;
