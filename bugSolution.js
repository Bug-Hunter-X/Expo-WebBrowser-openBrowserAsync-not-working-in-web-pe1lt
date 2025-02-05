import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  if (WebBrowser.maybeCompleteAuthSession) {
    // this is needed to handle the redirect from the browser
    WebBrowser.maybeCompleteAuthSession();
  }
  let result;
  if (typeof window !== 'undefined') {
    // this is needed for web
    window.open('https://example.com', '_blank', 'noopener,noreferrer');
  } else {
    result = await WebBrowser.openBrowserAsync('https://example.com');
  }
  console.log({ result });
}

// ... rest of your component