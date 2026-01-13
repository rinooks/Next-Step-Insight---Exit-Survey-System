import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '2026') {
      onLogin();
    } else {
      setError(true);
      setPassword('');
      // Shake effect logic could go here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full animate-fade-in px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-6 shadow-2xl shadow-purple-900/20">
            <Lock className="w-8 h-8 text-purple-300" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">System Access</h1>
          <p className="text-gray-400 text-sm">보안을 위해 관리자 코드를 입력해 주세요.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Access Code"
              className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-center text-white text-lg tracking-[0.5em] placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:tracking-normal placeholder:text-sm"
              autoFocus
            />
            {error && (
              <p className="absolute -bottom-6 left-0 w-full text-center text-red-400 text-xs animate-bounce">
                코드가 올바르지 않습니다.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-900/10"
          >
            <span>접속하기</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-12 flex justify-center gap-6 text-xs text-gray-600">
            <div className="flex items-center gap-1">
                <ShieldCheck size={12} />
                <span>Secure Connection</span>
            </div>
            <span>Reference HRD © 2026</span>
        </div>
      </div>
    </div>
  );
};

export default Login;