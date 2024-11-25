import { useRef } from "react";
import { StepOneForm } from "../forms/StepOneForm/StepOneForm";
import { StepTwoForm } from "../forms/StepTwoForm/StepTwoForm";
import { InternalNote } from "../forms/InternalNote/InternalNote";
import "./App.css";

export const App = () => {
  const stepTwoRef = useRef<HTMLDivElement>(null);

  const scrollToStepTwo = () => {
    if (stepTwoRef.current) {
      stepTwoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App px-4 md:px-10">
      <StepOneForm onContinue={scrollToStepTwo} />
      <div ref={stepTwoRef}>
        <StepTwoForm />
      </div>
      <InternalNote />
    </div>
  );
};
