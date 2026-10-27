// Check if the channel link is on the page
const channelLink = document.querySelector('a[href*="/channel/UC"]');

if (channelLink) {
    const url = channelLink.href;
    // Extract the channel ID (the 5th piece when splitting by '/')
    const channelId = url.split('/')[4]; 

    // Save the current timestamp for this channel
    const watchData = {};
    watchData[channelId] = Date.now();

    chrome.storage.local.set(watchData, () => {
        console.log("SubsNotifier: Logged watch for channel " + channelId);
    });
}