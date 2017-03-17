import { Module } from 'magnet-core/module'
import * as koaStatic from 'koa-static'
import * as path from 'path'

export default class KoaStatic extends Module {
  get moduleName () { return 'koa_static' }
  get defaultConfig () { return __dirname }

  async setup () {
    this.app.koa.use(
      koaStatic(
        path.resolve(this.app.config.baseDirPath, this.config.directory),
        this.config
      )
    )
  }
}
