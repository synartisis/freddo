import * as parse5 from './parse5.js'
export { freddoMiddleware } from './static.js'


export async function freddo(content, filename, context) {
  const doc = parse5.parseHtml(content)
  await applyFreddo(doc, filename, context)
  return parse5.serialize(doc)
}


export async function applyFreddo(root, filename, context = {}) {
  const elements = parse5.qsa(root, o => o.name === 'freddo-el')
  for (const element of elements) {
    element.attribs['freddo-test'] = 'done'
    parse5.innerHTML(element, 'after freddo')
  }
}

