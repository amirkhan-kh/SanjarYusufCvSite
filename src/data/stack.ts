import {
  siBurpsuite,
  siWappalyzer,
  siMetasploit,
  siWireshark,
  siWordpress,
  siPython,
  siJavascript,
  siHtml5,
  siCss,
  type SimpleIcon,
} from "simple-icons";

export interface StackItem {
  id: string;
  name: string;
  path?: string;
  monogram?: string;
  brand: string;
}

const isDark = (hex: string) => {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 70;
};

const icon = (name: string, si: SimpleIcon): StackItem => ({
  id: si.slug,
  name,
  path: si.path,
  brand: isDark(si.hex) ? "#ffffff" : `#${si.hex}`,
});

const mono = (id: string, name: string, monogram: string, brand: string): StackItem => ({
  id,
  name,
  monogram,
  brand,
});

const vuln = (id: string, name: string, monogram: string) => mono(id, name, monogram, "#f87171");

export const stackRows: StackItem[][] = [
  [
    vuln("sqli", "SQL Injection (SQLi)", "SQLi"),
    vuln("xss", "Cross-Site Scripting (XSS)", "XSS"),
    vuln("bac", "Broken Access Control", "BAC"),
    vuln("ssrf", "Server-Side Request Forgery (SSRF)", "SSRF"),
    vuln("csrf", "Cross-Site Request Forgery (CSRF)", "CSRF"),
    vuln("ssti", "Server-Side Template Injection (SSTI)", "SSTI"),
    vuln("idor", "Insecure Direct Object Reference (IDOR)", "IDOR"),
    vuln("xxe", "XML External Entity (XXE)", "XXE"),
    vuln("rce", "Remote Code Execution (RCE)", "RCE"),
    vuln("lfi", "Local File Inclusion (LFI)", "LFI"),
    vuln("auth-bypass", "Authentication Bypass", "AB"),
    vuln("misconfig", "Security Misconfiguration", "SM"),
    vuln("path-traversal", "Path Traversal", "../"),
    vuln("file-upload", "File Upload Vulnerabilities", "FU"),
  ],
  [
    icon("Burp Suite", siBurpsuite),
    mono("nmap", "Nmap", "Nm", "#8ccbd8"),
    mono("ffuf", "FFUF", "Ff", "#fbbf24"),
    mono("gobuster", "Gobuster", "Gb", "#38bdf8"),
    mono("sqlmap", "SQLmap", "Sq", "#f97316"),
    mono("nuclei", "Nuclei", "Nu", "#a78bfa"),
    mono("nikto", "Nikto", "Nk", "#facc15"),
    mono("whatweb", "WhatWeb", "WW", "#34d399"),
    icon("Wappalyzer", siWappalyzer),
    mono("subfinder", "Subfinder", "Sf", "#60a5fa"),
    mono("amass", "Amass", "Am", "#f472b6"),
    mono("httpx", "httpx", "hx", "#2dd4bf"),
    mono("katana", "Katana", "Ka", "#fb7185"),
    icon("Metasploit Framework", siMetasploit),
    mono("ncat", "Ncat", "Nc", "#a3e635"),
    icon("Wireshark", siWireshark),
    mono("hydra", "Hydra", "Hy", "#4ade80"),
    mono("dalfox", "Dalfox", "Dx", "#c084fc"),
    { ...icon("WPScan", siWordpress), id: "wpscan" },
    mono("dirsearch", "Dirsearch", "Ds", "#fcd34d"),
    icon("Python", siPython),
    icon("JavaScript", siJavascript),
    icon("HTML", siHtml5),
    icon("CSS", siCss),
  ],
];
