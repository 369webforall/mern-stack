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
