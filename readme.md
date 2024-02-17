# JobBoard

The server will be hosted at port 3000.

## API

---

Create user.

```
POST /api/users

{
    "name": "user-name",
    "password": "user-password"
}
```

---

Get all users.

```
GET /api/users
```

---

Get user details.

```
GET /api/users:userId
```

---

Update user details.

```
PUT /api/users:userId

{
    # add the details to update, remaining details will stay the same.
    "name": "new-name"
}
```

---

Delete a user.

```
DELETE /api/users:userId
```

---
