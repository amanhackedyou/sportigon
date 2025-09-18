import React from 'react'
import SignupPage from './SignupPage';

import { siteConfig } from '@/config/site.config'

export const metadata = {
    title: siteConfig.name + ' - Signup',
    description: 'Create a new account',
    keywords: 'signup, registration, user account',

    openGraph: {
        title: `${siteConfig.name} - Signup`,
        description: 'Create a new account',
        url: '/auth/signup',
        siteName: siteConfig.name,
        locale: 'en_US',
        type: 'website',
    },
}

const page = () => {
    return (
        <SignupPage />
    )
}

export default page;