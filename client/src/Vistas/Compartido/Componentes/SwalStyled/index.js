import Swal from "sweetalert2";

const Modal = Swal.mixin({
  customClass: {
    popup: "rounded-lg p-5 pb-10 font-poppins",
    confirmButton:
      "bg-[#292F53] hover:bg-[#1479FF] py-4 px-8 rounded-lg border-0 text-white font-poppins",
  },
  buttonsStyling: false,
});

export default Modal;
