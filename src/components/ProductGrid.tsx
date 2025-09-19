import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "Featherlight Natural",
    category: "Natural Lashes",
    price: "$25",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmQ32N4tX25NT5lp96mCnsfg2JPDzUVBURLlaGcuEYTGtBgWsYr8Il4QdiEHSw8gr5l2ZvadDYcdazkfP5llxpFaS7m9jiDcC2MK2YnHdEkaIijCVSkdS3e45NmQ9skEQ9-EdTJ5oaSELM8A01f-N-Tu1z1p1Dzlk2lB4Q3qlCd4HSBVlSZX5kszy74mStwRnw2TI2Xp_MK_KAwjrwMaD3fx4SRvxAn0rclOj1nTzDRveRf84j9a-pOzn_dL3f2CrWOKhYdFBcHK8"
  },
  {
    id: 2,
    name: "Voluminous Glamour",
    category: "Volume Lashes",
    price: "$30",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjBE8Dp-MZ7UUazxITtd21p7-KIiqGDVEVaZR7mHY3KTsvxZ0uosrE-cIfK7oJizOpTTUUGpfxDF5voi4rRlDtH65Nf7ZhncEIINCRi6M0arP8wCNmS2rIn3WRA3Aw4qYxsabJBjy8cSU_tBVofvxDDix9-A_u23Ql-qN8D0wPjytPtHEMr831uvtPo0hrxp5JWLvMrCbugv9ZEPowf_w7Am3P74PhA4OPjTi18o0WkD66-pcUx1xVoUVVXx7bO2QK5pcaY7XweK8"
  },
  {
    id: 3,
    name: "Dramatic Diva",
    category: "Dramatic Lashes",
    price: "$35",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9zLFTv1-TLHyJp4nXNgNYUvCHoEsGEIX5wKs2hyUSGf3U4nvxDe10mHuloGSBJBSxSYUyAzjNjZMf5P-Oi51hZK-OcwhTf9qzWLrz77U4SM3mT1KYUhrDZro79ILN_ySoCRU26Hpfp4ZsoLgWrAxj4sxcWBj68t3ct7C5jpFmNByNQlCD4i7Z8bMoFtWM5KTaJuFcbd282ImIkumjVDMvM1Xu3veL1Dv2E0_bNgLswMXGSL28WbmUvIAfQTB7BEnUHuv_VJufySc"
  },
  {
    id: 4,
    name: "Everyday Chic",
    category: "Natural Lashes",
    price: "$22",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHdsS0-ZsejETqQHqM-mkAIy-TsFTj9vNnw8zeNkJIJmesP6zJ011R9ZVuE-GwKTeEHIozzVleJq3aXADmuT93PmRHqrwBmM8e0e4Cvqn3hks1ZtArVkXpWtUVkNr1FGajN1WQL4hdw6Sss6izB1Iptv4mjTcZnCtcTdV1tjDcsvI_omsHdV4RP4izlmPzh7QZQnK22tsxcH0oaW5oZ3nhBNcFz5lCv3k6NS5KmFcsYY90lQXsZ9gQ5e6_BjMAlaZAEAM0ERklokk"
  },
  {
    id: 5,
    name: "Party Ready",
    category: "Volume Lashes",
    price: "$28",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi3FcX2GP8lqqr7_9MxnXwdGKs9D-6QDU3ruf5syDZ82r9C3g6y9gl5w3qYLEuhKSafQUGV2p4FJnpjLqFu4uRjUvqog_2DCz0V9K6y0TxC4e7mGLWvYYneT8Db3nJe-Kk_SMpdvstLQYMaY47_lU2ltBweZKFlr0_mhJfwOSVd0OQGwccdFkXWy-tZ-Mlap5yWguMrgDUEzlwMXnPNp9BBJoYpm1QVXO1lmGf0n66YvgtFJMlnrNrMJCSsysyGU4qYBBSsQ51i_I"
  },
  {
    id: 6,
    name: "Subtle Enhancement",
    category: "Natural Lashes",
    price: "$20",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx549CG3vZd0lv7MxO9a6crZ5bNOBpvCJwdVLg_OxwJe6VE0B9r_Q2Y8_dymGIy_IsAqmffOL_JZLgK1PTjz3GagEKEAxdsoEr-kFTbEQYJWic9XHO76n9SJ38xMH6q1RVtCy7VuEawfJdbuD_UdwrVvkUNnBvattyDUXV-aOL0K4hhzuSs2kTnoobPpZlI9OaS5K3ECXBaL_CICJnvatPiEgpM9xFLSolMLvWBag5ZhvI4CJ8cOBDP5wXmWBUoXgi58RfV3lHWOI"
  }
];

export default function ProductGrid() {
  return (
    <div className="w-full lg:w-3/4">
      <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">False Eyelashes</h2>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-neutral-700">Categories:</span>
        <button className="rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary hover:bg-primary/30">Natural</button>
        <button className="rounded-full bg-background-light px-4 py-1.5 text-sm font-medium text-neutral-600 ring-1 ring-inset ring-primary/20 hover:bg-primary/10">Volume</button>
        <button className="rounded-full bg-background-light px-4 py-1.5 text-sm font-medium text-neutral-600 ring-1 ring-inset ring-primary/20 hover:bg-primary/10">Dramatic</button>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-primary/20 pt-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-neutral-700">Sort By:</span>
          <button className="rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary hover:bg-primary/30">Popularity</button>
          <button className="rounded-full bg-background-light px-4 py-1.5 text-sm font-medium text-neutral-600 ring-1 ring-inset ring-primary/20 hover:bg-primary/10">Price</button>
          <button className="rounded-full bg-background-light px-4 py-1.5 text-sm font-medium text-neutral-600 ring-1 ring-inset ring-primary/20 hover:bg-primary/10">New Arrivals</button>
        </div>
        <p className="text-sm text-neutral-500">{products.length} products</p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-neutral-200">
              <img 
                className="h-full w-full object-cover object-center group-hover:opacity-75" 
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-neutral-900">
                  <Link href="/product">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-neutral-500">{product.category}</p>
              </div>
              <p className="text-sm font-medium text-primary">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}