import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Persons, Players, Team, TeamOneArray, TeamTwoArray } from './constants';
import { IPlayer, ITeam, ITeamName } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  team: ITeam[] = Team;
  player: IPlayer = Players;
  persons: string[] = Persons;
  teamList: string[] = [
    ...(TeamOneArray),
    ...(TeamTwoArray)
  ]

  form = this.fb.group({
    team1: [null],
    team2: [null],
    teamOne: this.fb.group(
      TeamOneArray.reduce((acc: any, cv) => {
        acc[cv] = [null];
        return acc;
      }, {})
    ),
    teamTwo: this.fb.group(
      TeamTwoArray.reduce((acc: any, cv) => {
        acc[cv] = [null];
        return acc;
      }, {})
    ),
    players: this.fb.group(
      Persons.reduce((acc: any, cv) => {
        acc[cv] = this.fb.group({
          player1: [null],
          player2: [null]
        });
        return acc;
      }, {})
    ),
    selectedPlayers: this.fb.group(
      Persons.reduce((acc: any, cv) => {
        acc[cv] = this.fb.group({
          player1: [null],
          player2: [null]
        });
        return acc;
      }, {})
    )
  });

  get arrForTeam2() {
    if(!this.getControlValue('team1')){
      this.getControl('team1').setErrors({ required: true });
      return;
    } else {
      const team = this.team
      const index = this.team.findIndex(e => e.value === this.getControlValue('team1'))
      return team.splice(index, 1);
    }
  }

  get team1Arr() {
    return TeamOneArray;
  };

  get team2Arr() {
    return TeamTwoArray;
  };

  getPlayerList(team: ITeamName) {
    return this.player[team];
  };

  getControl(ctrl: string) {
    return this.form.get(ctrl) as FormControl;
  }

  getControlValue(ctrl: string) {
    return this.form.get(ctrl)?.value;
  }

  constructor(
    private fb: FormBuilder
  ) {
    console.log(this.team.filter(e => e.value === 'GT'))
  }
}
