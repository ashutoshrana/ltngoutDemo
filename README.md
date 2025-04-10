# Salesforce Case Creation Component

This repository contains a Salesforce Lightning Web Component (LWC) for creating Case records. The component includes:

- A form for creating Case records with standard fields
- Integration with Salesforce picklist values
- Success/error notifications
- Cross-platform support via Lightning Out and Visualforce

## Features

- **Dynamic Picklist Values**: Automatically fetches picklist values from Salesforce
- **Responsive Design**: Works on desktop and mobile devices
- **Error Handling**: Provides user feedback for errors
- **Classic Support**: Can be embedded in Salesforce Classic via Visualforce

## Implementation Details

The component uses:
- Lightning Web Components to create the UI
- Apex controllers for server-side logic
- Lightning Out for embedding in Visualforce pages

## Deployment

Deploy this solution to your Salesforce org using Salesforce DX:

```bash
sfdx force:source:deploy -p force-app/
```

## Usage

Add the component to any Lightning page through the Lightning App Builder, or access it via the Visualforce page at `/apex/CaseCreationVF`.

## Screenshots

![Case Creation Form](https://example.com/case-creation-screenshot.png)
