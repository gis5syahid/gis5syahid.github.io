import SwaggerUIBundle from 'https://cdn.skypack.dev/swagger-ui-dist/swagger-ui-bundle.js';

export let URLData = "https://raw.githubusercontent.com/gis5syahid/gis5syahid.github.io/main/swagger/yaml/openAPI.yaml";//url data yaml

export const UIData = SwaggerUIBundle({
    url: URLData, //Location of Open API spec in the repo
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
    ],
    plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
    ],
});

export function setSwagger() {
    return UIData
}