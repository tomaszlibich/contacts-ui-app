const REGEX = {
  ALPHABETIC_ONLY: /^\D+/g,
  ALPHANUMERIC_ONLY: /^[a-z0-9]+$/i,
  ANY_NUMBERS: /\d/,
  NUMBERS_ONLY: /^\d+$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, // eslint-disable-next-line
  VALID_EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

export class ValidationService {
  constructor() {
    this.isValidFirstName = this.isValidFirstName.bind(this);
    this.isValidLastName = this.isValidLastName.bind(this);
  }

  isValidEmail(email) {
    return (
      REGEX.VALID_EMAIL.test(String(email).toLowerCase()) && email.length < 255
    );
  }

  isValidCountryCode(code, countryCodes) {
    return !!code && countryCodes.includes(code);
  }

  isValidPhone(phone) {
    return !!phone && phone.length > 4 && REGEX.NUMBERS_ONLY.test(String(phone).toLowerCase());
  }

  isLongEnough(string, minChars = 2) {
    return !!string && string.length >= minChars;
  }

  isValidFirstName(string) {
    return !!string && !this.hasAnyNumbers(string) && this.isLongEnough(string);
  }

  isValidLastName(string) {
    return !!string && !this.hasAnyNumbers(string) && this.isLongEnough(string);
  }

  isAlphaNumericOnly(string) {
    return REGEX.ALPHANUMERIC_ONLY.test(string);
  }

  hasAnyNumbers(string) {
    return REGEX.ANY_NUMBERS.test(string);
  }

  isPasswordCompliantWithRules(string) {
    return REGEX.PASSWORD.test(string);
  }

  isProvided(value) {
    return !!value;
  }
}

