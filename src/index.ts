import { Module } from 'magnet-core/module'
import * as koaStatic from 'koa-static'
import * as path from 'path'

import defaultConfig from './config/koaStatic'

export default class KoaStatic extends Module {
  async setup () {
    const config = this.prepareConfig('koaStatic', defaultConfig)

    this.app.koa.use(
      koaStatic(
        path.resolve(this.config.baseDirPath, config.directory),
        config
      )
    )
  }
}
