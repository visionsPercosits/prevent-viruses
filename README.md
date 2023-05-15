<body>
    <h1>Virus Prevent 🎈</h1>
    <p>This script is a simple virus prevent script using Node.js. It checks for files with certain extensions in the temp folder and deletes them to prevent potential viruses.</p>
    <h2>Code Explanation</h2>
    <p>The script uses the following Node.js modules:</p>
    <ul>
      <li><code>fs</code>: to read and delete files from the file system.</li>
      <li><code>path</code>: to manipulate file paths.</li>
    </ul>
    <p>First, the script defines an array <code>extensionsToCheck</code> containing the extensions of files that should be checked. It also defines a constant <code>tempFolderPath</code> that points to the temp folder location on the user's computer.</p>
    <p>Then, the <code>fs.readdir()</code> method is called to read the contents of the temp folder. If there is an error reading the directory, an error message is printed to the console and the function returns.</p>
    <p>The <code>files.forEach()</code> method loops through each file in the temp folder. For each file, it gets its extension using the <code>path.extname()</code> method and constructs the full file path using <code>path.join()</code>. If the file's extension is included in the <code>extensionsToCheck</code> array, it is deleted using the <code>fs.unlink()</code> method. If there is an error deleting the file, an error message is printed to the console.</p>
    <h2>Usage</h2>
    <p>To use the script, save it to a file with a <code>.js</code> extension and run it using Node.js. The script will automatically check and delete files with the extensions specified in the <code>extensionsToCheck</code> array in the temp folder. Note that running this script will permanently delete files, so use it with caution.</p>
  </body>
