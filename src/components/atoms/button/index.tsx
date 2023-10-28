"use client"

export default function CButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-12 py-3 bg-pandan text-white w-fit">
      {children}
    </button>
  )
}