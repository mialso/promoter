const window = typeof self === 'object' ? self : {};

export function getDevToolsExtension() {
    if (window.devToolsExtension) return window.devToolsExtension();
    return null;
}
