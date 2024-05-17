
const blobToBuffer = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const arrayBuffer = reader.result;
            const buffer = Buffer.from(arrayBuffer);
            resolve(buffer);
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsArrayBuffer(blob);
    });
};

export default blobToBuffer