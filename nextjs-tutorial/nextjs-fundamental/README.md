# Nextjs Basic

## Next.js Fundamentals

1. What is nextjs
2. Creating Nextjs project
3. Client and Server components (all page are server component in nextjs / 'use client')
4. Routing and Navigation
5. Data Fetching
6. Caching
7. Static and dynamic rendering

**Routing and Navigation**

- Routing in nextjs is based on the file system.
- In app directory creare folder called about > page.tsx
- now create the `AboutPage` component.
- http://localhost:3000/about

- if u add any other file in this folder it is not going to work.
- here we can also creare the nested route
- about>new>page.tsx
- creare NewUserPage component
- http://localhost:3000/about/new

**navigation**

- use Link component - Benifit of using Link is page donen't refresh.
- import `Link` from next/link
- <Link href='/'>Logo</Link>

**Rendering environment client and server**

- client with in webBrowser and server (Nodejs)
- CSR - client side rendering (large bundle/resource intensive/No SEO/Less Secure)
- SSR - server side rendering (less budle/SEO/secure/resource efficient/API key in server/loose inter activity)

- Server component can't listen to browser event, access borwser api, maintain state, use effects.

**client**

- **server**

- NavBar / Sidebar / ProductList / ProductCard / Pagination / Footer
- we keep most of the componet in SSR and just extact the components which need clint side action or dealing with Hooks to be rendered in client

**Data Fetching**

- `fetching on the client`
- useState() + useEffect() // React Query
- again fetching data in client comes with lot of issue

1. Large bundle size
2. Resource intensive
3. No SEO
4. Less secure, because api key is expossed.
5. Extra round trip to the backend/ server

- so when react component loads, it download the html , css and javascript first, then send request to fetch the data, so there is always extra roud trip.

- so we can fetch data in our server componet and get rid of all these problems

so in this lesson we will use json place holder as our api, and we will fetch data in server component.

```Javascript
interface User {
    id:number;
    name: string;

}
async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data:User[] = await getData()

  return <main></main>
}
```

**Caching**
What is caching ?

- storing data somewhere that is faster to access

`Datasource`

- basically there is three place where we can get data from.

1. Memory - faster to access data
2. File system - get slower
3. Network - takes more time, more slower to access the data.

we can pass object to control the data caching.

- no-caching ( ,{cache: 'no-store'}), this will make sure we always get fresh data.
- cache after time inteval; (, {next: {revalidate: 10}}) - it will the background job and get the fresh data every 10 second.

**static and dynamic rendering**

`Static Rendering`

- Rendering at build time.
  in next js we have another preformance optimization technique, called static rendering or static site generation,
  if we have static page or static data, nextjs build the static page once during the build time and its always available in cache file, because of this we get pre build html page, it fast loading, seo friendly.

  2. Dynamic - at request time.

  - page render / data is fetched during the page load time. html page is generated in server for every request and then it is send to the client.

## Styling

**Radix UI**

[Radix UI](https://www.radix-ui.com/)

- click on get started
- `npm install @radix-ui/themes`
- Import the global CSS file at the root of your application.
- `import '@radix-ui/themes/styles.css';`

- Add Theme to your application, wrapping the root component inside of body.

```javascript
import { Theme } from '@radix-ui/themes';

export default function () {
  return (
    <html>
      <body>
        <Theme>
          <MyApp />
        </Theme>
      </body>
    </html>
  );
}
```

- Using the theme panel to change the theme colors

## Routing and Navigation

- we have learned the basic of routing and navigation i nextjs.
- In this section we will dive deep to learn following topics.

1. Define dynamic routes

2. Access route and query string parameters

3. creare layouts

4. show loading UIs

5. Handle errors

- In nextjs we have file system routing, you can create folder and add page.tsx

**Special Files**
page.tsx (for route page)
layout.tsx - defining common layout for pages
loading.tsx - (for showing loading page)
route.tsx (for building api)
not-found.tsx (for showing custom error)
error.tsx (showing general error)

- note if the componet is only used in once place then its good approach to keep it in same folder.

**Define dynamic route**

- Dynamic route is a route with parameter/ users>[id]>page.tsx

```Javascript

import React form 'react'

interface Props {

params: {id: number}
}

const UserDetailsPage = ({params: {id}}: Props)=>{
return(
<div>User Details Page
)
}

```

(props: Props) // ({params}:Props) // ({params:{id} : Props})

\*\*lets build dynamic route (users/id/photos/photoId // users/1/photos/3)

```Javascript

import React form 'react'

interface Props {

params: {id: number; photoId: number;}
}

const UserPhotoPage = ({params: {id, photoId}}: Props)=>{
return(
<div>User Photo Page {id, photoId} </div>
)
}

```

// (props: Props) // ({params}:Props) // ({params:{id, photoId} : Props})

**Catch all Segments**

- lets assume we have various parameters ( http://localhost:3000/products/grocery/dairy/milk)

- we are not going to create so many nested folder , but there is better ways
- create folder products>[[...slug]]>page.tsx

```Javascript

import React form 'react'

interface Props {

params: {slug:string}
}

const ProductPage = ({params: {slug}}: Props)=>{
return(
<div> Product page and route is {slug} </div>
)
}

```

**Accessing Query String Parameters**
