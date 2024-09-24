import PageWrapper from "@/components/PageWrapper";
import { NextPage } from "next";

const SSRPage: NextPage = () => {
    const time = new Date().toISOString();
    return (
        <PageWrapper>
            <div>
                <h1>Server-Side Rendered Page</h1>
                <p>This page was rendered on the server at: {time}</p>
            </div>
        </PageWrapper>
    );
};

export default SSRPage;