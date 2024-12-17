export function renderSupport() {
  return `
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-16">Support & Help</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="card" data-aos="fade-up">
            <h3 class="text-xl font-semibold mb-4">Documentation</h3>
            <p class="text-gray-600 mb-4">Access our comprehensive user guide and troubleshooting documentation.</p>
            <a href="#" class="text-primary hover:text-secondary">View Documentation →</a>
          </div>
          
          <div class="card" data-aos="fade-up">
            <h3 class="text-xl font-semibold mb-4">Contact Support</h3>
            <p class="text-gray-600 mb-4">Need help? Our support team is here to assist you.</p>
            <a href="#" class="text-primary hover:text-secondary">Contact Us →</a>
          </div>
        </div>

        <div class="bg-gray-50 rounded-xl p-8" data-aos="fade-up">
          <h3 class="text-xl font-semibold mb-6">Report an Issue</h3>
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Issue Description</label>
              <textarea class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn-primary">Submit Report</button>
          </form>
        </div>
      </div>
    </div>
  `;
}