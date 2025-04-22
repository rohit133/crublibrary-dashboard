import crypto from 'crypto';

const API_KEY_PREFIX = 'clapi_'; 
const API_KEY_LENGTH = 32; 

/**
 * @description Generates a unique, prefixed API key.
 * Uses cryptographically strong random bytes and encodes them in base64url.
 * Prepends a defined prefix (`API_KEY_PREFIX`) to the generated string.
 * @returns {string} A newly generated API key string (e.g., "clapi_abc123...").
 */
export function generateApiKey(): string {
  const randomBytes = crypto.randomBytes(API_KEY_LENGTH);
  const randomString = randomBytes.toString('base64url'); // Use base64url for URL-safe characters
  return `${API_KEY_PREFIX}${randomString}`;
} 