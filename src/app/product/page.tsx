export default function ProductDetailPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center space-x-2 text-sm text-neutral-500">
          <a className="hover:text-primary" href="#">Home</a>
          <span>/</span>
          <a className="hover:text-primary" href="#">Lashes</a>
          <span>/</span>
          <span className="font-medium text-neutral-800">Glamour Lashes</span>
        </div>

        {/* Product Info */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-200">
              <img 
                alt="Glamour Lashes" 
                className="h-full w-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvt8PZhFvzWBRUUsqxJYnemIbMTQ99oJQprlvnJnDgr2V0INn7ez2YZ4a7-3LKU70WWISvzyJYT_KRudup3GCGvkaN5dD-0vW3DqWWFF4jlSjNhQ5u9GqEGXYri2MF0v2_2lC1KhxZT1En5btZl0jnFxTc3fIAk7MivfqRkR2Ey9L6H-4k3dt_IpUswhKzgaOqZ1bVRVezEMtJI_j9z5m4NyQYBnwCEaXmJMr69RWIPjSvL9Mfe2_Zzvsi9Obyb2EKM_qb-XukrAo"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">Glamour Lashes</h1>
              <p className="mt-3 text-neutral-500">Elevate your look with our Glamour Lashes, designed for a dramatic, eye-catching effect. Perfect for special occasions or adding luxury to your everyday style.</p>
              <p className="mt-4 text-3xl font-bold text-primary">$25.00</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center star-rating">
                <svg className="h-5 w-5 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
                <svg className="h-5 w-5 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
                <svg className="h-5 w-5 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
                <svg className="h-5 w-5 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                </svg>
              </div>
              <a className="ml-3 text-sm font-medium text-primary hover:text-primary/80" href="#reviews">125 reviews</a>
            </div>
            <div className="mt-8 flex gap-4">
              <button className="flex-1 rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Add to Cart</button>
              <button className="rounded-lg bg-neutral-200 px-6 py-3 text-base font-bold text-neutral-800 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Add to Wishlist</button>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 space-y-12">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">Product Details</h3>
            <p className="mt-4 text-neutral-500">Our Glamour Lashes are handcrafted from the finest synthetic fibers, ensuring a lightweight and comfortable wear. The unique design features a blend of long and short fibers to create a full, textured look that enhances your natural beauty. Easy to apply and reusable, these lashes are a must-have for any makeup enthusiast.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">How to Apply</h3>
            <ol className="mt-4 list-decimal list-inside space-y-2 text-neutral-500">
              <li>Gently remove lashes from the tray.</li>
              <li>Apply a thin layer of lash adhesive along the lash band.</li>
              <li>Wait 30 seconds for the adhesive to become tacky.</li>
              <li>Position the lash band along your natural lash line and press gently to secure.</li>
              <li>For a more natural look, blend your natural lashes with the false lashes using mascara.</li>
            </ol>
          </div>

          {/* Reviews */}
          <div id="reviews">
            <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">Customer Reviews</h3>
            <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
                <p className="text-5xl font-black text-neutral-900">4.8</p>
                <div className="flex star-rating">
                  <svg className="h-5 w-5 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg>
                  <svg className="h-5 w-5 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg>
                  <svg className="h-5 w-5 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg>
                  <svg className="h-5 w-5 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                  </svg>
                </div>
                <p className="text-sm text-neutral-500">Based on 125 reviews</p>
              </div>
              <div className="w-full flex-1 space-y-1">
                <div className="flex items-center gap-4 text-sm">
                  <p className="w-4 text-neutral-500">5</p>
                  <div className="h-2 flex-1 rounded-full bg-neutral-200">
                    <div className="h-2 rounded-full bg-primary" style={{width: '70%'}}></div>
                  </div>
                  <p className="w-8 text-right text-neutral-500">70%</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <p className="w-4 text-neutral-500">4</p>
                  <div className="h-2 flex-1 rounded-full bg-neutral-200">
                    <div className="h-2 rounded-full bg-primary" style={{width: '20%'}}></div>
                  </div>
                  <p className="w-8 text-right text-neutral-500">20%</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <p className="w-4 text-neutral-500">3</p>
                  <div className="h-2 flex-1 rounded-full bg-neutral-200">
                    <div className="h-2 rounded-full bg-primary" style={{width: '5%'}}></div>
                  </div>
                  <p className="w-8 text-right text-neutral-500">5%</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <p className="w-4 text-neutral-500">2</p>
                  <div className="h-2 flex-1 rounded-full bg-neutral-200">
                    <div className="h-2 rounded-full bg-primary" style={{width: '3%'}}></div>
                  </div>
                  <p className="w-8 text-right text-neutral-500">3%</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <p className="w-4 text-neutral-500">1</p>
                  <div className="h-2 flex-1 rounded-full bg-neutral-200">
                    <div className="h-2 rounded-full bg-primary" style={{width: '2%'}}></div>
                  </div>
                  <p className="w-8 text-right text-neutral-500">2%</p>
                </div>
              </div>
            </div>

            {/* Review */}
            <div className="mt-10 space-y-8 border-t border-neutral-200 pt-10">
              <div className="flex flex-col gap-4 sm:flex-row">
                <img alt="Sophia Bennett" className="h-12 w-12 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcmWuEW7rnKm7CAeYWtnYMOvhiHxqlLs7XuyiCBayYyuRCKgx0do9MORkadOOHwLS0B4Gf5saRBN9Ny2vcnb1J3IajZCRJN610HbDDv9lwemqgauRq01egZntJFcHYNow3CNdQXuDuzpeBA5NDkFvWavGn6q7373R7ZZXfadRRNzjBG4gMaTuZjnzLTVK1q1UaZHjj5IbV2iDOk0X6kRiMQGC4Pf0buQ-gGgsEJCwa-I0SlDQzFVc5-Q9hau9M19sWKkZ2xrZH2Lo"/>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-neutral-900">Sophia Bennett</p>
                      <p className="text-sm text-neutral-500">1 month ago</p>
                    </div>
                    <div className="flex star-rating">
                      <svg className="h-4 w-4 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                      </svg>
                      <svg className="h-4 w-4 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                      </svg>
                      <svg className="h-4 w-4 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                      </svg>
                      <svg className="h-4 w-4 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                      </svg>
                      <svg className="h-4 w-4 filled" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="mt-3 text-neutral-500">These lashes are absolutely stunning! They add the perfect amount of drama without being too heavy. I wore them to a wedding and received so many compliments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">Frequently Asked Questions</h3>
            <div className="mt-6 space-y-4">
              <details className="group rounded-lg bg-neutral-50 p-4" open>
                <summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-900">
                  Are these lashes reusable?
                  <svg className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </summary>
                <p className="mt-3 text-neutral-500">Yes, our Glamour Lashes are reusable. With proper care, you can wear them multiple times. Gently remove the adhesive after each use and store them in the original packaging to maintain their shape.</p>
              </details>
              <details className="group rounded-lg bg-neutral-50 p-4">
                <summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-900">
                  What type of adhesive should I use?
                  <svg className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </summary>
                <p className="mt-3 text-neutral-500">We recommend using a latex-free lash adhesive for the best results. Our Lash Luxe adhesive is specially formulated for our lashes and provides a strong, all-day hold.</p>
              </details>
              <details className="group rounded-lg bg-neutral-50 p-4">
                <summary className="flex cursor-pointer items-center justify-between font-medium text-neutral-900">
                  How do I clean the lashes?
                  <svg className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </summary>
                <p className="mt-3 text-neutral-500">To clean, gently peel off any excess adhesive from the lash band with tweezers. You can use a cotton swab with a small amount of oil-free makeup remover to clean any remaining residue. Let them air dry completely before storing.</p>
              </details>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">Related Products</h3>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
              <div className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-neutral-200">
                  <img alt="Lash Adhesive" className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2GbvLqLGuaBWmDjg0YtpcNaSOuBjVl49reD85qaykmhtuzFIQnvdM1sOLyInc72_P6FxQUzS5Cb65Aa1caawTf9ZBU0zCGw-dLxlmFdWRNfW0bd3LgCrUX9jlMFT6WRjtw8qiwx7pZAGhIGwg_bALISglU5JzY1yMCMVZu1e7znc4GFH7kZaDsm-Gk4vs0IOR_elmPou6HSLqS-CUIszcBBiswpbrKs-gQ1zNsjyM0jijO-5UpA2XpY-BDR6sWKNoiwl9hSPArO4"/>
                </div>
                <div className="mt-3">
                  <h4 className="font-medium text-neutral-800">Lash Adhesive</h4>
                  <p className="mt-1 text-sm text-neutral-500">Strong hold for all-day wear.</p>
                  <p className="mt-1 font-medium text-primary">$10.00</p>
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-neutral-200">
                  <img alt="Lash Applicator" className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqrLSg08Spg_l3SpDT03GIkM2VgjDKND-U4K_x8WIKz_NRXQ_N9Z1Y2Fb8eOmP1Vh0QK7baCiVnNj-HGIjvn1-dvMFi_p73cl5m3wUAjIefDtmk7lfT54a_9FzCOGjJB35Z9q-TzzqWoJ8TOiWwlT5e9UNUZj_bNRTTr3rFWP1b9qWxk7lQOvCT7o-p7zpFHOt8z8SHbBG9edQlZjVkyN0u8hocQU6AUSnbmPg8VU3ZBQkX0VGF7iIuudARbJyFeZcjbLl_Gye5ZU"/>
                </div>
                <div className="mt-3">
                  <h4 className="font-medium text-neutral-800">Lash Applicator</h4>
                  <p className="mt-1 text-sm text-neutral-500">For easy, precise placement.</p>
                  <p className="mt-1 font-medium text-primary">$8.00</p>
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-neutral-200">
                  <img alt="Eyelash Curler" className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAijEhzro9ZT5N4FNQaMx5lqljjvJjBYz5h6399vTHp12Zb3CGg5TZEYa15KeA7CuLDcDtih-NH9OQ0hvnV_zWWQ-6VwY0BHM6beZ7BfkSZ9-R87cqqS_lDWMe8kuVjiqAzYK-VQ3i3gb7RY3JXhiue9FwGXxilkUwEGVx012SLash7eLOHDmmHocKytRCsNDToTuw6pqhbbvF9KrbTSncZ4xlySIt0xOCWSGUMYfGRk5fKo9xa1h9BAGdl2tYz-v3CuKEz0iBxOD0"/>
                </div>
                <div className="mt-3">
                  <h4 className="font-medium text-neutral-800">Eyelash Curler</h4>
                  <p className="mt-1 text-sm text-neutral-500">For a natural, lifted look.</p>
                  <p className="mt-1 font-medium text-primary">$12.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}