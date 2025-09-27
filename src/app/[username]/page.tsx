import ProfilePage from '@/components/Profile/ProfilePage';
import { notFound } from 'next/navigation';
import React from 'react'


export const getUsernameFromSlug = (slug: string | any): string | null => {
    if (slug === undefined || typeof slug !== 'string') return null;

    if (!slug.startsWith('%40')) {
        return null;
    }

    return slug.replace('%40', '');
}


const page = async ({ params }: { params: any }) => {
    const params_ = await params;
    const username = getUsernameFromSlug(params_.username);

    if (!username) {
        notFound();
    }

    return (
        <ProfilePage username={username} />
    )
}

export default page