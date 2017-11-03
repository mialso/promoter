// eslint-disable-next-line import/prefer-default-export
export function getDevToolsExtension() {
    if (window.devToolsExtension) return window.devToolsExtension();
    return null;
}
