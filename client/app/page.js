"use client";
import { useDispatch } from "react-redux";
import { verifyUser } from "@/lib/verifyUser";
import styles from "./page.module.css";
import FeaturedProjects from "@/components/FeaturedProjects";
import Link from "next/link";
import { Box, Typography, Grid } from "@mui/material";
export default function Home() {
  const dispatch = useDispatch();
  verifyUser(dispatch);
  return (
    <main className={styles.main}>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: '"Times New Roman", Times, serif',
        }}
      >
        <h1>Invest In Dreams, Fund the Future</h1>
        <Link href="/addproject" className={styles.btn}>
          Invest
        </Link>
      </Box>
      <h1>Investing in vision and Innovation</h1>
      <Grid sx={{ height: "80vh", padding: "20px" }} container>
        <Grid
          item
          xs={6}
          sx={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body">
            By supporting projects, you're not simply funding an endeavor;
            you're embarking on a journey. Together, we can shape a future where
            ambitious projects flourish
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#adbf69", fontWeight: "bold", marginTop: "20px" }}
          >
            Thank You For Your Support
          </Typography>
          <Link
            href="/addproject"
            style={{
              color: "black",
              border: "1px solid black",
              padding: "10px 20px",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          >
            Invest Now
          </Link>
        </Grid>
        <Grid item xs={6} sx={{ background: "#adbf69" }}></Grid>
      </Grid>
      <Typography variant="h5" sx={{ textAlign: "left", padding: "30px" }}>
        Featured Projects
      </Typography>

      <FeaturedProjects />
    </main>
  );
}
