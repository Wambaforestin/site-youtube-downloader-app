export function renderFooter() {
  return `
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Family YouTube Downloader</h3>
          <p class="text-gray-400">Safe and simple YouTube video downloads for families in Africa.</p>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="#features" class="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#how-it-works" class="text-gray-400 hover:text-white">How It Works</a></li>
            <li><a href="#download" class="text-gray-400 hover:text-white">Download</a></li>
            <li><a href="#faq" class="text-gray-400 hover:text-white">FAQ</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Support</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Documentation</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Report Issues</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Terms of Service</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">License</a></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8 text-center">
        <p class="text-gray-400">&copy; ${new Date().getFullYear()} YouTube Downloader. All rights reserved.</p>
      </div>
    </div>
  `;
}