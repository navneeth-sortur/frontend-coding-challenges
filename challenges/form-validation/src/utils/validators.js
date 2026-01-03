const isAlphaBet = char => {
  const code = char.charCodeAt(0);
  return (
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) // a-z
  );
};

const isDigit = char => {
  const code = char.charCodeAt(0);
  return code >= 48 && code <= 57; // 0-9
};

export const validators = {
  name: value => {
    if (value.length < 3 || value.length > 30) {
      return "Name must be between 3 and 30 characters";
    }

    for (let char of value) {
      if (!isAlphaBet(char)) {
        return "Name must contain only alphabets";
      }
    }

    return "";
  },

  email: value => {
    const atIndex = value.indexOf("@");
    const dotIndex = value.lastIndexOf(".");

    if (
      atIndex <= 0 ||
      dotIndex <= atIndex + 1 ||
      dotIndex === value.length - 1
    ) {
      return "Invalid email address";
    }

    return "";
  },

  phone: value => {
    if (value.length !== 10) {
      return "Phone number must be exactly 10 digits";
    }

    if (value[0] === "0" || value[0] === "1") {
      return "Phone number cannot start with 0 or 1";
    }

    for (let char of value) {
      if (!isDigit(char)) {
        return "Phone number must contain digits only";
      }
    }

    return "";
  },

  blog: value => {
    if (!value.startsWith("http://") && !value.startsWith("https://")) {
      return "Blog URL must start with http:// or https://";
    }

    if (!value.includes(".")) {
      return "Invalid blog URL";
    }

    return "";
  }
};
