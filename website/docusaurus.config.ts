import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "SAS Viya Copilot Extension for Visual Studio Code Documentation",
  favicon: "images/SASCopilotMktplace.png",

  // Set the production url of your site here
  url: "https://sassoftware.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/sas-copilot/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sassoftware", // Usually your GitHub org/user name.
  projectName: "sas-copilot", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/sassoftware/sas-copilot/tree/main/website/",
        },
        blog: false,
        theme: {
          customCss: ["./src/css/custom.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "SAS Viya Copilot Extension for Visual Studio Code Documentation",
      logo: {
        alt: "SAS",
        src: "images/SASCopilotMktplace.png",
      },
      items: [
        {
          href: "https://github.com/sassoftware/sas-copilot",
          className: "header-github-link",
          title: "GitHub repository",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Support",
          items: [
            {
              label: "SAS Communities",
              href: "https://communities.sas.com/t5/SAS-Programming/bd-p/programming",
            },
            {
              label: "SAS Programming Documentation",
              href: "https://go.documentation.sas.com/doc/en/pgmsascdc/v_048/lepg/titlepage.htm",
            },
            {
              label: "GitHub Repository",
              href: "https://github.com/sassoftware/sas-copilot",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, SAS Institute Inc., Cary, NC, USA. All Rights Reserved. Built with Docusaurus.`,
    },
  } satisfies Preset.ThemeConfig,

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        docsRouteBasePath: "/",
        explicitSearchResultPath: true,
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
};

export default config;
