/**
 * 下载文件
 *
 * @export
 * @param {string} [url=''] 文件URL
 * @param {string} [fileName=''] 文件名
 * @param {boolean} [isDirectly=false] 是否直接下载
 */
export default downloadFile(url = "", fileName = "", isDirectly = false) {
  const el = document.createElement("iframe");
  el.style = "position:fixed;height:0;width:0;";

  if (/\/fcscloud/.test(url) || isDirectly) {
    el.src = url;
  } else {
    el.src = `${url}&filename=${encodeURIComponent(fileName)}`;
  }
  document.body.appendChild(el);

  setTimeout(() => {
    document.body.removeChild(el);
  }, 2000);
}
