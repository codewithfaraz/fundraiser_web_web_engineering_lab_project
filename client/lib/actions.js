import { saveProject } from "./saveProject";
import slugify from "slugify";
export function submitProject(formData) {
  const username = localStorage?.username;
  const titleSlug = slugify(formData.get("title"), { lower: "true" });
  const extension = formData.get("image").name.split(".").pop();
  // const fileName = `${titleSlug}.${extension}`;
  //here we store the image somewhere
  const project = {
    username,
    category: formData.get("category"),
    title: formData.get("title"),
    image: formData.get("image"),
    amount: formData.get("amount"),
    description: formData.get("description"),
  };
  saveProject(project);
}
