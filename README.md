# Kasa's React App

## You have ever done a web application with React?

I didn't either...  
This is my first webapp made with React.

Project made during an _OpenClassrooms_ bootcamp.  
[Learning path: _Développeur Web_](https://openclassrooms.com/fr/paths/717-developpeur-web)

**"Raw React" project.**  
**No React library allowed.**

### Implemented features

- Rescue mechanisms based on the Damerau-Levenshtein distance (and on the number of consecutive characters in common between the given string and the
  expected string) to redirect to the right page or suggest a corresponding page possibility for a given URL (typed with typos or incomplete)

  - Incomplete URLs
    - Redirection
      - [https://oc-kasa-conformity.vercel.app/about](https://oc-kasa-conformity.vercel.app/about)
    - Suggestion
      - [https://oc-kasa-conformity.vercel.app/abou](https://oc-kasa-conformity.vercel.app/abou)
      - [https://oc-kasa-conformity.vercel.app/housing](https://oc-kasa-conformity.vercel.app/housing)
  - Typos
    - Suggestion
      - [https://oc-kasa-conformity.vercel.app/bauo-tsu](https://oc-kasa-conformity.vercel.app/bauo-tsu)
    - Redirection
      - [https://oc-kasa-conformity.vercel.app/about-su](https://oc-kasa-conformity.vercel.app/about-su)
      - [https://oc-kasa-conformity.vercel.app/abuot-su](https://oc-kasa-conformity.vercel.app/abuot-su)
      - [https://oc-kasa-conformity.vercel.app/abuot-us](https://oc-kasa-conformity.vercel.app/abuot-us)
      - [https://oc-kasa-conformity.vercel.app/bauot-su](https://oc-kasa-conformity.vercel.app/bauot-su)

- Dynamic database re-fetching on page first-load/change + local database caching

- Loading placeholders ("_First-load_" placeholders, "_Retrying to load_" placeholders, "_Failed to load_" placeholders, _user local cache-based_
  placeholders)

- Animated accordions

  - Possibility to have only one accordion's item opened at a time (just pass several `items` to your `<Accordion>` component)
  - Possibility to bypass this previous behavior (using multiple mono-item accordions)
    - [https://oc-kasa-conformity.vercel.app/housing-sheets/c67ab8a7](https://oc-kasa-conformity.vercel.app/housing-sheets/c67ab8a7)
    - [https://oc-kasa-conformity.vercel.app/about-us](https://oc-kasa-conformity.vercel.app/about-us)

- Animated images slider + infinite loop
  - [https://oc-kasa-conformity.vercel.app/housing-sheets/0979876d](https://oc-kasa-conformity.vercel.app/housing-sheets/0979876d)
  - Also has a swiping feature (only on mobiles/tablets).

### Resources

- [Figma Mockups](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=3%3A0)
- [The best articles you would ever read about "Raw React"/the React's runtime](https://www.developerway.com)

#### Demo

[https://oc-kasa-conformity.vercel.app/](https://oc-kasa-conformity.vercel.app/)

### How to run this project locally

- `$ yarn start`
- (or) `$ npm start`

---

<p align="center"><em>This GitHub repository is not part of the OPENCLASSROOMS website or OPENCLASSROOMS SAS.<br>Additionally, this GitHub repository is NOT endorsed by OPENCLASSROOMS in any way.<br>OPENCLASSROOMS is a trademark of OPENCLASSROOMS, SAS.</em></p>
