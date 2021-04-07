const boldGreen = "[b;green;]";
const boldWhite = "[b;white;]";
const boldYellow = "[b;yellow;]";
const white = "[;white;]";
const green = "[;green;]";

function startTerm() {
  var term = $('#term').terminal({
    help: function (option) {
      if (typeof option === 'undefined')
        help(this);
      else
        helpWhat(this, option)
    },
    whoami: function (option) { whoami(this, option); },
    education: function () { education(this); },
    projects: function () { projects(this); },
    career: function () { career(this); },
    events: function () { events(this); },
    contact: function () { contact(this); },
    clear: function () { term.clear(); }
  }, {
    name: 'Term',
    completion: true,
    checkArity: false,
    greetings: greetings(),
    prompt: '$ '
  });

  $.terminal.new_formatter([/help/g, '[[;green;]help]']);
  $.terminal.new_formatter([/whoami/g, '[[;green;]whoami]']);
  $.terminal.new_formatter([/education/g, '[[;green;]education]']);
  $.terminal.new_formatter([/projects/g, '[[;green;]projects]']);
  $.terminal.new_formatter([/career/g, '[[;green;]career]']);
  $.terminal.new_formatter([/events/g, '[[;green;]events]']);
  $.terminal.new_formatter([/contact/g, '[[;green;]contact]']);
  $.terminal.new_formatter([/clear/g, '[[;green;]clear]']);
}

function greetings() {
  return " _____       _ ____                  _        \n" +
    "|  __ \\     (_)  _ \\                | |       \n" +
    "| |__) |   _ _| |_) | __ _ _ __ __ _| |_ __ _ \n" +
    "|  _  / | | | |  _ < / _` | '__/ _` | __/ _` |\n" +
    "| | \\ \\ |_| | | |_) | (_| | | | (_| | || (_| |\n" +
    "|_|  \\_\\__,_|_|____/ \\__,_|_|  \\__,_|\\__\\__,_|\n" +
    "\n\nWelcome! Type [" + boldGreen + "help] to see a list of all commands\n\n";
}

$(document).ready(function () {
  startTerm();
});