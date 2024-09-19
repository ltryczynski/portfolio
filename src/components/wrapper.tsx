import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

type WrapperProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
  props?: React.HTMLProps<HTMLElement>;
};

const Wrapper = forwardRef(function Wrapper(
  { className, children, id = "", ...props }: WrapperProps,
  ref: React.Ref<HTMLElement>
) {
  return (
    <section id={id} className={cn(`w-full relative`, className)} ref={ref} {...props}>
      {children}
    </section>
  );
});

export default Wrapper;
