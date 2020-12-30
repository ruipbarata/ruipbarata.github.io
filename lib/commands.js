function help(term) {
  term.echo('[' + boldWhite + '\twhoami]\t\t\tAbout me');
  term.echo('[' + boldWhite + '\teducation]\t\tMy academic path');
  term.echo('[' + boldWhite + '\tcareer]\t\t\tMy professional experience');
  term.echo('[' + boldWhite + '\tevents]\t\t\tMy certifications');
  term.echo('[' + boldWhite + '\tcontact]\t\tWays to reach me');
}

function helpWhat(term, what) {
  if (what.match("whoami"))
    term.echo('\tAbout me');
  else if (what.match("education"))
    term.echo('\tMy academic path');
  else if (what.match("career"))
    term.echo('\tMy professional experience');
  else if (what.match("events"))
    term.echo('\tMy certifications');
  else if (what.match("contact"))
    term.echo("\tWays to reach me");
}

function whoami(term) {
  term.echo('[' + boldWhite + 'Hello, my name is Rui Pedro Barata!]');
  term.echo('[' + boldWhite + 'I was born on February 19, 1997, in the magnificent city of Coimbra, Portugal.');
  term.echo('[' + boldWhite + 'I am currently a finalist in Bachelor of Informatics Engineering at the University ' +
    'of Coimbra (Portugal), and I intend to complement my studies with a master Degree ' +
    'in the field of Software Engineering.\n');
  term.echo('[' + boldWhite + 'My sources of interest in the computer world turned more to the development in Ruby ' +
    'on Rails and Android.');
  term.echo('[' + boldWhite + 'I am thirsty for more knowledge and experience, adept at self-learning and I have ' +
    'a good team spirit.');
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