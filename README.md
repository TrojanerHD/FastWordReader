# Fast Word Reader
I saw this YouTube video: https://youtu.be/K8dIVNDMA_0 and wanted to recreate it.

## Try it out
### Requirements
+ TypeScript
+ A browser (duh)

### Run it
+ Download the repository's code (either as zip and extract it or via `git clone`)
+ Execute `tsc -p .` in the root folder of this repository
+ Open the `index.html` in your browser

## Features
+ Adjustable speed in letters per minute.
+ Pauses after periods
+ Extra long time for numbers
+ Pause button
+ Removing of linebreak dashes
+ Removing of brackets (for making the reading of insertions in quotes easier)

## Current limitations
+ You have to reload your browser tab every time you want to restart though the input text should be cached by your browser
+ You can't rewatch parts of the text
+ No adjustable length for periods and numbers
+ Letters per minute are a bit inaccurate, the actual calculation is undocumented and a result of try and error