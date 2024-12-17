export function renderFeatures() {
  const features = [
    {
      icon: '🔒',
      title: 'Safe & Secure',
      description: '100% virus-free and family-friendly. No data collection, works completely offline.'
    },
    {
      icon: '⚡',
      title: 'Easy to Use',
      description: 'Simple interface - just paste the URL and click download.'
    },
    {
      icon: '📱',
      title: 'Progress Tracking',
      description: 'Real-time download progress with Windows notifications.'
    },
    {
      icon: '📦',
      title: 'Batch Downloads',
      description: 'Download multiple videos at once with queue management.'
    },
    {
      icon: '💾',
      title: 'Download History',
      description: 'Keep track of your downloaded videos for easy access.'
    }
  ];

  return features.map(feature => `
    <div class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition" data-aos="fade-up mb-4">
      <div class="text-primary text-4xl mb-4">${feature.icon}</div>
      <h3 class="text-xl font-semibold mb-3">${feature.title}</h3>
      <p class="text-gray-600">${feature.description}</p>
    </div>
  `).join('');
}