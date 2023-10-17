# Nextjs Basic

[nextjs-video-1](https://youtu.be/4i1Nou_oloA)

[nextjs-video-2](https://youtu.be/ihuY_ZdSQGE)

[nextjs-video-3](https://youtu.be/bLw6geM8mgI)

[nextjs-video-4](https://youtu.be/KFF3mz6qu0M)

[nextjs-video-5-prisma](https://youtu.be/NyujLEuRAaI)

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

**server**

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

## 2. Routing and Navigation

- we have learned the basic of routing and navigation i nextjs.
- In this section we will dive deep to learn following topics.

1. Dynamic routes

2. Access route and query string parameters

3. create layouts

4. show loading UIs

5. Handle errors

- In nextjs we have file system routing, you can create folder and add page.tsx

### Special Files in nextjs project

- page.tsx (for route page)
- layout.tsx - defining common layout for pages
- loading.tsx - (for showing loading page)
- route.tsx (for building api)
- not-found.tsx (for showing custom error)
- error.tsx (showing general error)

- note if the componet is only used in once place then its good approach to keep it in same folder or route.

**Define dynamic route**

- Dynamic route is a route with parameter/ users>[id]>page.tsx
- This only work with page.tsx, doesn't work with componet render to that page.
- we must the the id and pass it to the componet as props.

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

`lets build dynamic route (users/[id]/photos/[photoId] // users/1/photos/3)`

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

params: {slug:string[]}
}

const ProductPage = ({params: {slug}}: Props)=>{
return(
<div> Product page and route is {slug} </div>
)
}

```

**Accessing Query String Parameters**

- /users?sortOrder=name
- /users?sortOrder=email

interface User {
id: number;
name: string;
email: string;
}

interface Props {
searchParams: {sortOrder:string}
}

- use fast-sort package to sort the table with name and email

[fastsort](https://www.npmjs.com/package/fast-sort)

import {sort} from 'fast-sort'

const sortedUser = sort(users).asc(sortOrder==='email' ? (user)=>user.email : (user)=>user.name);

**Layouts**

- A layout is UI that is shared between routes or multiple pages.
  [Layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

  app>admin>layout.tsx / page.tsx

---

import React, { ReactNode } from 'react';

interface Props {
children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
return (

<div className='flex'>
<aside className='bg-slate-200 p-5 mr-5'>Admin Sidebar</aside>
<div>{children}</div>
</div>
)
}

## export default AdminLayout

**Navigation**

- We learn how to navigate with Link component from nextjs.
- Link downloads the content of the target page only,
- Pre-fetches links that are in the viewport.
- Caches pages on the client

**Programmatic navigation**

- Some time we need to bring the use to the new page by submiting the form or clicking the button. This is called programatic navigation.
- we use useRouter Hooks.

- Because we are using hooks this will be client page.
  import {useRouter} from 'next/navigation'

const router = useRouter()

- in call back function we can use this router
  router.push('/)

Note: make sure use Link in users>page.tsx to navigate to new directory.
app>new>page.tsx

```javascript
'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const NewUserPage = () => {
  const router = useRouter();

  return (
    <button className="btn btn-primary" onClick={() => router.push('/users')}>
      Create
    </button>
  );
};

export default NewUserPage;
```

**Showing loading UI**

- In react 18 there is Suspense component , which we can use to show the fallback componet while loading the componet.

- <Suspense fallback={<div>Loading cities...</div>}>

```javascript
import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
```

Next we can use build functionality in app> loading.tsx

```javascript
import React from 'react';

const Loading = () => {
  return <span className="loading loading-spinner loading-md"></span>;
};

export default Loading;
```

**Handling Not Found Errors**

- In nextjs when we go to page which doesn't exist then we always get 404 error page.
- we can always customize it.
- app>not-found.tsx

```javascript
import React from 'react';

const NotFoundPage = () => {
  return <div>The requested page doesn&apos;t exist.</div>;
};

export default NotFoundPage;
```

- we can also add not-found.tsx page in any route. eg. in users>[id]>not-found.tsx

```javascript
import React from 'react';

const UserNotFoundPage = () => {
  return <div>This user doesnot exist.</div>;
};

export default UserNotFoundPage;
```

page.tsx
import { notFound } from 'next/navigation'
if(id>10) notFound();

**Handling Unexpected Errors**

- if there is any network error dur to invalid endpont , then in such condition we use error.tsx to handle the error.

[error](https://nextjs.org/docs/app/building-your-application/routing/error-handling)

## Building APIs

**1-Introduction**

- getting collection /all objects
- creating objects
- updating objects
- deleting objects
- validating request with zod

**2-getting objects**

- we must follow the nextjs convention for creating api
- app/api/users/route.tsx

```javascript
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'Dev' },
    { id: 2, name: 'Robert' },
  ]);
}
```

**3-getting single object**

- users/[id]/route.tsx

```javascript
import { NextRequest, NextResponse } from 'next/server';

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 15) {
    return NextResponse.json({ error: 'No data data found' }, { status: 400 });
  }
  return NextResponse.json({ id, name: 'This is my data' });
}
```

**3.Creating an object**

- Method for creating user is POST, we send the request to the end point and also the data to body.
- In real application we can do the validation
- if invalid, return 400
- else return the data

```javascript
export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
```

**updating an user**

- to update user we send request to the end point, along with the the object to the request body.

- validate the request body data.
- check if user doesn't exist
- send the response with updated user.

```javascript
export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();

  if (id > 15) {
    return NextResponse.json({ error: 'No data data found' }, { status: 400 });
  }
  if (!body.name) {
    return NextResponse.json({ error: 'name is required' }, { status: 404 });
  }

  return NextResponse.json({ id, name: body.name });
}
```

**delete an user**

- to delete user
- first we fetch the user from db
- if not found reutn 404
- Delete the user
- Return 200

```javascript
export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 15) {
    return NextResponse.json({ error: 'No user found' }, { status: 404 });
  }

  return NextResponse.json({ mesage: 'user deleted' }, { status: 200 });
}
```

**validating request with zod library**

- back to PUT function we use if statement to validate the object send with the request, but for complex object, it will create to many if statement, so to solve this issue we use library called zod to smiplify our valiation process.
- npm i zod
- create file schema in users

```javascript
import { z } from 'zod';

z.object({
  name: z.string().min(3),
  email: z.string().email(),
  age: z.number(),
});
```

```javascript
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 404 }
    );
  }
  return NextResponse.json(body, { status: 201 });
}
```

## Database integration with prisma

- Prisma ORM (Object relational mapping) is a database management tool that
  simplifies data interaction, providing a type-safe API and query builder for efficient database operations in software development.

  - It's a tool to work with database in effieicent operation.

  - we will use MONGODB database, it is NoSQL (Not Just SQL) is use for storing data in JSON type document in collection in Database.

- Setting up prisma
- Defining data models
- Creating migrations
- Performing CRUD operations

**setting up prisma**
[setup prisma with mongodb](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/mongodb-typescript-mongodb)

- follow the document instruction to install prima.

npm install prisma --save-dev

npx prisma

npx prisma init

- setup mongodb database
- add connection link to the .env file
- to check prisma available command run `npx prisma`

`Introspecting MongoDB with Prisma`

npx prisma db pull

**Defining data models**

- go to schema.prisma and define one or more model

```javascript
model User {
 id    String @id @default(auto()) @map("_id") @db.ObjectId
  email String @unique
  name String
  followers Int @default(0)
  isActive Boolean @default(true)
}
```

- In the above model we use basic types, prisma support different complex types,
  [prisma models](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)

**Defining migration**

- as we define or change our model we have to create migration.
- these migration keeps our database schema insync with our prisma schema.

`npx prisma db push`

**Creating a Prisma client**

- create client.ts file and add code form below link.

[prisma client](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices)

**Getting data from database**

- go to api>users>route.ts

```
export async function GET(requst: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}


```
