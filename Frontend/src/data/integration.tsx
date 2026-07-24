export type IntegrationKey =
    | 'openai'
    | 'pdf'
    | 'github'
    | 'figma'
    | 'notion'
    | 'googledocs'
    | 'zapier'
    | 'slack'

export interface Integration {
    key: IntegrationKey
    label: string
    color: string
    /** Center position of the card, in % of the illustration's bounding box (0–100). */
    x: number
    y: number
    /**
     * Order in which this integration activates during the intro timeline
     * (Phase 3): 0 = Zapier ... 7 = Slack, per the animation brief.
     */
    activationOrder: number
}

/**
 * Positions mirror the reference composition: OpenAI/PDF up top, GitHub/Figma
 * on the sides, Notion/Google Docs lower sides, Zapier/Slack near the bottom
 * platform. Colors are used for each card's glow + icon tint.
 */
export const integrations: Integration[] = [
    { key: 'openai', label: 'OpenAI', color: '#74AA9C', x: 38, y: 7, activationOrder: 3 },
    { key: 'pdf', label: 'PDF', color: '#EF4444', x: 77, y: 9, activationOrder: 4 },
    { key: 'github', label: 'GitHub', color: '#F8FAFC', x: 6, y: 35, activationOrder: 2 },
    { key: 'figma', label: 'Figma', color: '#A855F7', x: 93, y: 33, activationOrder: 5 },
    { key: 'notion', label: 'Notion', color: '#F8FAFC', x: 6, y: 65, activationOrder: 1 },
    { key: 'googledocs', label: 'Google Docs', color: '#3B82F6', x: 93, y: 63, activationOrder: 6 },
    { key: 'zapier', label: 'Zapier', color: '#F97316', x: 32, y: 89, activationOrder: 0 },
    { key: 'slack', label: 'Slack', color: '#8B5CF6', x: 71, y: 87, activationOrder: 7 },
]

/** Center of the orb, in the same 0–100 coordinate space as the cards above. */
export const ORB_CENTER = { x: 50, y: 40 }

/** Center of the circular platform beneath the orb. */
export const PLATFORM_CENTER = { x: 50, y: 83 }