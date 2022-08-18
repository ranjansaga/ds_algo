var checkPalindrome = () => {
  var j = str.length - 1;
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[j - i]) {
      return false;
    }
  }
  return true;
};

var confirmPal = str => {
  if (checkPalindrome(str)) {
    alert('palindrome');
  } else {
    alert('not palindrome');
  }
};

var str = 'malayalam';
confirmPal(str);
