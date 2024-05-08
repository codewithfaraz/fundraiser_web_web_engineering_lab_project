import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Slider from "@/components/slider";
import classes from "./FeaturedProjects.module.css";
const featuredprojects = [];
export default function FeaturedProjects() {
  const [featureProjectsToDisplay, setFeatureProjectsToDisplay] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let url = "http://127.0.0.1:8000/project/getallprojects";
      const response = await fetch(url);
      const data = await response.json();

      if (data.allProjects.length >= 7) {
        const newArray = data.allProjects.slice(0, 3);
        setFeatureProjectsToDisplay(newArray);
      } else {
        setFeatureProjectsToDisplay(data.allProjects);
      }
      data.allProjects.map((p, index) => {
        if (index >= 3) {
          return;
        }
      });
    }
    fetchData();
    // Cleanup function (if needed)
    return () => {
      // Perform cleanup here if necessary
    };
  }, []);
  console.log(featureProjectsToDisplay);
  return <Slider data={featureProjectsToDisplay} />;
}
