/**
 * Analytics Event Tracking Utilities
 * 
 * Uses Vercel Analytics to track key user interactions.
 * Events are automatically sent to the Vercel Analytics dashboard.
 */

/**
 * Track a custom event with optional properties
 * @param {string} eventName - Name of the event
 * @param {object} properties - Optional event properties
 */
export function trackEvent(eventName, properties = {}) {
    // Vercel Analytics track function (injected by @vercel/analytics)
    if (typeof window !== 'undefined' && window.va) {
        window.va('event', {
            name: eventName,
            ...properties,
        });
    }
}

/**
 * Track when a user downloads the resume
 */
export function trackResumeDownload() {
    trackEvent('resume_download', {
        source: window.location.pathname,
    });
}

/**
 * Track when a user clicks on a project link
 * @param {string} projectName - Name of the project
 * @param {string} linkType - 'demo' or 'source'
 */
export function trackProjectClick(projectName, linkType) {
    trackEvent('project_click', {
        project: projectName,
        type: linkType,
    });
}

/**
 * Track terminal command usage
 * @param {string} command - The command that was executed
 */
export function trackTerminalCommand(command) {
    trackEvent('terminal_command', {
        command: command.toLowerCase().trim(),
    });
}

/**
 * Track contact actions
 * @param {string} method - 'email', 'linkedin', 'github', etc.
 */
export function trackContactClick(method) {
    trackEvent('contact_click', {
        method,
    });
}

/**
 * Track theme toggle
 * @param {string} newTheme - 'dark' or 'light'
 */
export function trackThemeToggle(newTheme) {
    trackEvent('theme_toggle', {
        theme: newTheme,
    });
}

/**
 * Track Time Machine usage (viewing V1)
 */
export function trackTimeMachineClick() {
    trackEvent('time_machine_click');
}
