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
