# DynamicTestCaseCreator
A project created to streamline creating **Equivalence Partitioning (EP)** &amp; **Boundary Value Analysis (BVA)** test cases for certain applications, created specifically in mind to help out QA engineers and developers as I did lots of testing during my 3rd year college workplacement at DPD Ireland.

## Project Inspiration

During my third-year work placement at DPD, I wrote API test cases in [Bruno](https://www.usebruno.com/). Testing a single field properly in one call with EP and BVA meant duplicating one request up to ~40 times and changing one value in the body each time.

The process was slow and repetitive, actually thinking of the tests was the fun part, but it only took around 10 minutes, but then I had to create, run, and record the tests, which then took 10x the time. You can send requests and do tests on Bruno and Postman, but neither generates tests for you, so I wanted to make something that would. I plan to be able to import a Bruno call file (`.yml`), and then pick a parameter, choose its datatype, enter its valid range, and the app generates every EP/BVA test value along with whether each one is expected to be valid or invalid.



## Technology stack

| Technology | Purpose | 
| --- | --- |
| **React** | UI library | 
| **Vite** | Dev server |
| **Tailwind CSS** | Styling |
| **Electron** *(later)* | To turn it into a desktop app |
| **Vitest** *(later)* | Unit testing |
| **Playwright** *(later)* | End-to-end testing |

## Architecture

### Project structure/tree

```
ProjectFolder/
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── components
│   │   ├── DataTypeSelector
│   │   │   ├── StyledWrapper.js
│   │   │   └── index.js
│   │   └── Dropdown
│   │       ├── StyledWrapper.js
│   │       └── index.jsx
│   ├── exporters
│   │   └── txtExporter.js
│   ├── generators
│   │   └── integerGenerator.js
│   ├── index.jsx
│   ├── main.jsx 
│   ├── parsers
│   │   └── brunoParser.js
│   ├── style.css
│   ├── theme.js
│   └── ui
│       └── MenuDropdown
│           ├── StyledWrapper.js
│           ├── SubMenuItem
│           │   └── index.jsx
│           └── index.jsx
├── tsconfig.json
└── vite.config.mjs
```


## Running it

You'll need [Node.js](https://nodejs.org/) installed (I'm using v26), which comes with npm.

```bash
git clone https://github.com/ShammirCortez/DynamicTestCaseCreator.git
cd DynamicTestCaseCreator
npm install
npm run dev
```

Then open the link Vite gives you in the terminal.

## Example

Say a parcel's `Weight` has to be between 1 and 50:

1. Select Integer
2. Enter 1 as the lower boundary and 19 as the upper boundary
3. Click Generate

| Test case | Value | Expected |
| --- | --- | --- |
| Below Integer minimum | -2147483649 | Invalid |
| Integer minimum | -2147483648 | Invalid |
| Just above Integer minimum | -2147483647 | Invalid |
| Just below Integer maximum | 2147483646 | Invalid |
| Integer maximum | 2147483647 | Invalid |
| Above Integer maximum | 2147483648 | Invalid |
| Below application minimum | 0 | Invalid |
| Application minimum | 1 | Valid |
| Just above application minimum | 2 | Valid |
| Just below application maximum | 18 | Valid |
| Application maximum | 19 | Valid |
| Above application maximum | 20 | Invalid |

During placement, each one of these would have been a request I would've had to duplicat and edit by hand.

## Credits

- The `Dropdown` and `MenuDropdown` components come from [Bruno](https://github.com/usebruno/bruno), which is open source under the MIT licence.
- I also take alot of inspiration from Brunos design.
