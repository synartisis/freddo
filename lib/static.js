import fs from 'node:fs'

const __dirname = new URL('.', import.meta.url).pathname

export async function freddoMiddleware(req, res) {
  if (!req.url.startsWith('/admin/')) return
  const filename = req.url.replace('/admin/', '').split('?')[0] || 'index.html'
  const ext = filename.split('.').pop()

  const contentType = getMimeType(ext)
  res.setHeader('Content-Type', `${contentType}; charset=utf-8`)
  const stream = fs.createReadStream(`${__dirname}/admin/${filename}`)
  stream.pipe(res)
  return new Promise((resolve, reject) => {
    stream.on('end', () => resolve('done'))
    stream.on('error', reject)
  })

}

function getMimeType(ext) {
  if (ext === 'html') return 'text/html'
  if (ext === 'css') return 'text/css'
  if (ext === 'js') return 'application/javascript'
  return 'text/html'
}