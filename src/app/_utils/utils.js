import { toPng, toBlob } from "html-to-image";

export async function downloadPNG(previewRef) {
  if (previewRef.current === null) {
    return;
  }

  toPng(previewRef.current, {
    cacheBust: true,
    color: "000",
  })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "Text2Math.png";
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => {
      console.log(err);
    });
}

const blobCreator = (previewRef) => {
  return new Promise((resolve, reject) => {
    try {
      toBlob(previewRef.current, {
        cacheBust: true,
      }).then((blob) => {
        resolve(blob);
      });
    } catch (e) {
      reject(e);
    }
  });
};

export async function copyToClipboard(previewRef) {
  navigator.clipboard.write([
    new window.ClipboardItem({
      "image/png": new Promise(async (resolve, reject) => {
        try {
          const blob = await blobCreator(previewRef);
          resolve(new Blob([blob], { type: "image/png" }));
        } catch (err) {
          reject(err);
        }
      }),
    }),
  ]);
}
