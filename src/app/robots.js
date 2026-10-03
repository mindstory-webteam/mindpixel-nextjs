export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'Claude-User',
          'Claude-SearchBot',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'Meta-ExternalAgent',
          'FacebookBot',
          'cohere-ai',
          'Bytespider',
          'CCBot',
          'Amazonbot',
          'Diffbot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://mpxcode.com/sitemap.xml',
  };
}
