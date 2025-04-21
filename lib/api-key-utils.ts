import crypto from 'crypto';

const API_KEY_PREFIX = 'clapi_'; 
const API_KEY_LENGTH = 32; 
export function generateApiKey(): string {
  const randomBytes = crypto.randomBytes(API_KEY_LENGTH);
  const randomString = randomBytes.toString('base64url'); // Use base64url for URL-safe characters
  return `${API_KEY_PREFIX}${randomString}`;
} 