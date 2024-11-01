import { h } from "preact";

export default function RegisterForm() {
  const handleSubmit = (event: Event) => {
    event.preventDefault(); // Prevent default form submission

    const form = event.target as HTMLFormElement;

    //Our form values
    const email = (form.querySelector('[name="email"]') as HTMLInputElement).value;
    const password = (form.querySelector('[name="password"]') as HTMLInputElement).value;
    const birthdate = (form.querySelector('[name="birthdate"]') as HTMLInputElement).value;
    const phone_number = (form.querySelector('[name="phoneNumber"]') as HTMLInputElement).value;
    const first_name = (form.querySelector('[name="firstName"]') as HTMLInputElement).value;
    const last_name = (form.querySelector('[name="lastName"]') as HTMLInputElement).value;

    // Regex patterns
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //From Regex101
    const phone_regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;  //From StackOverflow

	//"Error array" to be displayed in warning at end.
    const errors: string[] = [];
    
    if (!email_regex.test(email) || !email) {
      errors.push("Please enter a valid email address.");
    }

    if (email === "tylerthecreator@gmail.com") {
    	errors.push("Email already in use.");
    }

    //if (!phone_regex.test(phone_number) || !(phone_number == "")) {
    //	errors.push("Please enter a valid phone number.");
    //}

    if (!first_name) {
    	errors.push("Please enter your first name.");
    }

    if (!last_name) {
    	errors.push("Please enter your last name.");
    }

    if (password.length < 4) {
      errors.push("Password must be at least 4 characters long.");
    }

    if (!birthdate) {
      errors.push("Please enter a valid birthdate.");
    }

    if (errors.length >= 5) {
    	alert("Please fill out the form before submission");
    }
    else if (errors.length > 0) {
    	alert(errors.join("\n"));
    }
    else {
    	alert("Form submitted successfully!");
    	window.location.href = "/home";	
    }
  };

  return (
    <form style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1.3rem; width: 20rem;" onSubmit={handleSubmit}>
      <label style="color: white; font-size: 1.5rem;">
        First Name:
        <input type="text" name="firstName" style="color: black; margin-top: 0.5rem; padding: 0.5rem; border-radius: 0.4rem; font-size: 1.2rem; width: 100%;" />
      </label>
      <label style="color: white; font-size: 1.5rem;">
        Last Name:
        <input type="text" name="lastName" style="color: black; margin-top: 0.5rem; padding: 0.5rem; border-radius: 0.4rem; font-size: 1.2rem; width: 100%;" />
      </label>
      <label style="color: white; font-size: 1.5rem;">
        Phone Number:
        <input type="text" name="phoneNumber" style="color: black; margin-top: 0.5rem; padding: 0.5rem; border-radius: 0.4rem; font-size: 1.2rem; width: 100%;" />
      </label>
      <label style="color: white; font-size: 1.5rem;">
        Email:
        <input type="email" name="email" style="color: black; margin-top: 0.5rem; padding: 0.5rem; border-radius: 0.4rem; font-size: 1.2rem; width: 100%;" />
      </label>
      <label style="color: white; font-size: 1.5rem;">
        Password:
        <input type="password" name="password" style="color: black; margin-top: 0.5rem; padding: 0.5rem; border-radius: 0.4rem; font-size: 1.2rem; width: 100%;" />
      </label>
      <label style="color: white; font-size: 1.5rem;">
        Date Of Birth:
        <input type="date" name="birthdate" style="color: black; margin-top: 0.5rem; padding: 0.5rem; border-radius: 0.4rem; font-size: 1.2rem; width: 100%;" />
      </label>
      <button type="submit" style="background-color: #48bb78; color: white; padding: 1rem; border-radius: 0.4rem; font-size: 1.5rem; border: none; cursor: pointer;">Register</button>
    </form>
  );
}
