import { notFound } from 'next/navigation';
import React from 'react';

const DocsPage = async ({ params }: { params: Promise<{ slug: string[] }> }) => {

    const { slug } = await params;

    if (slug?.length > 3) {
        notFound();
    };

    if (slug?.length === 3) {
        return <h1>
            Viewing docs with explanation {slug[2]} and concept {slug[1]} for feature {slug[0]}
        </h1>
    } else if (slug?.length === 2) {
        return <h1>
            Viewing docs with concept {slug[1]} for feature {slug[0]}
        </h1>
    } else if (slug?.length === 1) {
        return <h1>
            Viewing docs with feature {slug[0]}
        </h1>
    }
    return (
        <>
            <h1>This is DocsPage</h1>
        </>
    );
};

export default DocsPage;