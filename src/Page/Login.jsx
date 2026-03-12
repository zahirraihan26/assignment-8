import { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        setError("");

        signIn(email, password)
            .then(() => {
                toast.success("Login Successful!");
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLoading(false);
                setError("Invalid email or password");
                toast.error("Login Failed!");
            })
    }
    
    const handleGoogleSignIn = () => {
        setGoogleLoading(true);
        signInWithGoogle()
            .then(() => {
                toast.success("Google Login Successful!");
                navigate(from, { replace: true });
            })
            .catch(err => {
                setGoogleLoading(false);
                setError(err.message);
                toast.error("Google Login Failed!");
            })
    }

    return (
        <div className="min-h-[calc(100vh-[100px])] flex items-center justify-center p-4 bg-[#0a0f1c] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="card w-full max-w-lg glass-panel bg-[rgba(15,17,26,0.6)] border border-[rgba(255,255,255,0.08)] shadow-[0_0_40px_rgba(6,182,212,0.15)] backdrop-blur-xl relative z-10 transition-all duration-300 hover:shadow-[0_0_50px_rgba(6,182,212,0.25)]">
                <form onSubmit={handleLogin} className="card-body p-8 sm:p-10">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                            <span className="text-3xl font-extrabold text-white">H</span>
                        </div>
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tight">
                            Welcome Back
                        </h2>
                        <p className="text-gray-400 mt-2">Log in to continue to Hero.AI</p>
                    </div>
                    
                    <button 
                        type="button" 
                        onClick={handleGoogleSignIn}
                        disabled={googleLoading}
                        className="btn w-full bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] text-white gap-3 rounded-xl min-h-12 h-12 mb-6 shadow-sm transition-all"
                    >
                        {googleLoading ? <Loader2 className="animate-spin w-5 h-5" /> : (
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        )}
                        Continue with Google
                    </button>

                    <div className="divider text-gray-500 before:bg-[rgba(255,255,255,0.1)] after:bg-[rgba(255,255,255,0.1)] text-sm mb-6">OR</div>
                    
                    <div className="form-control mb-4">
                        <label className="label pb-1.5 pt-0">
                            <span className="label-text text-gray-300 font-medium">Email Address</span>
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="mail@example.com" 
                            className="input bg-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.1)] text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl" 
                            required 
                        />
                    </div>

                    <div className="form-control relative mb-2">
                        <label className="label pb-1.5 pt-0">
                            <span className="label-text text-gray-300 font-medium">Password</span>
                        </label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            placeholder="••••••••" 
                            className="input bg-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.1)] text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl pr-12" 
                            required 
                        />
                        <button 
                            type="button"
                            className="absolute right-4 top-[2rem] text-gray-400 hover:text-cyan-400 transition-colors" 
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {error && <div className="text-red-400 bg-red-900/20 border border-red-500/20 rounded-lg p-3 text-sm mt-3 backdrop-blur-md">{error}</div>}

                    <div className="form-control mt-8">
                        <button 
                            className="btn bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-[0_0_20px_rgba(6,182,212,0.4)] rounded-xl min-h-12 h-12 text-base font-medium tracking-wide transition-all"
                            disabled={loading || googleLoading}
                        >
                            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Sign In"}
                        </button>
                    </div>

                    <p className="text-center mt-6 text-gray-400">
                        Don't have an account? <Link to="/register" className="text-cyan-400 font-semibold hover:text-cyan-300 hover:underline transition-all">Create one</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
