import React from 'react';
import LoginPage from './LoginPage';
import { siteConfig } from '@/config/site.config';
export const metadata = {
    title: siteConfig.name + ' - Login',
    description: 'Login to your account',
    keywords: 'login, authentication, user account',
    openGraph: {
        title: `${siteConfig.name} - Login`,
        description: 'Login to your account',
        url: '/auth/login',
        siteName: siteConfig.name,
        locale: 'en_US',
        type: 'website',
    },
};
const page = () => {
    return (<LoginPage />);
};
export default page;
//# sourceMappingURL=page.jsx.map