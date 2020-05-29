class Team 
{
  constructor()
  {
    this.index = null;
    this.name = null;
    this.rank = null;
  }

  getCount()
  {
    var teamCountRef = database.ref('teamCount');
    teamCountRef.on("value",(data)=>{teamCount = data.val();})
  }

  updateCount(count)
  {
    database.ref('/').update({teamCount: count});
  }

  update()
  {
    var teamIndex = "teams/team" + this.index;
  }

  static getTeamInfo()
  {
    var teamInfoRef = database.ref('teams');
    teamInfoRef.on("value",(data)=>{allteams = data.val();})
  }

  getTeams()
  {
    database.ref("teamssAtEnd").on("value",(data)=>{this.rank = data.val();})
  }

  static rankUpdate(rank)
  {
    database.ref("/").update({teamsAtEnd:rank})
  }
}
