# CS465-Fullstack Artifact
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

### New in this revision

- **Status Page** – Visit `/status` to view project checkpoint information loaded from `data/status.json`.
- **Enhanced Encryption** – Additional helper functions in `util/encryption.js` provide per-user salts and optional admin bypass.







Summary of changes 7/20/2025:

The current repository places the application under the TRAVLR directory. The top-level README.md merely states that the repository contains TRAVLR and mentions new encryption and account APIs.
Inside TRAVLR, a more detailed README outlines how to run the server with npm install / npm start and describes the new encryption utility and account-setting routes.

Key implementation files include:
Encryption utility defining AES-based encryption plus password hashing helpers
User model storing hashed passwords and user settings

User controller with register, login and settings update endpoints
User routes wired into the API router
An additional folder named –force (note the leading dash) remains in the repository, containing a default Express scaffold. It does not appear to be used. And I will go through it in the next module. 

Issues & Recommendations
Extraneous directory
The –force folder with an Express scaffold is checked into the repository, but it is unrelated to the TRAVLR codebase.
This directory may confuse readers and should be removed from version control.

future potential task
Remove unused `–force` directory 


Missing .gitignore:
There is no .gitignore. Installing dependencies would create node_modules/ which could be accidentally committed. will Add .gitignore for Node project


Incomplete project instructions:
The TRAVLR README covers basic startup but omits setup requirements such as MongoDB and the optional DB_HOST environment variable seen in app_api/models/db.js.
The root README also lacks context about these prerequisites.
In future module, will Document environment requirements


Security detail in encryption utility:
util/encryption.js uses crypto.scryptSync(password, 'salt', 32) with a hard‑coded salt string, which weakens encryption.
Improve encryption key generation
Absence of licensing information




### New Enhancements 7/29/2025

- Added user roles (admin and user) with optional admin code during registration.
- Created dashboard endpoint `/api/users/:username/dashboard` returning
  personalized status data. Admins see all categories while regular users
  only see completed items.
- Added front-end dashboard page available at `/users/dashboard/:username`.
- Cleaned up files missing trailing newlines and fixed minor formatting.

