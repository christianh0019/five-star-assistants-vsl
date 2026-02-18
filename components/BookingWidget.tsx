import React, { useEffect } from 'react';

interface BookingWidgetProps {
    calendarId: string;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ calendarId }) => {

    useEffect(() => {
        // Load GHL/MsgSndr script
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const bookingUrl = `https://api.leadconnectorhq.com/widget/booking/${calendarId}`;

    return (
        <div className="w-full h-full min-h-[600px]">
            <div className="w-full h-full">
                <iframe
                    src={bookingUrl}
                    style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '800px' }}
                    scrolling="no"
                    id={`booking-widget-${calendarId}`}
                    title="Booking Calendar"
                ></iframe>
            </div>
        </div>
    );
};

export default BookingWidget;
