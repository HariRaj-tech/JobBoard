# JobBoard

The server will be hosted at port 3000.

## User API

---

User signup.

```
POST /api/users/signup

{
    "name": "user-name",
    "email": "user-email",
    "password": "user-password"
}
```

---

User login.

```
POST /api/users/login

{
    "email": "user-email",
    "password": "user-password"
}
```

---

User authentication.

```
GET /api/users/auth
```

---

## Company API

---

Company signup.

```
POST /api/companies/signup

{
    "name": "company-name",
    "email": "company-email",
    "password": "company-password"
}
```

---

Company login.

```
POST /api/companies/login

{
    "email": "company-email",
    "password": "company-password"
}
```

---

Company authentication.

```
GET /api/companies/auth
```

---
