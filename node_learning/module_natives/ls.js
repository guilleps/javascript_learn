const fs = require('node:fs')

// leer archivos
fs.readdir('.', (err, files) => {
  if (err) {
    console.error(err)
    return
  }

  files.forEach((file) => {
    console.log(file)
  })
})

// node ls.js <name-directory>
