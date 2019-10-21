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

import { BirthdayGenie } from '../birthday/birthdayGenie';
import { Birthday } from '../birthday/birthday';

let genie: BirthdayGenie = null;

describe('getBirthdays', () => {
  it('should return empty list when there are no birthdays', () => {
    genie = new BirthdayGenie([new Birthday('henry ford', '7/30')], '1/1');
    expect(genie.getBirthdays().length).toEqual(0);
  });

  it('should return name of person when it is their birthday', () => {
    genie = new BirthdayGenie([new Birthday('henry ford', '7/30')], '7/30');
    expect(genie.getBirthdays().length).toEqual(1);
    expect(genie.getBirthdays()[0]).toEqual('henry ford');
  });

  it('should return names of people when it is their birthday', () => {
    genie = new BirthdayGenie(
      [new Birthday('henry ford', '7/30'), new Birthday('terry crews', '7/30')],
      '7/30'
    );
    expect(genie.getBirthdays().length).toEqual(2);
    expect(genie.getBirthdays()).toContain('henry ford');
    expect(genie.getBirthdays()).toContain('terry crews');
  });
});
