# Fast Word Reader
I saw this YouTube video: https://youtu.be/K8dIVNDMA_0 and wanted to recreate it.

## Try it out
### Requirements
+ TypeScript
+ A browser (duh)

### Run it
+ Download the repository's code (either as zip and extract it or via `git clone https://github.com/TrojanerHD/FastWordReader`)
+ Execute `tsc -p .` in the root folder of this repository
+ Open the `index.html` in your browser

## Features
+ Adjustable speed in letters per minute.
+ Pauses after periods
+ Extra long time for numbers
+ Pause button
+ Linebreak dashes removement
+ Brackets removement (for making the reading of insertions in quotes easier)

## Current limitations
+ You have to pause before restarting if you want to restart while the text is not finished
+ You cannot rewatch parts of the text
+ No adjustable lengths for periods and numbers
+ Letters per minute is a bit inaccurate, the actual calculation is undocumented and a result of try and error