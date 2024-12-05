### File-sharing Service

Build a Node.js application with `Express` that implements a simple file-sharing service by utilizing various advanced Node.js topics.



**Task Details:**

1.  **User Management**
    
    *   Implement an API to allow users to register and delete accounts.
    ```
        POST /api/v1/user/create (register)
        POST /api/v1/user/validate (validation)
        POST /api/v1/user/login -> This should return a JWT that will be used in the next sequence of requests.
    ```
    *   Store user profiles in a file-based storage system (e.g., JSON files).
    > Don't use a DB. Stick to files.
    *   Ensure all data is associated with a specific user account.
    > You can have a `user_<id>.json` in which you can store user specific details.
2.  **Folder Management**
    *   Provide an API endpoint for creating folders within a user's account.
    *   Enable retrieval of the folder structure for a user, including all files and nested folders.
    ```
        GET /api/v1/user/space - list all items
        PUT /api/v1/user/space/create - creates an empty file or folder
        DELETE /api/v1/user/space/file - deletes a file/folder
    ```
    > Only empty folders are deleted.
3.  **File Management**
    *   Implement API endpoints for file upload and deletion.
    ```
        POST /api/v1/user/space/upload - uploads a file
    ```
    *   Allow users to attach meta-information (e.g., notes, creation date, project tags) to files or folders.
    ```
        POST /api/v1/user/space/meta - attach meta information to a file
        GET /api/v1/user/space/meta - returns meta information attached to a file
    ```
    *   Use file-based storage to store files and metadata.
4.  **File Sharing**
    *   Implement a feature to generate short download links (e.g., `server.com/download/FA2341`) for files.
    ```
        GET /api/v1/user/share - retunr a short link that can be used to download the shared file/folder
    ```
    > If a folder is being downloaded then it should be zipped with all its content.
    *   Ensure these links are secure and expire after a configurable time period.
    > Link should be valid only 5 minutes. (Store the minutes in `.env` file.)
5.  **Process Management**
    *   Use the `process` object to:
        *   Access environment variables (`process.env`) for configuration (e.g., file storage paths, API keys).
        *   Implement graceful shutdown of the application using `process.exit`.
        *   Demonstrate the use of `stdin`, `stdout`, and `stderr` for logging or debugging.
    *   Incorporate child processes:
        *   Use `fork` to demonstrate handling external scripts or processes.
        *   For example, use a child process to compress files during uploads.
6.  **Buffer, Stream, and zlib**
    *   Utilize Node.js streams for efficient file handling, especially for large file uploads or downloads.
    *   Use Buffers to manipulate binary data during file processing.
    *   Integrate `node:zlib` module to compress files during download.
    ```
        GET /api/v1/user/space/download - when downloading a folder ti should be compressed as zip.
    ```
7.  **Data Cleanup**
    *   Ensure that when an account is deleted, all associated folders, files, metadata, and information are removed from the server.
    ```
    POST /api/v1/user/unregister
    ```

**Bonus Requirement:**

*   Add version control for files. Each uploaded file should create a new version, retaining the previous versions. Users should be able to access or delete specific versions of a file.
* Document the project.
* Use github to share it.