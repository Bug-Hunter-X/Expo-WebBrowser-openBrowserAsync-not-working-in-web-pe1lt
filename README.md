# Expo WebBrowser openBrowserAsync Issue in Web

This repository demonstrates a problem with Expo's `WebBrowser.openBrowserAsync` function when used in a web environment.  The expected behavior is that the function opens the provided URL in a new browser tab or window. However, in the web version of the Expo app, it does not open the URL.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the project using Expo CLI (`expo start`).
4. Observe that clicking the button does not open the URL in a new tab/window when running in web.

## Expected Behavior

The URL ('https://example.com') should open in a new browser tab or window.

## Actual Behavior

The URL does not open, and no error is displayed.  The console log displays the result, but it does not show an indication of a successful open.

## Solution

The solution involved using a more reliable method for opening a URL in web browsers, accounting for potential differences between web and native environments.  This ensures consistent functionality across different platforms. This example uses a simple `window.open()` for web.