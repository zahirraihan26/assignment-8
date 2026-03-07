import React from 'react';
import { Link } from 'react-router';
import { Brain, Sparkles, Cpu, Zap, MessageSquare, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import useHooksData from '../Hooks/useHooksData';
import Card from '../Components/Card';
import Loading from '../Components/Loading';

const Home = () => {
  const { appsCard, loadingCard } = useHooksData();
  const featuredApps = appsCard.slice(0, 8);

  const features = [
    { icon: <MessageSquare size={32} className="text-[#06b6d4]" />, title: 'Conversational AI', desc: 'Engage with our advanced models for human-like dialogue.' },
    { icon: <Brain size={32} className="text-[#8b5cf6]" />, title: 'Neural Processing', desc: 'Lightning-fast inference powered by optimized neural networks.' },
    { icon: <Sparkles size={32} className="text-[#06b6d4]" />, title: 'Creative Generation', desc: 'Generate high-quality text, images, and code in seconds.' },
    { icon: <Zap size={32} className="text-[#8b5cf6]" />, title: 'Real-time Analytics', desc: 'Monitor your API usage and model performance instantly.' },
    { icon: <Cpu size={32} className="text-[#06b6d4]" />, title: 'Custom Fine-Tuning', desc: 'Adapt our base models to your specific domain and tasks.' },
    { icon: <Shield size={32} className="text-[#8b5cf6]" />, title: 'Enterprise Security', desc: 'Bank-grade encryption and privacy controls built-in.' },
  ];

  return (
    <div className="relative">
      {/* Background Mesh */}
      <div className="mesh-bg"></div>

      {/* Hero Section */}
      <div className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden flex flex-col items-center text-center px-4">
        {/* Glow behind hero text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-float">
          <Sparkles size={16} className="text-[#06b6d4]" />
          <span className="text-sm font-medium text-gray-300">Announcing GPT-5 Integration</span>
        </div>

        <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 max-w-5xl leading-tight">
          Unlock Next-Gen <br className="hidden md:block" />
          <span className="text-gradient">AI Power</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
          Experience the frontier of artificial intelligence. Build, deploy, and scale intelligent applications with our state-of-the-art models.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md">
          <Link to="/apps" className="btn btn-ai w-full sm:w-auto px-8 h-14 rounded-xl text-lg flex items-center gap-2">
            Explore Models <ArrowRight size={20} />
          </Link>
          <button className="btn w-full sm:w-auto px-8 h-14 rounded-xl bg-transparent border-2 border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.05)] text-white text-lg transition-all">
            Read Docs
          </button>
        </div>

        {/* Mock Setup/Terminal Window */}
        <div className="mt-20 w-full max-w-4xl glass-panel rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] transform perspective-1000 rotate-x-2">
          <div className="flex items-center px-4 py-3 bg-[rgba(0,0,0,0.3)] border-b border-[rgba(255,255,255,0.05)]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-xs text-gray-500 font-mono">terminal ~ bash</div>
          </div>
          <div className="p-6 text-left font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
            <div className="text-gray-400">$ npm install @hero-io/ai-sdk</div>
            <div className="text-gray-400 mt-2">$ npx hero-ai init</div>
            <div className="text-[#06b6d4] mt-2">✨ Initializing AI configurations...</div>
            <div className="text-green-400 mt-1">✓ Setup complete! Ready to generate.</div>
            <div className="text-gray-400 mt-4">
              <span className="text-[#8b5cf6]">import</span> {'{ HeroAI }'} <span className="text-[#8b5cf6]">from</span> '@hero-io/ai-sdk';<br /><br />
              <span className="text-[#8b5cf6]">const</span> ai = <span className="text-[#8b5cf6]">new</span> HeroAI(process.env.API_KEY);<br /><br />
              <span className="text-[#8b5cf6]">const</span> response = <span className="text-[#8b5cf6]">await</span> ai.generate(&#123;<br />
              &nbsp;&nbsp;model: <span className="text-green-300">'hero-pro-latest'</span>,<br />
              &nbsp;&nbsp;prompt: <span className="text-green-300">'Write a highly scalable React app'</span><br />
              &#125;);
            </div>
            <div className="mt-4 flex animate-pulse">
              <div className="w-2 h-5 bg-[#06b6d4]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 border-y border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 mb-2">99.9%</div>
              <div className="text-gray-400 font-medium tracking-wide uppercase">API Uptime</div>
            </div>
            <div className="p-6">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-blue-500 mb-2">5B+</div>
              <div className="text-gray-400 font-medium tracking-wide uppercase">Tokens Processed Daily</div>
            </div>
            <div className="p-6">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-pink-500 mb-2">12ms</div>
              <div className="text-gray-400 font-medium tracking-wide uppercase">Average Latency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for the <span className="text-gradient">Future</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Everything you need to build next-generation applications, integrated into a single seamless platform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl glass-panel-hover group cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6 border border-[rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-[rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, transparent <span className="text-gradient">pricing</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Start for free, scale when you need to.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <div className="glass-panel p-8 rounded-3xl border border-[rgba(255,255,255,0.05)]">
              <h3 className="text-xl font-semibold text-gray-300 mb-2">Hobby</h3>
              <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <p className="text-gray-400 mb-8 border-b border-[rgba(255,255,255,0.1)] pb-8">Perfect for exploring and side projects.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 size={20} className="text-gray-500" /> 100K Tokens/month</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 size={20} className="text-gray-500" /> Standard Models</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 size={20} className="text-gray-500" /> Community Support</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-white font-medium transition-colors">Start Free</button>
            </div>

            {/* Pro */}
            <div className="glass-panel p-8 rounded-3xl border-2 border-[#8b5cf6] relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(139,92,246,0.15)] bg-gradient-to-b from-[rgba(139,92,246,0.05)] to-transparent">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8b5cf6] text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">MOST POPULAR</div>
              <h3 className="text-xl font-semibold text-[#8b5cf6] mb-2">Pro</h3>
              <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <p className="text-gray-400 mb-8 border-b border-[rgba(255,255,255,0.1)] pb-8">For serious builders and startups.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-100"><CheckCircle2 size={20} className="text-[#8b5cf6]" /> 5M Tokens/month</li>
                <li className="flex items-center gap-3 text-gray-100"><CheckCircle2 size={20} className="text-[#8b5cf6]" /> Access to Hero-Pro models</li>
                <li className="flex items-center gap-3 text-gray-100"><CheckCircle2 size={20} className="text-[#8b5cf6]" /> High-priority API</li>
                <li className="flex items-center gap-3 text-gray-100"><CheckCircle2 size={20} className="text-[#8b5cf6]" /> Email Support</li>
              </ul>
              <button className="btn-ai w-full py-4 rounded-xl font-medium">Upgrade to Pro</button>
            </div>

            {/* Enterprise */}
            <div className="glass-panel p-8 rounded-3xl border border-[rgba(255,255,255,0.05)]">
              <h3 className="text-xl font-semibold text-[#06b6d4] mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-6">Custom</div>
              <p className="text-gray-400 mb-8 border-b border-[rgba(255,255,255,0.1)] pb-8">For large scale production workloads.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 size={20} className="text-[#06b6d4]" /> Unlimited Tokens</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 size={20} className="text-[#06b6d4]" /> Dedicated Infrastructure</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 size={20} className="text-[#06b6d4]" /> Fine-tuning support</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 size={20} className="text-[#06b6d4]" /> 24/7 Phone Support</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-white font-medium transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Models (formerly Apps) */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-bold text-4xl md:text-5xl mb-4">Trending <span className="text-gradient">Models</span></h1>
          <p className="text-gray-400 text-lg">Explore the most popular AI applications built on our platform</p>
        </div>

        {loadingCard ? (
          <div className="flex justify-center"><Loading count={8} /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredApps.map((app) => (
              <div className="glass-panel-hover rounded-xl transition-all" key={app.id}>
                <Card app={app} />
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-16">
          <Link to="/apps" className="btn btn-ai px-10 h-14 rounded-xl text-lg flex items-center gap-2">
            View All Models <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

