export default function FilterSidebar() {
  return (
    <aside className="w-full lg:w-1/4">
      <div className="sticky top-28 space-y-8">
        <div>
          <h3 className="text-xl font-bold text-neutral-900">Filters</h3>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700" htmlFor="length">Length</label>
              <select className="form-select mt-1 block w-full rounded-lg border border-primary/30 bg-background-light text-neutral-700 focus:border-primary focus:ring-1 focus:ring-primary" id="length">
                <option>Select Length</option>
                <option>Short</option>
                <option>Medium</option>
                <option>Long</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700" htmlFor="style">Style</label>
              <select className="form-select mt-1 block w-full rounded-lg border border-primary/30 bg-background-light text-neutral-700 focus:border-primary focus:ring-1 focus:ring-primary" id="style">
                <option>Select Style</option>
                <option>Natural</option>
                <option>Volume</option>
                <option>Dramatic</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700" htmlFor="material">Material</label>
              <select className="form-select mt-1 block w-full rounded-lg border border-primary/30 bg-background-light text-neutral-700 focus:border-primary focus:ring-1 focus:ring-primary" id="material">
                <option>Select Material</option>
                <option>Mink</option>
                <option>Synthetic</option>
                <option>Silk</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700" htmlFor="price">Price Range</label>
              <div className="relative mt-4 mb-2">
                <div className="relative h-2 rounded-full bg-primary/20">
                  <div className="absolute h-2 rounded-full bg-primary" style={{left: '15%', right: '30%'}}></div>
                  <div className="absolute -top-1 h-4 w-4 rounded-full border-2 border-background-light bg-primary shadow" style={{left: '15%'}}></div>
                  <div className="absolute -top-1 h-4 w-4 rounded-full border-2 border-background-light bg-primary shadow" style={{right: '30%'}}></div>
                </div>
                <div className="mt-2 flex justify-between text-xs text-neutral-500">
                  <span>$10</span>
                  <span>$50</span>
                </div>
              </div>
            </div>
            <button className="w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary/90">Apply Filters</button>
          </div>
        </div>
      </div>
    </aside>
  );
}