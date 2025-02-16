import Link from 'next/link';
import React from 'react';

const ProductDetailsPage = async ({
    params,
}: {
    params: Promise<{ productId: string }>;
}) => {
    const id = (await params).productId;
    return (
        <>
            <h1>This is ProductDetailsPage - {id}</h1>
            <div className="flex gap-4">
                <Link href="/products/1/reviews" className="product-link">Review 1</Link>
                <Link href="/products/2/reviews" className="product-link">Review 2</Link>
                <Link href="/products/3/reviews" className="product-link">Review 3</Link>
                Md Hasan Uddin
            </div>
        </>
    );
};

export default ProductDetailsPage;