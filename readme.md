# Hacking Tools Facts Generator

A dynamic web application that displays interesting facts about various cybersecurity and hacking tools. When users click on tool icons, they get random interesting facts about each tool.

## Project Structure

The project consists of four main files:

1. `index.html` - The main HTML file that structures the webpage and contains the tool grid layout.
   - Contains the responsive grid of hacking tools
   - Uses Font Awesome icons for tool representation
   - Includes a fact display section

2. `style.css` - The styling file that makes the application look modern and responsive.
   - Dark theme design
   - Responsive grid layout
   - Hover effects and animations
   - Mobile-friendly design

3. `base.js` - The JavaScript file that handles the interactive functionality.
   - Contains facts database for each tool
   - Manages click events on tool icons
   - Randomly selects and displays facts

4. `facts.json` - A JSON file storing all the facts about the tools.
   - Structured data for each tool
   - Easy to maintain and update facts

## Features

- 17 different hacking tools with unique facts
- Interactive clicking mechanism
- Responsive design that works on all devices
- Modern dark theme interface
- Hover effects for better user experience
- Random fact generation for each tool

## Tools Included

- Metasploit
- Wireshark
- Nmap
- Burp Suite
- John the Ripper
- Aircrack-ng
- OWASP ZAP
- Hydra
- Nikto
- BeEF
- Gobuster
- SearchSploit
- Hashcat
- SQLmap
- Exploit-DB
- Maltego
- Netcat

## How to Use

1. Open `index.html` in a web browser
2. Click on any tool icon to display a random fact about that tool
3. Click multiple times to see different facts about the same tool

## Development

To modify or enhance the project:

- Add new tools by updating both the HTML grid and the facts database in `base.js`
- Modify styles in `style.css` to change the appearance
- Update facts in `base.js` to add or modify tool information

## Requirements

- Modern web browser with JavaScript enabled
- Internet connection (for Font Awesome icons)

## License

This project is open source and available for educational purposes.
