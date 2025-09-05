const log = console.log

export const logFn = (modName: string, fnName: string) => {
  log();
  log("*********");
  log(`${modName}-${fnName}`);
  log("---------");
};