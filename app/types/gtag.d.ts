declare global {
  interface Window {
    gtag: (command: string, target: any, config?: object) => void;
    dataLayer: any[];
  }
}

export {};
