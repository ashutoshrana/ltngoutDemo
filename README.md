# Historical case-form and Lightning Out experiments

This repository is retained as a historical demonstration. It is not a deployable Salesforce DX project.

## What is present

- [index.html](index.html), [styles.css](styles.css), and [scripts.js](scripts.js): a static case-form mockup. Picklist options are hardcoded. Submitting validates a nonempty subject, displays a success toast, and clears fields. No Case record is created and no Salesforce API is called.
- [ltng.html](ltng.html): a separate Lightning Out experiment referencing an external Salesforce org and custom components. Their definitions, deployment metadata, authentication, and setup are not included.

## Preview the mockup

From this directory, run `python3 -m http.server 8000 --bind 127.0.0.1` and open [the local preview](http://127.0.0.1:8000/index.html). Stop the server when finished. The stylesheet uses an external CDN; referenced `/assets/icons/...` sprite files are absent, so icons can be missing. This is a visual demonstration, and the toast is simulated success.

The repository contains no `force-app/`, Apex, LWC source bundle, Visualforce page, or Salesforce DX configuration. There is no Salesforce deployment command for this tree. The Lightning Out page requires separately supplied and verified org components; its historical endpoint is not a supported service contract.

Future Salesforce integration would require its own source project, authenticated backend, and a real record-creation test. Existing files remain for reference.
