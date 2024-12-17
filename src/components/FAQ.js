export function renderFAQ() {
  const faqs = [
    {
      question: 'Is this application safe to use?',
      answer: 'Yes, Family YouTube Downloader is 100% safe and virus-free. The security warnings are normal due to the application not being signed with a commercial certificate.'
    },
    {
      question: 'Why does Windows Defender show a warning?',
      answer: 'This happens because the application isn\'t signed with a commercial certificate and uses PyInstaller. It\'s completely normal and you can safely add an exception in Windows Defender.'
    },
    {
      question: 'How do I handle antivirus warnings?',
      answer: 'You can either add an exception in Windows Defender or click "More info" → "Run anyway" when launching the application.'
    },
    {
      question: 'What are the system requirements?',
      answer: 'The application works on Windows systems and requires an internet connection for downloading videos. No additional software is needed.'
    },
    {
      question: 'Where are my downloaded videos saved?',
      answer: 'Videos are saved in the "videos" folder within the application directory.'
    }
  ];

  return `
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
      <div class="max-w-3xl mx-auto space-y-4">
        ${faqs.map(faq => `
          <div class="border border-gray-200 rounded-lg" data-aos="fade-up">
            <button class="faq-question w-full text-left px-6 py-4 flex justify-between items-center">
              <span class="font-semibold">${faq.question}</span>
              <svg class="faq-icon w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div class="faq-answer hidden px-6 py-4 border-t border-gray-200">
              <p class="text-gray-600">${faq.answer}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}