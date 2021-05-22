let teamsDropdown = $("#teams-dropdown")
let teamsDropdown2 = $("#teams2-dropdown")
let playersDropdown = $("#players-dropdown")
let playersDropdown2 = $("#players2-dropdown")

/* Changes Flurin
let seasonaveragesplayer1 = $("#stats_player1")
let seasonaveragesplayer2 = $("#stats_player2")
*/

function clickedOnTeam (event) {
    console.log(event.target)
}

$.get ("/teams", function (data) {
    console.log(data)
    teamsDropdown.empty()
    for (team of data.data) {
        let linkElement = `<a data-name="${team.full_name}" data-id=${team.id}>${team.full_name}</a> `
        teamsDropdown.append(linkElement)
    }
    //https://stackoverflow.com/questions/590163/how-to-get-all-options-of-a-select-using-jquery
    teamsDropdown.find('a').click(function () {
        console.log($(this))
        let teamId = $(this).data("id")
        console.log(teamId)
        $.get (`/players/${teamId}`, function (data) {
            console.log(data)
            playersDropdown.empty()
            for (player of data.players) {
                let linkPlayer = `<a data-name="${player.first_name} ${player.last_name}" data-id=${player.id}>${player.first_name} ${player.last_name}</a> `
                playersDropdown.append(linkPlayer)
            }
            playersDropdown.find('a').click(function () {
                console.log($(this))
                let player_Id1 = $(this).data("id")
                console.log(player_Id1)
                var obj_1 = player_Id1
               
            })
            
        })
        
    })
})


$.get ("/teams2", function (data2) {
    console.log(data2)
    teamsDropdown2.empty()
    for (team2 of data2.data) {
        let linkElement2 = `<a data-name="${team2.full_name}" data-id=${team2.id}>${team2.full_name}</a> `
        teamsDropdown2.append(linkElement2)
    }
    teamsDropdown2.find('a').click(function () {
        console.log($(this))
        let teamId2 = $(this).data("id")
        console.log(teamId2)
        $.get (`/players2/${teamId2}`, function (data2) {
            console.log(data2)
            playersDropdown2.empty()
            for (player2 of data2.players) {
                let linkPlayer2 = `<a data-name="${player2.first_name} ${player2.last_name}" data-id=${player2.id}>${player2.first_name} ${player2.last_name}</a> `
                playersDropdown2.append(linkPlayer2)
            }
            playersDropdown2.find('a').click(function () {
                console.log($(this))
                let player_Id2 = $(this).data("id")
                console.log(player_Id2)
                $("#player2_firstname").text(player_Id2)
                var obj_2 = player_Id2
                var url = 'https://www.balldontlie.io/api/v1/season_averages?player_ids[]=' + $.param(obj_1) + '&player_ids[]=' + $.param(obj_2)
                console.log(url)
                

            })
        })
    
    })
})
    
    /* Changes Flurin
    var obj_1 = { id_1: 'player1.id'};
    var obj_2 = { id_2: 'player2.id'};
    var url = 'https://www.balldontlie.io/api/v1/season_averages?player_ids[]=' + $.param(obj_1) + '&player_ids[]=' + $.param(obj_2);
    
    $.get("https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=1&player_ids[]=2", function(res) {
        console.log(res)
    });*/

