import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center px-4 py-20 text-center text-white sm:px-6 lg:px-8" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkqIHBq0XBpPAHiQCORm81eoeNcAlQ4djylcsEnVdLcdYKFkJWKYM86gpL_xgEqT0_qxC1hCHUJkgXNBaztq6kipNhglQFmzxbFTRvqnJhQrRx9bFN6PoT5ITNdsXkwnUbBG90n2mQLEHIRxQbCQocYGpehM_pQuRiq4q89oFhjVw5IVzs16R-lUjDWxWi5zLGf8vK89nG8YmwrpL2LGP2dSA1t40ZKc-4RXhfbwoWs8VFC8P3I2C3Y-suXKmfv-Y8p2Nw_eLRyhs")'}}>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl">Elevate Your Gaze</h1>
          <p className="mt-4 text-base font-light leading-relaxed sm:text-lg">Discover our exquisite collection of false eyelashes, designed to enhance your natural beauty and create captivating looks for every occasion.</p>
          <Button className="mt-8 h-12 min-w-48 text-base font-bold shadow-lg transition-transform hover:scale-105 cursor-pointer ">
            Shop Now
          </Button>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-neutral-900">New Arrivals</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group overflow-hidden rounded-lg border-0 !py-0 !bg-transparent !shadow-none">
              <CardContent className="p-0 ">
                <div 
                  className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDujufskFxZyhQ5BoUUZAwsYNgkHkNKGPzb4eMP9HrpKwFjb523UToJL_t0CUq_z1K_IghWx7bHFJOs5yuoz28I0fdMtPEkOzbk9Refn9SDGbWoqb5yYuI9mAuS8LjlWP1TCQatq8gd-GYsk1V9Vvmr0PqxpVEXqqPxMniQ-OK-KA9zgfeOmukZ5PVMKtwQcmXglfyewQl5zoG_qzMYrXyhTfTybY2b8fEhHNKvn7fVFhYwdT_lzXmc9eqxt_y79iBkrLfclNV9HlU")'}}
                  aria-label="Dramatic Volume false eyelashes"
                />
              </CardContent>
              <CardHeader className="p-4 ">
                <CardTitle className="font-bold text-neutral-900">Dramatic Volume</CardTitle>
                <p className="text-sm text-neutral-500">Achieve a bold, statement-making look.</p>
              </CardHeader>
            </Card>
              <Card className="group overflow-hidden rounded-lg border-0 !py-0 !bg-transparent !shadow-none">
              <CardContent className="p-0">
                <div 
                  className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtpKQ4uVYAz-x3rKmnuCPCKE57nycf6L0moeHQHKaUHVZNXRJ95GSbBPRPcYoelsLZj9DLOA-RJIvZk-BQvlZR31F4c0mDiJ3ZdSr-ILILLcc9WtZ5_B74jeX12wviq-u6SKlaIHguYdA56NyZiwv4vpAObv2mQelyEOcWebzu9Yt8H2vJVUoCORp2Lh9yq1ZJwjDwZD14Fdg5qgBbc5mHJWvA3Mx0JGB7S65d74R_Qy7LMLleC6vWQAN7mxyyXBrNlvDJ0AqS37E")'}}
                  aria-label="Natural Elegance false eyelashes"
                />
              </CardContent>
              <CardHeader className="p-4">
                <CardTitle className="font-bold text-neutral-900">Natural Elegance</CardTitle>
                <p className="text-sm text-neutral-500">Enhance your everyday beauty.</p>
              </CardHeader>
            </Card>
            <Card className="group overflow-hidden rounded-lg border-0 !py-0 !bg-transparent !shadow-none">
              <CardContent className="p-0">
                <div 
                  className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnWj8cWtnQ04YPoR2iLSFDCvfydV-xYksYgORduIPFrqm8BVM6EnNKGzKQJKDtwFCTrlbX52Te-4hdVwPOTHPHhve5uQVOc4WmwURznyydF3BjH_uPjRpu55R7sDaowa700Qi_9Ztpj4EF-hVREs3__OmndHY0ATdrkuQfDdGHvkte3CKPQaoMJZpU5wL3csmMCp0e5EfmDQNS_sSx5ZQ5DFRw5iiBgSSY8sXlyyDsyKUEa1Ppen0SOILRKlIT8ymVIZYlYSnA8Mk")'}}
                  aria-label="Glamorous Flutter false eyelashes"
                />
              </CardContent>
              <CardHeader className="p-4">
                <CardTitle className="font-bold text-neutral-900">Glamorous Flutter</CardTitle>
                <p className="text-sm text-neutral-500">Create a red-carpet-ready look.</p>
              </CardHeader>
            </Card>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-neutral-900">Bestsellers</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group overflow-hidden rounded-lg border-0 !py-0 !bg-transparent !shadow-none">
              <CardContent className="p-0">
                <div 
                  className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9iLfhh8HdW8xepPZ-qOYbzvkuj7jjCovs6r4dC7XMuJ7eO0j3mP2phRONyP8aGJgDxyq9aHPDoh_zExCKwI6IF08F4kbRIdDkRtGcq-8kQrqefdKPTEgxK5-PybaSNe3sElPMZgHu31iukU07SUB9r3X3V1M5GCeoMGRe2onl38CvuDPSllWa62ZZRLZjwZYmYRnd1JeAfaMxgS0dsoSU-Emm_iiLlvnSqLaNbSf2NnQI7Hi989qhgvFOOBvUj9y78Pa47Zxwz2Q")'}}
                  aria-label="Classic Charm false eyelashes"
                />
              </CardContent>
              <CardHeader className="p-4">
                <CardTitle className="font-bold text-neutral-900">Classic Charm</CardTitle>
                <p className="text-sm text-neutral-500">Our most popular style for a timeless, elegant look.</p>
              </CardHeader>
            </Card>
            <Card className="group overflow-hidden rounded-lg border-0 !py-0 !bg-transparent !shadow-none">
              <CardContent className="p-0">
                <div 
                  className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbzxo5F0M6ib_JXm_g3yndoDcT92PH-0ldz4RAQgAWh4AG6ITHuFFVLpkGF_OZ2yvfNvlRkGtiuW0DDuyOv3cRs_U3EZAbjrrH7EsY4olsSRn06rK4SfjrsNgn9ukG8FhTTem9bMbM090Hefi0yEFXnmhs05xaOPpL1LTEpOb7E_5ooDIwpf9uuqA7sc5A_1ZhaRwtG1i4CuMirbfIQDkAO7cWDrqwsJP6wVNMJIvPp8wyOO7tdNHj2BArzrIl4hFTjyqjzh4Xh7A")'}}
                  aria-label="Whisper Soft false eyelashes"
                />
              </CardContent>
              <CardHeader className="p-4">
                <CardTitle className="font-bold text-neutral-900">Whisper Soft</CardTitle>
                <p className="text-sm text-neutral-500">Lightweight and comfortable lashes for a subtle enhancement.</p>
              </CardHeader>
            </Card>
            <Card className="group overflow-hidden rounded-lg border-0 !py-0 !bg-transparent !shadow-none">
              <CardContent className="p-0">
                <div 
                  className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAi8ENBRoaM0QnTVtbbxhiagn1pmn6OzJ2uePnXirbwU5hgMiEbH2DUSo8XP7Q1AHjhI-d6ggzdk0QZtOR-neO7F0XLV6TOzlQdqSpSAYC91POoj1nNZQcJjiz3_JE0fjWAXPcRwU3qkHWNS2zWHKAKP6_StL_UQatbgpAmmGp_fMXtB359SGw5zrp_GTANLoMK4hSbK_jXCs7g-i5VVDmVjVvlrCEIHs2cjwsBHEOSr90pyjzFkxD0hmiP7SFGo-ld6ScIx9Dccy0")'}}
                  aria-label="Midnight Bloom false eyelashes"
                />
              </CardContent>
              <CardHeader className="p-4">
                <CardTitle className="font-bold text-neutral-900">Midnight Bloom</CardTitle>
                <p className="text-sm text-neutral-500">Dark and alluring lashes for a captivating evening look.</p>
              </CardHeader>
            </Card>
          </div>
        </section>

      </div>
    </main>
  );
}
