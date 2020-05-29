class Form 
{
  constructor() 
  {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("RESET");
  }
  
  hide()
  {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display()
  {
    this.title.html("Race To The Finals");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    this.button.mousePressed(()=>
    {
      this.input.hide();
      this.button.hide();
      team.name = this.input.value();
      teamCount+=1;
      team.index = teamCount;
      team.update();
      team.updateCount(teamCount);
      this.greeting.html("Hello " + team.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    this.reset.mousePressed(()=>
    {
      team.updateCount(0);
      team.rankUpdate(0);
      game.update(0);
    });
  }
}
