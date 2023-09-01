import Image from "next/image";
import { Step } from "../lib/types";
import { ObjectState } from "../lib/state";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface LocationModalProps {
  activeStep: ObjectState<Step | null>;
}

export default function LocationModal(props: LocationModalProps) {
  if (!props.activeStep.value) return <></>;

  return (
    <div
      className="fixed left-0 top-0 z-[1055] flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/[0.77] outline-none"
      aria-modal="true"
      onClick={() => props.activeStep.set(null)}
      role="dialog"
      tabIndex={-1}
    >
      <div className="relative flex h-72 w-72 flex-col items-center justify-center rounded-lg bg-slate-900 p-4 xs:h-80 xs:w-80 xs:p-8 sm:h-[28rem] sm:w-[28rem]">
        <Image
          src={props.activeStep.value.image}
          alt="..."
          width={1920}
          height={1080}
          className="mb-6 h-52 w-72 rounded-lg sm:h-80 sm:w-96"
        />
        <p className="text-center text-xs font-normal tracking-wider text-white xs:text-sm sm:text-base">
          <mark className="mr-2 bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text font-semibold tracking-wide text-transparent">
            Step {props.activeStep.value.index}
          </mark>{" "}
          {props.activeStep.value.description}
        </p>
      </div>
    </div>
  );
}
