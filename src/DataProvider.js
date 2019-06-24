const os = require('os')
const path = require('path')
const util = require('util')
const fs = require('@skpm/fs')
const sketch = require('sketch')
const { getImagesURLsForItems } = require('./nis')

const { DataSupplier, UI, Settings } = sketch