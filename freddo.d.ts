export async function freddo(content: string, filename: string, context: object): string
export async function freddoMiddleware(req: any, res: any): any



declare global {
  namespace freddo {
    
    type NodeTypes = 'tag' | 'text' | 'directive' | 'root' | 'script'
    
    interface Node {
      type: string
      name: string
      namespace?: string
      attribs?: Attribs
      'x-attribsNamespace'?: {}
      'x-attribsPrefix'?: {}
      children?: Node[]
      data?: string
      parent: freddo.Node | null
      prev: freddo.Node | null
      next: freddo.Node | null
      $context?: object
      $tagelError?: string
    }

    type Predicate = (el: Node) => boolean

    interface Attribs {
      id?: string
      style?: string
      [key: string]: string
    }

  }
}
