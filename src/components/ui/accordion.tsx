"use client"

import * as React from "react";

export function Accordion({ children, ...props }: React.PropsWithChildren<any>) {
  return <div {...props}>{children}</div>;
}

export function AccordionItem({ children, ...props }: React.PropsWithChildren<any>) {
  return <div {...props}>{children}</div>;
}

export function AccordionTrigger({ children, ...props }: React.PropsWithChildren<any>) {
  return <button {...props}>{children}</button>;
}

export function AccordionContent({ children, ...props }: React.PropsWithChildren<any>) {
  return <div {...props}>{children}</div>;
}
