The **JSNAD (JavaScript Node.js Application Developer)** certification exam tests your ability to use Node.js in real-world application development. This is a summary of the key topics and critical NodeJS areas to cover:

* * *

### **1\. Core Node.js Concepts**

*   **Modules and Packages**:
    
    *   Understand CommonJS (`require`, `module.exports`) and ES Modules (`import`, `export`).
    *   Package management with `npm` and `package.json`.
    *   Semantic Versioning (semver)
    *   Use of built-in modules like `fs`, `path`, `os`, and `util`.
*   **Asynchronous Programming**:
    
    *   Mastery of callbacks, Promises, and `async/await`.
    *   Error handling in asynchronous code (try/catch, `.catch`).
*   **Event-Driven Architecture**:
    
    *   Use and extend the `EventEmitter` class.
    *   Understand how event loops work.

* * *

### **2\. File System (fs)**

*   Read, write, update, delete files/directories.
*   Work with streams (`readable`, `writable`, `duplex`).
*   Understand synchronous vs asynchronous file operations.

* * *

### **3\. Networking**

*   **HTTP Module**:
    
    *   Create servers with `http.createServer()`.
    *   Understand request/response lifecycle.
    *   Handle headers, query parameters, and routing.
*   **HTTPS**:
    
    *   Implement HTTPS with certificates.
*   **Networking Basics**:
    
    *   Use `net` and `dgram` modules for TCP and UDP communication.

* * *

### **4\. Process Management**

*   Use the `process` object:
    
    *   Access environment variables (`process.env`).
    *   Exit gracefully (`process.exit`).
    *   Understand `stdin`, `stdout`, and `stderr`.
*   Work with **child processes**:
    
    *   `spawn`, `exec`, `execFile`, and `fork`.

* * *

### **5\. Debugging and Performance**

*   Debug Node.js apps using `console`, `debugger`, or external tools.
*   Analyze performance with the `perf_hooks` module.
*   Monitor and optimize memory usage.

* * *

### **6\. Security**

*   Handle sensitive data securely (e.g., `.env` files, secure coding practices).
*   Mitigate vulnerabilities such as:
    *   Input validation and sanitization.
    *   Prevent path traversal and injection attacks.
    *   Use tools like `npm audit` and `snyk`.

* * *

### **7\. Testing and Error Handling**

*   Write unit and integration tests using tools like Mocha, Chai, or Jest.
*   Implement robust error handling strategies (try/catch, error objects).
*   Understand and create custom error types.

* * *

### **8\. Streams**

*   Use readable and writable streams effectively.
*   Pipe streams together.
*   Handle stream events (`data`, `end`, `error`).

* * *

### **9\. Buffers**

*   Work with binary data using `Buffer`.
*   Convert between buffers and strings.
*   Understand encoding formats (`utf-8`, `base64`, etc.).

* * *

### **10\. CLI Applications**

*   Parse command-line arguments using `process.argv` or tools like `yargs` or `commander`.
*   Implement CLI utilities with custom options and flags.

* * *

### **11\. Package Development**

*   Create reusable npm packages.
*   Add metadata and scripts to `package.json`.
*   Publish and manage versions.

* * *

### **Preparation Tips**

1.  **Hands-On Practice**: Build small projects to apply the concepts, such as:
    
    *   A simple file server.
    *   A CLI tool to manipulate files.
    *   A basic REST API with Node.js.
        - using `fetch` API
2.  **Understand Node.js Internals**:
    
    *   How the event loop works.
    *   Differences between microtasks and macrotasks.
3.  **Review Documentation**: Familiarize yourself with the official Node.js documentation. Learn how it is organized. Learn how to use it when solving practical tasks. Don't use external resources, because they are not allowed on the exam.
    
4.  **Practice Exam Questions**: Use mock exams or practice challenges to simulate the test environment.
    
5.  **Time Management**: The JSNAD exam is time-bound (2 hours). Practice solving problems efficiently.
6.  **Proctoring:** The exam is an online exam and you will be monitored (proctored) not to cheat. So, you need a good camera, that's working fine. A good (stable) internet connection. You should log earlier and validate that your computer and internet connection is meeting the requirements. 
