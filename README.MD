John Mark Pulmano Portfolio

A modern, responsive portfolio website showcasing the skills and projects of John Mark Pulmano, a Full Stack Developer specializing in AI, web, and mobile solutions. Built with Next.js, Tailwind CSS, and enhanced with interactive animations using Framer Motion and AOS.

Table of Contents

Overview
Features
Technologies
Setup
Usage
File Structure
Contributing
License
Contact

Overview
This portfolio website showcases John Mark Pulmano's expertise in full-stack development, AI-driven applications, and mobile solutions. It features a dynamic splash screen, a live clock and calendar, a skills section with 19 technologies, and a contact footer. The site is optimized for SEO, responsive across devices, and enhanced with interactive animations and a custom cursor effect.
Features

Splash Screen: Terminal-style loader with fake initialization commands (splash.json), animated with Framer Motion.
Home Section: Displays a live clock and calendar (ClockCalendar.tsx) with Moment.js, alongside an interactive background.
Skills Section: Dynamic skill cards (SkillsContainer.jsx) loaded from skills.json, featuring 19 technologies with icons and links.
Contact Footer: Social links (email, GitHub, Instagram, LinkedIn) with a "Made with ❤️ by _jay.yem" signature (ContactContainer.tsx).
SEO Optimization: Meta tags, Open Graph, and Twitter Card data for better search and social media visibility.
Animations: Smooth transitions using Framer Motion (splash screen) and AOS (fade-up, zoom-in effects).
Custom Libraries: Interactive components like InteractiveBackground, ParallaxWrapper, CursorWrapper, and LayoutWrapper.
Responsive Design: Tailwind CSS media queries (max-sm, md) for mobile and desktop compatibility.
Theming: Consistent styling with global.css variables (--background, --muted-cyan, --font-caprasimo, --font-geologica).

Technologies

Framework: Next.js (App Router)
Styling: Tailwind CSS
Icons: React Icons
Animations: Framer Motion, AOS
Date/Time: Moment.js
Custom Libraries:
InteractiveBackground: Dynamic background animation.
ParallaxWrapper: Parallax scrolling effect.
CursorWrapper: Custom cursor interactions.
LayoutWrapper: Page layout with fade-in animation.
PageWrapper: Section wrapper for routing.


Data: JSON files (splash.json, skills.json)

Setup
Prerequisites

Node.js (v18 or higher)
npm (v8 or higher)

Installation

Clone the Repository:
git clone https://github.com/GitHubNexon/portfolio.git
cd portfolio


Install Dependencies:
npm install


Add Static Assets:

Place favicon files in /public:
dev.svg (SVG favicon)
favicon.ico (fallback)


Place Open Graph image in /public:
og-image.jpg (1200x630px)


Example structure:/public
├── dev.svg
├── favicon.ico
├── og-image.jpg




Run the Development Server:
npm run dev

Open http://localhost:3000 in your browser.


Usage
Customization

Update Contact Details:

Edit ContactContainer.tsx props (default values in /container/contact-container.tsx):email="your.email@example.com"
github="https://github.com/yourusername"
instagram="https://www.instagram.com/yourusername/"
linkedin="https://www.linkedin.com/in/yourusername/"
signature="YourName"




Modify Skills:

Update /json/skills.json with new skills, ensuring iconKey matches the iconMap in SkillsContainer.jsx.{
  "iconKey": "react",
  "title": "React.js",
  "description": "Building dynamic UIs with React.",
  "link": "https://react.dev"
}




Change Splash Screen Commands:

Edit /json/splash.json to customize terminal loader commands:{
  "commands": [
    "init: configure core services",
    "fetch: load dynamic assets"
  ]
}




SEO and Metadata:

Update metadata in app/layout.tsx:title: "Your Name - Portfolio",
description: "Your portfolio description",
openGraph: { url: "https://yourdomain.com" }




Favicon:

Replace /public/dev.svg and /public/favicon.ico with your custom favicon files.



Deployment

Build the project:
npm run build


Deploy to a platform like Vercel:

Push the repository to GitHub.
Connect the repository to Vercel and deploy.
Update openGraph.url in app/layout.tsx with your production URL.



File Structure
portfolio/
├── /app
│   ├── layout.tsx           # Root layout with SEO and favicon
│   ├── page.tsx             # Home page entry
├── /components
│   ├── clock-calendar.tsx   # Live clock and calendar
│   ├── cursor-wrapper.tsx   # Custom cursor effect
│   ├── interactive-background.tsx # Animated background
│   ├── layout-wrapper.tsx   # Page layout wrapper
│   ├── page-wrapper.tsx     # Section wrapper
│   ├── parallax-wrapper.tsx # Parallax scrolling
├── /container
│   ├── contact-container.tsx # Contact footer
│   ├── home-container.tsx   # Home section content
│   ├── skills-container.tsx # Skills section
├── /json
│   ├── skills.json          # Skills data
│   ├── splash.json          # Splash screen commands
├── /public
│   ├── dev.svg              # SVG favicon
│   ├── favicon.ico          # Fallback favicon
│   ├── og-image.jpg         # Open Graph image
├── globals.css              # Tailwind CSS and custom styles
├── README.md                # Project documentation
├── package.json             # Dependencies and scripts

Contributing
Contributions are welcome! Please:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

License
This project is licensed under the MIT License. See LICENSE for details.
Contact

Email: johnmarkpulmano.dev@gmail.com
GitHub: GitHubNexon
Instagram: _jay.yem
LinkedIn: John Mark Pulmano

Made with ❤️ by _jay.yem
