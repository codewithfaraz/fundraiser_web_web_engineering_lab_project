 import Foot from "@/components/Footer";
 import Footer from "rc-footer";
 import "rc-footer/assets/index.css";
 import classes from "./about-us.module.css";
 const TeamMember = ({ name, role, description, email }) => (
  <div className="column">
    <div className="card">
      <img src={`/w3images/${name.toLowerCase().replace(' ', '')}.jpg`} alt={name} style={{ width: '100%' }} />
      <div className="container">
        <h2>{name}</h2>
        <p className="title">{role}</p>
        <p>{description}</p>
        <p>{email}</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
);

export default function About() {return(
  <div>
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#474e5d', color: 'white' }}>
      <h1>About Us </h1>
      <p>Meet our talented individuals who bring passion and expertise to everything they do.</p>
      <p> From creative designers to full-stack developers</p>
    </div>
    <h2 style={{ textAlign: 'center' }}>Our Team</h2>
    <div style={{ content: "", clear: 'both', display: 'table' }}>
      <div style={{ float: 'left', width: '25.3%', marginBottom: '16px', padding: '0 8px',marginLeft:"90px" }}>
        <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', margin: '8px' }}>
          <img src="/assets/download.png" alt="Jane" style={{ width: '100%' }} />
          <div style={{ padding: '0 16px' }}>
            <h2>Faraz Maqsood</h2>
            <p style={{ color: 'grey' }}>CEO & Founder</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>FarazMaqsood@example.com</p>
            <p><button style={{ border: 'none', outline: '0', display: 'inline-block', padding: '8px', color: 'white', backgroundColor: '#000', textAlign: 'center', cursor: 'pointer', width: '100%' }}>Contact</button></p>
          </div>
        </div>
      </div>
      <div style={{ float: 'left', width: '25.3%', marginBottom: '16px', padding: '0 8px',marginLeft:"90px" }}>
        <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', margin: '8px' }}>
          <img src="/assets/download.png" alt="Mike" style={{ width: '100%' }} />
          <div style={{ padding: '0 16px' }}>
            <h2>Dawood Ramzan</h2>
            <p style={{ color: 'grey' }}>Developer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>Dawood@example.com</p>
            <p><button style={{ border: 'none', outline: '0', display: 'inline-block', padding: '8px', color: 'white', backgroundColor: '#000', textAlign: 'center', cursor: 'pointer', width: '100%' }}>Contact</button></p>
          </div>
        </div>
      </div>
      <div style={{ float: 'left', width: '25.3%', marginBottom: '16px', padding: '0 8px',marginLeft:"90px"}}>
        <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', margin: '8px' }}>
          <img src="/assets/download.png" alt="John" style={{ width: '100%' }} />
          <div style={{ padding: '0 16px' }}>
            <h2>Kashan Nadeem</h2>
            <p style={{ color: 'grey' }}> UI/UX Designer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>KashanNadeem@example.com</p>
            <p><button style={{ border: 'none', outline: '0', display: 'inline-block', padding: '8px', color: 'white', backgroundColor: '#000', textAlign: 'center', cursor: 'pointer', width: '100%' }}>Contact</button></p>
          </div>
        </div>
      </div>
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
  </div>
);

}