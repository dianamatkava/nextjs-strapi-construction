interface SiteData {
  data: {
    siteName: string;
    siteSlogan: string;
    siteDescription: string;
    siteReview: string;
  }
}

interface Service {
  id: number;
  title: string;
  previewText: string;
  image: {
    url: string;
    alternativeText: string;
  };
}

interface ServiceList {
  data: Service[]
}