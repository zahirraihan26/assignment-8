const fs = require('fs');
const path = require('path');

const logDir = 'C:\\Users\\zahir\\.gemini\\antigravity\\brain\\aab9bfcb-754e-479f-abd1-cc8625178af0\\.system_generated\\logs';
const targetFile = 'c:\\projects\\assignament-1-to 9\\assignment-8-react\\public\\Data.json';

try {
    const files = fs.readdirSync(logDir);
    let found = false;
    for (const file of files) {
        if (file.endsWith('.txt')) {
            const content = fs.readFileSync(path.join(logDir, file), 'utf8');
            const startIndex = content.lastIndexOf('<USER_REQUEST>');
            if (startIndex !== -1) {
                const arrStart = content.indexOf('[', startIndex);
                const endIndex = content.indexOf('</USER_REQUEST>', arrStart);
                if (arrStart !== -1 && endIndex !== -1) {
                    const jsonStr = content.substring(arrStart, endIndex).trim();
                    try {
                        // Sometimes the string may end with some markdown or comments like "Comment Ctrl+Alt+M"
                        // So let's try to extract from '[' to the last ']'
                        const lastBracket = jsonStr.lastIndexOf(']');
                        if (lastBracket !== -1) {
                            const cleanJsonStr = jsonStr.substring(0, lastBracket + 1);
                            const parsed = JSON.parse(cleanJsonStr);
                            if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].title === "WhatsApp Messenger") {
                                fs.writeFileSync(targetFile, JSON.stringify(parsed, null, 2));
                                console.log(`Successfully extracted and wrote JSON to ${targetFile}`);
                                found = true;
                                break;
                            }
                        }
                    } catch (e) {
                        console.error('Error parsing JSON from file:', file, e.message);
                    }
                }
            }
        }
    }
    if (!found) {
        console.log("Could not find the JSON payload in the logs.");
    }
} catch (err) {
    console.error("Error reading logs:", err);
}
