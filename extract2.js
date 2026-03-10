const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\zahir\\.gemini\\antigravity\\brain\\aab9bfcb-754e-479f-abd1-cc8625178af0\\.system_generated\\logs\\overview.txt';
const targetFile = 'c:\\projects\\assignament-1-to 9\\assignment-8-react\\public\\Data.json';

try {
    const content = fs.readFileSync(logPath, 'utf8');
    let searchIdx = 0;
    let found = false;
    while ((searchIdx = content.indexOf('<USER_REQUEST>', searchIdx)) !== -1) {
        const arrStart = content.indexOf('[', searchIdx);
        const endIndex = content.indexOf('</USER_REQUEST>', searchIdx);

        if (arrStart !== -1 && endIndex !== -1 && arrStart < endIndex) {
            const jsonStr = content.substring(arrStart, endIndex).trim();
            const lastBracket = jsonStr.lastIndexOf(']');
            if (lastBracket !== -1) {
                const cleanJsonStr = jsonStr.substring(0, lastBracket + 1);
                try {
                    const parsed = JSON.parse(cleanJsonStr);
                    if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].title === "WhatsApp Messenger") {
                        fs.writeFileSync(targetFile, JSON.stringify(parsed, null, 2));
                        console.log(`Successfully extracted ${parsed.length} items and wrote JSON to ${targetFile}`);
                        found = true;
                        break;
                    }
                } catch (e) {
                    // Try to fix missing brackets or commas if needed, but the user's JSON should be valid up to ]
                }
            }
        }
        searchIdx = endIndex + 1;
    }

    if (!found) {
        console.log("Could not find the JSON payload in the overview.txt.");
    }
} catch (err) {
    console.error("Error reading logs:", err);
}
