import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  static async setItem(key: string, value: unknown) {
    try {
      const jsonValue = JSON.stringify({ value });
      await AsyncStorage.setItem(key, jsonValue);
    } catch {}
  }

  static async getItem<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue).value : null;
    } catch {
      return null;
    }
  }

  static async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch {}
  }
}
