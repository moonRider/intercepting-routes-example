import type { ReactNode } from "react";

export default function IdLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="flex">
      {children}
      {modal}
    </div>
  );
}
