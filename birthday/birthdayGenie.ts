/*
 *   Copyright (c) 2019 Ford Motor Company
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

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
