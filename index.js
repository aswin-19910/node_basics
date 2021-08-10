var otpGenerator = require('otp-generator')

console.log(`Your OTP:`,otpGenerator.generate(6, { digits: true, alphabets: false,upperCase: false, specialChars: false }));
