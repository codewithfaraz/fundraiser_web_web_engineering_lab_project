import { loginActions } from "@/store/store";
export async function verifyUser(dispatch) {
  const email = localStorage?.getItem("email");
  const token = localStorage?.getItem("token");
  if (!email || !token) {
    return;
  }
  try {
    let url = `http://127.0.0.1:8000/user/verfiyuser/${email}/${token}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "success") {
      dispatch(loginActions.setIsUserLoggedInToTrue());
    }
  } catch (err) {
    console.log("error");
  }
}
