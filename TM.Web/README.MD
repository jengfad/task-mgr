Node Package Installation Common Errors
1. node-sass
Cannot download …binding.node

In CMD, type the:
SET SASS_BINARY_PATH=<source directory + node-sass-bin-mirror + win32-x64-48_binding.node>

-Or-

In package.json:
"nodeSassConfig": {
  "binaryPath": "<source directory + node-sass-bin-mirror + win32-x64-48_binding.node>"
}

https://github.com/sass/node-sass/issues/1106