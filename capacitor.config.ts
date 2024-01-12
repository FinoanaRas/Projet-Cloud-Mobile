import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cloud.voiture.occasion',
  appName: 'voiture',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
