const toolFacts = {
    metasploit: [
        "Metasploit was originally created by HD Moore in 2003.",
        "It contains over 1500 exploits for various systems.",
        "Metasploit is written in Ruby programming language.",
        "It's now owned and maintained by Rapid7."
    ],
    wireshark: [
        "Wireshark was originally named Ethereal.",
        "It can capture and analyze packets in real-time.",
        "Wireshark supports over 2000 network protocols.",
        "It's the world's most widely-used network protocol analyzer."
    ],
    nmap: [
        "Nmap was created by Gordon Lyon (Fyodor) in 1997.",
        "It can scan thousands of ports in seconds.",
        "Nmap was featured in The Matrix Reloaded movie.",
        "It's written in C, C++, Python, and Lua."
    ],
    burpsuite: [
        "Burp Suite was created by PortSwigger.",
        "It's primarily used for web application security testing.",
        "The name 'Burp' was chosen randomly.",
        "It can intercept and modify web requests in real-time."
    ],
    johntheripper: [
        "John the Ripper was created by Alexander Peslyak.",
        "It can crack multiple password formats.",
        "The free version supports over 400 hash types.",
        "It's named after the infamous serial killer Jack the Ripper."
    ],
    aircrack: [
        "Aircrack-ng is a complete suite of tools for WiFi security.",
        "It can crack WEP and WPA-PSK keys.",
        "The project started in 2004.",
        "It works on multiple operating systems."
    ],
    owaspzap: [
        "OWASP ZAP is completely free and open source.",
        "It's maintained by a dedicated international team of volunteers.",
        "ZAP can automatically find security vulnerabilities in web applications.",
        "It's one of the world's most popular security tools."
    ],
    hydra: [
        "Hydra is a parallelized login cracker.",
        "It supports over 50 protocols for attack.",
        "Hydra is maintained by THC (The Hacker's Choice).",
        "It's known for its speed and flexibility."
    ],
    nikto: [
        "Nikto is an open-source web server scanner.",
        "It can perform comprehensive tests against web servers.",
        "Nikto checks for over 6700 potentially dangerous files.",
        "It can identify over 1250 servers versions."
    ],
    beef: [
        "BeEF stands for Browser Exploitation Framework.",
        "It focuses on leveraging browser vulnerabilities.",
        "BeEF was first released in 2010.",
        "It's written primarily in Ruby and JavaScript."
    ],
    gobuster: [
        "Gobuster is a directory/file brute forcing tool.",
        "It's written in Go programming language.",
        "Gobuster can perform DNS and VHost busting.",
        "It's known for its high performance."
    ],
    searchsploit: [
        "SearchSploit is the offline version of Exploit-DB.",
        "It provides command-line access to exploits database.",
        "SearchSploit is maintained by Offensive Security.",
        "It's regularly updated with new exploits."
    ],
    hashcat: [
        "Hashcat is the world's fastest password cracker.",
        "It supports over 300 hashing algorithms.",
        "Hashcat can utilize GPU acceleration.",
        "It was originally released in 2009."
    ],
    sqlmap: [
        "SQLMap can automatically detect and exploit SQL injection flaws.",
        "It supports over 30 different types of databases.",
        "SQLMap was first released in 2006.",
        "It's written in Python."
    ],
    exploitdb: [
        "Exploit-DB is maintained by Offensive Security.",
        "It contains over 40,000 exploits.",
        "All exploits are verified before being published.",
        "It's a valuable resource for penetration testers."
    ],
    maltego: [
        "Maltego is used for open-source intelligence gathering.",
        "It can visualize complex relationships between data.",
        "Maltego was created by Paterva.",
        "It's widely used in digital forensics."
    ],
    netcat: [
        "Netcat is known as the 'Swiss Army knife' of networking tools.",
        "It was originally written by Hobbit in 1995.",
        "Netcat can act as both a client and a server.",
        "It supports TCP and UDP protocols."
    ]
};

document.querySelectorAll('.tool').forEach(tool => {
    tool.addEventListener('click', () => {
        const toolName = tool.dataset.tool;
        const facts = toolFacts[toolName];
        if (facts) {
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            document.getElementById('fact-text').textContent = randomFact;
        } else {
            document.getElementById('fact-text').textContent = "Facts coming soon for this tool!";
        }
    });
});