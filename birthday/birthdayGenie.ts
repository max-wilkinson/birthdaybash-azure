import { Birthday } from './birthday';

export class BirthdayGenie {
  private birthdays: Birthday[];
  private today: string;

  constructor(birthdays: Birthday[], today: string) {
    this.birthdays = birthdays;
    this.today = today;
  }

  public getBirthdays(): string[] {
    let birthdayPeople: string[] = [];

    this.birthdays.forEach(birthday => {
      if (birthday.date === this.today) {
        birthdayPeople.push(birthday.person);
      }
    });

    return birthdayPeople;
  }
}
