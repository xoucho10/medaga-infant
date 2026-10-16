import "./globals.css";

export const metadata = { 
  title: "MEDAG Infant and Primary School - Kigulu Iganga | 2026 Admission FREE", 
  description: "MEDAG Infant and Primary School, Kigulu - Iganga along Kaliro Road. Making a Difference, One Child at a Time. Baby to P7, Day & Boarding, Permanent classrooms, Playground with swings, MDD. Call 0704797650 / 0782198528. 2026 Admission FREE." 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}