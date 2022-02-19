# Colouring

Netlify staging site: [https://darts-colouring.netlify.app/](https://darts-colouring.netlify.app/)

## Making updates

### Adding New Images

- Create an image in SVG format
- Name the image as you would like its name to appear in the game menu (e.g. Flowers in a Vase.svg)
- Optionally use [SVGOMG](https://jakearchibald.github.io/svgomg/) to optimise the image to reduce its size
- Go to [/public/colouring-images](/public/colouring-images)
- Use the Add file menu to add the image

The only supported format for images is SVG. The app works by changing the fill colour of elements within the image, so each shape to colour in should be a separate shape/path with a white fill and black stroke colour.

### Changing Artist Phrases

- Head to [/artist-phrases](/artist-phrases.ts)
- Use the pencil icon to edit the file
- Update or add to the text in the list
- Make sure to put `'` around the phrase and a `,` at the end
- Chose "Commit directly to the `main` branch." and press `Commit changes`

### Updating Colours

For a list of all the colours available to the app, visit the [All Colours](https://darts-colouring.netlify.app/all-colours) page.

To change the selection of these that are shown in the palette chooser:

- Go to [/colour-filter](/colour-filter.ts)
- Use the pencil icon to edit the file
- There is a function here that filters down all the colours by their name
- The `||` means or, so this example matches any colour that has a 3 or a 5 or a 7 in its name

```
    colour.name.includes('3') ||
    colour.name.includes('5') ||
    colour.name.includes('7')
```

- Update the numbers, or add specific colours like `colour.name.includes('GREEN 4')`, making sure to put `||` between each case
- Chose "Commit directly to the `main` branch." and press `Commit changes`

## Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and TypeScript.

### Prerequisites

- Yarn
- Node v16

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
