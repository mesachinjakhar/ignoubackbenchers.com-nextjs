export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateOtp(otp) {
  return otp.length === 6 && /^\d{6}$/.test(otp);
}
