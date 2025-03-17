interface SiteData {
  data: {
    siteName: string;
    siteSlogan: string;
    siteDescription: string;
    siteReview: string;
  };
}

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  contentText: {
    title: string;
    description: string;
    body: string[];
    image: string;
  };
}
