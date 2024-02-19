# JobBoard

The server will be hosted at port 3000.

## User API

---

User signup.

```
POST /api/user/signup

{
    "name": "user-name",
    "email": "user-email",
    "password": "user-password"
}
```

---

User login.

```
POST /api/user/login

{
    "email": "user-email",
    "password": "user-password"
}
```

---

User authentication.

```
GET /api/user/auth
```

---

## Company API

---

Company signup.

```
POST /api/company/signup

{
    "name": "company-name",
    "email": "company-email",
    "password": "company-password"
}
```

---

Company login.

```
POST /api/company/login

{
    "email": "company-email",
    "password": "company-password"
}
```

---

Company authentication.

```
GET /api/company/auth
```

---
