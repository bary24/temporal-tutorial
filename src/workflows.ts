import { sleep, proxyActivities } from "@temporalio/workflow";
// Only import the activity types
import type * as activities from "./activities";

const { sendWelcomeEmail, sendSubscriptionOverEmail } = proxyActivities<typeof activities>({
    startToCloseTimeout: "1 minute",
});

/** A workflow that simply calls an activity */
export async function SubscriptionWorkflow(email: string, trialPeriod: string | number) {
    await sendWelcomeEmail(email);
    await sleep(trialPeriod);
    await sendSubscriptionOverEmail(email);
}
