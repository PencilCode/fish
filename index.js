var owner = 'davidbau';

require('git-fish');
process.env.HOME = '/home/' + owner;
process.setgid(owner);
process.setuid(owner);
