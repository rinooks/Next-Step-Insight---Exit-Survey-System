import React, { useState } from 'react';
import Layout from './components/Layout';
import Welcome from './components/Welcome';
import SurveyForm from './components/SurveyForm';
import Results from './components/Results';
import { SurveyData, Step } from './types';

const INITIAL_DATA: SurveyData = {
  tenure: "",
  department: "",
  primaryReason: "",
  satisfaction: {
    culture: 0,
    compensation: 0,
    growth: 0,
    leadership: 0,
    workLifeBalance: 0,
  },
  openEnded: {
    bestThing: "",
    worstThing: "",
    suggestion: "",
  },
  nps: -1,
};

const App: React.FC = () => {
  const [step, setStep] = useState<Step>(Step.WELCOME);
  const [surveyData, setSurveyData] = useState<SurveyData>(INITIAL_DATA);

  const updateData = (newData: Partial<SurveyData>) => {
    setSurveyData((prev) => ({ ...prev, ...newData }));
  };

  const handleNext = () => {
    if (step === Step.OPEN_ENDED) {
      setStep(Step.ANALYSIS);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(0, prev - 1));
  };

  const handleRestart = () => {
    setSurveyData(INITIAL_DATA);
    setStep(Step.WELCOME);
  };

  return (
    <Layout>
      {step === Step.WELCOME && <Welcome onStart={() => setStep(Step.BASIC_INFO)} />}
      
      {step !== Step.WELCOME && step !== Step.ANALYSIS && (
        <SurveyForm
          data={surveyData}
          updateData={updateData}
          onNext={handleNext}
          onBack={handleBack}
          step={step}
        />
      )}

      {step === Step.ANALYSIS && (
        <Results data={surveyData} onRestart={handleRestart} />
      )}
    </Layout>
  );
};

export default App;