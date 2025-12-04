import { getNavCommandsForPalette } from '../../data/navigation';
import { SOCIAL_LINKS, RESUME_LINK } from '../../data/socialLinks';

/**
 * Command palette commands
 * Uses centralized data from src/data/
 */
export const PALETTE_COMMANDS = [
    // Navigation commands from centralized data
    ...getNavCommandsForPalette(),
    
    // Actions
    { id: 'theme', label: 'Toggle Theme', section: 'Actions', action: 'theme' },
    
    // Links from centralized data
    ...SOCIAL_LINKS.map(link => ({
        id: link.id,
        label: `Open ${link.name}`,
        section: 'Links',
        action: 'link',
        target: link.url,
    })),
    { id: 'resume', label: 'View Resume', section: 'Links', action: 'link', target: RESUME_LINK.url },
    { id: 'v1', label: 'View Portfolio V1', section: 'Links', action: 'navigate', target: '/' },
];
