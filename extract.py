import re
import json

log_file = r"C:\Users\zahir\.gemini\antigravity\brain\aab9bfcb-754e-479f-abd1-cc8625178af0\.system_generated\logs\overview.txt"
target_file = r"c:\projects\assignament-1-to 9\assignment-8-react\public\Data.json"

def main():
    try:
        with open(log_file, 'r', encoding='utf-8') as file:
            content = file.read()
            
            if "WhatsApp Messenger" in content:
                parts = content.split('<USER_REQUEST>')
                for part in parts:
                    if "WhatsApp Messenger" in part:
                        # Extract everything that looks like a JSON array
                        match = re.search(r'\[\s*\{.*?\}\s*\]', part, re.DOTALL)
                        if match:
                            json_str = match.group(0)
                            try:
                                data = json.loads(json_str)
                                if isinstance(data, list) and len(data) > 0 and data[0].get('title') == 'WhatsApp Messenger':
                                    with open(target_file, 'w', encoding='utf-8') as out:
                                        json.dump(data, out, indent=2)
                                    print(f"Successfully extracted {len(data)} items and saved to {target_file}")
                                    return
                            except Exception as e:
                                print("JSON parse error", e)
    except Exception as e:
        print("File read error:", e)

    print("Could not find or parse the payload.")

if __name__ == '__main__':
    main()
