import { signupActions } from "@/store/store";
import { useRouter } from "next/navigation";
export async function signUp(url, user, dispatch) {
  // const router = useRouter();
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const statusCode = response.status;
  const data = await response.json();
  if (statusCode === 400) {
    dispatch(signupActions.setSignupSnackbarMessage("user already exist"));
    dispatch(signupActions.openIsOpen());
  } else if (statusCode === 401) {
    dispatch(
      signupActions.setSignupSnackbarMessage(
        "user with same username already exist"
      )
    );
    dispatch(signupActions.openIsOpen());
  } else if (statusCode === 200) {
    dispatch(signupActions.setSignupSnackbarMessage("User Added"));
    dispatch(signupActions.openIsOpen());
  }
  console.log(statusCode);
  // router.push("/");
}
