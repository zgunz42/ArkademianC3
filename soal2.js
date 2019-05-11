function is_username_valid(username) {
  var lowercaseRe = /[a-z.]/g;

	if(username.length == 8 && username.match(lowercaseRe).length == username.length) {
    	return true;
    }
    return false;
}

function is_email_valid(email) {
  var emailRe = /([a-zA-Z0-9.]{4,})@([a-zA-Z0-9.])+\.([a-zA-Z])/g;
  return emailRe.test(email);
}

module.exports = {is_username_valid, is_email_valid}