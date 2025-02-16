import Link from 'next/link';
import React from 'react';

const ReviewsPage = () => {
    return (
        <>
            <h1>This is Reviews Page</h1>
            <div className="flex gap-4">
                <Link href="/products/1/reviews/1" className="product-link">Review 1</Link>
                <Link href="/products/1/reviews/2" className="product-link">Review 2</Link>
                <Link href="/products/1/reviews/3" className="product-link">Review 3</Link>
                <Link href="/products/1/reviews/400" className="product-link">Review 4</Link>
            </div>
        </>
    );
};

export default ReviewsPage;