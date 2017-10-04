// This is a simple Tabris.js app. Feel free to modify as you please.
// Changes are saved immediately and will be available on your device after reload.

const {Button, TextView, ui} = require('tabris');

// Create a push button and add it to the content view
let button = new Button({
  centerX: 0, centerY: 0,
  text: 'Tap here'
}).appendTo(ui.contentView);

// Create a text view and add it too
let label = new TextView({
  centerX: 0, bottom: [button, 20],
  font: '24px'
}).appendTo(ui.contentView);

// Change the text when the button is pressed
button.on('select', () => label.text = 'Hello!');