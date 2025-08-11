// This file ensures proper handling of AWS SDK side effects
import '@aws-sdk/core';
import '@aws-sdk/client-ses';

// Export a default function as a no-op
export default function noop() {}

// This file is intentionally left mostly empty as its purpose is to ensure
// the AWS SDK modules are properly included in the bundle with their side effects
