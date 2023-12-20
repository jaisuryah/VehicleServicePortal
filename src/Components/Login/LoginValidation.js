function validation(values) {
    let errors = {};
  
    if (!values.email.trim()) {
      errors.email = "Email should not be empty";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    } else {
      errors.email = "";
    }
  
    if (!values.password.trim()) {
      errors.password = "Password should not be empty";
    } else if (values.password.length < 8) {
      errors.password = "Password should be at least 8 characters long";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(values.password)) {
      errors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  
  export default validation;
  