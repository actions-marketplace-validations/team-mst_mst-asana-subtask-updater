# MST asana.com task updater

This action adds update to a taks on asana.com

## Inputs

### `asana-api-key`

**Required** asana.com API Key. This parameter should be stored in the GitHub secrets.

### `asana-task-id`

**Required** asana.com task ID in which an update will be added. This parameter should be stored in the GitHub secrets.

### `asana-update-text`

**Required** Text which will be added as an update.

## Outputs

### `asana-update-id`

ID of the update created with this action.

## Example usage
```yaml
- name: Send update to asana.com task
  uses: team-mst/mst-asana-subtask-updater@v1
  with:
    asana-api-key: ${{ secrets.ASANA_API_KEY }}
    asana-subtask-id: ${{ secrets.ASANA_SUBTASK_ID }}
    asana-update-text: "Hello from the mst github action"
```