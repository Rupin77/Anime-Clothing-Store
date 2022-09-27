function checkPassword(str) {
    var pa = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return pa.test(str);
  }

  function checkForm(form) {
    if(form.username.value == "") {
      alert("Error: Username cannot be blank!");
      form.username.focus();
      return false;
    }

    pa = /^\w+$/;
    if(!pa.test(form.username.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      form.username.focus();
      return false;
    }

    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(!checkPassword(form.pwd1.value)) {
        alert("The password you have entered is not valid!");
        form.pwd1.focus();
        return false;
      }

    } else {
      alert("Error: Password must be 6 characters long, must start with a character, must have at least 1 digit and 1 uppercase and make sure the passwords are matching!");
      form.pwd1.focus();
      return false;
    }

    return true;
  }
