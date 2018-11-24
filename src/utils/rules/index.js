import cardValidator from 'card-validator'

/**
 * validate for required field
 *
 * @type {{passes: (function({value?: *}): boolean), message: (function({label: *}): string)}}
 */
export const required = {
  passes: ({value}) => !!value,
  message: ({label}) => `${label} is required.`
}

/**
 * checks if the value is at least "num" chars
 *
 * @param num
 * @return {{passes: (function({value: *}): boolean), message: (function({label: *}): string)}}
 */
export const minChars = (num) => {
  return {
    passes: ({ value }) => value.length >= num,
    message: ({ label }) => `${label} must be at least ${num} characters`
  }
}

/**
 * checks if valid credit card
 *
 * @param value
 * @return boolean
 */
export const creditCard = ({value}) => cardValidator.number(value).isValid

/**
 * checks for valid expiration date
 *
 * @param value
 * @return boolean
 */
export const expiryDate = ({value}) => cardValidator.expirationDate(value).isValid

/**
 * checks for valid cvv
 *
 * @param value
 * @return boolean
 */
export const cvv = ({value}) => cardValidator.cvv(value).isValid
