const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
  constructor(difference, ...params) {
    super(...params);

    this.name = 'MaximumLengthExceededError';

    if (difference) {
      this.message = `Maximum length exceeded by ${difference}`
    } else {
      this.message = 'Maximum length exceeded';
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}