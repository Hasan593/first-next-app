import React from 'react';
import tab from '@/assets/images/tab.webp';
import tab_2 from '@/assets/images/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg'
import Image from 'next/image';

const Banner = () => {
    return (
        <div>
            <header className="mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">Welcome to Your Dashboard</h1>
                <p className="text-gray-500">Manage your profile, settings, and more with ease.</p>
            </header>

            {/* Import Image */}
            <div className='flex'>
                <div>
                    <Image src={tab}
                        alt='tab'
                        quality={80}
                        height={500}
                        width={500}
                    />
                </div>
                <div className='w-1/2 border-green-600 p-2 border-2 rounded-md relative'>
                    <Image src={tab_2}
                        alt='tab_2'
                        objectFit='cover'
                        fill
                        className='rounded-md'
                    />
                </div>
            </div>

            {/* Link Image */}
            <div className='flex'>
                <div className='h-96 w-1/2 relative'>
                    <Image
                        src="https://images.pexels.com/photos/30149581/pexels-photo-30149581/free-photo-of-exciting-rally-car-racing-in-beynam-ankara.jpeg"
                        alt="Picture of the author"
                        objectFit='cover'
                        fill
                    />
                </div>
                <div className='w-1/2 border-green-600 p-2 border-2 rounded-md relative'>
                    <Image src="https://www.pixelstalk.net/wp-content/uploads/image10/A-beautiful-autumn-forest-HD-Desktop-Background-with-a-carpet-of-fallen-leaves-and-a-winding-path-620x338.jpg"
                        alt='tab_2'
                        className='rounded-md'
                        fill
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;