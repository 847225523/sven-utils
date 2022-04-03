const path = require("path");
const shelljs = require("shelljs");
const program = require("commander");

const targetFile = path.resolve(__dirname, "../dist/package.json"); // 获取packagejson文件的目录

const packagejson = require(targetFile);
const currentVersion = packagejson.version;
const versionArr = currentVersion.split(".");
const [mainVersion, subVersion, phaseVersion] = versionArr;

// 默认版本号
const defaultVersion = `${mainVersion}.${subVersion}.${+phaseVersion + 1}`;
let newVersion = defaultVersion;
program.option(
  "-v, --versions <type>",
  "Add release version number",
  defaultVersion
);
program.parse(process.argv);
console.log(process.argv);
if (process.argv[3]) {
  newVersion = process.argv[3];
}
console.log(newVersion);

function publish() {
  shelljs.sed("-i", '"name": "sven-utils"', '"name": "sven-utils"', targetFile); // 修改包名
  shelljs.sed(
    "-i",
    `"version": "${currentVersion}"`,
    `"version": "${newVersion}"`,
    targetFile
  ); // 修改版本号
  shelljs.cd("dist");
  shelljs.exec("npm publish"); // 发布
}

publish();
