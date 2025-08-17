# CS499
# CS465-Fullstack

This repository contains the TRAVLR project located in the `TRAVLR` branch.
The application has been enhanced with an encryption utility and account
settings API as part of the CS499 ePortfolio work.


TRAVLR UPDATES:
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

## CS 499 Final Project Narrative

This repository represents my final capstone work for CS 499: Computer Science Capstone at Southern New Hampshire University. The capstone project serves as the culmination of my Computer Science program and integrates the knowledge, skills, and techniques developed throughout multiple prior courses. The goal of this work was to select prior artifacts from my coursework, enhance them in meaningful ways, and present them in a professional ePortfolio that highlights my growth in three core categories of computer science: software design and engineering, algorithms and data structures, and databases.

The foundation for my enhancements is the TRAVLR web application, originally developed as part of CS 465: Full Stack Development with MEAN. This application provides a travel booking platform that allows users to view, book, and manage trips, while administrators can create and maintain trip listings. For the capstone, I expanded this system with several enhancements that demonstrate my mastery across the required categories:

Software Design and Engineering: I enhanced the project by integrating a secure encryption and decryption utility. This includes AES-based symmetric encryption for data handling as well as bcrypt hashing for password protection. I also added modular account settings management, improving the architecture and demonstrating professional software engineering practices by extending the application with new, maintainable features.

Algorithms and Data Structures: Enhancements included improvements to the logic and efficiency of the user authentication and account management workflows. The updated routines employ stronger algorithmic safeguards for credential validation and integrate more efficient request handling across the API routes. These enhancements highlight algorithmic thinking in structuring both the encryption utility and secure login processes.

Databases: I extended the TRAVLR MongoDB schema to incorporate user account settings, demonstrating database design, schema management, and integration of persistent secure data storage. Enhancements included new routes for CRUD operations on account settings as well as validation layers to ensure data integrity and security.

Reflection on Enhancements

The enhancement process required a deep review of the original TRAVLR codebase, where I applied a systematic code review process using a structured checklist. This included assessing readability, maintainability, and efficiency, identifying unused or redundant code, and confirming adherence to best practices in commenting, variable naming, and loop structure. Through this review, I identified opportunities to strengthen both the security and scalability of the application.

Enhancing the artifact provided significant learning experiences. For example, implementing encryption forced me to revisit core concepts from CS 405: Secure Coding, particularly the importance of hashing over reversible storage for user credentials. Similarly, modifying the schema and extending API endpoints connected directly to skills learned in DAD 220: SQL and CS 465: Full Stack, where designing normalized, secure, and scalable databases was emphasized. By building on these foundations, I was able to align the enhancements with industry practices and showcase the ability to evolve an existing system into a more secure and production-ready application.

I also encountered challenges during the enhancement phase, including debugging asynchronous issues in Node.js when implementing bcrypt hashing, and ensuring that MongoDB schema updates did not conflict with existing functionality. These obstacles highlighted the importance of iterative testing and defensive programming. Ultimately, the final solution improved the system’s maintainability, performance, and security posture while adhering to the software development lifecycle (SDLC) practices emphasized throughout the program.

Alignment to Course Outcomes

This project and its enhancements demonstrate my proficiency across all five CS 499 course outcomes:

Collaborative Environments: Through the code review process and modular enhancements, I showcased the ability to communicate effectively about design decisions and document my work so that it can be easily understood and extended by others.

Professional Communication: This README, along with the associated narratives and self-assessment in my ePortfolio, demonstrates clear written communication adapted for technical and professional audiences.

Computing Solutions: Enhancements to the TRAVLR app solved concrete problems in secure credential management and extensibility, illustrating the application of algorithmic principles and sound design choices.

Innovative Practices: I used modern encryption standards, secure hashing, and database schema evolution to add value to the application, demonstrating innovative and industry-relevant solutions.

Security Mindset: The enhancements were guided by a security-first approach, ensuring encryption of sensitive data, validation of inputs, and the mitigation of vulnerabilities in user account workflows.

Professional Growth

Completing this capstone reinforced the interconnected nature of software engineering, algorithms, and databases. More importantly, it provided a platform to demonstrate professional readiness by producing a cohesive portfolio artifact that not only reflects my technical skills but also communicates them effectively to potential employers. This repository, combined with my GitHub Pages ePortfolio, is a tangible representation of my ability to design, evaluate, and secure computing solutions that meet organizational and industry-specific needs.
