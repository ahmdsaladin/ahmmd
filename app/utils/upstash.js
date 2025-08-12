// @ts-check

/**
 * Make a request to the Upstash REST API
 * @param {string} command - The Redis command to execute
 * @param {any[]} args - Arguments for the command
 * @param {boolean} [readOnly=false] - Whether to use the read-only token
 * @returns {Promise<any>} - The response from the API
 */
async function upstashRequest(command, args = [], readOnly = false) {
  const url = process.env.UPSTASH_SEARCH_REST_URL;
  const token = readOnly 
    ? process.env.UPSTASH_SEARCH_REST_READONLY_TOKEN 
    : process.env.UPSTASH_SEARCH_REST_TOKEN;

  if (!url || !token) {
    throw new Error('Missing Upstash environment variables');
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([command, ...args])
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Upstash request failed: ${error}`);
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Upstash request error:', error);
    throw error;
  }
}

/**
 * Set a key-value pair in Upstash
 * @param {string} key - The key to set
 * @param {any} value - The value to store (will be JSON stringified)
 * @returns {Promise<boolean>} - True if successful
 */
export async function setUpstashKey(key, value) {
  try {
    const result = await upstashRequest('SET', [key, JSON.stringify(value)]);
    return result === 'OK';
  } catch (error) {
    console.error('Error setting Upstash key:', error);
    throw error;
  }
}

/**
 * Get a value from Upstash
 * @param {string} key - The key to retrieve
 * @returns {Promise<any>} - The parsed value or null if not found
 */
export async function getUpstashKey(key) {
  try {
    const result = await upstashRequest('GET', [key], true);
    return result ? JSON.parse(result) : null;
  } catch (error) {
    console.error('Error getting Upstash key:', error);
    throw error;
  }
}

/**
 * Delete a key from Upstash
 * @param {string} key - The key to delete
 * @returns {Promise<boolean>} - True if the key was deleted
 */
export async function deleteUpstashKey(key) {
  try {
    const result = await upstashRequest('DEL', [key]);
    return result === 1;
  } catch (error) {
    console.error('Error deleting Upstash key:', error);
    throw error;
  }
}

// Example usage:
/*
async function example() {
  // Set a value
  await setUpstashKey('user:123', { name: 'John', age: 30 });
  
  // Get a value
  const user = await getUpstashKey('user:123');
  console.log(user); // { name: 'John', age: 30 }
  
  // Delete a value
  await deleteUpstashKey('user:123');
}
*/

export default {
  get: getUpstashKey,
  set: setUpstashKey,
  delete: deleteUpstashKey
};
