import PageWrapper from "@/components/PageWrapper";
import { NextPage } from "next";

const ISRPage: NextPage = () => {
    // Fetch data with revalidation
    const time = new Date().toISOString();

    return (
      <PageWrapper>
        <div>
          <h1>Incremental Static Regeneration Page</h1>
          <p>This page was generated at: {time}</p>
        </div>
      </PageWrapper>
    );
  };

  // Set revalidation time in seconds
  export const revalidate = 10;

export default ISRPage;