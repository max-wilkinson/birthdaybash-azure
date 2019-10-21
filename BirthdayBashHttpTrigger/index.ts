import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { callGenie } from '../birthday/magicLamp';
import { sendToSlack } from '../slack/slackClient';

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.');

  let result: string[] = null;

  try {
    result = callGenie();
    result.forEach((person: string) => {
      sendToSlack(person);
    });
  } catch (ex) {
    context.res = { status: 500, body: ex };
    return;
  }

  context.res = { body: result };
};

export default httpTrigger;
