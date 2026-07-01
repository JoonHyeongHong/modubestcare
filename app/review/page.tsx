import PageHeader from "@/components/common/PageHeader";
import B2BHero from "@/components/sections/B2BHero";
import Portfolio from "@/components/sections/Portfolio";
import { fetchAPI } from "@/lib/api";

export interface PortfolioNode {
  slug: string;
  title: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
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
