import { Connection, WorkflowClient } from "@temporalio/client";
import { SubscriptionWorkflow } from "./workflows";

async function run() {
    // Connect to the default Server location (localhost:7233)
    const connection = await Connection.connect();

    const client = new WorkflowClient({ connection });

    // etc...
    const result = await client.execute(SubscriptionWorkflow, {
        workflowId: "business-meaningful-id",
        taskQueue: "tutorial",
        args: ["foo@bar.com", "30 seconds"],
    });
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});
