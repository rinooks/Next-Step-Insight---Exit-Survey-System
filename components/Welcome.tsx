import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fade-in py-10">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wide uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          Exit Interview System
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
          Next Step Insight
        </h1>
        <p className="text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
          귀하의 새로운 출발을 응원합니다.<br/>
          지난 여정에서의 소중한 경험과 의견은<br/>
          저희가 더 나은 조직으로 성장하는 밑거름이 됩니다.
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500 bg-black/20 px-4 py-2 rounded-lg">
        <Lock className="w-4 h-4" />
        <span>모든 응답은 철저히 익명으로 처리되며 통계 목적으로만 활용됩니다.</span>
      </div>

      <button
        onClick={onStart}
        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
      >
        설문 시작하기
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default Welcome;