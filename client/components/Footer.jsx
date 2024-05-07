"use client";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import classes from "./footer.module.css";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 4,
        marginLeft: "5rem",
        marginTop: "3rem",
        width: "150px",
        height: "50px",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? " #adbf69" : "white",
        color: (theme) =>
          theme.palette.mode === "dark" ? " #adbf69" : " #adbf69",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "black" : "black",
        borderRadius: 2,
        border: "5px solid black",
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};
export default function Foot() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            paddingLeft: "200px",
            m: 1,
            bgcolor: "background.paper",
            height: 100,
            borderRadius: 1,
          }}
        >
          <Item> 1 Projects Funded</Item>
          <Item>$100 Towards creatuve work</Item>
          <Item>$10 Pledges</Item>
        </Box>
      </div>
      <div style={{ marginBottom: 20 }}>
        <p className={classes.mid}>
          Get incredible stories, promotions, and matching offers in your inbox
        </p>

        <input
          placeholder="U@example.com"
          style={{
            border: "1px solid #adbf69",
            width: "30%",
            padding: "10px",
          }}
        ></input>
        <a
          href=""
          style={{
            border: "1px solid #adbf69",
            width: "30%",
            padding: "10px",
            backgroundColor: "#adbf69",
          }}
        >
          Subscribe
        </a>
      </div>
      <Footer
        className={classes.back}
        columns={[
          {
            title: (
              <>
                <h1 style={{ marginLeft: 6, color: "black" }}>Growth Grants</h1>
                <p>
                  GrowthGrants connects donors with grassroots projects
                  worldwide and organizations to donate
                </p>
              </>
            ),
          },
          {
            title: (
              <>
                <a href="https://www.google.com">
                  <img
                    src="/assets/google.png"
                    alt="Google Logo"
                    style={{ height: 30, marginLeft: 10 }}
                  />
                </a>
                <a href="https://www.facebook.com">
                  <img
                    src="/assets/facebook.png"
                    alt="Facebook Logo"
                    style={{ height: 30, marginLeft: 10 }}
                  />
                </a>
                <a href="https://www.https://www.linkedin.com">
                  <img
                    src="/assets/linked.png"
                    alt="Facebook Logo"
                    style={{ height: 30, marginLeft: 10 }}
                  />
                </a>
              </>
            ),
          },
        ]}
        bottom="All Rights Are Reserved"
      />
    </>
  );
}
