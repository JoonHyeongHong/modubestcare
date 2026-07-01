import PageHeader from "@/components/common/PageHeader";
import Portfolio from "@/components/sections/Portfolio";
import { fetchAPI } from "@/lib/api";

export interface PortfolioNode {
  slug: string;
  title: string;
  date: Date;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  acfPortfolios: {
    category: string;
    workDate: Date;
    workerName: string;
    workLocation: string;
  };
}

const query = `
  query GetPortfolioList {
  posts(where: {categoryName: "portfolios"}) {
    nodes{
      slug
      title
      date
      featuredImage {
        node {
          id
          sourceUrl
        }
      }
      acfPortfolios{
        category
        workDate
        workerName
        workLocation
      }
    }    
  }
}
`;

export default async function Home() {
  const res = await fetchAPI(query);
  const portfoliosList = res.posts.nodes;
  return (
    <div className="relative w-full">
      <PageHeader title="작업 후기" subtitle="Cleaning Service Review" />
      <Portfolio portfolios={portfoliosList} />
    </div>
  );
}
