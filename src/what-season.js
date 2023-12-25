const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const month = date.getMonth();
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const season = seasons[Math.floor((month % 12) / 3)];
  return season;
}

module.exports = {
  getSeason
};
