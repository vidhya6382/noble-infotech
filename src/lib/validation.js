const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(values) {
  const errors = {};
  const name = values.name?.trim() || "";
  const email = values.email?.trim() || "";
  const phone = values.phone?.trim() || "";
  const subject = values.subject?.trim() || "";
  const message = values.message?.trim() || "";

  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 3) errors.name = "Name must be at least 3 characters.";

  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!email.includes("@")) {
    errors.email = "Email is wrong - missing @. Example: name@gmail.com";
  } else if (!email.includes(".")) {
    errors.email = "Email is wrong - missing .com. Example: name@gmail.com";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email, like name@gmail.com";
  } else {
    const lower = email.toLowerCase();
    if (
      lower.includes("@gamil.") ||
      lower.includes("@gmial.") ||
      lower.endsWith("@gmail.co") ||
      lower.endsWith("@gmail.cm") ||
      lower.endsWith("@gmail.con")
    ) {
      errors.email = "Did you mean gmail.com? Please check spelling - you typed " + email;
    }

  }

  if (!phone) {
    errors.phone = "Please enter your phone number.";
  } else if (/[a-zA-Z]/.test(phone)) {
    errors.phone = "Phone number should contain only numbers, no letters.";
  } else {
    const digits = phone.replace(/\D/g, "");
    let core = digits;
    if (digits.length === 12 && digits.startsWith("91")) core = digits.slice(2);
    else if (digits.length === 11 && digits.startsWith("0")) core = digits.slice(1);

    if (digits.length > 12) {
      errors.phone = `Phone number is too long - you entered ${digits.length} digits. Enter only 10 digits.`;
    } else if (core.length < 10) {
      errors.phone = `Phone number is too short - you entered ${core.length} digits. Enter 10 digits.`;
    } else if (core.length > 10) {
      errors.phone = `Phone number is too long - you entered ${core.length} digits. Enter only 10 digits.`;
    } else if (!/^[6-9]\d{9}$/.test(core)) {
      errors.phone = "Enter valid 10-digit mobile, starting with 6, 7, 8 or 9.";
    }
  }

  if (!subject) errors.subject = "Please choose a subject.";
  if (!message) errors.message = "Please enter a message.";
  else if (message.length < 20) errors.message = `Message is too short - ${message.length}/20 characters minimum. Please write more.`;
  else if (message.length > 1000) errors.message = "Message must be under 1000 characters.";

  return errors;
}