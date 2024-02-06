import React, { useEffect } from 'react';

const YourComponent = () => {
  useEffect(() => {
    // Load the Widget JavaScript bundle
    const script = document.createElement('script');
    script.src = 'https://cloud.google.com/ai/gen-app-builder/client?hl=en_GB';
    document.head.appendChild(script);

    // Ensure the script is loaded before attempting to use the widget
    script.onload = () => {
      // Initialize the search widget
      const configId = '9702b0b3-fa3b-410b-8c7d-7266328c9b37';
      const triggerId = 'searchWidgetTrigger';

      const searchWidget = document.createElement('gen-search-widget');
      searchWidget.setAttribute('configId', configId);
      searchWidget.setAttribute('triggerId', triggerId);

      document.body.appendChild(searchWidget);
    };

    // Clean up the script tag on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Element that opens the widget on click. It does not have to be an input */}
      <input placeholder="Search here" id="searchWidgetTrigger" />
    </div>
  );
};

export default YourComponent;
