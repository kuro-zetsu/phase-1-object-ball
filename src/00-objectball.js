function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

const wholeObject = gameObject();

const players = { ...wholeObject.home.players, ...wholeObject.away.players };

const bigShoeRebounds = () => {
  let largestShoe = 0;
  let largestRebound;
  let largestPlayer;
  for (let player in players) {
    if (players[player].shoe > largestShoe) {
      largestShoe = players[player].shoe;
      largestRebound = players[player].rebounds;
      largestPlayer = player;
    }
  }
  return `${largestRebound} rebounds for ${largestPlayer}`;
};

console.log(bigShoeRebounds());

const playerStats = (name) => players[name];

console.log(playerStats("Mason Plumlee"));

const playerNumbers = (team) => {
  let jerseyNumbers = [];
  if (team === wholeObject.home.teamName) {
    for (let player in wholeObject.home.players) {
      jerseyNumbers.push(wholeObject.home.players[player].number);
    }
  } else if (team === wholeObject.away.teamName) {
    for (let player in wholeObject.away.players) {
      jerseyNumbers.push(wholeObject.away.players[player].number);
    }
  } else {
    console.log(
      `Please enter ${wholeObject.home.teamName} or ${wholeObject.away.teamName}.`
    );
  }
  return jerseyNumbers;
};

console.log(playerNumbers("Charlotte Hornets"));

const teamNames = () => {
  return [wholeObject.away.teamName, wholeObject.home.teamName];
}

console.log(teamNames());

const teamColors = team => {
  if (team === wholeObject.away.teamName) {
    return wholeObject.away.colors;
  } else if (team === wholeObject.home.teamName) {
    return wholeObject.home.colors;
  } else {
    console.log(`Please enter ${wholeObject.home.teamName} or ${wholeObject.away.teamName}.`);
  }
}

console.log(teamColors("Charlotte Hornets"));

const shoeSize = playerName => {
  if (playerName in wholeObject.away.players) {
    return wholeObject.away.players[playerName].shoe;
  } else if (playerName in wholeObject.home.players) {
    return wholeObject.home.players[playerName].shoe;
  } else {
    console.log(`That's not a player in either team.`);
  }
}

console.log(shoeSize("Mason Plumlee"));

const numPointsScored = playerName => {
  if (playerName in wholeObject.away.players) {
    return wholeObject.away.players[playerName].points;
  } else if (playerName in wholeObject.home.players) {
    return wholeObject.home.players[playerName].points;
  } else {
    console.log(`That's not a player in either team.`);
  }
}

console.log(numPointsScored("Mason Plumlee"));