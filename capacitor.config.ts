import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.threesouls.english.bible',
  appName: 'Bible Gems',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
