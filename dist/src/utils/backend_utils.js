// backend_utils.ts
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
// DateUtils
export const getCurrentTimestamp = () => Date.now();
export const formatDate = (date, locale = 'en-US') => date.toLocaleString(locale);
export const getDayDiff = (start, end) => Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
export const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
export const isWeekend = (date) => [0, 6].includes(date.getDay());
// StringUtils
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const toSlug = (s) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export const reverseString = (s) => s.split('').reverse().join('');
export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const truncate = (s, length) => s.length > length ? s.slice(0, length) + '...' : s;
// NumberUtils
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const isEven = (n) => n % 2 === 0;
export const isPrime = (n) => { if (n < 2)
    return false; for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0)
        return false; return true; };
export const toCurrency = (num, locale = 'en-US', currency = 'USD') => num.toLocaleString(locale, { style: 'currency', currency });
// ObjectUtils
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
export const mergeObjects = (a, b) => ({ ...a, ...b });
export const getNested = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
export const omitKeys = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
// ArrayUtils
export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
export const uniq = (arr) => [...new Set(arr)];
export const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
export const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
} return a; };
export const intersection = (a, b) => a.filter(value => b.includes(value));
// ValidationUtils
export const isValidUUID = (uuid) => /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
export const isPhoneNumber = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
export const isStrongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(pwd);
export const isJSON = (str) => { try {
    JSON.parse(str);
    return true;
}
catch {
    return false;
} };
export const hasSpecialChar = (s) => /[!@#$%^&*(),.?":{}|<>]/g.test(s);
// Logger
export const logInfo = (msg) => console.log(`ℹ️ [INFO] ${new Date().toISOString()} - ${msg}`);
export const logWarn = (msg) => console.warn(`⚠️ [WARN] ${new Date().toISOString()} - ${msg}`);
export const logError = (msg) => console.error(`❌ [ERROR] ${new Date().toISOString()} - ${msg}`);
export const logDebug = (msg) => console.debug(`🐞 [DEBUG] ${new Date().toISOString()} - ${msg}`);
export const logSuccess = (msg) => console.log(`✅ [SUCCESS] ${new Date().toISOString()} - ${msg}`);
//# sourceMappingURL=backend_utils.js.map