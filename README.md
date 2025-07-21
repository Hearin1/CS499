# CS465-Fullstack
CS465 Full Stack Development with MEAN


# TRAVLR

This folder contains the TRAVLR web application. It has been updated to include
an encryption utility and basic account settings management.

## Running

Install dependencies and start the server:

```bash
npm install
npm start
```

## Features Added

- **Encryption Tool** – Located in `util/encryption.js`, provides AES based
  encryption/decryption utilities and helper functions for hashing and verifying
  passwords using bcrypt.
- **Account Settings** – New user model and API routes for registering, logging
  in, and updating account settings.

The API endpoints are exposed under `/api/users` and include:

- `POST /api/users/register`
- `POST /api/users/login`
- `PUT /api/users/:username/settings`

These endpoints demonstrate how encrypted passwords and settings management can
be integrated into the existing TRAVLR codebase.
