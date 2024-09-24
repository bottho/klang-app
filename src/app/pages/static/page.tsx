import PageWrapper from '@/components/PageWrapper';
import { NextPage } from 'next';

const StaticPage: NextPage = () => {
    return(
        <PageWrapper>
            <div>
                <h1>Statically Generated Page</h1>
                <p>This page is pre-rendered at build time.</p>
            </div>
        </PageWrapper>
    );
};

export default StaticPage;