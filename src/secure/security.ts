import { decryptText, encryptText } from "../@helpers/cryptoutils";
import {
  prohibitedKeys,
  prohibitedKeysBasic,
} from "../@helpers/prohibitedKeys";

interface EncryptParams {
  encryptedData: string;
  iv: string;
  key: string;
}

export const stripValues = (
  object: Record<string, any | undefined>
): Record<string, any> | undefined => {
  try {
    if (object === undefined || object === null)
      console.warn("Object must be defined");
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const encrypt = async (plain: string): Promise<Object> => {
  return await encryptText(plain);
};

export const encryptAll = () => {};

export const decrypt = async ({
  encryptedData,
  iv,
  key,
}: EncryptParams): Promise<string> => {
  return await decryptText(encryptedData, iv, key);
};

export const getPK = (): Set<string> => {
  return prohibitedKeys;
};

export const getPKBasic = (): Set<string> => {
  return prohibitedKeysBasic;
};
export const basicSecurity = () => {};
