/**
 复制
 @param {String} str 字符串
*/
export default clipboard = (str) => {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.value = str;
    input.style.cssText = `
              position: absolute;
              top: -10000px;
              left: -10000px;
          `;
    document.body.appendChild(input);

    setTimeout(() => {
      input.select();
      document.execCommand("Copy");
      document.body.removeChild(input);
      resolve();
    });
  });
};
