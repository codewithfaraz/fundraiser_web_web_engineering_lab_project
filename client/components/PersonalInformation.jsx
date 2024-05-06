export default function PersonalInformation() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const creditCardNumber = "Not Yet Implemented";
  return (
    <>
      <h1>Personal Information Here</h1>
      <h3>User Name</h3>
      <p style={{ border: "1px solid #adbf69", width: "50%", padding: "10px" }}>
        {username}
      </p>
      <h3>Email Address</h3>
      <p style={{ border: "1px solid #adbf69", width: "50%", padding: "10px" }}>
        {email}
      </p>
      <h3>Payment Method</h3>
      <p style={{ border: "1px solid #adbf69", width: "50%", padding: "10px" }}>
        {creditCardNumber}
      </p>
    </>
  );
}
