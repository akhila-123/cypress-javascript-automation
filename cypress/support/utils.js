function generateRandomEmail(domain = 'example.com') {
  const randomString = Math.random().toString(36).substring(2, 15);
  return `${randomString}@${domain}`;
}

export { generateRandomEmail };