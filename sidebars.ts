import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  tutorialSidebar: [
    "intro",
    "docusaurus-tutorial",
    {
      type: "category",
      label: "Neovim",
      collapsible: true,
      collapsed: false,
      link: {
        type: "generated-index",
        description:
          "A tutorial on configuring Neovim with Lua, highlighting the Lazy plugin manager and recommended plugins.",
      },
      items: [
        {
          type: "doc",
          label: "Neovim Configuration with Lua",
          id: "Neovim/nvim-config-with-lua",
        },
        { type: "doc", label: "Useful Vi Tips", id: "Neovim/useful-vi-tips" },
        { type: "doc", label: "Text Objects in Vi", id: "Neovim/text-objects" },
        {
          type: "doc",
          label: "Plugin Manager - Lazy",
          id: "Neovim/plugin-manager-lazy",
        },
        {
          type: "category",
          label: "Plugin Configurations",
          collapsible: true,
          collapsed: true,
          link: {
            type: "generated-index",
            // description: "Recommended Plugins",
          },
          items: [
            {
              type: "doc",
              label: "Treesitter",
              id: "Neovim/Plugins/treesitter",
            },
            {
              type: "doc",
              label: "File Explorer Tree",
              id: "Neovim/Plugins/file-exploer-tree",
            },
            {
              type: "doc",
              label: "Package Manager",
              id: "Neovim/Plugins/package-manager",
            },
            {
              type: "doc",
              label: "LSP",
              id: "Neovim/Plugins/lsp",
            },
            {
              type: "doc",
              label: "Linting",
              id: "Neovim/Plugins/linting",
            },
            {
              type: "doc",
              label: "Formatting",
              id: "Neovim/Plugins/formatting",
            },
            {
              type: "doc",
              label: "Autocomplete",
              id: "Neovim/Plugins/autocomplete",
            },
            // { type: "doc", label: "", id: "Neovim/Plugins/" },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
// { type: "doc", id: "", label: "" },
/* {
          type: "category",
          label: "Plugins",
          items: ["Neovim/Plugins/nvim-tree"],
        }, */
