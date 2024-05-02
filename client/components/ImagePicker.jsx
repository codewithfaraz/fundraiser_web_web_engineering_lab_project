"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./ImagePicker.module.css";
export default function ImagePicker({ name, label }) {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState(null);
  const inputImageHandler = () => {
    imageInputRef.current.click();
  };
  const imagePickedHandler = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} fill alt="image picked by user" />
          )}
        </div>
        <input
          required
          onChange={imagePickedHandler}
          ref={imageInputRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
        />
        <button
          className={classes.button}
          type="button"
          onClick={inputImageHandler}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
