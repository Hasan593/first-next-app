import Link from 'next/link';
import React from 'react';

const ProductsPage = () => {
    return (
        <>
            <h1>
                This is products page
            </h1>

            <div className="flex gap-4">
                <Link href="/products/1" className="product-link">Product 1</Link>
                <Link href="/products/2" className="product-link">Product 2</Link>
                <Link href="/products/3" className="product-link">Product 3</Link>
                <Link href="/products/4/reviews/4" className="product-link">Product + reviews</Link>
            </div>
        </>
    );
};

export default ProductsPage;