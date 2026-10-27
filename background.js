// 1. Set the alarm when the extension is first installed
chrome.runtime.onInstalled.addListener(() => {
    console.log("SubsNotifier installed! Setting the daily alarm...");
    
    // Create an alarm named "dailySubCheck" that rings every 1440 minutes (24 hours)
    chrome.alarms.create("dailySubCheck", { periodInMinutes: 1440 });
});

// 2. Listen for ANY alarm that rings
chrome.alarms.onAlarm.addListener((alarm) => {
    // Check if it's our specific alarm
    if (alarm.name === "dailySubCheck") {
        console.log("Alarm ringing! Time to check subscriptions.");
        
        // STEP A: Pull our saved timestamps from local storage
        // STEP B: Log in and fetch the master subscription list from YouTube
        // STEP C: Compare them!
    }
});