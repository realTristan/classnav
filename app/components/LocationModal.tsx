import Image from "next/image";

interface LocationModalProps {
    img: string;
    description: string;
    step: number;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function LocationModal(props: LocationModalProps) {
    return (
        <div className="fixed left-0 top-0 z-[1055] flex h-full w-full overflow-y-auto overflow-x-hidden outline-none justify-center items-center bg-black/[0.77]" aria-modal="true" onClick={() => props.setShowModal(false)}
            role="dialog" tabIndex={-1}>
            <div
                className="relative flex h-72 w-72 flex-col items-center justify-center rounded-lg bg-slate-900 p-4 xs:h-80 xs:w-80 xs:p-8 sm:h-[28rem] sm:w-[28rem]"
            >
                <Image
                    src={props.img}
                    alt="..."
                    width={1920}
                    height={1080}
                    className="mb-6 h-52 w-72 rounded-lgs sm:h-80 sm:w-96"
                />
                <p className="text-center text-xs font-normal tracking-wider text-white xs:text-sm sm:text-base">
                    <mark className="mr-2 bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text font-semibold tracking-wide text-transparent">
                        Step {props.step}
                    </mark>{" "}
                    {props.description}
                </p>
            </div>
        </div>

    )
}
