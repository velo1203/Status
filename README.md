# NextJS.v14 Fullstack BoilerPlate

<img src="https://github.com/velo1203/Next-boilerplate/raw/main/banner.png" alt="nextjs">

### React프레임워크 Next.js의 보일러플레이트 입니다.

간단한 User Authentication을 구현하였으며, 이를 기반으로 Fullstack 프로젝트를 시작할 수 있습니다.

### NEXT.JS v14 최신버전을 기반으로 제작되었습니다.

DEVHO의 Nextjs [Notion](https://nextjs-practice.notion.site/NEXT-JS-v-14-Fullstack-72f3e6d306d7474f8e0d0ff3ab18398f?pvs=4)을 참고하세요.

# Project Structure

위 보일러플레이트는 REACT기반 보일러플레이트로

서버사이드에서는 **MVC 패턴을** 사용하였습니다.

```javascript
├─app // Next.js App
│  │  favicon.ico
│  │  layout.tsx
│  │
│  ├─(front) //frontend pages
│  │      page.tsx
│  │
│  └─api //api routes
│      └─auth
│          ├─login
│          │      post.ts //api post
│          │      route.ts //api merge
│          │
│          └─register
│                  post.ts
│                  route.ts
│
├─component //clientSide UI components
├─core //backend MVC pattern
│  ├─controller //controller (로직처리)
│  │      login.controller.ts //로그인 로직 처리
│  │      register.controller.ts
│  ├─lib
│  │      database.ts //database connection
│  │
│  └─model
│          user.model.ts //fetch user data from database
│
└─styles
        globals.css //global css

```

# Environment

`JWT_TOKEN_SECRET = "hello"`

JWT 시크릿을.env에 지정합니다.
#   S t a t u s  
 #   S t a t u s  
 