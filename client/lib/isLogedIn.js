import { loginActions } from "@/store/store";

export async function isLogedIn(url, user, dispatch) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const statusCode = response.status;
  const data = await response.json();
  if (statusCode === 400 || statusCode === 401) {
    dispatch(loginActions.setLoginSnackbarMessage("User not found"));
    dispatch(loginActions.openIsOpen());
  } else {
    dispatch(loginActions.setLoginSnackbarMessage("User Logged in"));
    dispatch(loginActions.openIsOpen());
    dispatch(loginActions.setIsUserLoggedInToTrue());
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.user.username);
    localStorage.setItem("email", data.user.email);
  }
}
