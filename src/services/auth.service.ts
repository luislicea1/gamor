import { mockUserData } from "../mocks/user";

export async function signInWithEmail(email: string, password: string) {
  if (email === mockUserData.email && password === mockUserData.password) {
    sessionStorage.setItem("user", JSON.stringify({ email }));
    return Promise.resolve();
  } else {
    return Promise.reject("Invalid email or password");
  }
}

export async function signUpNewUser(email: string, password: string) {
  if (email === mockUserData.email) {
    return Promise.reject("Email already exists");
  }
  if (password.length < 6) {
    return Promise.reject("Password must be at least 4 characters");
  }

  sessionStorage.setItem("user", JSON.stringify({ email }));
  return Promise.resolve();
}
export async function signOut() {
  sessionStorage.removeItem("user");
  return Promise.resolve();
}
