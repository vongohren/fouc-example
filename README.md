# SSR CSS in JS component library. 
Trying to build a component library with CSS in JS libraries, to then load through next.js

## Get running

```
npm install
npm run build
npm start
```

Opens up a server at localhost:3000

# Background
The main problem is that the style flickers before it loads.
https://github.com/styled-components/styled-components/issues/2322
https://github.com/styled-components/styled-components/issues/2442
https://github.com/styled-components/styled-components/issues/1860

This is styled-components related
But not getting it to work with emotion either

Linaria does not work either, even if I got it to work at some point :P
