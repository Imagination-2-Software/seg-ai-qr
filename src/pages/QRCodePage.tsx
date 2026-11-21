import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowLeft, Download, Copy, Check, Printer, Sparkles } from 'lucide-react';

interface QRCodePageProps {
  onBack: () => void;
}

export const QRCodePage: React.FC<QRCodePageProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const qrUrl = typeof window !== 'undefined' ? window.location.origin : 'https://segacademy.in/review';

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(qrUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleDownloadSVG = () => {
    const svgEl = document.getElementById('seg-central-qr');
    if (!svgEl) return;
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'seg-academy-central-qr.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#1C1F26] flex flex-col selection:bg-[#0E1B33] selection:text-[#F7F3EC] pb-12">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#F7F3EC]/90 backdrop-blur-md border-b border-[#E6DFD3] px-4 py-3 print:hidden">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#736B5E] hover:text-[#1C1F26] p-2 rounded-xl hover:bg-[#EFE9DF] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portal</span>
          </button>

          <span className="text-xs font-bold text-[#1C1F26]">
            Reception Desk QR Code
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 py-6 sm:py-8">
        <div className="text-center mb-5 print:hidden">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EFE8DC] text-[#635B4E] text-[11px] font-semibold mb-2 border border-[#E0D7C9]">
            <Sparkles className="w-3 h-3 text-[#B8860B]" />
            <span>Single Centralized QR</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-[#1C1F26] tracking-tight">
            Reception Feedback QR
          </h1>
          <p className="text-xs text-[#736B5E] mt-0.5 max-w-xs mx-auto">
            Place at the reception desk for guests to review any of our five brands.
          </p>
        </div>

        {/* Counter Card Preview (Printable) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          ref={cardRef}
          className="bg-[#FDFCF9] rounded-3xl border border-[#E6DFD3] shadow-md p-6 sm:p-8 text-center relative overflow-hidden"
        >
          {/* Top Decorative Banner */}
          <div className="w-full h-1.5 bg-[#0E1B33] absolute top-0 left-0 right-0" />

          {/* Brand Logo & Heading */}
          <div className="flex flex-col items-center justify-center mb-5 mt-1">
            <img
              src="/SEGAcademy Training Workshop Logo.png"
              alt="SEG Academy"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain mb-1.5"
            />
            <p className="text-[10px] font-bold text-[#736B5E] tracking-widest uppercase mt-0.5">
              Guest Feedback & Reviews
            </p>
          </div>

          {/* QR Code Container */}
          <div className="inline-block p-4 bg-white rounded-2xl border border-[#E6DFD3] shadow-xs mb-5">
            <QRCodeSVG
              id="seg-central-qr"
              value={qrUrl}
              size={190}
              level="H"
              includeMargin={false}
              imageSettings={{
                src: '/brands/seg-mark.png',
                x: undefined,
                y: undefined,
                height: 40,
                width: 40,
                excavate: true,
              }}
            />
          </div>

          <p className="text-xs font-bold text-[#1C1F26] mb-0.5">
            Scan with phone camera
          </p>
          <p className="text-[11px] text-[#736B5E] max-w-xs mx-auto mb-4">
            Select your brand and share your verified experience in 60 seconds.
          </p>

          {/* Five Brand Pills */}
          <div className="pt-3.5 border-t border-[#EFE9DF] flex flex-wrap items-center justify-center gap-1.5">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#EFE9DF] text-[#1C1F26]">
              SEG Academy
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#EFE9DF] text-[#1C1F26]">
              Career Dhara
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#EFE9DF] text-[#1C1F26]">
              Techogies
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#EFE9DF] text-[#1C1F26]">
              SHORAI
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#EFE9DF] text-[#1C1F26]">
              I2S
            </span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-5 print:hidden">
          <button
            type="button"
            onClick={handleDownloadSVG}
            className="py-2.5 px-3 rounded-xl text-xs font-bold text-[#1C1F26] bg-[#FDFCF9] border border-[#E6DFD3] hover:bg-[#EFE9DF] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#736B5E]" />
            <span>Download SVG</span>
          </button>

          <button
            type="button"
            onClick={handleCopyUrl}
            className="py-2.5 px-3 rounded-xl text-xs font-bold text-[#1C1F26] bg-[#FDFCF9] border border-[#E6DFD3] hover:bg-[#EFE9DF] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#736B5E]" />
                <span>Copy URL</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#0E1B33] hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Printer className="w-3.5 h-3.5 text-[#EFE9DF]" />
            <span>Print Tent</span>
          </button>
        </div>
      </main>
    </div>
  );
};
