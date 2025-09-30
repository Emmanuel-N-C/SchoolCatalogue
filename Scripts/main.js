import PrimarySchool from './highSchool.js';
import HighSchool from './highSchool.js';
import School from './school.js';

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or family member over the age of 13."
);

lorraineHansbury.quickFacts();

console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobili"
  ])
);

const alSmith = new HighSchool("Al Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field"
]);

console.log(alSmith.sportsTeams);
