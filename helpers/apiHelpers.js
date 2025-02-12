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
    if (data.status) {
      return { status: true, data };
    }
    if (data.status == false) {
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
  return apiRequest(`https://api.ignoubackbenchers.com/api/v1/otps`, "POST", {
    email,
  });
}

// Login user
export async function loginUser(email, otp) {
  if (!email || !otp) {
    return { status: false, error: "Email and OTP are required" };
  }
  return apiRequest("https://api.ignoubackbenchers.com/api/v1/users", "POST", {
    email,
    otp,
  });
}

// JWT Token verification
export async function verifyToken() {
  return apiRequest("https://api.ignoubackbenchers.com/api/v1/auth");
}

export async function createOrder(orderDetails) {
  return apiRequest(
    "https://api.ignoubackbenchers.com/api/v1/orders",
    "POST",
    orderDetails
  );
}

export async function fetchOrder() {
  return apiRequest("https://api.ignoubackbenchers.com/api/v1/orders", "GET");
}

// export async function LoginDuringOrder(email, otp) {
//   return (loginResult = await apiRequest(
//     "https://api.ignoubackbenchers.com/user",
//     "POST",
//     {
//       email,
//       otp,
//     }
//   ));
// }
