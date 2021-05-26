let teamsDropdown = $("#teams-dropdown")
let teamsDropdown2 = $("#teams2-dropdown")
let playersDropdown = $("#players-dropdown")
let playersDropdown2 = $("#players2-dropdown")

var player1_json;
var player2_json;

var myChart;
var myChart2;



/* Changes Flurin
let seasonaveragesplayer1 = $("#stats_player1")
let seasonaveragesplayer2 = $("#stats_player2")
*/

function clickedOnTeam (event) {
    console.log(event.target)
}

async function initializeTeamOne() {
    teamsDropdown.empty()
    const teamsResponse = await fetch("/teams");
    const jsonData = await teamsResponse.json();
    const teamLinkElements = jsonData.data.map(team => `<a data-name="${team.full_name}" data-id=${team.id}>${team.full_name}</a> `);
    teamsDropdown.append(...teamLinkElements);

    teamsDropdown.find('a').click(async function () {
        playersDropdown.empty()
        let teamId = $(this).data("id")
        const playersInTeamResponse = await fetch(`/players/${teamId}`);
        const playersInTeamJsonData = await playersInTeamResponse.json();
        const playerLinkElements = playersInTeamJsonData.players.map(player => `<a data-name="${player.first_name} ${player.last_name}" data-position="${player.position}" data-teamname="${player.team.full_name}" data-conference="${player.team.conference}" data-division="${player.team.division}" data-id=${player.id}>${player.first_name} ${player.last_name}</a> `)
        playersDropdown.append(...playerLinkElements)
        console.log(playersDropdown)
        playersDropdown.find('a').click(async function () {
                console.log($(this))
                let player_Id1 = $(this).data("id")
                let player1_name = $(this).data("name")
                let player1_teamname = $(this).data("teamname")
                let player1_conference = $(this).data("conference")
                let player1_division = $(this).data("division")
                let url1 = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player_Id1}`
                let player1_stats_response = await fetch(url1)
                let player1_stats_json = await player1_stats_response.json()
                if (player1_stats_json.data.length > 0) {
                    console.log(player1_stats_json.data)
                }
                else {
                    console.log("This player was not active during the 2020/2021 season!")
                }
                console.log(player_Id1)
                console.log(player1_name)
                console.log(player1_teamname)
                console.log(player1_conference)
                console.log(player1_division)
                console.log(url1)
                $("#player_name").text(player1_name)
                if(player1_stats_json.data.length > 0) {
                    Object.filter = (obj, predicate) => 
                    Object.fromEntries(Object.entries(obj).filter(predicate))
    
                    var filtered = Object.filter(player1_stats_json.data[0], ([name, ]) => labels.includes(name))
                    player1_json =  Object.values(filtered)
                    drawChartPlayer1()
                } else {
                    window.alert("This player was not active during the 2020/2021 season!")
                    player1_json = [0, 0, 0, 0, 0, 0, 0,
                                    0, 0, 0, 0, 0, 0, 0]  
                    drawChartPlayer1()
                }
        })
    })
}

initializeTeamOne()

const labels = [
    'fgm',
    "fga",
    "fg3m",
    "fg3a",
    "ftm",
    "fta",
    "oreb",
    "dreb",
    "reb",
    "ast",
    "stl",
    "blk",
    "turnover",
    "pf",
    "pts"
  ];

const labelsCharts = [
    'Field Goals Made',
    'Field Goals Attempted',
    '3 Pt Field Goals Made',
    '3 Pt Field Goals Attempted',
    'Free Throws Made',
    'Free Throws Attempted',
    'Offensive Rebounds',
    'Defensive Rebounds',
    'Rebounds',
    'Assists',
    'Steals',
    'Blocks',
    'Turnovers',
    'Personal Fouls',
    'Points'
]

function drawChartPlayer1() {
    const data = {
        labels: labelsCharts,
        datasets: [{
          label: 'Stats player 1',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: player1_json,
        }]
    };
    
    const config = {
        type: 'bar',
        data,
        options: {
            indexAxis: 'y',

        }
      };
    
    // === include 'setup' then 'config' above ===
    if(myChart) myChart.destroy()
    myChart = new Chart(
        document.getElementById('player1chart'),
        config
    );
}

async function initializeTeamTwo() {
    teamsDropdown2.empty()
    const teamsResponse = await fetch("/teams");
    const jsonData = await teamsResponse.json();
    const teamLinkElements = jsonData.data.map(team => `<a data-name="${team.full_name}" data-id=${team.id}>${team.full_name}</a> `);
    teamsDropdown2.append(...teamLinkElements);

    teamsDropdown2.find('a').click(async function () {
        playersDropdown2.empty()
        let teamId = $(this).data("id")
        const playersInTeamResponse = await fetch(`/players/${teamId}`);
        const playersInTeamJsonData = await playersInTeamResponse.json();
        const playerLinkElements = playersInTeamJsonData.players.map(player => `<a data-name="${player.first_name} ${player.last_name}" data-position="${player.position}" data-teamname="${player.team.full_name}" data-conference="${player.team.conference}" data-division="${player.team.division}" data-id=${player.id}>${player.first_name} ${player.last_name}</a> `)
        playersDropdown2.append(...playerLinkElements)
        console.log(playersDropdown2)
        playersDropdown2.find('a').click(async function () {
                console.log($(this))
                let player_Id2 = $(this).data("id")
                let player2_name = $(this).data("name")
                let player2_teamname = $(this).data("teamname")
                let player2_conference = $(this).data("conference")
                let player2_division = $(this).data("division")
                let url2 = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player_Id2}`
                let player2_stats_response = await fetch(url2)
                let player2_stats_json = await player2_stats_response.json()
                if (player2_stats_json.data.length > 0) {
                    console.log(player2_stats_json.data)
                }
                    else {
                        console.log("This player was not active during the 2020/2021 season!")
                    }
                console.log(player_Id2)
                console.log(player2_name)
                console.log(player2_teamname)
                console.log(player2_conference)
                console.log(player2_division)
                console.log(url2)
                $("#player2_name").text(player2_name)
                if(player2_stats_json.data.length > 0) {
                    Object.filter = (obj, predicate) => 
                    Object.fromEntries(Object.entries(obj).filter(predicate))
    
                    var filtered = Object.filter(player2_stats_json.data[0], ([name, ]) => labels.includes(name))
                    player2_json =  Object.values(filtered)
                    drawChartPlayer2()
                } else {
                    window.alert("This player was not active during the 2020/2021 season!")
                    player2_json = [0, 0, 0, 0, 0, 0, 0,
                                    0, 0, 0, 0, 0, 0, 0]  
                    drawChartPlayer2()
                }
        })
    })
}

initializeTeamTwo()

function drawChartPlayer2() {
    const data = {
        labels: labelsCharts,
        datasets: [{
          label: 'Stats player 2',
          backgroundColor: 'rgb(30,144,255)',
          borderColor: 'rgb(30,144,255)',
          data: player2_json,
        }]
    };
    
    const config = {
        type: 'bar',
        data,
        options: {
            indexAxis: 'y',
        }
      };
    
    // === include 'setup' then 'config' above ===
    if(myChart2) myChart2.destroy()
    myChart2 = new Chart(
        document.getElementById('player2chart'),
        config
    );
}



