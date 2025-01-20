// Api helper
async function apiRequest(url, method = "GET", body = null) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  if (body) options.body = JSON.stringify(body);

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      return { status: true, data };
    } else {
      return { status: false, error: data.message || "Unknown error" };
    }
  } catch (err) {
    console.error("API Request Error: ", err);
    return { status: false, error: "An unexpected error occurred" };
  }
}

// Send otp
export async function sendOtp(email) {
  if (!email) {
    return { status: false, error: "Email is required" };
  }
  return apiRequest(
    `https://api.ignoubackbenchers.com/otp/?email=${encodeURIComponent(email)}`
  );
}

// Login user
export async function loginUser(email, otp) {
  if (!email || !otp) {
    return { status: false, error: "Email and OTP are required" };
  }
  return apiRequest("https://api.ignoubackbenchers.com/user", "POST", {
    email,
    otp,
  });
}

// JWT Token verification
export async function verifyToken() {
  return apiRequest("https://api.ignoubackbenchers.com/verify-token");
}
