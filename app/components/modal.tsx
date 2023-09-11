import ReactDom from "react-dom";
import Heading from "./heading";
import Button from "./button";
import icon from "../../public/images/icon-success.svg";
import Image from "next/image";
export default function Modal({ open, closeModal, email }: modalProps) {
  if (!open) {
    return null;
  }
  function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }

  createWrapperAndAppendToBody("portal");
  return ReactDom.createPortal(
    <div className="flex justify-center items-center z-1 bg-blue-900 w-full h-full absolute top-0 left-0">
      <div className="bg-white rounded-md w-80 h-80 flex flex-col  p-8 justify-between">
        <Image src={icon} alt="icon"></Image>
        <Heading>Thanks for Subscribing!</Heading>
        <p className="text-xs">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription
        </p>

        <Button handleClick={closeModal} type="submit">
          Dismiss message
        </Button>
      </div>
    </div>,
    document.getElementById("portal")!
  );
}
type modalProps = {
  open: boolean;
  closeModal: Function;
  email: string;
};
