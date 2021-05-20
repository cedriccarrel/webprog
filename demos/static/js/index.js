let teamsDropdown = $("#teams-dropdown")

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
        })
    })


})


/*
$.get("https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=1&player_ids[]=2", function(res) {
  console.log(res)
});*/
