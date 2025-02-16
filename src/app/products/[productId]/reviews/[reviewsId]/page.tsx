import { notFound } from 'next/navigation';
import React from 'react';

const ReviewDetailsPage = async ({
    params,
}: {
    params: Promise<{productId: string; reviewsId: string}>;
}) => {
    // const reviewsId = (await params).reviewsId;
    const { productId, reviewsId } = await params;

    if (parseInt(reviewsId) > 100) {
        notFound();
    } else if (parseInt(productId) > 4) {
        notFound();
    }
    return (
        <>
         <h1>This is Reviews Page - {reviewsId} and ProductId - {productId}</h1>   
        </>
    );
};

export default ReviewDetailsPage;