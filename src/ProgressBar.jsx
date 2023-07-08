import "./App.css";

export default function ProgressBar({ step }) {
  return (
    <div className="w-full bg-neutral-200 mb-10 dark:bg-neutral-600">
      <div
        className="bg-primary h-2 text-center text-xs font-medium leading-none text-primary-100"
        style={{ width: `${step}%` }}
      >
        {step === 100 ? <h1>Thank You</h1> : `Step ${step / 20}`}
      </div>
    </div>
  );
}
