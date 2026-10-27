
const channelLink = document.querySelector('a[href*="/channel/UC"]');

if (channelLink) {
    const url = channelLink.href;
    
    const channelId = url.split('/')[4]; 

    const watchData = {};
    watchData[channelId] = Date.now();

    chrome.storage.local.set(watchData, () => {
        console.log("SubsNotifier: Logged watch for channel " + channelId);
    });
}