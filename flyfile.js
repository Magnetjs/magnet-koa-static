export default async function (fly) {
  await fly.start('build')
  await fly.watch('src/**/*.ts', ['compileTypescript'])
  await fly.watch('src/config/**/*.js', ['copyConfig'])
}

export async function build(fly) {
  await fly.serial([
    'clean',
    'copyConfig',
    'compileTypescript',
  ]);
}

export async function clean(fly) {
  await fly.clear('dist');
}

export async function copyConfig(fly) {
  await fly
    .source('src/config/**/*')
    .flatten({ levels: 5 })
    .target('dist/config');
}

export async function compileTypescript(fly) {
  yield fly
    .source('src/**/*.ts')
    .typescript({
      "sourceMap": true,
      "declaration": true,
      "skipLibCheck": true,
      "target": "es6",
      "moduleResolution": "node",
      "module": "commonjs",
      "outDir": "./dist",
      "types": [
        "node",
        "lodash"
      ],
      "typeRoots": [
        "node_modules/@types"
      ]
    })
    .target('dist');
}
