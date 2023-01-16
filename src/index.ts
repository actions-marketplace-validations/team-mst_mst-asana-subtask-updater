import * as core from '@actions/core';
import * as asana from 'asana';

// names of the input parameters
const INPUT_ASANA_API_KEY = 'asana-api-key';
const INPUT_ASANA_TASK_ID = 'asana-task-id';
const INPUT_ASANA_UPDATE_TEXT = 'asana-update-text';

// names of the output parameters
const OUTPUT_ASANA_UPDATE_ID = 'asana-update-id';

function run() {
    try {
        const asanaTaskID = core.getInput(INPUT_ASANA_TASK_ID);
        const asanaUpdateText = core.getInput(INPUT_ASANA_UPDATE_TEXT);

        const client = asana.Client.create().useAccessToken(core.getInput(INPUT_ASANA_API_KEY));
        
        client.tasks.
            addSubtask(asanaTaskID, {
                name: 'Update of the application',
                html_notes: asanaUpdateText
            }).
            then(value => {
                // set value to the output parameter
                core.setOutput(OUTPUT_ASANA_UPDATE_ID, value.gid);
            }).catch(error => {
                core.setFailed(error);
            });
    } catch(exception) {
        core.setFailed(exception as string);
    }
}

run();