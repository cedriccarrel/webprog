let teamsDropdown = $("#teams-dropdown")
let teamsDropdown2 = $("#teams2-dropdown")
let playersDropdown = $("#players-dropdown")
let playersDropdown2 = $("#players2-dropdown")
/*
let player_url_Id2 = $.get(`/players2/${teamId2}`); promise.then (function(data2) {
    console.log(data2)
})
let player_url_Id1 = $.get(`/players/${teamId}`); promise.then (function(data) {
    console.log(data)
})
*/
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
        playersDropdown.find('a').click(function () {
                console.log($(this))
                let player_Id1 = $(this).data("id")
                let player1_name = $(this).data("name")
                let player1_teamname = $(this).data("teamname")
                let player1_conference = $(this).data("conference")
                let player1_division = $(this).data("division")
                let url1 = 'https://www.balldontlie.io/api/v1/season_averages?player_ids[]=' + $.param(player_Id1)
                console.log(player_Id1)
                console.log(player1_name)
                console.log(player1_teamname)
                console.log(player1_conference)
                console.log(player1_division)
                console.log(url1)
        })
    })
}

initializeTeamOne()

async function initializeTeamTwo() {
    teamsDropdown2.empty()
    const teamsResponse = await fetch("/teams");
    const jsonData = await teamsResponse.json();
    const teamLinkElements = jsonData.data.map(team => `<a data-name="${team.full_name}" data-id=${team.id}>${team.full_name}</a> `);
    teamsDropdown2.append(...teamLinkElements);

    teamsDropdown.find('a').click(async function () {
        playersDropdown2.empty()
        let teamId = $(this).data("id")
        const playersInTeamResponse = await fetch(`/players/${teamId}`);
        const playersInTeamJsonData = await playersInTeamResponse.json();
        const playerLinkElements = playersInTeamJsonData.players.map(player => `<a data-name="${player.first_name} ${player.last_name}" data-position="${player.position}" data-teamname="${player.team.full_name}" data-conference="${player.team.conference}" data-division="${player.team.division}" data-id=${player.id}>${player.first_name} ${player.last_name}</a> `)
        playersDropdown2.append(...playerLinkElements)
        playersDropdown2.find('a').click(function () {
                console.log($(this))
                let player_Id2 = $(this).data("id")
                let player2_name = $(this).data("name")
                let player2_teamname = $(this).data("teamname")
                let player2_conference = $(this).data("conference")
                let player2_division = $(this).data("division")
                let url2 = 'https://www.balldontlie.io/api/v1/season_averages?player_ids[]=' + $.param(player_Id2)
                console.log(player_Id2)
                console.log(player2_name)
                console.log(player2_teamname)
                console.log(player2_conference)
                console.log(player2_division)
                console.log(url2)
        })
    })
}

initializeTeamTwo()