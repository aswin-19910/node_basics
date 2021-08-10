console.log("hello world");
var otpGenerator = require('otp-generator')

console.log(otpGenerator.generate(6, { digits: true, alphabets: false,upperCase: false, specialChars: false }));