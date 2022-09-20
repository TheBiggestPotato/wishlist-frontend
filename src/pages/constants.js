export const logoSrc = `${process.env.PUBLIC_URL}/assets/logo.png`;

// Register Page

export const registerInputFields = [
  {
    type: "text",
    placeholder: "Full Name",
    id: "nameField",
  },
  {
    type: "text",
    placeholder: "Email",
    id: "emailField",
  },
  {
    type: "tel",
    placeholder: "Phone Number",
    id: "phoneField",
  },
  {
    type: "date",
    placeholder: "Date of birth",
    id: "dateField",
  },
  {
    type: "password",
    placeholder: "Password",
    id: "passField",
  },
  {
    type: "password",
    placeholder: "Confirm Password",
    id: "confPassField",
  },
];

// Profile Page

export const publicParams = [
  {
    type: "text",
    placeholder: "Full Name",
  },
  {
    type: "text",
    placeholder: "Email",
  },
  {
    type: "tel",
    placeholder: "Phone",
  },
];

export const passParams = [
  {
    type: "password",
    placeholder: "New Password",
  },
  {
    type: "password",
    placeholder: "Confirm Password",
  },
];
