// backend_utils.ts

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);

// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date: Date, locale: string = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start: Date, end: Date) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date: Date) => [0, 6].includes(date.getDay());

// StringUtils
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s: string) => s.split('').reverse().join('');
export const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s: string, length: number) => s.length > length ? s.slice(0, length) + '...' : s;

// NumberUtils
export const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
export const isEven = (n: number) => n % 2 === 0;
export const isPrime = (n: number) => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; };
export const toCurrency = (num: number, locale: string = 'en-US', currency: string = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });

// ObjectUtils
export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;
export const mergeObjects = (a: any, b: any) => ({ ...a, ...b });
export const getNested = (obj: any, path: string) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj: any, keys: string[]) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

// ArrayUtils
export const chunk = <T>(arr: T[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = <T>(arr: T[]) => [...new Set(arr)];
export const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = <T>(arr: T[]) => { let a = [...arr]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const intersection = <T>(a: T[], b: T[]) => a.filter(value => b.includes(value));

// ValidationUtils
export const isValidUUID = (uuid: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str: string) => { try { JSON.parse(str); return true; } catch { return false; } };
export const hasSpecialChar = (s: string) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);

// Logger
export const logInfo = (msg: string) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg: string) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg: string) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg: string) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg: string) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
