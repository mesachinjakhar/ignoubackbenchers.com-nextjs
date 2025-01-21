export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateOtp(otp) {
  return otp.length === 6 && /^\d{6}$/.test(otp);
}

export function validateForm(form) {
  // Validate Number of Assignments (should be a number)
  if (form.assignments && !/^\d+$/.test(form.assignments.value)) {
    return {
      status: false,
      error: "Number of Assignments should be a valid number.",
    };
  }

  // Validate Programme (should contain only letters)
  if (form.programme && !/^[A-Za-z]+$/.test(form.programme.value)) {
    return {
      status: false,
      error: "Programme should contain only letters.",
    };
  }

  // Validate Assignment Codes (should contain both letters and numbers)
  if (
    form.codes &&
    (!/[A-Za-z]/.test(form.codes.value) || !/\d/.test(form.codes.value))
  ) {
    return {
      status: false,
      error: "Assignment Codes should contain both letters and numbers.",
    };
  }

  // Validate Assignment Session (should contain both letters and numbers)
  if (
    form.session &&
    (!/[A-Za-z]/.test(form.session.value) || !/\d/.test(form.session.value))
  ) {
    return {
      status: false,
      error: "Assignment Session should contain both letters and numbers.",
    };
  }

  // Validate Full Address (minimum length of 10 characters)
  if (form.address && form.address.value.length < 10) {
    return {
      status: false,
      error: "Full Address should be at least 10 characters long.",
    };
  }

  return { status: true, data: "Form validated" };
}
