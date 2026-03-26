// This file centralizes the API and WebSocket configuration.
// Replace these with your Render URL when ready.

export const API_BASE = "https://irdd1-0-1.onrender.com"; 

// Generate WS_BASE from API_BASE
export const WS_BASE = API_BASE.replace(/^http/, 'ws');
