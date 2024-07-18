import { useEffect } from 'react';

const PreventZoom = () => {
    useEffect(() => {
        window.Telegram.WebApp.expand()

        const metaTag = document.createElement('meta');
        metaTag.name = 'viewport';
        metaTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(metaTag);

        const preventDefault = (e: any) => {
            e.preventDefault();
        };

        document.addEventListener('gesturestart', preventDefault);
        document.addEventListener('gesturechange', preventDefault);
        document.addEventListener('gestureend', preventDefault);

        let touchDurationTimer: NodeJS.Timeout | null = null;

        const handleTouchStart = (e: any) => {
            touchDurationTimer = setTimeout(() => {
                e.preventDefault();
            }, 500); // Consider a long press after 500ms
        };

        const handleTouchEnd = (e: any) => {
            if (touchDurationTimer) {
                clearTimeout(touchDurationTimer);
                touchDurationTimer = null;
            }
        };

        document.addEventListener('touchstart', handleTouchStart, { passive: false });
        document.addEventListener('touchend', handleTouchEnd, { passive: false });
        document.addEventListener('touchmove', handleTouchEnd, { passive: false });

        return () => {
            document.head.removeChild(metaTag);
            document.removeEventListener('gesturestart', preventDefault);
            document.removeEventListener('gesturechange', preventDefault);
            document.removeEventListener('gestureend', preventDefault);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('touchmove', handleTouchEnd);
        };
    }, []);

    return null;
}

export default PreventZoom;