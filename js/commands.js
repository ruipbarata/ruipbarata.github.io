function help(term) {
  term.echo('[' + boldWhite + '\twhoami]');
  term.echo('[' + boldWhite + '\teducation]');
  term.echo('[' + boldWhite + '\tcareer]');
  term.echo('[' + boldWhite + '\tevents]');
  term.echo('[' + boldWhite + '\tcontact]');
  term.echo('[' + boldWhite + '\tclear]');
  term.echo('Type \'help [COMMAND]\' to get more information about the commands.')
}

function helpWhat(term, option) {
  if (option.match("whoami")) {
    term.echo('Usage: whoami [OPTION]');
    term.echo('Shows a short description about me\n');
    term.echo('\t-b,\t-brief\t\ta brief about me (default)');
    term.echo('\t-a,\t-all\t\tall about me');
  }
  else if (option.match("education")) {
    term.echo('Usage: education');
    term.echo('My academic path');
  }

  else if (option.match("career")) {
    term.echo('Usage: career');
    term.echo('My professional experience');
  }
  else if (option.match("events")) {
    term.echo('Usage: events');
    term.echo('My certifications');
  }
  else if (option.match("contact")) {
    term.echo('Usage: contact');
    term.echo("Ways to reach me");
  }
  else if(option.match("clear")) {
    term.echo('Usage: clear');
    term.echo("Cleans the terminal");
  }
}

function whoamiBrief(term) {
  term.echo('[' + boldWhite + 'Hello, my name is Rui Pedro Barata!]\n');
  term.echo('[' + boldWhite + 'I was born on February 19, 1997, in the magnificent city of Coimbra, Portugal.');
  term.echo('[' + boldWhite + 'I am currently a finalist in Bachelor of Informatics Engineering at the University ' +
    'of Coimbra (Portugal), and I intend to complement my studies with a master Degree ' +
    'in the field of Software Engineering.\n');
  term.echo('[' + boldWhite + 'My sources of interest in the computer world turned more to the development in Ruby ' +
    'on Rails and Android.');
  term.echo('[' + boldWhite + 'I am thirsty for more knowledge and experience, adept of self-learning and I have ' +
    'a good team spirit.');
}

function whoamiComplete(term) {
  term.echo('A little more about me...\n');
  term.echo('I am a [' + white + 'music lover]. I like almost every genre of music. From jazz to metal, to rock classics.');
  term.echo('But of course, being a [' + white + 'guitarist] myself, I can\'t go a day without hearing at least a handful of epic guitar solos from my guitar heroes.');
  term.echo('I already had a small band of covers and originals during high school.');
  term.echo('I was once an active member of Quantunna, a music academic group from F. C. T. of the University of Coimbra.');
  term.echo('Right now, I am not connected to any musical group and I decided to dedicate my free time to improve my skills with guitar and music in general.\n');
  term.echo('Besides my addiction to music, I have another bobby. A little less commmon hobby: [' + white + 'fishkeeping], the world of aquariums.');
  term.echo('I am an [' + white + 'aquarist] and my biggest passion within this magnificent hobby is mainly [' + white + 'planted freshwater aquariums] and [' + white + 'aquascaping]: creating small underwater gardens.');
  term.echo('Maybe on day I will venture into the world of slatwater aquariums. Who knows...');
  term.echo('\nSome keywords to get to know me better:');
  term.echo('[' + green + '◘] [' + white + 'Modern architecture]');
  term.echo('[' + green + '◘] [' + white + 'Travelling]');
  term.echo('[' + green + '◘] [' + white + 'Roller hockey]');
  term.echo('[' + green + '◘] [' + white + 'Technology]');
}

function whoami(term, option) {
  if (typeof option === 'undefined' || option.toLowerCase().match("-brief") || option.toLowerCase().match("-b")) {
    whoamiBrief(term);
    term.echo('\nType \'whoami -all\' to see all about me...')
  }
  else if (option.toLowerCase().match("-all") || option.toLowerCase().match("-a")) {
    whoamiBrief(term);
    term.echo('\n')
    whoamiComplete(term);
  }
  else {
    term.error('That flag is not valid. Type \'help whoami\' to get some help.');
  }
}

function education(term) {
  term.echo('[' + boldWhite + 'Bachelor’s Degree: Informatics Engineering], University of Coimbra, Portugal');
}

function career(term) {
  term.echo('Trainee at [' + boldWhite + 'The Loop Company], Coimbra, Portugal, June 2020 - September 2020');
  term.echo('Trainee at [' + boldWhite + 'BlueWorks], Coimbra, Portugal, June 2019 - September 2019');
}

function events(term) {
  term.echo('[' + boldWhite + 'Android Training Program Portugal@UC], Google Developers training team and DEI/FCTUC');
  term.echo('[' + boldWhite + 'Workshop: Construction and Assembly of Computers], Eng. Francisco Maia');
  term.echo('[' + boldWhite + 'Workshop: Introduction to Android Programming], Prof. Ricardo Pereira');
  term.echo('[' + boldWhite + 'Workshop: Introduction to Java], Prof. Ricardo Pereira');
}

function contact(term) {
  term.echo('[' + boldWhite + 'Email]\t\truipbarata@gmail.com');
  term.echo('[' + boldWhite + 'Skype]\t\truipbarata@hotmail.com');
  term.echo('[' + boldWhite + 'LinkedIn]\thttps://www.linkedin.com/in/rui-barata/');
}