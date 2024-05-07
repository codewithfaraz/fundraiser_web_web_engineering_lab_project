import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { fireBaseDB } from "./fireBaseConfig";
export async function saveProject(project) {
  try {
    console.log(project.image);
    const imgRef = ref(fireBaseDB, `files/${v4()}`);
    const uploadTask = uploadBytesResumable(imgRef, project.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% complete");
      },
      (error) => {
        console.error("Error uploading image:", error);
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          project.imageURL = downloadURL;
          saveData(project);
        });
      }
    );
  } catch (err) {
    console.log("error occur");
  }
}
const saveData = async (project) => {
  let url = "http://127.0.0.1:8000/project/addproject";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
  const data = await response.json();
  console.log(data);
};
