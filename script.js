// ================================
// Social Media Impact Data
// ================================

// Popular social media platforms (String)
var platform1 = "Instagram";
var platform2 = "TikTok";
var platform3 = "Twitter";

// Average daily screen time in hours (Number)
var screenTimeInstagram = 2.5;
var screenTimeTikTok = 3.2;
var screenTimeTwitter = 1.8;

// Total weekly screen time calculation
var totalWeeklyScreenTime = (screenTimeInstagram + screenTimeTikTok + screenTimeTwitter) * 7;

// Percentage of users affected by social media pressure (Number)
var anxietyPercentage = 65;
var depressionPercentage = 50;

// Constructing a message about social media usage (String)
var impactMessage = `On average, people spend ${totalWeeklyScreenTime.toFixed(1)} hours per week on social media. 
Studies show that ${anxietyPercentage}% of users experience anxiety and ${depressionPercentage}% experience depression due to social media pressure.`;

// Insert data into the webpage
document.getElementById("platforms").innerHTML = `Popular Platforms: ${platform1}, ${platform2}, ${platform3}`;
document.getElementById("weekly-screen-time").innerHTML = `Total Weekly Screen Time: ${totalWeeklyScreenTime.toFixed(1)} hours`;
document.getElementById("anxiety-impact").innerHTML = `Anxiety Impact: ${anxietyPercentage}% of users affected.`;
document.getElementById("depression-impact").innerHTML = `Depression Impact: ${depressionPercentage}% of users affected.`;
document.getElementById("impact-message").innerHTML = impactMessage;

// ================================
// New Feature: Social Media Facts
// ================================

// Array of social media impact facts
var socialMediaFacts = [
    "Over 4.48 billion people use social media worldwide.",
    "The average person spends about 2.5 hours on social media daily.",
    "Social media has been linked to increased anxiety and depression in teens.",
    "About 70% of marketers use social media for customer engagement.",
    "Facebook remains the most-used social platform with over 2.9 billion users.",
    "Social media plays a crucial role in spreading news, both real and fake."
];

// Track the current fact index
var factIndex = 0;

// Function to display the next fact
function showNextFact() {
    var factDisplay = document.getElementById("fact-display");

    // Display the current fact
    factDisplay.innerText = socialMediaFacts[factIndex];

    // Move to the next fact (loop back to the start if at the end)
    factIndex = (factIndex + 1) % socialMediaFacts.length;
}

// Event listener for the button
document.getElementById("next-fact").addEventListener("click", showNextFact);
