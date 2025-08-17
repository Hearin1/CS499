# CS465-Fullstack Artifact
CS465 Full Stack Development with MEAN


## TRAVLR Artifact Narrative

The TRAVLR web application is a full-stack project originally developed in CS 465: Full Stack Development with MEAN. It serves as a travel booking platform where users can browse, view details, and reserve trips, while administrators manage and publish available trips. The project leverages the MEAN stack (MongoDB, Express.js, Angular, Node.js), providing an opportunity to demonstrate both frontend and backend integration with a persistent database.

For the CS 499 Capstone, TRAVLR was selected as the central artifact because it provides a strong foundation for enhancements across all three required categories: software design and engineering, algorithms and data structures, and databases. The enhancements performed are listed below:

Software Design and Engineering Enhancements:

Added an encryption and decryption utility (util/encryption.js) that supports AES-based encryption for sensitive fields and bcrypt hashing for password storage.

Introduced a user account system with modular account settings management, including endpoints for registration, login, and updating settings.

Restructured API logic for improved readability, reusability, and maintainability, following professional software engineering practices and adhering to secure coding standards.

Algorithms and Data Structures Enhancements:

Strengthened the user authentication algorithm by incorporating bcrypt hashing with salting to securely manage credentials.

Improved API route logic to ensure efficient request handling and validation, reducing redundancy and streamlining processes for login, registration, and settings updates.

Applied defensive programming techniques to validate input and ensure data consistency before database operations, protecting against injection and malformed requests.

Database Enhancements:

Extended the MongoDB schema to support user accounts and settings alongside the original trip management collections.

Added CRUD operations for account settings (/api/users/:username/settings) with validation and secure integration into the existing database.

Ensured proper indexing and validation rules to maintain database efficiency, scalability, and integrity.

Reflection on TRAVLR Enhancements

Enhancing TRAVLR provided valuable experience in integrating multiple aspects of computer science into a single artifact. By layering encryption and security mechanisms onto the existing system, I revisited concepts from CS 405: Secure Coding, demonstrating how security concerns should be embedded into every stage of design. Algorithmic enhancements reflected lessons from CS 260: Data Structures and Algorithms, where the focus on efficient, reliable, and validated logic directly influenced the login and account management system. Expanding the database schema and CRUD operations drew from DAD 220: SQL and CS 465, reinforcing my ability to design data models that balance scalability and security.

Challenges arose in aligning asynchronous operations in Node.js with bcrypt hashing, managing schema migrations without breaking existing functionality, and debugging request validation logic. Addressing these issues required iterative testing, step-by-step debugging, and close attention to API flow. Ultimately, the updates made TRAVLR more secure, extensible, and production-ready, while demonstrating my growth as a developer across multiple disciplines.

Alignment to Course Outcomes

The TRAVLR enhancements showcase the following course outcomes:

Collaborative Environments: The code review process and structured updates ensure the system can be easily understood and extended by future developers.

Professional Communication: The documentation, API descriptions, and this narrative communicate the design, logic, and updates clearly to both technical and non-technical audiences.

Computing Solutions: Updates to authentication, encryption, and account settings demonstrate problem-solving using algorithmic principles and sound design choices.

Innovative Practices: Integration of modern security practices and database schema evolution illustrate the ability to employ innovative, industry-relevant techniques.

Security Mindset: All enhancements were guided by secure coding principles, from hashing credentials to validating database inputs and mitigating vulnerabilities.

Conclusion

The TRAVLR project stands as a comprehensive artifact in my ePortfolio because it demonstrates my ability to take an existing full-stack application and significantly improve it in terms of security, architecture, efficiency, and database design. It exemplifies not only my technical skill but also my ability to reflect, adapt, and apply best practices to evolving industry standards. This artifact, along with the accompanying enhancements and professional self-assessment, represents my readiness to contribute meaningfully to the computer science field.



# TRAVLR Information for Navigation and Use

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


