## High level objective:

Design and implement a component for visualizing events on a timeline.

## Time Invested:
Basic Functionality: 3+ hours,

Refactoring + Extra Functionality: 3+ hours


## Implementation:

** What you like about your implementation.

- I liked the use of a simple data structure (an object) to correctly determine the row and column information for all timeline item events. 
- I enjoyed using basic and simple state management strategies


** What you would change if you were going to do it again.

- Completely achieve separation between model state (timeline items) and UI logic
- Refactor the css-grid positioning algorithm (currently O(n x m) time complexity)
- Introduce responsive design with using media queries, breakpoints, and a mobile-first design
- Polyfills and fallbacks for css-grid browser support issues
- Store data and edits in session storage to persist changes across refreshes


** How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.

No inspiration, wanted to go from scratch and build from the ground up using vanilla React, js, and css


** How you would test this if you had more time.

- unit tests for the core utils (jest)
- RTL for click interaction and DOM display values


## Starter code:

To use the starter code: navigate to this project directory, run `npm install` to install dependencies (this takes a couple minutes), and then run `npm start` to initialize and connect to a node server with your default browser. Please feel free to use as much or as little of the starter code as you'd like.
