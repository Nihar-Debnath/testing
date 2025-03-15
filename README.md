# devops_class_4



### commands used today:

```bash
npx create-turbo@latest
? Where would you like to create your Turborepo? testing
? Which package manager do you want to use? pnpm
```

```bash
# in package we created a db folder
pnpm init 
pnpm add prisma
npx tsc --init
# in the tsconfig.json we added this "extends":"@repo/typescript-config/base.json"
# and then in package.json we added this as a devDependency "@repo/typescript-config":"workspace:*"
cd ../../
pnpm i
cd package/db
npx prisma init
npx prisma generate
npx prisma migrate dev

# added the src>index.js
# then exported the prisaClient
# in package.json> exports: "./client": "./src/index.ts"
```

---

```bash
# in apps we created a web next app
pnpm create next-app@latest web


# √ Would you like to use TypeScript? ... No / Yes
# √ Would you like to use ESLint? ... No / Yes
# √ Would you like to use Tailwind CSS? ... No / Yes
# √ Would you like your code inside a `src/` directory? ... No / Yes
# √ Would you like to use App Router? (recommended) ... No / Yes
# √ Would you like to use Turbopack for `next dev`? ... No / Yes
# √ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
# √ What import alias would you like configured? ... @/*



# in the package.json we added this  "scripts": {
#    "dev": "next dev --turbopack --port 3000",
#    "build": "next build",
#    "start": "next start",
#    "lint": "next lint --max-warnings 0",
#    "check-types": "tsc --noEmit"
#  },


# and then in package.json we added this as a "dependencies": {
#    "@repo/ui": "workspace:*",
#    }


# and then in package.json we added this as a "devDependencies": {
#    "@repo/eslint-config": "workspace:*",
#    "@repo/typescript-config": "workspace:*",
#    "@repo/db": "workspace:*",
#    }
```

```bash
# in apps we created a http-server folder
pnpm init 
pnpm add express @types/express
npx tsc --init
# in the tsconfig.json we added this "extends":"@repo/typescript-config/base.json"
# and then in package.json we added this as a devDependency "@repo/typescript-config":"workspace:*"
# and then in package.json we added this as a devDependency "@repo/db":"workspace:*"
```

```bash
# in apps we created a ws-server folder
pnpm init 
pnpm add ws @types/ws
npx tsc --init
# in the tsconfig.json we added this "extends":"@repo/typescript-config/base.json"
# and then in package.json we added this as a devDependency "@repo/typescript-config":"workspace:*"
# and then in package.json we added this as a devDependency "@repo/db":"workspace:*"
cd ../../
pnpm i
```


```bash
# we created new branch for this repo
git checkout -b production
git merge main
git push origin HEAD
```