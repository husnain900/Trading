import { useEffect } from 'react';

function DownloadPage() {
  useEffect(() => {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href to the file URL
    link.href = './Download/mt4manager.zip';
    // Set the download attribute with a filename
    link.download = 'mt4manager.zip';
    // Append the anchor to the body
    document.body.appendChild(link);
    // Programmatically click the anchor
    link.click();
    // Remove the anchor from the body
    document.body.removeChild(link);
  }, []);

  return (
    <div>Downloading...</div>
  );
}

export default DownloadPage;
