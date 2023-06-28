import Swal, { SweetAlertIcon, SweetAlertResult } from "sweetalert2";

export const toastTimer = (
  icon: SweetAlertIcon,
  title: string,
  timer = 2000,
  text?: string
) =>
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
      // @ts-ignore
      toast.addEventListener("click", Swal.close);
    },
  }).fire({
    icon,
    title,
    text,
  });
