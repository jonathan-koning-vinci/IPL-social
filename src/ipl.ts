export function isValidEmail(email: string): boolean {
  if (!email) {
    return false;
  }

  if (email.includes(" ")) {
    return false;
  }

  const atIndex = email.indexOf("@");
 
  if (atIndex <= 0) {
    return false;
  }

  const secondAtIndex = email.indexOf("@", atIndex + 1);
  if (secondAtIndex !== -1) {
    return false;
  }

  const domain = email.slice(atIndex + 1);

  if (!domain) {
    return false;
  }

  const lastDotIndex = domain.lastIndexOf(".");

  
  if (lastDotIndex <= 0) {
    return false;
  }

  
  if (lastDotIndex === domain.length - 1) {
    return false;
  }

  return true;
}