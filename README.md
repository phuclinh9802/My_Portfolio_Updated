# My Updated Portfolio
- Using React JS, Firebase
## Sections
1. Biography
2. Services
3. Projects (New sections based on # of projects)
    - CellCollective
    - Covid Tracker
    - Automating Excel

4. Contact

## Notes during development
- Dividing components into:
    - Landing
        - Navbar
        - Biography
        - Services
        - Projects
        - Contact
    - Portfolio

- Using `framer-motion` package to animate between routes  
- Using CSS Animation to implement typewriter effect on title

## Firebase Deployment
### Install Firebase npm
- ```npm install -g firebase-tools```

### Steps to deploy
```
    firebase login 
    firebase init
``` 
- Choose: `Hosting`
- Find the project to deploy
```
What do you want to use aas your public directory? build
Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
npm run build
firebase deploy
```

## Resources:
- https://iconscout.com/icons
- https://stackoverflow.com
- https://cellcollective.org
