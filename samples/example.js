// Ejemplo de código JavaScript para demostrar el tema Garra Crema

const APP_NAME = "Garra Crema Theme";
const VERSION = "1.0.0";

class ThemeManager {
    constructor(name, version) {
        this.name = name;
        this.version = version;
        this.colors = {
            primary: "#A6192E",
            secondary: "#FFFEF4",
            accent: "#C6AA76"
        };
    }

    initialize() {
        console.log(`Initializing ${this.name} v${this.version}`);
        this.applyTheme();
    }

    applyTheme() {
        const body = document.body;
        body.style.setProperty('--primary-color', this.colors.primary);
        body.style.setProperty('--secondary-color', this.colors.secondary);
        body.style.setProperty('--accent-color', this.colors.accent);
    }

    async loadSettings() {
        try {
            const response = await fetch('/api/settings');
            const settings = await response.json();
            return settings;
        } catch (error) {
            console.error('Error loading settings:', error);
            return null;
        }
    }

    saveSettings(settings) {
        if (!settings) {
            throw new Error("Settings cannot be null");
        }
        
        localStorage.setItem('theme-settings', JSON.stringify(settings));
    }
}

const themeManager = new ThemeManager(APP_NAME, VERSION);

document.addEventListener('DOMContentLoaded', () => {
    themeManager.initialize();
});

export default ThemeManager;