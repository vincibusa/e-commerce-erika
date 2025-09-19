export default function CartPage() {
  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-neutral-900">Your Cart</h2>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Cart Item 1 */}
          <div className="flex items-center justify-between rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center gap-6">
              <img 
                alt="Fluttery Lashes" 
                className="h-24 w-24 rounded-lg object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL7QEL9v77F8L5v7ifDS8rGPycYtgHT9QopclnqoKclgLJFsv0DyBrWzriXEzEHKs68AJpJ6f3u-4IgFbCe8EXsSnOd2TKWs5cLCM7y2Y6bFT4CG6zCDm3ZZNCKZu9uTBhqP7ayZ31Hwf3CrvD3xaRBe0S9vsmXvBfpqaufbr-E1xPk0WHeiPgKNlf_ouchWBjKjJNoy9WEbKij6xmZovw5QnRWoUQIIV_3SwAVH7lx-PrBeJDZb8bTsb9huz_Wudh4X6v9AZVRvU"
              />
              <div>
                <h3 className="text-lg font-bold text-neutral-900">Fluttery Lashes</h3>
                <p className="text-sm text-neutral-500">Classic Lash</p>
                <p className="mt-1 text-base font-bold text-primary">$25.00</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-full border border-primary/20 bg-background-light">
                <button className="p-2 text-neutral-500 transition-colors hover:text-primary">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </button>
                <input 
                  className="w-8 border-0 bg-transparent text-center text-sm font-bold focus:ring-0" 
                  type="text" 
                  value="2"
                  readOnly
                />
                <button className="p-2 text-neutral-500 transition-colors hover:text-primary">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </button>
              </div>
              <button className="text-neutral-400 transition-colors hover:text-primary">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Cart Item 2 */}
          <div className="flex items-center justify-between rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center gap-6">
              <img 
                alt="Dramatic Lashes" 
                className="h-24 w-24 rounded-lg object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIv86b5E6KxsNNU8YP6fwAMCJSlJoqIlYX_XjVp5ZV4ifM6E6sYEbmujBVhalLXQy2Qb1TbPcJBa6Oh2KI8zge6IYPxPYtQSAoraKEIMOlGOGPz63Q53bHIRayE-dNFFabHb2oZ0Iiny0d6K-eThY1RyFuuL_TfkkInmJpE1Bpa6nWUAYoilLbEPKSiEJXPlfPZ93nZVAJNO8MPfCGlS63riuvrsCpqWBKOxIpf8C5ZXj61Kg-ULJ4p34xWSlPMstV6XGrCY9GTUw"
              />
              <div>
                <h3 className="text-lg font-bold text-neutral-900">Dramatic Lashes</h3>
                <p className="text-sm text-neutral-500">Volume Lash</p>
                <p className="mt-1 text-base font-bold text-primary">$30.00</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-full border border-primary/20 bg-background-light">
                <button className="p-2 text-neutral-500 transition-colors hover:text-primary">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </button>
                <input 
                  className="w-8 border-0 bg-transparent text-center text-sm font-bold focus:ring-0" 
                  type="text" 
                  value="1"
                  readOnly
                />
                <button className="p-2 text-neutral-500 transition-colors hover:text-primary">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </button>
              </div>
              <button className="text-neutral-400 transition-colors hover:text-primary">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-neutral-900">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Subtotal</span>
                <span className="font-medium text-neutral-800">$80.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Shipping</span>
                <span className="font-medium text-neutral-800">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Taxes</span>
                <span className="font-medium text-neutral-800">Calculated at checkout</span>
              </div>
              <div className="border-t border-primary/20 pt-4">
                <div className="flex justify-between text-base font-bold">
                  <span className="text-neutral-900">Total</span>
                  <span className="text-neutral-900">$80.00</span>
                </div>
              </div>
            </div>
            
            {/* Discount Code */}
            <div className="mt-8">
              <form className="flex gap-2">
                <input 
                  className="flex-grow rounded-full border-primary/20 bg-background-light px-4 py-2 text-sm focus:border-primary focus:ring-primary" 
                  placeholder="Discount code" 
                  type="text"
                />
                <button 
                  className="rounded-full bg-primary/20 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary/30" 
                  type="submit"
                >
                  Apply
                </button>
              </form>
            </div>
            
            {/* Checkout Button */}
            <button className="mt-8 w-full transform rounded-full bg-primary py-3 font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/90">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}