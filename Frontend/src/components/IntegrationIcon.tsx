import type { IntegrationKey } from '../../src/data/integration'

interface Props {
    type: IntegrationKey
    size?: number
}

/**
 * Simple, original glyphs that hint at each connected tool without
 * reproducing any brand's exact logo mark. Each renders inside a
 * rounded glass badge so the set reads as one cohesive icon family.
 */
function Glyph({ type }: { type: IntegrationKey }) {
    switch (type) {
        case 'github':
            return (
                <path
                    d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.68c-2.5.55-3.03-1.1-3.03-1.1-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.37 2.1.98 2.62.75.08-.58.32-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.92-2.42-.09-.23-.4-1.15.09-2.4 0 0 .76-.24 2.48.92a8.6 8.6 0 0 1 4.52 0c1.72-1.16 2.48-.92 2.48-.92.5 1.25.18 2.17.1 2.4.56.63.91 1.44.91 2.42 0 3.46-2.11 4.22-4.12 4.44.33.28.62.85.62 1.7v2.53c0 .24.15.52.61.43A9 9 0 0 0 12 3Z"
                    fill="currentColor"
                />
            )
        case 'claude':
            return (
                <path
                    d="M8 7l3 10M16 7l-3 10M6 14h12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            )
        case 'chatgpt':
            return (
                <path
                    d="M12 4a3.2 3.2 0 0 0-3.1 2.4A3.4 3.4 0 0 0 7 9.6a3.4 3.4 0 0 0 0 4.8 3.4 3.4 0 0 0 1.9 3.2A3.2 3.2 0 0 0 12 20a3.2 3.2 0 0 0 3.1-2.4 3.4 3.4 0 0 0 1.9-3.2 3.4 3.4 0 0 0 0-4.8A3.4 3.4 0 0 0 15.1 6.4 3.2 3.2 0 0 0 12 4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                />
            )
        case 'figma':
            return (
                <g fill="currentColor">
                    <circle cx="14.5" cy="7.5" r="2.5" />
                    <path d="M9.5 5h2.5v5H9.5a2.5 2.5 0 1 1 0-5Z" />
                    <path d="M9.5 10h2.5v5H9.5a2.5 2.5 0 1 1 0-5Z" />
                    <path d="M9.5 15h2.5v4.5A2.5 2.5 0 1 1 9.5 15Z" />
                </g>
            )
        case 'notion':
            return (
                <path
                    d="M6 5.5h10.5L18 7v11.5l-11 1V6.7L6 5.5Z M8.5 8.2v8.4l7.4-.5V8.7L8.5 8.2Z"
                    fill="currentColor"
                    fillRule="evenodd"
                />
            )
        case 'slack':
            return (
                <g fill="currentColor">
                    <rect x="10" y="4" width="2.4" height="7" rx="1.2" />
                    <rect x="4" y="10" width="7" height="2.4" rx="1.2" />
                    <rect x="11.6" y="13" width="2.4" height="7" rx="1.2" />
                    <rect x="13" y="11.6" width="7" height="2.4" rx="1.2" />
                </g>
            )
        case 'jira':
            return (
                <path
                    d="M12 3 5 10l7 7 7-7-7-7Zm0 7-3.2 3.2L12 16.4l3.2-3.2L12 10Z"
                    fill="currentColor"
                />
            )
        case 'pdf':
            return (
                <path
                    d="M7 3h7l3 3v15H7V3Zm7 0v3h3M9.2 13.5h1.3c.7 0 1.2.5 1.2 1.1s-.5 1.1-1.2 1.1H9.2v-2.2Zm4.3 0h1c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6h-1v-3.2Zm4.3 0H19"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            )
        default:
            return null
    }
}

export default function IntegrationIcon({ type, size = 22 }: Props) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <Glyph type={type} />
        </svg>
    )
}
