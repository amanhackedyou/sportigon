export class HttpManager {
    static defaultHeaders = {
        'Content-Type': 'application/json',
    };
    static async get(endpoint, headers) {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                ...this.defaultHeaders,
                ...headers,
            },
        });
        if (!response.ok)
            throw new Error(`GET ${endpoint} failed`);
        return response.json();
    }
    static async post(endpoint, data, headers) {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                ...this.defaultHeaders,
                ...headers,
            },
            body: data ? JSON.stringify(data) : undefined,
        });
        // if (!response.ok) throw new Error(`POST ${endpoint} failed`);
        return response.json();
    }
    static postFile(endpoint, file, fieldName = 'file', onProgress, headers) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const formData = new FormData();
            formData.append(fieldName, file);
            xhr.open('POST', endpoint, true);
            // Optional headers (Content-Type not needed for FormData)
            if (headers) {
                for (const [key, value] of Object.entries(headers)) {
                    xhr.setRequestHeader(key, value);
                }
            }
            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable && onProgress) {
                    const percent = Math.round((event.loaded / event.total) * 100);
                    onProgress(percent);
                }
            };
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        resolve(response);
                    }
                    catch (err) {
                        reject(new Error('Invalid JSON response'));
                    }
                }
                else {
                    reject(new Error(`File upload failed: ${xhr.status}`));
                }
            };
            xhr.onerror = () => reject(new Error('Network error during file upload'));
            xhr.send(formData);
        });
    }
}
//# sourceMappingURL=http_manager.js.map