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
