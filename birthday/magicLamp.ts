import { birthdays } from './birthdayCollection';
import { BirthdayGenie } from '../birthday/birthdayGenie';
import * as moment from 'moment';

export function callGenie(): string[] {
  const genie = new BirthdayGenie(birthdays, moment().format('M/D'));
  return genie.getBirthdays();
}
