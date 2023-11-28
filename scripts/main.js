
const reccomendations = [
    {
        artist: "Taylor Swift",
        song: "Ready for It",
    },
    {
        artist: "Pitbull",
        song: "Hotel Room Service",
    },
    {
        artist: "Tyler the Creator",
        song: "EARFQUAKE",
    },
    {
        artist: "Bakar",
        song: "Hell N Back",
    },
    {
        artist: "Michael Jackson",
        song: "P.Y.T.",
    },
    {
        artist: "Noah Kahan",
        song: "Northern Attitude",
    },
    {
        artist: "Florence + The Machine",
        song: "Dog Days are Over",
    },
    {
        artist: "Elton John",
        song: "Rocket Man",
    },
    {
        artist: "Zach Bryan",
        song: "Something in the Orange",
    },
    {
        artist: "Eminem, Rihanna",
        song: "The Monster",
    },
    {
        artist: "Far East Movement",
        song: "Rocketeer",
    },
    {
        artist: "Daft Punk",
        song: "Technologic",
    },
    {
        artist: "Katy Perry",
        song: "Teenage Dream",
    },
];

let generateBttn = document.getElementById('generate.box');


function setRecommendation(){
    let artistRec = document.getElementById('artist');
let songRec = document.getElementById('title');
    //get a random number in lenght of list
    let i = 0;

    i = getRandomInt(reccomendations.length-1);

    console.log(artistRec)
    artistRec.textContent = reccomendations[i].artist;
    songRec.textContent = reccomendations[i].song; 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }