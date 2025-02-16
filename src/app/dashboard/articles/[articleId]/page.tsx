import Link from 'next/link';
import React from 'react';

const ArticleId_page = async ({
    params,
    searchParams
}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: 'bn' | 'en' }>;
}) => {

    const { articleId } = await params;
    const { lang = 'bn' } = await searchParams;
    return (
        <>
            {
                lang === 'en' ? <h1> Article Page for news to {articleId} </h1>
                    :
                    <h1> আর্টিকেল পেজ নিউজের জন্য {articleId} </h1>
            }
            {
                lang === 'en' ? <p className='text-red-700'>Reading in English</p> : <p className='text-red-700'>Reading in Bangla</p>
            }
            <div className='flex gap-10 mt-12'>
                <button>
                    <Link
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        href={`/dashboard/articles/${articleId}?lang=en`}>
                        Go to English</Link>
                </button>
                <button>
                    <Link
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        href={`/dashboard/articles/${articleId}?lang=bn`}>
                        বাংলাতে যান</Link>
                </button>
            </div>
        </>
    );
};

export default ArticleId_page;