import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, search } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fire Meta Pixel PageView on route change (SPA support)
        if (typeof (window as any).fbq === 'function') {
            (window as any).fbq('track', 'PageView');
        }
    }, [pathname, search]);

    return null;
};

export default ScrollToTop;
