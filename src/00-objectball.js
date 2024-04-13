// 00-objectball.js

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
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
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
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

function numPointsScored(playerName) {
    // Implementation of numPointsScored function
    const game = gameObject();
    for (let team in game) {
        if (game[team].players.hasOwnProperty(playerName)) {
            return game[team].players[playerName].points;
        }
    }
    return null; // Player not found  
}

function shoeSize(playerName) {
    // Implementation of shoeSize function
        const game = gameObject();
        for (let team in game) {
            if (game[team].players.hasOwnProperty(playerName)) {
                return game[team].players[playerName].shoe;
            }
        }
        return null; // Player not found
    }

function teamColors(teamName) {
    // Implementation of teamColors function
        const game = gameObject();
        for (let team in game) {
            if (game[team].teamName === teamName) {
                return game[team].colors;
            }
        }
        return null; // Team not found
}

function teamNames() {
    // Implementation of teamNames function
  
        const game = gameObject();
        return [game.home.teamName, game.away.teamName];
    }

function playerNumbers(teamName) {
    // Implementation of playerNumbers function
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            const players = game[team].players;
            return Object.values(players).map(player => player.number);
        }
    }
    return null; // Team not found
}

function playerStats(playerName) {
    // Implementation of playerStats function
    const game = gameObject();
    for (let team in game) {
        if (game[team].players.hasOwnProperty(playerName)) {
            return game[team].players[playerName];
        }
    }
}

function bigShoeRebounds() {
    // Implementation of bigShoeRebounds function
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe;
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (players[player].shoe > largestShoeSize) {
                largestShoeSize = players[player].shoe;
                playerWithLargestShoe = player;
            }
        }
    }
}

function mostPointsScored() {
    // Implementation of mostPointsScored function
    const game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints;
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (players[player].points > mostPoints) {
                mostPoints = players[player].points;
                playerWithMostPoints = player;
            }
        }
    }
}

function winningTeam() {
    // Implementation of winningTeam function
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }
    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    // Implementation of playerWithLongestName function
    const game = gameObject();
    let longestNameLength = 0;
    let playerWithLongestName;
    for (let team in game) {
        const players = game[team].players;
        for (let player in players) {
            if (player.length > longestNameLength) {
                longestNameLength = player.length;
                playerWithLongestName = player;
            }
        }
    }
}

function doesLongNameStealATon() {
    // Implementation of doesLongNameStealATon function
    function doesLongNameStealATon() {
        const game = gameObject();
        let longestNamePlayerSteals = 0;
        let mostStealsPlayer;
        for (let team in game) {
            const players = game[team].players;
            for (let player in players) {
                if (player.length > longestNamePlayerSteals) {
                    longestNamePlayerSteals = players[player].steals;
                    mostStealsPlayer = player;
                }
            }
        }
}
