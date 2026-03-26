// This file centralizes the API and WebSocket configuration.
// Replace these with your Render URL when ready.

export const API_BASE = "http://localhost:8000"; 

// Generate WS_BASE from API_BASE
export const WS_BASE = API_BASE.replace(/^http/, 'ws');
