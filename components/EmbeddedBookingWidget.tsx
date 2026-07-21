import React, { useEffect, useRef, useState } from 'react';

interface EmbeddedBookingWidgetProps {
    /** Base URL of the FSA software booking widget. */
    baseUrl?: string;
}

/**
 * Embeds the FSA company software booking widget (app.fivestarassistants.com/book)
 * in place of the old GoHighLevel calendar. Bookings now flow straight into the
 * FSA platform — a sales_lead is created/deduped and an assignment call is booked
 * onto a rep's calendar with a Google Meet link.
 *
 * Any query params on the current page (name, email, phone, company, role, etc.,
 * passed through from the qualification form) are forwarded to the widget so the
 * visitor never re-enters what they already gave us.
 *
 * The widget reports its content height via postMessage so the iframe grows to
 * fit — no inner scrollbars.
 */
const EmbeddedBookingWidget: React.FC<EmbeddedBookingWidgetProps> = ({
    baseUrl = 'https://app.fivestarassistants.com/book',
}) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [height, setHeight] = useState(800);
    const [src, setSrc] = useState(baseUrl);

    useEffect(() => {
        // Forward the current page's query string (qualification-form prefill).
        const qs = window.location.search;
        setSrc(qs ? `${baseUrl}${qs}` : baseUrl);
    }, [baseUrl]);

    useEffect(() => {
        function onMessage(event: MessageEvent) {
            try {
                const origin = new URL(baseUrl).origin;
                if (event.origin !== origin) return;
            } catch {
                return;
            }
            const data = event.data;
            if (!data || typeof data !== 'object') return;

            if (data.type === 'fsa-booking-height' && typeof data.height === 'number') {
                setHeight(Math.max(600, Math.ceil(data.height)));
            }

            if (data.type === 'fsa-booking-confirmed') {
                if (typeof (window as any).fbq === 'function') {
                    (window as any).fbq('track', 'Schedule');
                }
            }
        }

        window.addEventListener('message', onMessage);
        return () => window.removeEventListener('message', onMessage);
    }, [baseUrl]);

    return (
        <iframe
            ref={iframeRef}
            src={src}
            title="Book Your Call"
            style={{ width: '100%', border: 'none', height, minHeight: 600 }}
            scrolling="no"
        />
    );
};

export default EmbeddedBookingWidget;
