// utils/exportUtils.js
export function downloadFile(data, filename, type) {
  const blob = new Blob([data], { type });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}
