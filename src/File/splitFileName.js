/**
 * 拆分文件名
 * @param {String} fileName  文件名
 * @returns [前缀名, 后缀名]
 */
export default splitFileName = (fileName = "") => {
  const lastDotIndex = fileName.lastIndexOf(".");
  if (lastDotIndex === -1) {
    return "";
  }
  const extName = fileName.substr(lastDotIndex + 1).toLowerCase();
  const prefixName = fileName.substr(0, lastDotIndex);
  return [prefixName, extName];
};
