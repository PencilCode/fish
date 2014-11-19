var owner = 'davidbau';

require('git-fish');
process.setgid(owner);
process.setuid(owner);
