import { loginActions } from "@/store/store";
import { saveProject } from "./saveProject";

export async function submitProject(formData) {
  const username = localStorage?.username;
  const project = {
    username,
    category: formData.get("category"),
    title: formData.get("title"),
    image: formData.get("image"),
    amount: formData.get("amount"),
    description: formData.get("description"),
  };
  console.log(project);
  // saveProject(project);
}
export async function verifyUser(dispatch) {
  const email = localStorage?.getItem("email");
  const token = localStorage?.getItem("token");
  if (!email || !token) {
    return;
  }
  try {
    let url = `http://127.0.0.1:8000/user/verfiyuser/${email}/${token}`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    if (data.status === "success") {
      dispatch(loginActions.setIsUserLoggedInToTrue());
    }
  } catch (err) {
    console.log("error");
  }
}
