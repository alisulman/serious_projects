

const genertarColorScheme = () => {
    const hex = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`
    const getLuminance = (hex) => {
        const rgb = parseInt(hex.slice(1), 16);
        const r = (rgb >> 16) & 255;
        const g = (rgb >> 8) & 255;
        const b = rgb & 255;    
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return luminance;
    }
    const luminance = getLuminance(hex);
    const textColor = luminance > 128 ? 'black' : 'white';
    return { hex, textColor }
}
export default genertarColorScheme