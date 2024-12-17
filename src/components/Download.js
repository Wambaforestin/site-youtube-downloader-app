export function renderDownload() {
  return `
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Download YouTube Downloader</h2>
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8" data-aos="fade-up">
          <div class="flex flex-col items-center space-y-6">
            <div class="text-6xl">💾</div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Latest Version: 1.0.0</h3>
              <p class="text-gray-600 mb-6">Windows Compatible • 22,561 ko</p>
              <a href="../../setup-youtube-downloader.zip" download class="btn-primary inline-flex items-center space-x-2">
                <span>Download for Windows</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 text-left">
          <div class="card" data-aos="fade-right">
            <h3 class="text-xl font-semibold mb-4">System Requirements</h3>
            <ul class="space-y-2 text-gray-600">
              <li>• Windows 7/8/10/11</li>
              <li>• Internet connection for downloading</li>
              <li>• 50MB free disk space</li>
              <li>• No additional software required</li>
            </ul>
          </div>
          
          <div class="card" data-aos="fade-left">
            <h3 class="text-xl font-semibold mb-4">Package Contents</h3>
            <ul class="space-y-2 text-gray-600">
              <li>• YouTube Downloader.exe</li>
              <li>• Installation guide.md</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}