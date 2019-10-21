import { AzureFunction, Context } from '@azure/functions';
import { callGenie } from '../birthday/magicLamp';
import { sendToSlack } from '../slack/slackClient';

const timerTrigger: AzureFunction = async function(
  context: Context,
  myTimer: any
): Promise<void> {
  let result: string[] = null;

  try {
    result = callGenie();
    result.forEach((person: string) => {
      sendToSlack(person);
    });
  } catch (ex) {
    context.log(`Timer trigger error: ${ex}`);
  }

  verifyTiming(context, myTimer);
};

function verifyTiming(context: Context, myTimer: any) {
  var timeStamp = new Date().toISOString();

  if (myTimer.IsPastDue) {
    context.log('Timer function is running late!');
  }
  context.log('Timer trigger function ran!', timeStamp);
}

export default timerTrigger;
