import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
  
  addFav(people: string): void {
    console.log(people);
    if (this.favorite.indexOf(people) === -1) {
      this.favorite.push(people);
    }
  }
  deleteFav(people: string): void {
    this.favorite = this.favorite.filter((p) => p !== people);
  }
  isinFav(people: string) {
    if (this.favorite.indexOf(people) === -1) {
      return false;
    }
    return true;
  }
}
