# Code from Bruno

Everything in this folder is adapted from [Bruno](https://github.com/usebruno/bruno), which is used under the MIT licence (see `LICENSE`).

I used Bruno's dropdown since I used Bruno during my placement, and so I really likt the colour scheme and style, I also think it could save some of my time so I can use it elsewhere instead.

## What's included

| File / folder                    | Original location in Bruno                             | What it does in my app                                                        |
| -------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `components/Dropdown/`     | `packages/bruno-app/src/components/Dropdown`| The popup box that the menu appears in                                        |
| `ui/MenuDropdown/`            | `packages/bruno-app/src/ui/MenuDropdown`     | The datatype menu: items, tick mark on the selected item, keyboard navigation |
| `ui/MenuDropdown/SubMenuItem/` | `packages/bruno-app/src/ui/MenuDropdown/SubMenuItem` | Nested sub-menus (part of MenuDropdown, not used by my menus yet) |
| `theme.js`                             | Based on Bruno's dark theme                              | Colours and sizes the dropdown styles read through styled-components  |

## Changes I made

- Changed imports to relative paths with file extensions (e.g. `../../components/Dropdown/index.jsx`), because Bruno uses path aliases that my Vite setup doesn't have
- Cut `theme.js` down to only the values the dropdown uses

## Plan

I'd prefer to replace these with my own components over time. When one is replaced, I'll delete it from this folder and remove its row above.
