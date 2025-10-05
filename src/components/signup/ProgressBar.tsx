interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

export default function ProgressBar({ step, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex justify-center items-center gap-4 mb-6">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const current = index + 1;
        return (
          <div key={index} className="flex items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full font-bold 
              ${
                step >= current
                  ? "bg-primary text-primary-content"
                  : "bg-base-300 text-gray-400"
              }`}
            >
              {current}
            </div>
            {current < totalSteps && (
              <div
                className={`h-1 w-12 ${
                  step > current ? "bg-primary" : "bg-base-300"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
