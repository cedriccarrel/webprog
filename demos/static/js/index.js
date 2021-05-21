let teamsDropdown = $("#teams-dropdown")
let teamsDropdown2 = $("#teams2-dropdown")
let playersDropdown = $("#players-dropdown")
let playersDropdown2 = $("#players2-dropdown")

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
                let linkPlayer = `<a data-name="${player.first_name}" data-id=${player.id}>${player.first_name}</a> `
                playersDropdown.append(linkPlayer)
            }
            
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
        })
    })


})
/*
$.get("https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=1&player_ids[]=2", function(res) {
  console.log(res)
});*/
