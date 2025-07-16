// Convert ArrayBuffer to base64 string
function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary);
}

// Convert base64 string to ArrayBuffer
function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binary = atob(base64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

// Export CryptoKey to base64 string
async function exportCryptoKey(key: CryptoKey): Promise<string> {
  const rawKey = await crypto.subtle.exportKey("raw", key);
  return arrayBufferToBase64(rawKey);
}

// Import CryptoKey from base64 string
async function importCryptoKey(base64Key: string): Promise<CryptoKey> {
  const rawKey = base64ToArrayBuffer(base64Key);
  return crypto.subtle.importKey("raw", rawKey, { name: "AES-GCM" }, true, [
    "encrypt",
    "decrypt",
  ]);
}

// --- Encryption ---

export async function encryptText(
  plaintext: string
): Promise<Record<string, any> | undefined> {
  try {
    if (plaintext === undefined || typeof plaintext !== "string")
      throw new Error(
        "The value that is about to be encrypted has to be plain text and defined"
      );
    const key = await crypto.subtle.generateKey(
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );

    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encoder = new TextEncoder();
    const encodedText = encoder.encode(plaintext);

    const encryptedBuffer = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      encodedText
    );

    return {
      encryptedData: arrayBufferToBase64(encryptedBuffer),
      iv: arrayBufferToBase64(iv.buffer),
      key: await exportCryptoKey(key),
    };
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

// --- Decryption ---

export async function decryptText(
  encryptedDataBase64: string,
  ivBase64: string,
  keyBase64: string
): Promise<string | undefined> {
  try {
    if (
      encryptedDataBase64 === undefined ||
      ivBase64 === undefined ||
      keyBase64 === undefined
    )
      throw new Error(
        "Passed arguments in decrypt function object have to be defined"
      );
    if (
      typeof encryptedDataBase64 !== "string" ||
      typeof ivBase64 !== "string" ||
      typeof keyBase64 !== "string"
    )
      throw new Error("Arguments must be plain text for decrypting");
    const key = await importCryptoKey(keyBase64);
    const iv = new Uint8Array(base64ToArrayBuffer(ivBase64));
    const encryptedData = base64ToArrayBuffer(encryptedDataBase64);

    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      encryptedData
    );

    const decoder = new TextDecoder();
    return decoder.decode(decryptedBuffer);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
