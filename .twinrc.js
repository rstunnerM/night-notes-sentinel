// .twinrc.js
export default {
  memorySyncSecret: 'TwinSecret2025',
  syncEndpoint: process.env.TWIN_SYNC_URL || 'http://localhost:5173/twin-memory-sync',
  voiceEnabled: true,
  autoLaunch: true,
  enableSafeMode: true,
};
