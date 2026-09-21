import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.asmit.moon",
  appName: "Moon",
  webDir: "dist",

  server: {
    url: "https://moon-asmit.vercel.app",
    cleartext: false,
  },

  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 300,
      backgroundColor: "#050b13",
      showSpinner: false,
    },
  },
};

export default config;