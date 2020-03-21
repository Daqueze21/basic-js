module.exports = function repeater(str, options) {
    let stringToReturn = '';
    let additions = '';
    
    if (!options.hasOwnProperty('separator')) {
      for (let i = 0; i < options.repeatTimes - 1; i++) {
        stringToReturn += str + '+';
      }
      stringToReturn+= str;
    } else if (!options.hasOwnProperty('addition')) {
      for (let i = 0; i < options.repeatTimes - 1; i++) {
        stringToReturn += str + options.separator;
      }
      stringToReturn += str;
    } else {
      for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
        additions += options.addition + options.additionSeparator;
      }
      additions += options.addition;
      str += additions;

      for (let i = 0; i < options.repeatTimes - 1; i++) {
        stringToReturn += str + options.separator;
      }
      stringToReturn += str;
    };

    return stringToReturn;
};
  