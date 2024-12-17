export function renderHowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Download & Install',
      description: 'Download the ZIP package and extract it to your preferred location.'
    },
    {
      number: '2',
      title: 'Handle Security',
      description: 'Add an exception in Windows Defender or click "More info" → "Run anyway".'
    },
    {
      number: '3',
      title: 'Copy URL',
      description: 'Copy the YouTube video URL you want to download.'
    },
    {
      number: '4',
      title: 'Download Video',
      description: 'Paste the URL, select quality, and click Download.'
    }
  ];

  return `
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      <div class="relative container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">How It Works</h2>
        <div class="grid md:grid-cols-4 gap-8">
          ${steps.map(step => `
            <div class="relative" data-aos="fade-up">
              <div class="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                ${step.number}
              </div>
              <div class="pt-8 p-6 bg-white rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-3">${step.title}</h3>
                <p class="text-gray-600">${step.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}