import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
