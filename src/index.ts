import { Module } from 'magnet-core/module'
import * as koaStatic from 'koa-static'
import * as path from 'path'

export default class MagnetKoaStatic extends Module {
  init () {
    this.moduleName = 'koa_static'
    this.defaultConfig = __dirname
  }

  async setup () {
    this.app.koa.use(
      koaStatic(
        path.resolve(this.app.config.baseDirPath, this.config.directory),
        this.config
      )
    )
  }
}
