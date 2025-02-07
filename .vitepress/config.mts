import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AIDevX",
  description: "AIDevX Platform User Manual",
  lang: "en-US",
  lastUpdated: true,

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://aidevx.mtssb.io/_nuxt/logo.9dec2b49.svg",
      },
    ],
    ["meta", { name: "theme-color", content: "#5E17EB" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "https://aidevx.mtssb.io/_nuxt/logo.9dec2b49.svg",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "https://aidevx.mtssb.io/_nuxt/logo.9dec2b49.svg",
        color: "#5E17EB",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "https://aidevx.mtssb.io/_nuxt/logo.9dec2b49.svg",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#5E17EB" }],
  ],

  themeConfig: {
    siteTitle: false,
    logo: "https://aidevx.mtssb.io/_nuxt/logo.9dec2b49.svg",
    logoClass: "logo-center",

    nav: [
      { text: "Home", link: "/" },
      { text: "Quick Start", link: "/getting-started" },
      {
        text: "User Guide",
        items: [
          { text: "Platform Overview", link: "/platform-overview" },
          { text: "Chat Interface", link: "/chat-interface" },
          { text: "Project Management", link: "/project-management" },
          { text: "Settings", link: "/settings" },
        ],
      },
      {
        text: "Features",
        items: [
          {
            text: "Core Features",
            items: [{ text: "AI Assistants", link: "/assistant-settings" }],
          },
          {
            text: "Development Tools",
            items: [
              { text: "Tools Overview", link: "/tools/" },
              { text: "Markdown Editor", link: "/tools/markdown-editor" },
              { text: "Document Templates", link: "/tools/document-template" },
              { text: "Mermaid Diagrams", link: "/tools/mermaid-diagrams" },
              { text: "Repository", link: "/tools/repository" },
              { text: "Saved Prompts", link: "/tools/saved-prompts" },
            ],
          },
        ],
      },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          items: [
            { text: "Quick Start Guide", link: "/getting-started" },
            { text: "Platform Overview", link: "/platform-overview" },
          ],
        },
        {
          text: "Essential Features",
          items: [
            { text: "Chat Interface", link: "/chat-interface" },
            { text: "Project Management", link: "/project-management" },
            { text: "Settings", link: "/settings" },
            { text: "AI Assistants", link: "/assistant-settings" },
          ],
        },
        {
          text: "Development Tools",
          collapsed: false,
          items: [
            { text: "Tools Overview", link: "/tools/" },
            {
              text: "Content Creation",
              items: [
                { text: "Markdown Editor", link: "/tools/markdown-editor" },
                {
                  text: "Document Templates",
                  link: "/tools/document-template",
                },
                { text: "Mermaid Diagrams", link: "/tools/mermaid-diagrams" },
              ],
            },
            {
              text: "File Management",
              items: [
                { text: "Repository", link: "/tools/repository" },
                { text: "Saved Prompts", link: "/tools/saved-prompts" },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [],

    footer: {
      message: "AIDevX Platform",
      copyright: `© ${new Date().getFullYear()} AIDevX. All Rights Reserved.`,
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Search",
            buttonAriaLabel: "Search",
          },
          modal: {
            noResultsText: "No results found for",
            resetButtonTitle: "Reset search",
            footer: {
              selectText: "to select",
              navigateText: "to navigate",
              closeText: "to close",
            },
          },
        },
      },
    },

    outline: {
      level: [2, 3],
      label: "On this page",
    },

    docFooter: {
      prev: "Previous page",
      next: "Next page",
    },
  },
});
